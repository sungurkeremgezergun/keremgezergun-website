import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { postsIn } from '@/lib/blog/posts';
import { jsonLdSafe } from '@/lib/jsonLd';
import { englishAlternateMetadata } from '@/lib/i18n';
import { breadcrumbSchema } from '@/lib/schema/page';

const PAGE_URL = 'https://www.keremgezergun.com/en/seo-blog';

export const metadata: Metadata = {
  title: 'SEO Blog',
  description:
    'Kerem Gezergün — SEO blog. Guides on e-commerce SEO, category architecture, technical SEO and GEO.',
  alternates: englishAlternateMetadata('/blog', '/en/seo-blog'),
  openGraph: {
    title: 'SEO Blog | Kerem Gezergün',
    description: 'SEO blog — guides on e-commerce SEO, category architecture, technical SEO and GEO.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Kerem Gezergün SEO Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Blog | Kerem Gezergün',
    description: 'SEO blog — guides on e-commerce SEO, category architecture, technical SEO and GEO.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/images/kerem-gezergun.jpg'],
  },
};

/** Published English articles, newest first, from the shared registry. */
const published = postsIn('en');


const breadcrumb = breadcrumbSchema('en', { name: 'SEO Blog', url: PAGE_URL });

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'SEO Blog - Kerem Gezergün',
  description: 'Guides on e-commerce SEO, category architecture, technical SEO and GEO.',
  url: PAGE_URL,
  inLanguage: 'en',
  author: {
    '@type': 'Person',
    '@id': 'https://www.keremgezergun.com/#person',
    name: 'Sungur Kerem Gezergün',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      ...published.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: post.title,
        url: `https://www.keremgezergun.com${post.path}`,
      })),
    ],
  },
};

export default function EnglishBlogPage() {
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

      <section className="page-header" aria-labelledby="page-title">
        <div className="container">
          <span className="section-tag">SEO Blog</span>
          <h1 id="page-title">SEO Guides</h1>
          <p>
            In-depth guides and strategies across SEO and digital marketing, written for people who
            need clear priorities rather than surface-level advice.
          </p>
        </div>
      </section>

      <section className="page-content" aria-labelledby="blog-list-heading">
        <div className="container">
          <h2 id="blog-list-heading" className="visually-hidden">
            Blog posts
          </h2>
          <ul className="blog-page-grid" aria-label="SEO guides">
            {published.map((post) => (
              <li key={post.path}>
                <article className="blog-card-large">
                  <Link href={post.path} style={{ display: 'block', height: '100%' }}>
                    <div className="blog-image">
                      <Image
                        src={post.cover}
                        alt=""
                        width={1200}
                        height={630}
                        sizes="(max-width: 768px) 100vw, 560px"
                      />
                    </div>
                    <div className="blog-content">
                      <span className="blog-category">{post.category}</span>
                      <h3>{post.title}</h3>
                      <p>{post.description}</p>
                      <ul className="blog-meta" aria-label="Post details">
                        <li className="meta-item">Guide</li>
                        <li className="meta-item">{post.publishedLabel}</li>
                      </ul>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
