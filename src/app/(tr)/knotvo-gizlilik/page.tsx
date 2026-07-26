import type { Metadata } from "next";
import Link from "next/link";
import { jsonLdSafe } from "@/lib/jsonLd";
import { alternateMetadata } from "@/lib/i18n";
import { contact } from "@/lib/contact";

const PAGE_URL = "https://www.keremgezergun.com/knotvo-gizlilik";

export const metadata: Metadata = {
  title: "Knotvo — Gizlilik Politikası",
  description:
    "Knotvo gizlilik politikası. Knotvo yerel bir macOS uygulamasıdır; hesap, telemetri veya sunucu yoktur. HAR analizi tamamen cihazınızda yapılır.",
  alternates: alternateMetadata(
    "/knotvo-gizlilik",
    "/en/knotvo-privacy-policy",
  ),
  openGraph: {
    title: "Knotvo — Gizlilik Politikası",
    description:
      "Knotvo yerel bir macOS uygulamasıdır; hesap, telemetri veya sunucu yoktur. HAR analizi tamamen cihazınızda yapılır.",
    url: PAGE_URL,
    siteName: "Kerem Gezergün",
    images: [
      {
        url: "https://www.keremgezergun.com/knotvo/overview.png",
        width: 1500,
        height: 834,
        alt: "Knotvo gizlilik politikası",
      },
    ],
    locale: "tr_TR",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Knotvo — Gizlilik Politikası",
    description:
      "Knotvo yerel bir macOS uygulamasıdır; hesap, telemetri veya sunucu yoktur.",
    creator: "@keremgezergun",
    site: "@keremgezergun",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: "https://www.keremgezergun.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Knotvo",
      item: "https://www.keremgezergun.com/knotvo",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Gizlilik Politikası",
      item: PAGE_URL,
    },
  ],
};

export default function KnotvoGizlilikPage() {
  return (
    <main id="main-content" tabIndex={-1} className="knotvo-legal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumbSchema) }}
      />

      <p style={{ marginBottom: 24 }}>
        <Link href="/knotvo">← Knotvo</Link>
      </p>

      <h1>Knotvo — Gizlilik Politikası</h1>
      <p className="muted">
        Son güncelleme: <time dateTime="2026-07-20">20 Temmuz 2026</time>
      </p>

      <p>
        Knotvo, HAR dosyaları ve canlı ölçümlerle web performansı analiz eden
        yerel bir macOS uygulamasıdır. Knotvo varsayılan olarak gizliliğe
        saygılı tasarlanmıştır.
      </p>

      <h2>Ne topluyoruz</h2>
      <p>
        <strong>Hiçbir şey.</strong> Knotvo&apos;da hesap sistemi, giriş,
        analytics veya telemetri yoktur. Hiçbir kişisel veriyi sunucularımızda
        toplamıyor, iletmiyor veya saklamıyoruz — verinizi alan hiçbir sunucu
        işletmiyoruz.
      </p>

      <h2>Cihazınızda saklanan veriler</h2>
      <ul>
        <li>
          <strong>HAR dosyaları ve analiz sonuçları</strong> — tamamen
          Mac&apos;inizde ayrıştırılır ve analiz edilir. HAR dosyaları
          cihazınızdan hiç çıkmaz.
        </li>
        <li>
          <strong>Markalar, siteler ve tarama geçmişi</strong> — yerel olarak
          Mac&apos;inizde saklanır.
        </li>
        <li>
          <strong>PageSpeed Insights API anahtarınız</strong> (opsiyonel) —
          yerel olarak Mac&apos;inizde saklanır ve yalnızca kendi Google
          isteklerinizi doğrulamak için kullanılır.
        </li>
      </ul>
      <p>
        Bu veriler cihazınızda kalır ve bize hiç gönderilmez. Tümünü istediğiniz
        zaman <em>Ayarlar → Tüm veriyi sıfırla</em> ile silebilirsiniz.
      </p>

      <h2>Canlı ölçüm (opsiyonel özellik)</h2>
      <p>
        <strong>Canlı URL ölçümü</strong> özelliğini kullandığınızda Knotvo,
        girdiğiniz URL&apos;i Google&apos;ın{" "}
        <strong>PageSpeed Insights API</strong>&apos;sine gönderir; böylece
        Google o sayfayı ölçebilir. Bu durumda URL (ve varsa API anahtarınız)
        Google&apos;a iletilir ve{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google&apos;ın Gizlilik Politikası
          <span className="sr-only"> (yeni sekmede açılır)</span>
        </a>
        &apos;na tabidir. Bu yolla yalnızca herkese açık URL&apos;ler
        ölçülebilir. HAR dosyası analizi hiç ağ kullanmaz.
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
    </main>
  );
}
