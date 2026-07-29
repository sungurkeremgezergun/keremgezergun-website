import type { Localized } from '@/lib/i18n';

/**
 * Crawlseer page copy in both languages.
 *
 * Ported from the standalone landing page that used to live in /web. The
 * layout is rebuilt on the site's own design system rather than carrying that
 * page's 7.5 KB of bespoke inline CSS across — the page lives inside the site
 * now, so it should look like the rest of it.
 */

export type Feature = { title: Localized; text: Localized; points?: Localized[] };
export type Faq = { q: Localized; a: Localized };

export const chrome = {
  eyebrow: { tr: 'Ücretsiz Chrome uzantısı', en: 'Free Chrome extension' },
  heading: {
    tr: 'Sayfanız arama motorlarına ve yapay zekâya nasıl görünüyor?',
    en: 'How does your page look to search engines and AI?',
  },
  lead: {
    tr: 'Açık olan sekmeyi tek tıkla denetleyin. 11 analiz sekmesi, tarayıcının kendi ölçümünden okunan Core Web Vitals ve 16 yapay zekâ tarayıcısı için robots.txt erişim matrisi.',
    en: 'Audit the open tab in one click. Eleven analysis panes, Core Web Vitals read from the browser’s own performance timeline, and a robots.txt access matrix for 16 AI crawlers.',
  },
  comingSoon: {
    tr: '🧩 Chrome Web Store’da çok yakında · Chrome 116+ · Edge, Brave, Opera ve Vivaldi ile uyumlu',
    en: '🧩 Coming soon to the Chrome Web Store · Chrome 116+ · works in Edge, Brave, Opera and Vivaldi',
  },
  notify: { tr: 'Çıkınca haber ver', en: 'Notify me at launch' },
  explore: { tr: 'Neler yapıyor?', en: 'What it does' },
  byline: { tr: 'Geliştiren: Kerem Gezergün', en: 'Built by Kerem Gezergün' },
  trust: {
    tr: ['Hesap gerekmez', 'Veri toplanmaz', 'Sunucu yok', 'Hep ücretsiz'],
    en: ['No account', 'No data collected', 'No server', 'Free forever'],
  },
  whyTag: { tr: 'Neden Crawlseer', en: 'Why Crawlseer' },
  whyHeading: { tr: 'Tahmin değil, ölçüm', en: 'Measurement, not guesswork' },
  whyIntro: {
    tr: 'Her bulgu ya tarayıcının kendi ölçümünden ya da resmî bir dokümandan gelir. Arayüz hangisi olduğunu söyler.',
    en: 'Every finding comes either from the browser’s own measurement or from a published specification — and the interface tells you which.',
  },
  tabsTag: { tr: '11 analiz sekmesi', en: 'Eleven analysis panes' },
  tabsHeading: {
    tr: 'Bir sayfanın teknik SEO’su, uçtan uca',
    en: 'One page’s technical SEO, end to end',
  },
  tabsList: {
    tr: 'Genel Bakış · Başlıklar · Hreflang · Linkler · Görseller · Schema · Sosyal · Performans · Anahtar Kelime · Taranabilirlik · AI Görünürlük',
    en: 'Overview · Headings · Hreflang · Links · Images · Schema · Social · Performance · Keywords · Crawlability · AI Visibility',
  },
  privacyTag: { tr: 'Gizlilik', en: 'Privacy' },
  privacyHeading: {
    tr: 'Verileriniz cihazınızdan çıkmıyor',
    en: 'Your data never leaves your device',
  },
  privacyIntro: {
    tr: 'Bu bir pazarlama cümlesi değil, uzantının mimarisi: arka uç sunucu yok, dolayısıyla veri gönderilecek bir yer de yok.',
    en: 'That is the architecture, not a slogan: there is no backend, so there is nowhere for data to be sent.',
  },
  privacyLink: {
    tr: 'Gizlilik politikasının tamamını okuyun',
    en: 'Read the full privacy policy',
  },
  faqTag: { tr: 'Sık sorulanlar', en: 'FAQ' },
  faqHeading: { tr: 'Merak edilenler', en: 'Common questions' },
  ctaHeading: {
    tr: 'Bir sonraki denetiminiz 3 saniye sürsün',
    en: 'Make your next audit take three seconds',
  },
  ctaText: {
    tr: 'Crawlseer Chrome Web Store’da yayınlandığında haberdar olmak için tek bir e-posta yeterli.',
    en: 'One email is all it takes to hear about Crawlseer when it reaches the Chrome Web Store.',
  },
} as const;

export const whyFeatures: Feature[] = [
  {
    title: { tr: 'Gerçek Core Web Vitals', en: 'Real Core Web Vitals' },
    text: {
      tr: 'LCP, CLS ve TTFB tarayıcının performans zaman çizelgesinden okunur — tahmini bir skor değil. LCP dört alt parçasına ayrılır, CLS oturum penceresi kuralıyla hesaplanır.',
      en: 'LCP, CLS and TTFB are read from the browser’s performance timeline rather than estimated. LCP is broken into its four sub-parts and CLS uses the session-window rule.',
    },
  },
  {
    title: { tr: '16 yapay zekâ tarayıcısı', en: '16 AI crawlers' },
    text: {
      tr: 'GPTBot, ClaudeBot, PerplexityBot, Google-Extended ve diğerleri için robots.txt kuralları RFC 9309’a göre çözümlenir. Kullanıcı tetiklemeli getiriciler ayrı gösterilir.',
      en: 'robots.txt rules for GPTBot, ClaudeBot, PerplexityBot, Google-Extended and the rest are resolved per RFC 9309. User-triggered fetchers are listed separately.',
    },
  },
  {
    title: { tr: 'Ham HTML ↔ render farkı', en: 'Raw HTML vs rendered DOM' },
    text: {
      tr: 'Sunucunun gönderdiği HTML ile tarayıcının oluşturduğu sayfa karşılaştırılır. JavaScript çalıştırmayan botların hangi içeriği kaçırdığını gösterir.',
      en: 'The HTML the server sent is compared with the page the browser built, showing exactly what a bot that does not run JavaScript would miss.',
    },
  },
];

export const tabFeatures: Feature[] = [
  {
    title: { tr: 'Hangi bot gerçekten girebiliyor?', en: 'Which bots can actually get in?' },
    text: {
      tr: 'robots.txt yalnızca okunmaz, çözümlenir. Bir tarayıcının kendi adlandırılmış kaydı varsa joker kuralın tamamen devre dışı kaldığını bilir — bu ayrım çoğu araçta atlanır ve yanlış "izinli" sonucu üretir.',
      en: 'robots.txt is resolved, not just read. When a crawler has its own named group the wildcard group stops applying entirely — a distinction most tools miss, and one that produces false "allowed" verdicts.',
    },
    points: [
      { tr: 'Eğitim / alıntılama / arama gruplarına ayrılmış matris', en: 'A matrix split into training, citation and search groups' },
      { tr: 'X-Robots-Tag ve Cloudflare Content-Signal okuması', en: 'X-Robots-Tag and Cloudflare Content-Signal parsing' },
      { tr: 'Sitemap index ağacı — sayfanız içinde mi, değil mi', en: 'The sitemap index tree — is your page in it or not' },
      { tr: 'robots.txt’te bildirilen ama erişilemeyen sitemap adresleri', en: 'Sitemap URLs declared in robots.txt but unreachable' },
    ],
  },
  {
    title: { tr: 'Yapay zekâ sizi görebiliyor mu?', en: 'Can AI see you?' },
    text: {
      tr: 'AI Görünürlük sekmesi, içeriğinizin üretken arama motorlarında kaynak gösterilmeye uygun olup olmadığını yedi ayrı blokta inceler. Her blokta bulgunun kanıt düzeyi yazar: dokümante mi, ölçülmüş mü.',
      en: 'The AI Visibility pane examines whether your content is fit to be cited by generative search engines across seven blocks, and states the evidence level behind each finding: documented, or measured.',
    },
    points: [
      { tr: 'AI Overviews uygunluğu — nosnippet ve max-snippet denetimi', en: 'AI Overviews eligibility — nosnippet and max-snippet checks' },
      { tr: 'Ham HTML ↔ render farkı ve JavaScript bağımlılık oranı', en: 'Raw-vs-rendered delta and JavaScript dependency ratio' },
      { tr: 'Schema ↔ görünür metin eşleşmesi', en: 'Schema against visible text' },
      { tr: 'Alıntılanabilirlik, tarih tutarlılığı ve agent readiness', en: 'Citability, date consistency and agent readiness' },
    ],
  },
  {
    title: { tr: 'Schema alanları, 2026 kurallarıyla', en: 'Schema fields, against 2026 rules' },
    text: {
      tr: 'JSON-LD, Microdata ve RDFa; @graph düzleştirmesi ve dizi @type desteğiyle. Aynı türden birden fazla düğüm varsa her biri ayrı doğrulanır ve alanın kaçında var, kaçında yok — açıkça yazar.',
      en: 'JSON-LD, Microdata and RDFa, with @graph flattening and array @type support. Where several nodes share a type each is validated separately, and the report states in how many the field is present.',
    },
    points: [
      { tr: '21 tip için zorunlu ve önerilen alan denetimi', en: 'Required and recommended field checks for 21 types' },
      { tr: 'Artık zengin sonuç üretmeyen tipler (FAQPage, HowTo) uyarıyla', en: 'Types that no longer produce rich results (FAQPage, HowTo) flagged' },
      { tr: 'Geçersiz JSON-LD ve tanımsız @id referansları', en: 'Invalid JSON-LD and dangling @id references' },
      { tr: 'Yapılandırılmış veri ile sayfada görünen metnin karşılaştırması', en: 'Structured data compared with the text on the page' },
    ],
  },
  {
    title: { tr: 'Hreflang, gerçekten geçerli mi?', en: 'Is the hreflang actually valid?' },
    text: {
      tr: 'Dil kodları tarayıcının kendi BCP 47 çözümleyicisiyle doğrulanır. Büyük/küçük harf farkı sorun çıkarmaz; buna karşılık en-UK gibi klasik hatalar yakalanır ve doğrusu (en-GB) gösterilir.',
      en: 'Language codes are validated with the browser’s own BCP 47 resolver. Case differences are tolerated, while classic mistakes like en-UK are caught and the correct form (en-GB) is shown.',
    },
    points: [
      { tr: 'x-default ve kendine referans kontrolü', en: 'x-default and self-reference checks' },
      { tr: 'Göreli adres ve tekrar eden dil kodu tespiti', en: 'Relative URLs and duplicate language codes' },
    ],
  },
];

export const privacyCards: Feature[] = [
  {
    title: { tr: 'Sunucu yok', en: 'No server' },
    text: {
      tr: 'Uzantının arka ucu yoktur. Tüm analiz tarayıcınızda çalışır.',
      en: 'The extension has no backend. Every analysis runs in your browser.',
    },
  },
  {
    title: { tr: 'Adres saklanmaz', en: 'No URLs stored' },
    text: {
      tr: 'Puan geçmişinde sayfa adresi değil, geri döndürülemez SHA-256 özeti tutulur.',
      en: 'Score history keeps an irreversible SHA-256 digest of the page address, not the address itself.',
    },
  },
  {
    title: { tr: 'Üçüncü taraf kod yok', en: 'No third-party code' },
    text: {
      tr: 'Pakette hiç harici kütüphane yoktur; uzaktan kod yüklenmez.',
      en: 'The package contains no external libraries and loads no remote code.',
    },
  },
  {
    title: { tr: 'Tek tıkla silin', en: 'Clear it in one click' },
    text: {
      tr: '"Geçmişi Temizle" butonu kayıtlı her şeyi kaldırır — uzantıyı silmenize gerek yok.',
      en: 'The "Clear history" button removes everything stored — you do not have to uninstall.',
    },
  },
];

export const faqs: Faq[] = [
  {
    q: { tr: 'Gerçekten ücretsiz mi, sonradan ücretli olur mu?', en: 'Is it really free, or will it start charging?' },
    a: {
      tr: 'Bugün sunulan tüm özellikler kalıcı olarak ücretsizdir ve bu, gizlilik politikasında bağlayıcı bir taahhüt olarak yazılıdır. Mevcut hiçbir özellik ödeme duvarının arkasına alınmayacaktır.',
      en: 'Everything offered today is permanently free, and that is written into the privacy policy as a binding commitment. No existing feature will move behind a paywall.',
    },
  },
  {
    q: { tr: 'Neden bazı özellikler için ek izin istiyor?', en: 'Why does it ask for extra permission for some features?' },
    a: {
      tr: 'Yalnızca iki özellik ek izin ister: Kırık Link Kontrolü ve yönlendirme tespiti. Bunlar sayfadaki bağlantıların hedeflerine istek göndermeyi gerektirir. İzin istenmeden hiçbir istek yapılmaz.',
      en: 'Only two features do: broken-link checking and redirect detection. Both need to send requests to the targets of links on the page, and no request is made before you grant permission.',
    },
  },
  {
    q: { tr: 'Core Web Vitals değerleri Search Console’daki ile aynı mı?', en: 'Do the Core Web Vitals match Search Console?' },
    a: {
      tr: 'Hayır — ve bu kasıtlıdır. Crawlseer laboratuvar verisi ölçer: sizin cihazınızda, sizin bağlantınızda, o anki yüklemede ne olduğunu gösterir. Search Console ise gerçek kullanıcıların alan verisini gösterir.',
      en: 'No, and that is deliberate. Crawlseer measures lab data: what happened on your device, on your connection, in that particular load. Search Console reports field data from real users.',
    },
  },
  {
    q: { tr: 'Sayfa arka planda yüklendiyse ölçüm doğru olur mu?', en: 'Is the measurement valid if the page loaded in a background tab?' },
    a: {
      tr: 'Olmaz, ve uzantı bunu size söyler. Arka plan sekmesi siz bakana kadar boyanmaz; bu durumda LCP değeri sayfanın hızını değil sekmenin ne kadar beklediğini ölçer.',
      en: 'It is not, and the extension tells you so. A background tab does not paint until you look at it, so LCP would measure how long the tab waited rather than how fast the page is.',
    },
  },
  {
    q: { tr: 'Verilerimi nasıl silerim?', en: 'How do I delete my data?' },
    a: {
      tr: 'Genel Bakış sekmesinde, trend grafiğinin altındaki "Geçmişi Temizle" bağlantısı kayıtlı tüm puan geçmişini siler. Tema tercihi dahil her şeyi silmek için uzantıyı kaldırmanız yeterlidir.',
      en: 'In the Overview pane, the "Clear history" link under the trend chart removes all stored score history. Uninstalling the extension removes everything, including the theme preference.',
    },
  },
  {
    q: { tr: 'Hangi tarayıcılarda çalışır?', en: 'Which browsers does it work in?' },
    a: {
      tr: 'Chrome 116 ve üzeri. Manifest V3 ile yazılmıştır, dolayısıyla Edge, Brave, Opera ve Vivaldi gibi Chromium tabanlı tarayıcılarda da çalışır.',
      en: 'Chrome 116 and later. It is built on Manifest V3, so it also runs in Chromium-based browsers such as Edge, Brave, Opera and Vivaldi.',
    },
  },
];

export const screenshots = [
  {
    src: '/crawlseer/screenshot-1-genel-bakis.png',
    alt: {
      tr: 'Crawlseer Genel Bakış sekmesi: 100 üzerinden SEO skoru ve beş kategoriye ayrılmış puan kırılımı',
      en: 'The Crawlseer Overview pane: an SEO score out of 100 with the breakdown across five categories',
    },
  },
  {
    src: '/crawlseer/screenshot-2-crawler-matrisi.png',
    alt: {
      tr: 'Taranabilirlik sekmesi: yapay zekâ tarayıcıları için izinli ve engelli durumlarını gösteren matris',
      en: 'The Crawlability pane: a matrix showing allowed and blocked status for each AI crawler',
    },
  },
  {
    src: '/crawlseer/screenshot-3-ai-gorunurluk.png',
    alt: {
      tr: 'AI Görünürlük sekmesi: AI Overviews uygunluğu, ham HTML render farkı ve schema eşleşmesi',
      en: 'The AI Visibility pane: AI Overviews eligibility, raw-vs-rendered delta and schema matching',
    },
  },
  {
    src: '/crawlseer/screenshot-4-schema.png',
    alt: {
      tr: 'Schema sekmesi: Organization tipinde alan doğrulama rozetleri ve JSON-LD dökümü',
      en: 'The Schema pane: field validation badges for an Organization type and the JSON-LD dump',
    },
  },
  {
    src: '/crawlseer/screenshot-5-hreflang.png',
    alt: {
      tr: 'Hreflang sekmesi: dil etiketleri tablosu, geçersiz bölge kodu ve göreli URL uyarıları',
      en: 'The Hreflang pane: the language tag table with invalid region code and relative URL warnings',
    },
  },
] as const;
