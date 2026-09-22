import Image from 'next/image';
import Link from 'next/link';
import type { Language } from '@/lib/i18n';
import { postsIn } from '@/lib/blog/posts';

const copy = {
  tag: { tr: 'Blog', en: 'Blog' },
  heading: { tr: 'İlgili Yazılar', en: 'Related Posts' },
  list: { tr: 'İlgili blog yazıları', en: 'Related blog posts' },
  meta: { tr: 'Blog yazısı bilgileri', en: 'Post details' },
  kind: { tr: 'Rehber', en: 'Guide' },
};

/**
 * The other published posts in the same language, newest first, under an
 * article. Every article renders this with its own path, so a new post
 * appears on all of them the moment it is added to `posts`.
 */
export default function RelatedPosts({ current, language = 'tr' }: { current: string; language?: Language }) {
  const related = postsIn(language).filter((post) => post.path !== current);
  if (related.length === 0) return null;

  return (
    <section className="related-posts" aria-labelledby="related-posts-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{copy.tag[language]}</span>
          <h2 id="related-posts-heading">{copy.heading[language]}</h2>
        </div>
        <ul className="blog-page-grid" aria-label={copy.list[language]}>
          {related.map((post) => (
            <li key={post.path}>
              <article className="blog-card-large">
                <Link href={post.path} style={{ display: 'block', height: '100%' }}>
                  <div className="blog-image">
                    <Image src={post.cover} alt="" width={1200} height={630} sizes="(max-width: 768px) 100vw, 560px" />
                  </div>
                  <div className="blog-content">
                    <span className="blog-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
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
      </div>
    </section>
  );
}
