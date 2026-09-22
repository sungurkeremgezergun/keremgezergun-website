import Image from 'next/image';
import Link from 'next/link';
import { posts } from '@/lib/blog/posts';

/**
 * The other published posts, newest first, under an article. Every article
 * renders this with its own slug, so a new post appears on all of them the
 * moment it is added to `posts`.
 */
export default function RelatedPosts({ current }: { current: string }) {
  const related = posts.filter((post) => post.slug !== current);
  if (related.length === 0) return null;

  return (
    <section className="related-posts" aria-labelledby="related-posts-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Blog</span>
          <h2 id="related-posts-heading">İlgili Yazılar</h2>
        </div>
        <ul className="blog-page-grid" aria-label="İlgili blog yazıları">
          {related.map((post) => (
            <li key={post.slug}>
              <article className="blog-card-large">
                <Link href={`/${post.slug}`} style={{ display: 'block', height: '100%' }}>
                  <div className="blog-image">
                    <Image src={post.cover} alt="" width={1200} height={630} sizes="(max-width: 768px) 100vw, 560px" />
                  </div>
                  <div className="blog-content">
                    <span className="blog-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <ul className="blog-meta" aria-label="Blog yazısı bilgileri">
                      <li className="meta-item">Rehber</li>
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
