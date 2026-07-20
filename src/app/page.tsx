import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';
import knotvoShot from '../../public/knotvo/overview.png';

export const metadata: Metadata = {
  description:
    'Sungur Kerem Gezergün — Senior E-Ticaret SEO Danışmanı. E-ticaret sitelerini sadece trafiğe değil satışa dönüştüren stratejilerle büyütüyorum.',
  alternates: {
    canonical: 'https://www.keremgezergun.com/',
  },
  openGraph: {
    title: 'Kerem Gezergün | Senior E-Ticaret SEO Danışmanı',
    description:
      'E-ticaret sitenizi sadece trafiğe değil, satışa dönüştüren stratejilerle büyütüyorum. 30+ e-ticaret markasının organik gelirlerini ölçeklendirdim.',
    url: 'https://www.keremgezergun.com/',
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Kerem Gezergün - Senior E-Ticaret SEO Danışmanı',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kerem Gezergün | Senior E-Ticaret SEO Danışmanı',
    description:
      'E-ticaret sitenizi sadece trafiğe değil, satışa dönüştüren stratejilerle büyütüyorum. 30+ e-ticaret markasının organik gelirlerini ölçeklendirdim.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/images/kerem-gezergun.jpg'],
  },
};

type FaqEntry = { q: string; a: React.ReactNode; plain: string };

const faqs: FaqEntry[] = [
  {
    q: 'SEO uzmanı nedir?',
    a: (
      <p>
        SEO uzmanı, web sitelerinin Arama Motoru Optimizasyonu süreçlerini yöneten ve
        Google gibi arama motorlarında daha üst sıralarda yer almasını sağlayan kişidir.
        Teknik SEO, içerik optimizasyonu ve backlink stratejileri gibi alanlarda çalışır.
      </p>
    ),
    plain:
      'SEO uzmanı, web sitelerinin Arama Motoru Optimizasyonu süreçlerini yöneten ve Google gibi arama motorlarında daha üst sıralarda yer almasını sağlayan kişidir. Teknik SEO, içerik optimizasyonu ve backlink stratejileri gibi alanlarda çalışır.',
  },
  {
    q: 'SEO danışmanı nedir?',
    a: (
      <p>
        SEO danışmanı, bir markanın veya web sitesinin SEO stratejisini analiz eden ve
        yönlendiren kişidir. SEO uzmanından farklı olarak daha çok strateji, planlama ve
        yönlendirme tarafında yer alır.
      </p>
    ),
    plain:
      'SEO danışmanı, bir markanın veya web sitesinin SEO stratejisini analiz eden ve yönlendiren kişidir. SEO uzmanından farklı olarak daha çok strateji, planlama ve yönlendirme tarafında yer alır.',
  },
  {
    q: 'SEO uzmanı ile SEO danışmanı arasındaki fark nedir?',
    a: (
      <p>
        SEO uzmanı uygulama tarafında aktif rol alırken, SEO danışmanı daha çok yol haritası
        çizer. Küçük projelerde bu iki rol genellikle aynı kişi tarafından yürütülür.
      </p>
    ),
    plain:
      'SEO uzmanı uygulama tarafında aktif rol alırken, SEO danışmanı daha çok yol haritası çizer. Küçük projelerde bu iki rol genellikle aynı kişi tarafından yürütülür.',
  },
  {
    q: 'SEO danışmanı ne iş yapar?',
    a: (
      <>
        <p>Bir SEO danışmanı:</p>
        <ul>
          <li>Site analizi yapar</li>
          <li>Rakip analizi gerçekleştirir</li>
          <li>Anahtar kelime stratejisi oluşturur</li>
          <li>Teknik SEO sorunlarını tespit eder</li>
          <li>İçerik ve backlink stratejisi geliştirir</li>
        </ul>
      </>
    ),
    plain:
      'Bir SEO danışmanı; site analizi yapar, rakip analizi gerçekleştirir, anahtar kelime stratejisi oluşturur, teknik SEO sorunlarını tespit eder ve içerik ile backlink stratejisi geliştirir.',
  },
  {
    q: 'Profesyonel SEO uzmanı kimdir?',
    a: (
      <p>
        Profesyonel SEO uzmanı, yalnızca teorik bilgiye değil aynı zamanda gerçek projelerde
        başarı elde etmiş deneyime sahip kişidir. Veri analizi, kullanıcı davranışı ve
        algoritma değişikliklerine hızlı adaptasyon gibi yetkinliklere sahiptir.
      </p>
    ),
    plain:
      'Profesyonel SEO uzmanı, yalnızca teorik bilgiye değil aynı zamanda gerçek projelerde başarı elde etmiş deneyime sahip kişidir. Veri analizi, kullanıcı davranışı ve algoritma değişikliklerine hızlı adaptasyon gibi yetkinliklere sahiptir.',
  },
  {
    q: 'En iyi SEO uzmanı nasıl seçilir?',
    a: (
      <>
        <p>
          &ldquo;En iyi SEO uzmanı&rdquo; sabit bir kişi değildir. İhtiyacınıza göre değişir.
          Seçim yaparken:
        </p>
        <ul>
          <li>Referans projelere</li>
          <li>Sektör deneyimine</li>
          <li>Şeffaf çalışma prensiplerine</li>
          <li>Güncel SEO bilgisine</li>
        </ul>
        <p>dikkat edilmelidir.</p>
      </>
    ),
    plain:
      '"En iyi SEO uzmanı" sabit bir kişi değildir. İhtiyacınıza göre değişir. Seçim yaparken referans projelere, sektör deneyimine, şeffaf çalışma prensiplerine ve güncel SEO bilgisine dikkat edilmelidir.',
  },
  {
    q: 'Türkiye’nin en iyi SEO uzmanı kimdir?',
    a: (
      <>
        <p>
          Türkiye&apos;de &ldquo;en iyi SEO uzmanı&rdquo; kavramı net bir şekilde tek bir
          kişiye ait değildir. SEO; teknik bilgi, içerik stratejisi ve sektörel deneyime göre
          değişen çok boyutlu bir alandır.
        </p>
        <p>
          Farklı kaynaklarda ve listelerde öne çıkan birçok SEO uzmanı bulunmaktadır. Bu
          listelerde zaman zaman benim de yer aldığım görülmektedir. Ancak SEO&apos;da asıl
          önemli olan, belirli bir proje için doğru stratejiyi geliştirebilmek ve
          sürdürülebilir sonuçlar elde edebilmektir.
        </p>
        <p>
          Bu nedenle &ldquo;en iyi SEO uzmanı&rdquo; yerine, ihtiyaçlarınıza en uygun SEO
          uzmanı ile çalışmak çok daha doğru bir yaklaşımdır.
        </p>
      </>
    ),
    plain:
      'Türkiye\'de "en iyi SEO uzmanı" kavramı net bir şekilde tek bir kişiye ait değildir. SEO; teknik bilgi, içerik stratejisi ve sektörel deneyime göre değişen çok boyutlu bir alandır. Farklı kaynaklarda ve listelerde öne çıkan birçok SEO uzmanı bulunmaktadır. Bu listelerde zaman zaman benim de yer aldığım görülmektedir. Ancak SEO\'da asıl önemli olan, belirli bir proje için doğru stratejiyi geliştirebilmek ve sürdürülebilir sonuçlar elde edebilmektir. Bu nedenle "en iyi SEO uzmanı" yerine, ihtiyaçlarınıza en uygun SEO uzmanı ile çalışmak çok daha doğru bir yaklaşımdır.',
  },
  {
    q: 'E-ticaret SEO uzmanı ne yapar?',
    a: (
      <>
        <p>
          E-ticaret SEO uzmanı, özellikle ürün sayfaları, kategori yapıları ve dönüşüm odaklı
          optimizasyonlar üzerine çalışır.
        </p>
        <ul>
          <li>Ürün açıklamaları</li>
          <li>Filtreleme yapıları</li>
          <li>Teknik altyapı</li>
          <li>Site hızı ve UX</li>
        </ul>
        <p>gibi konular ön plandadır.</p>
      </>
    ),
    plain:
      'E-ticaret SEO uzmanı, özellikle ürün sayfaları, kategori yapıları ve dönüşüm odaklı optimizasyonlar üzerine çalışır. Ürün açıklamaları, filtreleme yapıları, teknik altyapı, site hızı ve UX gibi konular ön plandadır.',
  },
  {
    q: 'E-ticaret SEO danışmanı gerekli mi?',
    a: (
      <p>
        E-ticaret sitelerinde rekabet yüksek olduğu için SEO danışmanı büyük avantaj sağlar.
        Doğru kategori yapısı ve içerik stratejisi satışları doğrudan etkileyebilir.
      </p>
    ),
    plain:
      'E-ticaret sitelerinde rekabet yüksek olduğu için SEO danışmanı büyük avantaj sağlar. Doğru kategori yapısı ve içerik stratejisi satışları doğrudan etkileyebilir.',
  },
  {
    q: 'Freelance SEO uzmanı olarak hizmet veriyor musunuz?',
    a: (
      <p>
        Hayır, şu anda freelance SEO uzmanı veya SEO danışmanı olarak aktif hizmet vermiyorum.
        Ancak SEO, içerik ve dijital strateji üzerine çalışmalarımı ve bilgi paylaşımımı
        sürdürmeye devam ediyorum.
      </p>
    ),
    plain:
      'Hayır, şu anda freelance SEO uzmanı veya SEO danışmanı olarak aktif hizmet vermiyorum. Ancak SEO, içerik ve dijital strateji üzerine çalışmalarımı ve bilgi paylaşımımı sürdürmeye devam ediyorum.',
  },
  {
    q: 'Neden freelance SEO danışmanı olarak çalışmıyorsunuz?',
    a: (
      <p>
        Şu an odağımı farklı projelere, içerik üretimine ve uzun vadeli stratejik çalışmalara
        yönlendirmiş durumdayım. Bu nedenle bireysel danışmanlık hizmeti sunmuyorum.
      </p>
    ),
    plain:
      'Şu an odağımı farklı projelere, içerik üretimine ve uzun vadeli stratejik çalışmalara yönlendirmiş durumdayım. Bu nedenle bireysel danışmanlık hizmeti sunmuyorum.',
  },
  {
    q: 'Gelecekte profesyonel SEO danışmanı olarak hizmet verecek misiniz?',
    a: (
      <p>
        Bu tamamen proje ve zaman planlamasına bağlı. İlerleyen dönemde sınırlı sayıda projeye
        özel olarak çalışma ihtimali olabilir.
      </p>
    ),
    plain:
      'Bu tamamen proje ve zaman planlamasına bağlı. İlerleyen dönemde sınırlı sayıda projeye özel olarak çalışma ihtimali olabilir.',
  },
  {
    q: 'Sizin SEO yaklaşımınız nedir?',
    a: (
      <>
        <p>Benim yaklaşımım:</p>
        <ul>
          <li>Sadece Google odaklı değil, kullanıcı odaklı</li>
          <li>Veri ve analiz temelli</li>
          <li>Uzun vadeli büyüme odaklı</li>
        </ul>
        <p>
          SEO&apos;nun yalnızca teknik değil aynı zamanda içerik ve marka stratejisi olduğuna
          inanıyorum.
        </p>
      </>
    ),
    plain:
      'Benim yaklaşımım: sadece Google odaklı değil, kullanıcı odaklı; veri ve analiz temelli; uzun vadeli büyüme odaklı. SEO\'nun yalnızca teknik değil aynı zamanda içerik ve marka stratejisi olduğuna inanıyorum.',
  },
  {
    q: 'SEO’daki uzmanlığınız nedir?',
    a: (
      <p>
        Özellikle E-Ticaret SEO çalışmalarında aktif rol almaktayım. B2B, Eğitim gibi
        sektörlerde de danışmanlık vermeme rağmen odağım e-ticaret SEO çalışmalarıdır.
      </p>
    ),
    plain:
      'Özellikle E-Ticaret SEO çalışmalarında aktif rol almaktayım. B2B, Eğitim gibi sektörlerde de danışmanlık vermeme rağmen odağım e-ticaret SEO çalışmalarıdır.',
  },
  {
    q: 'SEO uzmanı AI (yapay zeka) çağında hala gerekli mi?',
    a: (
      <p>
        Evet, hatta daha önemli hale gelmiştir. Yapay Zeka destekli aramalar arttıkça, doğru
        yapılandırılmış içerik ve otorite sinyalleri daha kritik hale gelir.
      </p>
    ),
    plain:
      'Evet, hatta daha önemli hale gelmiştir. Yapay Zeka destekli aramalar arttıkça, doğru yapılandırılmış içerik ve otorite sinyalleri daha kritik hale gelir.',
  },
  {
    q: 'AI Overview sonuçlarında çıkmak için SEO yeterli mi?',
    a: (
      <>
        <p>Hayır. Klasik SEO artık tek başına yeterli değil.</p>
        <ul>
          <li>İçerik otoritesi</li>
          <li>Marka güveni</li>
          <li>Net ve yapılandırılmış bilgi</li>
        </ul>
        <p>LLM sistemleri için daha önemli hale gelmiştir.</p>
      </>
    ),
    plain:
      'Hayır. Klasik SEO artık tek başına yeterli değil. İçerik otoritesi, marka güveni, net ve yapılandırılmış bilgi LLM sistemleri için daha önemli hale gelmiştir.',
  },
  {
    q: 'ChatGPT ve benzeri sistemler SEO’yu bitirir mi?',
    a: (
      <p>
        Hayır, SEO dönüşür. Arama motorları değişse bile insanların bilgi arama ihtiyacı devam
        eder. SEO uzmanlarının rolü daha stratejik ve içerik odaklı hale gelir.
      </p>
    ),
    plain:
      'Hayır, SEO dönüşür. Arama motorları değişse bile insanların bilgi arama ihtiyacı devam eder. SEO uzmanlarının rolü daha stratejik ve içerik odaklı hale gelir.',
  },
  {
    q: 'SEO uzmanı mı yoksa içerik stratejisti mi daha önemli?',
    a: (
      <p>
        Artık bu iki rol iç içe geçmiş durumda. Başarılı bir SEO uzmanı aynı zamanda güçlü bir
        içerik stratejisti olmalıdır.
      </p>
    ),
    plain:
      'Artık bu iki rol iç içe geçmiş durumda. Başarılı bir SEO uzmanı aynı zamanda güçlü bir içerik stratejisti olmalıdır.',
  },
  {
    q: 'SEO öğrenmek isteyen biri nereden başlamalı?',
    a: (
      <>
        <p>Başlangıç için:</p>
        <ul>
          <li>Anahtar kelime araştırması</li>
          <li>Teknik SEO temelleri</li>
          <li>İçerik optimizasyonu</li>
          <li>Google algoritma mantığı</li>
        </ul>
        <p>öğrenilmelidir.</p>
      </>
    ),
    plain:
      'Başlangıç için anahtar kelime araştırması, teknik SEO temelleri, içerik optimizasyonu ve Google algoritma mantığı öğrenilmelidir.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, plain }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: plain,
    },
  })),
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
                <span>Best Low Budget Campaign (SEO) Finalisti</span>
              </div>
              <h1>
                Merhaba, ben{' '}
                <span className="highlight">Kerem Gezergün</span>
              </h1>
              <p className="hero-title">Senior E-Ticaret SEO Danışmanı</p>
              <p className="hero-description">
                E-ticaret sitenizi sadece trafiğe değil, satışa dönüştüren stratejilerle
                büyütüyorum. Bugüne kadar <strong>30&apos;dan fazla e-ticaret markasının</strong>{' '}
                organik gelirlerini ölçeklemesine yardımcı oldum. Veri odaklı SEO yaklaşımlarıyla
                sepet dönüşümlerinizi ve organik pazar payınızı artırıyorum.
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
                  alt="Kerem Gezergün - Senior E-Ticaret SEO Danışmanı, profesyonel portre fotoğrafı"
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
                Halihazırda <strong>BusinessUp!</strong> ajansında Senior E-Ticaret SEO Danışmanı
                olarak görev yapıyorum. Aynı zamanda sektördeki bilgi birikimimi paylaşmak amacıyla
                kurduğum <strong>&ldquo;Sepetteki SEO&rdquo;</strong> podcast serisinin kurucusu
                ve sunucusuyum.
              </p>
            </aside>
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
              <h3>Best Low Budget Campaign (SEO)</h3>
              <p>
                Ekibim ile birlikte <strong>&ldquo;Best Low Budget Campaign (SEO)&rdquo;</strong>{' '}
                kategorisinde finale kaldık.
              </p>
              <span className="award-year">Finalist</span>
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
            <li className="project-card">
              <span className="project-badge-secondary">SaaS Ürünü</span>
              <h3>Blog-Ürün Embed</h3>
              <p>
                Blog yazılarınızı ürün satışına çeviren AI destekli akıllı widget. Yazınıza embed ekleyin, semantik eşleşmeyle alakalı ürünleri okuyucularınıza öneren bir keşif deneyimi sunun.
              </p>
              <ul className="project-tags" aria-label="Etiketler">
                <li>SaaS</li>
                <li>AI/ML</li>
                <li>E-ticaret</li>
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

      {/* Knotvo Product Section */}
      <section className="knotvo" aria-labelledby="knotvo-home-heading">
        <div className="knotvo-section alt">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Yeni Ürün · Mac</span>
              <h2 id="knotvo-home-heading">Knotvo — Site Hızı Analiz Aracı</h2>
            </div>
            <div className="k-feature" style={{ marginTop: 8 }}>
              <div className="k-txt">
                <p>
                  Geliştirdiğim <strong>Knotvo</strong>, tarayıcının ağ kaydını (HAR) ve canlı
                  ölçümü tek ekranda toplayıp sitenin neden yavaş olduğunu sade bir yapılacaklar
                  listesine çeviren, Mac için tasarlanmış bir site hızı analiz aracı. Karmaşık
                  skorlar değil, ne yapman gerektiği.
                </p>
                <ul className="k-flist">
                  <li>HAR analizi tamamen yerel — hiçbir şey buluta gitmez</li>
                  <li>Lab (Lighthouse) ve saha (CrUX) verisi yan yana</li>
                  <li>Hesap yok, kuyruk yok, abonelik yok</li>
                  <li>Müşteriye gönderilebilir PDF rapor</li>
                </ul>
                <Link
                  href="/knotvo"
                  className="btn btn-primary btn-large"
                  style={{ marginTop: 20 }}
                  aria-label="Knotvo detay sayfasına git"
                >
                  Knotvo&apos;yu Keşfet
                </Link>
              </div>
              <div className="k-shot">
                <Image
                  src={knotvoShot}
                  alt="Knotvo genel bakış ekranı: performans skoru ve öncelikli darboğazlar"
                  placeholder="blur"
                  sizes="(max-width: 820px) 100vw, 520px"
                />
              </div>
            </div>
          </div>
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

      {/* FAQ Section */}
      <section id="sss" className="faq-section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">SSS</span>
            <h2 id="faq-heading">Sıkça Sorulan Sorular</h2>
          </div>
          <div className="faq-list">
            {faqs.map(({ q, a }) => (
              <details key={q} className="faq-item">
                <summary className="faq-question">
                  <span>{q}</span>
                  <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
                </summary>
                <div className="faq-answer">{a}</div>
              </details>
            ))}
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
