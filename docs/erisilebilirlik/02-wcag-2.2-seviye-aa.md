# WCAG 2.2 — Seviye AA denetim listesi

Kaynak: [WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/), [Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/), [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/). Seviyeler yayımlanmış Tavsiye metninden okunmuştur, varsayılmamıştır.

## 0. Seviye düzeltmeleri — önce bunu oku

Yaygın olarak yanlış bilinen seviyeler. Taslak dönemi blog yazıları bunları sürekli karıştırıyor:

| Ölçüt | Ad | Sık yapılan varsayım | **WCAG 2.2'deki gerçek seviye** |
|---|---|---|---|
| 2.4.11 | Odak Gizlenmemiş (Asgari) | AA | **AA** ✅ |
| 2.4.12 | Odak Gizlenmemiş (Gelişmiş) | — | **AAA** |
| 2.4.13 | Odak Görünümü | AA sanılıyor | **AAA** — erken taslaklarda AA'ydı, Tavsiye öncesi indirildi |
| 2.5.5 | Hedef Boyutu (Gelişmiş) 44×44 | — | **AAA** |
| 2.5.7 | Sürükleme Hareketleri | AA | **AA** ✅ |
| 2.5.8 | Hedef Boyutu (Asgari) 24×24 | AA | **AA** ✅ |
| 3.2.6 | Tutarlı Yardım | AA sanılıyor | **A** |
| 3.3.7 | Gereksiz Giriş | AA sanılıyor | **A** |
| 3.3.8 | Erişilebilir Kimlik Doğrulama (Asgari) | AA | **AA** ✅ |
| 3.3.9 | Erişilebilir Kimlik Doğrulama (Gelişmiş) | — | **AAA** |
| 4.1.1 | Ayrıştırma | — | **Kaldırıldı** — test edilmez |

**Sayılar:** 31 Seviye A + **24 Seviye AA** + 31 Seviye AAA = 86. AA uyumu, 31 A ölçütünün **tamamı artı** 24 AA ölçütü demektir.

---

## 1. 24 Seviye AA ölçütü

Aşağıda `$OUT` = `.next/server/app`.

### 1.2.4 Altyazılar (Canlı) — uygulanmaz
Sitede medya yok. Kontrol: `<video|audio|iframe>` ve YouTube/Vimeo/Spotify gömme araması sıfır dönmeli. Podcast bağlantıları dış `<a href>` — gömme değil, doğrulandı.

### 1.2.5 Sesli Betimleme (Önceden Kaydedilmiş) — uygulanmaz
Video yok. `<video>` çıkarsa `<track kind="descriptions">` veya betimlenmiş sürüm zorunlu.

### 1.3.4 Yönlendirme (Orientation) — uygulanır
Ekran yönü kısıtlanmamalı. Kontrol: `orientation: portrait|landscape` media query'si içerik gizlemiyor; `screen.orientation.lock` yok; viewport meta'da `user-scalable=no` / `maximum-scale` yok.

### 1.3.5 Girdi Amacını Belirleme — uygulanmaz
Form yok. Form eklenirse kullanıcı bilgisi toplayan her alan `autocomplete` jetonu taşımalı.

### 1.4.3 Kontrast (Asgari) — uygulanır ⚠️ **en riskli**
**Eşikler:** normal metin **≥ 4.5:1**; büyük metin **≥ 3:1** (büyük = ≥24px veya ≥18.66px kalın).

Mevcut palet ölçümleri:

| Ön plan | Arka plan | Oran | Normal | Büyük |
|---|---|---|---|---|
| `#0A1628` | `#F8F6F0` | 16.78:1 | ✅ | ✅ |
| `#3D4F65` | `#F8F6F0` | 7.76:1 | ✅ | ✅ |
| `#3D4F65` | `#F0EDE5` | 7.17:1 | ✅ | ✅ |
| `#414F62` | `#F0EDE5` | 7.12:1 | ✅ | ✅ |
| `#655014` | `#F8F6F0` | 7.17:1 | ✅ | ✅ |
| **`#C9A84C`** | `#F8F6F0` | **2.11:1** | ❌ | ❌ |
| **`#C9A84C`** | `#F0EDE5` | **1.95:1** | ❌ | ❌ |
| `#C9A84C` | `#0A1628` | 7.93:1 | ✅ | ✅ |
| `#8F7326` | `#F8F6F0` | 4.18:1 | ❌ metin | ✅ odak halkası |

**Karar:** `--accent` (`#C9A84C`) yalnızca koyu zeminde metin olarak kullanılabilir. Kod tabanında iki metin kullanımı var (`.ongoing-status`, `.result-number`) ve **ikisi de koyu zeminde** — geçerli. `--focus-ring` (`#8F7326`) metin değil, odak halkası; 3:1 eşiğine tabi, geçiyor.

Koyu zeminde beyaz alfa: **α ≥ 0.46** (4.5:1), **α ≥ 0.34** (3:1).

### 1.4.4 Metin Yeniden Boyutlandırma — uygulanır
%200 zoom'da içerik/işlev kaybı olmamalı. Risk: `height: 72px` sabit header, %200'de büyüyen menü metnini kırpabilir. `user-scalable=no` yok ✓.

### 1.4.5 Metin Görselleri — kısmen
Logo muaf. Ürün ekran görüntülerinde (Knotvo overview/insight/waterfall/requests/reports) okunabilir arayüz metni var — bunlar *illüstrasyon*, metin taşıyıcısı değil; her birinin açıklayıcı `alt`'ı mevcut. Ekran görüntüsünün taşıdığı bilgi çevre metinde de anlatılıyorsa geçerli.

### 1.4.10 Yeniden Akış (Reflow) — uygulanır
**320 CSS px** genişlikte iki yönlü kaydırma olmamalı (= 1280px'te %400 zoom). **Veri tabloları istisna kapsamında** — ama tablo kendi `overflow-x: auto` sarmalayıcısında kaymalı, *sayfa* kaymamalı. Sitedeki tablolar `.nirengi-table-wrap` içinde ✓. Uzun URL'ler için `overflow-wrap: anywhere` gerekli.

### 1.4.11 Metin Olmayan Kontrast — uygulanır ⚠️
**Eşik 3:1.** Bileşeni tanımlamak için gereken sınırlar ve anlamı taşıyan grafikler kapsamda. Dekoratif olanlar muaf.

- `--accent` (`#C9A84C`) açık zeminde **2.11:1 / 1.95:1** → açık zeminde *bileşen sınırı* olarak kullanılamaz. Kod tabanındaki kullanımlar: `.image-decoration`, `.podcast-artwork` (dekoratif ✓), `.nirengi-a11y-notice` kenarlığı (bilgi kutusu — kenarlık tek tanımlayıcı değil, başlığı var ✓).
- `--focus-ring` `#8F7326`: `#F8F6F0` 4.18:1 ✓, `#F0EDE5` 3.86:1 ✓, `#0A1628` 4.01:1 ✓ — üç zeminde de geçiyor.

### 1.4.12 Metin Aralığı — uygulanır
Kullanıcı şunları uygularsa içerik kaybı olmamalı: satır yüksekliği **≥1.5×**, paragraf sonrası boşluk **≥2×**, harf aralığı **≥0.12em**, kelime aralığı **≥0.16em**. Risk: sabit yükseklikli header ve `overflow: hidden` konteynerler. Türkçe metin İngilizceden uzun — TR sayfalar test edilmeli.

### 1.4.13 Hover veya Odakta İçerik — uygulanır
Açılır menü tam bu kapsamda. Üç şart: **Kapatılabilir** (Esc — `Header.tsx` içinde var ✓), **Üzerine gelinebilir** (tetikleyici ile menü arasında boşluk olmamalı), **Kalıcı** (otomatik gizleyen `setTimeout` olmamalı ✓).

### 2.4.5 Birden Fazla Yol — uygulanır
Sayfayı bulmanın ≥2 yolu olmalı. Mevcut: ana menü + footer bağlantı listesi ✓. **XML sitemap sayılmaz** (tarayıcı için, kullanıcı için değil).

### 2.4.6 Başlıklar ve Etiketler — uygulanır
Başlıklar ve etiketler konuyu/amacı tanımlamalı. Tablo `<caption>`'ları ve `<summary>` metinleri de kapsamda. İnsan yargısı gerektirir.

### 2.4.7 Odak Görünür — uygulanır
Her klavyeyle çalıştırılabilir öğede görünür odak göstergesi. Global `*:focus-visible { outline: 3px solid var(--focus-ring); outline-offset: 2px }` mevcut ✓. **Not: 2.4.13 Odak Görünümü'nün 2px çevre/3:1 geometri kuralları AAA'dır, burada gerekli değil** — 2.4.7 yalnızca *görünür* olmasını ister.

### 2.4.11 Odak Gizlenmemiş (Asgari) — uygulanır ⭐ 2.2'de yeni ⚠️
Odak alan bileşen **tamamen** gizlenmemeli. **Bu sitedeki en riskli yeni ölçüt** — 72px sabit header yüzünden.

Mekanizma: sayfanın ortasındaki bir bağlantıya Tab'la ulaşıldığında tarayıcı onu görünüm alanının üstüne kaydırır — doğrudan sabit header'ın altına.

`scroll-margin-top: 90px` yalnızca `:target` ve belirli blok öğelere uygulanıyor; **Tab kaynaklı kaydırmayı kapsamıyor**. Doğru çözüm `html { scroll-padding-top }` — tüm `scrollIntoView` tetikleyicilerini (odak dahil) kapsar.

### 2.5.7 Sürükleme Hareketleri — uygulanmaz ⭐ 2.2'de yeni
Sürükleme yok. `draggable`, `dragstart`, `pointermove`, `react-dnd`, `swiper`, `embla` araması sıfır dönmeli. Yerel kaydırma çubukları kullanıcı aracısı davranışıdır, muaf.

### 2.5.8 Hedef Boyutu (Asgari) — uygulanır ⭐ 2.2'de yeni
**24 × 24 CSS px.** Beş istisna:
1. **Aralık** — küçük hedeflerin merkezleri arası ≥24px
2. **Eşdeğer** — aynı işlev sayfada ≥24px bir kontrolle de var
3. **Satır içi** — hedef cümle içinde veya satır yüksekliğiyle sınırlı
4. **Kullanıcı aracısı** — boyut UA tarafından belirleniyor
5. **Zorunlu** — sunum zorunlu

Roadmap kaynak listesindeki bağlantılar `.resource-item` ile `display: flex` + `padding` taşıyor — satır içi değil, **ölçülmeli**. Footer bağlantı yığını da riskli.

### 3.1.2 Parçaların Dili — uygulanır ⚠️ **iki dilli sitede yüksek risk**
Türkçe metin içindeki İngilizce pasajlar `<span lang="en">` ile işaretlenmeli (ve tersi). Muaf: özel adlar, teknik terimler, çevre metnin gündelik diline yerleşmiş kelimeler.

**En kritik nokta:** dil değiştirici bağlantısının kendi metni. `hreflang` *hedefin* dilini bildirir ve ekran okuyucunun sesini değiştirmez; sesi değiştiren `lang`'dır.

### 3.2.3 Tutarlı Gezinme — uygulanır
Tekrarlanan gezinme mekanizmaları her sayfada aynı göreli sırada. Paylaşılan `Header`/`Footer` bileşenleri bunu yapısal olarak sağlıyor ✓.

### 3.2.4 Tutarlı Tanımlama — uygulanır
Aynı işleve sahip bileşenler tutarlı tanımlanmalı. Aynı `href`'e giden bağlantılar aynı metni kullanmalı.

### 3.3.3 Hata Önerisi — uygulanmaz
Form yok.

### 3.3.4 Hata Önleme (Hukuki, Finansal, Veri) — uygulanmaz
İşlem, hesap veya kullanıcı verisi yok.

### 3.3.8 Erişilebilir Kimlik Doğrulama (Asgari) — uygulanmaz ⭐ 2.2'de yeni
Kimlik doğrulama yok. Not: form eklenip CAPTCHA konursa metin/bulmaca CAPTCHA'sı bu ölçütü ihlal eder (nesne tanıma CAPTCHA'sı muaf).

### 4.1.3 Durum Mesajları — kısmen
Odak almadan duyurulması gereken durum mesajı yok. `<details>` açılması ve menü durumu **4.1.2 kapsamındadır** (`aria-expanded`), 4.1.3 değil. İleride istemci taraflı filtre/arama eklenirse `role="status"` gerekir.

---

## 2. Statik olarak doğrulanamayanlar

**Render edilmiş tarayıcı gerektirir:** 1.4.3 (gradyan/görsel üzeri metin), 1.4.4 (%200 zoom), 1.4.10 (320×256 görünüm), 1.4.11 (hesaplanmış sınırlar), 1.4.12 (aralık enjeksiyonu), 2.4.11 (odak/header dikdörtgen kesişimi), 2.4.7 (Tab turu), 2.5.8 (render edilmiş kutu boyutları), 1.4.13 (etkileşim davranışı).

**İnsan yargısı gerektirir:** 2.4.6, 1.4.5, 3.2.4, 2.4.5, 3.1.2, 1.3.4.

**Ön koşulu doğrulanarak geçilenler:** 1.2.4, 1.2.5 (medya yok), 1.3.5, 3.3.3, 3.3.4 (form yok), 3.3.8 (kimlik doğrulama yok), 2.5.7 (sürükleme yok), 4.1.3 (durum mesajı yok). **Form, bülten kaydı, karusel, video gömme veya istemci taraflı arama eklendiği anda dokuzu da yeniden çalıştırılmalı.**
