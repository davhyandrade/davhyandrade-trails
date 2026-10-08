/* global self, clients */

const CACHE_VERSION = 'trilhas-v1';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const OFFLINE_URL = '/offline';
const PUBLIC_PAGES = ['/', '/adicionar', OFFLINE_URL];
const STATIC_URLS = [
  '/manifest.webmanifest',
  '/favicon.svg',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/icon-maskable-512x512.png',
];

async function fetchPublicResource(url) {
  const response = await fetch(new Request(url, { credentials: 'omit' }));
  if (!response.ok) throw new Error(`Falha ao armazenar ${url}`);
  return response;
}

async function precachePage(cache, url) {
  const response = await fetchPublicResource(url);
  await cache.put(url, response.clone());

  const html = await response.text();
  const assetUrls = [
    ...new Set(
      Array.from(
        html.matchAll(/(?:src|href)=["']([^"']*\/_next\/static\/[^"']+)["']/g),
        match => new URL(match[1], self.location.origin).pathname,
      ),
    ),
  ];

  await Promise.all(
    assetUrls.map(async assetUrl => {
      if (await cache.match(assetUrl)) return;
      const assetResponse = await fetchPublicResource(assetUrl);
      await cache.put(assetUrl, assetResponse);
    }),
  );
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache =>
      Promise.all([
        ...PUBLIC_PAGES.map(url => precachePage(cache, url)),
        ...STATIC_URLS.map(async url => {
          const response = await fetchPublicResource(url);
          await cache.put(url, response);
        }),
      ]),
    ),
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      caches
        .keys()
        .then(keys =>
          Promise.all(
            keys
              .filter(key => key !== STATIC_CACHE)
              .map(key => caches.delete(key)),
          ),
        ),
      clients.claim(),
    ]),
  );
});

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

function isCacheableResponse(response) {
  if (!response || !response.ok || response.type !== 'basic') return false;

  const cacheControl = response.headers.get('Cache-Control') || '';
  const hasSetCookie = response.headers.has('Set-Cookie');

  return !hasSetCookie && !/private|no-store/i.test(cacheControl);
}

function isAuthenticatedRequest(request) {
  return request.headers.has('Authorization');
}

async function networkFirst(request) {
  try {
    return await fetch(request);
  } catch {
    return (await caches.match(request)) || (await caches.match(OFFLINE_URL));
  }
}

async function trimCache(cache, maxEntries) {
  const keys = await cache.keys();
  await Promise.all(
    keys
      .slice(0, Math.max(0, keys.length - maxEntries))
      .map(key => cache.delete(key)),
  );
}

async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request);
  const networkResponse = fetch(request)
    .then(async response => {
      if (isCacheableResponse(response)) {
        const cache = await caches.open(STATIC_CACHE);
        await cache.put(request, response.clone());
        await trimCache(cache, 80);
      }
      return response;
    })
    .catch(() => undefined);

  return cachedResponse || networkResponse;
}

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  if (
    request.method !== 'GET' ||
    url.origin !== self.location.origin ||
    isAuthenticatedRequest(request) ||
    url.pathname.startsWith('/api/') ||
    request.headers.get('RSC') === '1'
  ) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }

  if (
    url.pathname.startsWith('/_next/static/') ||
    ['style', 'script', 'image', 'font'].includes(request.destination)
  ) {
    event.respondWith(staleWhileRevalidate(request));
  }
});
