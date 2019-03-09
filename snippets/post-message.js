navigator.serviceWorker.addEventListener('message', function (e) {
  if (e.data === 'sw.update') {
    // show toast and reload
  }
});
