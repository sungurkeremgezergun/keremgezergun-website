import type { Metadata } from 'next';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';
import { alternateMetadata } from '@/lib/i18n';

const PAGE_URL = 'https://www.keremgezergun.com/nirengi-erisilebirlik';

export const metadata: Metadata = {
  title: 'Nirengi Erişilebilirlik Desteği',
  description:
    'Nirengi’nin VoiceOver etiketleri, klavye kullanımı, renk dışında durum işaretleri, kontrast desteği ve bilinen erişilebilirlik sınırlamaları.',
  alternates: alternateMetadata('/nirengi-erisilebirlik', '/en/nirengi-accessibility'),
  openGraph: {
    title: 'Nirengi Erişilebilirlik Desteği',
    description: 'Nirengi’nin macOS erişilebilirlik özellikleri, klavye iş akışları ve destek bilgileri.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Nirengi erişilebilirlik desteği',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Nirengi Erişilebilirlik Desteği',
    description: 'Nirengi’nin macOS erişilebilirlik özellikleri ve destek bilgileri.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Nirengi Erişilebilirlik Desteği',
  description: 'Nirengi macOS SEO log analiz aracı için erişilebilirlik desteği ayrıntıları.',
  url: PAGE_URL,
  inLanguage: ['tr', 'en'],
  about: {
    '@type': 'SoftwareApplication',
    name: 'Nirengi',
    operatingSystem: 'macOS 14.4 or later',
    applicationCategory: 'DeveloperApplication',
  },
  author: {
    '@type': 'Person',
    name: 'Sungur Kerem Gezergün',
    url: 'https://www.keremgezergun.com',
  },
  dateModified: '2026-07-25',
};

const workflows = [
  ['Sunucu loglarını seçme', 'Standart macOS dosya seçici veya sürükle-bırak', 'Dosya adı, boyut, seçili dosya sayısı ve bağlamsal kaldırma eylemi'],
  ['Analizi yapılandırma', 'Etiketli alanlar, anahtarlar, düğmeler ve açılır kontroller', 'Site, sitemap, kategori dosyası, DNS doğrulama, robots.txt ve limitler'],
  ['Analizi çalıştırma veya iptal etme', 'Başlat ve İptal düğmeleri; Başlat için klavye komutu', 'Aşama, geçen süre, satır, bayt, yüzde, uyarılar ve onay'],
  ['Sonuçları keşfetme', 'Kenar çubuğu, rapor araması, pano düğmeleri ve kısayollar', 'Rapor adları, sayılar, önem simgeleri, özetler, grafikler ve tablolar'],
  ['Bir raporu inceleme', 'Arama, sıralama, filtreler, seçilebilir tablo ve ayrıntı paneli', 'Sütun adları, hücre değerleri, seçili satırlar, filtreler ve satır ayrıntıları'],
  ['Bulguları dışa aktarma', 'Araç çubuğu menüsü veya klavye komutu', 'CSV/HTML seçimi, ilerleme, iptal, başarı ve hata durumları'],
];

const shortcuts = [
  ['Command N', 'Yeni analiz başlat', 'Analiz çalışmıyorken'],
  ['Command Return', 'Yapılandırılmış analizi başlat', 'Desteklenen bir log seçiliyken'],
  ['Command 1', 'Genel bakışı aç', 'Sonuçlar hazır olduğunda'],
  ['Command 2–9', 'Sabitlenmiş raporları aç', 'İlgili rapor hazır olduğunda'],
  ['Command F', 'Geçerli raporda ara', 'Bir rapor görüntülenirken'],
  ['Command E', 'Rapor verisini dışa aktar', 'Sonuçlar görüntülenirken'],
  ['Command ,', 'Ayarları aç', 'Her zaman'],
];

export default function NirengiAccessibilityPage() {
  return (
    <main id="main-content" className="nirengi-accessibility" role="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(pageSchema) }} />

      <header className="nirengi-a11y-hero">
        <div className="container nirengi-narrow">
          <p className="nirengi-eyebrow">macOS’ta erişilebilirlik</p>
          <h1>SEO log analizi, farklı çalışma biçimleri düşünülerek tasarlandı.</h1>
          <p className="nirengi-lead">
            Nirengi; standart SwiftUI kontrolleri, açıklayıcı etiketler, klavye komutları,
            metin ve simgeyle desteklenen durum işaretleri ve veri görselleştirmeleri için
            erişilebilir özetler kullanır.
          </p>
          <aside className="nirengi-a11y-notice" aria-labelledby="declaration-title">
            <h2 id="declaration-title">Güncel beyan durumu</h2>
            <p>
              Burada açıklanan iyileştirmeler Nirengi 1.0’a dahildir. VoiceOver ve Sesle
              Denetim için App Store erişilebilirlik beyanları, temel görevlerin tamamını
              kapsayan manuel test matrisi bittikten sonra yayımlanacaktır. Bu sayfa Apple
              tarafından verilmiş bir sertifika iddiası taşımaz.
            </p>
          </aside>
        </div>
      </header>

      <section className="nirengi-section" aria-labelledby="features-title">
        <div className="container">
          <p className="nirengi-eyebrow">Uygulanan destekler</p>
          <h2 id="features-title">Nirengi’de yerleşik erişilebilirlik özellikleri</h2>
          <p className="nirengi-intro">
            Destek; dosya seçme, analiz başlatma, ilerlemeyi anlama, raporlarda gezinme,
            verileri inceleme ve sonuçları dışa aktarma gibi gerçek iş akışlarına odaklanır.
          </p>
          <div className="nirengi-grid nirengi-a11y-grid">
            <article><span className="nirengi-a11y-status">Uygulandı</span><h3>Açıklayıcı kontrol etiketleri</h3><p>Dışa aktarma, yeni analiz, rapor ayrıntıları, filtreler ve dosya kaldırma gibi önemli kontroller anlamlı adlar sunar. Tekrarlanan kaldırma eylemleri ilgili dosyanın adını da bildirir.</p></article>
            <article><span className="nirengi-a11y-status">Uygulandı</span><h3>Erişilebilir ilerleme bilgisi</h3><p>Analiz aşaması, işlenen satır ve bayt, toplam bayt ve yüzde bilgisi sunulur. Analizin başlaması, tamamlanması veya başarısız olması yardımcı teknolojiye duyurulur.</p></article>
            <article><span className="nirengi-a11y-status">Uygulandı</span><h3>Grafiklerin metinsel karşılıkları</h3><p>Grafikler aralık, toplam istek, tepe zamanı ve değer gibi konuşulan özetler sağlar. Ana grafik kartlarının görünür rapor bağlantıları da bulunur.</p></article>
            <article><span className="nirengi-a11y-status">Uygulandı</span><h3>Yalnızca renge dayanmayan bilgi</h3><p>HTTP durum kodları metin olarak kalır. Bot doğrulama sonuçları ifade, SF Symbol ve rengi birlikte kullanır. Renk Olmadan Farklılaştır açıkken yoğunluk hücreleri sayısal etiket gösterir.</p></article>
            <article><span className="nirengi-a11y-status">Uygulandı</span><h3>Kontrast duyarlı görünüm</h3><p>Nirengi sistem görünümünü ve yerel semantik renkleri izler. macOS Kontrastı Artır seçeneği etkin olduğunda yoğunluk haritasının görünürlüğü yükselir.</p></article>
            <article><span className="nirengi-a11y-status">Uygulandı</span><h3>Klavye odaklı iş akışı</h3><p>Standart macOS kontrolleri klavye odağını ve etkinleştirmeyi destekler. Sürükle-bırak zorunlu değildir; dosyalar standart seçiciyle de eklenebilir.</p></article>
          </div>
        </div>
      </section>

      <section className="nirengi-section nirengi-alt" aria-labelledby="workflows-title">
        <div className="container">
          <p className="nirengi-eyebrow">Temel iş akışları</p>
          <h2 id="workflows-title">Erişilebilirlik değerlendirmesinin kapsamı</h2>
          <div className="nirengi-table-wrap" tabIndex={0} role="region" aria-label="Nirengi görevleri ve erişilebilir kullanım yolları">
            <table>
              <caption>Nirengi’de temel görevler ve erişilebilir kullanım yolları</caption>
              <thead><tr><th scope="col">Görev</th><th scope="col">Erişilebilir yol</th><th scope="col">Sunulan bilgi</th></tr></thead>
              <tbody>{workflows.map(([task, path, info]) => <tr key={task}><th scope="row">{task}</th><td>{path}</td><td>{info}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="nirengi-section" aria-labelledby="keyboard-title">
        <div className="container">
          <p className="nirengi-eyebrow">Klavye referansı</p>
          <h2 id="keyboard-title">Yerleşik klavye komutları</h2>
          <p className="nirengi-intro">Bu komutlar, macOS kontrollerinin standart Tab, Shift-Tab, ok tuşları, Space, Return ve Escape davranışlarını tamamlar.</p>
          <div className="nirengi-table-wrap" tabIndex={0} role="region" aria-label="Nirengi klavye kısayolları">
            <table>
              <caption>Nirengi klavye kısayolları</caption>
              <thead><tr><th scope="col">Komut</th><th scope="col">Eylem</th><th scope="col">Kullanılabilirlik</th></tr></thead>
              <tbody>{shortcuts.map(([command, action, availability]) => <tr key={command}><th scope="row"><kbd>{command}</kbd></th><td>{action}</td><td>{availability}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="nirengi-section nirengi-alt" aria-labelledby="limitations-title">
        <div className="container nirengi-narrow">
          <p className="nirengi-eyebrow">Şeffaf durum bilgisi</p>
          <h2 id="limitations-title">Bilinen sınırlamalar ve devam eden değerlendirme</h2>
          <div className="nirengi-a11y-limitations">
            <p>VoiceOver ve Sesle Denetim desteğinin, her temel görevin görsel veya işaretçi yardımı olmadan tamamlanmasıyla değerlendirilmesi gerekir. Nirengi etiket, değer, duyuru, rapor bağlantısı ve yerel kontroller sunsa da App Store beyanlarından önce bu uçtan uca manuel test tamamlanacaktır.</p>
            <p>Yoğun tablo ve grafikler yardımcı teknolojiyle daha fazla gezinme süresi gerektirebilir. Saatlik grafiğin üzerine gelme ayrıntıları tamamlayıcıdır; konuşulan özet ve ilişkili veri raporu da mevcuttur. Zoom, Hover Text, pencere boyutlandırma ve uzun yerelleştirilmiş içerik testleri sürdürülecektir.</p>
            <p>Nirengi video veya sesli medya içermediğinden altyazı ve sesli betimleme temel iş akışlarına uygulanmaz. Arayüz veya rapor kataloğu değiştiğinde erişilebilirlik desteği yeniden değerlendirilecektir.</p>
          </div>
        </div>
      </section>

      <section className="nirengi-section" aria-labelledby="feedback-title">
        <div className="container nirengi-narrow">
          <p className="nirengi-eyebrow">Geri bildirim</p>
          <h2 id="feedback-title">İş akışınızı engelleyen noktaları bildirin.</h2>
          <p className="nirengi-intro">macOS ve Nirengi sürümünüzü, kullandığınız yardımcı teknolojiyi, ilgili ekran veya raporu ve zorluk oluşturan adımları paylaşın. Gerçek üretim loglarını temizlemeden göndermeyin.</p>
          <div className="nirengi-actions">
            <a className="btn btn-primary" href="mailto:iletisim@keremgezergun.com?subject=Nirengi%20Eri%C5%9Filebilirlik">Erişilebilirlik geri bildirimi gönder</a>
            <a className="btn btn-outline" href="tel:+905526902782">+90 552 690 27 82</a>
          </div>
          <Link className="nirengi-back" href="/nirengi">← Nirengi ürün sayfasına dön</Link>
        </div>
      </section>
    </main>
  );
}
