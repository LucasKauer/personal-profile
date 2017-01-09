var CACHE_NAME = 'personal-profile-v3';

var urlsToCache = [
  '/personal-profile',
  'personal-profile/index.html',  
  'personal-profile/stylesheets/main.css',
  'personal-profile/javascripts/jquery-2.1.4.min.js',
  'personal-profile/javascripts/main.js',
  'personal-profile/images/facebook.png',
  'personal-profile/images/github.png',
  'personal-profile/images/linkedin.png',
  'personal-profile/images/mail.png',
  'personal-profile/images/stackoverflow.png',
  'personal-profile/images/whatsapp.png',
  'personal-profile/fonts/Rajdhani/Rajdhani-Regular.ttf'
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
