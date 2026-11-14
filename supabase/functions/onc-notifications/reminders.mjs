// Pure date logic shared by the notification sender and its tests.
export const ZONE='America/Toronto';
export function localClock(now=new Date()){
 const parts=Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:ZONE,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now).map(p=>[p.type,p.value]));
 return {date:`${parts.year}-${parts.month}-${parts.day}`,minute:+parts.hour*60+(+parts.minute)};
}
const dayNum=d=>Date.parse(d+'T12:00:00Z')/86400000;
export function occurs(e,date){if(!e.date||e.date>date)return false;return e.repeat==='daily'||(e.repeat==='weekly'&&(dayNum(date)-dayNum(e.date))%7===0)||e.date===date}
export function plannedItems(state,date,person='joint'){
 const result=[],d=new Date(date+'T12:00:00Z'),year=d.getUTCFullYear(),month=d.getUTCMonth()+1,last=new Date(Date.UTC(year,month,0)).getUTCDate();
 if(state.cycleAnchor&&Number.isFinite(dayNum(state.cycleAnchor))&&(dayNum(date)-dayNum(state.cycleAnchor))%14===0)result.push({kind:'payday',title:'Payday',id:'payday'});
 for(const b of state.bills||[]){
 const due=`${year}-${String(month).padStart(2,'0')}-${String(Math.min(Number(b.day),last)).padStart(2,'0')}`;
 const paid=(state.transactions||[]).some(t=>t.type==='bill'&&t.ref===b.id&&(t.billMonth||String(t.date).slice(0,7))===date.slice(0,7));
 if(b.active&&due===date&&!paid)result.push({kind:'bill',id:b.id,title:b.name+(b.confirmed?' due':' · estimated due date')});
 }
 for(const e of state.events||[]){
 if(occurs(e,date)&&(!e.person||e.person==='joint'||e.person===person)&&!state.reminderDone?.[`${e.id}|${date}`])result.push({kind:'event',id:e.id,title:e.name,time:e.time||'',notifyMinutes:e.notifyMinutes??10});
 }
 for(const g of state.goals||[])if(g.active&&g.deadline===date)result.push({kind:'goal',id:g.id,title:g.name+' target date'});
 return result;
}
export function dueNotifications(state,sub,now=new Date()){
 const {date,minute}=localClock(now),items=plannedItems(state,date,sub.person),out=[];
 const [h,m]=sub.daily_time.split(':').map(Number),dailyMinute=h*60+m;
 if(sub.daily_enabled&&minute>=dailyMinute&&minute<dailyMinute+60){
 const counts=[['bill','bill'],['event','reminder'],['goal','goal target'],['payday','payday']].map(([kind,label])=>{const n=items.filter(i=>i.kind===kind).length;return n?`${n} ${label}${n===1?'':'s'}`:''}).filter(Boolean);
 out.push({key:'daily:'+date,title:'Our Next Chapter · Today',body:sub.show_details?(items.length?items.slice(0,4).map(i=>i.title).join(' · '):'A clear day. Open the app to see your progress.'):(counts.length?counts.join(' · ')+'. Open your daily plan.':'Your daily plan is ready. No scheduled items today.')});
 }
 for(const e of items.filter(i=>i.kind==='event'&&i.time&&Number(i.notifyMinutes)>=0)){
 const [eh,em]=e.time.split(':').map(Number),due=eh*60+em-Number(e.notifyMinutes);
 // For reminders whose lead time crosses midnight, alert at midnight.
 const at=Math.max(0,due);
 if(minute>=at&&minute<at+15)out.push({key:`event:${e.id}:${date}:${e.time}:${e.notifyMinutes}`,title:'Our Next Chapter · Reminder',body:sub.show_details?`${e.title} · ${e.time}`:'You have a reminder coming up. Open your daily plan.'});
 }
 return out;
}
export function allowedEndpoint(endpoint){try{const u=new URL(endpoint);return u.protocol==='https:'&&!u.username&&!u.password&&(!u.port||u.port==='443')&&(u.hostname==='web.push.apple.com'||u.hostname==='fcm.googleapis.com'||u.hostname==='updates.push.services.mozilla.com'||u.hostname.endsWith('.notify.windows.com'))}catch{return false}}
