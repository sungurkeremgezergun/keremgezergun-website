# Erişilebilirlik dokümantasyonu

keremgezergun.com için WCAG 2.2 denetim listeleri, bulgular ve uyum kararı.

## Belgeler

| # | Belge | İçerik |
|---|---|---|
| 01 | [WCAG 2.2 Seviye A](01-wcag-2.2-seviye-a.md) | 31 Seviye A ölçütü, siteye uyarlanmış mekanik kontrollerle |
| 02 | [WCAG 2.2 Seviye AA](02-wcag-2.2-seviye-aa.md) | 24 Seviye AA ölçütü + sık karıştırılan seviye düzeltmeleri + ölçülmüş kontrast tablosu |
| 03 | [WCAG 2.2 Seviye AAA](03-wcag-2.2-seviye-aaa.md) | 31 Seviye AAA ölçütü, fizibilite ayrımı ve uyum beyanı önerisi |
| 04 | [WCAG dışı pratikler](04-wcag-disi-pratikler.md) | Ölçütlerin kapsamadığı, gerçek kullanıcıların çarptığı 50+ madde |
| 05 | [Denetim bulguları](05-denetim-bulgulari.md) | 22 sayfada ölçülen bulgular, önem sırasına göre |

## Hedef uyum seviyesi

**WCAG 2.2 Seviye AA tam uyum**, artı pratik olan her yerde Seviye AAA.

AAA'dan hedeflenen ölçütler: 1.4.6, 1.4.9, 2.1.3, 2.3.2, 2.3.3, 2.4.8, 2.4.10, 2.4.12, 2.4.13, 2.5.5, 2.5.6, 3.1.4, 3.2.5.

**Karşılanmayacağı açıkça beyan edilen AAA ölçütleri:**

| Ölçüt | Gerekçe |
|---|---|
| 3.1.5 Okuma Düzeyi | Teknik SEO içeriği ortaokul okuma seviyesine indirilemez; indirilirse içeriğin tüm değerini oluşturan hassasiyet kaybolur |
| 3.1.3 Alışılmadık Kelimeler | Açık uçlu jargon kümesi, iki dilde, her içerik düzenlemesinde yeniden denetim gerektirir |
| 3.1.6 Telaffuz | Gerçekte uygulanabilir örnek yok; kanıtlamak fayda üretmeyen manuel iki dilli inceleme gerektirir |
| 1.3.6 Amacı Belirleme | Bağlı olduğu WAI-Adapt sözlüğü kararsız ve yardımcı teknoloji desteği yok |

Medya ve kimlik doğrulama olmadığı için boşta geçen ölçütler (1.2.6–1.2.9, 1.4.7, 2.2.3–2.2.6, 3.3.9) başarı olarak sayılmaz, **uygulanamaz** olarak not edilir.

**2026-09-05:** `/301-yonlendirme-araci` sitenin ilk formunu getirdi. Form kaynaklı ölçütler (1.3.5, 2.5.7, 3.3.1, 3.3.2, 3.3.3, 3.3.4, 3.3.7, 4.1.3) artık **uygulanır** ve 01/02 numaralı belgelerde tek tek yeniden değerlendirildi. 3.3.5 ve 3.3.6 AAA seviyesindedir; araçtaki her alan yanında biçim açıklaması taşıdığı için fiilen karşılanıyor ama beyan edilmiyor.

W3C'nin kendi uyarısı bu duruşun gerekçesidir:

> "Seviye AAA uyumunun tüm siteler için genel bir politika olarak zorunlu tutulması önerilmez, çünkü bazı içerikler için tüm Seviye AAA ölçütlerini karşılamak mümkün değildir."

## Regresyon nöbetçileri

Şu değişikliklerden biri yapılırsa ilgili ölçütler **yeniden denetlenmelidir**:

- **Video/ses/gömme eklenirse** → 1.2.1–1.2.9, 1.4.2, 1.4.7 (şu an boşta geçiyorlar)
- **Yeni bir form eklenirse** → 1.3.5, 3.3.1–3.3.4, 3.3.6, 3.3.7 ve CAPTCHA konursa 3.3.8/3.3.9 (ilk form 2026-09-05'te geldi; bu ölçütler artık kapsamda)
- **Karusel/kaydırıcı eklenirse** → 2.2.2, 2.5.1, 2.5.7
- **İstemci taraflı arama/filtre eklenirse** → 4.1.3 (`role="status"` gerekir; yönlendirme aracının dört durum mesajı bunu taşıyor)
- **Yeni bir sürükleme etkileşimi eklenirse** → 2.5.7 (tek işaretçili alternatif zorunlu)
- **`headers()`/`cookies()` bir layout'a eklenirse** → tüm site dinamik render'a düşer (erişilebilirlik değil ama aynı derecede sessiz bir gerileme)

## Statik denetimin sınırı

Otomatik araçlar WCAG ölçütlerinin yaklaşık **%30–40'ını** güvenilir şekilde yakalar. Kalan kısım manuel klavye turu, ekran okuyucu (VoiceOver + NVDA) ve render edilmiş tarayıcı ölçümü gerektirir — 05 numaralı belgenin son bölümünde listelenmiştir.
