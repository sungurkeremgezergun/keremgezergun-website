import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';
import { alternateMetadata } from '@/lib/i18n';
import { breadcrumbSchema } from '@/lib/schema/page';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Kerem Gezergün - SEO Blog. E-ticaret SEO, kategori mimarisi, teknik SEO ve GEO üzerine rehberler.',
  alternates: alternateMetadata('/blog', '/en/seo-blog'),
  openGraph: {
    title: 'Blog | Kerem Gezergün',
    description: 'SEO Blog - E-ticaret SEO, kategori mimarisi, teknik SEO ve GEO rehberleri.',
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
    description: 'SEO Blog - E-ticaret SEO, kategori mimarisi, teknik SEO ve GEO rehberleri.',
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
  description: 'E-ticaret SEO, kategori mimarisi, teknik SEO ve GEO rehberleri.',
  url: 'https://www.keremgezergun.com/blog',
  author: {
    '@type': 'Person',
    '@id': 'https://www.keremgezergun.com/#person',
    name: 'Sungur Kerem Gezergün',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'SEO Uyumlu Kategori Ağacı Nasıl Oluşturulur?',
        url: 'https://www.keremgezergun.com/seo-uyumlu-kategori-agaci',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'E-Ticaret SEO Nedir? Kapsamlı E-Ticaret SEO Rehberi',
        url: 'https://www.keremgezergun.com/e-ticaret-seo',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Türkiye’nin En İyi SEO Uzmanları: 2026 SEO & GEO Listesi',
        url: 'https://www.keremgezergun.com/turkiyenin-en-iyi-seo-uzmanlari',
      },
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
                <Link href="/seo-uyumlu-kategori-agaci" style={{ display: 'block', height: '100%' }}>
                  <div className="blog-image">
                    <Image
                      src="/images/blog/seo-uyumlu-kategori-agaci-og.png"
                      alt=""
                      width={1200}
                      height={630}
                      sizes="(max-width: 768px) 100vw, 560px"
                    />
                  </div>
                  <div className="blog-content">
                    <span className="blog-category">E-ticaret SEO</span>
                    <h3>SEO Uyumlu Kategori Ağacı Nasıl Oluşturulur?</h3>
                    <p>
                      Semrush, Search Console, Google Ads ve SERP analiziyle hangi e-ticaret
                      kategorilerinin açılması gerektiğini belirleyin ve SEO uyumlu kategori ağacı
                      oluşturun.
                    </p>
                    <ul className="blog-meta" aria-label="Blog yazısı bilgileri">
                      <li className="meta-item">Rehber</li>
                      <li className="meta-item">22 Eylül 2026</li>
                    </ul>
                  </div>
                </Link>
              </article>
            </li>

            <li>
              <article className="blog-card-large">
                <Link href="/e-ticaret-seo" style={{ display: 'block', height: '100%' }}>
                  <div className="blog-image">
                    <Image
                      src="/images/blog/e-ticaret-seo-og.png"
                      alt=""
                      width={1200}
                      height={630}
                      sizes="(max-width: 768px) 100vw, 560px"
                    />
                  </div>
                  <div className="blog-content">
                    <span className="blog-category">E-ticaret SEO</span>
                    <h3>E-Ticaret SEO Nedir? Kapsamlı E-Ticaret SEO Rehberi</h3>
                    <p>
                      E-ticaret SEO nedir, nasıl yapılır? Kategori, ürün, filtre, teknik SEO,
                      Merchant Center, GEO ve organik gelir optimizasyonunu kapsamlı şekilde
                      öğrenin.
                    </p>
                    <ul className="blog-meta" aria-label="Blog yazısı bilgileri">
                      <li className="meta-item">Kapsamlı Rehber</li>
                      <li className="meta-item">14 Eylül 2026</li>
                    </ul>
                  </div>
                </Link>
              </article>
            </li>

            <li>
              <article className="blog-card-large">
                <Link
                  href="/turkiyenin-en-iyi-seo-uzmanlari"
                  style={{ display: 'block', height: '100%' }}
                >
                  <div className="blog-image">
                    <Image
                      src="/images/blog/turkiyenin-en-iyi-seo-uzmanlari-og.png"
                      alt=""
                      width={1200}
                      height={630}
                      sizes="(max-width: 768px) 100vw, 560px"
                    />
                  </div>
                  <div className="blog-content">
                    <span className="blog-category">SEO</span>
                    <h3>Türkiye’nin En İyi SEO Uzmanları: 2026 SEO & GEO Listesi</h3>
                    <p>
                      Türkiye’nin öne çıkan SEO uzmanlarını teknik SEO, e-ticaret, GEO, AEO, AI
                      Search ve uluslararası SEO deneyimlerine göre karşılaştırın.
                    </p>
                    <ul className="blog-meta" aria-label="Blog yazısı bilgileri">
                      <li className="meta-item">Kapsamlı Rehber</li>
                      <li className="meta-item">14 Eylül 2026</li>
                    </ul>
                  </div>
                </Link>
              </article>
            </li>
          </ul>

        </div>
      </section>
    </main>
  );
}
