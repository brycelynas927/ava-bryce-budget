/* Our Next Chapter - private household synchronization layer.
   Uses Supabase Auth and row-level-security-backed RPC with optimistic document revisions.
   Does nothing until our-next-chapter-cloud-config.js supplies a project URL/publishable key. */
(function(w){
'use strict';
const cfg=w.ONC_CLOUD_CONFIG||{};
if(!cfg.url||!cfg.key||!w.supabase||!w.supabase.createClient){
 w.ONC_CLOUD={configured:false}; return;
}
const db=w.supabase.createClient(cfg.url,cfg.key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
const api={configured:true,ready:false,household:null,status:'Sign in to sync',user:null,invite:null,conflict:false};
let hooks=null,revision=0,channel=null,saveTimer=null,busy=false,queued=false,unsynced=false,pendingRemote=null;
const safeString=e=>e?.message||String(e||'Unknown error');
const notify=msg=>{api.status=msg;hooks?.status?.(msg);};
const paint=()=>hooks?.paint?.();
const current=()=>hooks?.get?.();
const copyState=v=>JSON.parse(JSON.stringify(v));
const loading=async()=>{
 const {data,error}=await db.auth.getUser();
 if(error||!data?.user){api.user=null;api.ready=false;api.household=null;notify('Sign in to sync');return}
 api.user=data.user;
 const {data:rows,error:me}=await db.from('onc_members').select('household_id,role').eq('user_id',api.user.id).limit(1);
 if(me){notify('Unable to open household: '+safeString(me));return}
 if(rows?.length){api.household=rows[0].household_id;await pull({joining:false});await listen();}
 else {api.household=null;api.ready=false;notify('Signed in. Create or join a household.')}
 paint();
};
const pull=async({joining=false,force=false}={})=>{
 if(!api.household)return;
 const {data,error}=await db.from('onc_documents').select('content,revision').eq('household_id',api.household).single();
 if(error){notify('Sync read failed: '+safeString(error));return false}
 if(!force&&unsynced&&!joining){api.conflict=true;pendingRemote=data;notify('Your device has unsynced changes. Review before loading cloud data.');paint();return false}
 revision=Number(data.revision);
 api.ready=true; api.conflict=false;pendingRemote=null;queued=false;unsynced=false;
 hooks?.receive?.(copyState(data.content));
 notify('Synced across both phones ✓');
 paint();return true;
};
const listen=async()=>{
 if(channel){await db.removeChannel(channel);channel=null}
 if(!api.household)return;
 channel=db.channel('onc-private-'+api.household).on('postgres_changes',
 {event:'UPDATE',schema:'public',table:'onc_documents',filter:'household_id=eq.'+api.household},
 async payload=>{
  if(!api.ready)return;
  const newRevision=Number(payload.new?.revision);
  if(!Number.isFinite(newRevision)||newRevision<=revision)return;
  if(busy||queued||unsynced){api.conflict=true;pendingRemote=payload.new;notify('A second phone saved while your changes were pending. Review changes.');paint();return}
  // Always fetch the latest authorized document rather than trusting a websocket payload.
  await pull();
 }).subscribe(status=>{if(status==='CHANNEL_ERROR'||status==='TIMED_OUT'){notify('Live updates disconnected — refresh to catch up')}})
};
const saveNow=async()=>{
 if(!api.ready||!api.household||busy||api.conflict)return;
 busy=true;queued=false;
 const version=revision;
 const doc=copyState(current());
 try{
  const {data,error}=await db.rpc('onc_write_document',{p_household:api.household,p_expected:version,p_content:doc});
  if(error)throw error;
  if(Number(data)===-1){api.conflict=true;unsynced=true;notify('Another device saved first — your changes were preserved locally. Resolve the conflict.');paint();return}
  revision=Number(data);
  unsynced=queued;
  notify(queued?'Finishing your changes…':'Synced across both phones ✓');
 }catch(e){unsynced=true;notify('Not synced yet: '+safeString(e)+'. Your changes are saved on this phone.');}
 finally{busy=false;paint();if(queued&&!api.conflict){clearTimeout(saveTimer);saveTimer=setTimeout(saveNow,400)}}
};
api.changed=()=>{
 if(!api.ready||!api.household||api.conflict)return;
 unsynced=true;queued=true;notify('Saving to our shared budget…');
 clearTimeout(saveTimer);saveTimer=setTimeout(saveNow,350);
};
api.init=async callbacks=>{
 hooks=callbacks;paint();
 if(!api.configured)return;
 const {data}=await db.auth.getSession();
 if(data.session)await loading();
 db.auth.onAuthStateChange((_event,session)=>{
  if(session?.user?.id!==api.user?.id) Promise.resolve().then(()=>loading()).catch(e=>notify(safeString(e)));
  else if(!session){api.user=null;api.ready=false;api.household=null;notify('Signed out. Local data is still on this device.');paint()}
 });
 w.addEventListener('online',()=>{if(unsynced&&!api.conflict)api.changed();else if(api.ready)pull()});
 w.addEventListener('focus',()=>{if(api.ready&&!unsynced)pull()});
};
api.signUp=async(email,password)=>{
 const {data,error}=await db.auth.signUp({email:email.trim(),password,options:{emailRedirectTo:w.location.origin+w.location.pathname}});
 if(error)throw error;
 notify(data.session?'Signed in — create your household.':'Check your email to confirm your account, then sign in.');
 if(data.session)await loading();
 paint();
};
api.signIn=async(email,password)=>{
 const {error}=await db.auth.signInWithPassword({email:email.trim(),password});if(error)throw error;await loading();
};
api.signOut=async()=>{
 if(unsynced&&!w.confirm('Unsynced changes are still on this phone. Sign out anyway?'))return;
 if(channel){await db.removeChannel(channel);channel=null}
 const {error}=await db.auth.signOut();if(error)throw error;
 api.user=null;api.ready=false;api.household=null;api.conflict=false;api.invite=null;unsynced=false;
 notify('Signed out');paint();
};
api.create=async()=>{
 if(!api.user)throw Error('Sign in first');
 if(!w.confirm('Use the current data on THIS phone as the starting household budget? Your local data will be saved to the cloud for your invited partner. Export a backup first if needed.'))return;
 const buffer=new Uint8Array(24);w.crypto.getRandomValues(buffer);
 const invite=Array.from(buffer,x=>x.toString(16).padStart(2,'0')).join('');
 const {data,error}=await db.rpc('onc_create_household',{p_content:copyState(current()),p_invite:invite});
 if(error)throw error;
 api.invite=invite;api.household=data;revision=1;api.ready=true;unsynced=false;queued=false;
 await listen();notify('Shared household created ✓ Copy the invitation to your partner.');paint();
};
api.join=async invite=>{
 if(!api.user)throw Error('Sign in first');
 if(!/^[a-f0-9]{48}$/i.test(invite.trim()))throw Error('Paste the full invitation code.');
 if(!w.confirm('Joining will load the existing shared budget on this phone. Your current local-only budget will be replaced in the app. Export a backup of it first if you want to keep it. Continue?'))return;
 const {data,error}=await db.rpc('onc_accept_invite',{p_invite:invite.trim().toLowerCase()});
 if(error)throw error;
 api.household=data;await pull({joining:true});await listen();paint();
};
api.rotateInvite=async()=>{
 if(!api.user||!api.household)throw Error('Sign in and create a household first.');
 const {data,error}=await db.rpc('onc_rotate_invite');
 if(error)throw error;api.invite=data;notify('New invitation ready');paint();
};
api.pullLatest=async()=>{
 if(!api.ready)return;
 if(unsynced&&!w.confirm('Discard unsynced local edits and load the newest shared budget? Consider exporting a local backup first.'))return;
 unsynced=false;api.conflict=false;queued=false;await pull({force:true});
};
api.retry=async()=>{if(api.conflict){notify('Resolve the conflict before saving again');return}queued=true;await saveNow()};
api.close=async()=>{if(channel)await db.removeChannel(channel)};
w.ONC_CLOUD=api;
})(window);
