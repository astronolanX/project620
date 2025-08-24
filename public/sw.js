const CACHE_NAME = 'project620-v1';
const RUNTIME_CACHE = 'runtime-cache-v1';

const STATIC_ASSETS = [
  '/',
  '/favicon.ico',
  '/_astro/',
  '/assets/'
];

const CACHE_STRATEGIES = {
  networkFirst: [
    '/',
    '/blog/',
    '/projects/',
    '/case-studies/'
  ],
  cacheFirst: [
    /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/,
    /\.(?:woff|woff2|ttf|otf|eot)$/,
    /\/_astro\//,
    /\/assets\//
  ],
  staleWhileRevalidate: [
    /\.(?:js|css)$/,
    /\.(?:json)$/
  ]
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(['/']);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE;
          })
          .map((cacheName) => {
            return caches.delete(cacheName);
          })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') {
    return;
  }

  if (url.origin !== location.origin) {
    return;
  }

  const isCacheFirst = CACHE_STRATEGIES.cacheFirst.some((pattern) => {
    if (typeof pattern === 'string') {
      return url.pathname.startsWith(pattern);
    }
    return pattern.test(url.pathname);
  });

  if (isCacheFirst) {
    event.respondWith(cacheFirst(request));
    return;
  }

  const isNetworkFirst = CACHE_STRATEGIES.networkFirst.some((pattern) => {
    if (typeof pattern === 'string') {
      return url.pathname === pattern || url.pathname.startsWith(pattern);
    }
    return pattern.test(url.pathname);
  });

  if (isNetworkFirst) {
    event.respondWith(networkFirst(request));
    return;
  }

  const isStaleWhileRevalidate = CACHE_STRATEGIES.staleWhileRevalidate.some((pattern) => {
    if (typeof pattern === 'string') {
      return url.pathname.startsWith(pattern);
    }
    return pattern.test(url.pathname);
  });

  if (isStaleWhileRevalidate) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  event.respondWith(networkFirst(request));
});

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const offlinePage = await cache.match('/');
    if (offlinePage) {
      return offlinePage;
    }
    throw error;
  }
}

async function networkFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    
    const offlinePage = await cache.match('/');
    if (offlinePage) {
      return offlinePage;
    }
    throw error;
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  
  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  });

  return cached || fetchPromise;
}