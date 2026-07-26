# WCAG 2.2 — Seviye AAA denetim listesi ve fizibilite kararı

Kaynak: [WCAG 2.2 Quick Reference (AAA)](https://www.w3.org/WAI/WCAG22/quickref/?levels=aaa), [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/).

WCAG 2.2'de **31 Seviye AAA** ölçütü vardır. Quick Reference'ın genel görünümü 2.4.12, 2.4.13, 2.5.6 ve 3.3.9'u eksik listeliyor; bu dördü tek tek doğrulanmıştır. 2.5.5 2.2'de **"Hedef Boyutu (Gelişmiş)"** olarak yeniden adlandırılmış ve AA 2.5.8'i yansıtan istisnaları kazanmıştır.

## W3C'nin kendi uyarısı

> "Seviye AAA uyumunun tüm siteler için genel bir politika olarak zorunlu tutulması önerilmez, çünkü bazı içerikler için tüm Seviye AAA ölçütlerini karşılamak mümkün değildir."

Bu site için tam AAA **ulaşılabilir bir hedef değildir** ve engel mühendislik değil, içeriktir: 3.1.3 ve 3.1.5 doğrudan içeriğin amacıyla çelişir. Gerçekçi hedef **tam AA uyumu + adı konmuş bir AAA alt kümesi**; bu, WCAG'ın kısmi uyum modeli altında meşru ve savunulabilir bir beyandır.

---

## Karar: üç kova

### A. Şimdi ulaşılabilir — 17 ölçüt

| Ölçütler | Dayanak |
|---|---|
| 1.2.6, 1.2.7, 1.2.8, 1.2.9, 1.4.7 | Ses, video veya eşzamanlı medya yok. Boşta geçerli. **CI nöbetçisi eklenmeli** ki video eklenince beyan sessizce çürümesin. |
| 2.2.3, 2.2.4, 2.2.5, 2.2.6 | Zaman sınırı, oturum, kesinti, zaman aşımı yok. |
| 3.3.6, 3.3.9 | Form ve kimlik doğrulama yok. |
| 3.3.5 Yardım | Yardım edilecek girdi yok; mevcut destek sayfaları genel durumu karşılıyor. |
| 1.4.9 Metin Görselleri (İstisnasız) | Metin öncelikli tasarım. |
| 2.1.3 Klavye (İstisnasız) | Sürükleme, canvas, zamanlı tuş vuruşu yok. Yerel `<details>` ve standart bağlantılar yapısı gereği klavyeyle tam çalışır. Bu sitede AAA 2.1.3 ile AA 2.1.1 pratikte aynıdır. |
| 2.3.2 Üç Yanıp Sönme | Hızlı yanıp sönen içerik yok. |
| 2.5.6 Eşzamanlı Girdi Mekanizmaları | Girdi türüne göre dallanan kod yok. |
| 2.4.10 Bölüm Başlıkları | Teknik içerik doğal olarak başlık yoğun; sayfa başına tek `<h1>` doğrulandı. |

### B. Çabayla ulaşılabilir — 9 ölçüt (içerikten ödün vermeden)

| Ölçüt | Yapılacak iş | Büyüklük |
|---|---|---|
| **2.3.3** Etkileşimden Doğan Animasyon | `prefers-reduced-motion` bloğu mevcut; `html { scroll-behavior: auto !important }` açıkça eklenmeli (`*` seçicisi kaydırma konteyneri için bazı motorlarda `html`'i kapsamıyor). | önemsiz |
| **2.4.8 Konum** | Ana menüde `aria-current="page"` mevcut — ama **hatalı** (bkz. bulgular raporu). Düzeltilince ölçüt karşılanır. Görünür breadcrumb ek güvence olur. | önemsiz |
| **2.4.13 Odak Görünümü** | Geometri zaten geçiyor: `3px` outline + `2px` offset, gereken `4h + 4w` alanının çok üstünde. Kontrast bacağı da üç zeminde 3:1 üstü. | tamam |
| **1.4.6 Kontrast (Gelişmiş) 7:1** | Palet bunun için tasarlandı: `--text-primary` 16.78:1, `--text-secondary` 7.17–7.76:1, `--text-light` 7.12:1, `--accent-text` 7.17:1, footer beyaz@0.6 7.06:1. Kalan risk: fotoğraf üzeri hero metni (otomatik araçlar kör). | orta |
| **2.5.5 Hedef Boyutu (Gelişmiş) 44×44** | **Açık hata:** 44px kuralları `@media (max-width: 768px)` içine hapsedilmiş. Ölçütün görünüm alanı niteleyicisi yok. Blok media query'den çıkarılmalı; `min-width`'in etkili olması için `display` kontrol edilmeli. Roadmap bağlantıları **Satır İçi** istisnasına göre sınıflandırılmalı. | orta |
| **2.4.12 Odak Gizlenmemiş (Gelişmiş)** | **Açık boşluk:** `scroll-margin-top` yalnızca `:target` ve belirli bloklarda. `html { scroll-padding-top }` gerekli. AA 2.4.11 kısmi gizlenmeye izin verir, AAA hiç izin vermez. | orta |
| **3.2.5 İstek Üzerine Değişim** | `target="_blank"` bağlantılarında yeni sekme uyarısı **görünür** olmalı, yalnızca `aria-label`'da değil. Alternatif ve daha iyi çözüm: `target="_blank"`'i tamamen kaldırmak. | orta |
| **3.1.4 Kısaltmalar** | Şu an **sıfır `<abbr>`** var. Küme sonlu ve kapalı (~25 terim: SEO, HAR, LCP, INP, CLS, CrUX, NAP, GEO, E-E-A-T, TTFB, FCP, SERP, GBP, GSC, JSON-LD…). İlk kullanımda düz metinde açmak `title`'a güvenmekten sağlam. | orta |
| **1.4.8 Görsel Sunum** | Yaslama yok ✓, satır yüksekliği 1.6 ✓. Kalan: paragraf boşluğu ≥1.5× satır yüksekliği ve %200 zoom'da yatay kaydırma yokluğu. | orta |

### C. Pratik değil — 4 ölçüt

| Ölçüt | Neden |
|---|---|
| **3.1.5 Okuma Düzeyi** | Asıl engel. Tüm düzyazının ortaokul seviyesinde olmasını (yaklaşık FKGL ≤ 9 / Türkçe için Ateşman ≥ 50) ya da her sayfa için sadeleştirilmiş bir sürüm gerektirir. HAR şelale analizini, INP atfını ve hreflang küme doğrulamasını 9. sınıf seviyesine indirmek, içeriğin tüm değerini oluşturan hassasiyeti silmek demektir. Yedek yol olan "tamamlayıcı özet" iki dilde ~44 özet anlamına gelir ve gövde metniyle sürekli senkron tutulmalıdır; üstelik Türkçe okunabilirlik ölçüm araçları bunları güvenilir şekilde doğrulayacak olgunlukta değildir. **Bu site 3.1.5'e uymayacak. Açıkça beyan edilip geçilmeli.** |
| **3.1.3 Alışılmadık Kelimeler** | Her jargon teriminin ve kısıtlı anlamda kullanılan her ifadenin ("tarama bütçesi", "öksüz sayfa", "yamyamlık") sayfa başına ilk kullanımda tanımlanmasını ister — iki dilde. Terim kümesi açık uçlu ve "kısıtlı kullanım"ın ne olduğuna karar veren otomatik yöntem yok; her içerik düzenlemesi manuel iki dilli denetimi yeniden açar. Sözlük sayfası okuyucular ve AI alıntılanabilirliği için değerlidir; **oradan 3.1.3 uyumu iddia etmek dürüst değildir.** |
| **3.1.6 Telaffuz** | Gerçekte neredeyse boşta — teknik SEO terimleri bağlamda tek anlamlıdır. Ama bunu *kanıtlamak*, destekleyici araç olmadan iki dilde 22 sayfanın anadil konuşuru tarafından incelenmesini gerektirir ve kullanıcıya fayda üretmez. Doğru duruş: "bilinen uygulanabilir örnek yok", uyum beyanı değil. |
| **1.3.6 Amacı Belirleme** | WAI-Adapt / kişiselleştirme-semantiği sözlüğüne bağlı; bu sözlük hâlâ kararsız ve kullanıcı aracısı/yardımcı teknoloji desteği fiilen yok. Altındaki landmark ve ikon adlandırma hijyeni önemsiz maliyetli ve yapılmalı; ölçütün kendisi bugün kimseye fayda sağlayacak şekilde karşılanamaz. |

**Koşullu olarak pratik değil:** 1.2.6 İşaret Dili ve 1.2.7 Genişletilmiş Sesli Betimleme yalnızca medya olmadığı için boşta geçiyor. Nirengi veya Knotvo için bir ürün tanıtım videosu yayınlanırsa 1.2.6 anında pratik dışı olur (iki dilli bir hedef kitle için iki kez üretilecek işaret dili tercümanı, videonun kendisinden pahalıdır).

---

## Önerilen uyum beyanı

> **WCAG 2.2 Seviye AA tam uyum**, artı Seviye AAA'dan şu ölçütler: **1.4.6, 1.4.9, 2.1.3, 2.3.2, 2.3.3, 2.4.8, 2.4.10, 2.4.12, 2.4.13, 2.5.5, 2.5.6, 3.1.4, 3.2.5**.

Medya/form/kimlik doğrulama yokluğundan boşta geçen ölçütler (1.2.6–1.2.9, 1.4.7, 2.2.3–2.2.6, 3.3.5, 3.3.6, 3.3.9) *başarı* olarak değil, **uygulanamaz** olarak not edilir. **3.1.3, 3.1.5, 3.1.6 ve 1.3.6 karşılanmadı olarak, gerekçesiyle birlikte açıkça belgelenir.**

Bu, niteliksiz bir "AAA" iddiasından daha güçlü ve daha inandırıcıdır — bilgili bir denetçi niteliksiz iddiayı 3.1.5 üzerinden anında çürütür.
