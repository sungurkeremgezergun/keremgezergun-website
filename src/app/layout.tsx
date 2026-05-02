import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { jsonLdSafe } from '@/lib/jsonLd';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.keremgezergun.com'),
  title: {
    default: 'Kerem Gezergün | SEO Uzmanı',
    template: '%s | Kerem Gezergün',
  },
  description:
    'Sungur Kerem Gezergün - E-ticaret SEO, Teknik SEO ve Organik Büyüme Stratejileri Uzmanı. MENA Search Awards Finalisti.',
  keywords: ['SEO Uzmanı', 'E-ticaret SEO', 'Teknik SEO', 'Organik Büyüme', 'İstanbul SEO'],
  authors: [{ name: 'Sungur Kerem Gezergün' }],
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    title: 'Kerem Gezergün | SEO Uzmanı',
    description: 'E-ticaret SEO, Teknik SEO ve Organik Büyüme Stratejileri Uzmanı',
    url: 'https://www.keremgezergun.com/',
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Kerem Gezergün - SEO Uzmanı',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kerem Gezergün | SEO Uzmanı',
    description: 'E-ticaret SEO, Teknik SEO ve Organik Büyüme Stratejileri Uzmanı',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.keremgezergun.com/#person',
  name: 'Sungur Kerem Gezergün',
  alternateName: 'Kerem Gezergün',
  url: 'https://www.keremgezergun.com',
  image: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
  jobTitle: 'Senior SEO Specialist',
  description:
    'E-ticaret SEO, Teknik SEO ve Organik Büyüme Stratejileri Uzmanı. MENA Search Awards Finalisti.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.keremgezergun.com',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'BusinessUp!',
    url: 'https://businessup.com.tr',
  },
  knowsAbout: [
    'SEO',
    'E-ticaret SEO',
    'Teknik SEO',
    'Organik Büyüme Stratejileri',
    'Arama Motoru Optimizasyonu',
    'Dijital Pazarlama',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Ahi Evran Üniversitesi',
    sameAs: 'https://www.ahievran.edu.tr',
  },
  award: ['MENA Search A24 - Best Use of Search (Finance) Finalist'],
  sameAs: [
    'https://www.linkedin.com/in/sungur-kerem-gezergun/',
    'https://twitter.com/keremgezergun',
    'https://www.youtube.com/@keremgezergun',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'SEO Uzmanı',
    occupationLocation: {
      '@type': 'City',
      name: 'İstanbul',
      sameAs: 'https://en.wikipedia.org/wiki/Istanbul',
    },
    skills: ['SEO', 'Teknik SEO', 'E-ticaret SEO', 'İçerik Stratejisi', 'Link Building'],
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'professional',
    url: 'https://businessup.com.tr/iletisim/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta httpEquiv="Content-Language" content="tr" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdSafe(personSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Ana içeriğe geç
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
