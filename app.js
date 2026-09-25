/**
 * PROTECT FIRST MIMARISI
 * Her sistem ozelligi, kaynak, sinav ve bilgi maddesi "verified: boolean" (Onaylandi)
 * alanina sahiptir. Inceleyip dogrulugunu teyit ettikten sonra "verified: true" yapabilirsiniz.
 */
const FEATURES = {
  supportDialog: { id: "support_dialog", label: "Destek penceresi", enabled: true, verified: true },
  pwaInstall: { id: "pwa_install", label: "PWA kurulum banneri", enabled: true, verified: true },
  share: { id: "share", label: "Rehber paylasimi", enabled: true, verified: true },
  copyPrompt: { id: "copy_prompt", label: "Prompt kopyalama", enabled: true, verified: true },
  examFilters: { id: "exam_filters", label: "Sinav yili filtreleri", enabled: true, verified: true },
  glossarySearch: { id: "glossary_search", label: "Sozluk arama", enabled: true, verified: true }
};

const CATEGORIES = [
  {
    "id": "hizli",
    "label": "Hızlı erişim",
    "icon": "home",
    "verified": true
  },
  {
    "id": "kayit",
    "label": "Kayıt & ders",
    "icon": "edit",
    "verified": true
  },
  {
    "id": "sinav",
    "label": "Sınav işlemleri",
    "icon": "calendar",
    "verified": true
  },
  {
    "id": "soru",
    "label": "Çıkmış sorular",
    "icon": "file",
    "verified": true
  },
  {
    "id": "belge",
    "label": "e-Devlet belgeleri",
    "icon": "shield",
    "verified": true
  },
  {
    "id": "mezuniyet",
    "label": "Mezuniyet & yüz yüze",
    "icon": "school",
    "verified": true
  },
  {
    "id": "yardim",
    "label": "Yardım & iletişim",
    "icon": "help",
    "verified": true
  }
];

const RESOURCES = [
  {
    "title": "AÖİHL resmî sitesi",
    "description": "Haber, duyuru, kılavuz ve okul bağlantılarının ana adresi.",
    "url": "https://aoihl.meb.gov.tr/",
    "category": "hizli",
    "tags": "ana sayfa açık öğretim imam hatip lisesi meb",
    "badge": "Ana kaynak",
    "verified": true
  },
  {
    "title": "Açık Öğretim Liseleri öğrenci girişi",
    "description": "Ders seçimi, kayıt, sınav merkezi, randevu, sonuç ve öğrenci bilgileri.",
    "url": "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    "category": "hizli",
    "tags": "öğrenci sistemi bilgi yönetim sistemi giriş ders kredi şifre e devlet",
    "badge": "İşlem",
    "verified": true
  },
  {
    "title": "2026–2027 kayıt duyurusu",
    "description": "1. dönem yeni kayıt, kayıt yenileme, ders seçimi ve sınav tarihleri.",
    "url": "https://aoihl.meb.gov.tr/www/kayit-duyurusu/icerik/482/tr",
    "category": "hizli",
    "tags": "güncel duyuru 11 eylül 12 ekim 2026 2027 kayıt yenileme ücret sınav",
    "verified": true
  },
  {
    "title": "AÖİHL duyuruları",
    "description": "Ders seçimi ve okul işlemlerine ilişkin resmî duyuru arşivi.",
    "url": "https://aoihl.meb.gov.tr/www/duyurular/kategori/2",
    "category": "hizli",
    "tags": "duyurular arşiv ders seçimi okul işlemleri",
    "verified": true
  },
  {
    "title": "2026–2027 yeni kayıt kılavuzu",
    "description": "Başvuru şartları, evraklar, ücret, ders seçimi ve sınav işlemleri.",
    "url": "https://aoihl.meb.gov.tr/meb_iys_dosyalar/2026_09/6aa3ac9f8da14767119316_A%C3%A7ik_Ogretim_Imam_Hatip_Lisesi_Yeni_Kayit_Kilavuzu.pdf",
    "category": "kayit",
    "tags": "pdf yeni kayıt kılavuz başvuru şartlar evrak 2026 2027",
    "badge": "PDF",
    "verified": false
  },
  {
    "title": "2026–2027 kayıt yenileme kılavuzu",
    "description": "Kayıt yenileme, ücret, muafiyet, ders ve sınav işlemlerinin güncel kılavuzu.",
    "url": "https://aoihl.meb.gov.tr/meb_iys_dosyalar/2026_09/6aa3ac8505c3a322120411_A%C3%A7ik_Ogretim_Imam_Hatip_Lisesi_Kayit_Yenileme_Kilavuzu.pdf",
    "category": "kayit",
    "tags": "pdf kayıt yenileme kılavuz ücret muafiyet 2026 2027",
    "badge": "PDF",
    "verified": true
  },
  {
    "title": "Ders seçimi erişimi",
    "description": "Kayıt döneminde uzaktan eğitim derslerini öğrenci sisteminden seçin.",
    "url": "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    "category": "kayit",
    "tags": "ders seçme seçimi uzaktan eğitim öğrenci sistemi kredi",
    "verified": true
  },
  {
    "title": "MEB ödeme servisi",
    "description": "Ödeme yapmadan önce güncel kılavuzdaki ücret muafiyetini ve tutarı kontrol edin.",
    "url": "https://odeme.meb.gov.tr/",
    "category": "kayit",
    "tags": "ücret ödeme dekont banka kredi kartı kayıt yenileme",
    "badge": "İşlem",
    "verified": true
  },
  {
    "title": "İş takvimi arşivi",
    "description": "Kayıt, ders seçimi, e-Sınav ve sonuç tarihlerinin yıllara göre takvimleri.",
    "url": "https://aoihl.meb.gov.tr/www/is-takvimi-arsivi/icerik/253",
    "category": "kayit",
    "tags": "çalışma iş takvimi tarih kayıt ders seçim sınav sonuç arşiv",
    "verified": true
  },
  {
    "title": "Örgün eğitimden geçiş şartları",
    "description": "Ortaöğretim Kurumları Yönetmeliği 41/2 kapsamındaki resmî geçiş koşulları.",
    "url": "https://aoihl.meb.gov.tr/meb_iys_dosyalar/2026_09/6aa3acd92d481800515581_OOKY_Madde_41.pdf",
    "category": "kayit",
    "tags": "nakil geçiş örgün ortaöğretim yönetmelik madde 41 pdf",
    "badge": "PDF",
    "verified": false
  },
  {
    "title": "Kayıt işlemleri SSS",
    "description": "Yeni kayıt, kayıt yenileme, belge ve öğrencilik durumu soruları.",
    "url": "https://aoihl.meb.gov.tr/www/sss-kayit-islemleri/icerik/14",
    "category": "kayit",
    "tags": "sık sorulan sorular sss aktif donuk silik evrak",
    "verified": true
  },
  {
    "title": "2026–2027 / 1. dönem sınav bilgileri",
    "description": "Yazılı sınav, e-Sınav, randevu ve giriş belgesi tarihleri güncel duyuruda.",
    "url": "https://aoihl.meb.gov.tr/www/kayit-duyurusu/icerik/482/tr",
    "category": "sinav",
    "tags": "20 aralık 2026 esınav e sınav randevu giriş belgesi sınav merkezi",
    "verified": true
  },
  {
    "title": "Sınav giriş belgesi ve sonuçlar",
    "description": "Fotoğraflı giriş belgesi, sınav yeri, e-Sınav randevusu ve sonuç ekranı.",
    "url": "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    "category": "sinav",
    "tags": "sınav giriş belgesi sonuç yer salon randevu öğrenci sistemi",
    "verified": true
  },
  {
    "title": "ÖDSGM sınavlar arşivi",
    "description": "MEB tarafından yayımlanan sınav duyuruları, kitapçıklar ve cevap anahtarları.",
    "url": "https://odsgm.meb.gov.tr/www/sinavlar/kategori/50",
    "category": "sinav",
    "tags": "ölçme değerlendirme sınav hizmetleri arşiv odsgm kitapçık cevap",
    "verified": true
  },
  {
    "title": "2026 MEB sınav uygulama takvimi",
    "description": "2026 sınav takviminin resmî duyurusu; güncel dönem için AÖİHL duyurusunu esas alın.",
    "url": "https://odsgm.meb.gov.tr/www/2026-yili-sinav-uygulama-takvimi-yayimlandi/icerik/1505/",
    "category": "sinav",
    "tags": "sınav takvimi tarih aoihl aöihl pdf 2026",
    "badge": "Duyuru",
    "verified": false
  },
  {
    "title": "e-Sınav resmî sitesi",
    "description": "MEB elektronik sınav uygulamalarına ilişkin resmî merkez.",
    "url": "https://esinav.meb.gov.tr/",
    "category": "sinav",
    "tags": "elektronik sınav e sınav merkezi randevu",
    "verified": true
  },
  {
    "title": "MEB sınav yeri sorgulama",
    "description": "e-Devlet üzerinden MEB sınav yeri bilgisi sorgulama hizmeti.",
    "url": "https://www.turkiye.gov.tr/meb-sinav-yeri-sorgulama",
    "category": "sinav",
    "tags": "e devlet sınav yeri giriş belgesi sorgu",
    "verified": true
  },
  {
    "title": "MEB sınav sonucu sorgulama",
    "description": "e-Devlet üzerinden MEB sınav sonuçlarını sorgulama hizmeti.",
    "url": "https://www.turkiye.gov.tr/meb-sinav-sonuc-sorgulama",
    "category": "sinav",
    "tags": "e devlet sınav sonucu not puan sorgu",
    "verified": true
  },
  {
    "title": "2025–2026 / 3. dönem soru ve cevapları",
    "description": "18–19 Temmuz 2026 AÖİHL soru kitapçıkları ve cevap anahtarları; 3 oturum.",
    "url": "https://odsgm.meb.gov.tr/www/2025-2026-egitim-ogretim-yili-acik-ogretim-kurumlari-3-donem-yazili-sinavi-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi/icerik/1704/",
    "category": "soru",
    "tags": "çıkmış sorular cevap anahtarı son güncel temmuz 2026 3 dönem üç oturum",
    "verified": true
  },
  {
    "title": "2025–2026 / 2. dönem soru ve cevapları",
    "description": "14–15 Mart 2026 AÖİHL soru kitapçıkları ve cevap anahtarları; 3 oturum.",
    "url": "https://odsgm.meb.gov.tr/www/1415mart2026tarihlerindeyapilanacikogretimkurumlari2donemsinavlarininsorukitapciklarivecevapanahtarlariyayimlandi/icerik/1558/tr",
    "category": "soru",
    "tags": "çıkmış sorular cevap anahtarı mart 2026 2 dönem iki üç oturum",
    "verified": false
  },
  {
    "title": "2025–2026 / 1. dönem soru ve cevapları",
    "description": "20–21 Aralık 2025 AÖİHL soru kitapçıkları ve cevap anahtarları; 3 oturum.",
    "url": "https://odsgm.meb.gov.tr/www/20-21-aralik-2025-tarihlerinde-yapilan-acik-ogretim-kurumlari-1-donem-sinavlarinin-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi/icerik/1522/tr",
    "category": "soru",
    "tags": "çıkmış sorular cevap anahtarı aralık 2025 1 dönem bir üç oturum",
    "verified": true
  },
  {
    "title": "2024–2025 / 1. dönem soru ve cevapları",
    "description": "21–22 Aralık 2024 AÖİHL soru kitapçıkları ve cevap anahtarları; 3 oturum.",
    "url": "https://odsgm.meb.gov.tr/www/21-22-aralik-2024-tarihlerinde-yapilan-acik-ogretim-lisesimesleki-acik-ogretim-lisesiacik-ogretim-imam-hatip-lisesi-1-donem-sinavlarinin-soru-kitapciklari-ve-cevap-anahtarlari/icerik/1377/tr",
    "category": "soru",
    "tags": "çıkmış sorular eski yıllar cevap anahtarı aralık 2024",
    "verified": true
  },
  {
    "title": "2023–2024 / 2. dönem soru ve cevapları",
    "description": "16–17 Mart 2024 AÖİHL soru kitapçıkları ve cevap anahtarları.",
    "url": "https://odsgm.meb.gov.tr/www/acik-ogretim-kurumlari-2023-2024-egitim-ogretim-yili-2-donem-sinavlarinin-kitapciklari-ve-cevap-anahtarlari-yayimlandi/icerik/1198",
    "category": "soru",
    "tags": "çıkmış sorular eski yıllar cevap anahtarı mart 2024",
    "verified": true
  },
  {
    "title": "Tüm eski sınavlar ve kitapçıklar",
    "description": "Daha eski yıllara ait resmî soru ve cevap duyurularını ÖDSGM arşivinde bulun.",
    "url": "https://odsgm.meb.gov.tr/www/sinavlar/kategori/50",
    "category": "soru",
    "tags": "tüm arşiv eski yıllar çıkmış soru kitapçık cevap anahtarı",
    "badge": "Arşiv",
    "verified": true
  },
  {
    "title": "Açık Öğretim Kurumları mobil uygulaması",
    "description": "MEB’in ders seçimi, kayıt, öğrenci ve sınav işlemleri için resmî Android uygulaması.",
    "url": "https://play.google.com/store/apps/details?hl=tr&id=com.meb.acikLise",
    "category": "hizli",
    "tags": "mobil uygulama android google play meb açık lise",
    "badge": "MEB",
    "verified": false
  },
  {
    "title": "Açık Öğretim Kurumları iOS uygulaması",
    "description": "MEB’in öğrenci ve sınav işlemleri için App Store’daki resmî uygulaması.",
    "url": "https://apps.apple.com/tr/app/a%C3%A7%C4%B1k-%C3%B6%C4%9Fretim-kurumlar%C4%B1/id1148523971",
    "category": "hizli",
    "tags": "mobil uygulama iphone ios app store meb açık lise",
    "badge": "MEB",
    "verified": true
  },
  {
    "title": "Öğrenci durum belgesi sorgulama",
    "description": "Açık öğretim liseleri için barkodlu öğrenci durum belgesi oluşturun.",
    "url": "https://www.turkiye.gov.tr/milli-egitim-acik-ogretim-liseleri-ogrenci-durum-belgesi-sorgulama",
    "category": "belge",
    "tags": "e devlet öğrenci belgesi öğrenim durum barkodlu resmi evrak",
    "verified": true
  },
  {
    "title": "Mezuniyet belgesi sorgulama",
    "description": "Açık öğretim liseleri mezuniyet belgesine e-Devlet üzerinden erişin.",
    "url": "https://www.turkiye.gov.tr/milli-egitim-acik-ogretim-liseleri-mezuniyet-belgesi-sorgulama",
    "category": "belge",
    "tags": "e devlet mezuniyet diploma geçici belge mezun",
    "verified": true
  },
  {
    "title": "Hizmete özel öğrenci belgesi (Ek-C2)",
    "description": "Açık öğretim liseleri Ek-C2 öğrenci durum belgesini sorgulayın.",
    "url": "https://www.turkiye.gov.tr/milli-egitim-acik-ogretim-liseleri-hizmete-ozel-ogrenci-durum-belgesi-ek-c2-sorgulama",
    "category": "belge",
    "tags": "e devlet askerlik tecil ek c2 hizmete özel öğrenci durum belgesi",
    "verified": true
  },
  {
    "title": "MEB öğrenci bilgi sistemi",
    "description": "e-Devlet kimlik doğrulamasıyla MEB öğrenci bilgi sistemine giriş.",
    "url": "https://www.turkiye.gov.tr/ogrenci-bilgi-sistemi",
    "category": "belge",
    "tags": "e devlet öğrenci bilgi sistemi giriş kayıt",
    "verified": false
  },
  {
    "title": "Açık öğretim belgelerini doğrulama",
    "description": "e-Devlet barkodlu öğrenci ve mezuniyet belgelerinin doğrulama ekranı.",
    "url": "https://www.turkiye.gov.tr/belge-dogrulama",
    "category": "belge",
    "tags": "e devlet belge doğrulama barkod öğrenci mezuniyet",
    "verified": true
  },
  {
    "title": "MEB’in tüm e-Devlet hizmetleri",
    "description": "Millî Eğitim Bakanlığının e-Devlet üzerinden sunduğu hizmetlerin tam listesi.",
    "url": "https://www.turkiye.gov.tr/milli-egitim-bakanligi",
    "category": "belge",
    "tags": "e devlet tüm hizmetler milli eğitim bakanlığı",
    "verified": true
  },
  {
    "title": "Yüz yüze eğitim veren okullar",
    "description": "İl ve ilçeye göre kurumları ve güncel kontenjan bilgilerini görüntüleyin.",
    "url": "https://aolweb.meb.gov.tr/yykurum_kontenjan.aspx",
    "category": "mezuniyet",
    "tags": "yüz yüze eğitim okul kurum kontenjan il ilçe bul",
    "verified": true
  },
  {
    "title": "Yüz yüze eğitim uygulama kılavuzu",
    "description": "Alan dersleri, devam, sınav, program ve kurum işlemleri için güncel kılavuz.",
    "url": "https://aoihl.meb.gov.tr/meb_iys_dosyalar/2025_08/29161025_aoihl_yuz_yuze_egitim_uygulama_kilavuzu.pdf",
    "category": "mezuniyet",
    "tags": "yüz yüze eğitim kılavuz alan meslek dersleri devam pdf",
    "badge": "PDF",
    "verified": true
  },
  {
    "title": "AÖİHL mezuniyet şartları",
    "description": "Dönem, kredi, zorunlu ders ve yüz yüze eğitim koşullarının resmî özeti.",
    "url": "https://aoihl.meb.gov.tr/meb_iys_dosyalar/2025_10/08151425_aoihlmezuniyetsartlari_8ekim2025.pdf",
    "category": "mezuniyet",
    "tags": "mezuniyet şartları kredi dönem zorunlu ders yüz yüze eğitim pdf",
    "badge": "PDF",
    "verified": false
  },
  {
    "title": "Mezuniyet ve yükseköğretim SSS",
    "description": "Diploma, mezuniyet yazısı, YKS ve üniversite kaydı hakkında resmî cevaplar.",
    "url": "https://aoihl.meb.gov.tr/www/sss-mezuniyet-ve-yuksek-ogretim-ile-ilgili-sorular/icerik/17",
    "category": "mezuniyet",
    "tags": "mezuniyet diploma yks üniversite yükseköğretim geçici belge sss",
    "verified": true
  },
  {
    "title": "Haftalık ders çizelgesi",
    "description": "AÖİHL ortak, seçmeli ve yüz yüze alan derslerinin dönemlere göre çizelgesi.",
    "url": "https://aoihl.meb.gov.tr/kitap_kilavuz/TTKB_haftalik_cizelge.pdf",
    "category": "mezuniyet",
    "tags": "haftalık ders çizelgesi kredi alan ortak seçmeli ders pdf",
    "badge": "PDF",
    "verified": true
  },
  {
    "title": "Ders seçimi SSS",
    "description": "Ortak, zorunlu, seçmeli ve alan derslerinin seçimi hakkında resmî cevaplar.",
    "url": "https://aoihl.meb.gov.tr/www/sss-ders-secme-ile-ilgili-sorular/icerik/15",
    "category": "mezuniyet",
    "tags": "ders seçme sss ortak zorunlu seçmeli alan ders",
    "verified": true
  },
  {
    "title": "AÖİHL okul ve sistem bilgisi",
    "description": "Okulun işleyişi, yüz yüze eğitim, kayıt ve mezuniyet yapısının özeti.",
    "url": "https://aoihl.meb.gov.tr/www/okulumuz/icerik/227",
    "category": "mezuniyet",
    "tags": "okulumuz tanıtım sistem nasıl işler dönem kredi diploma",
    "verified": true
  },
  {
    "title": "AÖİHL sık sorulan sorular",
    "description": "Kayıt, ders, sınav ve okul işlemleri için resmî SSS belgesi.",
    "url": "https://aoihl.meb.gov.tr/meb_iys_dosyalar/2025_10/16113444_sikcasorulansorular.pdf",
    "category": "yardim",
    "tags": "sss sık sorulan sorular yardım pdf",
    "badge": "PDF",
    "verified": false
  },
  {
    "title": "MEBİM iletişim kanalları",
    "description": "7/24 çağrı, yazılı destek ve erişilebilir iletişim seçenekleri. 444 0 632.",
    "url": "https://mebimportal.meb.gov.tr/ContactChannel",
    "category": "yardim",
    "tags": "mebim 444 0 632 çağrı merkezi telefon destek iletişim 7 24",
    "verified": true
  },
  {
    "title": "MEB iletişim bilgileri",
    "description": "Bakanlık iletişim merkezi, adres ve kurum bağlantıları.",
    "url": "https://meb.gov.tr/iletisim/",
    "category": "yardim",
    "tags": "meb iletişim adres telefon kurum",
    "verified": true
  },
  {
    "title": "MEBİM başvuru sonucu sorgulama",
    "description": "MEBİM’e ilettiğiniz başvurunun durumunu e-Devlet üzerinden izleyin.",
    "url": "https://www.turkiye.gov.tr/milli-egitim-iletisim-merkezi-mebim-basvuru-sonucu-sorgulama",
    "category": "yardim",
    "tags": "mebim e devlet başvuru takip sonuç sorgu",
    "verified": true
  },
  {
    "title": "ÖDSGM e-İtiraz sistemi",
    "description": "Merkezî sınav soru, cevap ve sonuçlarına ilişkin resmî itiraz ekranı.",
    "url": "https://eitiraz.meb.gov.tr/",
    "category": "yardim",
    "tags": "sınav itiraz soru cevap sonuç odsgm e itiraz",
    "verified": true
  }
];

const EXAM_YEARS = [
  "Tümü",
  "2025–2026",
  "2024–2025",
  "2023–2024"
];

const EXAMS = [
  {
    "year": "2025–2026",
    "term": 3,
    "date": "18–19 Temmuz 2026",
    "url": "https://odsgm.meb.gov.tr/www/2025-2026-egitim-ogretim-yili-acik-ogretim-kurumlari-3-donem-yazili-sinavi-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi/icerik/1704/",
    "sessions": [
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2026_07/6a6082ad6d5eb136355807_1_OTURUM_18_TEMMUZ_2026T.pdf",
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2026_07/6a6082bc4f044429138184_2_OTURUM_18_TEMMUZ_2026T.pdf",
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2026_07/6a6082e05bde2533065434_3_OTURUM_19_TEMMUZ_2026T.pdf"
    ],
    "latest": true,
    "verified": true
  },
  {
    "year": "2025–2026",
    "term": 2,
    "date": "14–15 Mart 2026",
    "url": "https://odsgm.meb.gov.tr/www/14-15-mart-2026-tarihlerinde-yapilan-acik-ogretim-kurumlari-2-donem-sinavlarinin-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi/icerik/1558",
    "sessions": [
      "https://cdn.eba.gov.tr/yardimcikaynaklar/2026/03/AOK/aol_1oturum.pdf",
      "https://cdn.eba.gov.tr/yardimcikaynaklar/2026/03/AOK/aol_2oturum.pdf",
      "https://cdn.eba.gov.tr/yardimcikaynaklar/2026/03/AOK/aol_3oturum.pdf"
    ],
    "verified": true
  },
  {
    "year": "2025–2026",
    "term": 1,
    "date": "20–21 Aralık 2025",
    "url": "https://odsgm.meb.gov.tr/www/20-21-aralik-2025-tarihlerinde-yapilan-acik-ogretim-kurumlari-1-donem-sinavlarinin-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi/icerik/1522/tr",
    "sessions": [
      "https://cdn.eba.gov.tr/yardimcikaynaklar/2025/12/acikogretim/lise/1_OTURUM_20_ARALIK_2025.pdf",
      "https://cdn.eba.gov.tr/yardimcikaynaklar/2025/12/acikogretim/lise/2_OTURUM_20_ARALIK_2025_T.pdf",
      "https://cdn.eba.gov.tr/yardimcikaynaklar/2025/12/acikogretim/lise/3_OTURUM_21_ARALIK_2025.pdf"
    ],
    "verified": true
  },
  {
    "year": "2024–2025",
    "term": 3,
    "date": "19–20 Temmuz 2025",
    "url": "https://odsgm.meb.gov.tr/www/19-20-temmuz-2025-tarihlerinde-yapilan-acik-ogretim-kurumlari-3-donem-sinavlarinin-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi/icerik/1459",
    "sessions": [
      "https://cdn.eba.gov.tr/yardimcikaynaklar/2025/07/1_OTURUM_19_TEMMUZ_2025%28T%29LISE.pdf",
      "https://cdn.eba.gov.tr/yardimcikaynaklar/2025/07/2_OTURUM_19_TEMMUZ_2025%28T%29LISE.pdf",
      "https://cdn.eba.gov.tr/yardimcikaynaklar/2025/07/3_OTURUM_20_TEMMUZ_2025%28T%29LISE.pdf"
    ],
    "verified": false
  },
  {
    "year": "2024–2025",
    "term": 2,
    "date": "22–23 Mart 2025",
    "url": "https://odsgm.meb.gov.tr/www/22-23-mart-2025-tarihlerinde-yapilan-acik-ogretim-kurumlari-2-donem-sinavlarinin-soru-kitapciklari-ve-cevap-anahtarlari/icerik/1420",
    "sessions": [
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2025_03/28164638_1_oturum_22_martguvenlikli_2025t.pdf",
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2025_03/26145653_2_oturum_22_mart_2025t.pdf",
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2025_03/26145701_3_oturum_23_mart_2025t.pdf"
    ],
    "verified": false
  },
  {
    "year": "2024–2025",
    "term": 1,
    "date": "21–22 Aralık 2024",
    "url": "https://odsgm.meb.gov.tr/www/21-22-aralik-2024-tarihlerinde-yapilan-acik-ogretim-lisesimesleki-acik-ogretim-lisesiacik-ogretim-imam-hatip-lisesi-1-donem-sinavlarinin-soru-kitapciklari-ve-cevap-anahtarlari/icerik/1377/tr",
    "sessions": [
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2024_12/25115028_1_oturum_21_aralik_2024t.pdf",
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2024_12/25115028_2_oturum_21_aralik_2024t.pdf",
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2024_12/25115028_3_oturum_22_aralik_2024t.pdf"
    ],
    "verified": false
  },
  {
    "year": "2023–2024",
    "term": 2,
    "date": "16–17 Mart 2024",
    "url": "https://odsgm.meb.gov.tr/www/acik-ogretim-kurumlari-2023-2024-egitim-ogretim-yili-2-donem-sinavlarinin-kitapciklari-ve-cevap-anahtarlari-yayimlandi/icerik/1198",
    "sessions": [
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2024_03/21161547_1_oturum_16_mart_2024t.pdf",
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2024_03/21161548_2_oturum_16_mart_2024t.pdf",
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2024_03/21161547_3_oturum_17_mart_2024t.pdf"
    ],
    "verified": false
  },
  {
    "year": "2023–2024",
    "term": 1,
    "date": "23–24 Aralık 2023",
    "url": "https://odsgm.meb.gov.tr/www/acik-ogretim-kurumlari-2023-2024-egitim-ogretim-yili-1-donem-sinavlari-tamamlandi/icerik/1151",
    "sessions": [
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2023_12/27142856_1_oturum_2324_aralik_2023t.pdf",
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2023_12/27142856_2_oturum_2324_aralik_2023t.pdf",
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2023_12/27142856_3_oturum_24_aralik_2023t.pdf"
    ],
    "verified": false
  }
];

const GLOSSARY = [
  {
    "term": "Aktif öğrenci",
    "definition": "Yeni kayıt veya kayıt yenileme işlemini yaptırmış öğrencinin güncel durumudur.",
    "analogy": "Yeni sezon için profilin etkinleşmiş; ders ve sınav ekranlarına girebilirsin.",
    "verified": true
  },
  {
    "term": "Kayıt yenilememiş (Donuk)",
    "definition": "Bir dönem kayıt yenilemeyen öğrenci için kullanılan durumdur. Önceden kazanılan krediler kaybolmaz.",
    "analogy": "O sezon oyuna girmedin; kayıt dosyan ve topladığın puanlar duruyor.",
    "verified": true
  },
  {
    "term": "Beklemeli (eski adıyla Silik)",
    "definition": "En az iki dönem üst üste kayıt yenilemeyen öğrencinin güncel resmî durum adıdır. Kayıt yenilenince önceki krediler korunur.",
    "analogy": "Profil uzun süre çevrimdışı kalmış; silinmemiş, yeniden etkinleştirilmeyi bekliyor.",
    "verified": true
  },
  {
    "term": "Ön kayıt öğrencisi",
    "definition": "Belge ve bilgileri sisteme aktarılmış ancak kontrol ve onayı henüz tamamlanmamış öğrencidir.",
    "analogy": "Karakterini oluşturdun ama sunucu onayı bitmeden ana haritaya giremiyorsun.",
    "verified": true
  },
  {
    "term": "Kayıt yenileme",
    "definition": "AÖİHL öğrencisinin duyurulan tarihlerde ilgili dönem için yaptırdığı kayıt işlemidir.",
    "analogy": "Yeni sezona katılımını açan işlem; eski ilerlemeni sıfırlamaz.",
    "verified": true
  },
  {
    "term": "Dönem",
    "definition": "Kayıt işlemlerinden bir sonraki sınav döneminin kayıt başlangıcına kadar uzanan eğitim süresidir.",
    "analogy": "Oyundaki sezon gibi düşün: kayıt, ders seçimi ve sınav o sezonun içinde tamamlanır.",
    "verified": false
  },
  {
    "term": "Kredi",
    "definition": "Bir dersin haftalık ders saatiyle belirlenen değeridir; ders başarıldığında bu kredi kazanılır.",
    "analogy": "Dersi geçince hesabına eklenen kalıcı puan gibidir; harcanmaz ve başka derse aktarılmaz.",
    "verified": true
  },
  {
    "term": "Toplam kredi",
    "definition": "Başardığın bütün kredili derslerden bugüne kadar biriken kredi toplamıdır.",
    "analogy": "Farklı görevlerden topladığın bütün puanların genel toplamı; tek başına mezuniyet için yeterli olmayabilir.",
    "verified": true
  },
  {
    "term": "Alan kredisi",
    "definition": "İmam hatip alan derslerinden kazanılan ve mezuniyette ayrıca kontrol edilen kredidir; uzaktan ve yüz yüze alan dersleri bulunur.",
    "analogy": "Genel puandan ayrı izlenen uzmanlık ağacı puanı gibi; kendi alan hedefini de tamamlaman gerekir.",
    "verified": true
  },
  {
    "term": "Alan dersleri",
    "definition": "AÖİHL haftalık ders çizelgesinde imam hatip alanına ait olan derslerdir.",
    "analogy": "Karakter sınıfına özel yetenek görevleri gibi; programın imam hatip kısmını oluşturur.",
    "verified": true
  },
  {
    "term": "Ortak ders",
    "definition": "Mezuniyet için alınması gereken, alan dersleri dışında kalan program dersidir.",
    "analogy": "Herkesin karşısına çıkan ana görev havuzu gibi.",
    "verified": true
  },
  {
    "term": "Zorunlu ortak ders",
    "definition": "Başarılmadan veya mevzuattaki muafiyet şartı oluşmadan mezuniyetin tamamlanamayacağı ortak derstir.",
    "analogy": "Ana hikâyedeki zorunlu görev gibi; bitirmeden final ekranı açılmaz.",
    "verified": false
  },
  {
    "term": "Seçmeli ders",
    "definition": "Ortak derslere ek olarak seçilebilen ve mezuniyet kredisini tamamlamaya yardımcı olan derstir.",
    "analogy": "Yan görev gibidir; seçimi sana kalır ama kredi hedefini tamamlamana yardım eder.",
    "verified": true
  },
  {
    "term": "Muaf olma",
    "definition": "Dersi başarma zorunluluğunun resmî koşullarla kalkmasıdır; kredi kazanılmaz. Uzaktan zorunlu ortak ve alan dersleri için üç başarısız sınav kuralı bulunur; Türk Dili ve Edebiyatı muafiyet dışıdır. Yüz yüze alan derslerinin kuralları farklıdır; Kur’an-ı Kerimden muaf olunamaz.",
    "analogy": "Görev listenden kaldırılır ama görevin puanı hesabına eklenmez.",
    "verified": true
  },
  {
    "term": "Ders seçme",
    "definition": "Kayıt olunan dönemde sınavına girilecek dersleri, kayıt tarihleri içinde sistemden belirleme işlemidir.",
    "analogy": "Bu sezon oynayacağın görevleri seçmek gibi; seçimlerin sınav programını belirler.",
    "verified": true
  },
  {
    "term": "Yüz yüze eğitim",
    "definition": "Alan derslerinin belirlenen okul veya kurumda öğretmen eşliğinde yürütüldüğü eğitimdir.",
    "verified": true
  },
  {
    "term": "Yüz yüze eğitimi tamamlandı çeki",
    "definition": "Yüz yüze derslerin bittiğini okul veya kurumun bilgi yönetim sisteminde işaretlediği onaydır.",
    "analogy": "Bölümü bitirmiş olsan da görev teslimini okulun sistemde onaylaması gerekir.",
    "verified": true
  },
  {
    "term": "Uzaktan eğitim dersi",
    "definition": "Resmî ders kitabı ve dijital materyallerle çalışılan, dönem sınavıyla değerlendirilen derstir.",
    "verified": false
  },
  {
    "term": "Mezuniyet incelemesi",
    "definition": "Dönem, toplam ve alan kredisi, zorunlu dersler, belgeler ve yüz yüze eğitim onayının birlikte kontrol edildiği süreçtir.",
    "analogy": "Final kapısındaki kontrol noktası gibi; her koşul tek tek doğrulanır. İncelemede olmak mezun olmak değildir.",
    "verified": true
  },
  {
    "term": "Mezun",
    "definition": "Mezuniyet incelemesi tamamlanıp bütün şartları sağladığı onaylanan öğrencidir.",
    "analogy": "Bütün ana koşullar doğrulanmış ve final başarıyla tamamlanmıştır.",
    "verified": true
  },
  {
    "term": "Öğrencilik hakkı",
    "definition": "İlgili mevzuat çerçevesinde öğrenci belgesi, ulaşım veya müze gibi öğrencilik imkânlarından yararlanma durumudur.",
    "verified": true
  },
  {
    "term": "Oturum",
    "definition": "Dönem sınavında belirli derslerin aynı tarih ve saat aralığında uygulandığı sınav bölümüdür.",
    "verified": true
  },
  {
    "term": "Ders kodu",
    "definition": "Öğrenci sistemi ve sınav kitapçığında dersi kesin olarak ayırt eden numaradır.",
    "verified": true
  },
  {
    "term": "Sınav bölgesi",
    "definition": "Yazılı sınava girmek için sistemde seçilen il ve ilçe merkezidir.",
    "verified": false
  },
  {
    "term": "e-Sınav",
    "definition": "Önceden randevu alınarak elektronik sınav merkezinde bilgisayar üzerinden uygulanan sınavdır.",
    "verified": true
  },
  {
    "term": "Yazılı sınav",
    "definition": "MEB’in ilan ettiği tarihte sınav merkezinde basılı evrakla uygulanan dönem sınavıdır.",
    "verified": true
  },
  {
    "term": "Sınav giriş belgesi",
    "definition": "Sınav yeri, salonu, tarihi ve saatini gösteren fotoğraflı belgedir.",
    "verified": true
  },
  {
    "term": "İş takvimi",
    "definition": "Kayıt, ders seçimi, sınav ve sonuç işlemlerinin resmî tarihlerini gösteren çizelgedir.",
    "verified": true
  },
  {
    "term": "Ek sınav",
    "definition": "MEB’in belirlediği öğrenci grupları ve tarihler için ayrıca tanımlanan sınav hakkıdır.",
    "verified": true
  },
  {
    "term": "Sorumluluk sınavı",
    "definition": "Yüz yüze eğitim derslerinde okul veya kurum tarafından ilgili kurallara göre uygulanan sınavdır.",
    "verified": false
  },
  {
    "term": "Tasdikname",
    "definition": "Öğrencinin okuldan ayrılışını ve öğrenim bilgilerini gösteren resmî belgedir.",
    "verified": true
  },
  {
    "term": "Bilgi Yönetim Sistemi",
    "definition": "Kayıt, ders, kredi, sınav ve öğrencilik bilgilerinin elektronik ortamda yürütüldüğü resmî sistemdir.",
    "verified": true
  },
  {
    "term": "Ek-C2 belgesi",
    "definition": "Askerlik erteleme (tecil) işlemlerinde açık lise öğrenciliğini ispat etmek için e-Devlet'ten veya okuldan alınan resmî durum belgesidir.",
    "analogy": "Askerlik şubesine sunulan 'öğrenimim resmen devam ediyor' onay belgesi.",
    "verified": true
  },
  {
    "term": "Geçici mezuniyet belgesi (Çıkma belgesi)",
    "definition": "Diploması henüz basılmamış mezunların e-Devlet'ten veya okuldan aldığı, diploma yerine geçen ve üniversite/iş kayıtlarında geçerli belgedir.",
    "analogy": "Orijinal diploma basılana kadar kapıları açan resmî geçici lisans.",
    "verified": true
  },
  {
    "term": "Baraj ders (Türk Dili ve Edebiyatı)",
    "definition": "Sınavına 3 kez girilse dahi muaf olunamayan, mezuniyet için mutlaka en az 45 alarak başarılması şart olan ortak derstir.",
    "analogy": "Geçilmeden programın bitirilemediği kesin zorunlu ana görev.",
    "verified": true
  },
  {
    "term": "Devamsızlık sınırı (%20)",
    "definition": "Yüz yüze eğitim derslerinde toplam sürenin %20'sinden fazlasına özürsüz katılmayan öğrencinin o dersten başarısız sayılması kuralıdır.",
    "analogy": "Okuldaki yüz yüze ders hakkını kaybetmeme eşiği.",
    "verified": true
  },
  {
    "term": "İntibak (Kredi denklik)",
    "definition": "Örgün ortaöğretimden açık liseye geçen öğrencilerin önceki okullarında başardıkları derslerin açık lise kredi ve dönemlerine aktarılmasıdır.",
    "analogy": "Eski okulda topladığın puan ve seviyelerin yeni programa resmen taşınması.",
    "verified": true
  },
  {
    "term": "3. Dönem sınavı (Temmuz sınavı)",
    "definition": "Sınav tarihi itibarıyla 17 veya 18 yaşını doldurmuş öğrencilere açılan, mezuniyeti hızlandıran yaz dönemi sınavıdır.",
    "analogy": "Yazın açılan ek dönem; erken mezuniyet için büyük fırsat sunar.",
    "verified": true
  },
  {
    "term": "Ortaöğretim Başarı Puanı (OBP)",
    "definition": "Lise diploma notunun hesaplanarak YKS yerleştirme puanına eklenen ve üniversite sıralamasını doğrudan etkileyen katsayıdır.",
    "analogy": "Lise boyunca topladığın puanların üniversite sınavına getirdiği kalıcı bonus puan.",
    "verified": true
  },
  {
    "term": "e-İtiraz sistemi",
    "definition": "MEB ÖDSGM tarafından sınav sorularına, cevap anahtarına veya sınav sonuçlarına resmî itirazların elektronik ortamda yapıldığı sistemdir.",
    "analogy": "Sınav değerlendirmelerine karşı MEB'in resmî dijital itiraz kapısı.",
    "verified": true
  },
  {
    "term": "35 kredi sınırı (Dönemlik azami sınır)",
    "definition": "Bir dönem kayıt yenileme sürecinde öğrencinin seçebileceği en fazla ders kredisi / adedi sınırlamasıdır.",
    "analogy": "Bir dönemde çantana alabileceğin maksimum görev ve kredi kapasitesi.",
    "verified": true
  },
  {
    "term": "212 kredi kuralı",
    "definition": "AÖİHL 4 yıllık imam hatip lisesi programından mezun olabilmek için toplanması gereken asgari toplam kredidir.",
    "analogy": "İmam hatip diploması için aşılması gereken asgari toplam puan barajı.",
    "verified": true
  },
  {
    "term": "8 dönem şartı",
    "definition": "Liseden mezun olabilmek için geride bırakılması gereken asgari resmî eğitim dönemi sayısıdır (örgünden gelenlerin dönemleri dahil edilir).",
    "analogy": "Diploma kilidinin açılması için tamamlanması gereken asgari sezon sayısı.",
    "verified": true
  },
  {
    "term": "İndirimli öğrenci seyahat kartı",
    "definition": "Öğrencilik durumu 'Aktif' olan açık lise öğrencilerinin şehir içi toplu taşımadan indirimli yararlanmasını sağlayan karttır.",
    "analogy": "Öğrencilik durumunun şehir içi ulaşımda sağladığı resmî indirim hakkı.",
    "verified": true
  },
  {
    "term": "MEBİM (444 0 632)",
    "definition": "Millî Eğitim Bakanlığı İletişim Merkezi; açık lise kayıt, sınav, mevzuat ve şifre sorunlarında 7/24 telefonla destek veren resmî hattır.",
    "analogy": "Bakanlığın her türlü sorunda aranabilecek doğrudan canlı destek hattı.",
    "verified": true
  },
  {
    "term": "Telafi eğitimi",
    "definition": "Hastalık, rapor veya okulca kabul edilen zorunlu mazeretler nedeniyle yapılamayan yüz yüze derslerin kurumca belirlenen takvimde tamamlanmasıdır.",
    "analogy": "Kaçırılan yüz yüze derslerin mazeret sonrası okul tarafından telafi edilmesi.",
    "verified": true
  },
  {
    "term": "Halk Eğitimi Merkezi (HEM)",
    "definition": "Açık lise ilk kayıt, evrak teslimi, şifre sıfırlama ve rehberlik işlemlerinin yürütüldüğü yaygın MEB kurumudur.",
    "analogy": "İlçedeki açık öğretim ana operasyon ve kayıt bürosu.",
    "verified": true
  }
];

const PATHWAYS = [
  {
    "title": "Kaldığım dersleri nasıl görürüm?",
    "description": "Geçmiş dönemlerde başarılı, başarısız veya muaf olduğun dersleri kontrol et.",
    "category": "ders",
    "emoji": "📉",
    "tags": "kaldığım başarısız dersler not geçmiş dönem sonuç muaf devamsız",
    "steps": [
      "Açık Öğretim Liseleri öğrenci sistemine giriş yap.",
      "Öğrenci Genel Bilgileri menüsünü aç.",
      "Dönem Dersleri bölümüne gir ve incelemek istediğin dönemi seç.",
      "Ders Durumu / Başarı Durumu alanındaki başarısız derslere bak. Muaf dersler farklı bir durumdur; tekrar alma zorunluluğunu okulunla doğrula."
    ],
    "note": "Yüz yüze alan dersin görünmüyorsa ya da notu eksikse, dersi aldığın okul/kurumla görüş.",
    "url": "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    "cta": "Derslerimi görüntüle",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/sss-sinavlarla-ilgili-sorular/icerik/16",
    "sourceLabel": "Resmî sınav SSS",
    "verified": true
  },
  {
    "title": "Kredimi ve mezuniyete kalanları nasıl görürüm?",
    "description": "Toplam kredi, dönem ve zorunlu ders durumunu birlikte kontrol et.",
    "category": "ders",
    "emoji": "🎓",
    "tags": "toplam kredi mezuniyet kalan zorunlu ortak alan ders dönem",
    "steps": [
      "Öğrenci sistemine giriş yap ve öğrenci özetindeki toplam kredi ile dönem bilgisini kontrol et.",
      "Öğrenci Genel Bilgileri > Dönem Dersleri bölümünde ortak ve alan derslerinin durumuna bak.",
      "Mezuniyet şartları belgesindeki kredi, dönem ve zorunlu ders koşullarıyla karşılaştır.",
      "Şartları sağladığın hâlde mezun görünmüyorsan yüz yüze eğitim okuluna başvur."
    ],
    "note": "Yalnız kredi yeterli değildir; zorunlu dersler ve yüz yüze eğitim şartı da tamamlanmalıdır.",
    "url": "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    "cta": "Öğrenci sistemini aç",
    "sourceUrl": "https://aoihl.meb.gov.tr/meb_iys_dosyalar/2025_10/08151425_aoihlmezuniyetsartlari_8ekim2025.pdf",
    "sourceLabel": "Mezuniyet şartları",
    "verified": true
  },
  {
    "title": "Ders seçimini nasıl yaparım?",
    "description": "Kayıt yenilemeden sonra dönem derslerini seç ve kaydet.",
    "category": "ders",
    "emoji": "☑️",
    "tags": "ders seçimi seçme kayıt yenileme aktif öğrenci 15 ders kaydet",
    "steps": [
      "Kayıt yenilemenin tamamlandığını ve durumunun Aktif olduğunu kontrol et.",
      "Öğrenci sistemine giriş yap ve Ders Seçme ekranını aç.",
      "Sistemin sunduğu derslerden en fazla 15 ders seç.",
      "Seçimlerini kaydet; işlem bittikten sonra seçilen dersler listesini yeniden kontrol et."
    ],
    "note": "Bir ders bile seçersen sistem kalan dersleri otomatik atamaz. Hiç seçim yapmayanlara kayıt tarihleri bitiminde otomatik atama yapılır; seçilen derslerini mutlaka kontrol et.",
    "url": "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    "cta": "Ders seçimine git",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/sss-ders-secme-ile-ilgili-sorular/icerik/15",
    "sourceLabel": "Ders seçimi SSS",
    "verified": true
  },
  {
    "title": "Sınav sonuçlarımı nereden görürüm?",
    "description": "Son sınavı veya önceki dönemlerin bütün ders sonuçlarını görüntüle.",
    "category": "sinav",
    "emoji": "📊",
    "tags": "sınav sonucu puan not geçmiş dönem dönem dersleri",
    "steps": [
      "Öğrenci sistemine T.C. kimlik/öğrenci numaran ve şifrenle veya e-Devlet ile giriş yap.",
      "Son açıklanan sınav için Sınav Sonuçları ekranını aç.",
      "Eski sonuçlar için Öğrenci Genel Bilgileri > Dönem Dersleri yolunu izle.",
      "İlgili dönemi seçerek ders puanını ve başarı durumunu kontrol et."
    ],
    "url": "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    "cta": "Sonuçları görüntüle",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/sss-sinavlarla-ilgili-sorular/icerik/16",
    "sourceLabel": "Resmî sınav SSS",
    "verified": false
  },
  {
    "title": "Sınav giriş belgesini nasıl alırım?",
    "description": "Fotoğraflı sınav belgesini sistemden açıp yazdır.",
    "category": "sinav",
    "emoji": "🪪",
    "tags": "sınav giriş belgesi fotoğraflı yazdır sınav yeri salon",
    "steps": [
      "AÖİHL duyurusundan giriş belgesinin yayımlandığı tarihi kontrol et.",
      "Öğrenci sistemine giriş yap.",
      "Öğrenci Genel Bilgileri > Sınav Giriş Belgesi bölümünü aç.",
      "Fotoğraflı belgeyi indir veya yazdır; belgedeki sınav yeri ve saati kontrol et."
    ],
    "note": "Yazılı sınav ve e-Sınav için fotoğraflı giriş belgesi ve geçerli kimlik gerekir. Fotoğrafı olmayan giriş belgesiyle sınava alınmazsın; fotoğraf için okuluna başvur.",
    "url": "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    "cta": "Giriş belgesine git",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/kayit-duyurusu/icerik/482/tr",
    "sourceLabel": "Güncel sınav duyurusu",
    "verified": true
  },
  {
    "title": "e-Sınav randevusunu nasıl alırım?",
    "description": "Uygun tarih ve salonu seçerek elektronik sınav randevusu oluştur.",
    "category": "sinav",
    "emoji": "🗓️",
    "tags": "e sınav esınav randevu salon tarih yazdır",
    "steps": [
      "Güncel duyurudan randevu tarihlerini ve e-Sınava tabi olup olmadığını kontrol et.",
      "Öğrenci sistemine giriş yap.",
      "Öğrenci Genel Bilgileri > e-Sınav Randevu bölümünü aç.",
      "Uygun merkez ve zamanı seçip onayla; ardından Sınav Bilgilerini Yazdır seçeneğini kullan."
    ],
    "note": "2026–2027 / 1. dönemde 10 veya daha az ders için e-Sınav zorunludur; duyuruda istisnalar vardır. Randevu: 2–16 Kasım 2026. Kendi durumunu duyurudan doğrula.",
    "url": "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    "cta": "e-Sınav ekranına git",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/kayit-duyurusu/icerik/482/tr",
    "sourceLabel": "Güncel sınav duyurusu",
    "verified": true
  },
  {
    "title": "Sınav merkezini nasıl değiştiririm?",
    "description": "Sınava gireceğin il ve ilçeyi duyurulan süre içinde güncelle.",
    "category": "sinav",
    "emoji": "📍",
    "tags": "sınav merkezi bölgesi il ilçe adres değişiklik bilgi düzenleme",
    "steps": [
      "Öğrenci sistemine giriş yap.",
      "Bilgi Düzenleme menüsünü aç.",
      "Sınav Bölgesi İrtibat Merkezi ekranından il ve ilçeyi seç.",
      "Kaydet ve öğrenci özetinde yeni sınav bölgesinin göründüğünü kontrol et."
    ],
    "note": "Sınav merkezi değişikliği kayıt tarihleri içinde yapılır. Süre bittikten sonraki değişiklikler dikkate alınmaz.",
    "url": "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    "cta": "Sınav bölgesini düzenle",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/sss-sinavlarla-ilgili-sorular/icerik/16",
    "sourceLabel": "Resmî sınav SSS",
    "verified": true
  },
  {
    "title": "Kaydım aktif mi, nasıl kontrol ederim?",
    "description": "Ödeme veya yenileme sonrasında öğrencilik durumunu doğrula.",
    "category": "kayit",
    "emoji": "🟢",
    "tags": "kayıt aktif donuk silik beklemeli yenileme ödeme durum",
    "steps": [
      "Ödeme yaptıysan dekontunu sakla; ücret muafiyetin varsa güncel kılavuza göre okulun veya MEBİM ile işlemini doğrula.",
      "Öğrenci sistemine giriş yap ve öğrenci özetindeki Öğrencilik Durumu alanına bak.",
      "Durum Aktif ise ders seçimi ve dönem işlemlerine devam et.",
      "Ödemeye rağmen aktif değilse yüz yüze eğitim okulun veya MEBİM ile görüş."
    ],
    "url": "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    "cta": "Kayıt durumumu kontrol et",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/kayit-duyurusu/icerik/482/tr",
    "sourceLabel": "Güncel kayıt duyurusu",
    "verified": false
  },
  {
    "title": "Şifremi unuttum, ne yapmalıyım?",
    "description": "Şifre yenileme seçeneklerini kullan veya resmî destek al.",
    "category": "destek",
    "emoji": "🔐",
    "tags": "şifre unuttum giriş yapamıyorum e devlet mebim yeni şifre",
    "steps": [
      "Öğrenci giriş ekranındaki Şifremi Unuttum bağlantısını dene.",
      "Alternatif olarak aynı ekrandan e-Devlet ile giriş yap.",
      "Çözülmezse kayıtlı olduğun yüz yüze eğitim okuluna başvur.",
      "MEBİM’i 444 0 632 numarasından arayarak destek iste."
    ],
    "url": "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    "cta": "Giriş ekranını aç",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/sik-sorulan-sorularsss-genel-konular/icerik/12",
    "sourceLabel": "Genel konular SSS",
    "verified": true
  },
  {
    "title": "Öğrenci belgesini nasıl alırım?",
    "description": "Barkodlu öğrenci durum belgesini e-Devlet’ten oluştur.",
    "category": "belge",
    "emoji": "📄",
    "tags": "öğrenci belgesi durum barkod e devlet indir pdf",
    "steps": [
      "e-Devlet’te Açık Öğretim Liseleri Öğrenci Durum Belgesi hizmetini aç.",
      "Kimliğini doğrulayarak giriş yap.",
      "Belge oluştur seçeneğini kullan.",
      "Barkodlu belgeyi indir veya yazdır."
    ],
    "url": "https://www.turkiye.gov.tr/milli-egitim-acik-ogretim-liseleri-ogrenci-durum-belgesi-sorgulama",
    "cta": "Öğrenci belgesi al",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/sik-sorulan-sorularsss-genel-konular/icerik/12",
    "sourceLabel": "Genel konular SSS",
    "verified": true
  },
  {
    "title": "Mezuniyet belgesini nasıl alırım?",
    "description": "Mezuniyet belgesini sorgula; diploma teslim yerini öğren.",
    "category": "belge",
    "emoji": "🏅",
    "tags": "mezuniyet belgesi diploma çıkma belgesi e devlet mezun",
    "steps": [
      "e-Devlet’te Açık Öğretim Liseleri Mezuniyet Belgesi hizmetini aç.",
      "Kimliğini doğrula ve barkodlu mezuniyet belgesini oluştur.",
      "Diploma için yüz yüze eğitim aldığın okul/kurumla iletişime geç.",
      "Bir başkası teslim alacaksa noter vekâleti gerekip gerekmediğini okuldan doğrula."
    ],
    "url": "https://www.turkiye.gov.tr/milli-egitim-acik-ogretim-liseleri-mezuniyet-belgesi-sorgulama",
    "cta": "Mezuniyet belgesi al",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/sss-mezuniyet-ve-yuksek-ogretim-ile-ilgili-sorular/icerik/17",
    "sourceLabel": "Mezuniyet SSS",
    "verified": true
  },
  {
    "title": "Yüz yüze eğitim okulumu nasıl bulurum?",
    "description": "İl ve ilçeye göre AÖİHL yüz yüze eğitim kurumlarını sorgula.",
    "category": "kayit",
    "emoji": "🏫",
    "tags": "yüz yüze eğitim okul kurum kontenjan il ilçe kayıt yeri",
    "steps": [
      "Yüz Yüze Eğitim Veren Kurumlar ekranını aç.",
      "Önce il, ardından ilçe seç.",
      "Listeleme düğmesine basarak kurumları ve kontenjanları görüntüle.",
      "Kayıt veya ders işlemi öncesinde seçtiğin kurumla iletişime geç."
    ],
    "url": "https://aolweb.meb.gov.tr/yykurum_kontenjan.aspx",
    "cta": "Okul ve kontenjan ara",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/kayit-duyurusu/icerik/482/tr",
    "sourceLabel": "Güncel kayıt duyurusu",
    "verified": false
  },
  {
    "title": "Sınav sonucuna nasıl itiraz ederim?",
    "description": "Soru, cevap anahtarı veya sınav sonucu için resmî e-İtiraz yolunu kullan.",
    "category": "destek",
    "emoji": "⚖️",
    "tags": "itiraz sınav sonucu soru cevap anahtarı odsgm e itiraz",
    "steps": [
      "İtiraz süresi ve koşullarını güncel sınav duyurusundan kontrol et.",
      "ÖDSGM e-İtiraz sistemini aç.",
      "İlgili sınav ve itiraz türünü seçerek istenen bilgileri doldur.",
      "Başvuru sonucunu ve varsa ödeme/dekont bilgisini sakla."
    ],
    "url": "https://eitiraz.meb.gov.tr/",
    "cta": "e-İtiraz sistemini aç",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/sss-sinavlarla-ilgili-sorular/icerik/16",
    "sourceLabel": "Resmî sınav SSS",
    "verified": true
  },
  {
    "title": "Askerlik tecili (Ek-C2) belgesi nasıl alınır?",
    "description": "Erteleme işlemleri için açık lise öğrenci durum belgesini temin et.",
    "category": "belge",
    "emoji": "🎖️",
    "tags": "askerlik tecil ek c2 erteleme şube askerlik durum belgesi e-devlet",
    "steps": [
      "Öğrenci sisteminde kayıt durumunun 'Aktif' olduğunu doğrula (donuk öğrencilere tecil hakkı verilmez).",
      "e-Devlet'te Açık Öğretim Liseleri Öğrenci Durum Belgesi hizmetini aç.",
      "Belge üretim amacını 'Askerlik İşlemleri' olarak seçerek barkodlu belgeni oluştur ve yazdır.",
      "Askerlik şubesi kurum onaylı Ek-C2 talep ederse yüz yüze eğitim okuluna veya HEM'e başvurarak ıslak imzalı/mühürlü belge al."
    ],
    "note": "Açık lisede askerlik ertelemesi (tecili) azami 22 yaşını doldurduğun yılın sonuna kadar geçerlidir. Kaydını her dönem yenilemen şarttır.",
    "url": "https://www.turkiye.gov.tr/milli-egitim-acik-ogretim-liseleri-ogrenci-durum-belgesi-sorgulama",
    "cta": "e-Devlet'ten belge al",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/sik-sorulan-sorularsss-genel-konular/icerik/12",
    "sourceLabel": "Genel konular SSS",
    "verified": true
  },
  {
    "title": "Örgün liseden AÖİHL'ye geçiş ve intibak nasıl yapılır?",
    "description": "Örgün liseden açık imam hatibe geçiş, ders ve kredi aktarımı adımları.",
    "category": "kayit",
    "emoji": "🔄",
    "tags": "örgün lise geçiş intibak tasdikname kredi denklik aöihl kayıt",
    "steps": [
      "MEB açık liseye geçiş genelgesi kapsamındaki istisnai şartları (hafızlık, sporcu, mazeret vb.) taşıdığını doğrula.",
      "Mevcut örgün okulundan ayrılış tasdiknamesi veya öğrenim durum belgesi ile onaylı not dökümünü (transkript) al.",
      "Yüz yüze AÖİHL eğitimi veren en yakın Anadolu İmam Hatip Lisesine şahsen başvurarak kaydını yaptır.",
      "Okul komisyonunun örgünde geçtiğin dersleri AÖİHL kredilerine aktarmasını (intibak) bekle ve sistemden kredilerini kontrol et."
    ],
    "note": "Örgün lisede başarılan derslerin kredileri intibakla aynen sisteme eklenir ve okunan dönemler toplam döneme sayılır.",
    "url": "https://aoihl.meb.gov.tr/www/kayit-duyurusu/icerik/482/tr",
    "cta": "Kayıt duyurusunu aç",
    "sourceUrl": "https://aoihl.meb.gov.tr/meb_iys_dosyalar/2026_09/6aa3ac9f8da14767119316_A%C3%A7ik_Ogretim_Imam_Hatip_Lisesi_Yeni_Kayit_Kilavuzu.pdf",
    "sourceLabel": "Yeni kayıt kılavuzu",
    "verified": true
  },
  {
    "title": "Sınav ve kayıt yenileme ücreti nasıl yatırılır?",
    "description": "MEB ödeme sistemi ve anlaşmalı bankalardan harç yatırma adımları.",
    "category": "kayit",
    "emoji": "💳",
    "tags": "ödeme kayıt yenileme sınav ücreti harç meb ödeme odeme ziraat atm",
    "steps": [
      "MEB Destek Hizmetleri Genel Müdürlüğü Ödeme Sistemi adresini (odeme.meb.gov.tr) aç.",
      "Başvuru listesinden 'Açık Öğretim Kurumları Kayıt / Sınav Ücreti' seçeneğini belirle.",
      "T.C. kimlik numaranı ve cep telefonu numaranı eksiksiz gir.",
      "Banka/kredi kartı ile ödemeyi tamamla; dekontu PDF olarak kaydet (veya Ziraat/Halkbank/Vakıfbank ATM'lerinden kartsız yatır)."
    ],
    "note": "Şehit/gazi yakını, engelli (%40 ve üzeri) veya mevzuatta sayılan muafiyet grubundaki öğrenciler ücret ödemez; durum belgelerini okuluna onaylatmalıdır.",
    "url": "https://odeme.meb.gov.tr/",
    "cta": "MEB Ödeme Sistemine Git",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/kayit-duyurusu/icerik/482/tr",
    "sourceLabel": "Resmî kayıt duyurusu",
    "verified": true
  },
  {
    "title": "Biyometrik fotoğraf sisteme nasıl eklenir / güncellenir?",
    "description": "Sınav giriş belgesinde zorunlu olan fotoğraflı kaydı tamamlama.",
    "category": "destek",
    "emoji": "📸",
    "tags": "fotoğraf biyometrik vesikalık sistem sınav giriş belgesi fotoğraf güncelleme",
    "steps": [
      "Son 6 ay içinde çekilmiş, arka fonu beyaz vesikalık/biyometrik fotoğraf hazırla.",
      "Yüz yüze eğitim gördüğün imam hatip lisesine veya en yakın Halk Eğitimi Merkezine şahsen git.",
      "T.C. kimlik kartınla birlikte fotoğrafını MEB Bilgi Yönetim Sistemi'ne taratıp işlet.",
      "Öğrenci sistemine girerek fotoğrafının sisteme yüklendiğini ve sınav giriş belgende göründüğünü doğrula."
    ],
    "note": "Sınav giriş belgesinde fotoğrafı bulunmayan öğrenciler Millî Eğitim Bakanlığı kuralları gereğince sınava kesinlikle alınmaz!",
    "url": "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    "cta": "Öğrenci sistemini aç",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/sss-sinavlarla-ilgili-sorular/icerik/16",
    "sourceLabel": "Resmî sınav SSS",
    "verified": true
  },
  {
    "title": "İndirimli öğrenci seyahat kartı nasıl çıkarılır?",
    "description": "Şehir içi toplu taşıma için öğrenci pasosu / seyahat kartı alma adımları.",
    "category": "belge",
    "emoji": "🚌",
    "tags": "öğrenci kartı paso istanbulkart ego eshot toplu taşıma indirimli seyahat kartı",
    "steps": [
      "e-Devlet Kapısı'ndan güncel tarihli barkodlu Açık Öğretim Liseleri Öğrenci Belgesi indir.",
      "Yaşadığın ilin toplu taşıma merkezinin web sitesine (Örn: istanbulkart.istanbul veya EGO/ESHOT) gir.",
      "Online kart başvuru ekranında T.C. kimlik ve biyometrik vesikalık fotoğrafını yükle.",
      "Sistem MEB servisinden öğrenciliğini onaylayamazsa indirdiğin e-Devlet barkodlu öğrenci belgesini sisteme yükleyip kartını teslim al."
    ],
    "note": "İndirimli ulaşım kartından sadece kaydı 'Aktif' olan öğrenciler yararlanabilir. Kayıt yenilenmezse kart indirimi otomatik sonlanır.",
    "url": "https://www.turkiye.gov.tr/milli-egitim-acik-ogretim-liseleri-ogrenci-durum-belgesi-sorgulama",
    "cta": "e-Devlet öğrenci belgesi al",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/sik-sorulan-sorularsss-genel-konular/icerik/12",
    "sourceLabel": "Genel konular SSS",
    "verified": true
  },
  {
    "title": "Orijinal lise diploması okuldan nasıl teslim alınır?",
    "description": "Basılı resmî lise diplomasını okuldan şahsen veya vekâletle teslim alma.",
    "category": "belge",
    "emoji": "📜",
    "tags": "diploma orijinal lise diploması mezun teslim vekâlet okul çıkma belgesi",
    "steps": [
      "Öğrenci Bilgi Yönetim Sistemi'nde mezuniyet incelemesinin bittiğini ve durumunun 'Mezun' olduğunu gör.",
      "e-Devlet üzerinden Geçici Mezuniyet Belgesi (Çıkma Belgesi) alarak acil işlemlerde kullan.",
      "Yüz yüze eğitim aldığın imam hatip lisesini arayarak basılı diplomanın okula ulaşıp ulaşmadığını sor.",
      "Nüfus cüzdanın veya T.C. kimlik kartınla bizzat okula giderek imza karşılığında orijinal diplomanı teslim al."
    ],
    "note": "Diplomayı öğrencinin yerine yalnızca noter onaylı resmî vekâletnameye sahip birinci derece yakını veya kanuni vekili teslim alabilir.",
    "url": "https://aoihl.meb.gov.tr/www/sss-mezuniyet-ve-yuksek-ogretim-ile-ilgili-sorular/icerik/17",
    "cta": "Mezuniyet SSS'yi aç",
    "sourceUrl": "https://aoihl.meb.gov.tr/www/sss-mezuniyet-ve-yuksek-ogretim-ile-ilgili-sorular/icerik/17",
    "sourceLabel": "Resmî Mezuniyet SSS",
    "verified": true
  }
];

const PROMPTS = [
  {
    "title": "League of Legends görevi",
    "subtitle": "Matematik · Vadi, altın ve minyonlar",
    "emoji": "⚔️",
    "text": "Aşağıdaki matematik sorusunu League of Legends evreninde geçen kısa bir görev sorusuna dönüştür.\n\nKurallar:\n- Matematiksel işlemi, verilen sayıları, zorluk seviyesini ve tek doğru cevabı kesinlikle değiştirme.\n- Şampiyon, koridor, minyon, kule, eşya veya altın gibi LoL ögelerini yalnızca hikâyeleştirmek için kullan.\n- Gereksiz oyun bilgisi isteme; soru LoL bilmeyen biri tarafından da çözülebilsin.\n- Çözümü, ipucunu veya cevabı yazma.\n- Çıktıda yalnızca dönüştürülmüş soruyu ver.\n\nSORU:\n[MATEMATİK SORUSUNU BURAYA YAPIŞTIR]",
    "verified": true
  },
  {
    "title": "RPG yan görevi",
    "subtitle": "Her ders · Fantastik görev anlatımı",
    "emoji": "🧙",
    "text": "Aşağıdaki soruyu bir fantastik RPG oyunundaki kısa yan göreve dönüştür.\n\nKurallar:\n- Sorunun ölçtüğü bilgi veya beceriyi, sayıları, seçenekleri ve doğru cevabı değiştirme.\n- Karakter, eşya ve mekân adları ekleyebilirsin; çözüm için yeni bilgi gerektirme.\n- Metni anlaşılır ve en fazla 120 kelime tut.\n- Çözümü veya doğru cevabı açıklama.\n- Çıktıda yalnızca dönüştürülmüş soruyu ver.\n\nSORU:\n[SORUYU BURAYA YAPIŞTIR]",
    "verified": true
  },
  {
    "title": "Dedektif vakası",
    "subtitle": "Fen, tarih veya mantık · İpucu avı",
    "emoji": "🔎",
    "text": "Aşağıdaki soruyu öğrencinin kanıtları inceleyerek çözdüğü kısa bir dedektif vakasına dönüştür.\n\nKurallar:\n- Orijinal öğrenme hedefini, tüm verileri ve doğru cevabı koru.\n- Sorudaki bilgilerden her birini vakanın bir ipucu olarak kullan.\n- Yanıltıcı ya da çözüm için gereksiz yeni bilgi ekleme.\n- Cevabı ele verecek açıklama yapma.\n- Çıktıda vaka başlığı ve dönüştürülmüş soru dışında hiçbir şey yazma.\n\nSORU:\n[SORUYU BURAYA YAPIŞTIR]",
    "verified": true
  },
  {
    "title": "Futbol menajeri senaryosu",
    "subtitle": "Matematik · Transfer, puan ve istatistik",
    "emoji": "⚽",
    "text": "Aşağıdaki matematik sorusunu bir futbol menajerinin karar vermesi gereken gerçekçi bir senaryoya dönüştür.\n\nKurallar:\n- Sayıları, matematiksel ilişkiyi, istenen sonucu ve doğru cevabı değiştirme.\n- Transfer bütçesi, maç puanı, oyuncu istatistiği veya lig tablosu temasından en uygun olanı seç.\n- Futbol kuralı bilmeyi gerektirmeyecek kadar açık yaz.\n- Çözümü ve cevabı verme.\n- Çıktıda yalnızca dönüştürülmüş soruyu ver.\n\nSORU:\n[MATEMATİK SORUSUNU BURAYA YAPIŞTIR]",
    "verified": false
  },
  {
    "title": "Boss savaşı",
    "subtitle": "Her ders · Aşamalı meydan okuma",
    "emoji": "🐉",
    "text": "Aşağıdaki soruyu bir boss savaşının son hamlesi gibi sun.\n\nKurallar:\n- Öğrenme hedefini, soru kökünü, verileri, seçenekleri ve doğru cevabı değiştirme.\n- Kısa bir atmosfer metni ekle; asıl soruyu açıkça ayırt edilebilir biçimde yaz.\n- Zorluk seviyesini artırma veya azaltma.\n- Çözüm, ipucu ya da cevap verme.\n- Çıktıda yalnızca dönüştürülmüş soruyu ver.\n\nSORU:\n[SORUYU BURAYA YAPIŞTIR]",
    "verified": true
  },
  {
    "title": "Uzay istasyonu görevi",
    "subtitle": "Fen ve matematik · Sistemleri kurtar",
    "emoji": "🚀",
    "text": "Aşağıdaki soruyu bir uzay istasyonunda çözülmesi gereken kısa bir göreve dönüştür.\n\nKurallar:\n- Öğrenme hedefini, bütün sayıları, birimleri, seçenekleri ve doğru cevabı aynen koru.\n- Gezegen, yakıt, oksijen veya enerji ögelerini yalnızca hikâye için kullan.\n- Bilimsel olarak yanlış veya çözüm için yeni veri ekleme.\n- En fazla 120 kelime yaz; çözümü ve cevabı verme.\n- Çıktıda yalnızca dönüştürülmüş soruyu ver.\n\nSORU:\n[SORUYU BURAYA YAPIŞTIR]",
    "verified": true
  },
  {
    "title": "Zaman yolculuğu",
    "subtitle": "Tarih ve edebiyat · Döneme tanıklık et",
    "emoji": "⏳",
    "text": "Aşağıdaki tarih veya edebiyat sorusunu kısa bir zaman yolculuğu sahnesine dönüştür.\n\nKurallar:\n- Tarihî olguları, kişi ve eser adlarını, seçenekleri ve doğru cevabı değiştirme.\n- Öğrenciyi döneme gönder fakat kaynakta olmayan bir bilgiyi gerçekmiş gibi ekleme.\n- Soru tema bilgisi olmadan çözülebilsin.\n- Cevabı ima etme, çözüm açıklama.\n- Çıktıda kısa bir sahne başlığı ve dönüştürülmüş soruyu ver.\n\nSORU:\n[SORUYU BURAYA YAPIŞTIR]",
    "verified": true
  },
  {
    "title": "Kaçış odası",
    "subtitle": "Her ders · Bir kilidi aç",
    "emoji": "🔐",
    "text": "Aşağıdaki soruyu bir kaçış odasındaki son kilidi açan bulmacaya dönüştür.\n\nKurallar:\n- Orijinal kazanımı, soru verilerini, seçenekleri ve doğru cevabı eksiksiz koru.\n- Her veriyi odadaki bir ipucu gibi sun; fazladan işlem gerektirme.\n- Gerilim hafif ve yaşa uygun olsun.\n- Çözümü, ipucunun yorumunu veya cevabı verme.\n- Yalnızca sahne ve dönüştürülmüş soruyu yaz.\n\nSORU:\n[SORUYU BURAYA YAPIŞTIR]",
    "verified": false
  },
  {
    "title": "Mutfak meydan okuması",
    "subtitle": "Matematik ve fen · Ölç, oranla, çöz",
    "emoji": "👨‍🍳",
    "text": "Aşağıdaki soruyu bir mutfak yarışmasındaki kısa göreve dönüştür.\n\nKurallar:\n- Sayıları, oranları, birimleri, bilimsel ilişkiyi ve doğru cevabı değiştirme.\n- Malzemeleri yalnızca bağlam kurmak için kullan; yeni alerjen veya kültürel varsayım ekleme.\n- Birimlerin birbiriyle tutarlı kalmasını sağla.\n- Çözümü veya cevabı verme.\n- Çıktıda yalnızca dönüştürülmüş soruyu ver.\n\nSORU:\n[SORUYU BURAYA YAPIŞTIR]",
    "verified": true
  },
  {
    "title": "Haber merkezi",
    "subtitle": "Türk dili, tarih ve coğrafya · Manşeti doğrula",
    "emoji": "📰",
    "text": "Aşağıdaki soruyu bir haber merkezinde doğrulanması gereken kısa bir dosyaya dönüştür.\n\nKurallar:\n- Metindeki olguları, kavramları, seçenekleri ve doğru cevabı değiştirme.\n- Öğrenci haber editörü olsun; soru çözmek için güncel haber veya internet araştırması gerekmesin.\n- Siyasi yorum, gerçek kişi hakkında uydurma bilgi veya taraflı dil ekleme.\n- Cevabı verme ya da ima etme.\n- Çıktıda dosya başlığı ve dönüştürülmüş soru dışında bir şey yazma.\n\nSORU:\n[SORUYU BURAYA YAPIŞTIR]",
    "verified": true
  },
  {
    "title": "Mini bölüm sonu testi",
    "subtitle": "Her ders · Üç aşamalı çalışma",
    "emoji": "🏁",
    "text": "Aşağıdaki tek soruyu aynı kazanımı ölçen üç aşamalı mini çalışmaya dönüştür.\n\nKurallar:\n- 1. aşama: Orijinal soruyu yalnızca daha açık bir dille yeniden yaz.\n- 2. aşama: Cevabı ele vermeyen tek bir küçük düşünme ipucu ekle.\n- 3. aşama: Orijinal soruyu kısa, oyunlaştırılmış bir final görevi olarak sun.\n- Tüm sayı, veri, seçenek ve doğru cevaplar aynı kalsın; yeni bilgi gerektirme.\n- Çözümü ve doğru cevabı yazma.\n\nSORU:\n[SORUYU BURAYA YAPIŞTIR]",
    "verified": true
  },
  {
    "title": "Kendi temanı seç",
    "subtitle": "Her ders · Dilediğin evrene uyarla",
    "emoji": "🎮",
    "text": "Aşağıdaki soruyu [İSTEDİĞİN TEMA] evrenine uyarlayarak yeniden yaz.\n\nKurallar:\n- Sorunun ölçtüğü kazanımı, tüm sayıları/verileri, seçenekleri ve doğru cevabı aynen koru.\n- Tema yalnızca anlatımı değiştirsin; çözüm yöntemini değiştirmesin.\n- Tema hakkında ön bilgi gerektirme.\n- Metni kısa, doğal ve yaşa uygun tut.\n- Çözümü veya cevabı yazma.\n- Çıktıda yalnızca dönüştürülmüş soruyu ver.\n\nSORU:\n[SORUYU BURAYA YAPIŞTIR]",
    "verified": false
  }
];

const ICONS = {
  home: '<path d="m3 11 9-8 9 8v9H5v-9m5 9v-6h4v6"/>',
  edit: '<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Zm9-13 4 4"/>',
  calendar: '<path d="M5 4h14v16H5zM8 2v4m8-4v4M5 9h14"/>',
  file: '<path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6m-6 4h6"/>',
  book: '<path d="M4 5a3 3 0 0 1 3-2h5v17H7a3 3 0 0 0-3 2V5Zm16 0a3 3 0 0 0-3-2h-5v17h5a3 3 0 0 1 3 2V5Z"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Zm-3-11 2 2 4-4"/>',
  school: '<path d="m3 9 9-5 9 5-9 5-9-5Zm3 3v6h12v-6M4 21h16"/>',
  help: '<path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm-2.5-13a2.7 2.7 0 1 1 4.4 2.1c-1 .7-1.9 1.2-1.9 2.9m0 3h.01"/>'
};

const externalIcon = '<svg class="external-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5m0-5-9 9M19 14v5H5V5h5"/></svg>';
const examState = { year: "2025–2026" };
const glossaryState = { query: "" };
const resourcesState = { query: "" };
let installPrompt = null;

const sectionsEl = document.querySelector("#resource-sections");
const toTopEl = document.querySelector("#to-top");
const pathwayGridEl = document.querySelector("#pathway-grid");
const promptGridEl = document.querySelector("#prompt-grid");
const copyStatusEl = document.querySelector("#copy-status");
const examFiltersEl = document.querySelector("#exam-filters");
const examGridEl = document.querySelector("#exam-grid");
const examCountEl = document.querySelector("#exam-count");
const examEmptyEl = document.querySelector("#exam-empty");
const glossarySearchEl = document.querySelector("#glossary-search");
const glossaryGridEl = document.querySelector("#glossary-grid");
const glossaryCountEl = document.querySelector("#glossary-count");
const glossaryEmptyEl = document.querySelector("#glossary-empty");
const resourcesSearchEl = document.querySelector("#resources-search");
const resourcesCountEl = document.querySelector("#resources-count");
const resourcesEmptyEl = document.querySelector("#resources-empty");
const stickySearchWrappers = [...document.querySelectorAll(".sticky-search-wrapper")];
const viewTabsEl = document.querySelector("#view-tabs");
const viewSections = [...document.querySelectorAll("[data-view-section]")];
const supportButtonEl = document.querySelector("#support-button");
const supportDialogEl = document.querySelector("#support-dialog");
const supportShareEl = document.querySelector("#support-share");

const HASH_VIEWS = {
  "#ust": "home",
  "#ana-sayfa": "home",
  "#tumu": "all",
  "#hepsi": "all",
  "#sayisal-sozel": "sayisal-sozel",
  "#kendi-kendini-sayisalci-sozelci-yap": "sayisal-sozel",
  "#tavsiyeler": "tavsiyeler",
  "#taktikler": "tavsiyeler",
  "#cikmis-sorular": "exams",
  "#aoihl-nedir": "about",
  "#sozluk": "glossary",
  "#kaynaklar": "resources",
  "#islem-yollari": "pathways",
  "#egitimci-kurumlar": "educators",
  "#prompt-title": "prompts",
  "#uygulamalar": "apps",
  "#apps": "apps",
  "#destek-ol": "support",
  "#destek": "support",
  "#iban": "support",
  "#uyari": "home",
  "#yasal-uyari": "home"
};
const VIEW_HASHES = {
  home: "#ana-sayfa",
  all: "#tumu",
  "sayisal-sozel": "#sayisal-sozel",
  tavsiyeler: "#tavsiyeler",
  exams: "#cikmis-sorular",
  about: "#aoihl-nedir",
  glossary: "#sozluk",
  resources: "#kaynaklar",
  pathways: "#islem-yollari",
  educators: "#egitimci-kurumlar",
  prompts: "#prompt-title",
  apps: "#uygulamalar",
  support: "#destek-ol"
};

function normalize(value) {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i");
}

function escapeHTML(value) {
  return String(value || "").replace(/[&<>"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  })[character]);
}

function highlightMatches(text, query) {
  if (!text) return "";
  if (!query || !query.trim()) return escapeHTML(text);

  const normText = normalize(text);
  const rawTokens = query.trim().split(/\s+/).filter(Boolean);
  const normTokens = [...new Set(rawTokens.map(normalize).filter(Boolean))];

  if (!normTokens.length) return escapeHTML(text);

  const intervals = [];
  for (const token of normTokens) {
    let pos = 0;
    while ((pos = normText.indexOf(token, pos)) !== -1) {
      intervals.push([pos, pos + token.length]);
      pos += 1;
    }
  }

  if (!intervals.length) return escapeHTML(text);

  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const prev = merged[merged.length - 1];
    const curr = intervals[i];
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      merged.push(curr);
    }
  }

  let result = "";
  let lastIdx = 0;
  for (const [start, end] of merged) {
    if (start > lastIdx) {
      result += escapeHTML(text.slice(lastIdx, start));
    }
    result += `<mark class="search-highlight">${escapeHTML(text.slice(start, end))}</mark>`;
    lastIdx = end;
  }
  if (lastIdx < text.length) {
    result += escapeHTML(text.slice(lastIdx));
  }

  return result;
}

function getDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "resmî kaynak";
  }
}

function svgFor(icon) {
  return `<svg aria-hidden="true" viewBox="0 0 24 24">${ICONS[icon] || ICONS.file}</svg>`;
}

function setActiveView(view, shouldScroll = true) {
  const targetBtn = document.querySelector(`[data-view="${view}"]`);
  if (targetBtn && (targetBtn.disabled || targetBtn.classList.contains("is-disabled") || targetBtn.getAttribute("aria-disabled") === "true")) {
    view = "home";
  }
  const activeView = (document.querySelector(`[data-view="${view}"]:not([disabled]):not(.is-disabled)`)) ? view : "home";
  document.body.dataset.activeView = activeView;
  viewSections.forEach((section) => {
    if (activeView === "all") {
      section.hidden = false;
    } else {
      section.hidden = section.dataset.viewSection !== activeView;
    }
  });
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.view === activeView));
  });
  if (viewTabsEl) {
    const activeButton = viewTabsEl.querySelector(`[data-view="${activeView}"]`);
    if (activeView === "home" || activeView === "all") {
      viewTabsEl.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      activeButton?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  }
  renderGlossary();
  render();
  if (shouldScroll) window.scrollTo({ top: 0, behavior: "smooth" });
  updateStickySearchState();
}

function resourceItem(resource, category, rawQuery) {
  const badge = resource.badge ? `<span class="badge">${resource.badge}</span>` : "";
  return `<li>
    <a class="resource-link" href="${resource.url}" target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">${svgFor(category.icon)}</span>
      <span class="resource-copy">
        <span class="title-row"><strong>${highlightMatches(resource.title, rawQuery)}</strong>${badge}</span>
        <p>${highlightMatches(resource.description, rawQuery)}</p>
        <span class="resource-domain">${getDomain(resource.url)}</span>
      </span>
      ${externalIcon}
    </a>
  </li>`;
}

function render() {
  const query = resourcesState.query.trim();
  const normQuery = normalize(query);
  const tokens = normQuery ? normQuery.split(/\s+/).filter(Boolean) : [];
  let totalMatches = 0;

  const sections = CATEGORIES.map((category) => {
    const items = RESOURCES.filter((resource) => {
      if (resource.category !== category.id) return false;
      if (!tokens.length) return true;
      const target = normalize(`${resource.title} ${resource.description}`);
      return tokens.every((token) => target.includes(token));
    });

    if (!items.length) return "";
    totalMatches += items.length;

    return `<section class="category-section" aria-labelledby="heading-${category.id}">
      <div class="section-heading">
        <h3 id="heading-${category.id}">${category.label}</h3>
        <span>${items.length} kaynak</span>
      </div>
      <div class="resource-grid">
        <ul class="link-list">${items.map((item) => resourceItem(item, category, query)).join("")}</ul>
      </div>
    </section>`;
  }).join("");

  sectionsEl.innerHTML = sections;
  if (resourcesCountEl) {
    resourcesCountEl.textContent = `${totalMatches} kaynak`;
  }
  if (resourcesEmptyEl) {
    resourcesEmptyEl.hidden = totalMatches > 0;
  }
}


function renderPathways() {
  pathwayGridEl.innerHTML = PATHWAYS.map((pathway) => `
    <details class="pathway-card">
      <summary>
        <span class="pathway-emoji" aria-hidden="true">${pathway.emoji}</span>
        <span class="pathway-summary-copy">
          <strong>${escapeHTML(pathway.title)}</strong>
          <small>${escapeHTML(pathway.description)}</small>
        </span>
        <span class="pathway-steps-count">${pathway.steps.length} adım</span>
        <svg class="pathway-chevron" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
      </summary>
      <div class="pathway-body">
        <ol>${pathway.steps.map((step) => `<li>${escapeHTML(step)}</li>`).join("")}</ol>
        ${pathway.note ? `<p class="pathway-note"><strong>Dikkat:</strong> ${escapeHTML(pathway.note)}</p>` : ""}
        <div class="pathway-actions">
          <a class="pathway-primary" href="${pathway.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(pathway.cta)} ${externalIcon}</a>
          <a class="pathway-source" href="${pathway.sourceUrl}" target="_blank" rel="noopener noreferrer">${escapeHTML(pathway.sourceLabel)}</a>
        </div>
      </div>
    </details>
  `).join("");
}

function renderExams() {
  const matches = EXAMS.filter((exam) => examState.year === "Tümü" || exam.year === examState.year);
  examFiltersEl.innerHTML = EXAM_YEARS.map((year) => `
    <button class="exam-filter" type="button" data-exam-year="${year}" aria-pressed="${examState.year === year}">${year}</button>
  `).join("");
  examGridEl.innerHTML = matches.map((exam) => `
    <article class="exam-card">
      <div class="exam-card-top">
        <span class="exam-term">${exam.term}. dönem</span>
        ${exam.latest ? '<span class="exam-latest">En son</span>' : ""}
      </div>
      <h3>${exam.year}</h3>
      <p>${exam.date}</p>
      <div class="exam-session-links">
        ${exam.sessions.map((url, index) => `
          <a href="${url}" target="_blank" rel="noopener noreferrer">
            <span class="session-name">${index + 1}. oturum</span>
            <span class="session-pdf-tag">PDF</span>
          </a>
        `).join("")}
      </div>
      <a class="exam-source-link" href="${exam.url}" target="_blank" rel="noopener noreferrer">Resmî duyuru ${externalIcon}</a>
    </article>
  `).join("");
  examCountEl.textContent = `${matches.length} sınav`;
  examEmptyEl.hidden = matches.length > 0;
}

function renderGlossary() {
  const query = glossaryState.query.trim();
  const normQuery = normalize(query);
  const tokens = normQuery ? normQuery.split(/\s+/).filter(Boolean) : [];
  const matches = GLOSSARY.filter((item) => {
    if (!tokens.length) return true;
    const target = normalize(`${item.term} ${item.definition} ${item.analogy || ""}`);
    return tokens.every((token) => target.includes(token));
  });

  glossaryGridEl.innerHTML = matches.map((item) => `
    <details class="glossary-item" ${query ? "open" : ""}>
      <summary>
        <span>${highlightMatches(item.term, query)}</span>
        <svg class="glossary-chevron" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
      </summary>
      <div class="glossary-body">
        <p>${highlightMatches(item.definition, query)}</p>
        ${item.analogy ? `<p class="glossary-analogy"><span>Bi başka deyişle</span>${highlightMatches(item.analogy, query)}</p>` : ""}
      </div>
    </details>
  `).join("");
  glossaryCountEl.textContent = `${matches.length} terim`;
  glossaryEmptyEl.hidden = matches.length > 0;
}

function renderPrompts() {
  promptGridEl.innerHTML = PROMPTS.map((prompt, index) => `
    <details class="prompt-card">
      <summary>
        <span class="prompt-emoji" aria-hidden="true">${prompt.emoji}</span>
        <span class="prompt-summary-copy">
          <strong>${prompt.title}</strong>
          <small>${prompt.subtitle}</small>
        </span>
        <svg class="prompt-chevron" aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
      </summary>
      <div class="prompt-body">
        <pre>${escapeHTML(photoReadyPrompt(prompt.text))}</pre>
        <button class="copy-prompt" type="button" data-prompt-index="${index}">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 8h10v12H9zM5 16H3V4h10v2"/></svg>
          Promptu kopyala
        </button>
      </div>
    </details>
  `).join("");
}

function photoReadyPrompt(text) {
  const photoInstruction = "Önce yüklediğim soru veya test sayfası fotoğrafındaki metni, sayıları ve seçenekleri dikkatle oku. Görsel net değilse tahmin yürütme; benden daha net bir fotoğraf iste.";
  const sourceInstruction = "SORU KAYNAĞI:\nYüklediğim görseldeki soru veya sorular.";
  return `${photoInstruction}\n\n${text.replace(/SORU:\n\[[^\]]+\]/, sourceInstruction)}`;
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

examFiltersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-exam-year]");
  if (!button) return;
  examState.year = button.dataset.examYear;
  renderExams();
});

["input", "search"].forEach((eventType) => {
  glossarySearchEl?.addEventListener(eventType, (event) => {
    glossaryState.query = event.target.value;
    renderGlossary();
  });

  resourcesSearchEl?.addEventListener(eventType, (event) => {
    resourcesState.query = event.target.value;
    render();
  });
});


let isStickyTicking = false;
function updateStickySearchState() {
  const topbarOffset = window.innerWidth >= 1024 ? 72 : 0;
  stickySearchWrappers.forEach((wrapper) => {
    const section = wrapper.closest("[data-view-section]");
    if (section && section.hidden) return;

    const rect = wrapper.getBoundingClientRect();
    const container = wrapper.parentElement;
    const containerRect = container.getBoundingClientRect();
    const isStuck = rect.top <= topbarOffset + 2 && containerRect.bottom > topbarOffset + rect.height;
    wrapper.classList.toggle("is-stuck", isStuck);
  });
  isStickyTicking = false;
}

document.addEventListener("click", (event) => {
  const viewBtn = event.target.closest("[data-view]");
  if (viewBtn) {
    if (viewBtn.disabled || viewBtn.classList.contains("is-disabled") || viewBtn.getAttribute("aria-disabled") === "true") {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const view = viewBtn.dataset.view;
    if (view) {
      const hash = VIEW_HASHES[view] || "#ana-sayfa";
      if (location.hash !== hash) history.pushState(null, "", hash);
      setActiveView(view);
      return;
    }
  }
  const copyIbanBtn = event.target.closest("#btn-copy-iban");
  if (copyIbanBtn) {
    const ibanText = document.querySelector("#support-iban-text")?.textContent.trim() || "";
    copyText(ibanText);
    const span = copyIbanBtn.querySelector("span") || copyIbanBtn;
    span.textContent = "Kopyalandı ✓";
    setTimeout(() => {
      span.textContent = "Kopyala";
    }, 2000);
    return;
  }
  const jumpBtn = event.target.closest("[data-view-jump]");
  if (jumpBtn) {
    const view = jumpBtn.dataset.viewJump;
    const targetBtn = document.querySelector(`[data-view="${view}"]`);
    if (targetBtn && (targetBtn.disabled || targetBtn.classList.contains("is-disabled"))) {
      event.preventDefault();
      return;
    }
    const hash = VIEW_HASHES[view] || "#ana-sayfa";
    if (location.hash !== hash) history.pushState(null, "", hash);
    setActiveView(view);
    return;
  }
  const link = event.target.closest("a[href^='#']");
  if (!link) return;
  const requestedView = link.dataset.viewLink || HASH_VIEWS[link.getAttribute("href")];
  if (!requestedView) return;
  event.preventDefault();
  const hash = VIEW_HASHES[requestedView] || link.getAttribute("href");
  if (location.hash !== hash) history.pushState(null, "", hash);
  setActiveView(requestedView, false);
  const target = document.querySelector(link.getAttribute("href"));
  if (requestedView === "home" || requestedView === "all") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

function restoreViewFromUrl() {
  const hash = location.hash;
  if (hash === "#uyari" || hash === "#yasal-uyari") {
    openDisclaimerModal();
  }
  const view = HASH_VIEWS[hash] || "home";
  setActiveView(view, false);
  if (view === "home" || view === "all") {
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }
  const target = document.querySelector(hash);
  target?.scrollIntoView({ behavior: "auto", block: "start" });
}
window.addEventListener("popstate", restoreViewFromUrl);
window.addEventListener("hashchange", restoreViewFromUrl);

window.addEventListener("scroll", () => {
  toTopEl.hidden = window.scrollY < 500;
  if (!isStickyTicking) {
    window.requestAnimationFrame(updateStickySearchState);
    isStickyTicking = true;
  }
}, { passive: true });

window.addEventListener("resize", () => {
  if (!isStickyTicking) {
    window.requestAnimationFrame(updateStickySearchState);
    isStickyTicking = true;
  }
}, { passive: true });

toTopEl.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

promptGridEl.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-prompt-index]");
  if (!button) return;
  const prompt = PROMPTS[Number(button.dataset.promptIndex)];
  try {
    await copyText(photoReadyPrompt(prompt.text));
    copyStatusEl.textContent = `“${prompt.title}” promptu kopyalandı.`;
    button.lastChild.textContent = " Kopyalandı";
    window.setTimeout(() => {
      button.lastChild.textContent = " Promptu kopyala";
      copyStatusEl.textContent = "";
    }, 1800);
  } catch {
    copyStatusEl.textContent = "Kopyalanamadı. Prompt metnini seçerek kopyalayabilirsin.";
  }
});

supportShareEl?.addEventListener("click", async () => {
  const shareData = {
    title: "AİÖHL REHBERİN",
    text: "AİÖHL öğrencileri için ücretsiz resmî kaynak rehberi",
    url: location.href
  };
  try {
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(location.href);
      supportShareEl.textContent = "Bağlantı kopyalandı ✓";
      setTimeout(() => { supportShareEl.textContent = "Şimdilik rehberi paylaş"; }, 2200);
    }
  } catch (error) {
    if (error.name !== "AbortError") supportShareEl.textContent = "Paylaşım açılamadı";
  }
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js"));
}

function initChecklist() {
  const checklistEl = document.querySelector("#student-checklist");
  if (!checklistEl) return;
  const inputs = checklistEl.querySelectorAll("input[data-check-id]");
  inputs.forEach((input) => {
    const id = input.dataset.checkId;
    input.checked = localStorage.getItem(`aoihl-check-${id}`) === "1";
    input.addEventListener("change", () => {
      localStorage.setItem(`aoihl-check-${id}`, input.checked ? "1" : "0");
    });
  });
}

const disclaimerModalEl = document.querySelector("#disclaimer-modal");
const disclaimerConfirmBtn = document.querySelector("#disclaimer-confirm-btn");
const disclaimerCloseBtn = document.querySelector("#disclaimer-close-btn");
const footerDisclaimerTrigger = document.querySelector("#footer-disclaimer-trigger");

function openDisclaimerModal() {
  if (!disclaimerModalEl) return;
  disclaimerModalEl.hidden = false;
  document.body.classList.add("disclaimer-open");
  disclaimerConfirmBtn?.focus();
}

function hideDisclaimerModal() {
  if (!disclaimerModalEl) return;
  disclaimerModalEl.hidden = true;
  document.body.classList.remove("disclaimer-open");
}

function initDisclaimerModal() {
  if (!disclaimerModalEl) return;

  disclaimerConfirmBtn?.addEventListener("click", hideDisclaimerModal);
  disclaimerCloseBtn?.addEventListener("click", hideDisclaimerModal);

  disclaimerModalEl.addEventListener("click", (event) => {
    if (event.target === disclaimerModalEl) {
      hideDisclaimerModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !disclaimerModalEl.hidden) {
      hideDisclaimerModal();
    }
  });

  footerDisclaimerTrigger?.addEventListener("click", openDisclaimerModal);
}

renderPrompts();
renderPathways();
renderExams();
renderGlossary();
render();
initChecklist();
initDisclaimerModal();
restoreViewFromUrl();
updateStickySearchState();
