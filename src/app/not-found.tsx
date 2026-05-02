import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 – Sayfa Bulunamadı',
  description: 'Aradığınız sayfa bulunamadı.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: '404 – Sayfa Bulunamadı | Kerem Gezergün',
    description: 'Aradığınız sayfa bulunamadı.',
    url: 'https://www.keremgezergun.com/',
    siteName: 'Kerem Gezergün',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: '404 – Sayfa Bulunamadı',
    description: 'Aradığınız sayfa bulunamadı.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
  },
};

export default function NotFound() {
  return (
    <main id="main-content" role="main">
      <section className="page-header" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>404</h1>
          <p style={{ marginTop: '16px' }}>
            Aradığınız sayfa bulunamadı.
          </p>
          <Link
            href="/"
            className="btn btn-primary btn-large"
            style={{ marginTop: '32px' }}
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </section>
    </main>
  );
}
