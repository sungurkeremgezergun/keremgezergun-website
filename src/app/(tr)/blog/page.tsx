import type { Metadata } from 'next';
import { jsonLdSafe } from '@/lib/jsonLd';
import { alternateMetadata } from '@/lib/i18n';
import { breadcrumbSchema } from '@/lib/schema/page';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Kerem Gezergün - SEO Blog. Teknik SEO, GEO, Site İçi SEO ve Backlink rehberleri.',
  keywords: ['SEO Rehberi', 'Teknik SEO', 'GEO', 'Backlink', 'Site İçi SEO'],
  alternates: alternateMetadata('/blog', '/en/seo-blog'),
  openGraph: {
    title: 'Blog | Kerem Gezergün',
    description: 'SEO Blog - Teknik SEO, GEO, Site İçi SEO ve Backlink rehberleri.',
    url: 'https://www.keremgezergun.com/blog',
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Kerem Gezergün SEO Blog',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Kerem Gezergün',
    description: 'SEO Blog - Teknik SEO, GEO, Site İçi SEO ve Backlink rehberleri.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/images/kerem-gezergun.jpg'],
  },
};

const breadcrumb = breadcrumbSchema('tr', { name: 'Blog', url: 'https://www.keremgezergun.com/blog' });

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'SEO Blog - Kerem Gezergün',
  description: 'Teknik SEO, GEO, Site İçi SEO ve Backlink rehberleri.',
  url: 'https://www.keremgezergun.com/blog',
  author: {
    '@type': 'Person',
    '@id': 'https://www.keremgezergun.com/#person',
    name: 'Sungur Kerem Gezergün',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Teknik SEO Rehberi' },
      { '@type': 'ListItem', position: 2, name: 'GEO Rehberi' },
      { '@type': 'ListItem', position: 3, name: 'Site İçi SEO Rehberi' },
      { '@type': 'ListItem', position: 4, name: 'Backlink Rehberi' },
    ],
  },
};

export default function BlogPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(collectionPageSchema) }}
      />

      {/* Page Header */}
      <section className="page-header" aria-labelledby="page-title">
        <div className="container">
          <span className="section-tag">Blog</span>
          <h1 id="page-title">SEO Rehberleri</h1>
          <p>SEO ve dijital pazarlama konularında kapsamlı rehberler ve stratejiler.</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="page-content" aria-labelledby="blog-list-heading">
        <div className="container">
          <h2 id="blog-list-heading" className="visually-hidden">
            Blog Yazıları
          </h2>
          <ul className="blog-page-grid" aria-label="Blog yazıları listesi">
            <li>
              <article className="blog-card-large">
                <div className="blog-image placeholder">
                  <span className="coming-soon-badge">Yakında</span>
                </div>
                <div className="blog-content">
                  <span className="blog-category">Teknik SEO</span>
                  <h3>Teknik SEO Rehberi</h3>
                  <p>
                    Site hızı optimizasyonu, crawlability, indexability, canonical etiketleri,
                    robots.txt, sitemap yönetimi ve teknik SEO denetimleri hakkında kapsamlı
                    rehber.
                  </p>
                  <ul className="blog-meta" aria-label="Blog yazısı bilgileri">
                    <li className="meta-item">Kapsamlı Rehber</li>
                    <li className="meta-item">Yakında Yayında</li>
                  </ul>
                </div>
              </article>
            </li>

            <li>
              <article className="blog-card-large">
                <div className="blog-image placeholder">
                  <span className="coming-soon-badge">Yakında</span>
                </div>
                <div className="blog-content">
                  <span className="blog-category">GEO</span>
                  <h3>GEO Rehberi</h3>
                  <p>
                    Generative Engine Optimization - Yapay zeka arama motorları için optimizasyon.
                    ChatGPT, Perplexity, Claude ve diğer AI araçlarında görünürlük stratejileri.
                  </p>
                  <ul className="blog-meta" aria-label="Blog yazısı bilgileri">
                    <li className="meta-item">Yeni Trend</li>
                    <li className="meta-item">Yakında Yayında</li>
                  </ul>
                </div>
              </article>
            </li>

            <li>
              <article className="blog-card-large">
                <div className="blog-image placeholder">
                  <span className="coming-soon-badge">Yakında</span>
                </div>
                <div className="blog-content">
                  <span className="blog-category">On-Page SEO</span>
                  <h3>Site İçi SEO Rehberi</h3>
                  <p>
                    İçerik optimizasyonu, meta etiketler, başlık yapısı (H1-H6), internal
                    linking, görsel optimizasyonu ve kullanıcı deneyimi odaklı SEO stratejileri.
                  </p>
                  <ul className="blog-meta" aria-label="Blog yazısı bilgileri">
                    <li className="meta-item">Temel Rehber</li>
                    <li className="meta-item">Yakında Yayında</li>
                  </ul>
                </div>
              </article>
            </li>

            <li>
              <article className="blog-card-large">
                <div className="blog-image placeholder">
                  <span className="coming-soon-badge">Yakında</span>
                </div>
                <div className="blog-content">
                  <span className="blog-category">Off-Page SEO</span>
                  <h3>Backlink Rehberi</h3>
                  <p>
                    Kaliteli backlink stratejileri, link building teknikleri, anchor text
                    optimizasyonu, toxic link analizi ve off-page SEO taktikleri.
                  </p>
                  <ul className="blog-meta" aria-label="Blog yazısı bilgileri">
                    <li className="meta-item">İleri Seviye</li>
                    <li className="meta-item">Yakında Yayında</li>
                  </ul>
                </div>
              </article>
            </li>
          </ul>

        </div>
      </section>
    </main>
  );
}
