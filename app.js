const CATEGORIES = [
  { id: "hizli", label: "Hızlı erişim", icon: "home" },
  { id: "kayit", label: "Kayıt & ders", icon: "edit" },
  { id: "sinav", label: "Sınav işlemleri", icon: "calendar" },
  { id: "soru", label: "Çıkmış sorular", icon: "file" },
  { id: "materyal", label: "Kitap & materyal", icon: "book" },
  { id: "belge", label: "e-Devlet belgeleri", icon: "shield" },
  { id: "mezuniyet", label: "Mezuniyet & yüz yüze", icon: "school" },
  { id: "yardim", label: "Yardım & iletişim", icon: "help" }
];

const RESOURCES = [
  {
    title: "AÖİHL resmî sitesi",
    description: "Haber, duyuru, kılavuz ve okul bağlantılarının ana adresi.",
    url: "https://aoihl.meb.gov.tr/",
    category: "hizli",
    tags: "ana sayfa açık öğretim imam hatip lisesi meb",
    badge: "Ana kaynak"
  },
  {
    title: "Açık Öğretim Liseleri öğrenci girişi",
    description: "Ders seçimi, kayıt, sınav merkezi, randevu, sonuç ve öğrenci bilgileri.",
    url: "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    category: "hizli",
    tags: "öğrenci sistemi bilgi yönetim sistemi giriş ders kredi şifre e devlet",
    badge: "İşlem"
  },
  {
    title: "2026–2027 kayıt duyurusu",
    description: "1. dönem yeni kayıt, kayıt yenileme, ders seçimi ve sınav tarihleri.",
    url: "https://aoihl.meb.gov.tr/www/kayit-duyurusu/icerik/482/tr",
    category: "hizli",
    tags: "güncel duyuru 11 eylül 12 ekim 2026 2027 kayıt yenileme ücret sınav",
    badge: "Güncel"
  },
  {
    title: "A-Okul resmî kaynak merkezi",
    description: "Ders kitapları, mobil uygulama, e-Devlet, EBA ve HEMBA yönlendirmeleri.",
    url: "https://aokul.gov.tr/",
    category: "hizli",
    tags: "a okul tüm kaynaklar mobil uygulama kitap eba hemba"
  },
  {
    title: "AÖİHL haberleri",
    description: "Kayıt, sınav, sonuç ve öğrencilik işlemlerine ilişkin son haberler.",
    url: "https://aoihl.meb.gov.tr/www/haberler/kategori/1",
    category: "hizli",
    tags: "haberler güncel son gelişmeler ilan"
  },
  {
    title: "AÖİHL duyuruları",
    description: "Ders seçimi ve okul işlemlerine ilişkin resmî duyuru arşivi.",
    url: "https://aoihl.meb.gov.tr/www/duyurular/kategori/2",
    category: "hizli",
    tags: "duyurular arşiv ders seçimi okul işlemleri"
  },

  {
    title: "2026–2027 yeni kayıt kılavuzu",
    description: "Başvuru şartları, evraklar, ücret, ders seçimi ve sınav işlemleri.",
    url: "https://aoihl.meb.gov.tr/meb_iys_dosyalar/2026_09/6aa3ac9f8da14767119316_A%C3%A7ik_Ogretim_Imam_Hatip_Lisesi_Yeni_Kayit_Kilavuzu.pdf",
    category: "kayit",
    tags: "pdf yeni kayıt kılavuz başvuru şartlar evrak 2026 2027",
    badge: "PDF"
  },
  {
    title: "2026–2027 kayıt yenileme kılavuzu",
    description: "Kayıt yenileme, ücret, muafiyet, ders ve sınav işlemlerinin güncel kılavuzu.",
    url: "https://aoihl.meb.gov.tr/meb_iys_dosyalar/2026_09/6aa3ac8505c3a322120411_A%C3%A7ik_Ogretim_Imam_Hatip_Lisesi_Kayit_Yenileme_Kilavuzu.pdf",
    category: "kayit",
    tags: "pdf kayıt yenileme kılavuz ücret muafiyet 2026 2027",
    badge: "PDF"
  },
  {
    title: "Ders seçimi erişimi",
    description: "Kayıt döneminde uzaktan eğitim derslerini öğrenci sisteminden seçin.",
    url: "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    category: "kayit",
    tags: "ders seçme seçimi uzaktan eğitim öğrenci sistemi kredi"
  },
  {
    title: "MEB ödeme servisi",
    description: "Kayıt ve kayıt yenileme ücretini yatırın; ödeme ve dekontu kontrol edin.",
    url: "https://odeme.meb.gov.tr/",
    category: "kayit",
    tags: "ücret ödeme dekont banka kredi kartı kayıt yenileme",
    badge: "İşlem"
  },
  {
    title: "İş takvimi arşivi",
    description: "Kayıt, ders seçimi, e-Sınav ve sonuç tarihlerinin yıllara göre takvimleri.",
    url: "https://aoihl.meb.gov.tr/www/is-takvimi-arsivi/icerik/253",
    category: "kayit",
    tags: "çalışma iş takvimi tarih kayıt ders seçim sınav sonuç arşiv"
  },
  {
    title: "Örgün eğitimden geçiş şartları",
    description: "Ortaöğretim Kurumları Yönetmeliği 41/2 kapsamındaki resmî geçiş koşulları.",
    url: "https://aoihl.meb.gov.tr/meb_iys_dosyalar/2026_09/6aa3acd92d481800515581_OOKY_Madde_41.pdf",
    category: "kayit",
    tags: "nakil geçiş örgün ortaöğretim yönetmelik madde 41 pdf",
    badge: "PDF"
  },
  {
    title: "Kayıt işlemleri SSS",
    description: "Yeni kayıt, kayıt yenileme, belge ve öğrencilik durumu soruları.",
    url: "https://aoihl.meb.gov.tr/www/sss-kayit-islemleri/icerik/14",
    category: "kayit",
    tags: "sık sorulan sorular sss aktif donuk silik evrak"
  },

  {
    title: "2026–2027 / 1. dönem sınav bilgileri",
    description: "Yazılı sınav, e-Sınav, randevu ve giriş belgesi tarihleri güncel duyuruda.",
    url: "https://aoihl.meb.gov.tr/www/kayit-duyurusu/icerik/482/tr",
    category: "sinav",
    tags: "20 aralık 2026 esınav e sınav randevu giriş belgesi sınav merkezi"
  },
  {
    title: "Sınav giriş belgesi ve sonuçlar",
    description: "Fotoğraflı giriş belgesi, sınav yeri, e-Sınav randevusu ve sonuç ekranı.",
    url: "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    category: "sinav",
    tags: "sınav giriş belgesi sonuç yer salon randevu öğrenci sistemi"
  },
  {
    title: "ÖDSGM sınavlar arşivi",
    description: "MEB tarafından yayımlanan sınav duyuruları, kitapçıklar ve cevap anahtarları.",
    url: "https://odsgm.meb.gov.tr/www/sinavlar/kategori/50",
    category: "sinav",
    tags: "ölçme değerlendirme sınav hizmetleri arşiv odsgm kitapçık cevap"
  },
  {
    title: "2026 MEB sınav uygulama takvimi",
    description: "Açık öğretim yazılı sınav ve e-Sınav tarihlerini içeren resmî takvim.",
    url: "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2025_11/07120405_sinavuygulamatakvimi.pdf",
    category: "sinav",
    tags: "sınav takvimi tarih aoihl aöihl pdf 2026",
    badge: "PDF"
  },
  {
    title: "e-Sınav resmî sitesi",
    description: "MEB elektronik sınav uygulamalarına ilişkin resmî merkez.",
    url: "https://esinav.meb.gov.tr/",
    category: "sinav",
    tags: "elektronik sınav e sınav merkezi randevu"
  },
  {
    title: "MEB sınav yeri sorgulama",
    description: "e-Devlet üzerinden MEB sınav yeri bilgisi sorgulama hizmeti.",
    url: "https://www.turkiye.gov.tr/meb-sinav-yeri-sorgulama",
    category: "sinav",
    tags: "e devlet sınav yeri giriş belgesi sorgu"
  },
  {
    title: "MEB sınav sonucu sorgulama",
    description: "e-Devlet üzerinden MEB sınav sonuçlarını sorgulama hizmeti.",
    url: "https://www.turkiye.gov.tr/meb-sinav-sonuc-sorgulama",
    category: "sinav",
    tags: "e devlet sınav sonucu not puan sorgu"
  },

  {
    title: "2025–2026 / 3. dönem soru ve cevapları",
    description: "18–19 Temmuz 2026 AÖİHL soru kitapçıkları ve cevap anahtarları; 3 oturum.",
    url: "https://odsgm.meb.gov.tr/www/2025-2026-egitim-ogretim-yili-acik-ogretim-kurumlari-3-donem-yazili-sinavi-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi/icerik/1704/",
    category: "soru",
    tags: "çıkmış sorular cevap anahtarı son güncel temmuz 2026 3 dönem üç oturum",
    badge: "En yeni"
  },
  {
    title: "2025–2026 / 2. dönem soru ve cevapları",
    description: "14–15 Mart 2026 AÖİHL soru kitapçıkları ve cevap anahtarları; 3 oturum.",
    url: "https://odsgm.meb.gov.tr/www/1415mart2026tarihlerindeyapilanacikogretimkurumlari2donemsinavlarininsorukitapciklarivecevapanahtarlariyayimlandi/icerik/1558/tr",
    category: "soru",
    tags: "çıkmış sorular cevap anahtarı mart 2026 2 dönem iki üç oturum"
  },
  {
    title: "2025–2026 / 1. dönem soru ve cevapları",
    description: "20–21 Aralık 2025 AÖİHL soru kitapçıkları ve cevap anahtarları; 3 oturum.",
    url: "https://odsgm.meb.gov.tr/www/20-21-aralik-2025-tarihlerinde-yapilan-acik-ogretim-kurumlari-1-donem-sinavlarinin-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi/icerik/1522/tr",
    category: "soru",
    tags: "çıkmış sorular cevap anahtarı aralık 2025 1 dönem bir üç oturum"
  },
  {
    title: "2024–2025 / 1. dönem soru ve cevapları",
    description: "21–22 Aralık 2024 AÖİHL soru kitapçıkları ve cevap anahtarları; 3 oturum.",
    url: "https://odsgm.meb.gov.tr/www/21-22-aralik-2024-tarihlerinde-yapilan-acik-ogretim-lisesimesleki-acik-ogretim-lisesiacik-ogretim-imam-hatip-lisesi-1-donem-sinavlarinin-soru-kitapciklari-ve-cevap-anahtarlari/icerik/1377/tr",
    category: "soru",
    tags: "çıkmış sorular eski yıllar cevap anahtarı aralık 2024"
  },
  {
    title: "2023–2024 / 2. dönem soru ve cevapları",
    description: "16–17 Mart 2024 AÖİHL soru kitapçıkları ve cevap anahtarları.",
    url: "https://odsgm.meb.gov.tr/www/acik-ogretim-kurumlari-2023-2024-egitim-ogretim-yili-2-donem-sinavlarinin-kitapciklari-ve-cevap-anahtarlari-yayimlandi/icerik/1198",
    category: "soru",
    tags: "çıkmış sorular eski yıllar cevap anahtarı mart 2024"
  },
  {
    title: "Tüm eski sınavlar ve kitapçıklar",
    description: "Daha eski yıllara ait resmî soru ve cevap duyurularını ÖDSGM arşivinde bulun.",
    url: "https://odsgm.meb.gov.tr/www/sinavlar/kategori/50",
    category: "soru",
    tags: "tüm arşiv eski yıllar çıkmış soru kitapçık cevap anahtarı",
    badge: "Arşiv"
  },

  {
    title: "Açık öğretim liseleri ders kitapları",
    description: "AÖİHL alan dersleri dâhil PDF kitaplar, sesli içerikler ve sorumlu üniteler.",
    url: "https://aokul.gov.tr/Kitaplar/Kitaplar.aspx?type=2",
    category: "materyal",
    tags: "ders kitapları pdf sesli kaynak akaid fıkıh hadis siyer arapça"
  },
  {
    title: "EBA Açık Öğretim Okulları girişi",
    description: "Açık öğretim öğrencileri için EBA’nın resmî giriş ekranı.",
    url: "https://giris.eba.gov.tr/EBA_GIRIS/Giris?login=student&uygulamaKodu=diyalekt",
    category: "materyal",
    tags: "eba açık öğretim giriş video içerik ders çalışma"
  },
  {
    title: "EBA ders kitapları",
    description: "MEB onaylı dijital ders kitaplarına EBA hesabıyla erişim.",
    url: "https://derskitaplari.eba.gov.tr/login",
    category: "materyal",
    tags: "eba kitap dijital e kitap ders materyal"
  },
  {
    title: "DÖGM imam hatip materyalleri",
    description: "Arapça, Kur’an, hadis, tefsir, fıkıh ve meslek dersleri dokümanları.",
    url: "https://dogm.eba.gov.tr/materyal/home/dokumanlar",
    category: "materyal",
    tags: "din öğretimi dogm doküman imam hatip arapça kuran hadis tefsir fıkıh"
  },
  {
    title: "MEBİ öğrenme platformu",
    description: "Lise dersleri ve YKS hazırlığı için MEB’in ücretsiz konu ve soru içerikleri.",
    url: "https://mebi.eba.gov.tr/",
    category: "materyal",
    tags: "mebi yks hazırlık konu özeti deneme soru banka lise dersleri"
  },
  {
    title: "EBA Eğitim Bilişim Ağı",
    description: "Ders, video, kitap ve diğer MEB öğrenme içeriklerinin ana platformu.",
    url: "https://www.eba.gov.tr/",
    category: "materyal",
    tags: "eba eğitim bilişim ağı video kitap ders"
  },
  {
    title: "HEMBA",
    description: "Halk Eğitimi Merkezleri Bilişim Ağı’nın çevrim içi eğitim platformu.",
    url: "https://www.hemba.gov.tr/",
    category: "materyal",
    tags: "halk eğitim merkezi uzaktan eğitim kurs hemba"
  },
  {
    title: "Açık Öğretim Kurumları mobil uygulaması",
    description: "MEB’in ders seçimi, kayıt, öğrenci ve sınav işlemleri için resmî Android uygulaması.",
    url: "https://play.google.com/store/apps/details?hl=tr&id=com.meb.acikLise",
    category: "materyal",
    tags: "mobil uygulama android google play meb açık lise",
    badge: "MEB"
  },
  {
    title: "Açık Öğretim Kurumları iOS uygulaması",
    description: "MEB’in öğrenci ve sınav işlemleri için App Store’daki resmî uygulaması.",
    url: "https://apps.apple.com/tr/app/meb-ac-klise/id1148523971",
    category: "materyal",
    tags: "mobil uygulama iphone ios app store meb açık lise",
    badge: "MEB"
  },

  {
    title: "Öğrenci durum belgesi sorgulama",
    description: "Açık öğretim liseleri için barkodlu öğrenci durum belgesi oluşturun.",
    url: "https://www.turkiye.gov.tr/milli-egitim-acik-ogretim-liseleri-ogrenci-durum-belgesi-sorgulama",
    category: "belge",
    tags: "e devlet öğrenci belgesi öğrenim durum barkodlu resmi evrak"
  },
  {
    title: "Mezuniyet belgesi sorgulama",
    description: "Açık öğretim liseleri mezuniyet belgesine e-Devlet üzerinden erişin.",
    url: "https://www.turkiye.gov.tr/milli-egitim-acik-ogretim-liseleri-mezuniyet-belgesi-sorgulama",
    category: "belge",
    tags: "e devlet mezuniyet diploma geçici belge mezun"
  },
  {
    title: "Hizmete özel öğrenci belgesi (Ek-C2)",
    description: "Açık öğretim liseleri Ek-C2 öğrenci durum belgesini sorgulayın.",
    url: "https://www.turkiye.gov.tr/milli-egitim-acik-ogretim-liseleri-hizmete-ozel-ogrenci-durum-belgesi-ek-c2-sorgulama",
    category: "belge",
    tags: "e devlet askerlik tecil ek c2 hizmete özel öğrenci durum belgesi"
  },
  {
    title: "MEB öğrenci bilgi sistemi",
    description: "e-Devlet kimlik doğrulamasıyla MEB öğrenci bilgi sistemine giriş.",
    url: "https://www.turkiye.gov.tr/ogrenci-bilgi-sistemi",
    category: "belge",
    tags: "e devlet öğrenci bilgi sistemi giriş kayıt"
  },
  {
    title: "Açık öğretim belgelerini doğrulama",
    description: "e-Devlet barkodlu öğrenci ve mezuniyet belgelerinin doğrulama ekranı.",
    url: "https://www.turkiye.gov.tr/belge-dogrulama",
    category: "belge",
    tags: "e devlet belge doğrulama barkod öğrenci mezuniyet"
  },
  {
    title: "MEB’in tüm e-Devlet hizmetleri",
    description: "Millî Eğitim Bakanlığının e-Devlet üzerinden sunduğu hizmetlerin tam listesi.",
    url: "https://www.turkiye.gov.tr/milli-egitim-bakanligi",
    category: "belge",
    tags: "e devlet tüm hizmetler milli eğitim bakanlığı"
  },

  {
    title: "Yüz yüze eğitim veren okullar",
    description: "İl ve ilçeye göre kurumları ve güncel kontenjan bilgilerini görüntüleyin.",
    url: "https://aolweb.meb.gov.tr/yykurum_kontenjan.aspx",
    category: "mezuniyet",
    tags: "yüz yüze eğitim okul kurum kontenjan il ilçe bul"
  },
  {
    title: "Yüz yüze eğitim uygulama kılavuzu",
    description: "Alan dersleri, devam, sınav, program ve kurum işlemleri için güncel kılavuz.",
    url: "https://aoihl.meb.gov.tr/meb_iys_dosyalar/2025_08/29161025_aoihl_yuz_yuze_egitim_uygulama_kilavuzu.pdf",
    category: "mezuniyet",
    tags: "yüz yüze eğitim kılavuz alan meslek dersleri devam pdf",
    badge: "PDF"
  },
  {
    title: "AÖİHL mezuniyet şartları",
    description: "Dönem, kredi, zorunlu ders ve yüz yüze eğitim koşullarının resmî özeti.",
    url: "https://aoihl.meb.gov.tr/meb_iys_dosyalar/2025_10/08121219_aoihlmezuniyetsartlari_8ekim2025.pdf",
    category: "mezuniyet",
    tags: "mezuniyet şartları kredi dönem zorunlu ders yüz yüze eğitim pdf",
    badge: "PDF"
  },
  {
    title: "Mezuniyet ve yükseköğretim SSS",
    description: "Diploma, mezuniyet yazısı, YKS ve üniversite kaydı hakkında resmî cevaplar.",
    url: "https://aoihl.meb.gov.tr/www/sss-mezuniyet-ve-yuksek-ogretim-ile-ilgili-sorular/icerik/17",
    category: "mezuniyet",
    tags: "mezuniyet diploma yks üniversite yükseköğretim geçici belge sss"
  },
  {
    title: "Haftalık ders çizelgesi",
    description: "AÖİHL ortak, seçmeli ve yüz yüze alan derslerinin dönemlere göre çizelgesi.",
    url: "https://aoihl.meb.gov.tr/kitap_kilavuz/TTKB_haftalik_cizelge.pdf",
    category: "mezuniyet",
    tags: "haftalık ders çizelgesi kredi alan ortak seçmeli ders pdf",
    badge: "PDF"
  },
  {
    title: "Ders seçimi SSS",
    description: "Ortak, zorunlu, seçmeli ve alan derslerinin seçimi hakkında resmî cevaplar.",
    url: "https://aoihl.meb.gov.tr/www/sss-ders-secme-ile-ilgili-sorular/icerik/15",
    category: "mezuniyet",
    tags: "ders seçme sss ortak zorunlu seçmeli alan ders"
  },
  {
    title: "AÖİHL okul ve sistem bilgisi",
    description: "Okulun işleyişi, yüz yüze eğitim, kayıt ve mezuniyet yapısının özeti.",
    url: "https://aoihl.meb.gov.tr/www/okulumuz/icerik/227",
    category: "mezuniyet",
    tags: "okulumuz tanıtım sistem nasıl işler dönem kredi diploma"
  },

  {
    title: "AÖİHL sık sorulan sorular",
    description: "Kayıt, ders, sınav ve okul işlemleri için resmî SSS belgesi.",
    url: "https://aoihl.meb.gov.tr/meb_iys_dosyalar/2025_10/16113444_sikcasorulansorular.pdf",
    category: "yardim",
    tags: "sss sık sorulan sorular yardım pdf",
    badge: "PDF"
  },
  {
    title: "MEBİM iletişim kanalları",
    description: "7/24 çağrı, yazılı destek ve erişilebilir iletişim seçenekleri. 444 0 632.",
    url: "https://mebimportal.meb.gov.tr/ContactChannel",
    category: "yardim",
    tags: "mebim 444 0 632 çağrı merkezi telefon destek iletişim 7 24"
  },
  {
    title: "MEB iletişim bilgileri",
    description: "Bakanlık iletişim merkezi, adres ve kurum bağlantıları.",
    url: "https://meb.gov.tr/iletisim/",
    category: "yardim",
    tags: "meb iletişim adres telefon kurum"
  },
  {
    title: "MEBİM başvuru sonucu sorgulama",
    description: "MEBİM’e ilettiğiniz başvurunun durumunu e-Devlet üzerinden izleyin.",
    url: "https://www.turkiye.gov.tr/milli-egitim-iletisim-merkezi-mebim-basvuru-sonucu-sorgulama",
    category: "yardim",
    tags: "mebim e devlet başvuru takip sonuç sorgu"
  },
  {
    title: "ÖDSGM e-İtiraz sistemi",
    description: "Merkezî sınav soru, cevap ve sonuçlarına ilişkin resmî itiraz ekranı.",
    url: "https://eitiraz.meb.gov.tr/",
    category: "yardim",
    tags: "sınav itiraz soru cevap sonuç odsgm e itiraz"
  }
];

const EXAM_YEARS = ["Tümü", "2025–2026", "2024–2025", "2023–2024"];

const EXAMS = [
  {
    year: "2025–2026",
    term: 3,
    date: "18–19 Temmuz 2026",
    url: "https://odsgm.meb.gov.tr/www/2025-2026-egitim-ogretim-yili-acik-ogretim-kurumlari-3-donem-yazili-sinavi-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi/icerik/1704/",
    sessions: [
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2026_07/6a6082ad6d5eb136355807_1_OTURUM_18_TEMMUZ_2026T.pdf",
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2026_07/6a6082bc4f044429138184_2_OTURUM_18_TEMMUZ_2026T.pdf",
      "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2026_07/6a6082e05bde2533065434_3_OTURUM_19_TEMMUZ_2026T.pdf"
    ],
    latest: true
  },
  {
    year: "2025–2026",
    term: 2,
    date: "14–15 Mart 2026",
    url: "https://odsgm.meb.gov.tr/www/14-15-mart-2026-tarihlerinde-yapilan-acik-ogretim-kurumlari-2-donem-sinavlarinin-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi/icerik/1558",
    sessions: ["https://cdn.eba.gov.tr/yardimcikaynaklar/2026/03/AOK/aol_1oturum.pdf", "https://cdn.eba.gov.tr/yardimcikaynaklar/2026/03/AOK/aol_2oturum.pdf", "https://cdn.eba.gov.tr/yardimcikaynaklar/2026/03/AOK/aol_3oturum.pdf"]
  },
  {
    year: "2025–2026",
    term: 1,
    date: "20–21 Aralık 2025",
    url: "https://odsgm.meb.gov.tr/www/20-21-aralik-2025-tarihlerinde-yapilan-acik-ogretim-kurumlari-1-donem-sinavlarinin-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi/icerik/1522/tr",
    sessions: ["https://cdn.eba.gov.tr/yardimcikaynaklar/2025/12/acikogretim/lise/1_OTURUM_20_ARALIK_2025.pdf", "https://cdn.eba.gov.tr/yardimcikaynaklar/2025/12/acikogretim/lise/2_OTURUM_20_ARALIK_2025_T.pdf", "https://cdn.eba.gov.tr/yardimcikaynaklar/2025/12/acikogretim/lise/3_OTURUM_21_ARALIK_2025.pdf"]
  },
  {
    year: "2024–2025",
    term: 3,
    date: "19–20 Temmuz 2025",
    url: "https://odsgm.meb.gov.tr/www/19-20-temmuz-2025-tarihlerinde-yapilan-acik-ogretim-kurumlari-3-donem-sinavlarinin-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi/icerik/1459",
    sessions: ["https://cdn.eba.gov.tr/yardimcikaynaklar/2025/07/1_OTURUM_19_TEMMUZ_2025%28T%29LISE.pdf", "https://cdn.eba.gov.tr/yardimcikaynaklar/2025/07/2_OTURUM_19_TEMMUZ_2025%28T%29LISE.pdf", "https://cdn.eba.gov.tr/yardimcikaynaklar/2025/07/3_OTURUM_20_TEMMUZ_2025%28T%29LISE.pdf"]
  },
  {
    year: "2024–2025",
    term: 2,
    date: "22–23 Mart 2025",
    url: "https://odsgm.meb.gov.tr/www/22-23-mart-2025-tarihlerinde-yapilan-acik-ogretim-kurumlari-2-donem-sinavlarinin-soru-kitapciklari-ve-cevap-anahtarlari/icerik/1420",
    sessions: ["https://odsgm.meb.gov.tr/meb_iys_dosyalar/2025_03/28164638_1_oturum_22_martguvenlikli_2025t.pdf", "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2025_03/26145653_2_oturum_22_mart_2025t.pdf", "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2025_03/26145701_3_oturum_23_mart_2025t.pdf"]
  },
  {
    year: "2024–2025",
    term: 1,
    date: "21–22 Aralık 2024",
    url: "https://odsgm.meb.gov.tr/www/21-22-aralik-2024-tarihlerinde-yapilan-acik-ogretim-lisesimesleki-acik-ogretim-lisesiacik-ogretim-imam-hatip-lisesi-1-donem-sinavlarinin-soru-kitapciklari-ve-cevap-anahtarlari/icerik/1377/tr",
    sessions: ["https://odsgm.meb.gov.tr/meb_iys_dosyalar/2024_12/25115028_1_oturum_21_aralik_2024t.pdf", "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2024_12/25115028_2_oturum_21_aralik_2024t.pdf", "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2024_12/25115028_3_oturum_22_aralik_2024t.pdf"]
  },
  {
    year: "2023–2024",
    term: 2,
    date: "16–17 Mart 2024",
    url: "https://odsgm.meb.gov.tr/www/acik-ogretim-kurumlari-2023-2024-egitim-ogretim-yili-2-donem-sinavlarinin-kitapciklari-ve-cevap-anahtarlari-yayimlandi/icerik/1198",
    sessions: ["https://odsgm.meb.gov.tr/meb_iys_dosyalar/2024_03/21161547_1_oturum_16_mart_2024t.pdf", "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2024_03/21161548_2_oturum_16_mart_2024t.pdf", "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2024_03/21161547_3_oturum_17_mart_2024t.pdf"]
  },
  {
    year: "2023–2024",
    term: 1,
    date: "23–24 Aralık 2023",
    url: "https://odsgm.meb.gov.tr/www/acik-ogretim-kurumlari-2023-2024-egitim-ogretim-yili-1-donem-sinavlari-tamamlandi/icerik/1151",
    sessions: ["https://odsgm.meb.gov.tr/meb_iys_dosyalar/2023_12/27142856_1_oturum_2324_aralik_2023t.pdf", "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2023_12/27142856_2_oturum_2324_aralik_2023t.pdf", "https://odsgm.meb.gov.tr/meb_iys_dosyalar/2023_12/27142856_3_oturum_24_aralik_2023t.pdf"]
  }
];

const COURSE_CATEGORIES = [
  { id: "all", label: "Tümü" },
  { id: "alan", label: "İmam hatip" },
  { id: "sayisal", label: "Sayısal" },
  { id: "sozel", label: "Sözel" }
];

const BOOKS_URL = "https://derskitaplari.eba.gov.tr/";
const FIELD_MATERIALS_URL = "https://dogm.eba.gov.tr/materyal/home/dokumanlar";

const COURSES = [
  { name: "Akaid 1", category: "alan", scope: "Akaid kitabının 1, 2, 3 ve 4. üniteleri", source: BOOKS_URL },
  { name: "Akaid 2", category: "alan", scope: "Akaid kitabının 5, 6 ve 7. üniteleri", source: BOOKS_URL },
  { name: "Fıkıh 1", category: "alan", scope: "Fıkıh kitabında 87. sayfaya kadar, 87 dâhil", source: BOOKS_URL },
  { name: "Fıkıh 2", category: "alan", scope: "Fıkıh kitabında 88. sayfadan kitabın sonuna kadar", source: BOOKS_URL },
  { name: "Kelâm 1", category: "alan", scope: "Kelâm kitabının 1 ve 2. üniteleri", source: BOOKS_URL },
  { name: "Kelâm 2", category: "alan", scope: "Kelâm kitabının 3 ve 4. üniteleri", source: BOOKS_URL },
  { name: "Siyer 1", category: "alan", scope: "Siyer kitabında 65. sayfaya kadar, 65 dâhil", source: BOOKS_URL },
  { name: "Siyer 2", category: "alan", scope: "Siyer kitabında 66. sayfadan kitabın sonuna kadar", source: BOOKS_URL },
  { name: "Dinler Tarihi 1", category: "alan", scope: "Dinler Tarihi kitabının 1, 2 ve 3. üniteleri", source: BOOKS_URL },
  { name: "Dinler Tarihi 2", category: "alan", scope: "Dinler Tarihi kitabının 4 ve 5. üniteleri", source: BOOKS_URL },
  { name: "İslam Kültürü ve Medeniyeti 1", category: "alan", scope: "12. sınıf kitabının 1, 2, 3 ve 4. üniteleri", source: BOOKS_URL },
  { name: "İslam Kültürü ve Medeniyeti 2", category: "alan", scope: "12. sınıf kitabının 5, 6 ve 7. üniteleri", source: BOOKS_URL },
  { name: "Temel Dinî Bilgiler 1", category: "alan", scope: "9. sınıf kitabında 85. sayfaya kadar, 85 dâhil", source: BOOKS_URL },
  { name: "Temel Dinî Bilgiler 2", category: "alan", scope: "9. sınıf kitabında 86. sayfadan kitabın sonuna kadar", source: BOOKS_URL },
  { name: "Din Kültürü ve Ahlak Bilgisi 1", category: "alan", scope: "9. sınıf kitabında 88. sayfaya kadar, 88 dâhil", source: BOOKS_URL },
  { name: "Din Kültürü ve Ahlak Bilgisi 2", category: "alan", scope: "9. sınıf kitabında 89. sayfadan kitabın sonuna kadar", source: BOOKS_URL },
  { name: "Din Kültürü ve Ahlak Bilgisi 3", category: "alan", scope: "10. sınıf kitabında 79. sayfaya kadar, 79 dâhil", source: BOOKS_URL },
  { name: "Hadis", category: "alan", scope: "Yüz yüze ders kapsamını dersini aldığın okuldan doğrula", source: FIELD_MATERIALS_URL, school: true },
  { name: "Tefsir", category: "alan", scope: "Yüz yüze ders kapsamını dersini aldığın okuldan doğrula", source: FIELD_MATERIALS_URL, school: true },
  { name: "Arapça / Mesleki Arapça", category: "alan", scope: "Yüz yüze ders kapsamını dersini aldığın okuldan doğrula", source: FIELD_MATERIALS_URL, school: true },
  { name: "Kur’an-ı Kerim", category: "alan", scope: "Yüz yüze ders kapsamını dersini aldığın okuldan doğrula", source: FIELD_MATERIALS_URL, school: true },
  { name: "Matematik 1", category: "sayisal", scope: "9. sınıf 1. kitabın tamamı ve 2. kitapta 42. sayfaya kadar, 42 dâhil", source: BOOKS_URL },
  { name: "Matematik 2", category: "sayisal", scope: "9. sınıf 2. kitapta 43. sayfadan kitabın sonuna kadar", source: BOOKS_URL },
  { name: "Matematik 3", category: "sayisal", scope: "10. sınıf kitabında 227. sayfaya kadar, 227 dâhil", source: BOOKS_URL },
  { name: "Matematik 4", category: "sayisal", scope: "10. sınıf kitabında 228. sayfadan kitabın sonuna kadar", source: BOOKS_URL },
  { name: "Biyoloji 1", category: "sayisal", scope: "9. sınıf kitabında 79. sayfaya kadar, 79 dâhil", source: BOOKS_URL },
  { name: "Biyoloji 2", category: "sayisal", scope: "9. sınıf kitabında 80. sayfadan kitabın sonuna kadar", source: BOOKS_URL },
  { name: "Biyoloji 3", category: "sayisal", scope: "10. sınıf kitabında 97. sayfaya kadar, 97 dâhil", source: BOOKS_URL },
  { name: "Kimya 1", category: "sayisal", scope: "9. sınıf kitabında 136. sayfaya kadar, 136 dâhil", source: BOOKS_URL },
  { name: "Kimya 2", category: "sayisal", scope: "9. sınıf kitabında 137. sayfadan kitabın sonuna kadar", source: BOOKS_URL },
  { name: "Felsefe 1", category: "sozel", scope: "10. sınıf kitabında 110. sayfaya kadar, 110 dâhil", source: BOOKS_URL },
  { name: "Felsefe 2", category: "sozel", scope: "10. sınıf kitabında 111–206. sayfalar", source: BOOKS_URL },
  { name: "Felsefe 3", category: "sozel", scope: "11. sınıf kitabının 1, 2 ve 3. üniteleri", source: BOOKS_URL },
  { name: "Felsefe 4", category: "sozel", scope: "11. sınıf kitabının 4 ve 5. üniteleri", source: BOOKS_URL },
  { name: "Tarih 1", category: "sozel", scope: "9. sınıf kitabında 123. sayfaya kadar, 123 dâhil", source: BOOKS_URL },
  { name: "Tarih 2", category: "sozel", scope: "9. sınıf kitabında 124. sayfadan kitabın sonuna kadar", source: BOOKS_URL },
  { name: "Tarih 3", category: "sozel", scope: "10. sınıf kitabında 155. sayfaya kadar, 155 dâhil", source: BOOKS_URL },
  { name: "Tarih 4", category: "sozel", scope: "10. sınıf kitabında 156. sayfadan kitabın sonuna kadar", source: BOOKS_URL }
];

const GLOSSARY = [
  { term: "Aktif öğrenci", definition: "Yeni kayıt veya kayıt yenileme işlemini yaptırmış öğrencinin güncel durumudur.", analogy: "Yeni sezon için profilin etkinleşmiş; ders ve sınav ekranlarına girebilirsin." },
  { term: "Kayıt yenilememiş (Donuk)", definition: "Bir dönem kayıt yenilemeyen öğrenci için kullanılan durumdur. Önceden kazanılan krediler kaybolmaz.", analogy: "O sezon oyuna girmedin; kayıt dosyan ve topladığın puanlar duruyor." },
  { term: "Beklemeli (eski adıyla Silik)", definition: "En az iki dönem üst üste kayıt yenilemeyen öğrencinin güncel resmî durum adıdır. Kayıt yenilenince önceki krediler korunur.", analogy: "Profil uzun süre çevrimdışı kalmış; silinmemiş, yeniden etkinleştirilmeyi bekliyor." },
  { term: "Ön kayıt öğrencisi", definition: "Belge ve bilgileri sisteme aktarılmış ancak kontrol ve onayı henüz tamamlanmamış öğrencidir.", analogy: "Karakterini oluşturdun ama sunucu onayı bitmeden ana haritaya giremiyorsun." },
  { term: "Kayıt yenileme", definition: "AÖİHL öğrencisinin duyurulan tarihlerde ilgili dönem için yaptırdığı kayıt işlemidir.", analogy: "Yeni sezona katılımını açan işlem; eski ilerlemeni sıfırlamaz." },
  { term: "Dönem", definition: "Kayıt işlemlerinden bir sonraki sınav döneminin kayıt başlangıcına kadar uzanan eğitim süresidir.", analogy: "Oyundaki sezon gibi düşün: kayıt, ders seçimi ve sınav o sezonun içinde tamamlanır." },
  { term: "Kredi", definition: "Bir dersin haftalık ders saatiyle belirlenen değeridir; ders başarıldığında bu kredi kazanılır.", analogy: "Dersi geçince hesabına eklenen kalıcı puan gibidir; harcanmaz ve başka derse aktarılmaz." },
  { term: "Toplam kredi", definition: "Başardığın bütün kredili derslerden bugüne kadar biriken kredi toplamıdır.", analogy: "Farklı görevlerden topladığın bütün puanların genel toplamı; tek başına mezuniyet için yeterli olmayabilir." },
  { term: "Alan kredisi", definition: "İmam hatip alanına ait derslerden kazanılan ve mezuniyette ayrıca kontrol edilen kredidir.", analogy: "Genel puandan ayrı izlenen uzmanlık ağacı puanı gibi; kendi alan hedefini de tamamlaman gerekir." },
  { term: "Alan dersleri", definition: "AÖİHL haftalık ders çizelgesinde imam hatip alanına ait olan derslerdir.", analogy: "Karakter sınıfına özel yetenek görevleri gibi; programın imam hatip kısmını oluşturur." },
  { term: "Ortak ders", definition: "Mezuniyet için alınması gereken, alan dersleri dışında kalan program dersidir.", analogy: "Herkesin karşısına çıkan ana görev havuzu gibi." },
  { term: "Zorunlu ortak ders", definition: "Başarılmadan veya mevzuattaki muafiyet şartı oluşmadan mezuniyetin tamamlanamayacağı ortak derstir.", analogy: "Ana hikâyedeki zorunlu görev gibi; bitirmeden final ekranı açılmaz." },
  { term: "Seçmeli ders", definition: "Ortak derslere ek olarak seçilebilen ve mezuniyet kredisini tamamlamaya yardımcı olan derstir.", analogy: "Yan görev gibidir; seçimi sana kalır ama kredi hedefini tamamlamana yardım eder." },
  { term: "Muaf olma", definition: "Uzaktan eğitimde üç kez sınavına girilip başarılamayan ortak dersi başarma zorunluluğunun kalkmasıdır. Muaf olunan dersin kredisi kazanılmaz; Türk Dili ve Edebiyatından muaf olunamaz.", analogy: "Görev listenden kaldırılır ama görevin puanı hesabına eklenmez." },
  { term: "Ders seçme", definition: "Kayıt olunan dönemde sınavına girilecek dersleri, kayıt tarihleri içinde sistemden belirleme işlemidir.", analogy: "Bu sezon oynayacağın görevleri seçmek gibi; seçimlerin sınav programını belirler." },
  { term: "Yüz yüze eğitim", definition: "Alan derslerinin belirlenen okul veya kurumda öğretmen eşliğinde yürütüldüğü eğitimdir." },
  { term: "Yüz yüze eğitimi tamamlandı çeki", definition: "Yüz yüze derslerin bittiğini okul veya kurumun bilgi yönetim sisteminde işaretlediği onaydır.", analogy: "Bölümü bitirmiş olsan da görev teslimini okulun sistemde onaylaması gerekir." },
  { term: "Uzaktan eğitim dersi", definition: "Resmî ders kitabı ve dijital materyallerle çalışılan, dönem sınavıyla değerlendirilen derstir." },
  { term: "Mezuniyet incelemesi", definition: "Dönem, toplam ve alan kredisi, zorunlu dersler, belgeler ve yüz yüze eğitim onayının birlikte kontrol edildiği süreçtir.", analogy: "Final kapısındaki kontrol noktası gibi; her koşul tek tek doğrulanır. İncelemede olmak mezun olmak değildir." },
  { term: "Mezun", definition: "Mezuniyet incelemesi tamamlanıp bütün şartları sağladığı onaylanan öğrencidir.", analogy: "Bütün ana koşullar doğrulanmış ve final başarıyla tamamlanmıştır." },
  { term: "Öğrencilik hakkı", definition: "İlgili mevzuat çerçevesinde öğrenci belgesi, ulaşım veya müze gibi öğrencilik imkânlarından yararlanma durumudur." },
  { term: "Oturum", definition: "Dönem sınavında belirli derslerin aynı tarih ve saat aralığında uygulandığı sınav bölümüdür." },
  { term: "Ders kodu", definition: "Öğrenci sistemi ve sınav kitapçığında dersi kesin olarak ayırt eden numaradır." },
  { term: "Sınav bölgesi", definition: "Yazılı sınava girmek için sistemde seçilen il ve ilçe merkezidir." },
  { term: "e-Sınav", definition: "Önceden randevu alınarak elektronik sınav merkezinde bilgisayar üzerinden uygulanan sınavdır." },
  { term: "Yazılı sınav", definition: "MEB’in ilan ettiği tarihte sınav merkezinde basılı evrakla uygulanan dönem sınavıdır." },
  { term: "Sınav giriş belgesi", definition: "Sınav yeri, salonu, tarihi ve saatini gösteren fotoğraflı belgedir." },
  { term: "İş takvimi", definition: "Kayıt, ders seçimi, sınav ve sonuç işlemlerinin resmî tarihlerini gösteren çizelgedir." },
  { term: "Ek sınav", definition: "MEB’in belirlediği öğrenci grupları ve tarihler için ayrıca tanımlanan sınav hakkıdır." },
  { term: "Sorumluluk sınavı", definition: "Yüz yüze eğitim derslerinde okul veya kurum tarafından ilgili kurallara göre uygulanan sınavdır." },
  { term: "Tasdikname", definition: "Öğrencinin okuldan ayrılışını ve öğrenim bilgilerini gösteren resmî belgedir." },
  { term: "Bilgi Yönetim Sistemi", definition: "Kayıt, ders, kredi, sınav ve öğrencilik bilgilerinin elektronik ortamda yürütüldüğü resmî sistemdir." }
];

const PATHWAY_CATEGORIES = [
  { id: "all", label: "Tümü" },
  { id: "ders", label: "Ders & kredi" },
  { id: "sinav", label: "Sınav" },
  { id: "kayit", label: "Kayıt & sistem" },
  { id: "belge", label: "Belge" },
  { id: "destek", label: "Destek" }
];

const PATHWAYS = [
  {
    title: "Kaldığım dersleri nasıl görürüm?",
    description: "Geçmiş dönemlerde başarılı, başarısız veya muaf olduğun dersleri kontrol et.",
    category: "ders",
    emoji: "📉",
    tags: "kaldığım başarısız dersler not geçmiş dönem sonuç muaf devamsız",
    steps: [
      "Açık Öğretim Liseleri öğrenci sistemine giriş yap.",
      "Öğrenci Genel Bilgileri menüsünü aç.",
      "Dönem Dersleri bölümüne gir ve incelemek istediğin dönemi seç.",
      "Ders Durumu / Başarı Durumu alanında başarısız veya muaf görünen dersleri kontrol et."
    ],
    note: "Yüz yüze alan dersin görünmüyorsa ya da notu eksikse, dersi aldığın okul/kurumla görüş.",
    url: "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    cta: "Derslerimi görüntüle",
    sourceUrl: "https://aoihl.meb.gov.tr/www/sss-sinavlarla-ilgili-sorular/icerik/16",
    sourceLabel: "Resmî sınav SSS"
  },
  {
    title: "Kredimi ve mezuniyete kalanları nasıl görürüm?",
    description: "Toplam kredi, dönem ve zorunlu ders durumunu birlikte kontrol et.",
    category: "ders",
    emoji: "🎓",
    tags: "toplam kredi mezuniyet kalan zorunlu ortak alan ders dönem",
    steps: [
      "Öğrenci sistemine giriş yap ve öğrenci özetindeki toplam kredi ile dönem bilgisini kontrol et.",
      "Öğrenci Genel Bilgileri > Dönem Dersleri bölümünde ortak ve alan derslerinin durumuna bak.",
      "Mezuniyet şartları belgesindeki kredi, dönem ve zorunlu ders koşullarıyla karşılaştır.",
      "Şartları sağladığın hâlde mezun görünmüyorsan yüz yüze eğitim okuluna başvur."
    ],
    note: "Yalnız kredi yeterli değildir; zorunlu dersler ve yüz yüze eğitim şartı da tamamlanmalıdır.",
    url: "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    cta: "Öğrenci sistemini aç",
    sourceUrl: "https://aoihl.meb.gov.tr/meb_iys_dosyalar/2025_10/08121219_aoihlmezuniyetsartlari_8ekim2025.pdf",
    sourceLabel: "Mezuniyet şartları"
  },
  {
    title: "Ders seçimini nasıl yaparım?",
    description: "Kayıt yenilemeden sonra dönem derslerini seç ve kaydet.",
    category: "ders",
    emoji: "☑️",
    tags: "ders seçimi seçme kayıt yenileme aktif öğrenci 15 ders kaydet",
    steps: [
      "Kayıt yenilemenin tamamlandığını ve durumunun Aktif olduğunu kontrol et.",
      "Öğrenci sistemine giriş yap ve Ders Seçme ekranını aç.",
      "Sistemin sunduğu derslerden en fazla 15 ders seç.",
      "Seçimlerini kaydet; işlem bittikten sonra seçilen dersler listesini yeniden kontrol et."
    ],
    note: "Bir ders bile seçersen sistem kalan dersleri otomatik atamaz. Hiç seçim yapmayanlara dönem sonunda otomatik atama yapılabilir.",
    url: "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    cta: "Ders seçimine git",
    sourceUrl: "https://aoihl.meb.gov.tr/www/sss-ders-secme-ile-ilgili-sorular/icerik/15",
    sourceLabel: "Ders seçimi SSS"
  },
  {
    title: "Sınav sonuçlarımı nereden görürüm?",
    description: "Son sınavı veya önceki dönemlerin bütün ders sonuçlarını görüntüle.",
    category: "sinav",
    emoji: "📊",
    tags: "sınav sonucu puan not geçmiş dönem dönem dersleri",
    steps: [
      "Öğrenci sistemine T.C. kimlik/öğrenci numaran ve şifrenle veya e-Devlet ile giriş yap.",
      "Son açıklanan sınav için Sınav Sonuçları ekranını aç.",
      "Eski sonuçlar için Öğrenci Genel Bilgileri > Dönem Dersleri yolunu izle.",
      "İlgili dönemi seçerek ders puanını ve başarı durumunu kontrol et."
    ],
    url: "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    cta: "Sonuçları görüntüle",
    sourceUrl: "https://aoihl.meb.gov.tr/www/sss-sinavlarla-ilgili-sorular/icerik/16",
    sourceLabel: "Resmî sınav SSS"
  },
  {
    title: "Sınav giriş belgesini nasıl alırım?",
    description: "Fotoğraflı sınav belgesini sistemden açıp yazdır.",
    category: "sinav",
    emoji: "🪪",
    tags: "sınav giriş belgesi fotoğraflı yazdır sınav yeri salon",
    steps: [
      "AÖİHL duyurusundan giriş belgesinin yayımlandığı tarihi kontrol et.",
      "Öğrenci sistemine giriş yap.",
      "Öğrenci Genel Bilgileri > Sınav Giriş Belgesi bölümünü aç.",
      "Fotoğraflı belgeyi indir veya yazdır; belgedeki sınav yeri ve saati kontrol et."
    ],
    note: "Sınava fotoğraflı giriş belgesi ve geçerli kimlik belgesiyle gitmelisin.",
    url: "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    cta: "Giriş belgesine git",
    sourceUrl: "https://aoihl.meb.gov.tr/www/kayit-duyurusu/icerik/482/tr",
    sourceLabel: "Güncel sınav duyurusu"
  },
  {
    title: "e-Sınav randevusunu nasıl alırım?",
    description: "Uygun tarih ve salonu seçerek elektronik sınav randevusu oluştur.",
    category: "sinav",
    emoji: "🗓️",
    tags: "e sınav esınav randevu salon tarih yazdır",
    steps: [
      "Güncel duyurudan randevu tarihlerini ve e-Sınava tabi olup olmadığını kontrol et.",
      "Öğrenci sistemine giriş yap.",
      "Öğrenci Genel Bilgileri > e-Sınav Randevu bölümünü aç.",
      "Uygun merkez ve zamanı seçip onayla; ardından Sınav Bilgilerini Yazdır seçeneğini kullan."
    ],
    note: "Randevu tarihleri dönemden döneme değişir; yalnız güncel duyurudaki tarih aralığında işlem yap.",
    url: "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    cta: "e-Sınav ekranına git",
    sourceUrl: "https://aoihl.meb.gov.tr/www/kayit-duyurusu/icerik/482/tr",
    sourceLabel: "Güncel sınav duyurusu"
  },
  {
    title: "Sınav merkezini nasıl değiştiririm?",
    description: "Sınava gireceğin il ve ilçeyi duyurulan süre içinde güncelle.",
    category: "sinav",
    emoji: "📍",
    tags: "sınav merkezi bölgesi il ilçe adres değişiklik bilgi düzenleme",
    steps: [
      "Öğrenci sistemine giriş yap.",
      "Bilgi Düzenleme menüsünü aç.",
      "Sınav Bölgesi İrtibat Merkezi ekranından il ve ilçeyi seç.",
      "Kaydet ve öğrenci özetinde yeni sınav bölgesinin göründüğünü kontrol et."
    ],
    note: "Süre bittikten sonra yapılan değişiklikler dikkate alınmayabilir.",
    url: "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    cta: "Sınav bölgesini düzenle",
    sourceUrl: "https://aoihl.meb.gov.tr/www/sss-sinavlarla-ilgili-sorular/icerik/16",
    sourceLabel: "Resmî sınav SSS"
  },
  {
    title: "Kaydım aktif mi, nasıl kontrol ederim?",
    description: "Ödeme veya yenileme sonrasında öğrencilik durumunu doğrula.",
    category: "kayit",
    emoji: "🟢",
    tags: "kayıt aktif donuk silik beklemeli yenileme ödeme durum",
    steps: [
      "Kayıt ücretini yatırdıysan dekontunu sakla.",
      "Öğrenci sistemine giriş yap ve öğrenci özetindeki Öğrencilik Durumu alanına bak.",
      "Durum Aktif ise ders seçimi ve dönem işlemlerine devam et.",
      "Ödemeye rağmen aktif değilse yüz yüze eğitim okulun veya MEBİM ile görüş."
    ],
    url: "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    cta: "Kayıt durumumu kontrol et",
    sourceUrl: "https://aoihl.meb.gov.tr/www/kayit-duyurusu/icerik/482/tr",
    sourceLabel: "Güncel kayıt duyurusu"
  },
  {
    title: "Şifremi unuttum, ne yapmalıyım?",
    description: "Şifre yenileme seçeneklerini kullan veya resmî destek al.",
    category: "destek",
    emoji: "🔐",
    tags: "şifre unuttum giriş yapamıyorum e devlet mebim yeni şifre",
    steps: [
      "Öğrenci giriş ekranındaki Şifremi Unuttum bağlantısını dene.",
      "Alternatif olarak aynı ekrandan e-Devlet ile giriş yap.",
      "Çözülmezse kayıtlı olduğun yüz yüze eğitim okuluna başvur.",
      "MEBİM’i 444 0 632 numarasından arayarak destek iste."
    ],
    url: "https://aolweb.meb.gov.tr/ogrenci_giris.aspx",
    cta: "Giriş ekranını aç",
    sourceUrl: "https://aoihl.meb.gov.tr/www/sik-sorulan-sorularsss-genel-konular/icerik/12",
    sourceLabel: "Genel konular SSS"
  },
  {
    title: "Öğrenci belgesini nasıl alırım?",
    description: "Barkodlu öğrenci durum belgesini e-Devlet’ten oluştur.",
    category: "belge",
    emoji: "📄",
    tags: "öğrenci belgesi durum barkod e devlet indir pdf",
    steps: [
      "e-Devlet’te Açık Öğretim Liseleri Öğrenci Durum Belgesi hizmetini aç.",
      "Kimliğini doğrulayarak giriş yap.",
      "Belge oluştur seçeneğini kullan.",
      "Barkodlu belgeyi indir veya yazdır."
    ],
    url: "https://www.turkiye.gov.tr/milli-egitim-acik-ogretim-liseleri-ogrenci-durum-belgesi-sorgulama",
    cta: "Öğrenci belgesi al",
    sourceUrl: "https://aoihl.meb.gov.tr/www/sik-sorulan-sorularsss-genel-konular/icerik/12",
    sourceLabel: "Genel konular SSS"
  },
  {
    title: "Mezuniyet belgesini nasıl alırım?",
    description: "Mezuniyet belgesini sorgula; diploma teslim yerini öğren.",
    category: "belge",
    emoji: "🏅",
    tags: "mezuniyet belgesi diploma çıkma belgesi e devlet mezun",
    steps: [
      "e-Devlet’te Açık Öğretim Liseleri Mezuniyet Belgesi hizmetini aç.",
      "Kimliğini doğrula ve barkodlu mezuniyet belgesini oluştur.",
      "Diploma için yüz yüze eğitim aldığın okul/kurumla iletişime geç.",
      "Bir başkası teslim alacaksa noter vekâleti gerekip gerekmediğini okuldan doğrula."
    ],
    url: "https://www.turkiye.gov.tr/milli-egitim-acik-ogretim-liseleri-mezuniyet-belgesi-sorgulama",
    cta: "Mezuniyet belgesi al",
    sourceUrl: "https://aoihl.meb.gov.tr/www/sss-mezuniyet-ve-yuksek-ogretim-ile-ilgili-sorular/icerik/17",
    sourceLabel: "Mezuniyet SSS"
  },
  {
    title: "Ders kitabımı nasıl bulurum?",
    description: "Ders adına göre resmî PDF, sesli kitap ve sorumlu üniteleri bul.",
    category: "ders",
    emoji: "📚",
    tags: "ders kitabı pdf sesli kitap sorumlu ünite a okul materyal",
    steps: [
      "A-Okul Açık Öğretim Liseleri Ders Kitapları sayfasını aç.",
      "Ders adını veya ders grubunu bul.",
      "Açıklamadaki sorumlu ünite ve sayfa aralığını kontrol et.",
      "PDF veya varsa sesli kitap bağlantısını aç."
    ],
    url: "https://aokul.gov.tr/Kitaplar/Kitaplar.aspx?type=2",
    cta: "Ders kitaplarını aç",
    sourceUrl: "https://aokul.gov.tr/",
    sourceLabel: "A-Okul ana sayfa"
  },
  {
    title: "Yüz yüze eğitim okulumu nasıl bulurum?",
    description: "İl ve ilçeye göre AÖİHL yüz yüze eğitim kurumlarını sorgula.",
    category: "kayit",
    emoji: "🏫",
    tags: "yüz yüze eğitim okul kurum kontenjan il ilçe kayıt yeri",
    steps: [
      "Yüz Yüze Eğitim Veren Kurumlar ekranını aç.",
      "Önce il, ardından ilçe seç.",
      "Listeleme düğmesine basarak kurumları ve kontenjanları görüntüle.",
      "Kayıt veya ders işlemi öncesinde seçtiğin kurumla iletişime geç."
    ],
    url: "https://aolweb.meb.gov.tr/yykurum_kontenjan.aspx",
    cta: "Okul ve kontenjan ara",
    sourceUrl: "https://aoihl.meb.gov.tr/www/kayit-duyurusu/icerik/482/tr",
    sourceLabel: "Güncel kayıt duyurusu"
  },
  {
    title: "Sınav sonucuna nasıl itiraz ederim?",
    description: "Soru, cevap anahtarı veya sınav sonucu için resmî e-İtiraz yolunu kullan.",
    category: "destek",
    emoji: "⚖️",
    tags: "itiraz sınav sonucu soru cevap anahtarı odsgm e itiraz",
    steps: [
      "İtiraz süresi ve koşullarını güncel sınav duyurusundan kontrol et.",
      "ÖDSGM e-İtiraz sistemini aç.",
      "İlgili sınav ve itiraz türünü seçerek istenen bilgileri doldur.",
      "Başvuru sonucunu ve varsa ödeme/dekont bilgisini sakla."
    ],
    url: "https://eitiraz.meb.gov.tr/",
    cta: "e-İtiraz sistemini aç",
    sourceUrl: "https://aoihl.meb.gov.tr/www/sss-sinavlarla-ilgili-sorular/icerik/16",
    sourceLabel: "Resmî sınav SSS"
  }
];

const PROMPTS = [
  {
    title: "League of Legends görevi",
    subtitle: "Matematik · Vadi, altın ve minyonlar",
    emoji: "⚔️",
    text: `Aşağıdaki matematik sorusunu League of Legends evreninde geçen kısa bir görev sorusuna dönüştür.

Kurallar:
- Matematiksel işlemi, verilen sayıları, zorluk seviyesini ve tek doğru cevabı kesinlikle değiştirme.
- Şampiyon, koridor, minyon, kule, eşya veya altın gibi LoL ögelerini yalnızca hikâyeleştirmek için kullan.
- Gereksiz oyun bilgisi isteme; soru LoL bilmeyen biri tarafından da çözülebilsin.
- Çözümü, ipucunu veya cevabı yazma.
- Çıktıda yalnızca dönüştürülmüş soruyu ver.

SORU:
[MATEMATİK SORUSUNU BURAYA YAPIŞTIR]`
  },
  {
    title: "RPG yan görevi",
    subtitle: "Her ders · Fantastik görev anlatımı",
    emoji: "🧙",
    text: `Aşağıdaki soruyu bir fantastik RPG oyunundaki kısa yan göreve dönüştür.

Kurallar:
- Sorunun ölçtüğü bilgi veya beceriyi, sayıları, seçenekleri ve doğru cevabı değiştirme.
- Karakter, eşya ve mekân adları ekleyebilirsin; çözüm için yeni bilgi gerektirme.
- Metni anlaşılır ve en fazla 120 kelime tut.
- Çözümü veya doğru cevabı açıklama.
- Çıktıda yalnızca dönüştürülmüş soruyu ver.

SORU:
[SORUYU BURAYA YAPIŞTIR]`
  },
  {
    title: "Dedektif vakası",
    subtitle: "Fen, tarih veya mantık · İpucu avı",
    emoji: "🔎",
    text: `Aşağıdaki soruyu öğrencinin kanıtları inceleyerek çözdüğü kısa bir dedektif vakasına dönüştür.

Kurallar:
- Orijinal öğrenme hedefini, tüm verileri ve doğru cevabı koru.
- Sorudaki bilgilerden her birini vakanın bir ipucu olarak kullan.
- Yanıltıcı ya da çözüm için gereksiz yeni bilgi ekleme.
- Cevabı ele verecek açıklama yapma.
- Çıktıda vaka başlığı ve dönüştürülmüş soru dışında hiçbir şey yazma.

SORU:
[SORUYU BURAYA YAPIŞTIR]`
  },
  {
    title: "Futbol menajeri senaryosu",
    subtitle: "Matematik · Transfer, puan ve istatistik",
    emoji: "⚽",
    text: `Aşağıdaki matematik sorusunu bir futbol menajerinin karar vermesi gereken gerçekçi bir senaryoya dönüştür.

Kurallar:
- Sayıları, matematiksel ilişkiyi, istenen sonucu ve doğru cevabı değiştirme.
- Transfer bütçesi, maç puanı, oyuncu istatistiği veya lig tablosu temasından en uygun olanı seç.
- Futbol kuralı bilmeyi gerektirmeyecek kadar açık yaz.
- Çözümü ve cevabı verme.
- Çıktıda yalnızca dönüştürülmüş soruyu ver.

SORU:
[MATEMATİK SORUSUNU BURAYA YAPIŞTIR]`
  },
  {
    title: "Boss savaşı",
    subtitle: "Her ders · Aşamalı meydan okuma",
    emoji: "🐉",
    text: `Aşağıdaki soruyu bir boss savaşının son hamlesi gibi sun.

Kurallar:
- Öğrenme hedefini, soru kökünü, verileri, seçenekleri ve doğru cevabı değiştirme.
- Kısa bir atmosfer metni ekle; asıl soruyu açıkça ayırt edilebilir biçimde yaz.
- Zorluk seviyesini artırma veya azaltma.
- Çözüm, ipucu ya da cevap verme.
- Çıktıda yalnızca dönüştürülmüş soruyu ver.

SORU:
[SORUYU BURAYA YAPIŞTIR]`
  },
  {
    title: "Uzay istasyonu görevi",
    subtitle: "Fen ve matematik · Sistemleri kurtar",
    emoji: "🚀",
    text: `Aşağıdaki soruyu bir uzay istasyonunda çözülmesi gereken kısa bir göreve dönüştür.

Kurallar:
- Öğrenme hedefini, bütün sayıları, birimleri, seçenekleri ve doğru cevabı aynen koru.
- Gezegen, yakıt, oksijen veya enerji ögelerini yalnızca hikâye için kullan.
- Bilimsel olarak yanlış veya çözüm için yeni veri ekleme.
- En fazla 120 kelime yaz; çözümü ve cevabı verme.
- Çıktıda yalnızca dönüştürülmüş soruyu ver.

SORU:
[SORUYU BURAYA YAPIŞTIR]`
  },
  {
    title: "Zaman yolculuğu",
    subtitle: "Tarih ve edebiyat · Döneme tanıklık et",
    emoji: "⏳",
    text: `Aşağıdaki tarih veya edebiyat sorusunu kısa bir zaman yolculuğu sahnesine dönüştür.

Kurallar:
- Tarihî olguları, kişi ve eser adlarını, seçenekleri ve doğru cevabı değiştirme.
- Öğrenciyi döneme gönder fakat kaynakta olmayan bir bilgiyi gerçekmiş gibi ekleme.
- Soru tema bilgisi olmadan çözülebilsin.
- Cevabı ima etme, çözüm açıklama.
- Çıktıda kısa bir sahne başlığı ve dönüştürülmüş soruyu ver.

SORU:
[SORUYU BURAYA YAPIŞTIR]`
  },
  {
    title: "Kaçış odası",
    subtitle: "Her ders · Bir kilidi aç",
    emoji: "🔐",
    text: `Aşağıdaki soruyu bir kaçış odasındaki son kilidi açan bulmacaya dönüştür.

Kurallar:
- Orijinal kazanımı, soru verilerini, seçenekleri ve doğru cevabı eksiksiz koru.
- Her veriyi odadaki bir ipucu gibi sun; fazladan işlem gerektirme.
- Gerilim hafif ve yaşa uygun olsun.
- Çözümü, ipucunun yorumunu veya cevabı verme.
- Yalnızca sahne ve dönüştürülmüş soruyu yaz.

SORU:
[SORUYU BURAYA YAPIŞTIR]`
  },
  {
    title: "Mutfak meydan okuması",
    subtitle: "Matematik ve fen · Ölç, oranla, çöz",
    emoji: "👨‍🍳",
    text: `Aşağıdaki soruyu bir mutfak yarışmasındaki kısa göreve dönüştür.

Kurallar:
- Sayıları, oranları, birimleri, bilimsel ilişkiyi ve doğru cevabı değiştirme.
- Malzemeleri yalnızca bağlam kurmak için kullan; yeni alerjen veya kültürel varsayım ekleme.
- Birimlerin birbiriyle tutarlı kalmasını sağla.
- Çözümü veya cevabı verme.
- Çıktıda yalnızca dönüştürülmüş soruyu ver.

SORU:
[SORUYU BURAYA YAPIŞTIR]`
  },
  {
    title: "Haber merkezi",
    subtitle: "Türk dili, tarih ve coğrafya · Manşeti doğrula",
    emoji: "📰",
    text: `Aşağıdaki soruyu bir haber merkezinde doğrulanması gereken kısa bir dosyaya dönüştür.

Kurallar:
- Metindeki olguları, kavramları, seçenekleri ve doğru cevabı değiştirme.
- Öğrenci haber editörü olsun; soru çözmek için güncel haber veya internet araştırması gerekmesin.
- Siyasi yorum, gerçek kişi hakkında uydurma bilgi veya taraflı dil ekleme.
- Cevabı verme ya da ima etme.
- Çıktıda dosya başlığı ve dönüştürülmüş soru dışında bir şey yazma.

SORU:
[SORUYU BURAYA YAPIŞTIR]`
  },
  {
    title: "Mini bölüm sonu testi",
    subtitle: "Her ders · Üç aşamalı çalışma",
    emoji: "🏁",
    text: `Aşağıdaki tek soruyu aynı kazanımı ölçen üç aşamalı mini çalışmaya dönüştür.

Kurallar:
- 1. aşama: Orijinal soruyu yalnızca daha açık bir dille yeniden yaz.
- 2. aşama: Cevabı ele vermeyen tek bir küçük düşünme ipucu ekle.
- 3. aşama: Orijinal soruyu kısa, oyunlaştırılmış bir final görevi olarak sun.
- Tüm sayı, veri, seçenek ve doğru cevaplar aynı kalsın; yeni bilgi gerektirme.
- Çözümü ve doğru cevabı yazma.

SORU:
[SORUYU BURAYA YAPIŞTIR]`
  },
  {
    title: "Kendi temanı seç",
    subtitle: "Her ders · Dilediğin evrene uyarla",
    emoji: "🎮",
    text: `Aşağıdaki soruyu [İSTEDİĞİN TEMA] evrenine uyarlayarak yeniden yaz.

Kurallar:
- Sorunun ölçtüğü kazanımı, tüm sayıları/verileri, seçenekleri ve doğru cevabı aynen koru.
- Tema yalnızca anlatımı değiştirsin; çözüm yöntemini değiştirmesin.
- Tema hakkında ön bilgi gerektirme.
- Metni kısa, doğal ve yaşa uygun tut.
- Çözümü veya cevabı yazma.
- Çıktıda yalnızca dönüştürülmüş soruyu ver.

SORU:
[SORUYU BURAYA YAPIŞTIR]`
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
const state = { query: "", category: "all" };
const pathwayState = { query: "", category: "all" };
const examState = { year: "Tümü" };
const courseState = { query: "", category: "all" };
const glossaryState = { query: "" };
let installPrompt = null;

const sectionsEl = document.querySelector("#resource-sections");
const chipsEl = document.querySelector("#category-chips");
const searchEl = document.querySelector("#search");
const clearSearchEl = document.querySelector("#clear-search");
const resetFiltersEl = document.querySelector("#reset-filters");
const resultCountEl = document.querySelector("#result-count");
const emptyStateEl = document.querySelector("#empty-state");
const toTopEl = document.querySelector("#to-top");
const pathwaySearchEl = document.querySelector("#pathway-search");
const pathwayChipsEl = document.querySelector("#pathway-chips");
const pathwayGridEl = document.querySelector("#pathway-grid");
const pathwayEmptyEl = document.querySelector("#pathway-empty");
const pathwayCountEl = document.querySelector("#pathway-count");
const promptGridEl = document.querySelector("#prompt-grid");
const copyStatusEl = document.querySelector("#copy-status");
const promptCountEl = document.querySelector("#prompt-count");
const studioQuestionEl = document.querySelector("#studio-question");
const studioThemeEl = document.querySelector("#studio-theme");
const studioToneEl = document.querySelector("#studio-tone");
const studioModeEl = document.querySelector("#studio-mode");
const studioGenerateEl = document.querySelector("#studio-generate");
const studioExampleEl = document.querySelector("#studio-example");
const studioClearEl = document.querySelector("#studio-clear");
const studioOutputEl = document.querySelector("#studio-output");
const studioPromptEl = document.querySelector("#studio-prompt");
const studioCopyEl = document.querySelector("#studio-copy");
const studioCharCountEl = document.querySelector("#studio-char-count");
const examFiltersEl = document.querySelector("#exam-filters");
const examGridEl = document.querySelector("#exam-grid");
const examCountEl = document.querySelector("#exam-count");
const examEmptyEl = document.querySelector("#exam-empty");
const courseSearchEl = document.querySelector("#course-search");
const courseChipsEl = document.querySelector("#course-chips");
const courseGridEl = document.querySelector("#course-grid");
const courseCountEl = document.querySelector("#course-count");
const courseEmptyEl = document.querySelector("#course-empty");
const glossarySearchEl = document.querySelector("#glossary-search");
const glossaryGridEl = document.querySelector("#glossary-grid");
const glossaryCountEl = document.querySelector("#glossary-count");
const glossaryEmptyEl = document.querySelector("#glossary-empty");
const installBannerEl = document.querySelector("#install-banner");
const installAppEl = document.querySelector("#install-app");
const installCloseEl = document.querySelector("#install-close");
const viewTabsEl = document.querySelector("#view-tabs");
const viewSections = [...document.querySelectorAll("[data-view-section]")];
const examCountdownEl = document.querySelector("#exam-countdown");
const countdownTitleEl = document.querySelector("#countdown-title");
const supportButtonEl = document.querySelector("#support-button");
const supportDialogEl = document.querySelector("#support-dialog");
const supportShareEl = document.querySelector("#support-share");

const NEXT_EXAM = new Date("2026-12-20T00:00:00+03:00");

const HASH_VIEWS = {
  "#aoihl-nedir": "about",
  "#cikmis-sorular": "exams",
  "#sozluk": "glossary",
  "#kaynaklar": "resources",
  "#islem-yollari": "pathways",
  "#egitimci-kurumlar": "educators",
  "#prompt-title": "prompts"
};

function normalize(value) {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function updateExamCountdown() {
  if (!examCountdownEl) return;
  const remaining = NEXT_EXAM.getTime() - Date.now();
  if (remaining <= 0 && remaining > -86400000) {
    examCountdownEl.innerHTML = "<span><b>Bugün</b><small>sınav günü</small></span>";
    countdownTitleEl.textContent = "Sınav günü geldi";
    return;
  }
  if (remaining <= -86400000) {
    examCountdownEl.innerHTML = "<span><b>Tamamlandı</b><small>yeni tarihi bekle</small></span>";
    countdownTitleEl.textContent = "Yeni sınav duyurusu bekleniyor";
    return;
  }
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  examCountdownEl.innerHTML = `
    <span><b>${days}</b><small>gün</small></span>
    <span><b>${hours}</b><small>saat</small></span>
    <span><b>${minutes}</b><small>dk</small></span>`;
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
  const activeView = viewTabsEl.querySelector(`[data-view="${view}"]`) ? view : "all";
  document.body.dataset.activeView = activeView;
  viewSections.forEach((section) => {
    section.hidden = activeView === "all"
      ? section.dataset.viewSection === "educators"
      : section.dataset.viewSection !== activeView;
  });
  viewTabsEl.querySelectorAll("[data-view]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.view === activeView));
  });
  const activeButton = viewTabsEl.querySelector(`[data-view="${activeView}"]`);
  activeButton?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  if (shouldScroll) window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderChips() {
  const items = [{ id: "all", label: "Tümü" }, ...CATEGORIES];
  chipsEl.innerHTML = items.map((item) => {
    const count = item.id === "all" ? RESOURCES.length : RESOURCES.filter((resource) => resource.category === item.id).length;
    const active = state.category === item.id;
    return `<button class="chip" type="button" data-category="${item.id}" aria-pressed="${active}">${item.label} · ${count}</button>`;
  }).join("");
}

function filteredResources() {
  const query = normalize(state.query.trim());
  return RESOURCES.filter((resource) => {
    const inCategory = state.category === "all" || resource.category === state.category;
    const haystack = normalize(`${resource.title} ${resource.description} ${resource.tags} ${getDomain(resource.url)}`);
    return inCategory && (!query || haystack.includes(query));
  });
}

function resourceItem(resource, category) {
  const badge = resource.badge ? `<span class="badge">${resource.badge}</span>` : "";
  return `<li>
    <a class="resource-link" href="${resource.url}" target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">${svgFor(category.icon)}</span>
      <span class="resource-copy">
        <span class="title-row"><strong>${resource.title}</strong>${badge}</span>
        <p>${resource.description}</p>
        <span class="resource-domain">${getDomain(resource.url)}</span>
      </span>
      ${externalIcon}
    </a>
  </li>`;
}

function render() {
  const matches = filteredResources();
  const sections = CATEGORIES.map((category) => {
    const items = matches.filter((resource) => resource.category === category.id);
    if (!items.length) return "";
    return `<section class="category-section" aria-labelledby="heading-${category.id}">
      <div class="section-heading">
        <h3 id="heading-${category.id}">${category.label}</h3>
        <span>${items.length} kaynak</span>
      </div>
      <div class="resource-grid">
        <ul class="link-list">${items.map((item) => resourceItem(item, category)).join("")}</ul>
      </div>
    </section>`;
  }).join("");

  sectionsEl.innerHTML = sections;
  emptyStateEl.hidden = matches.length > 0;
  const filtered = state.category !== "all" || state.query.trim();
  resultCountEl.textContent = filtered ? `${matches.length} kaynak bulundu` : `${RESOURCES.length} doğrulanmış resmî kaynak`;
  resetFiltersEl.hidden = !filtered;
  clearSearchEl.hidden = !state.query;
  renderChips();
}

function escapeHTML(value) {
  return value.replace(/[&<>"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  })[character]);
}

function renderPathways() {
  const query = normalize(pathwayState.query.trim());
  const matches = PATHWAYS.filter((pathway) => {
    const inCategory = pathwayState.category === "all" || pathway.category === pathwayState.category;
    const haystack = normalize(`${pathway.title} ${pathway.description} ${pathway.tags} ${pathway.steps.join(" ")} ${pathway.note || ""}`);
    return inCategory && (!query || haystack.includes(query));
  });

  pathwayChipsEl.innerHTML = PATHWAY_CATEGORIES.map((category) => {
    const count = category.id === "all" ? PATHWAYS.length : PATHWAYS.filter((item) => item.category === category.id).length;
    const active = pathwayState.category === category.id;
    return `<button class="pathway-chip" type="button" data-pathway-category="${category.id}" aria-pressed="${active}">${category.label} · ${count}</button>`;
  }).join("");

  pathwayGridEl.innerHTML = matches.map((pathway) => `
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

  pathwayEmptyEl.hidden = matches.length > 0;
  pathwayCountEl.textContent = `${matches.length} işlem yolu`;
}

function renderExams() {
  const matches = EXAMS.filter((exam) => examState.year === "Tümü" || exam.year === examState.year);
  examFiltersEl.innerHTML = EXAM_YEARS.map((year) => `
    <button class="exam-filter" type="button" data-exam-year="${year}" aria-pressed="${examState.year === year}">${year}</button>
  `).join("");
  examGridEl.innerHTML = matches.map((exam) => `
    <article class="exam-card${exam.latest ? " exam-card-latest" : ""}">
      <div class="exam-card-top">
        <span class="exam-term">${exam.term}. dönem</span>
        ${exam.latest ? '<span class="exam-latest">En yeni</span>' : ""}
      </div>
      <h3>${exam.year}</h3>
      <p>${exam.date} · Soru kitapçıkları ve cevap anahtarları</p>
      <div class="exam-session-links">
        ${exam.sessions.map((url, index) => `<a href="${url}" target="_blank" rel="noopener noreferrer"><span>${index + 1}. oturum</span><small>PDF</small></a>`).join("")}
      </div>
      <a class="exam-source-link" href="${exam.url}" target="_blank" rel="noopener noreferrer">Resmî duyuru ${externalIcon}</a>
    </article>
  `).join("");
  examCountEl.textContent = `${matches.length} sınav`;
  examEmptyEl.hidden = matches.length > 0;
}

function renderCourses() {
  const query = normalize(courseState.query.trim());
  const matches = COURSES.filter((course) => {
    const inCategory = courseState.category === "all" || course.category === courseState.category;
    return inCategory && (!query || normalize(`${course.name} ${course.scope}`).includes(query));
  });

  courseChipsEl.innerHTML = COURSE_CATEGORIES.map((category) => {
    const count = category.id === "all" ? COURSES.length : COURSES.filter((course) => course.category === category.id).length;
    return `<button class="feature-chip" type="button" data-course-category="${category.id}" aria-pressed="${courseState.category === category.id}">${category.label} · ${count}</button>`;
  }).join("");

  courseGridEl.innerHTML = matches.map((course) => `
    <article class="course-card">
      <div class="course-card-heading">
        <span class="course-icon" aria-hidden="true">${course.school ? "🏫" : "📘"}</span>
        <div><h3>${escapeHTML(course.name)}</h3><span>${course.school ? "Yüz yüze alan dersi" : "Merkezî sınav kapsamı"}</span></div>
      </div>
      <div class="course-scope">
        <small>Sorumlu olduğun bölüm</small>
        <p>${escapeHTML(course.scope)}</p>
      </div>
      <div class="course-actions">
        <a href="${course.source}" target="_blank" rel="noopener noreferrer">${course.school ? "Resmî materyalleri aç" : "Resmî ders kitabını aç"} ${externalIcon}</a>
        <a href="#cikmis-sorular">Çıkmış sorular</a>
      </div>
    </article>
  `).join("");
  courseCountEl.textContent = `${matches.length} ders`;
  courseEmptyEl.hidden = matches.length > 0;
}

function renderGlossary() {
  const query = normalize(glossaryState.query.trim());
  const matches = GLOSSARY.filter((item) => !query || normalize(`${item.term} ${item.definition} ${item.analogy || ""}`).includes(query));
  glossaryGridEl.innerHTML = matches.map((item) => `
    <div class="glossary-item">
      <dt>${escapeHTML(item.term)}</dt>
      <dd>${escapeHTML(item.definition)}</dd>
      ${item.analogy ? `<dd class="glossary-analogy"><span>Bi başka deyişle</span>${escapeHTML(item.analogy)}</dd>` : ""}
    </div>
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
  promptCountEl.textContent = `${PROMPTS.length} hazır prompt`;
}

function photoReadyPrompt(text) {
  const photoInstruction = "Önce yüklediğim soru veya test sayfası fotoğrafındaki metni, sayıları ve seçenekleri dikkatle oku. Görsel net değilse tahmin yürütme; benden daha net bir fotoğraf iste.";
  const sourceInstruction = "SORU KAYNAĞI:\nYüklediğim görseldeki soru veya sorular.";
  return `${photoInstruction}\n\n${text.replace(/SORU:\n\[[^\]]+\]/, sourceInstruction)}`;
}

function buildStudioPrompt() {
  const question = studioQuestionEl.value.trim();
  if (!question) {
    studioQuestionEl.focus();
    studioQuestionEl.setAttribute("aria-invalid", "true");
    studioCharCountEl.textContent = "Önce bir soru yapıştır";
    return "";
  }
  studioQuestionEl.removeAttribute("aria-invalid");
  const theme = studioThemeEl.value;
  const tone = studioToneEl.value;
  const mode = studioModeEl.value;
  return `Aşağıdaki soruyu ${theme} biçiminde yeniden yaz.

Zorunlu koruma kuralları:
- Sorunun ölçtüğü kazanımı ve çözüm yöntemini değiştirme.
- Bütün sayıları, tarihleri, kişi/kavram adlarını, birimleri ve seçenekleri eksiksiz koru.
- Doğru cevap orijinal soruyla kesinlikle aynı kalsın.
- Hikâye uğruna yeni veri, ek işlem veya özel tema bilgisi gerektirme.
- Belirsizlik oluşturma; orijinal soru hatalıysa dönüştürmeden önce bunu açıkça belirt.
- Anlatım ${tone} olsun ve gereksiz ayrıntıya girme.
- ${mode}.

Son kontrol:
Çıktıyı vermeden önce verileri ve doğru cevabı içinden karşılaştır; fark varsa düzelt.

ORİJİNAL SORU:
${question}`;
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

function resetFilters() {
  state.query = "";
  state.category = "all";
  searchEl.value = "";
  render();
  searchEl.focus();
}

document.querySelector("#search-form").addEventListener("submit", (event) => event.preventDefault());
searchEl.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});
clearSearchEl.addEventListener("click", () => {
  state.query = "";
  searchEl.value = "";
  render();
  searchEl.focus();
});
chipsEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  render();
  document.querySelector("#kaynaklar").scrollIntoView({ behavior: "smooth", block: "start" });
});
resetFiltersEl.addEventListener("click", resetFilters);

pathwaySearchEl.addEventListener("input", (event) => {
  pathwayState.query = event.target.value;
  renderPathways();
});
pathwayChipsEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-pathway-category]");
  if (!button) return;
  pathwayState.category = button.dataset.pathwayCategory;
  renderPathways();
});

examFiltersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-exam-year]");
  if (!button) return;
  examState.year = button.dataset.examYear;
  renderExams();
});

glossarySearchEl.addEventListener("input", (event) => {
  glossaryState.query = event.target.value;
  renderGlossary();
});

viewTabsEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  setActiveView(button.dataset.view);
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href^='#']");
  if (!link) return;
  const requestedView = link.dataset.viewLink || HASH_VIEWS[link.getAttribute("href")];
  if (!requestedView) return;
  event.preventDefault();
  setActiveView(requestedView, false);
  const target = document.querySelector(link.getAttribute("href"));
  if (requestedView === "all") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

window.addEventListener("scroll", () => {
  toTopEl.hidden = window.scrollY < 500;
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

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  if (localStorage.getItem("aoihl-install-dismissed") !== "1") installBannerEl.hidden = false;
});

installAppEl.addEventListener("click", async () => {
  if (!installPrompt) return;
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  installBannerEl.hidden = true;
});

installCloseEl.addEventListener("click", () => {
  installBannerEl.hidden = true;
  localStorage.setItem("aoihl-install-dismissed", "1");
});

window.addEventListener("appinstalled", () => {
  installPrompt = null;
  installBannerEl.hidden = true;
});

supportButtonEl?.addEventListener("click", () => supportDialogEl?.showModal());

supportDialogEl?.addEventListener("click", (event) => {
  if (event.target === supportDialogEl) supportDialogEl.close();
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

updateExamCountdown();
setInterval(updateExamCountdown, 60000);

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js"));
}

renderPrompts();
renderPathways();
renderExams();
renderGlossary();
render();
setActiveView(HASH_VIEWS[window.location.hash] || "all", false);
