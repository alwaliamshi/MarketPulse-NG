const CACHE_NAME = 'marketpulse-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './image.png'
];

// Install Event
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Fetch Event (Allows the app to load from cache if offline)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});