# 301 Yönlendirme Aracı — LP Denetimi

**Sayfa:** `/301-yonlendirme-araci` · **Denetim tarihi:** 9 Eylül 2026
**Kapsam:** Teknik SEO, içerik & mesaj mimarisi, bilgi hiyerarşisi, UX/etkileşim, görsel tasarım & tipografi, okunabilirlik, erişilebilirlik, dönüşüm.
**Yöntem:** Canlı DOM denetimi, hesaplanmış CSS ölçümleri, schema/meta çıkarımı, aracın uçtan uca fonksiyonel testi (örnek veri → eşleştirme → sonuç ekranı → dışa aktarma), kontrast ve dokunma hedefi taraması, konsol/ağ incelemesi.

---

## Özet

Sayfanın **içerik özü çok güçlü**: 1.753 kelimelik, gerçekten özgün, algoritmayı açık eden bir teknik anlatım var. Bu içerik sektörde nadir ve sayfanın en değerli varlığı. Sorun içeriğin kendisinde değil, **paketlenmesinde**: metin okunamayacak kadar geniş satırlarda akıyor, bölümler birbirinden 200px boşlukla ayrılıyor, araç ekranı ile rehber metni aynı düzlemde yarışıyor ve sayfa 9.020px boyunca hiçbir gezinme yardımı sunmuyor.

En kritik dört bulgu:

| # | Bulgu | Etki |
|---|---|---|
| 1 | Satır uzunluğu 121–141 karakter (ideal 45–75), gövde metni 13,6–15px | Okunabilirlik |
| 2 | `og:image` yok ama `twitter:card = summary_large_image` | Sosyal paylaşımda boş kart |
| 3 | Aynı JSON-LD 4 kez basılıyor + React hydration hatası (#418) | Teknik hijyen |
| 4 | Örnek veri "20 eski URL" vaat ediyor, 16 yüklüyor, 4'ünü sessizce atıyor | Güven |

Puanlama (10 üzerinden):

| Alan | Puan | Not |
|---|---|---|
| İçerik derinliği & özgünlük | 9 | Sayfanın en güçlü tarafı |
| Teknik SEO altyapısı | 7 | Schema/hreflang/canonical doğru, dublikasyon ve og:image eksiği var |
| Bilgi hiyerarşisi | 4 | H1=H2, cümle-başlık, iç içe section padding'leri |
| Okunabilirlik | 3 | Satır uzunluğu ve tipografi ölçeği |
| UX / etkileşim | 5 | Araç çalışıyor ama durum geri bildirimi ve varsayılanlar kafa karıştırıcı |
| Görsel tasarım tutarlılığı | 4 | 17 farklı font-size, 7 metin rengi, native/custom kontrol karışımı |
| Erişilebilirlik | 7 | Kontrast temiz, etiketler tam; dokunma hedefleri ve marker sorunları var |
| Dönüşüm | 2 | Sayfada tek bir CTA yok |

---

# P0 — Yayına almadan önce düzeltilmesi gerekenler

### P0.1 · Satır uzunluğu okunabilirliği bitiriyor

**Kanıt (ölçülmüş):**

| Paragraf | Genişlik | Font | Satır başına karakter |
|---|---|---|---|
| Hero alt metni | 600px | 18px | ~64 ✅ |
| Rehber gövdesi | 953px | 15,04px | **~121** ❌ |
| Rehber gövdesi | 1006px | 15,04px | **~128** ❌ |
| Tablo/dipnot metni | 1006px | 13,6px | **~141** ❌ |

İdeal aralık 45–75 karakter. 121–141 karakterde göz satır sonundan satır başına dönerken sırayı kaybediyor; 30+ kelimelik 10 cümlenin (en uzunu 59 kelime) olduğu bir metinde bu ölümcül.

**Düzeltme:** Rehber bölümündeki tüm gövde metnine `max-width: 68ch` (≈ 640–700px), gövde punto 16–17px, `line-height: 1.65`. Tablolar ve kod blokları bu sınırın dışında kalabilir (`width: 100%` ile taşabilirler), düz metin kalamaz.

### P0.2 · İç içe `section` padding'leri sayfayı 2× uzatıyor

**Kanıt:** Ölçülen padding değerleri —

```
S6  (Nasıl çalışıyor kapsayıcı)   padding: 60px / 100px
 └ S7  (Benzerlik skoru)          padding: 100px / 100px
 └ S8  (Kontrol listesi)          padding: 100px / 100px
 └ S9  (Sunucu kurulumu)          padding: 100px / 100px
 └ S10 (Sık yapılan hatalar)      padding: 100px / 100px
 └ S11 (Verileriniz nereye)       padding: 100px / 100px
```

Her alt bölüm arasında **100 + 100 = 200px** ölü alan var; kapsayıcının kendi padding'i bunun üzerine biniyor. Ekran görüntülerinde bölüm başlıklarının önündeki devasa boşlukların sebebi bu. Toplam sayfa yüksekliği 9.020px.

**Düzeltme:** Dikey ritmi tek bir yerde yönet. Kapsayıcı `section` 96px alır, iç bölümler padding yerine `margin-block: 56px` alır. Beklenen kazanç: ~1.200–1.500px kısalma, aynı içerikle.

### P0.3 · `og:image` yok, `twitter:card` "summary_large_image"

**Kanıt:** `og:image` = **yok**. `twitter:card` = `summary_large_image`.

Sonuç: LinkedIn/X/Slack/WhatsApp paylaşımlarında büyük görsel alanı boş render oluyor — bu sayfa tam olarak LinkedIn'de paylaşılacak türden bir sayfa.

**Düzeltme:** 1200×630 OG görseli üret. İçeriği: sonuç tablosunun gerçek bir ekran görüntüsü (skor + "Neden" rozetleri görünecek şekilde) + "301 Yönlendirme Eşleştirme Aracı" başlığı. `og:image`, `og:image:width`, `og:image:height`, `og:image:alt` ve `twitter:image` ekle.

### P0.4 · Örnek veri vaadiyle sonucu tutmuyor

**Kanıt:** Buton yanındaki metin: *"20 eski ve 20 yeni URL ile aracı 5 saniyede görün."*
Tıklandıktan sonra çıkan durum satırı: **"16 eski URL · 20 yeni URL · 4 satır atlandı"**.

Şeffaflığı ana satış argümanı yapan bir araçta, ilk etkileşimde açıklanmayan bir eksilme var. Kullanıcı "neden 4 satır gitti?" diye soruyor ve cevabı sayfada 800px aşağıda, üstelik **farklı bir isimle** buluyor: *"Yönlendirme gerekmeyen URL'ler (4)"*.

**Düzeltme (iki maddesi de gerekli):**
1. Buton metnini gerçeğe eşitle: *"16 eski, 20 yeni URL ile aracı 5 saniyede görün."*
2. **Terminolojiyi tekilleştir.** "Atlandı" kelimesini tamamen kaldır — atlamak hata çağrıştırıyor, oysa bu bir başarı. Her iki yerde de: **"4 URL yönlendirme gerektirmiyor"**.

### P0.5 · Aynı JSON-LD 4 kez basılıyor

**Kanıt:**

```
script[type=ld+json] #0  parent=HEAD  3477 byte  (Person + WebSite)
script[type=ld+json] #1  parent=HEAD  3477 byte  (BİREBİR AYNI)
script[type=ld+json] #2  parent=BODY  5985 byte  (WebPage + WebApplication + Breadcrumb + FAQPage)
script[type=ld+json] #3  parent=BODY  5985 byte  (BİREBİR AYNI)
```

~19KB'ın ~9,5KB'ı gereksiz. Schema'nın içeriği iyi yazılmış (`isAccessibleForFree`, `browserRequirements`, `featureList`, `dateModified` hepsi var) — sorun sadece iki kez render edilmesi.

**Düzeltme:** Layout ve page seviyesinde iki kez enjekte ediliyor; birini kaldır. Tümünü tek bir `@graph` altında `<head>`'de birleştir.

### P0.6 · React hydration hatası

**Kanıt (konsol):** `Minified React error #418` — *"Hydration failed because the initial UI does not match what was rendered on the server."*

Sunucu HTML'i ile istemci render'ı uyuşmuyor. Muhtemel kaynak: `localStorage`'dan okunan ayarların (eşik, ağırlıklar, çıktı biçimi) ilk render'da kullanılması. Etkisi: React o ağacı atıp yeniden çiziyor → görünür layout kayması + INP/CLS riski.

**Düzeltme:** localStorage'dan gelen değerleri `useEffect` sonrası uygula; ilk render her zaman varsayılanlarla (50 / 0,5-0,25-0,15-0,1) yapılsın.

### P0.7 · Sayfada tek bir dönüşüm noktası yok

`<main>` içindeki link sayısı: **0**.

Kullanıcı 9.000px kaydırıyor, aracı kullanıyor, dosyasını indiriyor ve sayfadan ayrılıyor. Ne bir sonraki adım, ne bir hizmet bağlantısı, ne bir içerik bağlantısı var. Bu bir SEO danışmanının portföy sitesinde duran bir araç sayfası — buradaki asıl iş, kullanıcının işini yaptıktan sonra ne olacağı.

**Düzeltme:** Sonuç ekranının hemen altına, indirme davranışına bağlı bir blok:

> **Taşıma büyükse tek başınıza kalmayın.**
> 5.000+ URL'lik bir taşımada eşleştirme işin sadece bir parçası. Taşıma öncesi kontrol, yönlendirme kurulumu ve sonrası izleme için → **Teknik SEO danışmanlığı**

---

# P1 — Bilgi hiyerarşisi ve sayfa akışı

### P1.1 · Başlık ağacı bozuk

Mevcut hiyerarşi:

```
H1  301 Yönlendirme Eşleştirme Aracı
H2  301 Yönlendirme Eşleştirme Aracı          ← H1 ile birebir aynı
H3  1. Şablonu indirin ve doldurun
H3  2. Dosyayı yükleyin
H3  Eşleştirme sonuçları. Her satırda hedefi değiştirebilir, satırı dışarıda bırakabilirsiniz.   ← başlık değil, cümle
H3  Yönlendirme gerekmeyen URL'ler (4)
H2  Yönlendirme eşleştirmesi hakkında bilmeniz gerekenler
H3  ...
H2  Yönlendirme aracı hakkında sık sorulan sorular
H2  Sayfalar        ← footer
H2  İletişim        ← footer
```

Üç ayrı sorun:

1. **H1 = H2.** Araç bölümünün H2'si H1'i tekrarlıyor. Değiştir: `H2 → "Aracı kullanın"` veya görsel olarak gizli bir `H2 "Yönlendirme eşleştirme aracı"`.
2. **Cümle-başlık.** *"Eşleştirme sonuçları. Her satırda hedefi değiştirebilir, satırı dışarıda bırakabilirsiniz."* → Başlık `H3 "Eşleştirme sonuçları"` olsun, ikinci cümle başlığın altına açıklama paragrafı olarak insin.
3. **Footer H2'leri** içerik H2'leriyle aynı seviyede yarışıyor. Footer başlıkları `H2` değil, `<p class="footer-heading">` veya `H2` kalacaksa `aria-label`'lı bir `<nav>` içinde olmalı.

### P1.2 · 9.020px sayfada gezinme yardımı yok

12 bölümün `id`'si var ama sayfada **1 tane** iç bağlantı mevcut (o da skip link). Kullanıcı "nginx kuralı nasıl?" için 6.000px kaydırmak zorunda.

**Düzeltme:** "Nasıl çalışıyor" bölümünün başına yapışkan olmayan bir içindekiler bloğu:

```
Bu bölümde
· Benzerlik skoru nasıl hesaplanıyor
· Taşıma öncesi kontrol listesi
· Apache, nginx ve WordPress kurulumu
· Sık yapılan 8 hata
· Verileriniz nereye gidiyor
```

SEO tarafında ek kazanç: Google'ın bu tip anchor'ları sitelink olarak göstermesi. `scroll-padding-top: 90px` zaten doğru ayarlanmış, altyapı hazır.

### P1.3 · Sayfanın sırası kullanıcının işine ters

Mevcut: Tam ekran hero → gizlilik kutusu → **1. Şablon indir** → 2. Yükle → Ayarlar → Sonuç → 5.583px rehber → SSS.

İki problem:

**a) Araç ekranın altında.** 1054×685 görünümde ekranın tamamını sadece rozet + H1 + 3 satır alt metin kaplıyor; aracın hiçbir parçası görünmüyor. Bu bir araç sayfası, bir manifesto değil. Hero'yu yarıya indir (`padding-top: 140px → 72px`, H1 `52,7px → 40px`) ve dropzone'un üst kenarı ilk ekranda görünsün.

**b) İlk adım sürtünme.** Kullanıcıdan istenen ilk şey "şablon CSV indir". Oysa çoğu kullanıcı listesini zaten Screaming Frog/GSC'den almış durumda. Sıra şöyle olmalı:

```
1. Listenizi yapıştırın veya CSV yükleyin      ← varsayılan sekme "Yapıştır" olsun
   └ küçük ikincil bağlantı: "Şablon CSV indir"
2. (opsiyonel) Ayarlar
3. Eşleştir
```

"Yapıştır" sekmesi şu an ikinci sırada ve sekme değiştirildiğinde yüklenmiş örnek veri alanlara yansımıyor — iki sekme ayrı state tutuyor.

### P1.4 · Rehber metni araçla SSS arasına sıkışmış

5.583px'lik rehber, aracı kullanan kullanıcıyla SSS arasında duruyor. Geri dönen kullanıcı her seferinde bu duvarı geçiyor.

**Düzeltme:** Araç → SSS → Rehber sırası. SSS zaten kısa ve etkileşimli; kullanıcının aradığı cevap %80 ihtimalle orada. Rehber en altta, içindekiler bloğuyla kalsın. SEO açısından kayıp yok — içerik aynı sayfada.

---

# P2 — UX ve etkileşim

### P2.1 · Sonuç ekranı varsayılan olarak filtreli açılıyor

**Kanıt:** Eşleştirmeden sonra "İncelenecek" kartı `aria-pressed="true"` geliyor. Tablo 16 satırın **2'sini** gösteriyor. Bunu söyleyen tek işaret, tablonun üstündeki 12px gri **"2 / 16"** metni.

Tasarım niyeti doğru ("zamanını burada harcayacaksın") ama kullanıcı 16 satır beklerken 2 satır görüyor ve filtrenin açık olduğunu anlamıyor.

**Düzeltme:** Filtre aktifken tablonun üstünde açık bir şerit:
> **İncelenmesi gereken 2 satır gösteriliyor** (16 satırın tamamı) · [Tümünü göster ×]

Ayrıca stat kartları filtre butonu ise bunu göster: aktif kartta bir "×" veya alt çizgi, hover'da `cursor: pointer` + tooltip.

### P2.2 · Erişilebilir isimlerde boşluk yok

**Kanıt:** Butonların erişilebilir adları: `"16Toplam"`, `"12Yüksek güven"`, `"2İncelenecek"`, `"2Eşleşmeyen"`.

Ekran okuyucu "on altı Toplam" yerine bitişik okuyor. `aria-label="16 satır, tümü"` gibi açık etiket ver.

### P2.3 · "Sonuçlar henüz indirilmedi." uyarısı erken

Eşleştirme biter bitmez, kullanıcı sonuçları görmeye fırsat bulmadan uyarı rengiyle beliriyor. Bu bir uyarı değil, olağan bir durum — kullanıcı henüz hiçbir şey yapmadı.

**Düzeltme:** Bu mesajı yalnızca gerçekten risk varken göster: sonuçlar üretildikten 60 saniye sonra veya `beforeunload`/sekme gizlenme anında. Metni de sonuca çevir: *"Sonuçlarınızı indirmediniz — sayfayı kapatırsanız kaybolur."*

### P2.4 · Yapışkan dışa aktarma çubuğu her yerde duruyor

**Kanıt:** `position: sticky`, yükseklik **116px**. Sabit header 73px. Toplam 189px kalıcı arayüz.

Test sırasında bu çubuk, kullanıcı "Yapıştır" sekmesinde metin girerken bile alanın üstüne biniyordu. 667px'lik bir mobil ekranda kullanılabilir alanın **%28'i** gidiyor.

**Düzeltme:** Çubuğu yalnızca sonuç bölümü görünürdeyken göster (`IntersectionObserver`), sonuç bölümü ekrandan çıkınca gizle. Yüksekliği 116px'ten tek satıra indir: `12 satır · [CSV ▾] [İndir]`, eşleşmeyenler ikincil metin bağlantısı olsun.

### P2.5 · "Ayarlar" paneli native ve custom marker'ı birlikte gösteriyor

**Kanıt:** `details` elemanlarının `list-style-type` değerleri —

```
FAQ detayları (10 adet)   list-style-type: none        ✅ custom chevron
Araçlar menüsü            list-style-type: none        ✅
Ayarlar                   list-style-type: disclosure-open   ❌ native üçgen
```

Ekranda `▶ + Ayarlar` / `▼ – Ayarlar` görünüyor: native üçgen **ve** custom +/− işareti yan yana. İki ayrı açılır göstergesi.

**Düzeltme:** `summary::-webkit-details-marker { display: none }` + `summary { list-style: none }` ve FAQ'daki chevron bileşenini burada da kullan.

### P2.6 · Dosya alanı native input'u açıkta bırakıyor

Custom dropzone'un ("CSV dosyanızı buraya sürükleyin") tam ortasında tarayıcının çıplak `Dosya Seç | Dosya seçilmedi` kontrolü duruyor ve hemen üstünde **"Dosya seçin (CSV)"** etiketi var. Aynı işlev üç kez, ikisi çelişkili görsel dilde.

**Düzeltme:** `input[type=file]`'ı görsel olarak gizle (`sr-only`, `opacity:0` değil `clip-path`), tetikleyici olarak tek bir ikincil buton bırak: **"Dosya seçin"**. Dosya seçildikten sonra kutunun içeriği dosya adı + boyut + "Değiştir" bağlantısına dönsün.

### P2.7 · Kod bloklarında kopyalama butonu yok

**Kanıt:** İki `pre` bloğunun (`RedirectMatch` ve nginx `map`) yanında **0 buton** var. `overflow-x: auto` doğru ayarlanmış ama Apache satırının doğal genişliği **730px** — dar ekranda blok içinde yatay kaydırılacak ve kullanıcı elle seçmeye çalışacak.

Bu sayfanın vaadi "sunucu kuralını üretiyorum". Kuralı kopyalayamamak vaadi yarıda bırakıyor.

**Düzeltme:** Her `pre` için sağ üstte "Kopyala" butonu.

### P2.8 · "Geri alınacak işlem yok" bir buton etiketi değil

Devre dışı butonun üstünde durum metni yazıyor. Etiket sabit kalmalı: **"Geri al"** (disabled) + `title="Geri alınacak işlem yok"`.

### P2.9 · Mobil uyarısı masaüstünde gösteriliyor

> *"Dar ekranda tablo kendi içinde yana kaydırılır. Uzun listeleri gözden geçirmek masaüstünde daha rahat, ama tüm işlevler burada da çalışır."*

Bu cümle 1054px genişlikte de görünüyor. "Burada" neresi belirsiz. Yalnızca `max-width: 768px`'te göster ve kısalt: *"Tabloyu yana kaydırarak tüm sütunları görebilirsiniz."*

---

# P3 — Görsel tasarım ve tipografi

### P3.1 · Tipografi ölçeği yok — 17 farklı font-size

**Kanıt (metin taşıyan elemanların font-size dağılımı):**

```
52,7px (1)   42,16px (3)  24px (5)   18,56px (4)  18px (1)
17px (10)    16px (86)    15,04px (18)  15px (15)  14,4px (10)
14,08px (1)  14px (3)     13,6px (6)  13,44px (17)  13,12px (16)
12,48px (2)  12,16px (2)
```

`15,04` ile `15`, `14,4` / `14,08` / `14`, `13,6` / `13,44` / `13,12`, `12,48` / `12,16` — birbirinden ayırt edilemeyen ama sistemi bozan değerler. Bunlar em/rem zincirlerinin üst üste binmesinden geliyor (`0.94rem` × `0.94em` gibi).

**Düzeltme:** 7 basamaklı sabit ölçek ve `em` yerine `rem`:
`12 · 14 · 16 · 18 · 22 · 32 · 44`

### P3.2 · Metin renkleri de çoğalmış

```
rgb(10, 22, 40)    → 103 eleman   (ana metin)
rgb(61, 79, 101)   →  65 eleman   (ikincil)
rgb(65, 79, 98)    →   1 eleman   ← yukarıdakinden ayırt edilemez
rgb(74, 58, 8)     →  10 eleman   (altın vurgu)
rgb(101, 80, 20)   →   1 eleman   ← yukarıdakinden ayırt edilemez
```

İki renk tek kullanımlık ve komşularından farkı görünmüyor. 3 metin rengine indir: ana / ikincil / vurgu.

**Not:** Kontrast taraması **hiçbir ihlal bulmadı** — renk paleti erişilebilirlik açısından temiz, sorun yalnızca tutarlılık.

### P3.3 · Playfair Display rakamları old-style basıyor

**Kanıt:** H1 `font-family: "Playfair Display"`, `font-variant-numeric: normal`.

Playfair varsayılanda **old-style (metin) rakam** kullanır: "301" başlığındaki 3 ve 1 taban çizgisinin altına sarkıyor, "1. Şablonu indirin" ve "2. Dosyayı yükleyin" başlıklarındaki numaralar küçük harf yüksekliğinde kalıyor. Ürün adı bir rakamla başlıyorken bu, marka adını zayıflatıyor.

**Düzeltme:**
```css
h1, h2, h3 { font-variant-numeric: lining-nums; }
```

### P3.4 · Rehber bölümünde hizalama çelişkisi

Bölüm başlıkları (rozet + H2) ortalanmış, hemen altındaki H3'ler ve tüm gövde metni sola yaslı ve çok daha geniş bir kolonda. Ortalanmış başlık, geniş sola yaslı gövdenin üstünde asılı kalıyor.

**Düzeltme:** P0.1'deki `68ch` kolonu uygulandığında başlıkları da aynı kolona hizala; ortalama yalnızca hero ve SSS gibi tam genişlik bölümlerde kalsın.

### P3.5 · "Sık yapılan hatalar" listesi işaretsiz

8 madde `li` olarak işaretlenmiş ama görsel olarak hiçbir madde işareti yok; girintili paragraflar gibi akıyorlar. Her maddenin ilk cümlesi hata adı, kalanı açıklama — bu yapı görselleştirilmemiş.

**Düzeltme:** Hata adını `<strong>` yap ve satır başına al, açıklamayı altına ikincil renkte ver. Ya da her maddeye küçük bir "✕" işareti.

### P3.6 · Sayfada tek bir ürün görseli yok

`<main>` içinde 2 görsel var, ikisi de logo. Aracın ne ürettiğini gösteren hiçbir görsel yok — kullanıcı "Eşleştir"e basana kadar sonuç tablosunun neye benzediğini bilmiyor.

**Düzeltme:** Hero'nun sağına veya hemen altına sonuç tablosunun gerçek ekran görüntüsü (skor, "Neden" rozetleri, alternatif hedef seçici görünecek şekilde). Aynı görsel `og:image` olarak da kullanılır (P0.3).

---

# P4 — SEO detayları

### P4.1 · Title ile H1 farklı anahtar kelimeyi hedefliyor

```
title  : 301 Yönlendirme Aracı — URL Eşleştirme ve Yönlendirme Haritası | Kerem Gezergün   (76 karakter)
H1     : 301 Yönlendirme Eşleştirme Aracı
og:title: 301 Yönlendirme Aracı — URL Eşleştirme ve Yönlendirme Haritası
```

Title 76 karakter — SERP'te kesilecek. Ayrıca title "301 Yönlendirme Aracı", H1 "301 Yönlendirme **Eşleştirme** Aracı" diyor; hangisi birincil hedef belirsiz.

**Öneri:** `301 Yönlendirme Eşleştirme Aracı — URL Haritası Oluşturun | Kerem Gezergün` (66 karakter), H1 ile aynı ana ifadeyle başlasın.

### P4.2 · Meta description ile hero metni çelişiyor

```
description : "...araç her 404 veren URL için en uygun yeni adresi bulur..."
hero        : "...araç her eski URL için en uygun yeni URL'yi bulur..."
```

Tıklayan kullanıcı vaadin aynısını görmeli. İkisini tek cümleye sabitle.

### P4.3 · `meta keywords` hâlâ duruyor

7 anahtar kelimelik `keywords` etiketi var. Hiçbir arama motoru kullanmıyor, rakiplere hedef kelime listesi veriyor. Kaldır.

### P4.4 · Breadcrumb ve tarih schema'da var, sayfada yok

- `BreadcrumbList` schema'da tanımlı ama sayfada **görünür breadcrumb yok**.
- `dateModified` schema'da var ama sayfada **görünür güncelleme tarihi yok**.

Google, yapılandırılmış veriyle sayfadaki görünür içeriğin örtüşmesini bekliyor. Ayrıca Google'ın 301/soft 404/zincir davranışı hakkında iddialar kuran 1.750 kelimelik bir teknik metinde, görünür yazar + güncelleme tarihi doğrudan E-E-A-T sinyali.

**Düzeltme:** H1 üstüne breadcrumb (`Ana Sayfa › Araçlar › 301 Yönlendirme Aracı`), rehber bölümünün başına küçük bir künye: *"Sungur Kerem Gezergün · Son güncelleme: … "*.

### P4.5 · İçerikte hiç iç bağlantı yok

`<main>` içindeki link sayısı: **0**. 1.753 kelimelik teknik metin, sitedeki hiçbir sayfaya bağlanmıyor. Footer'da Crawlseer, Knotvo, Nirengi, SEO Rehberi duruyor ama içerik gövdesinden hiçbirine gidilmiyor.

**Düzeltme:** Doğal bağlam noktaları:
- "Taşımadan önce eski siteyi tam tarayın" → tarama aracı / SEO Rehberi'ndeki ilgili bölüm
- "Search Console'dan son 16 aylık..." → varsa GSC ile ilgili içerik
- "Zincir ve döngü uyarıları" → teknik SEO rehberi
- Sayfa sonunda "İlgili araçlar" bloğu

### P4.6 · Google davranışı iddiaları kaynaksız

Sayfa şunları iddia ediyor: Google zinciri *"beşinci adımdan sonra"* takip etmeyi bırakır; alakasız yönlendirme *"soft 404"* sayılır; 302 kanonik'i eski URL'de tutar. Bunlar doğru ama sayfada tek bir dış kaynak yok.

**Düzeltme:** İlgili cümlelere Google Search Central dokümanlarına 2–3 dış bağlantı. Teknik bir kitleye yazıyorsun; kaynak göstermek otoriteyi düşürmez, kurar.

### P4.7 · FAQ schema'nın rich result değeri düşük

10 soruluk `FAQPage` doğru işaretlenmiş, ama Google 2023'ten beri FAQ rich result'ı yalnızca devlet ve sağlık siteleri için gösteriyor. İşaretlemeyi kaldırma (AI Overviews/anlamsal çıkarım için hâlâ değerli) ama SERP'te FAQ görüneceği beklentisiyle plan yapma.

---

# P5 — Metin denetimi (madde madde düzeltme)

| # | Mevcut | Sorun | Öneri |
|---|---|---|---|
| 1 | "Eşleştirme sırasında ağ sekmesinde tek bir istek görmezsiniz." | "bile" olmadan cümle "tek bir istek görürsünüz"e yakın okunuyor | "…ağ sekmesinde **tek bir istek bile** göremezsiniz." |
| 2 | Aynı gizlilik mesajı hero kutusu + "Verileriniz nereye gidiyor" + SSS'te 3 kez | Aşırı tekrar; her tekrar bir öncekinin gücünü düşürüyor | Hero'da tek cümle bırak, detayı yalnızca "Verileriniz nereye gidiyor" bölümünde anlat, SSS maddesini oraya bağlantı yap |
| 3 | "Yalnızca ayarlarınız tarayıcınızda hatırlanır — verileriniz hatırlanmaz." (2 yerde birebir) | Kelime tekrarı ("hatırlanır/hatırlanmaz") ve cümle tekrarı | "Yalnızca tercihleriniz tarayıcınızda saklanır; URL listeniz saklanmaz." |
| 4 | "CSV kabul edilir." | Edilgen ve eksik | "Yalnızca CSV yükleyebilirsiniz." |
| 5 | "Dosya seçin (CSV)" + native "Dosya Seç" butonu | Aynı işlev iki etiket | Tek buton: "Dosya seçin" |
| 6 | "4 satır atlandı" ↔ "Yönlendirme gerekmeyen URL'ler (4)" | Aynı şeyin iki adı; "atlandı" hata çağrıştırıyor | Her ikisinde: "4 URL yönlendirme gerektirmiyor" |
| 7 | "Somut örnek." | Cümle parçası | "Somut bir örnek:" |
| 8 | "Üç kısayol bu hesabın üzerine biner." | "binmek" bu bağlamda yanlış çağrışım | "Bu hesabın üzerine üç kısayol eklenir." |
| 9 | "…hiçbir yerde \"metin içinde geçiyor mu\" kontrolü kullanmaz." | Devrik ve ağır | "Araç hiçbir aşamada 'içinde geçiyor mu' kontrolü yapmaz." |
| 10 | "Zamanınızı burada harcayın; işin tamamı bu 40 satırdır." | 40 sayısı örneğe özel; 5.000 URL'lik listede yanlış | "Zamanınızı burada harcayın; gerçek iş bu aralıktaki satırlarda." |
| 11 | "Piyasadaki yönlendirme araçlarının çoğu bu hesabı gizler" | Kanıtsız rakip iddiası | "Çoğu araç skoru nasıl hesapladığını açıklamaz." |
| 12 | Ayarlar: placeholder "Örnek: yenisite.com" + altında yardım metni "Örnek: yenisite.com" | Birebir tekrar | Yardım metnini işlevle değiştir: "Çıktıdaki hedeflerin başına bu alan adı eklenir." |
| 13 | Metinde ağırlıklar "%50 / %25 / %15 / %10", Ayarlar'da "0,5 / 0,25 / 0,15 / 0,1" | Aynı değer iki gösterimde | Ayarlar'ı da yüzdeye çevir; toplamın 100 olması gerektiğini canlı göster |
| 14 | "Skor ağırlıkları" grup etiketi, alt etiketlerden ince ve küçük | Hiyerarşi tersine dönmüş | Grup etiketi 14px/600, alan etiketleri 13px/500 |
| 15 | "Varsayılanlar çoğu liste için doğrudur; değiştirmeniz gerekmez." yalnızca "Yol yapısı" altında | 4 alanın tümü için ama tek alana aitmiş gibi duruyor | Grubun altına, dört alanı da kapsayacak konuma taşı |
| 16 | Rozet "NASIL ÇALIŞIYOR" + H2 "Yönlendirme eşleştirmesi hakkında bilmeniz gerekenler" | Rozet başlığı tekrarlıyor; H2'de anahtar kelime yok | H2: "301 yönlendirme eşleştirmesi nasıl çalışır?" |
| 17 | Rozet "SIK SORULANLAR" + H2 "…sık sorulan sorular" | "Sık sorulan" iki kez | Rozeti kaldır veya H2'yi "Yönlendirme aracı hakkında sorular" yap |
| 18 | 10 cümle 30+ kelime, en uzunu **59 kelime** | Yoğun teknik metinde nefes yok | 59 ve 50 kelimelik cümleleri ikiye böl; ortalama 13,2 kelime iyi, uçlar sorun |

---

# Erişilebilirlik

**İyi durumda:** Kontrast taramasında **hiç ihlal yok**. Tüm form kontrollerinin erişilebilir adı var. 3 canlı bölge (`aria-live`) tanımlı. Üç tablonun da `th` + `scope` işaretlemesi tam. Skip link mevcut. `scroll-padding-top: 90px` sabit header için doğru ayarlanmış.

**Düzeltilecekler:**

| Konu | Kanıt | Düzeltme |
|---|---|---|
| Dokunma hedefleri | Onay kutuları **20×20px** ve 22×22px | WCAG 2.2 AA (2.5.8) minimum 24×24px. Kutuyu 24px yap veya tıklanabilir alanı etiketle birlikte genişlet |
| Footer bağlantıları | 167×**22px** | Dikey padding ekleyerek satır yüksekliğini 32px'e çıkar |
| Erişilebilir isimler | "16Toplam", "2İncelenecek" | `aria-label` ile boşluklu, açıklayıcı isim ver |
| Tablo başlığı | 3 tablodan 2'sinde `caption` yok | Görsel olarak gizli `caption` ekle |
| `details` marker | Ayarlar panelinde native + custom marker | P2.5 |

---

# Nihai sayfa iskeleti önerisi

```
┌ Breadcrumb: Ana Sayfa › Araçlar › 301 Yönlendirme Aracı
│
├ HERO  (yarı yükseklik — dropzone'un üstü ilk ekranda görünür)
│   Rozet: ÜCRETSİZ · TARAYICINIZDA ÇALIŞIR
│   H1    301 Yönlendirme Eşleştirme Aracı
│   Alt   Tek cümle vaat (meta description ile aynı)
│   [Örnek veriyle dene]   · Dosyanız sunucuya yüklenmiyor
│   (sağda: sonuç tablosunun ekran görüntüsü)
│
├ ARAÇ
│   1  Listenizi yapıştırın veya CSV yükleyin   ← "Yapıştır" varsayılan sekme
│        └ ikincil bağlantı: Şablon CSV indir
│   2  Ayarlar (kapalı)
│   [Eşleştir]
│
├ SONUÇLAR   (yalnızca eşleştirmeden sonra)
│   H3 Eşleştirme sonuçları
│   açıklama: Her satırda hedefi değiştirebilir, satırı dışarıda bırakabilirsiniz.
│   [16 Tümü] [12 Yüksek güven] [2 İncelenecek] [2 Eşleşmeyen]
│   › Filtre şeridi: "İncelenmesi gereken 2 satır gösteriliyor · Tümünü göster"
│   Tablo
│   Yönlendirme gerektirmeyen URL'ler (4)
│   Dışa aktarma (yapışkan yalnızca bu bölümde)
│
├ CTA          Taşıma büyükse tek başınıza kalmayın → Danışmanlık
│
├ SSS          10 soru
│
├ REHBER       Künye: yazar · son güncelleme
│   İçindekiler (5 anchor)
│   · Benzerlik skoru nasıl hesaplanıyor
│   · Taşıma öncesi kontrol listesi
│   · Apache, nginx, WordPress kurulumu   ← kod bloklarında Kopyala butonu
│   · Sık yapılan 8 hata
│   · Verileriniz nereye gidiyor
│   (gövde 68ch, 16–17px, Google Search Central kaynakları)
│
└ İlgili araçlar  →  Crawlseer · Knotvo · Nirengi · SEO Rehberi
```

---

# Uygulama sırası

**Gün 1 — teknik hijyen (yarım gün)**
- [ ] Çift JSON-LD'yi tekilleştir (P0.5)
- [ ] Hydration hatasını gider (P0.6)
- [ ] `og:image` üret ve ekle (P0.3)
- [ ] `meta keywords`'ü kaldır, title'ı 66 karaktere indir (P4.1, P4.3)
- [ ] Örnek veri metnini gerçeğe eşitle, "atlandı" terimini değiştir (P0.4)

**Gün 2 — okunabilirlik ve ritim (1 gün)**
- [ ] Gövde metnine `max-width: 68ch`, punto 16–17px (P0.1)
- [ ] İç içe section padding'lerini tek yerden yönet (P0.2)
- [ ] Tipografi ölçeğini 7 basamağa indir, `font-variant-numeric: lining-nums` (P3.1, P3.3)
- [ ] Metin renklerini 3'e indir (P3.2)

**Gün 3 — hiyerarşi ve akış (1 gün)**
- [ ] H1/H2 tekrarını çöz, cümle-başlığı böl, footer H2'lerini düşür (P1.1)
- [ ] İçindekiler bloğu ekle (P1.2)
- [ ] Hero'yu kısalt, "Yapıştır"ı varsayılan yap, şablonu ikincile al (P1.3)
- [ ] Bölüm sırasını Araç → SSS → Rehber yap (P1.4)

**Gün 4 — etkileşim (1 gün)**
- [ ] Filtre durumunu görünür kıl (P2.1)
- [ ] Yapışkan çubuğu yalnızca sonuç bölümüne bağla ve tek satıra indir (P2.4)
- [ ] Ayarlar marker'ını düzelt, dosya input'unu sakla (P2.5, P2.6)
- [ ] Kod bloklarına Kopyala butonu (P2.7)
- [ ] "Sonuçlar henüz indirilmedi" tetikleyicisini değiştir (P2.3)

**Gün 5 — içerik ve dönüşüm (1 gün)**
- [ ] P5 tablosundaki 18 metin düzeltmesi
- [ ] CTA bloğu (P0.7)
- [ ] İç bağlantılar + Google Search Central kaynakları (P4.5, P4.6)
- [ ] Breadcrumb + yazar/tarih künyesi (P4.4)
- [ ] Ürün görseli (P3.6)

**Yayın sonrası doğrulama**
- [ ] Rich Results Test — tek WebApplication + tek FAQPage görünmeli
- [ ] Konsol temiz (hydration hatası yok)
- [ ] LinkedIn Post Inspector ile OG kartı
- [ ] 375px'te: yatay taşma yok, kod blokları ve tablolar kendi içinde kayıyor
- [ ] Klavyeyle uçtan uca: skip link → araç → ayarlar → sonuç tablosu → dışa aktarma
- [ ] Örnek veri akışı: buton metni ile sonuç sayıları birebir tutuyor

---

## Notlar

- Kontrast, form etiketleme, tablo semantiği ve canlı bölge altyapısı hazır ve doğru kurulmuş — erişilebilirlik tarafında temel sağlam, kalanlar ince ayar.
- Performans ölçümleri localhost'tan alındığı için üretim değerlerini yansıtmıyor; TTFB 17ms, load 406ms, toplam 124KB. Üretimde Core Web Vitals'ı hydration düzeltmesinden **sonra** ölç — mevcut hydration hatası INP ve CLS'i doğrudan etkiliyor.
- Mobil görünüm tarayıcı penceresi 430px'e küçültülemediği için doğrudan gözlemlenemedi; mobil bulgular hesaplanmış min-content genişlikleri, sabit/yapışkan eleman yükseklikleri ve dokunma hedefi ölçümleri üzerinden statik analizle çıkarıldı. Gerçek cihazda 375px doğrulaması yapılmalı.
