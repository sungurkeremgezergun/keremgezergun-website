import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';
import LoopVideo from '@/components/ui/LoopVideo';
import { postByPath } from '@/lib/blog/posts';
import { jsonLdSafe } from '@/lib/jsonLd';
import { BASE_URL, PERSON_ID, WEBSITE_ID, graph, ref } from '@/lib/schema/base';
import { breadcrumbNode, faqNode, type Faq } from '@/lib/schema/page';

const PATH = '/mena-search-awards-2026-emerging-talent-award';
const PAGE_URL = `${BASE_URL}${PATH}`;
const MEDIA = '/images/mena-2026';

/** The H1, reused as the BlogPosting headline and the last breadcrumb. */
const HEADLINE = 'MENA Search Awards 2026’da Emerging Talent Award’ı Kazandım';

/** Root layout appends " | Kerem Gezergün", so the title stays short here. */
const TITLE = 'SEO Emerging Talent Award 2026 Kazananı';

const DESCRIPTION =
  'MENA Search Awards 2026’da SEO Emerging Talent Award’ı kazandım. Jürinin değerlendirmesini, ödülün arkasındaki çalışmaları ve ücretsiz SEO araçlarımı anlattım.';

const PUBLISHED = '2026-11-12';
const PUBLISHED_LABEL = '12 Kasım 2026';
const ANNOUNCED = '2026-11-11';
const ANNOUNCED_LABEL = '11 Kasım 2026';

/** ~800 words in the draft at ~200 wpm. Update by hand if the text changes. */
const WORD_COUNT = 800;
const READING_TIME = '4 dk okuma';

const OG_IMAGE = {
  url: `${BASE_URL}${postByPath(PATH).cover}`,
  width: 1200,
  height: 630,
  alt: 'MENA Search Awards 2026 Emerging Talent Award kazananı: Sungur Kerem Gezergün',
};

const JURY_IMAGE = {
  src: `${MEDIA}/yazi_ici_juri_yorumu_1920x1080.jpg`,
  width: 1920,
  height: 1080,
  alt: 'Jüri yorumu: Teknik yaratıcılığını SEO’yu daha erişilebilir ve etkili kılma tutkusuyla birleştiren, olağanüstü bir yükselen yetenek',
};

const ANSWER_IMAGE = {
  src: `${MEDIA}/yazi_ici_arama_cevabi_1920x1080.jpg`,
  width: 1920,
  height: 1080,
  alt: 'Arama ekranında MENA Search Awards 2026 Emerging Talent Award’ın kazananı olarak Sungur Kerem Gezergün isminin vurgulandığı cevap',
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: HEADLINE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [OG_IMAGE],
    locale: 'tr_TR',
    type: 'article',
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [`${BASE_URL}/`],
    section: 'Ödüller',
  },
  twitter: {
    card: 'summary_large_image',
    title: HEADLINE,
    description: DESCRIPTION,
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: [OG_IMAGE.url],
  },
};

const faqs: Faq[] = [
  {
    q: 'MENA Search Awards 2026 Emerging Talent Award’ı kim kazandı?',
    a: `MENA Search Awards 2026 Emerging Talent Award’ı İstanbul’dan SEO uzmanı Sungur Kerem Gezergün kazandı. Kazananlar ${ANNOUNCED_LABEL}’de açıklandı.`,
  },
  {
    q: 'MENA Search Awards nedir?',
    a: 'Orta Doğu ve Kuzey Afrika’da arama pazarlaması alanında öne çıkan işleri ve profesyonelleri ödüllendiren bir programdır. Search Awards serisinin bir parçasıdır, Don’t Panic Events tarafından düzenlenir ve SEO, ücretli arama, içerik pazarlaması ve analitik gibi alanları kapsar.',
  },
  {
    q: 'Jüri hangi çalışmaları öne çıkardı?',
    a: 'Jüri en çok kısıtları pratik çözümlere dönüştürme becerisini öne çıkardı: kapsamlı bir SEO analiz aracı ve devasa log dosyalarını işleyebilen bir yazılım. Bunların yanında güçlü ticari sonuçlar, herkesin kullanabileceği araçlar ve başkalarını eğitmeye verilen önem de değerlendirmede yer aldı.',
  },
];

const timeline = [
  {
    title: 'Kendi kendime öğrenerek',
    text: 'SEO’ya kimseden ders almadan, okuyarak ve deneyerek başladım. İlk işlerim içerik firmalarında SEO metin yazarlığı ve editörlüktü.',
  },
  {
    title: 'Sahaya ilk adım',
    text: 'Kemique’te e-ticaret SEO stajıyla sahaya çıktım. Nisan 2023’te de D-DAT’ta Junior SEO Specialist olarak çalışmaya başladım.',
  },
  {
    title: 'Ekip liderliği',
    text: 'Aralık 2023’te stajyer olarak katıldığım BusinessUp!’ta, bir yıl içinde Senior SEO Specialist oldum. Ekibe liderlik ettim ve geniş bir marka portföyünü yönettim.',
  },
  {
    title: 'Bugün',
    text: 'Ağustos 2026’dan bu yana Hepsiburada’da SEO Specialist olarak çalışıyorum.',
  },
];

const articleGraph = graph(
  {
    '@type': 'BlogPosting',
    '@id': `${PAGE_URL}#article`,
    headline: HEADLINE,
    description: DESCRIPTION,
    url: PAGE_URL,
    mainEntityOfPage: PAGE_URL,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    inLanguage: 'tr-TR',
    articleSection: 'Ödüller',
    wordCount: WORD_COUNT,
    image: [OG_IMAGE.url, `${BASE_URL}${JURY_IMAGE.src}`, `${BASE_URL}${ANSWER_IMAGE.src}`],
    author: ref(PERSON_ID),
    publisher: ref(PERSON_ID),
    isPartOf: ref(WEBSITE_ID),
    about: {
      '@type': 'Event',
      name: 'MENA Search Awards 2026',
      url: 'https://menasearchawards.com/',
      organizer: { '@type': 'Organization', name: 'Don’t Panic Events' },
    },
  },
  breadcrumbNode('tr', { name: 'Blog', url: `${BASE_URL}/blog` }, { name: HEADLINE, url: PAGE_URL }),
  faqNode(PAGE_URL, 'tr', faqs),
);

function Chevron() {
  return (
    <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function MenaSearchAwardsPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(articleGraph) }}
      />

      {/* Page Header: text beside the award loop, stacked on narrow screens. */}
      <section className="page-header article-header award-post-header" aria-labelledby="page-title">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Ana Sayfa</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li aria-current="page">MENA Search Awards 2026</li>
            </ol>
          </nav>
          <div className="award-post-hero">
            <div className="award-post-hero-text">
              <span className="section-tag">
                Ödül · <time dateTime={ANNOUNCED}>{ANNOUNCED_LABEL}</time>
              </span>
              <h1 id="page-title">
                MENA Search Awards 2026’da <em>Emerging Talent Award</em>’ı kazandım
              </h1>
              <p className="award-post-lead">
                Orta Doğu ve Kuzey Afrika’nın arama pazarlaması ödülleri MENA Search Awards’ta
                Emerging Talent Award’ı (Yükselen Yetenek Ödülü) kazandım. Jürinin değerlendirmesini,
                ödülün arkasındaki çalışmaları ve bu noktaya nasıl geldiğimi bu yazıda anlattım.
              </p>
              <p className="article-meta">
                <Link href="/" rel="author">
                  Kerem Gezergün
                </Link>
                <span aria-hidden="true">·</span>
                <time dateTime={PUBLISHED}>{PUBLISHED_LABEL}</time>
                <span aria-hidden="true">·</span>
                <span>{READING_TIME}</span>
              </p>
            </div>
            <figure className="award-post-hero-media loop-video">
              <LoopVideo
                src={`${MEDIA}/hero_dongu_800x960.mp4`}
                poster={`${MEDIA}/hero_dongu_poster_800x960.jpg`}
                still={`${MEDIA}/hero_1200x1440.jpg`}
                label="MENA Search Awards 2026 Emerging Talent Award kazananı: Sungur Kerem Gezergün"
                pauseLabel="Animasyonu durdur"
                playLabel="Animasyonu oynat"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="page-content">
        <div className="container">
          <article className="article award-post">
            <header className="article-lead">
              <p>
                {ANNOUNCED_LABEL}’de açıklanan MENA Search Awards 2026 sonuçlarında{' '}
                <strong>Emerging Talent Award</strong>’ı kazandım. SEO’yu kendi kendime öğrenmeye
                başladığımda, bir gün bölgenin arama ödüllerinde adımın okunacağını hayal bile
                edemezdim. Bu ödül bugüne kadar emek verdiğim her şeyin karşılığı gibi; ama aynı
                zamanda bundan sonrası için de büyük bir motivasyon.
              </p>
            </header>

            <figure className="article-figure article-video">
              <video
                controls
                playsInline
                preload="metadata"
                poster={`${MEDIA}/yazi_ici_video_poster_1920x1080.jpg`}
                width={1920}
                height={1080}
              >
                <source src={`${MEDIA}/yazi_ici_video_1920x1080.mp4`} type="video/mp4" />
              </video>
              <figcaption>
                Ödül için hazırladığım video: Bir arama motoruna “Emerging Talent Award’ı kim
                kazandı?” diye sorduğunuzda gelen cevap.
              </figcaption>
            </figure>

            <section id="mena-search-awards-nedir">
              <h2>MENA Search Awards nedir?</h2>
              <p>
                MENA Search Awards, Orta Doğu ve Kuzey Afrika’da arama pazarlaması alanında öne çıkan
                işleri ve profesyonelleri ödüllendiren bir program. Search Awards serisinin bir parçası
                ve organizasyonunu Don’t Panic Events üstleniyor. SEO, ücretli arama (PPC), içerik
                pazarlaması ve analitik gibi pek çok alanda kategorisi var.
              </p>
              <p>
                Emerging Talent Award ise adından da anlaşılacağı gibi sektörde yükselen yetenekleri öne
                çıkaran kategori. Bu yıl ödül Diginius iş birliğiyle verildi.
              </p>
            </section>

            <section id="juri-ne-dedi">
              <h2>Jüri ne dedi?</h2>
              <figure className="article-figure">
                <Image
                  src={JURY_IMAGE.src}
                  alt={JURY_IMAGE.alt}
                  width={JURY_IMAGE.width}
                  height={JURY_IMAGE.height}
                  sizes="(max-width: 860px) 100vw, 760px"
                />
              </figure>
              <blockquote className="award-quote">
                <p>
                  “Teknik yaratıcılığını SEO’yu daha erişilebilir ve etkili kılma tutkusuyla
                  birleştiren, olağanüstü bir yükselen yetenek. Jüri özellikle kısıtları pratik
                  çözümlere dönüştürme becerisinden etkilendi: kapsamlı bir SEO analiz aracından devasa
                  log dosyalarını işleyebilen bir yazılıma kadar. Güçlü ticari sonuçları, herkesin
                  bağımsız olarak kullanabileceği araçları ve başkalarını eğitmeye verdiği önem,
                  kariyerinin bu döneminin çok ötesinde bir yetenek olduğunu gösteriyor.”
                </p>
                <p className="award-quote-original" lang="en">
                  Original: “An exceptional emerging talent who combines technical ingenuity with a
                  genuine drive to make SEO more accessible and effective. The judges were particularly
                  impressed by the ability to turn constraints into practical solutions, from building a
                  comprehensive SEO analysis tool to developing software capable of processing enormous
                  log files. Strong commercial results, independently usable tools and a commitment to
                  educating others demonstrate talent that extends well beyond his career stage.”
                </p>
                <footer>
                  <cite>MENA Search Awards 2026 jürisi</cite>
                </footer>
              </blockquote>
            </section>

            <section id="kisitlardan-araclara">
              <h2>Kısıtlardan araçlara</h2>
              <p>
                Jürinin en çok öne çıkardığı nokta, kısıtları pratik çözümlere dönüştürme becerisiydi.
                Bunun en somut örnekleri de geliştirip herkesin ücretsiz kullanabilmesi için
                yayınladığım araçlar:
              </p>
              <ul className="award-tools">
                <li>
                  <Link href="/nirengi" className="award-tool">
                    <span className="award-tool-kind">Mac uygulaması</span>
                    <span className="award-tool-name">Nirengi</span>
                    <span className="award-tool-text">
                      Log dosyası analiz aracı. Googlebot’un ve yapay zekâ tarayıcılarının sitenizi
                      nasıl gezdiğini karşılaştırır, 41 farklı rapor sunar. Dosyalarınız
                      bilgisayarınızdan çıkmaz.
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/crawlseer" className="award-tool">
                    <span className="award-tool-kind">Chrome eklentisi</span>
                    <span className="award-tool-name">Crawlseer</span>
                    <span className="award-tool-text">
                      Açık sekmedeki sayfayı anında denetler. 11 analiz sekmesi, Core Web Vitals
                      ölçümleri ve 16 yapay zekâ tarayıcısı için robots.txt erişim tablosu içerir.
                    </span>
                  </Link>
                </li>
              </ul>
              <p>
                Jürinin altını çizdiği bir diğer konu da başkalarını eğitmekti. Öğrendiklerimi{' '}
                <Link href="/blog">blogumda</Link>,{' '}
                <Link href="/seo-ogrenme-haritasi">SEO Rehberi’nde</Link> ve{' '}
                <a href="https://www.youtube.com/@keremgezergun" target="_blank" rel="noopener noreferrer">
                  Sepetteki SEO podcast’inde
                </a>{' '}
                paylaşmayı sürdürüyorum.
              </p>
            </section>

            <section id="bu-noktaya-nasil-geldim">
              <h2>Bu noktaya nasıl geldim?</h2>
              <p>Bu ödülün arkasında yıllara yayılan bir yol var.</p>
              <ol className="award-timeline">
                {timeline.map(({ title, text }) => (
                  <li key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </li>
                ))}
                <li className="award-timeline-now">
                  <h3>Kasım 2026</h3>
                  <p>Ve MENA Search Awards 2026’da Emerging Talent Award’ı kazandım.</p>
                </li>
              </ol>
              <p>
                Bundan sonra da araç geliştirmeye, üretmeye ve öğrendiklerimi paylaşmaya devam edeceğim.
              </p>
              <figure className="article-figure">
                <Image
                  src={ANSWER_IMAGE.src}
                  alt={ANSWER_IMAGE.alt}
                  width={ANSWER_IMAGE.width}
                  height={ANSWER_IMAGE.height}
                  sizes="(max-width: 860px) 100vw, 760px"
                />
                <figcaption>İşim, markaları arama sonuçlarında görünür kılmak. Bu kez cevap ben oldum.</figcaption>
              </figure>
            </section>

            <section id="tesekkurler">
              <h2>Teşekkürler</h2>
              <p>
                Bu yolda gelişimime katkısı olan herkese, bilgisini cömertçe paylaşan SEO topluluğuna
                ve her zaman yanımda olan dostlarıma çok teşekkür ederim. Değerlendirmeleri için MENA
                Search Awards’a, Diginius’a ve jüriye de ayrıca teşekkürler.
              </p>
              <div className="award-thanks">
                <p>
                  En büyük teşekkürüm ise aileme. Bu yolun her adımında yanımdaydınız; bu ödül sizin de
                  ödülünüz.
                </p>
                <p>Ve kardeşim: Desteğin benim için her şeyden değerli. İyi ki varsın.</p>
              </div>
            </section>

            <section className="article-faq" id="sss">
              <h2>Sıkça sorulan sorular</h2>
              <div className="faq-list">
                {faqs.map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-question">
                      <span>{q}</span>
                      <Chevron />
                    </summary>
                    <div className="faq-answer">
                      <p>{a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <aside className="award-cta" aria-labelledby="award-cta-heading">
              <Image
                src={`${MEDIA}/mena_rozet_512.png`}
                alt=""
                width={96}
                height={96}
                className="award-cta-badge"
              />
              <div>
                <h2 id="award-cta-heading">Konuşma, eğitim ve iş birlikleri</h2>
                <p>
                  Etkinliğinizde SEO, log analizi ya da araç geliştirme üzerine konuşmamı veya ekibinize
                  eğitim vermemi isterseniz bana yazın.
                </p>
                <Link href="/iletisim" className="btn btn-primary">
                  İletişime geç
                </Link>
              </div>
            </aside>
          </article>
        </div>
      </section>

      <RelatedPosts current={PATH} />
    </main>
  );
}
