import type { Metadata } from 'next';
import { jsonLdSafe } from '@/lib/jsonLd';
import { englishAlternateMetadata } from '@/lib/i18n';
import { breadcrumbSchema } from '@/lib/schema/page';

const PAGE_URL = 'https://www.keremgezergun.com/en/seo-blog';

export const metadata: Metadata = {
  title: 'SEO Blog',
  description:
    'Kerem Gezergün — SEO blog. Guides on technical SEO, GEO, on-page SEO and backlinks.',
  keywords: ['SEO guide', 'Technical SEO', 'GEO', 'Backlinks', 'On-page SEO'],
  alternates: englishAlternateMetadata('/blog', '/en/seo-blog'),
  openGraph: {
    title: 'SEO Blog | Kerem Gezergün',
    description: 'SEO blog — guides on technical SEO, GEO, on-page SEO and backlinks.',
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
    description: 'SEO blog — guides on technical SEO, GEO, on-page SEO and backlinks.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/images/kerem-gezergun.jpg'],
  },
};

// Mirrors the Turkish /blog line-up one to one so the hreflang pair covers the
// same four guides.
const posts = [
  {
    category: 'Technical SEO',
    title: 'The Technical SEO Guide',
    text: 'A comprehensive guide to site speed, crawlability, indexability, canonical tags, robots.txt, sitemap management and technical SEO audits.',
    meta: 'Comprehensive guide',
  },
  {
    category: 'GEO',
    title: 'The GEO Guide',
    text: 'Generative Engine Optimization — optimizing for AI search engines. Visibility strategies for ChatGPT, Perplexity, Claude and other AI tools.',
    meta: 'Emerging trend',
  },
  {
    category: 'On-Page SEO',
    title: 'The On-Page SEO Guide',
    text: 'Content optimization, meta tags, heading structure (H1–H6), internal linking, image optimization and user-experience-led SEO strategy.',
    meta: 'Core guide',
  },
  {
    category: 'Off-Page SEO',
    title: 'The Backlink Guide',
    text: 'Quality backlink strategy, link building techniques, anchor text optimization, toxic link analysis and off-page SEO tactics.',
    meta: 'Advanced',
  },
];

const breadcrumb = breadcrumbSchema('en', { name: 'SEO Blog', url: PAGE_URL });

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'SEO Blog - Kerem Gezergün',
  description: 'Guides on technical SEO, GEO, on-page SEO and backlinks.',
  url: PAGE_URL,
  inLanguage: 'en',
  author: {
    '@type': 'Person',
    '@id': 'https://www.keremgezergun.com/#person',
    name: 'Sungur Kerem Gezergün',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: post.title,
    })),
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
            {posts.map((post) => (
              <li key={post.title}>
                <article className="blog-card-large">
                  <div className="blog-image placeholder">
                    <span className="coming-soon-badge">Coming soon</span>
                  </div>
                  <div className="blog-content">
                    <span className="blog-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.text}</p>
                    <ul className="blog-meta" aria-label="Post details">
                      <li className="meta-item">{post.meta}</li>
                      <li className="meta-item">Publishing soon</li>
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
