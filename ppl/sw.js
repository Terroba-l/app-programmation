const CACHE = 'ppl-masse-v1';
const ASSETS = ['./', './index.html', './manifest.json'];
const EXTRA = ['../icon-192.png', '../icon-512.png', '../img/ill_db_bench.png', '../img/ill_military.png', '../img/ill_lat_raise.png', '../img/ill_pullup.png', '../img/ill_row.png', '../img/ill_cable_row.png', '../img/ill_curl.png', '../img/ill_squat.png', '../img/ill_deadlift.png', '../img/ill_lunge.png', '../img/ill_hyperext.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).then(() => Promise.allSettled(EXTRA.map(u => c.add(u)))))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k.indexOf('ppl-') === 0).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request))); });
