# Denetim bulguları — 22 sayfa

**Yöntem:** derlenmiş HTML çıktısı (`.next/server/app`, 22 sayfa) üzerinde statik denetim + kaynak kodu incelemesi. Ölçülen bulgular `scratchpad/audit.mjs` ile üretildi; kod incelemesi bulguları ayrıca işaretlendi.

**Toplam:** 1.400 ölçülen bulgu (yüksek 1.216 · orta 30 · düşük 154) + 14 kod incelemesi bulgusu.

Sayı yanıltıcı: 1.216 yüksek bulgunun **1.180'i tek bir desenden** kaynaklanıyor (roadmap kaynak bağlantısı, iki dilde 590'ar kez tekrarlanıyor). Benzersiz kusur sayısı 21.

---

## Yüksek — A/AA uyumunu engelleyen

### B-01 · Addaki etiket ihlali — 1.189 örnek
**SC 2.5.3 Addaki Etiket (A)** · `seo-ogrenme-haritasi/page.tsx` + 6 sayfa

Görünür metni olan bir kontrolde `aria-label`, görünür metni **içermek** zorunda. Sesle kontrol kullanıcısı ekranda gördüğü kelimeyi söyleyerek tıklar.

**Ana desen (1.180 örnek):** roadmap kaynak bağlantıları.
```
görünür:    "Rehber  HTML Temelleri (MDN)  Mozilla"
aria-label: "HTML Temelleri (MDN), Mozilla (yeni sekmede açılır)"
```
Tür rozeti ("Rehber"/"Guide") ekranda görünüyor ama erişilebilir adda yok. Kullanıcı "Rehber HTML Temelleri'ne tıkla" derse eşleşme olmaz.

**Tekil örnekler (9):**

| Sayfa | Görünür | aria-label |
|---|---|---|
| `index` | Knotvo'yu Keşfet | Knotvo detay sayfasına git |
| `index` | WhatsApp'tan Yazın | WhatsApp'tan mesaj gönder (yeni sekmede açılır) |
| `en` | Explore Knotvo | Go to the Knotvo product page |
| `sektorel-projeler` | YouTube'da İzle | Sepetteki SEO Podcast'i YouTube'da izle… |
| `en/industry-projects` | Watch on YouTube | Watch the Sepetteki SEO podcast on YouTube… |
| `knotvo-gizlilik` | Google'ın Gizlilik Politikası | Google Gizlilik Politikası (yeni sekmede açılır) |
| `en/knotvo-privacy-policy` | Google's Privacy Policy | Google Privacy Policy (opens in a new tab) |

**Düzeltme:** `aria-label`'ı kaldır, ek bilgiyi bağlantının **içine** `sr-only` span olarak koy. Böylece erişilebilir ad = görünür metin + ek → 2.5.3 kendiliğinden sağlanır ve WCAG G201'in görünür uyarı beklentisi de karşılanır.

### B-02 · Atlama bağlantısı hedefi odaklanabilir değil — 22 sayfa
**SC 2.4.1 Blokları Atlama (A)** · `Document.tsx` + her `page.tsx`

`<main id="main-content">` üzerinde `tabindex="-1"` yok. `<main>` varsayılan olarak odaklanabilir değildir; atlama bağlantısına basıldığında Chrome ve Safari yalnızca **kaydırma konumunu** taşır, sıralı odağı taşımaz. Kullanıcının bir sonraki Tab'ı onu header menüsüne geri atar — atlama bağlantısının önlemek için var olduğu hatanın ta kendisi.

Her otomatik denetleyiciden geçer, çünkü bağlantı ve hedef *mevcuttur*.

### B-03 · `aria-current="page"` yanlış sayfada — 5 sayfa
**SC 4.1.2 Ad, Rol, Değer (A)** · `Header.tsx:98`

```js
return pathname.startsWith(href);
```

Önek eşleşmesi kullanıldığı için `/nirengi` bağlantısı `/nirengi-iletisim`, `/nirengi-gizlilik-politikasi` ve `/nirengi-erisilebirlik` sayfalarında da "geçerli sayfa" işaretleniyor. Aynısı `/knotvo` → `/knotvo-destek`, `/knotvo-gizlilik`.

Etkilenen: `nirengi-iletisim`, `nirengi-gizlilik-politikasi`, `nirengi-erisilebirlik`, `knotvo-destek`, `knotvo-gizlilik`.

Ekran okuyucu kullanıcısı gizlilik politikası sayfasındayken "Nirengi, geçerli sayfa" duyurusu alıyor — tek yönelim ipucu aktif olarak yanlış bilgi veriyor.

### B-04 · 44px dokunma hedefleri mobil media query'ye hapsedilmiş
**SC 2.5.5 (AAA) / 2.5.8 (AA)** · `globals.css:2117` · *kod incelemesi*

```css
@media (max-width: 768px) {
    .btn, a.nav-link, .social-link, .hamburger { min-height: 44px; min-width: 44px; }
}
```

Her iki ölçütün de **görünüm alanı niteleyicisi yoktur**; işaretçi girdisi olan her genişlikte geçerlidir. 768px üstünde hedefler denetimsiz.

Ek olarak: `min-width`, `display: inline` bir öğede etkisizdir — seçicilerin `display` değeri kontrol edilmeli.

### B-05 · Sabit header odak alan öğeleri gizliyor
**SC 2.4.11 (AA) / 2.4.12 (AAA)** · `globals.css:44-50` · *kod incelemesi*

`scroll-margin-top: 90px` yalnızca `:target, [id]:is(section, article, h1, h2, h3, main)` seçicisine uygulanıyor. Bu, **Tab kaynaklı kaydırmayı kapsamıyor**: sayfa ortasındaki bir bağlantıya Tab'la ulaşıldığında tarayıcı onu görünümün üstüne kaydırır — 72px sabit header'ın altına.

Doğru çözüm `html { scroll-padding-top }`: kaydırma **konteynerine** uygulanır ve odak dahil tüm `scrollIntoView` tetikleyicilerini kapsar.

### B-06 · Odak tuzağının kırılma noktası koruması yok
**SC 2.1.2 Klavye Tuzağı Yok (A)** · `Header.tsx:51-93` · *kod incelemesi*

Tuzak ve `body { overflow: hidden }` kilidi yalnızca `menuOpen` durumuna bağlı; media query koruması yok. Kullanıcı 700px'te menüyü açıp pencereyi büyütürse masaüstü düzeninde sayfa kaydırma kilitli ve odak yakalanmış kalır — sert tuzak.

Ayrıca odak yalnızca **Escape** yolunda geri veriliyor. Bağlantı tıklamasıyla kapanışta (`closeMenu`) odak `display:none` olan bir alt ağaçta kalır; tarayıcı odağı `<body>`'ye sıfırlar ve kullanıcı belgenin en başından Tab'lamaya başlar.

### B-07 · JavaScript olmadan mobilde gezinme yok
**WCAG dışı — dayanıklılık** · `Header.tsx` · *kod incelemesi*

Tüm gezinme bir `'use client'` bileşeni. JS kapalıyken veya **hidrasyon tamamlanmadan önceki saniyelerde** hamburger hiçbir şey yapmıyor ve ≤768px'te `.nav-menu { display: none }` olduğu için mobilde hiç gezinme kalmıyor. Footer menüsü tek çıkış yolu.

Bu durum yavaş/kararsız mobil ağlarda herkesi kısa süreliğine, bazı kullanıcıları kalıcı olarak etkiler. JS açık ve hidrasyon tamamken çalıştığı için **hiçbir otomatik denetim göremez**.

### B-08 · Yazı boyutları `px` — kullanıcı tercihini yok sayıyor
**WCAG dışı — az gören kullanıcı deneyimi** · `globals.css` · *kod incelemesi*

`body { font-size: 16px }` ve ~60 `px` yazı boyutu tanımı. Tarayıcı varsayılan yazı boyutunu 24px yapan kullanıcı bu öğelerde **hiçbir değişiklik görmez**.

WCAG hatası değildir (1.4.4 tarayıcı zoom'uyla karşılanır) ama az gören kullanıcıların en çok bildirdiği gerçek şikâyettir — çoğu zoom yerine yazı boyutu ayarını kullanır.

---

## Orta

### B-09 · Dil değiştiricide `lang` yok — 22 sayfa
**SC 3.1.2 Parçaların Dili (AA)** · `Header.tsx:193`

Bağlantıda `hrefLang` var (doğru) ama `lang` yok. `hreflang` *hedefin* dilini bildirir ve **ekran okuyucunun sesini değiştirmez**; sesi değiştiren `lang`'dır. `/en` sayfalarındayken "TR — Türkçe sürüme geç" dizesi İngilizce sesle okunuyor.

### B-10 · Tablolarda `<caption>` yok — 8 tablo, 6 sayfa
**SC 1.3.1 (A) / 2.4.6 (AA)** · nirengi, knotvo, nirengi-iletisim ve EN karşılıkları

Tablolar `role="region"` + `aria-label` taşıyan kaydırılabilir sarmalayıcı içinde. Adrian Roselli'nin kanonik deseni `aria-labelledby`'ın görünür bir `<caption>`'a işaret etmesidir — böylece gören ve yardımcı teknoloji kullanan kullanıcılar aynı adı alır. `nirengi-erisilebirlik` sayfasındaki iki tabloda `<caption>` **var** — desen zaten biliniyor, yayılmamış.

### B-11 · `target="_blank"` uyarısı görünür değil
**SC 3.2.5 (AAA)** · roadmap + tüm dış bağlantılar

Yeni sekme uyarısı yalnızca `aria-label` içinde. Gören klavye kullanıcıları, büyüteç kullanıcıları ve bilişsel engelli kullanıcılar uyarı almıyor; geri tuşu onlar için sessizce çalışmaz oluyor. B-01'in düzeltmesi bunu da çözer.

### B-12 · `prefers-contrast: high` eski takma ad
**WCAG dışı** · `globals.css:2003`

Standart değer `more`; `high` eski takma addır ve garanti değildir. İkisi birlikte yazılmalı.

### B-13 · `prefers-reduced-transparency` desteği yok
**WCAG dışı** · `globals.css`

Header `backdrop-filter: blur(10px)` ve `rgba(248,246,240,0.95)` kullanıyor. macOS ve Windows "saydamlığı azalt" ayarı sunuyor; site bunu yok sayıyor.

### B-14 · Media query'ler `px` cinsinden
**WCAG dışı** · `globals.css`

`px` kırılma noktalarıyla büyük varsayılan yazı boyutu kullanan kullanıcı, mobil düzene ihtiyaç duyduğu boyutta masaüstü düzeni alır.

### B-15 · Kısaltmalar hiç açılmıyor
**SC 3.1.4 (AAA)** · tüm içerik

Kod tabanında **sıfır `<abbr>`** var. İçerik SEO, HAR, LCP, INP, CLS, CrUX, NAP, GEO, E-E-A-T, TTFB, SERP, GSC gibi kısaltmalarla yoğun. Küme sonlu (~25 terim) ve düzenli ifadeyle saptanabilir.

### B-16 · Escape iki seviyeyi birden kapatıyor
**WCAG dışı — APG deseni** · `Header.tsx:36-48`

Hem mobil menü hem Araçlar alt menüsü açıkken Escape ikisini birden kapatıp odağı hamburger'a bırakıyor. "Escape bir adım geri" zihinsel modeli bozuluyor.

### B-17 · Açılır menü açıldığında odak içeri taşınmıyor
**WCAG dışı — APG disclosure deseni** · `Header.tsx:161-190`

Araçlar butonu doğru bir disclosure (`aria-expanded` + `aria-controls`, sahte `role="menu"` yok — iyi). Ama Enter'a basınca odak alt menüye taşınmıyor; ekran okuyucu kullanıcısı "genişletildi" duyar ve devamını tahmin etmek zorunda kalır.

---

## Düşük

### B-18 · Yerel landmark'larda gereksiz `role` — 88 örnek
`<main role="main">`, `<nav role="navigation">`, `<header role="banner">`, `<footer role="contentinfo">`. Zararsız ama HTML doğrulayıcıların landmark kontrolünü boşa çıkarır.

### B-19 · Landmark etiketi rolü tekrarlıyor — 66 örnek
`<nav aria-label="Ana menü">` → ekran okuyucu "Ana menü gezinme" der. `<header aria-label="Site başlığı">` → sayfada tek `<header>` varken etiket hiç gerekmez.

### B-20 · `<address>` italik varsayılanı
`font-style: normal` verilmeli — disleksik okurlar için italik zorlaştırıcıdır.

### B-21 · `<meta http-equiv="Content-Language">` HTML5'te geçersiz
`Document.tsx:51`. Yardımcı teknoloji etkisi yok, `<html lang>` yetkilidir; doğrulayıcı uyarısı üretir.

---

## Doğrulanan güçlü yanlar

Denetim şunları **temiz** buldu — bunlar korunmalı:

- Sayfa başına tam bir `<h1>`; başlık seviyesi atlaması yok (22/22)
- Yinelenen `id` yok; kırık `aria-labelledby`/`aria-controls`/`aria-describedby` referansı yok (22/22)
- `alt` özniteliği olmayan `<img>` yok; çöp `alt` değeri yok
- Pozitif `tabindex` yok
- `aria-hidden` içinde odaklanabilir öğe yok
- `<summary>` içinde başlık yok
- Sayfa başına tam bir `<main>`; atlama bağlantısı 22/22 mevcut
- `prefers-reduced-motion` bloğu `.fade-in { opacity: 1 }` içeriyor — klasik "içerik kalıcı görünmez" hatası önlenmiş
- `forced-colors: active` bloğu kartlara ve odak halkasına sistem renkleriyle kenarlık veriyor
- Akordeonlar yerel `<details>` — JavaScript olmadan çalışıyor
- Tüm `target="_blank"` bağlantılarında `rel="noopener noreferrer"` var
- Açılır menü doğru disclosure deseni kullanıyor (sahte `role="menu"` yok)
- Gizlilik/hukuk sayfaları akordeon değil düz bölüm kullanıyor
- Kontrast: `--text-primary` 16.78:1, `--text-secondary` 7.17–7.76:1, `--text-light` 7.12:1, `--accent-text` 7.17:1 — hepsi AAA (7:1) üstünde
- `--accent` (2.11:1) metin olarak yalnızca koyu zeminde kullanılıyor (7.93:1) — geçerli

---

## Statik denetimin kapsamadıkları

Aşağıdakiler yalnızca render edilmiş tarayıcıda veya gerçek yardımcı teknolojiyle doğrulanabilir. Bu denetim bunları **kapsamıyor**:

| Alan | Gereken test |
|---|---|
| 1.4.3 / 1.4.6 kontrast (fotoğraf üzeri metin) | Piksel örneklemeli görsel inceleme |
| 1.4.4 %200 zoom, 1.4.10 %400 reflow | 320×256 CSS px görünümde gerçek render |
| 1.4.12 metin aralığı | Bookmarklet CSS enjeksiyonu + taşma ölçümü |
| 2.4.11 / 2.4.12 odak gizlenmesi | Playwright: her odak durağının dikdörtgeni header'la kesişiyor mu |
| 2.5.8 / 2.5.5 hedef boyutu | Render edilmiş kutu ölçümü + komşu aralığı geometrisi |
| 1.4.13 hover/odak içeriği | Klavye ve işaretçi simülasyonu |
| 4.1.2 durum duyuruları | VoiceOver + NVDA turu, TR ve EN'de |
| 6.4 forced-colors | Emülasyonda 22 sayfa ekran görüntüsü farkı |
| 8.1 JS kapalı gezinme | `javaScriptEnabled: false` ile 375px'te test |
