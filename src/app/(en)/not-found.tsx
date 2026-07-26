import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 – Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: '404 – Page Not Found | Kerem Gezergün',
    description: 'The page you are looking for could not be found.',
    url: 'https://www.keremgezergun.com/en',
    siteName: 'Kerem Gezergün',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: '404 – Page Not Found',
    description: 'The page you are looking for could not be found.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
  },
};

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} lang="en">
      <section className="page-header" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>404</h1>
          <p style={{ marginTop: '16px' }}>The page you are looking for could not be found.</p>
          <Link href="/en" className="btn btn-primary btn-large" style={{ marginTop: '32px' }}>
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
