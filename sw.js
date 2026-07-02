const CACHE = "tidgo-pwa-v44";
const ASSETS = [
  "./",
  "./index.html",
  "./app/index.html",
  "./accountant/index.html",
  "./app-demo/index.html",
  "./accountant-demo/index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./tidgo-icon-source.png",
  "./assets/demo/user-home.jpg",
  "./assets/demo/user-receipt-photo.jpg",
  "./assets/demo/user-edit-details.jpg",
  "./assets/demo/user-summary.jpg",
  "./assets/demo/accountant-login.jpg",
  "./assets/demo/accountant-client-list.jpg",
  "./assets/demo/accountant-client-record.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) {
    event.respondWith(fetch(event.request));
    return;
  }
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).catch(() => caches.match("./index.html")));
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).catch(() => {
      if (event.request.mode === "navigate") return caches.match("./index.html");
      return cached;
    }))
  );
});





