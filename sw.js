const CACHE = 'lutte-prog-v14';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
const EXTRA = ['./img/tirage_front.jpg', './img/rowing.jpg', './img/sdt_azeri.jpg', './img/zercher.jpg',
  './img/ill_tbar.png', './img/ill_pullover.png', './img/ill_goodmorning.png', './img/ill_snatch.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).then(() => Promise.allSettled(EXTRA.map(u => c.add(u)))))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request))); });