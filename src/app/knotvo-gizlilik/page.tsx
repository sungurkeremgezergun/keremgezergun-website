import type { Metadata } from 'next';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';

const PAGE_URL = 'https://www.keremgezergun.com/knotvo-gizlilik';

export const metadata: Metadata = {
  title: 'Knotvo — Gizlilik Politikası',
  description:
    'Knotvo gizlilik politikası. Knotvo yerel bir macOS uygulamasıdır; hesap, telemetri veya sunucu yoktur. HAR analizi tamamen cihazınızda yapılır.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Knotvo — Gizlilik Politikası',
    description:
      'Knotvo yerel bir macOS uygulamasıdır; hesap, telemetri veya sunucu yoktur. HAR analizi tamamen cihazınızda yapılır.',
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
    { '@type': 'ListItem', position: 3, name: 'Gizlilik Politikası', item: PAGE_URL },
  ],
};

export default function KnotvoGizlilikPage() {
  return (
    <main id="main-content" className="knotvo-legal" role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumbSchema) }}
      />

      <p style={{ marginBottom: 24 }}>
        <Link href="/knotvo">← Knotvo</Link>
      </p>

      <section lang="tr">
        <h1>Knotvo — Gizlilik Politikası</h1>
        <p className="muted">Son güncelleme: 2026-07-20</p>

        <p>
          Knotvo, HAR dosyaları ve canlı ölçümlerle web performansı analiz eden yerel bir macOS
          uygulamasıdır. Knotvo varsayılan olarak gizliliğe saygılı tasarlanmıştır.
        </p>

        <h2>Ne topluyoruz</h2>
        <p>
          <strong>Hiçbir şey.</strong> Knotvo&apos;da hesap sistemi, giriş, analytics veya telemetri
          yoktur. Hiçbir kişisel veriyi sunucularımızda toplamıyor, iletmiyor veya saklamıyoruz —
          verinizi alan hiçbir sunucu işletmiyoruz.
        </p>

        <h2>Cihazınızda saklanan veriler</h2>
        <ul>
          <li>
            <strong>HAR dosyaları ve analiz sonuçları</strong> — tamamen Mac&apos;inizde ayrıştırılır
            ve analiz edilir. HAR dosyaları cihazınızdan hiç çıkmaz.
          </li>
          <li>
            <strong>Markalar, siteler ve tarama geçmişi</strong> — yerel olarak Mac&apos;inizde
            saklanır.
          </li>
          <li>
            <strong>PageSpeed Insights API anahtarınız</strong> (opsiyonel) — yerel olarak
            Mac&apos;inizde saklanır ve yalnızca kendi Google isteklerinizi doğrulamak için kullanılır.
          </li>
        </ul>
        <p>
          Bu veriler cihazınızda kalır ve bize hiç gönderilmez. Tümünü istediğiniz zaman{' '}
          <em>Ayarlar → Tüm veriyi sıfırla</em> ile silebilirsiniz.
        </p>

        <h2>Canlı ölçüm (opsiyonel özellik)</h2>
        <p>
          <strong>Canlı URL ölçümü</strong> özelliğini kullandığınızda Knotvo, girdiğiniz URL&apos;i
          Google&apos;ın <strong>PageSpeed Insights API</strong>&apos;sine gönderir; böylece Google o
          sayfayı ölçebilir. Bu durumda URL (ve varsa API anahtarınız) Google&apos;a iletilir ve{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" aria-label="Google Gizlilik Politikası (yeni sekmede açılır)">
            Google&apos;ın Gizlilik Politikası
          </a>
          &apos;na tabidir. Bu yolla yalnızca herkese açık URL&apos;ler ölçülebilir. HAR dosyası
          analizi hiç ağ kullanmaz.
        </p>

        <h2>Yapmadıklarımız</h2>
        <ul>
          <li>Reklam yok, reklam kimliği yok, üçüncü-taraf izleyici yok.</li>
          <li>Üçüncü taraflara çökme/kullanım raporlama yok.</li>
          <li>Çerez yok.</li>
          <li>Hiçbir verinin satışı veya paylaşımı yok (satacak verimiz yok).</li>
        </ul>

        <h2>Çocuklar</h2>
        <p>Knotvo bir geliştirici aracıdır ve çocuklara yönelik değildir.</p>

        <h2>İletişim</h2>
        <p>Bu politikayla ilgili sorular:</p>
        <address>
          Sungur Kerem Gezergün
          <br />
          E-posta:{' '}
          <a href="mailto:iletisim@keremgezergun.com">iletisim@keremgezergun.com</a>
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
        <h2 style={{ fontSize: '1.8rem', marginTop: 0 }}>Knotvo — Privacy Policy</h2>
        <p className="muted">Last updated: 2026-07-20</p>

        <p>
          Knotvo is a native macOS application for analyzing web performance from HAR files and live
          measurements. Knotvo is designed to be private by default.
        </p>

        <h2>What we collect</h2>
        <p>
          <strong>Nothing.</strong> Knotvo has no account system, no login, and no analytics or
          telemetry. We do not collect, transmit, or store any personal data on our servers — we do
          not operate any servers that receive your data.
        </p>

        <h2>Data stored on your device</h2>
        <ul>
          <li>
            <strong>HAR files &amp; analysis results</strong> — parsed and analyzed entirely on your
            Mac. HAR files never leave your device.
          </li>
          <li>
            <strong>Brands, sites, and scan history</strong> — stored locally on your Mac
            (Application Support).
          </li>
          <li>
            <strong>Your PageSpeed Insights API key</strong> (optional) — stored locally on your Mac
            and used only to authenticate your own requests to Google.
          </li>
        </ul>
        <p>
          This data stays on your device and is never sent to us. You can erase all of it at any time
          from <em>Settings → Reset all data</em>.
        </p>

        <h2>Live measurement (optional feature)</h2>
        <p>
          When you use the <strong>live URL measurement</strong> feature, Knotvo sends the URL you
          enter to Google&apos;s <strong>PageSpeed Insights API</strong> so Google can measure that
          page. In this case the URL (and your API key, if set) is transmitted to Google and is
          subject to{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" aria-label="Google Privacy Policy (opens in a new tab)">
            Google&apos;s Privacy Policy
          </a>
          . Only public URLs can be measured this way. HAR-file analysis does not use the network at
          all.
        </p>

        <h2>What we do NOT do</h2>
        <ul>
          <li>No advertising, no ad identifiers, no third-party trackers.</li>
          <li>No crash/usage reporting to third parties.</li>
          <li>No cookies.</li>
          <li>No selling or sharing of any data (we have none to sell).</li>
        </ul>

        <h2>Children</h2>
        <p>Knotvo is a developer tool and is not directed at children.</p>

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
