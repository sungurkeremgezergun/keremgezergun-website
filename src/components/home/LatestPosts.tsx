import Image from 'next/image';
import Link from 'next/link';
import type { Language } from '@/lib/i18n';
import { postsIn } from '@/lib/blog/posts';

const copy = {
  tag: { tr: 'Blog', en: 'Blog' },
  heading: { tr: 'Son Yazılar', en: 'Latest Posts' },
  list: { tr: 'Son blog yazıları', en: 'Latest blog posts' },
  meta: { tr: 'Blog yazısı bilgileri', en: 'Post details' },
  kind: { tr: 'Rehber', en: 'Guide' },
  all: { tr: 'Tüm yazılar', en: 'All posts' },
  allHref: { tr: '/blog', en: '/en/seo-blog' },
};

/** The three newest posts from the registry; the same card as the blog index. */
export default function LatestPosts({ language }: { language: Language }) {
  const posts = postsIn(language).slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="latest-posts" aria-labelledby="latest-posts-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{copy.tag[language]}</span>
          <h2 id="latest-posts-heading">{copy.heading[language]}</h2>
        </div>
        <ul className="blog-page-grid latest-posts-grid" aria-label={copy.list[language]}>
          {posts.map((post) => (
            <li key={post.path}>
              <article className="blog-card-large">
                <Link href={post.path} style={{ display: 'block', height: '100%' }}>
                  <div className="blog-image">
                    <Image src={post.cover} alt="" width={1200} height={630} sizes="(max-width: 768px) 100vw, 380px" />
                  </div>
                  <div className="blog-content">
                    <span className="blog-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <ul className="blog-meta" aria-label={copy.meta[language]}>
                      <li className="meta-item">{copy.kind[language]}</li>
                      <li className="meta-item">{post.publishedLabel}</li>
                    </ul>
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
        <div className="section-cta">
          <Link className="btn btn-outline" href={copy.allHref[language]}>
            {copy.all[language]}
          </Link>
        </div>
      </div>
    </section>
  );
}
