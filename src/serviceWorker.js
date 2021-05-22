var CACHE_NAME = "covid-tracker";
var urlsToCache = ["/", "/completed", "/build"];

// Install a service worker
window.self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(urlsToCache)
    })
  )
})

window.self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})