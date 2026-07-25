import type { Metadata } from 'next';
import '../globals.css';
import Document from '@/components/layout/Document';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.keremgezergun.com'),
  title: {
    default: 'Kerem Gezergün | SEO Uzmanı',
    template: '%s | Kerem Gezergün',
  },
  description:
    'Sungur Kerem Gezergün — Senior E-Ticaret SEO Danışmanı. E-ticaret sitelerini sadece trafiğe değil satışa dönüştüren stratejilerle büyütüyorum.',
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
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/images/kerem-gezergun.jpg'],
  },
  category: 'technology',
  verification: {
    google: 'kLUaXtbZGowIehnC7I7VLaj3uSNTbIBsm1uwZhBpK7Q',
  },
};

export default function TurkishRootLayout({ children }: { children: React.ReactNode }) {
  return <Document language="tr">{children}</Document>;
}
