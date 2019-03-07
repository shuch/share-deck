const cacheFiles = ['./index.html', 'style.css', 'main.js'];

self.addEventListener('install', function(event) {
  // Perform install steps
  // add file to cache storage
  cache.addAll(cacheFiles)
});