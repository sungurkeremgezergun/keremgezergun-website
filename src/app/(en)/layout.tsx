import type { Metadata } from 'next';
import '../globals.css';
import Document from '@/components/layout/Document';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.keremgezergun.com'),
  title: {
    default: 'Kerem Gezergün | E-commerce SEO Consultant',
    template: '%s | Kerem Gezergün',
  },
  description:
    'Sungur Kerem Gezergün — Senior E-commerce SEO Consultant. I grow online retailers with strategies that turn organic visibility into revenue.',
  keywords: [
    'SEO consultant',
    'E-commerce SEO',
    'Technical SEO',
    'Organic growth',
    'Istanbul SEO',
  ],
  authors: [{ name: 'Sungur Kerem Gezergün' }],
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    title: 'Kerem Gezergün | E-commerce SEO Consultant',
    description: 'E-commerce SEO, Technical SEO and Organic Growth Strategy',
    url: 'https://www.keremgezergun.com/en',
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Kerem Gezergün - E-commerce SEO Consultant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kerem Gezergün | E-commerce SEO Consultant',
    description: 'E-commerce SEO, Technical SEO and Organic Growth Strategy',
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/images/kerem-gezergun.jpg'],
  },
  category: 'technology',
  verification: {
    google: 'kLUaXtbZGowIehnC7I7VLaj3uSNTbIBsm1uwZhBpK7Q',
  },
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return <Document language="en">{children}</Document>;
}
