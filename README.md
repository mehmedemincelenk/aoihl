# AİÖHL REHBERİN

**Sadece çift kanatlılar uçabilir.**

AÖİHL öğrencileri için hazırlanmış mobile-first, kurulabilir resmî kaynak uygulaması. Çıkmış sorular, sözlük, adım adım işlem yolları ve kopyalanabilir oyunlaştırma promptları içerir.

Sayfanın üstündeki görünüm düğmeleri tek bir konuyu gösterir. “Hepsi” seçeneği klasik landing page görünümüne döner; yalnızca kurs görevlilerine ayrılan “Kur’an kursları için” alanını göstermez.

## Kullanım

`index.html` dosyası doğrudan açılabilir. PWA kurulumu ve çevrimdışı önbellek için klasörü yerel veya HTTPS bir web sunucusundan çalıştırın; derleme bağımlılığı yoktur.

Arama; kaynak başlığı, açıklaması, alan adı ve görünmeyen etiketlerde çalışır. Yatay kategori düğmeleri listeyi konuya göre filtreler.

“AÖİHL nedir?” bölümü okulun açık öğretim yapısını; uzaktan ve yüz yüze dersleri, kredi/dönem/zorunlu ders kavramlarını, bir dönemin akışını, başlangıç adımlarını ve genel mezuniyet çerçevesini sıfırdan açıklar. Bölümün en görünür alanı, en güncel resmî soru kitapçıkları ile ÖDSGM sınav arşivine giden “Çıkmış Sorular” kartıdır.

“Çıkmış Sorular Merkezi” 2023–2026 sınavlarını eğitim yılına göre filtreler ve her dönem için üç oturumun resmî PDF’lerini doğrudan açar. “AÖİHL Sözlüğü” 32 temel kavramı sade biçimde açıklar; yalnız teknik kavramlarda ölçülü “Bi başka deyişle” benzetmeleri gösterir.

Ana sayfadaki sayaç, resmî duyuruda ilan edilen 20 Aralık 2026 yüz yüze sınavına kalan gün, saat ve dakikayı gösterir. Üst menüdeki “Destek ol” penceresi bağış bağlantısı tanımlanana kadar ödeme almaz; rehberi paylaşma seçeneği sunar.

“Aradığını bulamadın mı?” bölümü; kaldığın dersleri görme, kredi ve mezuniyet durumunu kontrol etme, ders seçme, sınav belgesi alma, e-Sınav randevusu, kayıt durumu, şifre yenileme ve belge alma gibi işlemleri kısa adımlarla açıklar. Bölümün kendi araması ve kategori filtreleri vardır; her yol doğrudan ilgili resmî ekrana ve doğrulama kaynağına bağlanır.

“Kur’an kursları için” sekmesi landing sayfasından ayrı tutulur ve geliştirilecek özel araçlara ayrılmıştır.

“Soru aynı, hikâye daha eğlenceli” bölümünde öğrenci soruyu elle yazmak yerine soru veya test sayfasının fotoğrafını yapay zekâ aracına yükler ve 12 hazır dönüşüm promptundan birini kopyalar. Fotoğraf çekme, kişisel bilgileri kapatma ve üretilen soruyu doğrulama yönlendirmeleri gösterilir.

“Sorulardan sıkıldın mı? Oyunlaştır.” bölümündeki promptlar League of Legends, RPG, dedektiflik, futbol menajerliği ve boss savaşı gibi temalar sunar. Her prompt tek düğmeyle kopyalanabilir.

## Dosyalar

- `index.html` — erişilebilir sayfa yapısı
- `styles.css` — mobile-first arayüz
- `app.js` — kaynaklar, işlem yolları, promptlar, arama ve kategori filtreleri
- `manifest.webmanifest` — kurulabilir uygulama bilgileri
- `service-worker.js` — uygulama kabuğu ve çevrimdışı önbellek
- `offline.html` — çevrimdışı yedek ekranı
- `icons/icon.svg` — uygulama simgesi

## Kaynak politikası

Bağlantılar MEB, AÖİHL, ÖDSGM, A-Okul, EBA, e-Devlet ve resmî uygulama mağazalarındaki MEB geliştirici sayfalarıyla sınırlıdır. Bağlantılar 21 Eylül 2026 tarihinde kontrol edilmiştir. Döneme bağlı tarih ve koşullar değişebileceği için işlem yapmadan önce açılan resmî sayfadaki güncel duyuru esas alınmalıdır.
