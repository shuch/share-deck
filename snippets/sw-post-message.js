// 新的 Service Worker 更新时，进入激活状态后，会触发 activate 事件
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function (cache) {
        // delete old cache
      })
      .then(function () {
        // new service worker 
        return self.clients.matchAll()
          .then(function (clients) {
              if (clients && clients.length) {
                clients.forEach(function (client) {
                  // send message to open page
                  client.postMessage('sw.update');
                })
              }
          })
      })
  );
})