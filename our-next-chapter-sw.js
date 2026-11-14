// Only notification events; the budget always loads the current online version.
self.addEventListener('push',event=>{
 let data={};try{data=event.data?.json()||{}}catch(_e){}
 event.waitUntil(self.registration.showNotification(data.title||'Our Next Chapter',{
 body:data.body||'Your daily plan is ready.',icon:'./our-next-chapter-icon-v2.png',badge:'./our-next-chapter-icon-v2.png',tag:data.tag||'onc-update',data:{url:'./our-next-chapter.html#today'}
 }));
});
self.addEventListener('notificationclick',event=>{
 event.notification.close();
 event.waitUntil((async()=>{
 const url=new URL('./our-next-chapter.html#today',self.location.href).href;
 const windows=await clients.matchAll({type:'window',includeUncontrolled:true});
 const existing=windows.find(w=>new URL(w.url).pathname===new URL(url).pathname);
 if(existing){await existing.navigate(url);await existing.focus()}else await clients.openWindow(url);
 })());
});
