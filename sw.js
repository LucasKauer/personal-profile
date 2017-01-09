var CACHE_NAME = 'personal-profile-v3';

var urlsToCache = [
  '/',
  '/index.html',  
  '/stylesheets/main.css',
  '/javascripts/jquery-2.1.4.min.js',
  '/javascripts/main.js',
  '/images/facebook.png',
  '/images/github.png',
  '/images/linkedin.png',
  '/images/mail.png',
  '/images/stackoverflow.png',
  '/images/whatsapp.png',
  '/fonts/Rajdhani/Rajdhani-Regular.ttf'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
