// Minimální service worker: umožní instalaci; bez internetu ukáže zprávu. Data nikdy neukládá do cache.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response('<meta charset="utf-8"><meta name="viewport" content="width=device-width"><body style="font-family:sans-serif;text-align:center;padding:40px"><h2>Bez připojení</h2><p>Aplikace potřebuje internet. Zkontrolujte připojení a otevřete ji znovu.</p>', { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
