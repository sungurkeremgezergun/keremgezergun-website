# WCAG dışı erişilebilirlik pratikleri

Bu listedeki her madde, yalnızca WCAG ölçütlerine bakan bir denetimin (axe, Lighthouse, WAVE, hatta manuel ölçüt-ölçüt geçiş) genellikle **geçti** diye raporladığı, ama gerçek kullanıcıların çarptığı şeylerdir.

Kaynaklar: [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/), [ARIA in HTML](https://www.w3.org/TR/html-aria/), [Scott O'Hara — details/summary](https://www.scottohara.me/blog/2018/09/03/details-and-summary.html), [Adrian Roselli — Responsive Tables](https://adrianroselli.com/2020/11/under-engineered-responsive-tables.html), [Manuel Matuzović — aria-label on generic elements](https://www.matuzo.at/blog/2026/aria-label-generic-elements), [GOV.UK Design System](https://design-system.service.gov.uk/styles/links/), [MDN forced-colors](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/forced-colors).

---

## 1. Ekran okuyucu davranışı (pratikte)

| # | Pratik | Neden önemli | Önem |
|---|---|---|---|
| 1.1 | `<summary>` içine **başlık koyma** | JAWS başlık içindeki `<summary>`'yi başlık listesine almaz; ekran okuyucu kullanıcıları önce başlıkla gezindiği için o bölümler görünmez olur. | yüksek |
| 1.2 | `<details>` içeriği Ctrl+F ile bulunamayabilir | Kapalı `<details>` bazı tarayıcılarda sayfa içi aramaya kapalıdır; kritik/hukuki içerik açık bırakılmalı. | orta |
| 1.3 | `aria-label`'ı **`div`/`span`/`p` üzerine koyma** | ARIA'nın "adlandırılamayan roller" listesi `generic`'i içerir. JAWS/NVDA etiketi tamamen yok sayar, VoiceOver "…, grup" der, Narrator "…, grup, içerik" der. Aynı "düzeltme" her kullanıcıya farklı okunur. | yüksek |
| 1.4 | `role="img"` bir `div`'e konursa **tüm alt öğeleri gizler** | İçerideki gerçek sayılar anlam taşıyorsa ekran okuyucu kullanıcıları onları kaybeder. `aria-label` görsel olarak sunulan her veri noktasını anmalı. | orta |
| 1.5 | Kaydırılabilir tablo sarmalayıcısı | `tabindex="0"` yalnızca konteyner **gerçekten taşıyorsa** eklenmeli; taşmayan bir konteyner ölü bir Tab durağıdır. `aria-labelledby` görünür bir `<caption>`'a işaret etmeli. | orta |
| 1.6 | `aria-current` **tam ve tek** olmalı | Sayfa başına tam bir `aria-current="page"`, `href` tam eşleşmeyle. Prefix eşleşmesi (`startsWith`) yanlış sayfada "geçerli sayfa" duyurur — ekran okuyucu kullanıcısının tek yönelim ipucunu bozar. | yüksek |
| 1.7 | Landmark etiketinde **rolü tekrarlama** | Ekran okuyucu rolü kendisi ekler: `aria-label="Ana menü"` + `<nav>` → "Ana menü gezinme". Tek `<header>`/`<footer>` varsa etiket hiç gerekmez. | düşük |
| 1.8 | Yerel landmark'ta **gereksiz `role`** | `<main role="main">` zararsız ama HTML doğrulayıcıların landmark kontrolünü boşa çıkarır ve semantiğe güvenilmediğini gösterir. | düşük |
| 1.9 | `<address>` yalnızca yazar/makale iletişim bilgisi için | Rastgele posta adresleri için kullanılmamalı; adlandırmayı desteklemeyen bir role eşlenir, `aria-label` düşer. Varsayılan italik stil disleksik okurlar için zorlaştırıcıdır — `font-style: normal` verilmeli. | düşük |
| 1.10 | Dekoratif glif → `aria-hidden="true"` | Gizlenmemiş dekoratif ok/chevron kelime kelime okunur ("modifier letter down arrowhead"). | orta |

## 2. Klavye deneyimi ("odaklanabilir" olmanın ötesi)

| # | Pratik | Neden önemli | Önem |
|---|---|---|---|
| 2.1 | Atlama bağlantısı hedefi **`tabindex="-1"`** almalı | `<main>` varsayılan olarak odaklanabilir değildir. Onsuz Chrome/Safari yalnızca kaydırma konumunu taşır, sıralı odağı değil — kullanıcının bir sonraki Tab'ı onu header'a geri atar. Atlama bağlantısının önlemek için var olduğu hatanın ta kendisi, ve her otomatik denetleyiciden geçer. | yüksek |
| 2.2 | Odaklanan atlama bağlantısı header'ın **üstünde** render olmalı | `z-index` header'dan yüksek olmalı; arkasında kalan bağlantı işlevsel olarak görünmezdir. | orta |
| 2.3 | `scroll-padding-top`, `scroll-margin-top`'tan üstündür | `scroll-padding` kaydırma konteynerine uygulanır ve **odak kaynaklı kaydırma dahil** tüm `scrollIntoView` tetikleyicilerini kapsar. `scroll-margin` yalnızca hedef öğeye uygulanır. | yüksek |
| 2.4 | Odak **her kapanış yolunda** geri verilmeli | Yalnızca Escape'te değil: dışarı tıklama, bağlantı etkinleştirme, rota değişimi, kırılma noktası aşımı. `display:none` olan bir alt ağaçta kalan odak tarayıcı tarafından `<body>`'ye sıfırlanır ve kullanıcı belgenin en başından Tab'lamaya başlar. | yüksek |
| 2.5 | Tuzağa gerek yokken **tuzak kurma** | Odak tuzağı ve `body { overflow: hidden }` kilidi mobil kırılma noktasına koşullanmalı. Masaüstünde `menuOpen` true kalırsa sayfa kaydırma kilitli ve odak yakalanmış olur — sert tuzak. | yüksek |
| 2.6 | Gerçek bir modal Tab tuzağından fazlasını ister | Tab tuzağı yalnızca Tab'ı durdurur. Ekran okuyucu kullanıcıları sanal imleçle (ok tuşları, başlık gezintisi) tuzağın yanından geçip arkadaki sayfayı okur. `role="dialog" aria-modal="true"` veya geri kalan belgeye `inert` gerekir. | yüksek |
| 2.7 | Escape **kademeli** olmalı | Alt menü açıkken Escape önce alt menüyü kapatmalı, ikinci Escape tüm menüyü. İkisini birden kapatmak "Escape bir adım geri" zihinsel modelini bozar. | orta |
| 2.8 | Açılır menü = **disclosure**, `menu` değil | Bağlantılardan oluşan gezinme açılırı için `role="menu"`/`menuitem` **kullanılmamalı** — mevcut uygulama doğru. Ama klavyeyle açıldığında odak ilk alt bağlantıya taşınmalı. | orta |
| 2.9 | `aria-controls` var olan ve gerçekten değişen bir öğeyi göstermeli | Masaüstünde hamburger `display:none` iken `#nav-menu` kalıcı görünürse ilişki yalan söyler. | düşük |
| 2.10 | DOM sırası yeterliyken **roving tabindex kullanma** | Bağlantı listesinde roving tabindex onları Tab dizisinden çıkarır ve "tüm bağlantıları listele" özelliğini bozar. | düşük |
| 2.11 | Kart ızgaralarında **kart başına tek Tab durağı** | Kart ve içindeki bağlantı ikisi de odaklanabilirse klavye kullanıcısı kart başına iki kez Tab'lar, ekran okuyucu içeriği iki kez duyar. | orta |
| 2.12 | Odak göstergesi kartın `overflow: hidden`'ı tarafından kırpılmamalı | Kırpılmış outline hiçbir otomatik aracın yakalayamadığı görünür bir hatadır. | orta |

## 3. Bağlantı ve gezinme kalitesi

| # | Pratik | Neden önemli | Önem |
|---|---|---|---|
| 3.1 | Yeni sekme uyarısı **görünür metinde** olmalı | Yalnızca `aria-label`'da olursa gören klavye kullanıcıları, büyüteç kullanıcıları ve bilişsel engelli kullanıcılar uyarı almaz; geri tuşu onlar için sessizce çalışmaz olur. | orta |
| 3.2 | 600 bağlantı için `target="_blank"`'i yeniden düşün | GOV.UK'in açık duruşu: yeni sekmede açmak yönelim bozar. Tek kabul edilen gerekçe kaydedilmemiş girdiyi korumaktır — burada form yok. | orta |
| 3.3 | `target="_blank"` → `rel="noopener"` | Ters tabnabbing; URL çubuğunu görsel olarak doğrulayamayan kullanıcılar için orantısız tehlikeli. **Mevcut kod bunu zaten yapıyor.** | düşük |
| 3.4 | Aynı erişilebilir ad → **farklı hedef olmamalı** | Ekran okuyucu kullanıcıları bağlantı listesi çıkarır (NVDA `Ins+F7`) ve altı özdeş "Detay" görür. Sesle kontrol kullanıcıları numara seçicisiyle karşılaşır. Otomatik denetimlerden geçen sitelerdeki **en yaygın gerçek bağlantı kusuru**. | yüksek |
| 3.5 | Bağlantı metni bağlamdan bağımsız anlamlı olmalı | Sanal imleçle bağlantı bağlantı gezen kullanıcı çevre cümleyi hiç duymaz. | orta |
| 3.6 | Dış bağlantı göstergesi `forced-colors`'ta hayatta kalmalı | `background-image` ikonlar zorlanmış renk modunda silinir; `currentColor` kullanan satır içi SVG kalır. | orta |
| 3.8 | `tel:`/`mailto:` ne yaptığını söylemeli | Çıplak numara rakam rakam okunur ve aradığı belli olmaz. | düşük |

## 4. Dil ve uluslararasılaşma

| # | Pratik | Neden önemli | Önem |
|---|---|---|---|
| 4.1 | Türkçe metin içindeki İngilizce terimler `<span lang="en">` | Türkçe TTS sesi "Core Web Vitals"ı okunamaz biçimde telaffuz eder. SC 3.1.2 (AA) ve hiçbir araç algılayamadığı için rutin olarak atlanır. | orta |
| 4.2 | Dil değiştirici: `hreflang` + **`lang`** + kendi dilinde ad | `hreflang` hedefin dilini bildirir, **sesi değiştirmez**; sesi değiştiren `lang`'dır. Bayrak veya çıplak iki harfli kod yetersizdir. | orta |
| 4.3 | Çevrilmiş `aria-label`'lar eksiksiz olmalı | Çevrilmemiş bir etiket hiç olmamasından kötüdür — yanlış ses sorununu sessizce geri getirir. | orta |
| 4.4 | Türkçe noktalı/noktasız i ve `text-transform: uppercase` | `lang="tr"` ile tarayıcı `i`→`İ` uygular, `lang="en"` ile `i`→`I`. Ayrıca bazı ekran okuyucular tümü büyük metni harf harf kısaltma gibi okur. Büyük harf yalnızca stil olmalı; DOM metni doğru cümle düzeninde kalmalı. | düşük |
| 4.5 | Büyük harf + geniş `letter-spacing` | NVDA/JAWS'ın kelimeleri harflemesine yol açan klasik desen; disleksi için de bilinen okunabilirlik sorunu. | düşük |
| 4.6 | `<html lang>` **render edilen dille** eşleşmeli — 404 dahil | Ortak kabuktan geçmeyen statik HTML dosyaları bu garantiyi almaz. | orta |

## 5. Bilişsel erişilebilirlik

| # | Pratik | Önem |
|---|---|---|
| 5.1 | Düz dil hedefi ve okunabilirlik bütçesi. Türkçe için Ateşman indeksi (hedef ≥50); İngilizce Flesch formülleri Türkçede geçersizdir çünkü eklemeli yapı hece sayısını şişirir. | orta |
| 5.2 | Kısaltmalar ilk kullanımda düz metinde açılmalı. `<abbr title>` dokunmatikte erişilemez ve NVDA/JAWS varsayılan ayarla `title`'ı duyurmaz. | orta |
| 5.3 | Uzun içerikte ~150–200 kelimede bir gerçek başlık. | orta |
| 5.4 | Akordeonlarda ilk öğe açık gelmeli; hukuki içerik hiç katlanmamalı. **Mevcut gizlilik sayfaları düz bölümler kullanıyor — doğru.** | düşük |
| 5.5 | Kullanıcı eylemi olmadan hiçbir şey hareket etmemeli. | orta |
| 5.7 | ~3000 kelimeyi aşan sayfalarda sayfa içi içindekiler ve "başa dön". | düşük |

## 6. Hareket, kişiselleştirme ve işletim sistemi ayarları

| # | Pratik | Neden önemli | Önem |
|---|---|---|---|
| 6.1 | `prefers-reduced-motion` hareketi öldürmeli, **işlevi değil** | Klasik hata: içeriği görünür yapan animasyon kapatılınca içerik kalıcı olarak görünmez kalır. **Mevcut blok `.fade-in { opacity: 1 }` içeriyor — bu hata zaten önlenmiş.** | yüksek |
| 6.2 | `scroll-behavior: smooth` azaltılmış hareketle uyumlu olmalı | Yumuşak kaydırma belgelenmiş bir vestibüler tetikleyicidir. `*` seçicisi bazı motorlarda `html`'i kapsamaz — açık kural gerekir. | orta |
| 6.3 | `prefers-contrast: more` — `high` eski takma addır | `more` standart değerdir; `high` garanti değildir. | orta |
| 6.4 | `forced-colors: active` — silinenlerin yerini doldur | Zorlanmış renk modunda `box-shadow` ve `background-image` `none`'a zorlanır. Yalnızca gölge/gradyanla çizilmiş öğeler tamamen kaybolur. | yüksek |
| 6.5 | `prefers-reduced-transparency` | Yarı saydam header ve `backdrop-filter: blur()` az gören kullanıcıları zorlar; macOS ve Windows bu ayarı sunar. | orta |
| 6.6 | Kullanıcının varsayılan yazı boyutuna saygı: `rem`, `px` değil | Tarayıcı varsayılanını 24px yapan kullanıcı `px` tanımlı öğelerde **hiçbir değişiklik görmez**. WCAG hatası değildir (1.4.4 zoom ile karşılanır) ama az gören kullanıcıların en çok bildirdiği gerçek şikâyettir — çoğu zoom yerine yazı boyutu ayarını kullanır. | yüksek |
| 6.7 | Media query'ler `em` cinsinden | `px` kırılma noktalarıyla büyük yazı boyutu kullanan kullanıcı, mobil düzene ihtiyaç duyduğu boyutta masaüstü düzeni alır. | orta |
| 6.8 | 1280×1024'te %400 zoom (= 320×256 CSS px) | Sabit 72px header %400 zoom'da 256 CSS px'lik görünüm yüksekliğinin büyük kısmını yer. | yüksek |

## 7. Yardımcı teknolojiye görünen üstveri

| # | Pratik | Önem |
|---|---|---|
| 7.1 | **Addaki etiket tuzağı**: `aria-label` görünür metnin **tamamını** içermeli. Adı değiştirmek yerine görünür metne `sr-only` span eklemek tercih edilmeli. | yüksek |
| 7.2 | Görünür metni zaten iyi olan bağlantıya `aria-label` ekleme — ikisinin ayrışması için fırsat yaratır. | orta |
| 7.3 | İkon butonunun adı **eylemi** tanımlamalı ve `aria-expanded` varken **sabit kalmalı** (aksi halde "Menüyü kapat, genişletilmiş" duyurulur). | düşük |
| 7.4 | `aria-hidden` asla odaklanabilir içerik sarmamalı — adı olmayan hayalet Tab durakları üretir. | yüksek |
| 7.5 | Dekoratif → `alt=""`; bilgilendirici → *bilgiyi* anlat, resmi değil. Otomatik araçlar yalnızca `alt` **varlığını** kontrol eder; `alt="hero image"` de geçer ve hiçbir şey anlatmaz. | yüksek |
| 7.7 | `title` erişilebilir ad stratejisi değildir — dokunmatikte görünmez, klavyeyle erişilemez, tutarsız duyurulur. | orta |
| 7.8 | TR/EN çiftlerinde erişilebilir adlar eşdeğer olmalı; EN sayfada Türkçe ad kalmamalı. | orta |

## 8. Aşamalı geliştirme ve dayanıklılık

| # | Pratik | Neden önemli | Önem |
|---|---|---|---|
| 8.1 | **JavaScript kapalı/başarısızken site kullanılabilir olmalı** | Tüm gezinme bir `'use client'` bileşeni. JS kapalıyken (veya hidrasyon başarısızken — yavaş mobil ağlarda gerçek ve sık bir durum) hamburger hiçbir şey yapmaz ve ≤768px'te `.nav-menu { display: none }` olduğu için **mobilde hiç gezinme kalmaz**. Footer menüsü tek çıkış yolu. Her otomatik denetim JS açık ve hidrasyon tamamken çalıştığı için bunu göremez. | yüksek |
| 8.2 | `<details>` akordeonlar JS'siz çalışıyor — **bunu koru** | React kontrollü `open` prop'una "yükseltmek" bu dayanıklılığı bozar. | düşük |
| 8.3 | İçerik CSS'siz doğrusal okunabilmeli | `order`/`row-reverse` görsel ile DOM sırasını sessizce ayırır ve klavye odak sırasını da bozar. | orta |
| 8.4 | CSS `content:` içinde anlamlı metin olmamalı — çevrilemez ve tutarsız duyurulur. | orta |
| 8.5 | Web fontları zarifçe başarısız olmalı; yedek yığında Türkçe glif kapsaması (`ğ ı İ ş Ş`) doğrulanmalı. | düşük |
| 8.7 | Ortak kabuktan geçmeyen kök dizindeki statik HTML dosyaları hiçbir testin kapsamadığı bir gerilemedir. | orta |
