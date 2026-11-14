import {createClient} from 'npm:@supabase/supabase-js@2.118.0';
import webpush from 'npm:web-push@3.6.7';
import {dueNotifications,allowedEndpoint} from './reminders.mjs';
const APP='https://brycelynas927.github.io/ava-bryce-budget/our-next-chapter.html';
const ORIGIN='https://brycelynas927.github.io';
const headers={'Access-Control-Allow-Origin':ORIGIN,'Access-Control-Allow-Headers':'authorization, apikey, content-type, x-client-info','Content-Type':'application/json','Vary':'Origin'};
const reply=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers});
Deno.serve(async req=>{
 if(req.method==='OPTIONS')return new Response(null,{status:204,headers});
 if(req.method!=='POST')return reply({error:'POST required'},405);
 const db=createClient(Deno.env.get('SUPABASE_URL')!,Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,{auth:{persistSession:false,autoRefreshToken:false}});
 try{
 const {data:cfg,error:ce}=await db.rpc('onc_notification_server_config');if(ce||!cfg)throw Error('Notification configuration unavailable');
 const cron=req.headers.get('x-onc-cron')===cfg.cron_secret;
 let rows:any[]=[],test=false;
 if(cron){const {data,error}=await db.from('onc_push_subscriptions').select('*').eq('enabled',true).limit(100);if(error)throw error;rows=data||[]}
 else{
 const token=req.headers.get('authorization')?.replace(/^Bearer\s+/i,'')||'';
 const {data:user,error:ue}=await db.auth.getUser(token);if(ue||!user.user)return reply({error:'Sign in first'},401);
 const body=await req.json();if(body.action!=='test'||typeof body.id!=='string')return reply({error:'Invalid request'},400);
 const {data,error}=await db.from('onc_push_subscriptions').select('*').eq('id',body.id).eq('user_id',user.user.id).eq('enabled',true).single();
 if(error||!data)return reply({error:'This phone is not subscribed'},404);rows=[data];test=true;
 // Test pushes are limited to one a minute per phone.
 const key='test:'+Math.floor(Date.now()/60000);const {error:rate}=await db.from('onc_push_deliveries').insert({subscription_id:data.id,delivery_key:key});if(rate)return reply({error:'Wait one minute before another test'},429);
 }
 let sent=0,failed=0;
 for(const sub of rows){
 if(!allowedEndpoint(sub.endpoint)){failed++;continue}
 const {data:document,error:de}=await db.from('onc_documents').select('content').eq('household_id',sub.household_id).single();if(de||!document){failed++;continue}
 const notifications=test?[{key:'test',title:'Our Next Chapter',body:'Notifications are connected on this phone ♡'}]:dueNotifications(document.content,sub);
 for(const n of notifications){
 if(!test){const {error:claim}=await db.from('onc_push_deliveries').insert({subscription_id:sub.id,delivery_key:n.key});if(claim)continue}
 try{
 const request=webpush.generateRequestDetails(sub.subscription,JSON.stringify({title:n.title,body:n.body,tag:n.key,url:APP+'#today'}),{vapidDetails:{subject:ORIGIN,publicKey:cfg.public_key,privateKey:cfg.private_key},TTL:3600,urgency:'normal'});
 const res=await fetch(request.endpoint,{method:request.method,headers:request.headers,body:request.body,redirect:'error',signal:AbortSignal.timeout(10000)});
 if(res.ok){sent++}
 else if(res.status===404||res.status===410){await db.from('onc_push_subscriptions').delete().eq('id',sub.id);failed++;break}
 else throw Error('Push service unavailable');
 }catch(_err){failed++;if(!test)await db.from('onc_push_deliveries').delete().eq('subscription_id',sub.id).eq('delivery_key',n.key)}
 }
 }
 if(cron)await db.from('onc_push_deliveries').delete().lt('created_at',new Date(Date.now()-30*86400000).toISOString());
 return reply({sent,failed},test&&failed?502:200);
 }catch(_err){return reply({error:'Notifications are temporarily unavailable. Your budget is unchanged.'},500)}
});
