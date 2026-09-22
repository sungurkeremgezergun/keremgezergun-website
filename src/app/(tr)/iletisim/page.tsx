import type { Metadata } from 'next';
import ContactPage, { contactCopy } from '@/components/contact/ContactPage';
import { alternateMetadata } from '@/lib/i18n';

export const metadata: Metadata = {
  title: contactCopy.title.tr,
  description: contactCopy.description.tr,
  alternates: alternateMetadata('/iletisim', '/en/contact'),
  openGraph: {
    title: `${contactCopy.title.tr} | Kerem Gezergün`,
    description: contactCopy.description.tr,
    url: 'https://www.keremgezergun.com/iletisim',
    siteName: 'Kerem Gezergün',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function Page() {
  return <ContactPage language="tr" />;
}
