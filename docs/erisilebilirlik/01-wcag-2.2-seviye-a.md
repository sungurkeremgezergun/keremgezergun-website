# WCAG 2.2 — Seviye A denetim listesi

Bu liste keremgezergun.com'a uyarlanmıştır. Kaynak: [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/), [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/).

**Kapsam notları**

- WCAG 2.2'de **31 Seviye A** başarı ölçütü var.
- **4.1.1 Ayrıştırma (Parsing) 2.2'de kaldırıldı** — bu ölçüte karşı bulgu raporlanmaz. Pratik kalıntısı (erişilebilir ad hesaplamasını bozan yinelenen `id` değerleri) 4.1.2 altında denetlenir.
- **3.2.6 Tutarlı Yardım** ve **3.3.7 Gereksiz Giriş** 2.2 ile eklenen iki yeni Seviye A ölçütüdür.
- 2.4.11, 2.5.7, 2.5.8, 3.3.8 **AA** seviyesindedir; bu belgenin kapsamı dışındadır.

Aşağıda `$OUT` = derlenmiş HTML çıktısı dizini (`.next/server/app`).

---

## 1. Algılanabilir

### 1.1.1 Metin Olmayan İçerik
- **Gereklilik:** Her görsel, ikon ve metin olmayan öğe ya aynı amacı taşıyan bir metin alternatifine sahiptir ya da dekoratif olarak işaretlenmiştir.
- **Uygulanır:** **evet** — hero görselleri, kart görselleri, footer sosyal ikon bağlantıları, satır içi SVG ikonlar.
- **Nasıl kontrol edilir:**
  - Her `<img>` bir `alt` özniteliğine sahip (boş olabilir). Next.js `<Image>` bileşeni `<img>` üretir, bu yüzden JSX değil **derlenmiş çıktı** kontrol edilmeli.
  - İçeriği yalnızca ikondan ibaret olan her bağlantı/butonun erişilebilir adı var: metin içeriği boş **ve** `aria-label`/`aria-labelledby` yok **ve** `alt`'ı dolu bir `img` içermiyor **ve** `svg title` yok → hata. Footer sosyal ikonlarını bu kontrol yakalar.
  - `aria-hidden="true"` olmayan her `<svg>` için `role="img"` + ilk çocuk olarak `<title>`.
  - Çöp alt taraması: `alt="görsel"`, `alt="image"`, `alt="logo.png"`, dosya adı içeren alt değerleri.
- **Otomatikleştirilemez:** alt metnin *doğru ve eşdeğer* olup olmadığı. Her dolu `alt` görseliyle birlikte okunmalı.
- **Sık görülen hatalar:** dekoratif hero görseline uzun alt verilmesi (veya içerik görseline `alt=""`); erişilebilir adı hiç olmayan ikon bağlantıları; alt metnin dosya adı olması.

### 1.2.1 Yalnızca Ses ve Yalnızca Video (Önceden Kaydedilmiş)
- **Gereklilik:** Önceden kaydedilmiş yalnızca-ses veya yalnızca-video içeriğinin eşdeğer metin alternatifi vardır.
- **Uygulanır:** **hayır** — sitede medya yok. Varsayım her derlemede doğrulanmalı.
- **Nasıl kontrol edilir:** `<video>`, `<audio>`, `<source>`, `<track>`, YouTube/Vimeo embed, `.mp4/.webm/.mp3` araması sonuçsuz kalmalı. Bu bir regresyon nöbetçisidir.
- **Sık görülen hatalar:** sonradan eklenen arka plan videosu; "bizim içeriğimiz değil" diye muaf sayılan YouTube gömmesi.

### 1.2.2 Altyazılar (Önceden Kaydedilmiş)
- **Gereklilik:** Sesli önceden kaydedilmiş videonun eşzamanlı altyazısı vardır.
- **Uygulanır:** **hayır** — eşzamanlı medya yok.
- **Nasıl kontrol edilir:** 1.2.1 ile aynı arama; `<video>` çıkarsa `<track kind="captions">` çocuğu zorunlu.
- **Sık görülen hatalar:** YouTube otomatik altyazısına güvenmek; iki dilli sitede altyazının tek dilde olması.

### 1.2.3 Sesli Betimleme veya Medya Alternatifi (Önceden Kaydedilmiş)
- **Gereklilik:** Sesli videonun sesli betimlemesi veya görsel bilgiyi karşılayan tam metin alternatifi vardır.
- **Uygulanır:** **hayır** — eşzamanlı medya yok.
- **Sık görülen hatalar:** altyazı var ama ekrandaki yazı/grafik hiç betimlenmemiş.

### 1.3.1 Bilgi ve İlişkiler
- **Gereklilik:** Görsel olarak aktarılan yapı (başlıklar, listeler, tablolar, gruplamalar) işaretlemede de bulunur.
- **Uygulanır:** **evet** — bu sitedeki en riskli ölçüt: kart ızgaraları, veri tabloları, `<details>` akordeonları, bağlantı listeleri.
- **Nasıl kontrol edilir:**
  - Sayfa başına tam bir `<h1>`.
  - Başlık seviyesi atlanmıyor (aşağı yönde 1'den fazla adım yok).
  - `role="presentation"` olmayan her `<table>`'da `scope` özniteliği taşıyan `<th>` hücreleri var.
  - Düzen amaçlı tablo yok: `<th>` içermeyen tablo `role="presentation"` taşımalı.
  - `<ul>`/`<ol>` yalnızca `<li>` çocuğu içeriyor.
  - Landmark'lar sayfa başına bir kez: bir `<main>`, bir `<header>`, bir `<footer>`; birden çok `<nav>` varsa her birinde `aria-label`.
  - Sahte başlık taraması: `class` değerinde `title`/`heading`/`baslik` geçen `div`/`span`/`p` öğeleri gözden geçirilmeli.
  - Akordeonlar: yerel `<details><summary>` tercih edilir; özel çözüm varsa tetikleyici `<button>` + `aria-expanded` + `aria-controls` olmalı.
- **Otomatikleştirilemez:** yalnızca boşlukla ayrılmış görsel gruplamaların işaretleme karşılığı olup olmadığı.
- **Sık görülen hatalar:** yazı tipi boyutuna göre seçilen başlıklar (h2 "çok büyük" diye h4 kullanmak) → seviye atlaması; `<div>` ızgarasından kurulan veri tabloları; kalın metnin bölüm başlığı yerine geçmesi.

### 1.3.2 Anlamlı Sıra
- **Gereklilik:** DOM'daki okuma sırası anlamlı görsel sırayla örtüşür.
- **Uygulanır:** **kısmen** — yalnızca CSS'in içeriği yeniden sıraladığı yerlerde (kart ızgaraları, iki sütunlu hero, mobilde ters yığılma).
- **Nasıl kontrol edilir:** CSS'te `flex-direction: *-reverse`, `order:`, `grid-row/column:` kullanımları işaretlenir; her biri manuel doğrulama ister. CSS tamamen kapatılıp (veya `lynx -dump` ile) içeriğin 1280px ve 360px'te anlamlı okunduğu doğrulanır.
- **Sık görülen hatalar:** görseli metinden önce göstermek için `order:` kullanımı; DOM'da geç gelen mutlak konumlu hero metni.

### 1.3.3 Duyusal Özellikler
- **Gereklilik:** Yönergeler yalnızca şekil, renk, boyut, görsel konum veya sese dayanmaz.
- **Uygulanır:** **kısmen** — iki dilli gövde metni ile tablo/şekil göndermeleri risk alanı.
- **Nasıl kontrol edilir:** "yukarıdaki", "aşağıdaki", "sağdaki", "soldaki", "yandaki", "yeşil kutu", "above", "below", "to the right", "the green button" gibi ifadeler taranır; her isabet bağlamında incelenir. Konumsal ifade ancak yanında ada dayalı bir tanımlayıcı da varsa kabul edilir.
- **Sık görülen hatalar:** mobilde yeri değişen tablo için "aşağıdaki tablo"; "yeşil butona tıklayın".

### 1.4.1 Rengin Kullanımı
- **Gereklilik:** Renk; bilgi, durum veya bağlantıyı çevresindeki metinden ayırmak için tek görsel ipucu değildir.
- **Uygulanır:** **evet** — paragraf içi bağlantılar ve kart/tablo üzerindeki durum etiketleri.
- **Nasıl kontrol edilir:**
  - Altı çizilmemiş paragraf içi bağlantılar aranır (`a { text-decoration: none }` dahil). Metin bloğu içindeki her bağlantı ya renk dışı bir farka (kalınlık, kenarlık, ikon) + çevre metne karşı 3:1 kontrasta sahip olmalı, ya da hover **ve** focus'ta altı çizilmeli.
  - `<nav>`, `<header>`, `<footer>` ve kart blokları içindeki bağlantılar bu kuraldan muaftır (metin bloğu içinde gömülü değiller).
- **Otomatikleştirilemez:** gri tonlamada (DevTools → Rendering → Achromatopsia) hiçbir şeyin belirsizleşmediğinin doğrulanması.
- **Sık görülen hatalar:** global `a { text-decoration: none }`; aktif menü öğesinin yalnızca renkle belirtilmesi; metin etiketi olmayan yeşil/kırmızı durum rozetleri.

### 1.4.2 Ses Kontrolü
- **Gereklilik:** 3 saniyeden uzun otomatik çalan ses duraklatılabilir, durdurulabilir veya sessize alınabilir.
- **Uygulanır:** **hayır** — ses yok.
- **Nasıl kontrol edilir:** `autoplay`/`autoPlay` özniteliği taranır, sonuç boş olmalı.

---

## 2. Çalıştırılabilir

### 2.1.1 Klavye
- **Gereklilik:** Tüm işlevsellik yalnızca klavyeyle çalıştırılabilir.
- **Uygulanır:** **evet** — açılır menü, hamburger menü, `<details>` akordeonlar, dil değiştirici.
- **Nasıl kontrol edilir:**
  - Etkileşimli olmayan öğelerde `onclick` yok; kaynakta `role`, `tabIndex={0}` ve `onKeyDown` olmadan `onClick` alan `div`/`span` işaretlenir.
  - `role="button"`/`role="link"`/`role="menuitem"` taşıyan her öğe `tabindex="0"` içermeli (yerel `<a>`/`<button>` hariç).
  - `<summary>` odaklanamayan özel tetikleyicilerle değiştirilmemeli.
- **Zorunlu manuel test:** her sayfada Tab ile gezinme — hamburger'i aç/kapat, açılır menüdeki her öğeye ulaş, her akordeonu aç/kapat, dil değiştiriciyi çalıştır; yalnızca Tab/Shift+Tab/Enter/Space/Esc/ok tuşlarıyla.
- **Sık görülen hatalar:** klavye işleyicisi olmayan `<div onClick>` hamburger; yalnızca `:hover` ile açılan açılır menü; `<div>` akordeon başlıkları.

### 2.1.2 Klavye Tuzağı Yok
- **Gereklilik:** Klavye odağı standart tuşlarla her bileşenden çıkarılabilir.
- **Uygulanır:** **kısmen** — gerçek risk yalnızca odak tuzağı kullanan mobil menü katmanında.
- **Nasıl kontrol edilir:** odak tuzağı içeren her katman `Escape` ile kapanmalı ve odağı tetikleyiciye geri döndürmeli. **Manuel:** mobil menüyü aç, Tab ile dolaş, odağın çıkabildiğini veya Esc'in kapattığını doğrula.
- **Sık görülen hatalar:** Esc işleyicisi olmayan odak tuzağı; açık katmanın arkasındaki içeriğin hâlâ Tab ile erişilebilir olması.

### 2.1.4 Karakter Tuşu Kısayolları
- **Gereklilik:** Tek karakterli kısayollar kapatılabilir, yeniden atanabilir veya yalnızca bileşen odaktayken etkindir.
- **Uygulanır:** **hayır** — kısayol yok.
- **Nasıl kontrol edilir:** `document`/`window` üzerindeki `keydown`/`keyup`/`keypress` dinleyicilerinin çıplak harf/rakam/noktalama tuşuna bağlanmadığı doğrulanır.

### 2.2.1 Ayarlanabilir Zamanlama
- **Gereklilik:** İçeriğin koyduğu her zaman sınırı kapatılabilir, ayarlanabilir veya uzatılabilir.
- **Uygulanır:** **hayır** — oturum zaman aşımı veya zamanlı içerik yok.
- **Nasıl kontrol edilir:** `<meta http-equiv="refresh">` yok; `setTimeout`/`setInterval` çağrılarının hiçbiri yönlendirme veya içerik kaldırma yapmıyor.
- **Sık görülen hatalar:** eski sayfada kalmış meta-refresh; okunmadan kaybolan çerez/bildirim şeridi.

### 2.2.2 Duraklat, Durdur, Gizle
- **Gereklilik:** 5 saniyeden uzun otomatik hareket eden, yanıp sönen veya kayan içerik kullanıcı tarafından durdurulabilir.
- **Uygulanır:** **kısmen** — karusel yok ama sonsuz logo şeritleri ve animasyonlu gradyanlar bu kapsama girer.
- **Nasıl kontrol edilir:** CSS'te `infinite` veya 5s üzeri süreli animasyonlar taranır; her biri ya tamamen dekoratif ve dikkat dağıtmayan olmalı ya da duraklatma kontrolü sunmalı. `<marquee>` bulunmamalı. `@media (prefers-reduced-motion: reduce)` bloğunun bu animasyonları kapattığı doğrulanır.
- **Sık görülen hatalar:** duraklatılamayan sonsuz logo şeridi; sonradan eklenen otomatik ilerleyen referans döngüsü.

### 2.3.1 Üç Yanıp Sönme veya Altı
- **Gereklilik:** Hiçbir içerik saniyede üçten fazla yanıp sönmez.
- **Uygulanır:** **hayır**.
- **Nasıl kontrol edilir:** `blink`/`flash` animasyonları ve 333ms altı döngüler taranır; geniş alanda opaklık/renk değiştiren varsa manuel inceleme.

### 2.4.1 Blokları Atlama
- **Gereklilik:** Her sayfada tekrarlanan header ve menüyü atlamak için bir mekanizma vardır.
- **Uygulanır:** **evet** — sabit header + menü 22 sayfada tekrarlanıyor.
- **Nasıl kontrol edilir:**
  - Her sayfanın Tab sırasındaki ilk odaklanabilir öğesi bir atlama bağlantısı ve `href`'i var olan bir `id`'ye çözülüyor.
  - Hedef mevcut; yerel olarak odaklanabilir değilse `tabindex="-1"` taşıyor.
  - Her HTML dosyasında hem atlama bağlantısı hem `<main>` bulunuyor.
  - Atlama bağlantısı kalıcı olarak `display:none` değil — kırpma/ekran dışı deseni + `:focus`'ta görünür hale getiren kural kullanıyor.
- **Manuel:** taze sayfa yüklemesinde bir kez Tab'a bas; bağlantı görünür olmalı ve çalışmalı.
- **Sık görülen hatalar:** `display:none` olduğu için hiç odaklanamayan atlama bağlantısı; yalnızca Türkçe sayfalarda olup `/en` altında olmayan atlama bağlantısı; hedefin sabit header altında kalması.

### 2.4.2 Sayfa Başlıklı
- **Gereklilik:** Her sayfanın konusunu veya amacını tanımlayan bir başlığı vardır.
- **Uygulanır:** **evet** — 22 sayfa.
- **Nasıl kontrol edilir:** her HTML dosyasında boş olmayan `<title>`; başlıklar dil içinde benzersiz; `/en/**` başlıkları Türkçe değil (ve tersi).
- **Sık görülen hatalar:** tüm sayfaların kök layout başlığını devralması; `/en` sayfalarının Türkçe başlıkta kalması.

### 2.4.3 Odak Sırası
- **Gereklilik:** Odak, anlamı ve çalıştırılabilirliği koruyan bir sırayla ilerler.
- **Uygulanır:** **evet** — sabit header, açılır menü ve hamburger risk alanı.
- **Nasıl kontrol edilir:**
  - Pozitif `tabindex` yok.
  - Kapalı menüler Tab sırasından çıkarılmış: kapalı durumda `display:none`, `hidden` veya `inert` — yalnızca `opacity:0` veya `transform` ile gizlemek yetmez. Hata imzası: `visibility: hidden` olmadan `transform: translateX(...)`/`opacity: 0`.
- **Manuel:** masaüstü ve mobil genişlikte, menü açık ve kapalıyken Tab sırası.
- **Sık görülen hatalar:** yalnızca `transform` ile gizlenen ekran dışı mobil menünün masaüstünde Tab ile erişilebilir kalması; sırayı "düzeltmek" için eklenen `tabindex="1"`.

### 2.4.4 Bağlantı Amacı (Bağlam İçinde)
- **Gereklilik:** Her bağlantının amacı metninden veya metniyle birlikte çevresinden anlaşılır.
- **Uygulanır:** **evet** — kart ızgaraları, dış kaynak listeleri, ikon bağlantıları.
- **Nasıl kontrol edilir:**
  - Belirsiz metin taraması: "devamı", "daha fazla", "tıklayın", "buraya tıkla", "detay", "read more", "click here", "learn more". Her isabet ancak bağlamı sağlayan bir `<li>`/kart/paragraf içindeyse veya hedefi adlandıran bir `aria-label` taşıyorsa geçer.
  - Aynı metin/farklı hedef kontrolü: sayfa başına `{metin -> href kümesi}` kurulur; birden fazla `href`'e eşlenen metin muhtemel hatadır.
  - Boş bağlantı metni yok (1.1.1 ile örtüşür).
  - `href="#"` veya `href=""` yer tutucu bağlantı yok.
- **Sık görülen hatalar:** on iki farklı projeye giden on iki "Daha fazla" bağlantısı; kaynak listesinde bağlantı metni olarak ham URL.

### 2.5.1 İşaretçi Hareketleri
- **Gereklilik:** Çok noktalı veya yol tabanlı her hareketin tek işaretçili alternatifi vardır.
- **Uygulanır:** **hayır** — karusel, harita, kaydırıcı veya çizim yüzeyi yok.
- **Nasıl kontrol edilir:** `touchmove`, `swipe`, `pinch`, `hammer`, `swiper`, `embla`, `keen-slider` aramaları boş dönmeli.

### 2.5.2 İşaretçi İptali
- **Gereklilik:** Tek işaretçiyle tetiklenen eylemler basışta değil bırakışta tamamlanır ve iptal edilebilir.
- **Uygulanır:** **kısmen** — hamburger/açılır menü tetikleyicileri; yerel bağlantı ve butonlar bunu kendiliğinden sağlar.
- **Nasıl kontrol edilir:** `mousedown`/`pointerdown`/`touchstart` işleyicilerinden hiçbiri eylem *gerçekleştirmemeli* (yönlendirme, aç/kapat, gönderim); yalnızca sürükleme veya görsel durum başlatabilir.
- **Sık görülen hatalar:** "daha hızlı hissettirsin" diye `onMouseDown`'a bağlanan menü tetikleyicisi.

### 2.5.3 Addaki Etiket
- **Gereklilik:** Görünür metin etiketi olan kontrollerde erişilebilir ad, o görünür metni **içerir**.
- **Uygulanır:** **evet** — hem görünür metni hem `aria-label`'ı olan her buton ve bağlantı. **Bu sitede yüksek riskli.**
- **Nasıl kontrol edilir:** `aria-label` (veya `title`) taşıyan ve görünür metni de olan her `a`/`button`/`[role=button]` için: `aria-label`'ın küçük harfe indirgenmiş hali, görünür metnin küçük harfe indirgenmiş halini içermeli. Yalnızca ikon içeren kontroller muaftır. İki dilli uyumsuzluk (Türkçe etiketli kontrolde İngilizce `aria-label`) otomatik hatadır.
- **Sık görülen hatalar:** `<a aria-label="Contact us">İletişim</a>` — sesle kontrol ("İletişim'e tıkla") çalışmaz; görünür "Menü" etiketini ezen `aria-label="Open menu"`; zaten yeterli olan bağlantıyı "iyileştirmek" için eklenen `aria-label`.

### 2.5.4 Hareket Etkinleştirme
- **Gereklilik:** Cihaz veya kullanıcı hareketiyle tetiklenen işlevsellik geleneksel kontrollerle de çalıştırılabilir ve kapatılabilir.
- **Uygulanır:** **hayır**.
- **Nasıl kontrol edilir:** `devicemotion`, `deviceorientation`, `accelerometer` kullanımı yok. (Kaydırmaya bağlı paralaks bu ölçütün kapsamı dışındadır.)

---

## 3. Anlaşılabilir

### 3.1.1 Sayfa Dili
- **Gereklilik:** Her sayfanın varsayılan insan dili işaretlemede belirtilir.
- **Uygulanır:** **evet** — site iki dilli olduğu için kritik.
- **Nasıl kontrol edilir:** her HTML dosyasında geçerli BCP 47 etiketiyle `<html lang="...">`; yol bazlı doğruluk: `$OUT/en/**` → `lang="en"`, diğerleri → `lang="tr"`. Değer `""`, `und` veya içeriğin dili olmayan bir kod olmamalı.
- **Sık görülen hatalar:** kök `layout.tsx`'in her iki dil için de `lang="en"` sabitlemesi; `/en` rotalarında `lang`'ın eksik kalması; `lang="tr_TR"` (alt çizgi geçersiz).

### 3.2.1 Odakta
- **Gereklilik:** Bir bileşene odak taşımak kendiliğinden bağlam değişikliğine yol açmaz.
- **Uygulanır:** **kısmen** — form yok; menü ve dil değiştirici için geçerli.
- **Nasıl kontrol edilir:** `onfocus`/`focus` dinleyicilerinin hiçbiri yönlendirme, `window.open` veya içerik yeniden sıralama yapmamalı. Odakta *açılan* menü kabul edilir (içerik göstermek bağlam değişikliği değildir); odakta *yönlendiren* menü kabul edilmez.

### 3.2.2 Girdide
- **Gereklilik:** Bir kontrolün ayarını değiştirmek, kullanıcı uyarılmadıkça bağlam değişikliğine yol açmaz.
- **Uygulanır:** **kısmen** — form yok, ama `<select>` tabanlı bir dil değiştirici tam bu kapsama girerdi.
- **Nasıl kontrol edilir:** `<select>` bulunmadığı doğrulanır. Varsa gönder butonu veya açık uyarı gerekir; `onChange` ile otomatik yönlendirme hatadır.
- **Sık görülen hatalar:** `<select onChange="location.href=...">` dil menüsü — iki dilli tanıtım sitelerinde bu ölçütün en sık ihlali.

### 3.2.6 Tutarlı Yardım *(2.2'de yeni)*
- **Gereklilik:** Birden çok sayfada görünen bir yardım mekanizması (iletişim bilgisi, iletişim bağlantısı, sohbet) her sayfada aynı göreli sırada görünür.
- **Uygulanır:** **kısmen** — header veya footer'da iletişim bağlantısı / e-posta / telefon / WhatsApp butonu birden çok sayfada varsa geçerli.
- **Nasıl kontrol edilir:** `mailto:`, `tel:`, `wa.me` ve iletişim rotası bağlantıları bulunur; her sayfada `<header>` ve `<footer>` içindeki bağlantı sırası çıkarılır; yardım bağlantısının sıradaki konumu 22 sayfada aynı olmalı (TR ve EN kümeleri ayrı karşılaştırılır, ama ikisi de kendi içinde tutarlı olmalı).
- **Sık görülen hatalar:** çoğu sayfada header'da olan iletişim bağlantısının bazı sayfalarda yalnızca footer'da olması; İngilizce footer'ın sırayı Türkçe'den farklı kurması.

### 3.3.1 Hata Tanımlama
- **Gereklilik:** Otomatik algılanan girdi hataları metin olarak tanımlanır ve açıklanır.
- **Uygulanır:** **hayır** — form veya kullanıcı girdisi yok.
- **Nasıl kontrol edilir:** `<form>`, `<input>`, `<textarea>`, `<select>` bulunmadığı doğrulanır. Form eklenirse bu ölçüt geçerli hale gelir.

### 3.3.2 Etiketler veya Yönergeler
- **Gereklilik:** Kullanıcı girdisi gerektiren içerikte etiket veya yönerge sunulur.
- **Uygulanır:** **hayır**.
- **Nasıl kontrol edilir:** 3.3.1 ile aynı. Regresyon nöbetçisi: `<input>` eklenirse her birinin `<label for>`, `aria-label` veya `aria-labelledby` taşıması gerekir — yalnızca `placeholder` hatadır.

### 3.3.7 Gereksiz Giriş *(2.2'de yeni)*
- **Gereklilik:** Kullanıcının bir süreçte zaten girdiği bilgi tekrar istenmez; otomatik doldurulur veya seçime sunulur.
- **Uygulanır:** **hayır** — çok adımlı süreç, form veya kimlik doğrulama yok.

---

## 4. Sağlam

### 4.1.2 Ad, Rol, Değer
- **Gereklilik:** Her etkileşimli bileşen yardımcı teknolojiye doğru ad, rol ve güncel durum bildirir.
- **Uygulanır:** **evet** — açılır menü, hamburger, `<details>` akordeonlar, dil değiştirici, ikon bağlantıları.
- **Nasıl kontrol edilir:**
  - Yerel öğeler tercih edilir. `<a href>` üzerinde `role="button"`, `<button>` üzerinde `role="link"` olmamalı.
  - Menü tetikleyicisi durum bildiriyor: hamburger ve her açılır menü tetikleyicisi `aria-expanded` taşıyan bir `<button>`; değer `"true"`/`"false"` arasında geçiyor. **Statik HTML yalnızca kapalı durumu gösterir**, bu yüzden başsız tarayıcıda her iki durum da doğrulanmalı.
  - Her `aria-controls`/`aria-labelledby`/`aria-describedby` var olan bir `id`'ye çözülüyor; sarkan referans yok.
  - Sayfa başına `id` değerleri benzersiz (kaldırılan 4.1.1'in pratik karşılığı).
  - Geçersiz ARIA yok: derlenmiş her sayfada `axe-core` (`aria-valid-attr`, `aria-valid-attr-value`, `aria-required-attr`, `aria-allowed-role`, `button-name`, `link-name`).
  - Yerel `<details>/<summary>` ARIA gerektirmez; `<summary>`'ye `role="button"` + `aria-expanded` eklemek sık görülen aşırı mühendisliktir.
- **Zorunlu manuel test:** VoiceOver (macOS/Safari) ve NVDA (Windows/Firefox) ile header, bir akordeon sayfası ve bir tablo sayfası — TR ve EN'de.
- **Sık görülen hatalar:** rolü ve adı olmayan `<div>` hamburger, veya hiç güncellenmeyen `aria-expanded`; başka metni olmayan bağlantı içindeki ikona `aria-hidden="true"` verip bağlantıyı adsız bırakmak; aynı bileşenin iki kez render edilmesinden doğan yinelenen `id`.

### 4.1.1 Ayrıştırma — uygulanmaz (kaldırıldı)
WCAG 2.2'de **kaldırılmıştır**. Bu ölçüte karşı bulgu raporlanmaz. Genel HTML geçerliliği bir kalite kapısı olarak hâlâ değerlidir ama WCAG 2.2 uyum gerekliliği değildir.

---

## Statik olarak doğrulanamayanlar

| Ölçüt | Statik kontrolün neden yetmediği | Asgari manuel test |
|---|---|---|
| 1.1.1 | Grep `alt`'ın varlığını kanıtlar, *eşdeğerliğini* değil. | Her dolu `alt` görseliyle birlikte okunur. |
| 1.3.1 | İşaretleme karşılığı olmayan görsel gruplama ayrıştırıcıya görünmez. | Erişilebilirlik ağacı DevTools'ta düzenle karşılaştırılır. |
| 1.3.2 | CSS yeniden sıralama işaretleri ipucudur, hüküm değil. | CSS kapatılıp her sayfa masaüstü ve mobil genişlikte okunur. |
| 1.3.3 | "Aşağıdaki" ifadesinin belirsiz olup olmadığı render'a bağlıdır. | Her isabet 360px genişlikte bağlamında incelenir. |
| 1.4.1 | Bağlantı-metin ayrımının kontrastı render gerektirir. | Her şablonda gri tonlama emülasyonu. |
| 2.1.1 | Açılır menü, hamburger ve akordeonların klavye davranışı çalışma zamanıdır. | Şablon başına tam klavye turu. |
| 2.1.2 | Tuzaklar yalnızca çalışma zamanında ortaya çıkar. | Açık mobil menüde Tab; Esc kapatmalı ve odağı tetikleyiciye döndürmeli. |
| 2.2.2 | Hareketin "dikkat dağıtıcı" olup olmadığı gözleme dayalıdır. | Her şablon 10 saniye izlenir. |
| 2.4.1 | Atlama bağlantısının varlığı çalıştığı anlamına gelmez. | Yüklemede bir kez Tab; bağlantı görünür olmalı ve odağı `<main>`'e taşımalı. |
| 2.4.3 | Tab sırası menülerin açık/kapalı durumuna bağlıdır. | Masaüstü ve mobilde, menü açık ve kapalı. |
| 2.4.4 | "Bağlamda yeterli" insan yargısıdır. | Her genel metinli bağlantı kendi kartı/listesi karşısında incelenir. |
| 2.5.2 | İşleyicinin *etkisini* doğrulamak gerekir. | Menü tetikleyicisine bas, dışarı sürükle, bırak — hiçbir şey olmamalı. |
| 3.2.1 / 3.2.2 | Bağlam değişiklikleri çalışma zamanı olaylarıdır. | Dil değiştirici ve menüde Tab ile beklenmedik yönlendirme olmadığı doğrulanır. |
| 3.2.6 | Sıra karşılaştırması otomatiktir ama "bu bir yardım mekanizması mı" yargıdır. | Yardım sayılan bağlantılar belirlenip 22 sayfada sıra farkı alınır. |
| 4.1.2 | Durum öznitelikleri yalnızca *açık* durumda doğrudur; statik HTML bunu hiç göstermez. | Başsız tarayıcıda her iki durumda axe **artı** VoiceOver + NVDA turu, TR ve EN'de. |

**Araç notu:** otomatik araçlar (axe-core, pa11y, Lighthouse) bu ölçütlerin yaklaşık %30–40'ını güvenilir şekilde yakalar — ağırlıklı olarak 1.1.1 öznitelik varlığı, 1.3.1 yapı, 2.4.2, 3.1.1 ve 4.1.2'nin bir kısmı. Kalan kısım yukarıdaki manuel tablodur.
