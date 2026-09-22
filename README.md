# AİÖHL REHBERİN

**Sadece çift kanatlılar uçabilir.**

AÖİHL öğrencileri için hazırlanmış mobile-first, kurulabilir resmî kaynak uygulaması. Çıkmış sorular, sözlük, adım adım işlem yolları ve kopyalanabilir oyunlaştırma promptları içerir.

Sayfanın üstündeki görünüm düğmeleri tek bir konuyu gösterir. “Hepsi” seçeneğinde çıkmış sorular tam, diğer bölümler kısa önizleme olarak görünür; “Kur’an kursları için” alanı ana akışta görünmez. Bölüm adresleri paylaşılabilir, yenileme ve geri tuşuyla korunur.

## Kullanım

`index.html` dosyası doğrudan açılabilir. PWA kurulumu ve çevrimdışı önbellek için klasörü yerel veya HTTPS bir web sunucusundan çalıştırın; derleme bağımlılığı yoktur.

Hızlı erişimde resmî kaynaklar kategori başlıkları altında doğrudan listelenir; arama ve filtreleme yoktur.

“AÖİHL nedir?” bölümü okulun açık öğretim yapısını; uzaktan ve yüz yüze dersleri, kredi/dönem/zorunlu ders kavramlarını, bir dönemin akışını, başlangıç adımlarını ve genel mezuniyet çerçevesini açılır başlıklarla açıklar. Çıkmış sorular ana sayfanın başındaki belirgin düğmeden açılır; soru merkezi temel bilgilerden önce gelir.

“Çıkmış sorular” 2023–2026 sınavlarını eğitim yılına göre filtreler ve her dönem için üç oturumun resmî PDF’lerini doğrudan açar. “Sözlük” 32 temel kavramı sade biçimde açıklar; yalnız teknik kavramlarda ölçülü “Bi başka deyişle” benzetmeleri gösterir.

Ana sayfada sayaç yerine bütün alanların doğrudan bölüm düğmeleri vardır. Çıkmış sorular ilk ve en belirgin seçenektir. “Destek ol” penceresi bağış bağlantısı tanımlanana kadar ödeme almaz.

## Ürün yaklaşımı

Site bir başucu kaynağıdır; haber veya bildirim akışı değildir. Kayıt başladı ve en yeni gibi etiketler kullanılmaz. Çalışma fasikülleri kurum tarafından satın alındığından e-kitap ve materyal platformu yönlendirmeleri kaldırılmıştır. Çalışma desteği çıkmış sorular ve fotoğrafla kullanılan hazır promptlardan oluşur. Kalıcı kararlar üst klasördeki `PROJECT_CONTEXT.md` dosyasındadır.

Mobilde bağımsız rehber bilgisi görünür; sözlük tanımları açılır. Ana sayfada kısa bölüm önizlemeleri, ilgili sekmelerde tam içerik görünür. PWA çevrim içiyken dosyaların güncel sürümünü, çevrimdışıyken son kaydedilen sürümünü kullanır.

“İşlem yolları” bölümü; kaldığın dersleri görme, kredi ve mezuniyet durumunu kontrol etme, ders seçme, sınav belgesi alma, e-Sınav randevusu, kayıt durumu, şifre yenileme ve belge alma gibi işlemleri kısa adımlarla açıklar. Tüm işlem yolları doğrudan listelenir; her yol ilgili resmî ekrana ve doğrulama kaynağına bağlanır.

“Kur’an kursları için” sekmesi landing sayfasından ayrı tutulur ve geliştirilecek özel araçlara ayrılmıştır.

“Oyunlaştır” bölümünde öğrenci soruyu elle yazmak yerine soru veya test sayfasının fotoğrafını yapay zekâ aracına yükler ve 12 hazır dönüşüm promptundan birini kopyalar. Yalnız kısa kullanım, kişisel bilgileri kapatma ve doğrulama uyarıları gösterilir.

“Sorulardan sıkıldın mı? Oyunlaştır.” bölümündeki promptlar League of Legends, RPG, dedektiflik, futbol menajerliği ve boss savaşı gibi temalar sunar. Her prompt tek düğmeyle kopyalanabilir.

## Dosyalar

- `index.html` — erişilebilir sayfa yapısı
- `styles.css` — mobile-first arayüz
- `app.js` — kaynaklar, işlem yolları, promptlar, sözlük araması ve sınav yılı filtresi
- `manifest.webmanifest` — kurulabilir uygulama bilgileri
- `service-worker.js` — uygulama kabuğu ve çevrimdışı önbellek
- `offline.html` — çevrimdışı yedek ekranı
- `icons/icon.svg` — uygulama simgesi

## Kaynak politikası

Bağlantılar MEB, AÖİHL, ÖDSGM, EBA'nın resmî sınav PDF'leri, e-Devlet ve resmî uygulama mağazalarındaki MEB geliştirici sayfalarıyla sınırlıdır. Döneme bağlı tarih ve koşullar için işlem yapmadan önce açılan resmî kaynağı esas alın. Bağlantının açılması, içeriğin her öğrenciye uygulanabildiğinin garantisi değildir.

21 Eylül 2026 tarihindeki önceki sürüm denetiminde 81 URL kontrol edilmişti. Sonraki ürün kararıyla A-Okul, EBA kitapları ve diğer materyal platformları kaldırıldı; o denetimin sayıları mevcut sürümün bağlantı sayısı olarak kullanılmamalıdır.

Yerel doğrulama: 320, 390, 768 ve 1280 piksel ekranlarda bölümler; arama/filtreler; 24 oturum PDF bağlantısının listelenmesi; prompt kopyalama ve çevrimdışı PWA açılışı kontrol edilmiştir. `outputs/public/` dağıtım kopyası kaynaklarla eş tutulur. Bu kontrol yeni bir internet yayını anlamına gelmez.
