const CACHE_NAME = "crane-site-shell-v4";
const APP_SHELL = [
  "/",
  "/index.html",
  "/styles.css",
  "/theme.js",
  "/app.js",
  "/published-posts.js",
  "/manifest.webmanifest",
  "/assets/site-icon-192.png",
  "/assets/site-icon-512.png",
  "/assets/furina-avatar-pneuma.webp",
  "/assets/furina-avatar-ousia.webp",
  "/assets/blog-studio.webp",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((key) => key !== CACHE_NAME)
        .map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith(networkFirst(event.request, "/"));
    return;
  }

  if (shouldCacheRequest(url)) {
    event.respondWith(networkFirst(event.request));
  }
});

function shouldCacheRequest(url) {
  return APP_SHELL.includes(url.pathname) || url.pathname.startsWith("/post-data/");
}

async function networkFirst(request, fallbackUrl) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || (fallbackUrl ? caches.match(fallbackUrl) : Response.error());
  }
}
