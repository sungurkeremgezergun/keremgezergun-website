import type { Metadata } from 'next';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';
import { alternateMetadata } from '@/lib/i18n';
import { contact } from '@/lib/contact';

const PAGE_URL = 'https://www.keremgezergun.com/knotvo-destek';

export const metadata: Metadata = {
  title: 'Knotvo — Destek',
  description:
    'Knotvo destek ve sık sorulan sorular. HAR dosyası nasıl alınır, canlı ölçüm nasıl çalışır, veriler nasıl sıfırlanır ve Knotvo ile ilgili yardım.',
  alternates: alternateMetadata('/knotvo-destek', '/en/knotvo-support'),
  openGraph: {
    title: 'Knotvo — Destek',
    description:
      'Knotvo destek ve sık sorulan sorular: HAR dosyası, canlı ölçüm, güvenli paylaşım ve daha fazlası.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/knotvo/overview.png',
        width: 1500,
        height: 834,
        alt: 'Knotvo destek',
      },
    ],
    locale: 'tr_TR',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Knotvo — Destek',
    description: 'Knotvo destek ve sık sorulan sorular: HAR dosyası, canlı ölçüm ve güvenli paylaşım.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://www.keremgezergun.com/' },
    { '@type': 'ListItem', position: 2, name: 'Knotvo', item: 'https://www.keremgezergun.com/knotvo' },
    { '@type': 'ListItem', position: 3, name: 'Destek', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'HAR dosyası nedir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HAR (HTTP Archive), bir web sayfasının ağ isteklerinin kaydıdır. Chrome/Edge/Safari geliştirici araçlarında Network sekmesini açıp sayfayı yenileyin, sonra sağ tık → Save all as HAR. Bu dosyayı Knotvo’da açıp analiz edin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verilerim Mac’imden çıkıyor mu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HAR analizi %100 yereldir — hiçbir şey yüklenmez. Opsiyonel canlı URL ölçümü özelliği yalnızca girdiğiniz URL’i Google PageSpeed Insights’a gönderir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Canlı ölçüm "kota doldu" diyor veya anahtar istiyor.',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Canlı ölçüm, Google’ın ücretsiz PageSpeed Insights API’sini kullanır. Google Cloud Console’dan ücretsiz bir API anahtarı oluşturun (kredi kartı gerekmez, günde 25.000 sorgu) ve Ayarlar → PageSpeed Insights API Anahtarı’na ekleyin.',
      },
    },
    {
      '@type': 'Question',
      name: 'localhost / staging / şifreli bir sayfayı test edebilir miyim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Canlı ölçüm yalnızca herkese açık URL’lerde çalışır. Özel veya iç sayfalar için tarayıcınızda HAR kaydı alıp Knotvo’da açın.',
      },
    },
    {
      '@type': 'Question',
      name: 'Sır içeren bir HAR’ı güvenle nasıl paylaşırım?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sanitize → Paylaşıma Güvenli Kopya kullanın. Knotvo çerezleri, Authorization başlıklarını, token’ları ve gövde sırlarını kaldırıp yerel olarak temiz bir kopya üretir; orijinal dosyanız hiç değişmez.',
      },
    },
    {
      '@type': 'Question',
      name: 'Her şeyi nasıl sıfırlarım?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ayarlar → Tüm veriyi sıfırla tüm markaları, siteleri, taramaları, API anahtarınızı ve tercihlerinizi kalıcı olarak siler.',
      },
    },
  ],
};

export default function KnotvoDestekPage() {
  return (
    <main id="main-content" className="knotvo-legal" role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(faqSchema) }}
      />

      <p style={{ marginBottom: 24 }}>
        <Link href="/knotvo">← Knotvo</Link>
      </p>

      <section lang="tr">
        <h1>Knotvo — Destek</h1>
        <p>
          Yardıma mı ihtiyacın var?{' '}
          <a href="mailto:iletisim@keremgezergun.com">iletisim@keremgezergun.com</a> adresine yaz,
          sana dönelim.
        </p>

        <h2>Sık sorulan sorular</h2>

        <p className="q">HAR dosyası nedir?</p>
        <p>
          HAR (HTTP Archive), bir web sayfasının ağ isteklerinin kaydıdır. Chrome/Edge/Safari
          geliştirici araçlarında <em>Network</em> sekmesini açıp sayfayı yenileyin, sonra sağ tık →{' '}
          <em>Save all as HAR</em>. Bu dosyayı Knotvo&apos;da açıp analiz edin.
        </p>

        <p className="q">Verilerim Mac&apos;imden çıkıyor mu?</p>
        <p>
          HAR analizi %100 yereldir — hiçbir şey yüklenmez. Opsiyonel <em>canlı URL ölçümü</em>{' '}
          özelliği yalnızca girdiğiniz URL&apos;i Google PageSpeed Insights&apos;a gönderir.{' '}
          <Link href="/knotvo-gizlilik">Gizlilik Politikası</Link>&apos;na bakın.
        </p>

        <p className="q">Canlı ölçüm &quot;kota doldu&quot; diyor veya anahtar istiyor.</p>
        <p>
          Canlı ölçüm, Google&apos;ın ücretsiz PageSpeed Insights API&apos;sini kullanır. Google
          Cloud Console&apos;dan ücretsiz bir API anahtarı oluşturun (kredi kartı gerekmez, günde
          25.000 sorgu) ve <em>Ayarlar → PageSpeed Insights API Anahtarı</em>&apos;na ekleyin.
        </p>

        <p className="q">localhost / staging / şifreli bir sayfayı test edebilir miyim?</p>
        <p>
          Canlı ölçüm yalnızca herkese açık URL&apos;lerde çalışır (Google sayfaya erişebilmeli).
          Özel veya iç sayfalar için tarayıcınızda HAR kaydı alıp Knotvo&apos;da açın.
        </p>

        <p className="q">Sır içeren bir HAR&apos;ı güvenle nasıl paylaşırım?</p>
        <p>
          <em>Sanitize → Paylaşıma Güvenli Kopya</em> kullanın. Knotvo çerezleri, Authorization
          başlıklarını, token&apos;ları ve gövde sırlarını kaldırıp yerel olarak temiz bir kopya
          üretir; orijinal dosyanız hiç değişmez.
        </p>

        <p className="q">Her şeyi nasıl sıfırlarım?</p>
        <p>
          <em>Ayarlar → Tüm veriyi sıfırla</em> tüm markaları, siteleri, taramaları, API anahtarınızı
          ve tercihlerinizi kalıcı olarak siler.
        </p>

        <h2>İletişim</h2>
        <address>
          {contact.name}
          <br />
          E-posta: <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <br />
          Telefon: <a href={contact.phoneHref}>{contact.phone}</a>
          <br />
          Adres: {contact.address.tr}
          <br />
          Web: <a href={contact.website}>{contact.websiteLabel}</a>
        </address>
      </section>

    </main>
  );
}
