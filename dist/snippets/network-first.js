self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .then(function (response) => {
        var responseToCache = response.clone();

        caches.open(CACHE_NAME)
          .then(function(cache) {
            cache.put(event.request, responseToCache);
          });
      })
      .catch(function() {
        return caches.open(CACHE_NAME).then(function(cache) => {
          return cache.match(event.request);
        })
      })
  );
});