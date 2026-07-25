import type { Metadata } from 'next';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';
import { alternateMetadata } from '@/lib/i18n';

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
    locale: 'tr_TR',
    type: 'article',
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
          Sungur Kerem Gezergün
          <br />
          E-posta: <a href="mailto:iletisim@keremgezergun.com">iletisim@keremgezergun.com</a>
          <br />
          Telefon: <a href="tel:+905526902782">0552 690 27 82</a>
          <br />
          Adres: Mimar Sinan Mahallesi, Katibim Aziz Bey Caddesi No: 41, Üsküdar / İstanbul
          <br />
          Web: <a href="https://keremgezergun.com">keremgezergun.com</a>
        </address>
      </section>

      <hr />

      <section lang="en">
        <h2 style={{ fontSize: '1.8rem', marginTop: 0 }}>Knotvo — Support</h2>
        <p>
          Need help with Knotvo? Email{' '}
          <a href="mailto:iletisim@keremgezergun.com">iletisim@keremgezergun.com</a> and we&apos;ll
          get back to you.
        </p>

        <h2>Frequently asked questions</h2>

        <p className="q">What is a HAR file?</p>
        <p>
          A HAR (HTTP Archive) file is a log of a web page&apos;s network requests. In
          Chrome/Edge/Safari DevTools, open the <em>Network</em> tab, reload the page, then
          right-click → <em>Save all as HAR</em>. Open that file in Knotvo to analyze it.
        </p>

        <p className="q">Does my data leave my Mac?</p>
        <p>
          HAR analysis is 100% local — nothing is uploaded. The optional <em>live URL measurement</em>{' '}
          feature sends only the URL you enter to Google PageSpeed Insights. See our{' '}
          <Link href="/knotvo-gizlilik">Privacy Policy</Link>.
        </p>

        <p className="q">Live measurement says &quot;quota exceeded&quot; or asks for a key.</p>
        <p>
          Live measurement uses Google&apos;s free PageSpeed Insights API. Create a free API key (no
          credit card, 25,000 queries/day) in the Google Cloud Console, then add it in{' '}
          <em>Settings → PageSpeed Insights API Key</em>.
        </p>

        <p className="q">Can I test a localhost / staging / password-protected page?</p>
        <p>
          Live measurement only works on public URLs (Google must be able to reach the page). For
          private or internal pages, capture a HAR in your browser and open it in Knotvo instead.
        </p>

        <p className="q">How do I safely share a HAR that contains secrets?</p>
        <p>
          Use <em>Sanitize → Share-Safe Copy</em>. Knotvo removes cookies, Authorization headers,
          tokens, and body secrets, and produces a clean copy locally — your original file is never
          changed.
        </p>

        <p className="q">How do I reset everything?</p>
        <p>
          <em>Settings → Reset all data</em> permanently deletes all brands, sites, scans, your API
          key, and preferences.
        </p>

        <h2>Contact</h2>
        <address>
          Sungur Kerem Gezergün
          <br />
          Email: <a href="mailto:iletisim@keremgezergun.com">iletisim@keremgezergun.com</a>
          <br />
          Phone: <a href="tel:+905526902782">+90 552 690 27 82</a>
          <br />
          Address: Mimar Sinan Mahallesi, Katibim Aziz Bey Caddesi No: 41, Üsküdar / İstanbul,
          Türkiye
          <br />
          Web: <a href="https://keremgezergun.com">keremgezergun.com</a>
        </address>
      </section>
    </main>
  );
}
