import Link from 'next/link';
import type { Language } from '@/lib/i18n';
import { contact, policyDates } from '@/lib/contact';

type L = { tr: string; en: string };
const t = (v: L, l: Language) => v[l];

const requests: Array<[L, L, L]> = [
  [
    { tr: 'robots.txt okuma', en: 'Reading robots.txt' },
    { tr: 'Analiz sırasında otomatik', en: 'Automatically, during analysis' },
    { tr: 'Analiz edilen sitenin kendi alan adı', en: 'The analysed site’s own domain' },
  ],
  [
    { tr: 'Sitemap okuma', en: 'Reading the sitemap' },
    { tr: 'Analiz sırasında otomatik', en: 'Automatically, during analysis' },
    {
      tr: 'Sitenin kendi /sitemap.xml adresi veya robots.txt’te bildirilen sitemap adresleri — site bunları başka bir alan adında da gösterebilir',
      en: 'The site’s own /sitemap.xml or the sitemap URLs declared in robots.txt — a site may point these at another domain',
    },
  ],
  [
    { tr: 'Sayfanın ham HTML’ini okuma', en: 'Reading the page’s raw HTML' },
    { tr: 'Analiz sırasında otomatik', en: 'Automatically, during analysis' },
    {
      tr: 'Zaten açık olan sayfanın kendi adresi (aynı origin)',
      en: 'The address of the page already open (same origin)',
    },
  ],
  [
    { tr: 'HTTP başlıklarını okuma (HEAD)', en: 'Reading HTTP headers (HEAD)' },
    { tr: 'Analiz sırasında otomatik', en: 'Automatically, during analysis' },
    {
      tr: 'Zaten açık olan sayfanın kendi adresi (aynı origin)',
      en: 'The address of the page already open (same origin)',
    },
  ],
  [
    { tr: 'Bağlantı durum kontrolü (HEAD/GET)', en: 'Link status checking (HEAD/GET)' },
    {
      tr: 'Yalnızca "Kırık Link Kontrolü" butonuna bastığınızda',
      en: 'Only when you press the "Check broken links" button',
    },
    {
      tr: 'Sayfadaki bağlantıların hedef adresleri (en fazla 50)',
      en: 'The targets of links on the page (at most 50)',
    },
  ],
  [
    { tr: 'Yönlendirme tespiti', en: 'Redirect detection' },
    { tr: 'Yalnızca izin verdiyseniz', en: 'Only if you have granted permission' },
    { tr: 'Analiz edilen sayfanın adresi', en: 'The address of the analysed page' },
  ],
];

const notDoing: L[] = [
  { tr: 'Veri toplamıyor, geliştiriciye göndermiyoruz', en: 'We collect no data and send none to the developer' },
  { tr: 'Analitik veya telemetri yok', en: 'No analytics, no telemetry' },
  { tr: 'Çerez, piksel veya parmak izi takibi yok', en: 'No cookies, pixels or fingerprinting' },
  { tr: 'Reklam yok, reklam enjeksiyonu yok', en: 'No advertising and no ad injection' },
  { tr: 'Veri satışı veya üçüncü taraflarla paylaşım yok', en: 'No selling or sharing of data' },
  {
    tr: 'Uzaktan barındırılan kod yükleme yok — tüm kod uzantı paketinin içindedir',
    en: 'No remotely hosted code — everything ships inside the extension package',
  },
  { tr: 'Üçüncü taraf kütüphane yok — tüm kod birinci taraf', en: 'No third-party libraries — all code is first-party' },
  { tr: 'Hesap, kayıt veya oturum açma gerektirmiyoruz', en: 'No account, registration or sign-in' },
];

const kvkk: L[] = [
  {
    tr: 'Uzantının bir arka uç sunucusu yoktur; geliştiriciye hiçbir veri iletilmez.',
    en: 'The extension has no backend; no data reaches the developer.',
  },
  {
    tr: 'Analiz sonuçları ve tema tercihi yalnızca chrome.storage.local üzerinden kullanıcının kendi cihazında saklanır. Bu veriye geliştirici erişemez.',
    en: 'Results and the theme preference are stored only in chrome.storage.local on the user’s own device. The developer cannot reach them.',
  },
  {
    tr: 'Kullanıcıdan ad, e-posta, telefon veya benzeri hiçbir tanımlayıcı istenmez; hesap açma gerekmez.',
    en: 'No name, email, phone number or other identifier is requested, and no account is needed.',
  },
  {
    tr: 'Analiz edilen sayfaların adresleri okunabilir biçimde saklanmaz; yalnızca geri döndürülemez özetleri tutulur.',
    en: 'The addresses of analysed pages are never stored in readable form — only irreversible digests.',
  },
  {
    tr: 'Uzantının yaptığı ağ istekleri doğrudan analiz edilen web sitesine gider; hiçbiri geliştiriciden geçmez.',
    en: 'Every network request the extension makes goes straight to the analysed site; none passes through the developer.',
  },
];

const pricing: L[] = [
  {
    tr: 'Mevcut hiçbir özellik ileride ödeme duvarının arkasına alınmayacaktır.',
    en: 'No existing feature will ever move behind a paywall.',
  },
  {
    tr: 'Hesap açma, giriş yapma veya e-posta verme zorunluluğu getirilmeyecektir.',
    en: 'No account, sign-in or email address will be made mandatory.',
  },
  {
    tr: 'Kullanım kotası, kredi sistemi veya analiz sayısı sınırı uygulanmayacaktır.',
    en: 'No usage quota, credit system or cap on the number of analyses.',
  },
  {
    tr: 'Reklam gösterilmeyecek, sponsorlu içerik yerleştirilmeyecektir.',
    en: 'No advertising and no sponsored placements.',
  },
  {
    tr: 'Veri toplama, uzantının gelir kaynağı olmayacaktır.',
    en: 'Data collection will never be the revenue model.',
  },
];

export default function CrawlseerPrivacy({ language }: { language: Language }) {
  const en = language === 'en';
  const back = en ? '/en/crawlseer' : '/crawlseer';

  return (
    <main id="main-content" tabIndex={-1} className="nirengi-legal">
      <article className="container nirengi-narrow">
        <p className="nirengi-eyebrow">Crawlseer</p>
        <h1>{en ? 'Privacy Policy' : 'Gizlilik Politikası'}</h1>
        <p className="nirengi-updated">
          {en ? 'Last updated: ' : 'Son güncelleme: '}
          <time dateTime={policyDates.crawlseer.iso}>
            {en ? policyDates.crawlseer.en : policyDates.crawlseer.tr}
          </time>
          {en ? ' · Version 1.0.0' : ' · Geçerli sürüm: 1.0.0'}
        </p>
        <p className="nirengi-summary">
          <strong>{en ? 'In short:' : 'Kısaca:'}</strong>{' '}
          {en
            ? 'Crawlseer sends nothing to the developer or to any third party. The extension has no backend server. Every analysis runs in your browser and all data stays on your device.'
            : 'Crawlseer hiçbir veriyi geliştiriciye veya herhangi bir üçüncü tarafa göndermez. Uzantının bir arka uç sunucusu yoktur. Tüm analiz tarayıcınızda yapılır, tüm veriler cihazınızda kalır.'}
        </p>

        <div className="nirengi-policy">
          <section>
            <h2>{en ? '1. What data is processed?' : '1. Hangi verileri işliyoruz?'}</h2>
            <h3>{en ? '1.1 Website content' : '1.1 Web sitesi içeriği'}</h3>
            <p>
              {en
                ? 'When you click the extension icon, the HTML of the page in the active tab is read: title, meta tags, H1–H6 headings, links, images and their alt text, structured data (JSON-LD, Microdata, RDFa), and Open Graph and Twitter Card tags.'
                : 'Uzantı simgesine tıkladığınızda, o an açık olan sekmedeki sayfanın HTML içeriği okunur: başlık, meta etiketleri, H1-H6 başlıkları, bağlantılar, görseller ve alt metinleri, yapısal veri (JSON-LD/Microdata/RDFa), Open Graph ve Twitter Card etiketleri.'}
            </p>
            <p>
              {en
                ? 'This happens only when you click the icon, and only for the active tab (the activeTab permission). The extension does not watch your browsing in the background.'
                : 'Bu okuma yalnızca siz simgeye tıkladığınızda ve yalnızca aktif sekme için gerçekleşir (activeTab izni). Uzantı arka planda gezinmenizi izlemez.'}
            </p>

            <h3>{en ? '1.2 SEO score history (local)' : '1.2 SEO puanı geçmişi (yerel)'}</h3>
            <p>
              {en
                ? 'A score history is kept for each page you analyse so you can see the change over time as a chart. Each record holds two values only: the SEO score (0–100) and the time of the analysis.'
                : 'Analiz ettiğiniz her sayfa için SEO puanı geçmişi tutulur; böylece zaman içindeki değişimi grafik olarak görebilirsiniz. Her kayıt yalnızca iki değerden oluşur: SEO puanı (0-100) ve analiz zamanı.'}
            </p>
            <p>
              {en
                ? 'The page address is never stored in readable form. To tell records apart, the address is passed through a one-way SHA-256 digest and only that digest is kept — it cannot be reversed. At most 30 records per page and 500 distinct pages are retained.'
                : 'Sayfa adresi okunabilir biçimde saklanmaz. Hangi kaydın hangi sayfaya ait olduğunu ayırt edebilmek için adres tek yönlü bir özet (SHA-256) fonksiyonundan geçirilir ve yalnızca bu özet saklanır; özetten adrese geri dönülemez. Sayfa başına en fazla 30 kayıt, toplamda en fazla 500 farklı sayfa saklanır.'}
            </p>

            <h3>{en ? '1.3 Preferences' : '1.3 Tercihler'}</h3>
            <p>
              {en
                ? 'The theme you choose (light or dark) is stored.'
                : 'Seçtiğiniz tema (açık/koyu) saklanır.'}
            </p>

            <h3>{en ? '1.4 The storage index' : '1.4 Depolama dizini'}</h3>
            <p>
              {en
                ? 'To enforce the 500-page limit, a list of record keys — the digests from §1.2 — is kept. When the limit is passed the oldest records are deleted automatically. This list contains no readable addresses either.'
                : 'Yukarıdaki 500 sayfa sınırını uygulayabilmek için, kayıt anahtarlarının (yani §1.2’deki özetlerin) bir listesi saklanır. Sınır aşıldığında en eski kayıtlar otomatik silinir. Bu listede de okunabilir adres bulunmaz.'}
            </p>
          </section>

          <section>
            <h2>{en ? '2. Where is the data stored?' : '2. Veriler nerede saklanıyor?'}</h2>
            <p>
              {en
                ? 'All of it in chrome.storage.local, on your device only. Nothing is synchronised, backed up or exported.'
                : 'Tümü chrome.storage.local üzerinde, yalnızca kendi cihazınızda. Hiçbir veri senkronize edilmez, yedeklenmez veya dışarı aktarılmaz.'}
            </p>
            <p>
              {en
                ? 'You do not have to uninstall to clear the score history: the "Clear history" link under the trend chart in the Overview pane removes all stored history and the index in §1.4 at once.'
                : 'Puan geçmişini silmek için uzantıyı kaldırmanız gerekmez: Genel Bakış sekmesindeki trend grafiğinin altında yer alan "Geçmişi Temizle" bağlantısı, kayıtlı tüm puan geçmişini ve §1.4’teki dizini tek seferde siler.'}
            </p>
            <p>
              {en
                ? 'To delete everything: chrome://extensions → Crawlseer → Remove. Uninstalling deletes all local data, including the theme preference.'
                : 'Tüm verileri silmek için: chrome://extensions → Crawlseer → Kaldır. Uzantı kaldırıldığında yerel verilerin tamamı (tema tercihi dahil) silinir.'}
            </p>
          </section>

          <section>
            <h2>{en ? '3. Network requests' : '3. Ağ istekleri'}</h2>
            <p>
              {en
                ? 'The extension makes only the requests below, and every one of them goes directly to the site concerned — none passes through any server belonging to the developer.'
                : 'Uzantı yalnızca aşağıdaki isteklerde bulunur ve bunların tamamı doğrudan ilgili web sitesine gider — geliştiriciye ait hiçbir sunucudan geçmez:'}
            </p>
            <div
              className="nirengi-table-wrap"
              tabIndex={0}
              role="region"
              aria-labelledby="crawlseer-requests-caption"
            >
              <table>
                <caption id="crawlseer-requests-caption">
                  {en
                    ? 'Every network request the extension makes, when it happens and where it goes'
                    : 'Uzantının yaptığı her ağ isteği, ne zaman yapıldığı ve nereye gittiği'}
                </caption>
                <thead>
                  <tr>
                    <th scope="col">{en ? 'Request' : 'İstek'}</th>
                    <th scope="col">{en ? 'When' : 'Ne zaman'}</th>
                    <th scope="col">{en ? 'Where to' : 'Nereye'}</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map(([what, when, where]) => (
                    <tr key={what.tr}>
                      <th scope="row">{t(what, language)}</th>
                      <td>{t(when, language)}</td>
                      <td>{t(where, language)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              {en
                ? 'Why raw HTML and headers are needed: the extension compares the original HTML the server sent with the page the browser built after running JavaScript, so it can show which content exists only after JavaScript runs. Both requests go to the address of the page you are already viewing, need no extra permission, and the downloaded content is parsed as text — never executed as code.'
                : 'Ham HTML ve HTTP başlığı okuma neden gerekli: Uzantı, sunucunun gönderdiği orijinal HTML ile tarayıcının JavaScript çalıştırdıktan sonra oluşturduğu sayfayı karşılaştırır; böylece hangi içeriğin yalnızca JavaScript ile oluştuğunu gösterebilir. Bu iki istek de zaten görüntülemekte olduğunuz sayfanın kendi adresine gider, ek izin gerektirmez ve indirilen içerik yalnızca metin olarak çözümlenir — hiçbir zaman kod olarak çalıştırılmaz.'}
            </p>

            <h3>{en ? '3.1 Preview images' : '3.1 Önizleme görselleri'}</h3>
            <p>
              {en
                ? 'In the Images and Social panes, the analysed page’s own images (<img> sources and og:image / twitter:image) are loaded by your browser and shown as previews. This is the browser’s ordinary <img> loading behaviour, needs no extra permission, and sends no credentials.'
                : 'Görseller ve Sosyal sekmelerinde, analiz edilen sayfanın kendi görselleri (<img> kaynakları ve og:image / twitter:image) doğrudan tarayıcınız tarafından yüklenir ve önizleme olarak gösterilir. Bu, tarayıcının normal <img> yükleme davranışıdır, ek bir izin gerektirmez ve hiçbir kimlik bilgisi gönderilmez.'}
            </p>
            <p>
              {en
                ? 'Only two features ever ask for permission: the "Check broken links" button and redirect detection. The site access they need is optional, is requested the first time you use the feature, and declining leaves the rest of the extension fully usable.'
                : 'İzin istemi gösterilen tek iki özellik şunlardır: "Kırık Link Kontrolü" butonu ve yönlendirme tespiti. Bunlar için gereken site erişim izni isteğe bağlıdır, yalnızca ilgili özelliği ilk kez kullandığınızda istenir ve izin vermezseniz uzantının geri kalanı tam olarak çalışmaya devam eder.'}
            </p>
          </section>

          <section>
            <h2>{en ? '4. What we do not do' : '4. Yapmadıklarımız'}</h2>
            <ul>
              {notDoing.map((i) => (
                <li key={i.tr}>{t(i, language)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>
              {en
                ? '5. Chrome Web Store Limited Use commitment'
                : '5. Chrome Web Store Sınırlı Kullanım taahhüdü'}
            </h2>
            <p>
              {en
                ? 'Crawlseer’s use of user data, including any transfer, complies with the Chrome Web Store User Data Policy and its Limited Use requirements.'
                : 'Crawlseer’ın kullanıcı verilerini kullanımı, veri aktarımı dahil olmak üzere, Chrome Web Store Kullanıcı Verileri Politikası’na ve Sınırlı Kullanım gerekliliklerine uygundur.'}
            </p>
            <p>
              {en
                ? 'Concretely: the data processed is used only to show you the SEO analysis, never leaves the device, is not sold, is not used for advertising, and is not used for purposes such as credit assessment.'
                : 'Somut olarak: işlenen veriler yalnızca kullanıcıya SEO analizini göstermek için kullanılır, cihazdan hiç ayrılmaz, satılmaz, reklam amacıyla kullanılmaz ve kredi değerlendirmesi gibi amaçlarla kullanılmaz.'}
            </p>
          </section>

          <section>
            <h2>
              {en
                ? '6. KVKK (Turkish Law no. 6698)'
                : '6. KVKK (6698 sayılı Kanun) hakkında'}
            </h2>
            <p>
              {en
                ? 'The extension collects, processes and transfers no personal data. Specifically:'
                : 'Uzantı kişisel veri toplamaz, işlemez veya aktarmaz. Somut olarak:'}
            </p>
            <ul>
              {kvkk.map((i) => (
                <li key={i.tr}>{t(i, language)}</li>
              ))}
            </ul>
            <p>
              {en
                ? 'For that reason the extension is not a data controller under KVKK with respect to the data you process. You can delete everything stored on your device at any time via chrome://extensions → Crawlseer → Remove. This section is informational and is not legal advice; your own site’s KVKK obligations are outside the scope of this extension.'
                : 'Bu nedenle uzantı, işleyeceğiniz veriler bakımından KVKK anlamında bir veri sorumlusu konumunda değildir. Cihazınızda saklanan verileri istediğiniz zaman chrome://extensions → Crawlseer → Kaldır ile tamamen silebilirsiniz. Bu bölüm bilgilendirme amaçlıdır, hukuki görüş değildir; kendi web sitenizin KVKK yükümlülükleri bu uzantının kapsamı dışındadır.'}
            </p>
          </section>

          <section>
            <h2>{en ? '7. Pricing commitment' : '7. Ücretlendirme taahhüdü'}</h2>
            <p>
              {en
                ? 'Every analysis feature Crawlseer offers today is permanently free. That is a binding commitment, not a marketing line:'
                : 'Crawlseer’ın bugün sunduğu tüm analiz özellikleri kalıcı olarak ücretsizdir. Bu bir pazarlama ifadesi değil, bağlayıcı bir taahhüttür:'}
            </p>
            <ul>
              {pricing.map((i) => (
                <li key={i.tr}>{t(i, language)}</li>
              ))}
            </ul>
            <p>
              {en
                ? 'If a revenue model is ever needed, only a genuinely new tier that does not exist today and carries a real cost could be charged for — and even then, everything that exists today stays free.'
                : 'İleride ek bir gelir modeli gerekirse, yalnızca bugün var olmayan ve gerçek maliyeti olan yeni bir katman opsiyonel olarak ücretlendirilebilir; bu durumda dahi mevcut özellikler ücretsiz kalır.'}
            </p>
          </section>

          <section>
            <h2>{en ? '8. Children’s privacy' : '8. Çocukların gizliliği'}</h2>
            <p>
              {en
                ? 'The extension is a developer and marketing tool. It is not directed at users under 13 and does not knowingly collect data from children.'
                : 'Uzantı bir geliştirici/pazarlama aracıdır, 13 yaş altı kullanıcılara yönelik değildir ve çocuklardan bilerek veri toplamaz.'}
            </p>
          </section>

          <section>
            <h2>{en ? '9. Changes' : '9. Değişiklikler'}</h2>
            <p>
              {en
                ? 'Changes to this policy are published on this page and the "Last updated" date is revised. Updates that change data-handling behaviour are also noted in the extension’s release notes.'
                : 'Bu politikada yapılacak değişiklikler bu sayfada yayımlanır ve "Son güncelleme" tarihi güncellenir. Veri işleme davranışını değiştiren güncellemeler uzantı sürüm notlarında da belirtilir.'}
            </p>
          </section>

          <section>
            <h2>{en ? '10. Contact' : '10. İletişim'}</h2>
            <address>
              {contact.name}
              <br />
              {en ? 'Email: ' : 'E-posta: '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <br />
              {en ? 'Phone: ' : 'Telefon: '}
              <a href={contact.phoneHref}>{contact.phone}</a>
            </address>
          </section>
        </div>

        <Link className="nirengi-back" href={back}>
          ← {en ? 'Back to the Crawlseer page' : 'Crawlseer sayfasına dön'}
        </Link>
      </article>
    </main>
  );
}
