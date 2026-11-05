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

const UPDATED = '2026-11-05';
const UPDATED_LABEL = '5 Kasım 2026';

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
              zaman aşağıdaki düğmeyle değiştirebilir veya geri çekebilirsiniz; reddettiğinizde bu
              sitede tutulan Google Analytics ve Clarity çerezleri de silinir. Microsoft alan
              adlarındaki çerezleri tarayıcınızın ayarlarından silebilirsiniz.
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

            <h2>Zorunlu olmayan çerezler: Microsoft Clarity</h2>
            <p>
              Ziyaretçilerin siteyi nasıl kullandığını anlamak ve sayfaları iyileştirmek için
              Microsoft Clarity kullanıyoruz. Clarity tıklama, kaydırma ve fare hareketlerini kaydeder
              ve bunlardan oturum kayıtları ile ısı haritaları oluşturur. Bu araç da yalnızca çerez
              uyarısında <strong>“Kabul et”</strong> dediğinizde yüklenir. Kabul etmezseniz
              Microsoft’a hiçbir istek gönderilmez ve aşağıdaki çerezler oluşturulmaz.
            </p>
            <div className="table-wrapper">
              <table>
                <caption className="visually-hidden">Microsoft Clarity çerezleri</caption>
                <thead>
                  <tr>
                    <th scope="col">Çerez</th>
                    <th scope="col">Amaç</th>
                    <th scope="col">Süre</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_clck</td>
                    <td>Clarity kullanıcı kimliğini ve tercihlerini tutar.</td>
                    <td>1 yıl</td>
                  </tr>
                  <tr>
                    <td>_clsk</td>
                    <td>Sayfa görüntülemelerini tek bir oturum kaydında birleştirir.</td>
                    <td>1 gün</td>
                  </tr>
                  <tr>
                    <td>CLID</td>
                    <td>Üçüncü taraf: Clarity’nin bu kullanıcıyı ilk gördüğü zamanı tanımlar.</td>
                    <td>1 yıl</td>
                  </tr>
                  <tr>
                    <td>MUID</td>
                    <td>
                      Üçüncü taraf: Microsoft sitelerini ziyaret eden tarayıcıları tanımlar; Microsoft
                      bunu reklam, site analitiği ve operasyonel amaçlarla kullanır.
                    </td>
                    <td>13 ay</td>
                  </tr>
                  <tr>
                    <td>SRM_B</td>
                    <td>Üçüncü taraf: Microsoft alan adlarında bırakılan bir tanımlayıcıdır.</td>
                    <td>13 ay</td>
                  </tr>
                  <tr>
                    <td>MR</td>
                    <td>Üçüncü taraf: MUID’in yenilenip yenilenmeyeceğini belirtir.</td>
                    <td>7 gün</td>
                  </tr>
                  <tr>
                    <td>SM</td>
                    <td>Üçüncü taraf: MUID’i Microsoft alan adları arasında eşitler.</td>
                    <td>Oturum</td>
                  </tr>
                  <tr>
                    <td>ANONCHK</td>
                    <td>Üçüncü taraf: MUID’in ANID’e aktarılıp aktarılmadığını gösterir.</td>
                    <td>1 günden kısa</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Verileri işleyen taraf Microsoft Corporation’dır ve veriler yurt dışındaki Microsoft
              sunucularına aktarılır; ayrıntılar için{' '}
              <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer">
                Microsoft Gizlilik Bildirimi
                <span className="sr-only"> (yeni sekmede açılır)</span>
              </a>
              . Hukuki dayanak KVKK m. 5/1 uyarınca açık rızanızdır.
            </p>
            <p>
              Bu site reklam veya yeniden pazarlama yapmaz; Google Analytics’in reklam özellikleri
              kapalıdır ve Clarity’ye reklam depolama izni verilmez. Yine de Clarity’nin bıraktığı
              MUID çerezi yukarıda belirtildiği gibi Microsoft tarafından reklam amacıyla da
              kullanılabilir.
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
