import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';

export const metadata: Metadata = {
  description:
    'Sungur Kerem Gezergün - E-ticaret SEO, Teknik SEO ve Organik Büyüme Stratejileri Uzmanı. MENA Search Awards Finalisti.',
  alternates: {
    canonical: 'https://www.keremgezergun.com/',
  },
  openGraph: {
    title: 'Kerem Gezergün | SEO Uzmanı',
    description: 'E-ticaret SEO, Teknik SEO ve Organik Büyüme Stratejileri Uzmanı',
    url: 'https://www.keremgezergun.com/',
    images: ['https://www.keremgezergun.com/images/kerem-gezergun.jpg'],
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'SEO nedir ve neden önemlidir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO (Search Engine Optimization), web sitenizin arama motorlarında daha üst sıralarda yer almasını sağlayan optimizasyon sürecidir. Organik arama trafiği, dijital pazarlamanın en sürdürülebilir ve maliyet-etkin kanalıdır.',
      },
    },
    {
      '@type': 'Question',
      name: 'SEO çalışmaları ne kadar sürede sonuç verir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teknik düzeltmeler birkaç hafta içinde etki gösterebilirken, organik sıralama iyileştirmeleri genellikle 3-6 ay arasında belirginleşmeye başlar. Rekabetçi sektörlerde bu süre 6-12 aya uzayabilir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Teknik SEO denetimi neleri kapsar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Site hızı ve Core Web Vitals analizi, crawlability ve indexability kontrolü, URL yapısı ve site mimarisi incelemesi, canonical ve hreflang etiketleri denetimi, schema markup doğrulaması, mobil uyumluluk testi, robots.txt ve sitemap kontrolü gibi kritik bileşenleri kapsar.',
      },
    },
    {
      '@type': 'Question',
      name: 'E-ticaret siteleri için SEO neden kritik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'E-ticaret sitelerinde binlerce ürün ve kategori sayfası bulunur. Doğru SEO stratejisi olmadan bu sayfaların büyük çoğunluğu arama motorlarında görünmez kalır. Ürün sayfası optimizasyonu, kategori mimarisi ve internal linking stratejisi ile organik trafiğinizi ve satışlarınızı artırabilirsiniz.',
      },
    },
    {
      '@type': 'Question',
      name: 'SEO danışmanlığı süreci nasıl işler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Süreç; mevcut durum analizi (teknik denetim, rakip analizi, anahtar kelime araştırması), strateji ve yol haritası oluşturma, uygulama ve düzenli raporlama adımlarıyla ilerler.',
      },
    },
    {
      '@type': 'Question',
      name: 'Organik trafik ile ücretli trafik arasındaki fark nedir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Organik trafik, arama motorlarında doğal sıralama sonucu gelen ziyaretçilerdir ve sürdürülebilirdir. Ücretli trafik ise anında sonuç verir ancak bütçe kesildiğinde trafik de durur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Google algoritma güncellemeleri sitemi nasıl etkiler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google yılda birçok kez büyük algoritma güncellemesi yapar. Kaliteli içerik üreten, teknik altyapısı sağlam ve kullanıcı deneyimini ön planda tutan siteler genellikle bu güncellemelerden olumlu etkilenir.',
      },
    },
    {
      '@type': 'Question',
      name: 'GEO (Generative Engine Optimization) nedir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GEO, yapay zeka destekli arama motorlarında (ChatGPT, Perplexity, Google AI Overviews vb.) markanızın görünürlüğünü artırmaya yönelik yeni nesil bir optimizasyon disiplinidir.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <main id="main-content" role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="hero" aria-label="Tanıtım bölümü">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-icon" aria-hidden="true">&#127942;</span>
                <span>MENA Search Awards Finalisti</span>
              </div>
              <h1>
                Merhaba, ben{' '}
                <span className="highlight">Kerem Gezergün</span>
              </h1>
              <p className="hero-title">Senior SEO Specialist &amp; Team Lead</p>
              <p className="hero-description">
                E-ticaret SEO, Teknik SEO ve Organik Büyüme Stratejileri alanında{' '}
                <strong>30+ marka</strong> ile çalıştım. Veri odaklı yaklaşımlarla
                markaların dijital görünürlüğünü artırıyorum.
              </p>
              <ul className="hero-stats" aria-label="İstatistikler">
                <li className="stat">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Marka</span>
                </li>
                <li className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Yıl Deneyim</span>
                </li>
              </ul>
              <div className="hero-cta">
                <a
                  href="https://businessup.com.tr/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn btn-primary btn-large"
                >
                  Benimle Çalışın
                </a>
                <Link href="/#projeler" className="btn btn-outline btn-large">
                  Projeleri İncele
                </Link>
              </div>
            </div>
            <figure className="hero-image">
              <div className="image-wrapper">
                <Image
                  src="/images/kerem-gezergun.jpg"
                  alt="Kerem Gezergün - SEO Uzmanı, profesyonel portre fotoğrafı"
                  fill
                  sizes="(max-width: 768px) 250px, (max-width: 1024px) 300px, 400px"
                  priority
                />
                <div className="image-decoration" aria-hidden="true"></div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section" aria-labelledby="tools-title">
        <div className="container">
          <p className="tools-title" id="tools-title">
            Kullandığım Araçlar
          </p>
          <ul className="tools-grid" aria-label="SEO araçları listesi">
            <li className="tool-item" title="Ahrefs">
              <Image
                src="/images/tools/ahrefs.png"
                alt="Ahrefs SEO aracı logosu"
                width={100}
                height={40}
              />
            </li>
            <li className="tool-item" title="Google Search Console">
              <Image
                src="https://www.gstatic.com/images/branding/product/2x/search_console_64dp.png"
                alt="Google Search Console logosu"
                width={100}
                height={40}
              />
            </li>
            <li className="tool-item" title="Google Analytics">
              <Image
                src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg"
                alt="Google Analytics logosu"
                width={100}
                height={40}
                unoptimized
              />
            </li>
            <li className="tool-item" title="Semrush">
              <Image
                src="/images/tools/semrush.png"
                alt="Semrush SEO aracı logosu"
                width={100}
                height={40}
              />
            </li>
            <li className="tool-item" title="Screaming Frog">
              <Image
                src="/images/tools/screaming-frog.png"
                alt="Screaming Frog SEO Spider logosu"
                width={100}
                height={40}
              />
            </li>
            <li className="tool-item" title="GTmetrix">
              <Image
                src="/images/tools/gtmetrix.png"
                alt="GTmetrix performans aracı logosu"
                width={100}
                height={40}
              />
            </li>
            <li className="tool-item" title="ReportSup">
              <a
                href="https://reportsup.com.tr/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Image
                  src="/images/tools/reportsup.webp"
                  alt="ReportSup SEO raporlama aracı logosu"
                  width={100}
                  height={40}
                />
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="services-section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Hizmetler</span>
            <h2 id="services-heading">Neler Yapıyorum?</h2>
          </div>
          <ul className="services-grid" aria-label="Hizmet listesi">
            <li className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
              <h3>SEO Stratejisi &amp; Danışmanlık</h3>
              <p>
                Markanızın dijital hedeflerine uygun, veriye dayalı SEO stratejileri
                oluşturuyorum. Rakip analizi, pazar araştırması ve önceliklendirme ile
                sürdürülebilir büyüme planı sunuyorum.
              </p>
              <span className="service-output">Çıktı: Strateji dokümanı, yol haritası, aylık raporlama</span>
            </li>
            <li className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3>Teknik SEO Denetimi</h3>
              <p>
                Site hızı, crawlability, indexability, canonical yapısı, schema markup
                ve Core Web Vitals odaklı kapsamlı teknik analiz gerçekleştiriyorum.
              </p>
              <span className="service-output">Çıktı: Detaylı denetim raporu, öncelikli aksiyon listesi</span>
            </li>
            <li className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <h3>E-ticaret SEO</h3>
              <p>
                Ürün ve kategori sayfası optimizasyonu, site mimarisi, internal linking,
                faceted navigation yönetimi ve dönüşüm odaklı SEO çalışmaları yürütüyorum.
              </p>
              <span className="service-output">Çıktı: Organik trafik artışı, dönüşüm oranı iyileştirmesi</span>
            </li>
            <li className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3>İçerik Stratejisi &amp; SEO</h3>
              <p>
                Anahtar kelime araştırması, içerik gap analizi, topical authority
                haritası ve kullanıcı niyetine uygun içerik planlaması yapıyorum.
              </p>
              <span className="service-output">Çıktı: İçerik takvimi, brief dokümanları, performans takibi</span>
            </li>
            <li className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3>SEO Eğitimi &amp; Workshop</h3>
              <p>
                Kurumsal ekiplere ve bireylere özel SEO eğitimleri, üniversitelerde
                seminerler ve sektörel etkinliklerde workshop&apos;lar düzenliyorum.
              </p>
              <span className="service-output">Çıktı: Uygulamalı eğitim, sunum materyalleri, sertifika</span>
            </li>
            <li className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>SEO Otomasyon &amp; Raporlama</h3>
              <p>
                Python ve AI tabanlı otomasyon çözümleri, özelleştirilmiş SEO raporlama
                dashboardları ve veri analizi araçları geliştiriyorum.
              </p>
              <span className="service-output">Çıktı: Otomasyon scriptleri, özel raporlama paneli</span>
            </li>
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimda" className="about-section" aria-labelledby="about-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Hakkımda</span>
            <h2 id="about-heading">
              SEO&apos;yu Bütünsel Bir Süreç Olarak Ele Alıyorum
            </h2>
          </div>
          <div className="about-content">
            <aside className="about-text">
              <p>
                SEO&apos;yu sadece teknik bir sıralama çalışması olarak değil;{' '}
                <strong>kullanıcı niyeti, bilgi mimarisi ve marka görünürlüğünü</strong>{' '}
                kapsayan bütünsel bir süreç olarak ele alıyorum.
              </p>
              <p>
                Halihazırda <strong>BusinessUp!</strong> ajansında Senior SEO Specialist ve
                SEO Team Lead olarak görev yapıyorum. Aynı zamanda sektördeki bilgi birikimimi
                paylaşmak amacıyla kurduğum <strong>&ldquo;Sepetteki SEO&rdquo;</strong>{' '}
                podcast serisinin kurucusu ve sunucusuyum.
              </p>
            </aside>
            <ul className="expertise-grid" aria-label="Uzmanlık alanları">
              <li className="expertise-card">
                <div className="expertise-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3>Teknik SEO</h3>
                <p>Site hızı optimizasyonu, canonical etiketleri, meta veri optimizasyonu</p>
              </li>
              <li className="expertise-card">
                <div className="expertise-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M3 3h18v18H3zM21 9H3M9 21V9" />
                  </svg>
                </div>
                <h3>E-ticaret SEO</h3>
                <p>Ürün sayfası optimizasyonu, kategori yapılandırması, dönüşüm odaklı SEO</p>
              </li>
              <li className="expertise-card">
                <div className="expertise-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M23 6l-9.5 9.5-5-5L1 18" />
                    <path d="M17 6h6v6" />
                  </svg>
                </div>
                <h3>Organik Büyüme</h3>
                <p>Veri odaklı strateji, sürdürülebilir trafik artışı, marka görünürlüğü</p>
              </li>
              <li className="expertise-card">
                <div className="expertise-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3>Otomasyon</h3>
                <p>Python ve AI tabanlı otomasyonlarla iş süreçlerini hızlandırma</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section" aria-labelledby="results-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Sonuçlar</span>
            <h2 id="results-heading">Rakamlarla Performansım</h2>
          </div>
          <ul className="results-grid" aria-label="Başarı metrikleri">
            <li className="result-card">
              <span className="result-number">30+</span>
              <span className="result-label">Marka ile Çalışma</span>
              <p>Farklı sektörlerden 30&apos;dan fazla markaya SEO danışmanlığı ve strateji desteği sağladım.</p>
            </li>
            <li className="result-card">
              <span className="result-number">5+</span>
              <span className="result-label">Yıl SEO Deneyimi</span>
              <p>E-ticaret, finans, sağlık ve eğitim sektörlerinde kapsamlı SEO deneyimi edindim.</p>
            </li>
            <li className="result-card">
              <span className="result-number">800+</span>
              <span className="result-label">Etkinlik Katılımcısı</span>
              <p>Düzenlediğim dijital pazarlama zirvelerinde 800&apos;den fazla katılımcıya ulaştım.</p>
            </li>
            <li className="result-card">
              <span className="result-number">65+</span>
              <span className="result-label">Saat Eğitim</span>
              <p>Ücretsiz e-ticaret eğitim programlarında 65 saatten fazla eğitim verdim.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section" aria-labelledby="awards-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Başarılar</span>
            <h2 id="awards-heading">Ödüller &amp; Tanınırlık</h2>
          </div>
          <ul className="awards-grid" aria-label="Ödüller ve başarılar listesi">
            <li className="award-card featured">
              <div className="award-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <h3>MENA Search Awards 2024</h3>
              <p>Best Use of Search (Finance) kategorisinde finalist oldum.</p>
              <span className="award-year">2024</span>
            </li>
            <li className="award-card">
              <div className="award-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>SEO Team Lead</h3>
              <p>BusinessUp! ajansında SEO ekibini yönetiyor, strateji ve operasyonu koordine ediyorum.</p>
              <span className="award-year">Aktif</span>
            </li>
            <li className="award-card">
              <div className="award-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              </div>
              <h3>Sepetteki SEO Podcast</h3>
              <p>E-ticaret SEO ve AI konularını ele aldığımız podcast serisinin kurucusu ve sunucusuyum.</p>
              <span className="award-year">Aktif</span>
            </li>
            <li className="award-card">
              <div className="award-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 6 3 6 3s3 0 6-3v-5" />
                </svg>
              </div>
              <h3>Üniversite Zirve Organizatörü</h3>
              <p>Ahi Evran Üniversitesi ile 2 dijital pazarlama zirvesi düzenledim.</p>
              <span className="award-year">Organizatör</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projeler" className="projects-section" aria-labelledby="projects-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Sektörel Projeler</span>
            <h2 id="projects-heading">Konuşmacı &amp; Proje Çalışmalarım</h2>
          </div>
          <ul className="projects-grid" aria-label="Proje listesi">
            <li className="project-card featured">
              <span className="project-badge">Konuşmacı</span>
              <h3>Üsküdar Üniversitesi</h3>
              <p>
                Üsküdar Üniversitesi&apos;nde SEO ve dijital pazarlama alanında konuşmacı
                olarak yer aldım.
              </p>
              <ul className="project-tags" aria-label="Etiketler">
                <li>Eğitim</li>
                <li>SEO</li>
                <li>Konuşmacı</li>
              </ul>
            </li>
            <li className="project-card">
              <span className="project-badge-secondary">Konuşmacı</span>
              <h3>Türkiye Psikologlar Derneği</h3>
              <p>
                Türkiye Psikologlar Derneği etkinliğinde dijital görünürlük ve SEO konularında
                konuşmacı olarak katıldım.
              </p>
              <ul className="project-tags" aria-label="Etiketler">
                <li>Dernek</li>
                <li>Konuşmacı</li>
              </ul>
            </li>
            <li className="project-card">
              <span className="project-badge-secondary">Podcast</span>
              <h3>Sepetteki SEO</h3>
              <p>
                E-ticaret SEO ve yapay zeka konularını ele aldığımız podcast serisi. Simay
                Özpilavcı ile birlikte sunuyorum.
              </p>
              <ul className="project-tags" aria-label="Etiketler">
                <li>Podcast</li>
                <li>E-ticaret SEO</li>
                <li>AI</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="ongoing-section" aria-labelledby="ongoing-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Devam Eden Projeler</span>
            <h2 id="ongoing-heading">Üzerinde Çalıştığım Projeler</h2>
          </div>
          <ul className="ongoing-grid" aria-label="Devam eden projeler listesi">
            <li className="ongoing-card">
              <div className="ongoing-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <span className="ongoing-status">Geliştiriliyor</span>
              <h3>SEO Mobil App</h3>
              <p>SEO profesyonelleri için mobil uygulama geliştiriyorum.</p>
            </li>
            <li className="ongoing-card">
              <div className="ongoing-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <span className="ongoing-status">Yazılıyor</span>
              <h3>SEO Kitabı</h3>
              <p>Kapsamlı bir SEO rehberi kitabı üzerinde çalışıyorum.</p>
            </li>
            <li className="ongoing-card">
              <div className="ongoing-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              </div>
              <span className="ongoing-status">Aktif</span>
              <h3>Sepetteki SEO</h3>
              <p>E-ticaret SEO ve AI odaklı podcast kanalı.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="podcast-section" aria-labelledby="podcast-heading">
        <div className="container">
          <div className="podcast-content">
            <div className="podcast-info">
              <span className="section-tag">Podcast</span>
              <h2 id="podcast-heading">Sepetteki SEO</h2>
              <p className="podcast-description">
                Simay Özpilavcı ile birlikte sunduğumuz <strong>Sepetteki SEO</strong> podcast
                serisinde e-ticaret sitelerinin arama motoru yolculuğunu, yapay zeka ve SEO
                ilişkisini, sektörel gelişmeleri ve pratik SEO stratejilerini ele alıyoruz.
              </p>
              <ul className="podcast-topics" aria-label="Podcast konuları">
                <li>E-ticaret SEO Stratejileri</li>
                <li>AI &amp; SEO İlişkisi</li>
                <li>Teknik SEO Tartışmaları</li>
                <li>Sektörel Gündem</li>
              </ul>
              <nav className="podcast-links" aria-label="Podcast platformları">
                <a
                  href="https://www.youtube.com/@keremgezergun"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn btn-primary"
                  aria-label="YouTube&apos;da dinle"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
                <a
                  href="https://open.spotify.com/search/sepetteki%20seo"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn btn-outline"
                  aria-label="Spotify&apos;da dinle"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  Spotify
                </a>
              </nav>
            </div>
            <div className="podcast-visual" aria-hidden="true">
              <div className="podcast-artwork">
                <div className="podcast-artwork-inner">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="80" height="80">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                  <span className="podcast-artwork-title">Sepetteki SEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="blog-section" aria-labelledby="blog-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Blog</span>
            <h2 id="blog-heading">SEO Rehberleri</h2>
          </div>
          <ul className="blog-grid" aria-label="Blog yazıları listesi">
            <li className="blog-card">
              <div className="blog-image placeholder">
                <span className="coming-soon-badge">Yakında</span>
              </div>
              <div className="blog-content">
                <span className="blog-category">Teknik SEO</span>
                <h3>Teknik SEO Rehberi</h3>
                <p>
                  Site hızı, crawlability, indexability ve teknik optimizasyon konularında
                  kapsamlı rehber.
                </p>
              </div>
            </li>
            <li className="blog-card">
              <div className="blog-image placeholder">
                <span className="coming-soon-badge">Yakında</span>
              </div>
              <div className="blog-content">
                <span className="blog-category">GEO</span>
                <h3>GEO Rehberi</h3>
                <p>
                  Generative Engine Optimization - Yapay zeka arama motorları için optimizasyon
                  rehberi.
                </p>
              </div>
            </li>
            <li className="blog-card">
              <div className="blog-image placeholder">
                <span className="coming-soon-badge">Yakında</span>
              </div>
              <div className="blog-content">
                <span className="blog-category">On-Page SEO</span>
                <h3>Site İçi SEO Rehberi</h3>
                <p>
                  İçerik optimizasyonu, meta etiketler, başlık yapısı ve site içi SEO
                  stratejileri.
                </p>
              </div>
            </li>
            <li className="blog-card">
              <div className="blog-image placeholder">
                <span className="coming-soon-badge">Yakında</span>
              </div>
              <div className="blog-content">
                <span className="blog-category">Off-Page SEO</span>
                <h3>Backlink Rehberi</h3>
                <p>
                  Kaliteli backlink stratejileri, link building teknikleri ve off-page SEO.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="sss" className="faq-section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">SSS</span>
            <h2 id="faq-heading">Sıkça Sorulan Sorular</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary className="faq-question">
                <span>SEO nedir ve neden önemlidir?</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
              </summary>
              <div className="faq-answer">
                <p>
                  SEO (Search Engine Optimization), web sitenizin arama motorlarında daha üst
                  sıralarda yer almasını sağlayan optimizasyon sürecidir. Organik arama trafiği,
                  dijital pazarlamanın en sürdürülebilir ve maliyet-etkin kanalıdır. Doğru bir
                  SEO stratejisi ile markanızın görünürlüğünü artırabilir, hedef kitlenize
                  ulaşabilir ve dönüşüm oranlarınızı yükseltebilirsiniz.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">
                <span>SEO çalışmaları ne kadar sürede sonuç verir?</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
              </summary>
              <div className="faq-answer">
                <p>
                  SEO uzun vadeli bir yatırımdır. Teknik düzeltmeler birkaç hafta içinde etki
                  gösterebilirken, organik sıralama iyileştirmeleri genellikle 3-6 ay arasında
                  belirginleşmeye başlar. Rekabetçi sektörlerde bu süre 6-12 aya uzayabilir.
                  Önemli olan tutarlı ve stratejik bir yaklaşım benimsemektir.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">
                <span>Teknik SEO denetimi neleri kapsar?</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
              </summary>
              <div className="faq-answer">
                <p>
                  Teknik SEO denetimi; site hızı ve Core Web Vitals analizi, crawlability ve
                  indexability kontrolü, URL yapısı ve site mimarisi incelemesi, canonical ve
                  hreflang etiketleri denetimi, schema markup doğrulaması, mobil uyumluluk
                  testi, robots.txt ve sitemap kontrolü gibi birçok kritik bileşeni kapsar.
                  Sonuç olarak önceliklendirilmiş bir aksiyon listesi sunulur.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">
                <span>E-ticaret siteleri için SEO neden kritik?</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
              </summary>
              <div className="faq-answer">
                <p>
                  E-ticaret sitelerinde binlerce ürün ve kategori sayfası bulunur. Doğru SEO
                  stratejisi olmadan bu sayfaların büyük çoğunluğu arama motorlarında görünmez
                  kalır. Ürün sayfası optimizasyonu, kategori mimarisi, faceted navigation
                  yönetimi, duplicate content önleme ve internal linking stratejisi ile organik
                  trafiğinizi ve satışlarınızı önemli ölçüde artırabilirsiniz.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">
                <span>SEO danışmanlığı süreci nasıl işler?</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
              </summary>
              <div className="faq-answer">
                <p>
                  Süreç genellikle şu adımlarla ilerler: İlk olarak mevcut durumunuzu analiz
                  ederim (teknik denetim, rakip analizi, anahtar kelime araştırması). Ardından
                  hedeflerinize uygun bir strateji ve yol haritası oluştururum. Uygulama
                  aşamasında ekibinizle birlikte çalışarak optimizasyonları hayata geçiririz.
                  Son olarak düzenli raporlamalarla ilerlemeyi takip eder ve stratejiyi
                  güncelleriz.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">
                <span>Organik trafik ile ücretli trafik arasındaki fark nedir?</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
              </summary>
              <div className="faq-answer">
                <p>
                  Organik trafik, arama motorlarında doğal sıralama sonucu gelen ziyaretçilerdir
                  ve sürdürülebilirdir &mdash; reklam bütçesi bittiğinde durmaz. Ücretli trafik
                  (Google Ads vb.) ise anında sonuç verir ancak bütçe kesildiğinde trafik de
                  durur. İdeal strateji, her iki kanalı birlikte kullanarak kısa vadede ücretli,
                  uzun vadede organik trafikle büyümektir.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">
                <span>Google algoritma güncellemeleri sitemi nasıl etkiler?</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
              </summary>
              <div className="faq-answer">
                <p>
                  Google yılda birçok kez büyük algoritma güncellemesi yapar (Core Updates,
                  Helpful Content Update, Spam Update vb.). Bu güncellemeler sıralamaları
                  önemli ölçüde değiştirebilir. Kaliteli içerik üreten, teknik altyapısı
                  sağlam ve kullanıcı deneyimini ön planda tutan siteler genellikle bu
                  güncellemelerden olumlu etkilenir. Proaktif bir SEO stratejisi, algoritma
                  değişikliklerine karşı en iyi savunmadır.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">
                <span>GEO (Generative Engine Optimization) nedir?</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
              </summary>
              <div className="faq-answer">
                <p>
                  GEO, yapay zeka destekli arama motorlarında (ChatGPT, Perplexity, Google AI
                  Overviews vb.) markanızın görünürlüğünü artırmaya yönelik yeni nesil bir
                  optimizasyon disiplinidir. Geleneksel SEO&apos;nun ötesinde, AI
                  sistemlerinin içeriğinizi kaynak olarak kullanmasını ve referans göstermesini
                  hedefler. Bu alanda da aktif olarak çalışmalar yürütüyorum.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="iletisim" className="cta-section" aria-labelledby="contact-heading">
        <div className="container">
          <h2 id="contact-heading">Birlikte Çalışalım</h2>
          <p>
            SEO stratejinizi güçlendirmek veya dijital görünürlüğünüzü artırmak için bizimle
            iletişime geçin.
          </p>
          <a
            href="https://businessup.com.tr/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn btn-primary btn-large"
            aria-label="BusinessUp web sitesini ziyaret et"
          >
            BusinessUp&apos;ı Ziyaret Edin
          </a>
        </div>
      </section>
    </main>
  );
}
