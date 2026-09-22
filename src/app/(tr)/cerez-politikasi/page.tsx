import type { Metadata } from 'next';
import Link from 'next/link';
import CookiePreferencesButton from '@/components/layout/CookiePreferencesButton';
import { contact } from '@/lib/contact';
import { alternateMetadata } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';
import { breadcrumbSchema } from '@/lib/schema/page';

const PAGE_URL = 'https://www.keremgezergun.com/cerez-politikasi';

const TITLE = 'Çerez Politikası';
const DESCRIPTION =
  'keremgezergun.com hangi çerezleri hangi amaçla kullanır, veriler nereye gider ve tercihinizi nasıl değiştirirsiniz.';

const UPDATED = '2026-09-22';
const UPDATED_LABEL = '22 Eylül 2026';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternateMetadata('/cerez-politikasi', '/en/cookie-policy'),
  openGraph: {
    title: `${TITLE} | Kerem Gezergün`,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    locale: 'tr_TR',
    type: 'website',
  },
};

const breadcrumb = breadcrumbSchema('tr', { name: TITLE, url: PAGE_URL });

export default function CookiePolicyPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumb) }}
      />

      <section className="page-header article-header" aria-labelledby="page-title">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Ana Sayfa</Link>
              </li>
              <li aria-current="page">{TITLE}</li>
            </ol>
          </nav>
          <h1 id="page-title">{TITLE}</h1>
          <p className="article-meta">
            <span>
              Son güncelleme: <time dateTime={UPDATED}>{UPDATED_LABEL}</time>
            </span>
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <article className="article">
            <p>
              Bu sayfa, <strong>keremgezergun.com</strong> üzerinde hangi çerezlerin ve benzeri
              teknolojilerin hangi amaçla kullanıldığını, verilerin nereye gittiğini ve tercihinizi
              nasıl değiştirebileceğinizi açıklar. Veri sorumlusu {contact.name}’dür.
            </p>

            <h2>Tercihinizi değiştirin</h2>
            <p>
              Analitik çerezler yalnızca siz kabul ederseniz kullanılır. Tercihinizi istediğiniz
              zaman aşağıdaki düğmeyle değiştirebilir veya geri çekebilirsiniz; reddettiğinizde
              mevcut Google Analytics çerezleri de silinir.
            </p>
            <p>
              <CookiePreferencesButton label="Çerez tercihini değiştir" />
            </p>

            <h2>Zorunlu olmayan çerezler: Google Analytics</h2>
            <p>
              Sitenin hangi sayfalarının ne kadar ziyaret edildiğini anlamak için Google Analytics 4
              kullanıyoruz. Bu araç yalnızca çerez uyarısında <strong>“Kabul et”</strong> dediğinizde
              yüklenir. Kabul etmezseniz Google’a hiçbir istek gönderilmez ve aşağıdaki çerezler
              oluşturulmaz.
            </p>
            <div className="table-wrapper">
              <table>
                <caption className="visually-hidden">Google Analytics çerezleri</caption>
                <thead>
                  <tr>
                    <th scope="col">Çerez</th>
                    <th scope="col">Amaç</th>
                    <th scope="col">Süre</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_ga</td>
                    <td>Ziyaretçileri birbirinden ayırt etmek için rastgele bir kimlik tutar.</td>
                    <td>2 yıl</td>
                  </tr>
                  <tr>
                    <td>_ga_*</td>
                    <td>Oturum durumunu ve sayfa görüntülemelerini ilişkilendirir.</td>
                    <td>2 yıl</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Toplanan veriler sayfa görüntüleme, yaklaşık konum (şehir düzeyi), cihaz ve tarayıcı
              türü ile trafik kaynağıdır. IP adresleri Google Analytics 4 tarafından saklanmaz.
              Verileri işleyen taraf Google LLC’dir ve veriler yurt dışındaki Google sunucularına
              aktarılır; ayrıntılar için{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google Gizlilik Politikası
                <span className="sr-only"> (yeni sekmede açılır)</span>
              </a>
              . Hukuki dayanak KVKK m. 5/1 uyarınca açık rızanızdır.
            </p>
            <p>
              Reklam, yeniden pazarlama veya profilleme amaçlı hiçbir çerez kullanmıyoruz; Google
              Analytics’in reklam özellikleri kapalıdır.
            </p>

            <h2>Tarayıcınızda tutulan tercihler (çerez değildir)</h2>
            <p>
              Aşağıdaki bilgiler tarayıcınızın yerel deposunda (localStorage) tutulur, sunucuya
              gönderilmez ve çerez uyarısından bağımsızdır; site işlevi için gereklidir:
            </p>
            <ul className="article-fragments">
              <li>
                <strong>cookie-consent</strong> — çerez uyarısına verdiğiniz cevap, uyarının her
                ziyarette tekrar çıkmaması için.
              </li>
              <li>
                <strong>redirect-matcher-settings</strong> — 301 Yönlendirme Aracı’ndaki eşik,
                ağırlık ve çıktı biçimi tercihleri. URL listeleriniz saklanmaz.
              </li>
            </ul>
            <p>
              Bunları tarayıcınızın site verilerini temizleyerek istediğiniz zaman silebilirsiniz.
            </p>

            <h2>Üçüncü taraf içerikler</h2>
            <p>
              Bazı blog yazılarında Spotify podcast bölümü gömülüdür. Gömülü oynatıcı yalnızca o
              sayfada yüklenir ve Spotify kendi çerezlerini kendi politikasına göre kullanabilir:{' '}
              <a href="https://www.spotify.com/legal/cookies-policy/" target="_blank" rel="noopener noreferrer">
                Spotify Çerez Politikası
                <span className="sr-only"> (yeni sekmede açılır)</span>
              </a>
              .
            </p>

            <h2>Haklarınız ve iletişim</h2>
            <p>
              KVKK m. 11 kapsamındaki haklarınızı kullanmak veya bu politika hakkında soru sormak
              için <a href={`mailto:${contact.email}`}>{contact.email}</a> adresine yazabilirsiniz.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
