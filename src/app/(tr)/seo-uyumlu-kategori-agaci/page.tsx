import type { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { postBySlug } from '@/lib/blog/posts';
import { contact } from '@/lib/contact';
import { jsonLdSafe } from '@/lib/jsonLd';
import { BASE_URL, PERSON_ID, WEBSITE_ID, graph, ref } from '@/lib/schema/base';
import { breadcrumbNode, faqNode, type Faq } from '@/lib/schema/page';

const PAGE_URL = `${BASE_URL}/seo-uyumlu-kategori-agaci`;

/** The H1, reused as the BlogPosting headline and the last breadcrumb. */
const HEADLINE = 'SEO Uyumlu Kategori Ağacı Nasıl Oluşturulur?';

/** Root layout appends " | Kerem Gezergün", so the title stays short here. */
const TITLE = HEADLINE;

const DESCRIPTION =
  'Semrush, Search Console, Google Ads ve SERP analiziyle hangi e-ticaret kategorilerinin açılması gerektiğini belirleyin ve SEO uyumlu kategori ağacı oluşturun.';

const PUBLISHED = '2026-09-22';
const PUBLISHED_LABEL = '22 Eylül 2026';

/** 3,220 words in the draft at ~200 wpm. Update by hand if the text changes. */
const WORD_COUNT = 3220;
const READING_TIME = '16 dk okuma';

const OG_IMAGE = {
  url: `${BASE_URL}${postBySlug('seo-uyumlu-kategori-agaci').cover}`,
  width: 1200,
  height: 630,
  alt: 'SEO Uyumlu Kategori Ağacı Nasıl Oluşturulur? — Kerem Gezergün',
};

/**
 * Turkish-only post: no `alternateMetadata`, because that helper always emits
 * an `en` hreflang and there is no English version of this article.
 */
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
    languages: { tr: PAGE_URL },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [OG_IMAGE],
    locale: 'tr_TR',
    type: 'article',
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [`${BASE_URL}/`],
    section: 'E-ticaret SEO',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: [OG_IMAGE.url],
  },
};

/**
 * Section ids are ASCII slugs of the headings (Turkish letters mapped by
 * hand); in-page links elsewhere may rely on them. Grouped for the TOC.
 */
const toc = [
  {
    label: 'Temeller',
    collapsed: false,
    items: [
      { id: 'kategori-agaci-nedir', label: 'Kategori Ağacı Nedir?' },
      {
        id: 'e-ticaret-markalari-kategori-agacinda-neyi-kaciriyor',
        label: 'E-Ticaret Markaları Kategori Ağacında Neyi Kaçırıyor?',
      },
      {
        id: 'tek-anahtar-kelime-yerine-kategori-agi-olusturun',
        label: 'Tek Anahtar Kelime Yerine Kategori Ağı Oluşturun',
      },
    ],
  },
  {
    label: 'Adım adım',
    collapsed: false,
    items: [
      { id: '1-adim-anahtar-kelime-arastirmasi-yapin', label: '1. Adım: Anahtar Kelime Araştırması Yapın' },
      {
        id: '2-adim-hangi-alt-kategorilerin-acilacagina-karar-verin',
        label: '2. Adım: Hangi Alt Kategorilerin Açılacağına Karar Verin',
      },
      {
        id: '3-adim-yeni-kategoriyi-site-mimarisine-dogru-yerlestirin',
        label: '3. Adım: Yeni Kategoriyi Site Mimarisine Doğru Yerleştirin',
      },
      {
        id: '4-adim-her-arama-niyetine-birincil-landing-page-atayin',
        label: '4. Adım: Her Arama Niyetine Birincil Landing Page Atayın',
      },
    ],
  },
  {
    label: 'Uygulama ve takip',
    collapsed: true,
    items: [
      {
        id: 'keyword-cannibalization-ne-zaman-problem-olur',
        label: 'Keyword Cannibalization Ne Zaman Problem Olur?',
      },
      {
        id: 'kategori-agaci-olustururken-en-sik-yapilan-hatalar',
        label: 'Kategori Ağacı Oluştururken En Sık Yapılan Hatalar',
      },
      { id: 'kategori-yasam-dongusunu-yonetin', label: 'Kategori Yaşam Döngüsünü Yönetin' },
      {
        id: 'kategori-performansini-nasil-takip-etmelisiniz',
        label: 'Kategori Performansını Nasıl Takip Etmelisiniz?',
      },
      { id: 'kontrol-listesi', label: 'SEO Uyumlu Kategori Ağacı Kontrol Listesi' },
      { id: 'sss', label: 'Sık Sorulan Sorular' },
      { id: 'sonuc', label: 'Sonuç' },
    ],
  },
];

const faqs: Faq[] = [
  {
    q: 'Kategori ağacı ile filtre arasındaki fark nedir?',
    a: 'Kategori ağacı, sitenin kalıcı ürün gruplarını ve bunlar arasındaki hiyerarşiyi ifade eder. Filtre ise kullanıcının mevcut kategori içerisindeki ürünleri renk, beden, kumaş veya fiyat gibi özelliklere göre daraltmasını sağlar. Her filtre seçeneğinin ayrı kategoriye dönüştürülmesi gerekmez; SEO kategorileri gerçek arama talebi ve farklılaşmış kullanıcı niyeti bulunduğunda oluşturulmalıdır.',
  },
  {
    q: 'Kaç alt kategori açılmalı?',
    a: 'Sabit bir sayı yoktur. Kategori sayısı arama talebine, ürün çeşitliliğine, site büyüklüğüne, operasyonel kapasiteye ve SERP davranışına göre belirlenmelidir. Amaç mümkün olduğunca fazla kategori açmak değil, kullanıcının gerçek ihtiyaçlarını karşılayan doğru landing page’leri oluşturmaktır.',
  },
  {
    q: 'Kategori için minimum kaç ürün gerekir?',
    a: 'Google’ın resmi bir minimum ürün sayısı bulunmaz. Ancak kategori kullanıcıya anlamlı bir seçim sunmalıdır. Çoğu e-ticaret projesinde 4-5 stoklu ürün operasyonel bir minimum eşik olarak değerlendirilebilir ancak kategoriye ve sektöre göre daha yüksek ürün sayısı gerekebilir.',
  },
  {
    q: 'Semrush olmadan kategori ağacı oluşturulabilir mi?',
    a: 'Evet. Google Ads Keyword Planner, Search Console ve manuel SERP analiziyle güçlü bir kategori araştırması yapılabilir. Semrush süreci hızlandırır ancak zorunlu değildir.',
  },
  {
    q: 'Aynı ürün birden fazla kategoride bulunabilir mi?',
    a: 'Evet. Örneğin siyah mini bir elbise hem “Siyah Elbise” hem de “Mini Elbise” kategorisinde yer alabilir. Ürünün ilgili kategori tanımını gerçekten karşılaması yeterlidir.',
  },
  {
    q: 'Search Console kategori fırsatlarını bulmak için kullanılabilir mi?',
    a: 'Evet. Özellikle genel kategori sayfalarının aldığı uzun kuyruklu sorgular yeni alt kategori fırsatlarını gösterebilir. Yüksek gösterim alan fakat mevcut sayfanın iyi sıralanamadığı spesifik sorgular özellikle incelenmelidir.',
  },
  {
    q: 'Aynı anahtar kelime birden fazla sayfada kullanılabilir mi?',
    a: 'Birden fazla sayfanın aynı kelimeyi içermesi problem değildir. Problem, aynı arama niyetini karşılayan birbirine çok benzeyen landing page’lerin oluşturulmasıdır. Bu nedenle her temel intent için birincil bir landing page belirlemek daha sağlıklı bir yöntemdir.',
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
    articleSection: 'E-ticaret SEO',
    wordCount: WORD_COUNT,
    image: OG_IMAGE.url,
    author: ref(PERSON_ID),
    publisher: ref(PERSON_ID),
    isPartOf: ref(WEBSITE_ID),
    about: ['E-ticaret SEO', 'Kategori Ağacı', 'Site Mimarisi', 'Anahtar Kelime Araştırması', 'SERP Analizi'].map(
      (name) => ({ '@type': 'Thing', name }),
    ),
  },
  breadcrumbNode('tr', { name: 'Blog', url: `${BASE_URL}/blog` }, { name: HEADLINE, url: PAGE_URL }),
  faqNode(PAGE_URL, 'tr', faqs),
);

/** Decorative check mark in front of each checklist row. */
function CheckIcon() {
  return (
    <svg className="checklist-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="8 12 11 15 16 9" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/** The draft's checklist rows ("☐ …") with the decorative check mark. */
function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="article-checklist">
      {items.map((item) => (
        <li key={item}>
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CategoryTreeGuidePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(articleGraph) }}
      />

      {/* Page Header */}
      <section className="page-header article-header" aria-labelledby="page-title">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Ana Sayfa</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li aria-current="page">Kategori Ağacı Rehberi</li>
            </ol>
          </nav>
          <span className="section-tag">Rehber</span>
          <h1 id="page-title">{HEADLINE}</h1>
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
      </section>

      {/* Article */}
      <section className="page-content">
        <div className="container">
          <article className="article">
            <header className="article-lead">
              <p>
                E-ticaret SEO denince çoğu marka ürün açıklamalarını, blog yazılarını ya da site
                hızını düşünür. Organik satış potansiyelini doğrudan etkileyen alanlardan biri ise
                çoğu zaman gözden kaçar: <strong>kategori ağacı.</strong>
              </p>
              <p>
                Google’daki birçok alışveriş araması tek bir ürünü değil, bir ürün grubunu hedefler.
                “Siyah elbise”, “saten elbise” veya “beyaz mini elbise” arayan kullanıcı tek bir ürün
                görmek yerine alternatifleri karşılaştırmak ister.
              </p>
              <p>
                Bu nedenle bu tür sorguların önemli bir bölümünde Google’ın kullanıcıya göstermek
                istediği sayfa türü ürün detay sayfasından ziyade kategori veya ürün listeleme
                sayfasıdır.
              </p>
              <p>
                Sitenizde yalnızca genel bir “Elbise” kategorisi bulunuyorsa, daha spesifik
                aramalarda rakiplerinize önemli bir alan bırakabilirsiniz.
              </p>
              <p>Bu rehberde elbise kategorisi üzerinden;</p>
              <ul className="article-fragments">
                <li>hangi alt kategorilerin açılması gerektiğini,</li>
                <li>hangi anahtar kelimelerin mevcut kategorilerden hedeflenebileceğini,</li>
                <li>yeni kategorilerin site mimarisine nasıl yerleştirileceğini,</li>
                <li>kategori çakışmalarının nasıl önleneceğini,</li>
                <li>açılan kategorilerin nasıl takip edilmesi gerektiğini</li>
              </ul>
              <p>adım adım ele alacağız.</p>
            </header>

            <nav className="article-toc article-toc-grouped" aria-labelledby="toc-heading">
              <p id="toc-heading" className="article-toc-title">
                İçindekiler
              </p>
              {toc.map((group) => (
                <details key={group.label} className="article-toc-group" open={!group.collapsed}>
                  <summary className="article-toc-summary">
                    <span>{group.label}</span>
                    <Chevron />
                  </summary>
                  <ol>
                    {group.items.map(({ id, label }) => (
                      <li key={id}>
                        <a href={`#${id}`}>{label}</a>
                      </li>
                    ))}
                  </ol>
                </details>
              ))}
            </nav>

            <section id="kategori-agaci-nedir">
              <h2>Kategori Ağacı Nedir?</h2>
              <p>
                Kategori ağacı, bir e-ticaret sitesindeki ürün gruplarının ana ve alt kategoriler
                halinde hiyerarşik olarak düzenlenmiş yapısıdır.
              </p>
              <p>
                Kullanıcılar ürünlere bu yapı üzerinden ulaşırken arama motorları da sayfalar
                arasındaki ilişkileri büyük ölçüde navigasyon ve dahili bağlantılar üzerinden
                keşfeder.
              </p>
              <p>Örneğin klasik bir yapı şöyle olabilir:</p>
              <pre className="article-tree">{`Kadın
└── Giyim
    └── Elbise`}</pre>
              <p>
                Bu yapı ürün yönetimi açısından mantıklıdır ancak kullanıcıların Google’daki arama
                davranışlarını tek başına karşılamaz.
              </p>
              <p>Kullanıcılar çoğu zaman şunları arar:</p>
              <ul className="query-list">
                <li>“siyah elbise”</li>
                <li>“beyaz elbise”</li>
                <li>“mini elbise”</li>
                <li>“uzun elbise”</li>
                <li>“saten elbise”</li>
                <li>“günlük elbise”</li>
                <li>“siyah mini elbise”</li>
              </ul>
              <p>
                SEO uyumlu kategori ağacının amacı, anlamlı arama talebi bulunan bu ihtiyaçları
                doğru landing page’lerle eşleştirmektir.
              </p>
              <p>Başka bir ifadeyle kategori yapısı yalnızca şirketin ürün organizasyonuna göre değil,</p>
              <p className="article-key">
                <strong>kullanıcıların ürünleri nasıl aradığına göre de şekillenmelidir.</strong>
              </p>
            </section>

            <section id="e-ticaret-markalari-kategori-agacinda-neyi-kaciriyor">
              <h2>E-Ticaret Markaları Kategori Ağacında Neyi Kaçırıyor?</h2>
              <p>
                Birçok e-ticaret sitesinde onlarca siyah elbise bulunur ancak “Siyah Elbise” adında
                ayrı bir kategori bulunmaz.
              </p>
              <p>
                Kullanıcı genel “Elbise” kategorisine girip renk filtresinden siyahı seçebilir.
                Operasyonel olarak ihtiyaç karşılanmış görünür.
              </p>
              <p>SEO açısından ise farklı bir soru sorulmalıdır:</p>
              <p className="article-key">
                <strong>“Siyah elbise” aramasını sitede hangi URL karşılıyor?</strong>
              </p>
              <p>Rakipleriniz bu sorgu için;</p>
              <ul className="article-fragments">
                <li>kendine ait URL’si,</li>
                <li>özgün title ve H1’i,</li>
                <li>dahili bağlantıları,</li>
                <li>yeterli ürün çeşitliliği</li>
              </ul>
              <p>
                bulunan bir kategori oluşturmuşsa, sizin yalnızca genel elbise kategorinizle rekabet
                etmeniz zorlaşabilir.
              </p>
              <p>
                Kısacası ürün sizde olabilir ancak arama talebini karşılayan doğru landing page
                sizde olmayabilir.
              </p>
              <blockquote className="article-callout">
                <p>
                  Markalarla çalışırken en sık karşılaşılan problemlerden biri, aranan ürünlerin
                  sitede bulunmasına rağmen bu talebi karşılayan kategori sayfasının bulunmamasıdır.
                  Yeni ürün eklemeden yalnızca mevcut ürünleri arama davranışına göre daha doğru
                  şekilde gruplayarak önemli organik görünürlük fırsatları oluşturmak mümkündür.
                </p>
                <footer>
                  — <strong>Sungur Kerem Gezergün</strong>, E-Ticaret SEO Uzmanı
                </footer>
              </blockquote>
            </section>

            <section id="tek-anahtar-kelime-yerine-kategori-agi-olusturun">
              <h2>Tek Anahtar Kelime Yerine Kategori Ağı Oluşturun</h2>
              <p>
                Yalnızca “elbise” sorgusuna odaklanmak, bütün SEO gücünü en genel ve çoğu zaman en
                rekabetçi sorguya yönlendirmek anlamına gelir.
              </p>
              <p>Oysa kullanıcının ihtiyacı farklı özelliklere göre şekillenebilir:</p>
              <pre className="article-tree">{`Elbise
├── Renge Göre
│   ├── Siyah Elbise
│   └── Beyaz Elbise
│
├── Boya Göre
│   ├── Mini Elbise
│   ├── Midi Elbise
│   └── Uzun Elbise
│
├── Kumaşa Göre
│   ├── Saten Elbise
│   └── Keten Elbise
│
├── Kullanım Alanına Göre
│   ├── Günlük Elbise
│   ├── Ofis Elbisesi
│   └── Davet Elbisesi
│
└── Özelliğe Göre
    ├── Askılı Elbise
    └── Uzun Kollu Elbise`}</pre>
              <p>Daha sonra bazı anlamlı kombinasyonlar da ortaya çıkabilir:</p>
              <pre className="article-tree">{`Elbise
└── Siyah Elbise
    └── Siyah Mini Elbise`}</pre>
              <p className="article-key">
                <strong>Her ürün özelliği veya filtre kombinasyonu ayrı kategori haline
                getirilmemelidir.</strong>
              </p>
              <p>
                Örneğin 10 renk, 6 boy ve 8 kumaş özelliğiniz varsa teorik olarak yüzlerce
                kombinasyon üretilebilir. Bunların tamamını kategoriye çevirmek doğru bir SEO
                stratejisi değildir.
              </p>
              <p>
                Kategori ancak gerçek kullanıcı talebi, yeterli ürün çeşitliliği ve farklılaşmış
                arama niyeti bulunduğunda oluşturulmalıdır.
              </p>
            </section>

            <section id="seo-uyumlu-kategori-agaci-nasil-olusturulur">
              <h2>SEO Uyumlu Kategori Ağacı Nasıl Oluşturulur?</h2>
              <p>Kategori ağacını dört temel aşamada oluşturabilirsiniz:</p>
              <ol className="article-steps">
                <li>Arama taleplerini bulun.</li>
                <li>Hangi sorguların ayrı kategori gerektirdiğini belirleyin.</li>
                <li>Yeni kategoriyi site mimarisine doğru şekilde yerleştirin.</li>
                <li>Her arama niyeti için birincil landing page belirleyin.</li>
              </ol>
            </section>

            <section className="article-step" id="1-adim-anahtar-kelime-arastirmasi-yapin">
              <h2>1. Adım: Anahtar Kelime Araştırması Yapın</h2>
              <p>
                İlk amaç kullanıcıların ürün grubuyla ilgili hangi ifadeleri aradığını anlamaktır.
              </p>
              <p>Bunun için dört veri kaynağı oldukça faydalıdır:</p>
              <ul className="article-fragments">
                <li>Semrush</li>
                <li>Google Ads Anahtar Kelime Planlayıcı</li>
                <li>Google Search Console</li>
                <li>Google SERP sonuçları</li>
              </ul>

              <h3>Semrush ile Alt Kategori Fırsatlarını Bulma</h3>
              <p>Semrush Keyword Magic Tool içerisinde ana ürün kelimenizi arayın.</p>
              <p className="article-example">“elbise”</p>
              <p>Türkiye veritabanını seçtikten sonra aşağıdaki gibi sorgularla karşılaşabilirsiniz:</p>
              <ul className="query-list">
                <li>“siyah elbise”</li>
                <li>“mini elbise”</li>
                <li>“saten elbise”</li>
                <li>“uzun elbise”</li>
                <li>“beyaz elbise”</li>
                <li>“günlük elbise”</li>
              </ul>
              <p>
                Keyword Magic Tool içerisindeki konu grupları ilk kategori kümelerini oluşturmak için
                kullanılabilir.
              </p>
              <p>
                Özellikle <strong>Commercial</strong> ve <strong>Transactional</strong> intent ile
                işaretlenen kelimeler kategori araştırmasında daha öncelikli adaylardır.
              </p>
              <p>Örneğin:</p>
              <p className="article-example">“saten elbise”</p>
              <p>kategori adayı olabilirken;</p>
              <p className="article-example">“saten elbise nasıl ütülenir”</p>
              <p>
                bilgi amaçlı bir aramadır ve kategori yerine içerik tarafında değerlendirilmelidir.
              </p>

              <h3>Google Ads Anahtar Kelime Planlayıcı ile Talebi Kontrol Edin</h3>
              <p>
                Google Ads içerisindeki Anahtar Kelime Planlayıcı ile araştırdığınız kelimelerin
                yaklaşık talep seviyesini kontrol edebilirsiniz.
              </p>
              <p>
                Yeni anahtar kelimeler keşfet bölümünde ürün grubunuzu arayabilir veya
                oluşturduğunuz keyword listesini arama hacimleri bölümünde kontrol edebilirsiniz.
              </p>
              <p>Ancak bu verileri kesin talep miktarı olarak değerlendirmemek gerekir.</p>
              <p>Özellikle reklam harcaması bulunmayan hesaplarda hacimler:</p>
              <p className="article-example">1 B – 10 B</p>
              <p>gibi geniş aralıklarla gösterilebilir.</p>
              <p>Google ayrıca yakın varyasyonları aynı veri kümesi içerisinde gruplayabilir.</p>
              <p>
                Dolayısıyla yalnızca tek bir aracın hacim değerine göre kategori açma kararı
                verilmemelidir.
              </p>

              <h3>Search Console ile Mevcut Kategori Fırsatlarını Bulun</h3>
              <p>
                Halihazırda organik trafik alan bir e-ticaret sitesi için en değerli kaynaklardan
                biri Google Search Console’dur.
              </p>
              <p>Örneğin:</p>
              <p className="article-example"><code>/elbise/</code></p>
              <p>URL’sini Page filtresiyle seçin ve hangi sorgulardan gösterim aldığını inceleyin.</p>
              <div className="table-wrapper checklist-table">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Sorgu</th>
                      <th scope="col">Gösterim</th>
                      <th scope="col">Ortalama Konum</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>elbise</td>
                      <td>45.000</td>
                      <td>8,2</td>
                    </tr>
                    <tr>
                      <td>siyah elbise</td>
                      <td>12.400</td>
                      <td>15,7</td>
                    </tr>
                    <tr>
                      <td>saten elbise</td>
                      <td>8.700</td>
                      <td>18,4</td>
                    </tr>
                    <tr>
                      <td>askılı elbise</td>
                      <td>4.200</td>
                      <td>21,1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Genel kategori sayfası, daha spesifik sorgulardan yüksek sayıda gösterim alıyorsa bu
                durum yeni alt kategori fırsatlarına işaret edebilir.
              </p>
              <p>Özellikle şu kombinasyonlar değerlidir:</p>
              <ul className="article-fragments">
                <li>yüksek gösterim,</li>
                <li>spesifik ürün özelliği,</li>
                <li>mevcut sayfanın orta veya düşük sıralamada olması,</li>
                <li>sorguyu daha iyi karşılayabilecek yeterli ürün bulunması.</li>
              </ul>
              <p>
                Search Console verisi, keyword araçlarının göstermediği long-tail kategori
                fırsatlarını yakalamak açısından da değerlidir.
              </p>

              <h3>Kelimeleri Karar Tablosuna Aktarın</h3>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Anahtar Kelime</th>
                      <th scope="col">Semrush Hacmi</th>
                      <th scope="col">Google Ads</th>
                      <th scope="col">GSC Gösterim</th>
                      <th scope="col">Üst Kategori</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>elbise</td>
                      <td>…</td>
                      <td>…</td>
                      <td>…</td>
                      <td>—</td>
                    </tr>
                    <tr>
                      <td>siyah elbise</td>
                      <td>…</td>
                      <td>…</td>
                      <td>…</td>
                      <td>Elbise</td>
                    </tr>
                    <tr>
                      <td>beyaz elbise</td>
                      <td>…</td>
                      <td>…</td>
                      <td>…</td>
                      <td>Elbise</td>
                    </tr>
                    <tr>
                      <td>siyah mini elbise</td>
                      <td>…</td>
                      <td>…</td>
                      <td>…</td>
                      <td>Siyah Elbise</td>
                    </tr>
                    <tr>
                      <td>saten elbise</td>
                      <td>…</td>
                      <td>…</td>
                      <td>…</td>
                      <td>Elbise</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="article-step" id="2-adim-hangi-alt-kategorilerin-acilacagina-karar-verin">
              <h2>2. Adım: Hangi Alt Kategorilerin Açılacağına Karar Verin</h2>
              <p>Her anahtar kelime ayrı kategori haline getirilmemelidir.</p>
              <p>Bir kategori adayı için dört temel kontrol yapılabilir.</p>

              <h3>Kontrol 1: Gerçek Bir Arama Talebi Var mı?</h3>
              <p>Semrush ve Google Ads gibi araçlar talep seviyesini anlamak için kullanılabilir.</p>
              <p>Ancak araçlarda hacim görünmemesi mutlaka arama olmadığı anlamına gelmez.</p>
              <p>Özellikle:</p>
              <ul className="article-fragments">
                <li>yeni trendler,</li>
                <li>niş ürünler,</li>
                <li>sezonluk sorgular,</li>
                <li>düşük hacimli long-tail sorgular</li>
              </ul>
              <p>keyword araçlarında yeterince görünmeyebilir.</p>
              <p>
                Bu nedenle sıfır hacimli görünen sorguları doğrudan elemek yerine Search Console,
                site içi arama verileri ve SERP sonuçlarıyla birlikte değerlendirmek daha doğru olur.
              </p>

              <h3>Kontrol 2: Kategoride Yeterli Ürün Çeşitliliği Var mı?</h3>
              <p>Google’ın kategori açmak için belirlediği resmi bir minimum ürün sayısı bulunmaz.</p>
              <p>Ancak kullanıcı kategori sayfasına geldiğinde anlamlı bir seçim yapabilmelidir.</p>
              <p>
                Pratikte çoğu e-ticaret senaryosunda <strong>4-5 stoklu ürün</strong>, operasyonel
                bir başlangıç eşiği olarak düşünülebilir.
              </p>
              <p>Bu sayı kategoriye ve sektöre göre değişebilir.</p>
              <p>Önemli olan kullanıcının:</p>
              <p className="article-example">“Siyah Mini Elbise”</p>
              <p>kategorisine geldiğinde tek bir ürünle karşılaşmamasıdır.</p>
              <p>Ürün verisinin doğru olması da kritik öneme sahiptir.</p>
              <p>Bir ürünün;</p>
              <ul className="article-fragments">
                <li>rengi,</li>
                <li>kumaşı,</li>
                <li>boyu,</li>
                <li>kullanım alanı</li>
              </ul>
              <p>eksik veya hatalı girildiyse doğru kategoriye atanması mümkün olmaz.</p>
              <p>Bu nedenle kategori ağacı ürün veri kalitesiyle doğrudan ilişkilidir.</p>

              <h3>Kontrol 3: Google Bu Aramayı Ayrı Bir Arama Niyeti Olarak Görüyor mu?</h3>
              <p>Kategori kararının en kritik aşamalarından biri SERP analizidir.</p>
              <p>Örneğin şu iki sorguyu karşılaştırın:</p>
              <ul className="query-list">
                <li>“siyah elbise”</li>
                <li>“siyah mini elbise”</li>
              </ul>
              <p>
                Amaç Google’ın iki sorgu için benzer mi yoksa farklı landing page’ler mi sıraladığını
                anlamaktır.
              </p>
              <p>
                Yalnızca ilk 2-3 sonucu değil, mümkün olduğunca <strong>ilk 10 organik sonucu</strong>{' '}
                inceleyin.
              </p>
              <p>Şunlara bakın:</p>
              <ul className="article-fragments">
                <li>Sıralanan URL’ler aynı mı?</li>
                <li>Rakipler ayrı “Siyah Mini Elbise” kategorileri kullanıyor mu?</li>
                <li>Genel “Siyah Elbise” kategorileri mi sıralanıyor?</li>
                <li>Sonuçlarda PLP/kategori sayfaları mı yoksa içerik sayfaları mı ağırlıklı?</li>
              </ul>

              <h4>SERP Overlap Mantığı</h4>
              <p>
                İki sorgunun ilk 10 sonucunda büyük ölçüde aynı URL’ler yer alıyorsa Google bu
                sorguları benzer ihtiyaçlar olarak değerlendiriyor olabilir.
              </p>
              <p>Örneğin:</p>
              <ul className="query-list">
                <li>“siyah elbise”</li>
                <li>“siyah elbiseler”</li>
              </ul>
              <p>yüksek oranda aynı sonuçları döndürebilir.</p>
              <p>Bu durumda iki ayrı kategori oluşturmak gereksizdir.</p>
              <p>Buna karşılık:</p>
              <ul className="query-list">
                <li>“siyah elbise”</li>
                <li>“siyah mini elbise”</li>
              </ul>
              <p>
                arama sonuçlarında ciddi ölçüde farklı URL setleri gösteriyorsa “Siyah Mini Elbise”
                ayrı bir kategori adayı olabilir.
              </p>
              <p>
                SERP overlap tek başına otomatik karar mekanizması değildir ancak arama niyetlerini
                ayırmak için güçlü bir kontrol yöntemidir.
              </p>

              <h4>Gizli Sekme Tek Başına Tarafsız SERP Anlamına Gelmez</h4>
              <p>SERP kontrolünü gizli sekmede yapmak kişisel geçmiş etkisini azaltabilir.</p>
              <p>Ancak sonuçlar yine de;</p>
              <ul className="article-fragments">
                <li>konum,</li>
                <li>cihaz,</li>
                <li>dil,</li>
                <li>arama bağlamı</li>
              </ul>
              <p>gibi faktörlerden etkilenebilir.</p>
              <p>
                Bu nedenle manuel kontrolü mümkünse Semrush SERP Analysis veya benzer SERP takip
                araçlarıyla destekleyin.
              </p>

              <h3>Kontrol 4: Ayrı Bir Landing Page Gerçekten Gerekli mi?</h3>
              <p>Bir sorgunun hacimli olması tek başına ayrı kategori gerektirmez.</p>
              <p>
                Örneğin “siyah mini elbise” aramasında Google’ın büyük ölçüde genel “Siyah Elbise”
                kategorilerini sıraladığını gördüğünüzü varsayalım.
              </p>
              <p>
                Bu durumda ayrı kategori açmak yerine mevcut “Siyah Elbise” sayfası içinde mini
                elbise ihtiyacını daha iyi karşılamak daha doğru olabilir.
              </p>
              <p>Bunu şu yollarla yapabilirsiniz:</p>
              <ul className="article-fragments">
                <li>ilgili ürünleri görünür hale getirmek,</li>
                <li>kategori içeriğinde mini modellerden bahsetmek,</li>
                <li>kullanıcıya mini seçeneklerini kolayca filtreleme imkânı sunmak,</li>
                <li>ilgili alt kategorilere yönlendirme yapmak.</li>
              </ul>

              <h3>Kategori Karar Tablosu</h3>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Talep Var mı?</th>
                      <th scope="col">Yeterli Ürün Var mı?</th>
                      <th scope="col">SERP Ayrı Bir Niyet Gösteriyor mu?</th>
                      <th scope="col">Karar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Evet</td>
                      <td>Evet</td>
                      <td>Evet</td>
                      <td>Kategori aç</td>
                    </tr>
                    <tr>
                      <td>Evet</td>
                      <td>Evet</td>
                      <td>Hayır</td>
                      <td>Mevcut en uygun kategoriden hedefle</td>
                    </tr>
                    <tr>
                      <td>Evet</td>
                      <td>Hayır</td>
                      <td>—</td>
                      <td>Şimdilik mevcut kategoriden hedefle</td>
                    </tr>
                    <tr>
                      <td>Zayıf / Belirsiz</td>
                      <td>Evet</td>
                      <td>Evet</td>
                      <td>GSC ve SERP verisiyle doğrula</td>
                    </tr>
                    <tr>
                      <td>Hayır</td>
                      <td>Hayır</td>
                      <td>Hayır</td>
                      <td>Kategori açma</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="article-step" id="3-adim-yeni-kategoriyi-site-mimarisine-dogru-yerlestirin">
              <h2>3. Adım: Yeni Kategoriyi Site Mimarisine Doğru Yerleştirin</h2>
              <p>Kategori oluşturmak yalnızca yeni bir URL açmak anlamına gelmez.</p>
              <p>
                Sayfanın hem kullanıcılar hem de arama motorları tarafından site mimarisinin bir
                parçası olarak anlaşılması gerekir.
              </p>

              <h3>URL Yapısı</h3>
              <p>URL kısa, anlaşılır ve tutarlı olmalıdır.</p>
              <p>Örneğin:</p>
              <p className="article-example"><code>marka.com/siyah-elbise</code></p>
              <p>veya:</p>
              <p className="article-example"><code>marka.com/elbise/siyah-elbise</code></p>
              <p>Her iki yapı da kullanılabilir.</p>
              <p>Önemli olan site genelinde tutarlı bir URL standardının uygulanmasıdır.</p>
              <p>Şunlardan kaçının:</p>
              <ul className="query-list">
                <li><code>/kategori-123</code></li>
                <li><code>?id=4587</code></li>
              </ul>
              <p>URL klasör yapısının kategori hiyerarşisini birebir yansıtması zorunlu değildir.</p>
              <p>
                Site mimarisinin anlaşılmasında özellikle <strong>dahili bağlantılar ve breadcrumb
                yapısı</strong> önemlidir.
              </p>

              <h3>Title ve H1</h3>
              <p>Her kategori kendi ana arama niyetini açık şekilde taşımalıdır.</p>
              <pre className="article-tree">{`Title: Siyah Elbise Modelleri ve Fiyatları | Marka
H1: Siyah Elbise`}</pre>
              <p>“Siyah Elbise”, “Beyaz Elbise” ve “Saten Elbise” kategorilerinin tamamında:</p>
              <p className="article-example">Elbise | Marka</p>
              <p>gibi aynı title kullanılması sayfaların ayrışmasını zorlaştırır.</p>

              <h3>Canonical Etiketi</h3>
              <p>
                SEO amacıyla açılan ve indexlenmesini istediğiniz kategori sayfasının canonical
                etiketi normal şartlarda kendi URL’sini göstermelidir.
              </p>
              <pre className="article-tree">{`<link rel="canonical" href="https://www.marka.com/siyah-elbise" />`}</pre>
              <p>Açılan özel kategorinin canonical etiketini:</p>
              <p className="article-example"><code>/elbise/</code></p>
              <p>
                gibi üst kategoriye yönlendirmek, sayfanın ayrı bir landing page olarak
                değerlendirilmesini zorlaştırabilir.
              </p>
              <p>
                Bu nedenle indexlenmesini istediğiniz özel kategori sayfalarında self-referencing
                canonical kullanılması genellikle en doğru yaklaşımdır.
              </p>

              <h3>Indexability Kontrolü</h3>
              <p>Yeni kategorinin teknik olarak indexlenebilir olduğundan emin olun.</p>
              <p>Kontrol edilmesi gereken temel noktalar:</p>
              <ul className="article-fragments">
                <li>URL HTTP 200 yanıtı veriyor mu?</li>
                <li>
                  Sayfada <code>noindex</code> etiketi bulunuyor mu?
                </li>
                <li>robots.txt tarafından engelleniyor mu?</li>
                <li>canonical etiketi doğru mu?</li>
                <li>Google sayfanın ana içeriğini render edebiliyor mu?</li>
              </ul>
              <p>
                Kategori oluşturulduktan sonra Search Console URL Inspection üzerinden kontrol
                yapılması faydalıdır.
              </p>

              <h3>XML Sitemap</h3>
              <p>Indexlenmesini istediğiniz kategori URL’leri XML sitemap içerisinde yer almalıdır.</p>
              <p>
                Yeni kategori oluşturulduğunda sitemap’in güncellenmesi, arama motorlarının yeni
                URL’leri keşfetmesini kolaylaştırır.
              </p>

              <h3>Breadcrumb</h3>
              <p>
                Kategori hiyerarşisi breadcrumb ile kullanıcıya ve arama motorlarına açık şekilde
                gösterilmelidir.
              </p>
              <p className="article-example">Ana Sayfa › Elbise › Siyah Elbise</p>
              <p>Breadcrumb linklerinin gerçek crawl edilebilir bağlantılar olması gerekir.</p>
              <p>
                Mümkünse <code>BreadcrumbList</code> structured data da uygulanmalıdır.
              </p>

              <h3>Ağaç İçi Dahili Bağlantılar</h3>
              <p>Yeni kategori yalnızca oluşturulmuş bir URL olarak bırakılmamalıdır.</p>
              <p>Önemli kategoriler şu alanlardan bağlantı alabilir:</p>
              <ul className="article-fragments">
                <li>ana menü,</li>
                <li>üst kategori,</li>
                <li>breadcrumb,</li>
                <li>ilgili kardeş kategoriler,</li>
                <li>uygun ürün sayfaları,</li>
                <li>kategori içi keşif alanları.</li>
              </ul>
              <p>Örneğin ana “Elbise” kategorisinde:</p>
              <ul className="query-list">
                <li>Siyah Elbise</li>
                <li>Beyaz Elbise</li>
                <li>Mini Elbise</li>
                <li>Saten Elbise</li>
              </ul>
              <p>gibi alt kategori bağlantıları bulunabilir.</p>

              <h3>Anchor Text</h3>
              <p>Dahili bağlantı metinleri hedef sayfanın konusunu açık şekilde belirtmelidir.</p>
              <p>Daha iyi:</p>
              <p className="article-example">“Siyah elbise modellerini inceleyin.”</p>
              <p>Daha zayıf:</p>
              <p className="article-example">“Buraya tıklayın.”</p>
              <p>
                Ancak her ürün sayfasından bütün attribute kategorilerine link vermek de doğru
                değildir. Bağlantılar kullanıcı açısından gerçekten anlamlı ve ilgili olmalıdır.
              </p>

              <h3>Linklerin Crawl Edilebilir Olmasına Dikkat Edin</h3>
              <p>
                Modern e-ticaret sitelerinde kategori geçişleri bazen yalnızca JavaScript
                etkileşimiyle oluşturulur.
              </p>
              <p>SEO açısından mümkün olduğunca gerçek bağlantılar kullanılmalıdır:</p>
              <pre className="article-tree">{`<a href="/siyah-elbise/">Siyah Elbise</a>`}</pre>
              <p>
                Bu yapı Google’ın URL’yi keşfetmesini ve site mimarisini anlamasını kolaylaştırır.
              </p>

              <h3>Ürünlerin Crawl Edilebilir Olduğunu Kontrol Edin</h3>
              <p>Kategori URL’sinin indexlenmesi yeterli değildir.</p>
              <p>Kategori içerisindeki ürünlerin de crawler tarafından ulaşılabilir olması gerekir.</p>
              <p>Özellikle:</p>
              <ul className="article-fragments">
                <li>infinite scroll,</li>
                <li>load more,</li>
                <li>JavaScript tabanlı pagination</li>
              </ul>
              <p>
                kullanılan sitelerde ürün URL’lerinin Google tarafından keşfedilebilir olduğundan
                emin olun.
              </p>
            </section>

            <section className="article-step" id="4-adim-her-arama-niyetine-birincil-landing-page-atayin">
              <h2>4. Adım: Her Arama Niyetine Birincil Landing Page Atayın</h2>
              <p>SEO’da amaç her kelimeyi yalnızca bir sayfanın rank etmesini sağlamak değildir.</p>
              <p>Bir kategori doğal olarak onlarca hatta yüzlerce farklı sorguda görünür olabilir.</p>
              <p>Asıl amaç,</p>
              <p className="article-key">
                <strong>aynı arama niyeti için gereksiz yere birden fazla landing page
                oluşturmamaktır.</strong>
              </p>
              <div className="table-wrapper checklist-table">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Anahtar Kelime</th>
                      <th scope="col">Birincil Landing Page</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>elbise</td>
                      <td>
                        <code>/elbise</code>
                      </td>
                    </tr>
                    <tr>
                      <td>siyah elbise</td>
                      <td>
                        <code>/siyah-elbise</code>
                      </td>
                    </tr>
                    <tr>
                      <td>siyah mini elbise</td>
                      <td>
                        <code>/siyah-elbise</code>
                      </td>
                    </tr>
                    <tr>
                      <td>beyaz elbise</td>
                      <td>
                        <code>/beyaz-elbise</code>
                      </td>
                    </tr>
                    <tr>
                      <td>saten elbise</td>
                      <td>
                        <code>/saten-elbise</code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Burada “siyah mini elbise” ayrı kategori açmayı gerektirmiyorsa mevcut “Siyah
                Elbise” sayfasının ikincil hedeflerinden biri olabilir.
              </p>
              <p>
                Bu eşleştirmeyi bir keyword mapping tablosunda tutmak kategori ağacı büyüdükçe büyük
                avantaj sağlar.
              </p>
            </section>

            <section id="keyword-cannibalization-ne-zaman-problem-olur">
              <h2>Keyword Cannibalization Ne Zaman Problem Olur?</h2>
              <p>Aynı domainden iki sayfanın aynı sorguda görünmesi tek başına problem değildir.</p>
              <p>Problem daha çok şu durumlarda oluşur:</p>
              <ul className="article-fragments">
                <li>aynı intent için çok benzer iki kategori bulunması,</li>
                <li>Google’ın beklenmeyen URL’yi sıralaması,</li>
                <li>sıralanan URL’nin sürekli değişmesi,</li>
                <li>dahili linklerin iki benzer sayfaya bölünmesi,</li>
                <li>backlink ve diğer sinyallerin gereksiz şekilde parçalanması.</li>
              </ul>
              <p>Örneğin şu iki kategori birbirine çok yakın olabilir:</p>
              <ul className="query-list">
                <li><code>/siyah-mini-elbise</code></li>
                <li><code>/mini-siyah-elbise</code></li>
              </ul>
              <p>Bunlar aynı arama niyetini karşılıyorsa tek landing page altında birleştirilmelidir.</p>
            </section>

            <section id="kategori-agaci-olustururken-en-sik-yapilan-hatalar">
              <h2>Kategori Ağacı Oluştururken En Sık Yapılan Hatalar</h2>

              <h3>Her Filtre Kombinasyonunu Kategoriye Dönüştürmek</h3>
              <p>Bir ürünün onlarca özelliği bulunabilir.</p>
              <p>Örneğin:</p>
              <ul className="query-list">
                <li>siyah</li>
                <li>mini</li>
                <li>saten</li>
                <li>askılı</li>
                <li>gece</li>
                <li>slim fit</li>
              </ul>
              <p>
                Bu özelliklerin bütün kombinasyonlarını kategoriye dönüştürürseniz yüzlerce veya
                binlerce zayıf landing page oluşabilir.
              </p>
              <p>Kategori yalnızca:</p>
              <ul className="article-fragments">
                <li>arama talebi,</li>
                <li>ürün yeterliliği,</li>
                <li>ayrı arama niyeti</li>
              </ul>
              <p>bulunduğunda oluşturulmalıdır.</p>

              <h3>SERP’e Bakmadan Kategori Açmak</h3>
              <p>Keyword hacmi bulunması tek başına yeterli değildir.</p>
              <p>
                Google’ın sorgu için hangi sayfa türlerini tercih ettiğini kontrol etmeden kategori
                oluşturmak, benzer landing page’lerin gereksiz yere çoğalmasına neden olabilir.
              </p>

              <h3>Bütün Kategorileri Aynı Anda Açmak</h3>
              <p>Anahtar kelime araştırması sonucunda yüzlerce kategori fırsatı bulunabilir.</p>
              <p>Bütün kategorileri aynı anda açmak çoğu zaman operasyonel problemlere neden olur.</p>
              <p>Önceliklendirme yapılabilir:</p>
              <ol className="article-steps">
                <li>yüksek talep,</li>
                <li>güçlü stok,</li>
                <li>net SERP ayrışması,</li>
                <li>yüksek ticari değer,</li>
                <li>mevcut organik fırsat.</li>
              </ol>
              <p>
                Önce en güçlü kategori kümeleri oluşturulmalı, sonuçlar takip edildikten sonra ağaç
                genişletilmelidir.
              </p>

              <h3>Kategorilere Yanlış Ürün Eklemek</h3>
              <p>Kategori adı kullanıcıya verilen bir sözdür.</p>
              <p>“Siyah Elbise” kategorisine gelen kullanıcı siyah elbiseler görmek ister.</p>
              <p>
                Kategori ürün sayısını artırmak amacıyla alakasız ürün eklemek kullanıcı deneyimini
                bozar.
              </p>
              <p className="article-key">
                <strong>Az fakat doğru ürün, çok fakat alakasız üründen daha değerlidir.</strong>
              </p>

              <h3>Ürün Verilerinin Eksik Olması</h3>
              <p>Kategori ağacı çoğu zaman ürün attribute verilerine bağlıdır.</p>
              <p>
                Ürünlerde renk, kumaş, boy veya kullanım alanı eksik girildiyse kategori yapısı doğru
                çalışmaz.
              </p>
              <p>
                Bu nedenle SEO kategori projesi aynı zamanda bir <strong>product data quality</strong>{' '}
                projesidir.
              </p>

              <h3>Alt Kategorilerde Aynı Title’ı Kullanmak</h3>
              <p>Her alt kategori kendi arama niyetini açık şekilde taşımalıdır.</p>
              <pre className="article-tree">{`Siyah Elbise Modelleri | Marka
Beyaz Elbise Modelleri | Marka
Saten Elbise Modelleri | Marka`}</pre>

              <h3>Özel Kategorinin Canonical Etiketini Üst Kategoriye Yönlendirmek</h3>
              <p>
                SEO amacıyla açılan özel kategori indexlenmesini istiyorsanız canonical etiketi
                normal şartlarda kendi URL’sini göstermelidir.
              </p>
              <p>Örneğin:</p>
              <p className="article-example"><code>/siyah-elbise</code></p>
              <p>sayfasının canonical’ını:</p>
              <p className="article-example"><code>/elbise</code></p>
              <p>adresine yönlendirmek kategori sayfasının bağımsız değerini azaltabilir.</p>

              <h3>Açılan Kategorileri Unutmak</h3>
              <p>Kategori ağacı tek seferlik bir SEO projesi değildir.</p>
              <p>
                Kategori açıldığı gün 20 ürün barındırabilir, üç ay sonra yalnızca iki stoklu ürüne
                düşebilir.
              </p>
              <p>Bu nedenle kategori performansı ve ürün sayısı düzenli olarak takip edilmelidir.</p>
            </section>

            <section id="kategori-yasam-dongusunu-yonetin">
              <h2>Kategori Yaşam Döngüsünü Yönetin</h2>
              <p>Her kategori sonsuza kadar aynı ürün hacmine sahip olmaz.</p>
              <p>Bu nedenle kategori yaşam döngüsü için kurallar oluşturmak gerekir.</p>

              <h3>Geçici Olarak Stok Azaldıysa</h3>
              <p>
                Kategori arama talebi almaya devam ediyor ve yakın zamanda yeniden ürün eklenecekse
                sayfayı doğrudan kaldırmak yerine korumak daha mantıklı olabilir.
              </p>

              <h3>Kategori Kalıcı Olarak Sonlandırıldıysa</h3>
              <p>Ürün grubu artık satılmayacaksa duruma göre:</p>
              <ul className="article-fragments">
                <li>en yakın ve gerçekten ilgili kategoriye 301 yönlendirme,</li>
                <li>karşılığı bulunmuyorsa 404 veya 410,</li>
                <li>sezonluk kategori ise URL’yi koruyup sezon dışında kullanıcı deneyimini düzenleme</li>
              </ul>
              <p>seçenekleri değerlendirilebilir.</p>
              <p>
                301 yönlendirmeleri yalnızca gerçekten eşdeğer veya yakın karşılığı bulunan sayfalara
                yapılmalıdır.
              </p>
            </section>

            <section id="kategori-performansini-nasil-takip-etmelisiniz">
              <h2>Kategori Performansını Nasıl Takip Etmelisiniz?</h2>
              <p>Yeni kategori açıldıktan sonra yalnızca “sıralama aldı mı?” sorusuna bakmayın.</p>
              <p>Takip edilebilecek metrikler:</p>
              <ul className="article-fragments">
                <li>Google Search Console impressions,</li>
                <li>organik tıklamalar,</li>
                <li>ortalama konum,</li>
                <li>kategoriye gelen non-brand sorgu sayısı,</li>
                <li>organik oturum,</li>
                <li>organik gelir,</li>
                <li>conversion rate,</li>
                <li>kategori içerisindeki stoklu ürün sayısı,</li>
                <li>index durumu,</li>
                <li>yanlış URL’nin sıralanıp sıralanmadığı.</li>
              </ul>
              <p>
                Özellikle yeni açılan kategorilerde Search Console sorgu verisi, sayfanın hedeflenen
                intent’i gerçekten yakalayıp yakalamadığını anlamak için değerlidir.
              </p>
            </section>

            <section id="kontrol-listesi">
              <h2>SEO Uyumlu Kategori Ağacı Kontrol Listesi</h2>

              <h3>Araştırma Aşaması</h3>
              <Checklist
                items={[
                  'Semrush veya benzer araçlarla anahtar kelime araştırması yapıldı.',
                  'Google Ads Keyword Planner verileri kontrol edildi.',
                  'Search Console sorguları analiz edildi.',
                  'Site içi arama verileri varsa değerlendirildi.',
                  'Commercial ve Transactional intent’li sorgular ayrıştırıldı.',
                ]}
              />

              <h3>Kategori Karar Aşaması</h3>
              <Checklist
                items={[
                  'Sorgunun gerçek bir arama talebi bulunuyor.',
                  'Kategoride anlamlı ürün çeşitliliği bulunuyor.',
                  'Ürün attribute verileri doğru ve eksiksiz.',
                  'İlk 10 organik sonuç incelendi.',
                  'SERP overlap kontrol edildi.',
                  'Ayrı bir landing page ihtiyacı doğrulandı.',
                  'Aynı intent’i hedefleyen mevcut başka kategori bulunmuyor.',
                ]}
              />

              <h3>Teknik Kurulum</h3>
              <Checklist
                items={[
                  'URL kısa ve anlaşılır.',
                  'Title benzersiz.',
                  'H1 hedef kategoriyle uyumlu.',
                  'Canonical etiketi sayfanın kendisini gösteriyor.',
                  'URL HTTP 200 dönüyor.',
                  'noindex bulunmuyor.',
                  'robots.txt tarafından engellenmiyor.',
                  'XML sitemap içerisinde bulunuyor.',
                  'Search Console URL Inspection ile kontrol edildi.',
                ]}
              />

              <h3>Site Mimarisi</h3>
              <Checklist
                items={[
                  'Breadcrumb doğru çalışıyor.',
                  'Breadcrumb bağlantıları crawl edilebilir.',
                  'Breadcrumb structured data uygulanmış.',
                  'Üst kategoriden bağlantı alıyor.',
                  'Gerekliyse ana menüde bulunuyor.',
                  'İlgili kardeş kategorilerden bağlantı alıyor.',
                  'İlgili PDP’lerden kullanıcıya fayda sağlayacak bağlantılar alıyor.',
                  'Linkler gerçek <a href=""> bağlantılarıyla oluşturuluyor.',
                ]}
              />

              <h3>Ürün ve Operasyon</h3>
              <Checklist
                items={[
                  'Kategori yalnızca ilgili ürünleri içeriyor.',
                  'Ürünlerin attribute bilgileri doğru.',
                  'Yeni ürün girişinde kategori eşleştirmesi yapılıyor.',
                  'Stoklu ürün sayısı düzenli takip ediliyor.',
                  'Kategori ürünlerinin crawler tarafından erişilebilir olduğu kontrol edildi.',
                ]}
              />

              <h3>Performans Takibi</h3>
              <Checklist
                items={[
                  'Search Console gösterimleri takip ediliyor.',
                  'Organik trafik takip ediliyor.',
                  'Organik gelir takip ediliyor.',
                  'Hedef sorgularda hangi URL’nin sıralandığı izleniyor.',
                  'Ürün sayısı kritik seviyeye düştüğünde aksiyon alınıyor.',
                ]}
              />
            </section>

            <section className="article-faq" id="sss">
              <h2>Sık Sorulan Sorular</h2>
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

            <section className="article-conclusion" id="sonuc">
              <h2>Sonuç</h2>
              <p>SEO uyumlu kategori ağacı oluşturmak yalnızca yeni kategori URL’leri açmak değildir.</p>
              <p>Asıl süreç;</p>
              <p className="article-key">
                <strong>arama davranışını anlamak, ürün envanterini analiz etmek, SERP sonuçlarını
                karşılaştırmak ve her arama niyetini doğru landing page ile eşleştirmektir.</strong>
              </p>
              <p>Uygulanabilir bir süreç şu şekilde ilerler:</p>
              <ol className="article-steps">
                <li>Semrush, Google Ads ve Search Console ile arama fırsatlarını bulun.</li>
                <li>Sorguları arama niyetlerine göre gruplayın.</li>
                <li>Ürün çeşitliliğini kontrol edin.</li>
                <li>İlk 10 organik sonucu ve SERP overlap oranını inceleyin.</li>
                <li>Ayrı kategori gerektiren sorguları belirleyin.</li>
                <li>
                  Yeni kategoriyi URL, title, H1, canonical ve dahili bağlantılarla doğru şekilde
                  kurun.
                </li>
                <li>XML sitemap ve indexability kontrollerini tamamlayın.</li>
                <li>Her intent için birincil landing page belirleyin.</li>
                <li>
                  Açılan kategorileri ürün sayısı, organik görünürlük ve gelir açısından düzenli
                  takip edin.
                </li>
              </ol>
              <p>
                Doğru kurulan kategori ağacı, yeni ürün eklemeden mevcut ürün envanterinizin daha
                fazla arama talebiyle eşleşmesini sağlayabilir.
              </p>
              <p>
                Kategori ağacınızı arama talebi, mevcut organik veriler ve ürün envanteriniz
                üzerinden birlikte kurgulamak isterseniz{' '}
                <Link href="/">e-ticaret SEO uzmanı</Link> olarak markanıza özel bir kategori ve
                landing page yol haritası oluşturabiliriz.
              </p>
            </section>

            <aside className="article-author" aria-label="Yazar">
              <p className="article-author-name">
                <Link href="/">Kerem Gezergün</Link>
              </p>
              <p className="article-author-role">E-ticaret SEO uzmanı · Hepsiburada</p>
            </aside>
          </article>
        </div>
      </section>

      <RelatedPosts current="seo-uyumlu-kategori-agaci" />

      {/* CTA Section */}
      <section className="cta-section" aria-labelledby="contact-heading">
        <div className="container">
          <h2 id="contact-heading">Birlikte Çalışalım</h2>
          <p>
            SEO stratejinizi güçlendirmek veya dijital görünürlüğünüzü artırmak için bizimle
            iletişime geçin.
          </p>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            WhatsApp’tan Yazın
            <span className="sr-only"> (yeni sekmede açılır)</span>
          </a>
        </div>
      </section>
    </main>
  );
}
