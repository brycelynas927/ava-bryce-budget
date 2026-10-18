const CACHE='our-grocery-plan-v13';
const ASSETS=['./','./index.html','./sourced-recipes.js','./sourced-recipes-21-40.js','./sourced-recipes-41-60.js','./sourced-recipes-61-100.js','./sourced-recipes-61-100-static.js','./sourced-recipes-61-100-overrides.js','./manifest.webmanifest','./icon.svg','./images/honey-garlic-chicken.webp','./images/creamy-chicken-pasta.webp','./images/chicken-fajitas.webp','./images/bbq-chicken-sandwich.webp','./images/cheesy-chicken-rice.webp','./images/beef-stroganoff.webp','./images/beef-tacos.webp'];
self.addEventListener('install',e=>e.waitUntil(
 caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())
));
self.addEventListener('activate',e=>e.waitUntil(
 caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('our-grocery-plan-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())
));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const url=new URL(e.request.url);
 // Never return cached HTML in place of external recipe JSON or photos.
 if(url.origin!==self.location.origin)return;
 e.respondWith(
  fetch(e.request).then(response=>{
   if(response.ok&&response.type==='basic'){
     const copy=response.clone();
     e.waitUntil(caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{}));
   }
   return response;
  }).catch(()=>caches.match(e.request).then(hit=>hit||(e.request.mode==='navigate'?caches.match('./index.html'):Response.error())))
 );
});
