(function(w){
'use strict';
let hooks={},reg=null,sub=null,record=null,busy=false,message='';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const api={};
const ios=()=>/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
const installed=()=>w.matchMedia('(display-mode: standalone)').matches||navigator.standalone;
const supported=()=>('serviceWorker' in navigator)&&('PushManager' in w)&&('Notification' in w);
const cloud=()=>w.ONC_CLOUD;
const panel=()=>document.getElementById('phone-notifications');
const say=s=>{message=s;hooks.toast?.(s);paint()};
const current=()=>record?.person||hooks.person?.()||'';
function paint(){const p=panel();if(!p)return;
 const connected=!!cloud()?.ready&&!!cloud()?.household;
 const blocked=ios()&&!installed();
 const status=message||(record?.enabled?'Notifications enabled on this phone':blocked?'Add this app to your iPhone Home Screen first':!supported()?'Phone notifications are unavailable in this browser':!connected?'Connect your shared budget before enabling notifications':'Notifications are off on this phone');
 p.innerHTML='<div class="sectionhead"><h2>🔔 Phone notifications</h2></div><div class="card" style="padding:15px"><p class="small">'+esc(status)+'</p>'+
 (blocked?'<div class="help">In Safari, open Share → Add to Home Screen. Open the app from that icon, then enable notifications here.</div>':'')+
 '<form id="push-options"><div class="field"><label>This phone belongs to</label><select name="pushPerson"><option value="">Choose a person</option>'+['ava','bryce'].map(id=>'<option value="'+id+'" '+(current()===id?'selected':'')+'>'+({ava:'Ava',bryce:'Bryce'})[id]+'</option>').join('')+'</select></div>'+
 '<label class="switchline">Daily summary <input type="checkbox" name="pushDaily" '+(record?.daily_enabled!==false?'checked':'')+'></label>'+
 '<div class="field" style="margin-top:12px"><label>Summary time · Toronto time</label><input type="time" name="pushTime" value="'+esc(record?.daily_time||'08:00')+'" required></div>'+
 '<label class="switchline">Show reminder titles in notifications <input type="checkbox" name="pushDetails" '+(record?.show_details?'checked':'')+'></label>'+
 '<p class="tiny muted">Timed reminder alerts also arrive on this phone. Delivery is usually within a few minutes and can be delayed by your phone or connection. Titles are hidden unless enabled above.</p>'+
 '<div class="mini-actions"><button type="button" class="solid" data-push="'+(record?.enabled?'save':'enable')+'" '+(busy||blocked||!supported()||!connected?'disabled':'')+'>'+(busy?'Working…':record?.enabled?'Save notification settings':'Enable on this phone')+'</button>'+
 (record?.enabled?'<button type="button" class="outline" data-push="test" '+(busy?'disabled':'')+'>Send test</button><button type="button" class="text-btn" data-push="disable" '+(busy?'disabled':'')+'>Turn off</button>':'')+'</div></form></div>';
}
const expectedScope=()=>new URL('./our-next-chapter.html',location.href).href;
async function registration(){if(!reg||reg.scope!==expectedScope())reg=await navigator.serviceWorker.register('./our-next-chapter-sw.js',{scope:'./our-next-chapter.html'});if(!reg.active)await new Promise((resolve,reject)=>{const worker=reg.installing||reg.waiting;if(!worker)return reject(Error('Reopen the app and try again'));const timeout=setTimeout(()=>reject(Error('Notification setup timed out. Try again.')),10000);worker.addEventListener('statechange',()=>{if(worker.state==='activated'){clearTimeout(timeout);resolve()}})});return reg}
function options(){const f=document.getElementById('push-options');return {person:f.elements.pushPerson.value,daily_time:f.elements.pushTime.value||'08:00',daily_enabled:f.elements.pushDaily.checked,show_details:f.elements.pushDetails.checked}}
async function enable(saveOnly=false){
 const c=cloud(),o=options();if(!c?.ready||!c.household)throw Error('Sign in and connect the shared budget first');
 if(!['ava','bryce'].includes(o.person))throw Error('Choose whose phone this is');
 if(!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(o.daily_time))throw Error('Choose a valid summary time');
 if(ios()&&!installed())throw Error('Open the app from its Home Screen icon first');
 if(!supported())throw Error('This browser does not support phone notifications');
 // Permission is requested only after the person's explicit Enable tap.
 if(!saveOnly){const permission=await Notification.requestPermission();if(permission!=='granted')throw Error('Notifications were not allowed. You can change this in your phone’s settings.');}
 await registration();sub=await reg.pushManager.getSubscription();
 if(!sub){if(saveOnly)throw Error('Enable notifications again on this phone');const key=w.ONC_CLOUD_CONFIG?.pushKey;if(!key)throw Error('Notification setup is not ready');const padding='='.repeat((4-key.length%4)%4),raw=atob((key+padding).replace(/-/g,'+').replace(/_/g,'/'));sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:Uint8Array.from(raw,c=>c.charCodeAt(0))})}
 record=await c.savePush({...o,subscription:sub.toJSON(),endpoint:sub.endpoint,enabled:true});message='Notifications enabled for '+({ava:'Ava',bryce:'Bryce'})[o.person]+' on this phone';
}
api.disable=async()=>{
 try{if(!sub&&supported()){reg=await navigator.serviceWorker.getRegistration(new URL('./our-next-chapter.html',location.href).href);if(reg&&reg.scope!==expectedScope())reg=null;sub=await reg?.pushManager.getSubscription()}if(sub){try{await cloud()?.removePush?.(sub.endpoint)}finally{await sub.unsubscribe()}}}
 finally{sub=null;record=null;message='Notifications turned off on this phone';paint()}
};
api.mount=()=>{if(!panel())return;paint();if(busy||!cloud()?.ready||!supported())return;
 (async()=>{reg=await navigator.serviceWorker.getRegistration(new URL('./our-next-chapter.html',location.href).href);if(reg&&reg.scope!==expectedScope())reg=null;sub=await reg?.pushManager.getSubscription();record=sub?await cloud().getPush(sub.endpoint):null;paint()})().catch(()=>{message='Could not check this phone’s notifications. Try again when online.';paint()})
};
api.init=h=>{hooks=h;api.mount()};
document.addEventListener('click',async e=>{const b=e.target.closest('[data-push]');if(!b||busy)return;const a=b.dataset.push;
 try{busy=true;
 // Read the form before paint can replace it.
 if(a==='enable'||a==='save'){const promise=enable(a==='save');b.disabled=true;await promise;say('Notification settings saved ✓')}
 else if(a==='disable'){await api.disable();say('Notifications turned off on this phone')}
 else if(a==='test'){await cloud().testPush(record.id);say('Test notification sent — check this phone')}
 }catch(err){say(err?.message||'Could not update notifications')}
 finally{busy=false;paint()}
});
w.ONC_PUSH=api;
})(window);
