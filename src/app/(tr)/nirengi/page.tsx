import type { Metadata } from 'next';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';
import { alternateMetadata } from '@/lib/i18n';

const PAGE_URL = 'https://www.keremgezergun.com/nirengi';

export const metadata: Metadata = {
  title: 'Nirengi — macOS için SEO Log Analiz Aracı',
  description: 'Sunucu loglarını cihazınızda analiz edin; Googlebot ve AI tarayıcılarını karşılaştırın, tarama israfını, teknik hataları ve indeks kapsamı açıklarını bulun.',
  alternates: alternateMetadata('/nirengi', '/en/nirengi-log-analyzer'),
  openGraph: {
    title: 'Nirengi — SEO Log Analiz Aracı',
    description: 'macOS için gizlilik odaklı, cihaz üzerinde çalışan sunucu log analiz aracı.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Nirengi — macOS için SEO log analiz aracı',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: { card: 'summary', title: 'Nirengi — SEO Log Analiz Aracı', description: 'Sunucu loglarınızı Mac’inizde analiz edin.' },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Nirengi',
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'SEO Software',
  operatingSystem: 'macOS 14.4 or later',
  softwareVersion: '1.0',
  description: 'Googlebot, AI tarayıcıları, tarama bütçesi, teknik hatalar ve indeks kapsamı için 41 rapor sunan cihaz içi SEO sunucu log analiz aracı.',
  author: { '@type': 'Person', name: 'Sungur Kerem Gezergün', url: 'https://www.keremgezergun.com' },
  url: PAGE_URL,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
};

const reportGroups = [
  ['Bot kimliği', '5', 'Bot analizi, kategoriler, günlük taramalar, mobil/masaüstü ayrımı ve DNS doğrulama'],
  ['AI tarayıcıları', '2', 'AI bot etkinliği; eğitim, arama dizini ve kullanıcı tetiklemeli rol ayrımı'],
  ['Tarama bütçesi', '7', 'En çok taranan URL’ler, tarama israfı, HTML/varlık ve bant genişliği raporları'],
  ['Teknik hatalar', '8', '404, 5xx, 3xx, diğer 4xx, soft-404, tutarsız durum kodları ve robots.txt ihlalleri'],
  ['Kapsam ve tazelik', '6', 'Taranmayan sitemap URL’leri, öksüz sayfalar, tarama sıklığı ve tazelik skoru'],
  ['Ziyaretçi trafiği', '8', 'Zaman serisi, anomaliler, referer, organik kaynak, istek hızı ve içerik tipleri'],
  ['Kategori analizi', '5', 'Kategori özeti, bot kırılımları, taranmayan kategoriler ve kategori × bot matrisi'],
];

const formats = [
  ['Apache ve Nginx', 'Combined, CLF, vhost_combined ve özel son alanlar'],
  ['IIS', 'W3C Extended Log File Format'],
  ['AWS CloudFront', 'Standart sekmeyle ayrılmış erişim logları'],
  ['Cloudflare', 'Logpush HTTP istek verisi (NDJSON)'],
  ['Nginx, Caddy ve Traefik', 'JSON Lines / NDJSON erişim logları'],
  ['AWS ALB', 'Application Load Balancer erişim logları'],
];

export default function NirengiPage() {
  return (
    <main id="main-content" tabIndex={-1} className="nirengi">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(softwareSchema) }} />
      <section className="nirengi-hero" aria-labelledby="nirengi-title">
        <div className="container nirengi-hero-grid">
          <div>
            <p className="nirengi-eyebrow">Yerel macOS SEO analizi</p>
            <h1 id="nirengi-title">Loglarınız. Mac’iniz. <span>İçgörüleriniz.</span></h1>
            <p className="nirengi-lead">Ham sunucu loglarını Googlebot, AI tarayıcıları, tarama bütçesi ve teknik SEO için kullanılabilir içgörülere dönüştürün. Dosyalarınız cihazınızda işlenir ve hiçbir yere yüklenmez.</p>
            <div className="nirengi-actions">
              <a className="btn btn-primary btn-large" href="#ozellikler">Özellikleri keşfet</a>
              <Link className="btn btn-outline btn-large" href="/nirengi-erisilebirlik">Erişilebilirlik</Link>
            </div>
          </div>
          <div className="nirengi-window" role="img" aria-label="Nirengi analizinden dört örnek ölçüm">
            <div className="nirengi-windowbar" aria-hidden="true"><i></i><i></i><i></i></div>
            <div className="nirengi-metrics">
              <div><strong>2,4 Mn</strong><span>Analiz edilen istek</span></div>
              <div><strong>41</strong><span>Kullanılabilir rapor</span></div>
              <div><strong>%100</strong><span>Cihaz üzerinde</span></div>
              <div><strong>0</strong><span>Yüklenen log</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="ozellikler" className="nirengi-section" aria-labelledby="features-title">
        <div className="container">
          <p className="nirengi-eyebrow">SEO sunucu log analizi</p>
          <h2 id="features-title">Tarayıcıların gerçekte ne yaptığını görün.</h2>
          <p className="nirengi-intro">Nirengi; teknik SEO uzmanları, danışmanlar, yayıncılar, SaaS ve e-ticaret ekipleri için geliştirilmiş yerel bir macOS uygulamasıdır. Hassas altyapı verilerini buluta göndermeden tarama davranışı, hatalar, kapsam, içerik tazeliği ve bant genişliğini kanıta dönüştürür.</p>
          <div className="nirengi-grid">
            <article><h3>Googlebot ve AI tarayıcıları</h3><p>Googlebot’u GPTBot, ClaudeBot, PerplexityBot ve diğer AI ajanlarıyla aynı ölçekte karşılaştırın.</p></article>
            <article><h3>Hatalar ve tarama israfı</h3><p>404, 5xx, yönlendirme, soft-404, parametre ve robots.txt sorunlarını bulun.</p></article>
            <article><h3>Kapsam ve tazelik</h3><p>Sitemap ile trafiği karşılaştırıp taranmayan, öksüz veya ilgisini kaybeden URL’leri keşfedin.</p></article>
            <article><h3>Doğrulanmış bot kimliği</h3><p>Desteklenen arama botlarını ters ve ileri DNS kontrolleriyle sahte trafikten ayırın.</p></article>
            <article><h3>Büyük dosya motoru</h3><p>Milyonlarca satırı paralel işleyin; gerektiğinde disk destekli analiz yoluna otomatik geçin.</p></article>
            <article><h3>Hesapsız, taşınabilir raporlar</h3><p>Sonuçları filtreleyin; CSV veya tek dosyalı HTML raporu olarak paylaşın.</p></article>
          </div>
        </div>
      </section>

      <section className="nirengi-section nirengi-alt" aria-labelledby="reports-title">
        <div className="container">
          <p className="nirengi-eyebrow">Eksiksiz yetenek haritası</p>
          <h2 id="reports-title">SEO kararları için düzenlenmiş 41 rapor.</h2>
          <div className="nirengi-table-wrap" tabIndex={0} role="region" aria-labelledby="reports-caption">
            <table><caption id="reports-caption">Nirengi rapor grupları ve öne çıkan analizler</caption><thead><tr><th scope="col">Rapor grubu</th><th scope="col">Rapor</th><th scope="col">Öne çıkan analizler</th></tr></thead>
              <tbody>{reportGroups.map(([group, count, detail]) => <tr key={group}><th scope="row">{group}</th><td>{count}</td><td>{detail}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="nirengi-section" aria-labelledby="workflow-title">
        <div className="container">
          <p className="nirengi-eyebrow">Dosyadan karara</p><h2 id="workflow-title">Dört adımda odaklı analiz.</h2>
          <ol className="nirengi-steps">
            <li><h3>Logları seçin</h3><p>Bir dosyayı veya rotasyonlu bir grubu macOS dosya seçicisinden açın.</p></li>
            <li><h3>Bağlam ekleyin</h3><p>İsteğe bağlı site adresi, sitemap, kategori listesi ve DNS doğrulaması ekleyin.</p></li>
            <li><h3>Yerel analiz edin</h3><p>Paralel motor çalışırken ilerlemeyi, uyarıları ve geçen süreyi izleyin.</p></li>
            <li><h3>İnceleyin ve aktarın</h3><p>Panoları ve filtreleri kullanın; sonucu CSV veya HTML olarak dışa aktarın.</p></li>
          </ol>
        </div>
      </section>

      <section className="nirengi-section nirengi-alt" aria-labelledby="formats-title">
        <div className="container">
          <p className="nirengi-eyebrow">Otomatik format algılama</p><h2 id="formats-title">Modern sunucu logları için tek analiz aracı.</h2>
          <div className="nirengi-table-wrap" tabIndex={0} role="region" aria-labelledby="formats-caption">
            <table><caption id="formats-caption">Kaynağa göre desteklenen log formatları</caption><thead><tr><th scope="col">Kaynak</th><th scope="col">Desteklenen format</th></tr></thead><tbody>{formats.map(([source, detail]) => <tr key={source}><th scope="row">{source}</th><td>{detail}</td></tr>)}</tbody></table>
          </div>
        </div>
      </section>

      <section className="nirengi-section" aria-labelledby="performance-title">
        <div className="container"><p className="nirengi-eyebrow">Üretim ölçeğinde ölçüldü</p><h2 id="performance-title">Gigabaytlarla ölçülen loglar için tasarlandı.</h2>
          <p className="nirengi-intro">Apple M4 ve 16 GB belleğe sahip bir Mac’te Release sürümü, 15,4 GB üretim logunu 40 saniyede işledi. Sonuçlar donanım, depolama, format ve etkin özelliklere göre değişir.</p>
          <dl className="nirengi-bench"><div><dt>Girdi satırı</dt><dd>50,9 Mn</dd></div><div><dt>Ölçülen süre</dt><dd>40 sn</dd></div><div><dt>Saniyede</dt><dd>1,26 Mn</dd></div><div><dt>Tepe bellek</dt><dd>3,6 GiB</dd></div></dl>
        </div>
      </section>

      <section className="nirengi-section nirengi-alt" aria-labelledby="faq-title">
        <div className="container nirengi-narrow"><p className="nirengi-eyebrow">Sık sorulanlar</p><h2 id="faq-title">Analizden önce bilmeniz gerekenler.</h2>
          <div className="nirengi-faq">
            <details><summary>Nirengi sunucu loglarımı yükler mi?</summary><p>Hayır. Seçtiğiniz dosyalar macOS App Sandbox içinde yerel olarak işlenir; uygulama hesap, reklam veya telemetri içermez.</p></details>
            <details><summary>Ne zaman ağ erişimi kullanır?</summary><p>Yalnızca başlattığınız sitemap, robots.txt indirme veya DNS bot doğrulama işlemlerinde.</p></details>
            <details><summary>Sonuçları paylaşabilir miyim?</summary><p>Evet. Tabloları CSV, tüm raporu ise bulut hesabı gerektirmeyen tek dosyalı HTML olarak aktarabilirsiniz.</p></details>
            <details><summary>Nirengi ücretsiz mi?</summary><p>1.0 sürümü tamamen ücretsizdir; abonelik veya uygulama içi satın alma içermez.</p></details>
          </div>
          <div className="nirengi-actions"><Link className="btn btn-primary" href="/nirengi-iletisim">Destek ve iletişim</Link><Link className="btn btn-outline" href="/nirengi-gizlilik-politikasi">Gizlilik politikası</Link><Link className="btn btn-outline" href="/nirengi-erisilebirlik">Erişilebilirlik</Link></div>
        </div>
      </section>
    </main>
  );
}
