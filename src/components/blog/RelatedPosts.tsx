import Image from 'next/image';
import Link from 'next/link';
import type { Language } from '@/lib/i18n';
import { postsIn } from '@/lib/blog/posts';

/** How many posts the block lists. The blog index has the rest. */
const LIMIT = 3;

const copy = {
  heading: { tr: 'İlgili Yazılar', en: 'Related Posts' },
  all: { tr: 'Tüm yazılar', en: 'All posts' },
  allHref: { tr: '/blog', en: '/en/seo-blog' },
};

/**
 * The newest other posts in the same language, as a compact list under an
 * article. Every article renders this with its own path, so a new post
 * appears on all of them the moment it is added to `posts`.
 */
export default function RelatedPosts({ current, language = 'tr' }: { current: string; language?: Language }) {
  const related = postsIn(language)
    .filter((post) => post.path !== current)
    .slice(0, LIMIT);
  if (related.length === 0) return null;

  return (
    <section className="related-posts" aria-labelledby="related-posts-heading">
      <div className="container">
        <div className="related-posts-inner">
          <div className="related-posts-head">
            <h2 id="related-posts-heading">{copy.heading[language]}</h2>
            <Link href={copy.allHref[language]} className="related-posts-all">
              {copy.all[language]} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="related-posts-list">
            {related.map((post) => (
              <li key={post.path}>
                <Link href={post.path} className="related-post">
                  <Image src={post.cover} alt="" width={1200} height={630} sizes="128px" />
                  <span className="related-post-text">
                    <span className="related-post-meta">
                      {post.category} · {post.publishedLabel}
                    </span>
                    <span className="related-post-title">{post.title}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
