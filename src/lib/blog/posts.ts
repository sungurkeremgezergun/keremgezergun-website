import type { Language } from '@/lib/i18n';

/**
 * The published blog posts, one entry per article route in each language.
 *
 * Each article page still owns its own metadata; this list is what the other
 * surfaces read — the related-posts block under every article and the cover
 * image each card and share preview shows. Add a row when a post is published.
 */
export type BlogPost = {
  language: Language;
  /** Route path, e.g. `/e-ticaret-seo` or `/en/ecommerce-seo`. */
  path: string;
  title: string;
  description: string;
  category: string;
  /** ISO date, the same value the page passes as `datePublished`. */
  published: string;
  publishedLabel: string;
  /** 1200x630 card under public/, used as og:image and as the list cover. */
  cover: string;
};

export const posts: BlogPost[] = [
  {
    language: 'tr',
    path: '/seo-uyumlu-kategori-agaci',
    title: 'SEO Uyumlu Kategori Ağacı Nasıl Oluşturulur?',
    description:
      'Semrush, Search Console, Google Ads ve SERP analiziyle hangi e-ticaret kategorilerinin açılması gerektiğini belirleyin ve SEO uyumlu kategori ağacı oluşturun.',
    category: 'E-ticaret SEO',
    published: '2026-09-22',
    publishedLabel: '22 Eylül 2026',
    cover: '/images/blog/seo-uyumlu-kategori-agaci-og.png',
  },
  {
    language: 'tr',
    path: '/e-ticaret-seo',
    title: 'E-Ticaret SEO Nedir? Kapsamlı E-Ticaret SEO Rehberi',
    description:
      'E-ticaret SEO nedir, nasıl yapılır? Kategori, ürün, filtre, teknik SEO, Merchant Center, GEO ve organik gelir optimizasyonunu kapsamlı şekilde öğrenin.',
    category: 'E-ticaret SEO',
    published: '2026-09-14',
    publishedLabel: '14 Eylül 2026',
    cover: '/images/blog/e-ticaret-seo-og.png',
  },
  {
    language: 'tr',
    path: '/turkiyenin-en-iyi-seo-uzmanlari',
    title: 'Türkiye’nin En İyi SEO Uzmanları: 2026 SEO & GEO Listesi',
    description:
      'Türkiye’nin öne çıkan SEO uzmanlarını teknik SEO, e-ticaret, GEO, AEO, AI Search ve uluslararası SEO deneyimlerine göre karşılaştırın.',
    category: 'SEO',
    published: '2026-09-14',
    publishedLabel: '14 Eylül 2026',
    cover: '/images/blog/turkiyenin-en-iyi-seo-uzmanlari-og.png',
  },
  {
    language: 'en',
    path: '/en/seo-friendly-category-tree',
    title: 'How to Build an SEO-Friendly Category Tree',
    description:
      'Use Semrush, Search Console, Google Ads and SERP analysis to decide which e-commerce categories to open, and build a category tree that matches search demand.',
    category: 'E-commerce SEO',
    published: '2026-09-22',
    publishedLabel: '22 September 2026',
    cover: '/images/blog/seo-friendly-category-tree-og.png',
  },
  {
    language: 'en',
    path: '/en/ecommerce-seo',
    title: 'What Is E-commerce SEO? The Complete E-commerce SEO Guide',
    description:
      'What e-commerce SEO is and how to do it: category, product and filter pages, technical SEO, Merchant Center, GEO and organic revenue optimization, in depth.',
    category: 'E-commerce SEO',
    published: '2026-09-14',
    publishedLabel: '14 September 2026',
    cover: '/images/blog/ecommerce-seo-og.png',
  },
  {
    language: 'en',
    path: '/en/best-seo-experts-in-turkey',
    title: 'Türkiye’s Best SEO Experts: The 2026 SEO & GEO List',
    description:
      'Compare Türkiye’s leading SEO specialists by their technical SEO, e-commerce, GEO, AEO, AI Search and international SEO experience.',
    category: 'SEO',
    published: '2026-09-14',
    publishedLabel: '14 September 2026',
    cover: '/images/blog/best-seo-experts-in-turkey-og.png',
  },
];

export function postsIn(language: Language): BlogPost[] {
  return posts.filter((post) => post.language === language);
}

export function postByPath(path: string): BlogPost {
  const post = posts.find((entry) => entry.path === path);
  if (!post) throw new Error(`Unknown blog post: ${path}`);
  return post;
}
