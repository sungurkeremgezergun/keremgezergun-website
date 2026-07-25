import type { Metadata } from 'next';
import { jsonLdSafe } from '@/lib/jsonLd';
import { alternateMetadata } from '@/lib/i18n';
import { contact } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Sektörel Projeler',
  description:
    'Kerem Gezergün - Sektörel Projeler. Üniversite konuşmaları, dernek etkinlikleri ve podcast çalışmaları.',
  keywords: ['SEO Uzmanı', 'Konuşmacı', 'Podcast', 'Dijital Pazarlama'],
  alternates: alternateMetadata('/sektorel-projeler', '/en/industry-projects'),
  openGraph: {
    title: 'Sektörel Projeler | Kerem Gezergün',
    description: 'Üniversite konuşmaları, dernek etkinlikleri ve podcast çalışmaları.',
    url: 'https://www.keremgezergun.com/sektorel-projeler',
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Kerem Gezergün - Sektörel Projeler',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sektörel Projeler | Kerem Gezergün',
    description: 'Üniversite konuşmaları, dernek etkinlikleri ve podcast çalışmaları.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/images/kerem-gezergun.jpg'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Ana Sayfa',
      item: 'https://www.keremgezergun.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Sektörel Projeler',
      item: 'https://www.keremgezergun.com/sektorel-projeler',
    },
  ],
};

export default function SektorelProjelerPage() {
  return (
    <main id="main-content" role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumbSchema) }}
      />

      {/* Page Header */}
      <section className="page-header" aria-labelledby="page-title">
        <div className="container">
          <span className="section-tag">Sektörel Projeler</span>
          <h1 id="page-title">Konuşmacı &amp; Proje Çalışmalarım</h1>
          <p>
            Üniversiteler, dernekler ve sektörel etkinliklerde SEO ve dijital pazarlama
            alanında deneyimlerimi paylaşıyorum.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="page-content" aria-labelledby="projects-heading">
        <div className="container">
          <h2 id="projects-heading" className="visually-hidden">
            Projeler
          </h2>
          <ul className="projects-list" aria-label="Proje listesi">

            {/* Ahi Evran Üniversitesi */}
            <li>
              <article className="project-detail-card featured">
                <span className="project-detail-badge">Zirve Organizasyonu</span>
                <div className="project-detail-content">
                  <h3>Ahi Evran Üniversitesi Dijital Pazarlama Zirveleri</h3>
                  <p>
                    Ahi Evran Üniversitesi ile birlikte 2 adet dijital pazarlama zirvesi
                    düzenledim. Zirvelerde sektörün önde gelen isimleri konuşmacı olarak yer
                    aldı ve 800&apos;den fazla katılımcıya ulaştık.
                  </p>
                  <p>
                    Zirveler kapsamında SEO, sosyal medya pazarlama, içerik stratejisi, e-ticaret
                    ve dijital reklamcılık konularında kapsamlı oturumlar gerçekleştirildi.
                  </p>
                  <ul className="project-meta" aria-label="Proje detayları">
                    <li className="meta-item">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        width="18"
                        height="18"
                        aria-hidden="true"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      800+ Katılımcı
                    </li>
                    <li className="meta-item">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        width="18"
                        height="18"
                        aria-hidden="true"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Kırşehir
                    </li>
                  </ul>
                  <ul className="project-tags" aria-label="Etiketler">
                    <li>Zirve</li>
                    <li>Dijital Pazarlama</li>
                    <li>Üniversite</li>
                  </ul>
                </div>
            </article>
            </li>

            {/* Ücretsiz E-Ticaret Eğitimi */}
            <li>
              <article className="project-detail-card">
                <span className="project-detail-badge">Eğitim Programı</span>
                <div className="project-detail-content">
                  <h3>Ücretsiz E-Ticaret Eğitimi</h3>
                  <p>
                    Gençlere yönelik kapsamlı ve tamamen ücretsiz e-ticaret eğitim programı
                    organizasyonu. E-ticaret&apos;e başlamak isteyen gençler için adım adım
                    rehberlik ve mentörlük sağladık.
                  </p>
                  <p>
                    Eğitim programı kapsamında e-ticaret temelleri, ürün seçimi, fiyatlandırma
                    stratejileri, pazaryeri yönetimi ve SEO konuları işlendi.
                  </p>
                  <ul className="project-meta" aria-label="Proje detayları">
                    <li className="meta-item">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        width="18"
                        height="18"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      65+ Saat Eğitim
                    </li>
                  </ul>
                  <ul className="project-tags" aria-label="Etiketler">
                    <li>E-Ticaret</li>
                    <li>Ücretsiz Eğitim</li>
                    <li>Mentörlük</li>
                  </ul>
                </div>
              </article>
            </li>

            {/* Üsküdar Üniversitesi */}
            <li>
              <article className="project-detail-card">
                <span className="project-detail-badge">Konuşmacı</span>
                <div className="project-detail-content">
                  <h3>Üsküdar Üniversitesi</h3>
                  <p>
                    Üsküdar Üniversitesi&apos;nde SEO ve dijital pazarlama alanında konuşmacı
                    olarak yer aldım. Öğrencilere e-ticaret SEO stratejileri, teknik SEO temelleri
                    ve kariyer tavsiyeleri hakkında bilgiler aktardım.
                  </p>
                  <ul className="project-meta" aria-label="Proje detayları">
                    <li className="meta-item">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        width="18"
                        height="18"
                        aria-hidden="true"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      İstanbul
                    </li>
                    <li className="meta-item">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        width="18"
                        height="18"
                        aria-hidden="true"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      Eğitim Sektörü
                    </li>
                  </ul>
                  <ul className="project-tags" aria-label="Etiketler">
                    <li>Eğitim</li>
                    <li>SEO</li>
                    <li>Konuşmacı</li>
                  </ul>
                </div>
              </article>
            </li>

            {/* Türkiye Psikologlar Derneği */}
            <li>
              <article className="project-detail-card">
                <span className="project-detail-badge">Konuşmacı</span>
                <div className="project-detail-content">
                  <h3>Türkiye Psikologlar Derneği</h3>
                  <p>
                    Türkiye Psikologlar Derneği etkinliğinde dijital görünürlük ve SEO
                    konularında konuşmacı olarak katıldım. Profesyonellerin online varlıklarını
                    güçlendirmeleri için stratejiler paylaştım.
                  </p>
                  <ul className="project-meta" aria-label="Proje detayları">
                    <li className="meta-item">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        width="18"
                        height="18"
                        aria-hidden="true"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      Dernek Etkinliği
                    </li>
                  </ul>
                  <ul className="project-tags" aria-label="Etiketler">
                    <li>Dernek</li>
                    <li>Dijital Görünürlük</li>
                    <li>Konuşmacı</li>
                  </ul>
                </div>
              </article>
            </li>

            {/* Sepetteki SEO */}
            <li>
              <article className="project-detail-card featured">
                <span className="project-detail-badge">Podcast</span>
                <div className="project-detail-content">
                  <h3>Sepetteki SEO</h3>
                  <p>
                    E-ticaret SEO ve yapay zeka konularını ele aldığımız podcast serisi. Simay
                    Özpilavcı ile birlikte e-ticaret sitelerinin arama motoru yolculuğunu, AI ve
                    SEO ilişkisini ele alıyoruz.
                  </p>
                  <ul className="project-meta" aria-label="Proje detayları">
                    <li className="meta-item">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        width="18"
                        height="18"
                        aria-hidden="true"
                      >
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" y1="19" x2="12" y2="23" />
                        <line x1="8" y1="23" x2="16" y2="23" />
                      </svg>
                      Aktif Podcast
                    </li>
                  </ul>
                  <ul className="project-tags" aria-label="Etiketler">
                    <li>Podcast</li>
                    <li>E-ticaret SEO</li>
                    <li>AI</li>
                  </ul>
                  <a
                    href="https://www.youtube.com/@keremgezergun"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="btn btn-primary"
                    style={{ marginTop: 20 }}
                    aria-label="Sepetteki SEO Podcast'i YouTube'da izle (yeni sekmede açılır)"
                  >
                    YouTube&apos;da İzle
                  </a>
                </div>
              </article>
            </li>

          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading">
            Etkinliğinizde Konuşmacı Olarak Yer Almamı İster misiniz?
          </h2>
          <p>
            SEO, dijital pazarlama ve e-ticaret konularında deneyimlerimi paylaşmaktan
            mutluluk duyarım.
          </p>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn btn-primary btn-large"
            aria-label="WhatsApp’tan mesaj gönder (yeni sekmede açılır)"
          >
            WhatsApp’tan Yazın
          </a>
        </div>
      </section>
    </main>
  );
}
