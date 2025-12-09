self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("climax-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./assets/logo.png",
        "./assets/pokeca.png",
        "./assets/duel.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
