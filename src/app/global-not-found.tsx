import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { fontVariables } from '@/lib/fonts';

// Rendered for URLs that match no route at all. Because the app has two root
// layouts ((tr) and (en)), neither group's not-found.tsx can wrap this case —
// so this file owns the whole document. Turkish is the site default, with a
// visible path to the English home page.
export const metadata: Metadata = {
  title: '404 – Sayfa Bulunamadı | Kerem Gezergün',
  description: 'Aradığınız sayfa bulunamadı.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function GlobalNotFound() {
  return (
    <html lang="tr" className={fontVariables}>
      <body>
        <main id="main-content" role="main">
          <section
            className="page-header"
            style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}
          >
            <div className="container" style={{ textAlign: 'center' }}>
              <h1>404</h1>
              <p style={{ marginTop: '16px' }}>Aradığınız sayfa bulunamadı.</p>
              <p lang="en" style={{ marginTop: '8px' }}>
                The page you are looking for could not be found.
              </p>
              <div
                style={{
                  marginTop: '32px',
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Link href="/" className="btn btn-primary btn-large">
                  Ana Sayfaya Dön
                </Link>
                <Link href="/en" className="btn btn-outline btn-large" hrefLang="en">
                  English home
                </Link>
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
