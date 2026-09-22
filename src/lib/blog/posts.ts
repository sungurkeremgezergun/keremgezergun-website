/**
 * The published blog posts, one entry per article route.
 *
 * Each article page still owns its own metadata; this list is what the other
 * surfaces read — the related-posts block under every article and the cover
 * image each card and share preview shows. Add a row when a post is published.
 */
export type BlogPost = {
  /** Route segment; the page lives at `/${slug}`. */
  slug: string;
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
    slug: 'seo-uyumlu-kategori-agaci',
    title: 'SEO Uyumlu Kategori Ağacı Nasıl Oluşturulur?',
    description:
      'Semrush, Search Console, Google Ads ve SERP analiziyle hangi e-ticaret kategorilerinin açılması gerektiğini belirleyin ve SEO uyumlu kategori ağacı oluşturun.',
    category: 'E-ticaret SEO',
    published: '2026-09-22',
    publishedLabel: '22 Eylül 2026',
    cover: '/images/blog/seo-uyumlu-kategori-agaci-og.png',
  },
  {
    slug: 'e-ticaret-seo',
    title: 'E-Ticaret SEO Nedir? Kapsamlı E-Ticaret SEO Rehberi',
    description:
      'E-ticaret SEO nedir, nasıl yapılır? Kategori, ürün, filtre, teknik SEO, Merchant Center, GEO ve organik gelir optimizasyonunu kapsamlı şekilde öğrenin.',
    category: 'E-ticaret SEO',
    published: '2026-09-14',
    publishedLabel: '14 Eylül 2026',
    cover: '/images/blog/e-ticaret-seo-og.png',
  },
  {
    slug: 'turkiyenin-en-iyi-seo-uzmanlari',
    title: 'Türkiye’nin En İyi SEO Uzmanları: 2026 SEO & GEO Listesi',
    description:
      'Türkiye’nin öne çıkan SEO uzmanlarını teknik SEO, e-ticaret, GEO, AEO, AI Search ve uluslararası SEO deneyimlerine göre karşılaştırın.',
    category: 'SEO',
    published: '2026-09-14',
    publishedLabel: '14 Eylül 2026',
    cover: '/images/blog/turkiyenin-en-iyi-seo-uzmanlari-og.png',
  },
];

export function postBySlug(slug: string): BlogPost {
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) throw new Error(`Unknown blog post: ${slug}`);
  return post;
}
