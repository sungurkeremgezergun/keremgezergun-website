import type { Metadata } from 'next';
import ContactPage, { contactCopy } from '@/components/contact/ContactPage';
import { englishAlternateMetadata } from '@/lib/i18n';

export const metadata: Metadata = {
  title: contactCopy.title.en,
  description: contactCopy.description.en,
  alternates: englishAlternateMetadata('/iletisim', '/en/contact'),
  openGraph: {
    title: `${contactCopy.title.en} | Kerem Gezergün`,
    description: contactCopy.description.en,
    url: 'https://www.keremgezergun.com/en/contact',
    siteName: 'Kerem Gezergün',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <ContactPage language="en" />;
}
