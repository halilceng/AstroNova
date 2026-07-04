const CACHE_NAME = 'astronova-v5';

// Sadece kesin olarak var olan dosyaları listeliyoruz
const urlsToCache = [
    './index.html',
    './style.css',
    './script.js'
];

// 1. Yükleme (Install) Olayı
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Önbellek açıldı, dosyalar kaydediliyor...');
            return cache.addAll(urlsToCache);
        })
        .catch(function(err) {
            console.log('Dosyalar önbelleğe alınırken hata oluştu:', err);
        })
    );
});

// 2. Etkinleştirme (Activate) Olayı - Eski önbellekleri temizler
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cache) {
                    if (cache !== CACHE_NAME) {
                        console.log('Eski önbellek silindi:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// 3. Mesaj (Message) Olayı - Güncelleme butonuna basılınca tetiklenir
self.addEventListener('message', function(event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

// 4. Yakalama (Fetch) Olayı - Çevrimdışı çalışması için
self.addEventListener('fetch', function(event) {
    // ÖNEMLİ: Sadece GET isteklerini yakala (Google Analytics gibi POST isteklerini atla)
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Önbellekte varsa onu ver
            if (response) {
                return response;
            }
            // Yoksa internetten indirmeye çalış
            return fetch(event.request).catch(function() {
                console.log('İnternet bağlantısı yok ve dosya önbellekte bulunamadı.');
            });
        })
    );
});