import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { postByPath } from '@/lib/blog/posts';
import { contact } from '@/lib/contact';
import { jsonLdSafe } from '@/lib/jsonLd';
import { BASE_URL, PERSON_ID, WEBSITE_ID, graph, ref } from '@/lib/schema/base';
import { breadcrumbNode } from '@/lib/schema/page';

const PATH = '/seo-uyumlu-kategori-sayfasi-nasil-olur';
const PAGE_URL = `${BASE_URL}${PATH}`;

/** The H1, reused as the BlogPosting headline and the last breadcrumb. */
const HEADLINE = 'SEO Uyumlu Kategori Sayfası Nasıl Olur?';

/** Root layout appends " | Kerem Gezergün", so the title stays short here. */
const TITLE = HEADLINE;

const DESCRIPTION =
  'SEO uyumlu kategori sayfası nasıl hazırlanır? H1, filtreleme, ürün yapısı, internal linking, crawlability ve UX için doğru kategori mimarisini öğrenin.';

const PUBLISHED = '2026-10-05';
const PUBLISHED_LABEL = '5 Ekim 2026';

/** 2,310 words in the draft at ~200 wpm. Update by hand if the text changes. */
const WORD_COUNT = 2310;
const READING_TIME = '12 dk okuma';

const OG_IMAGE = {
  url: `${BASE_URL}${postByPath(PATH).cover}`,
  width: 1200,
  height: 630,
  alt: 'SEO Uyumlu Kategori Sayfası Nasıl Olur? — Kerem Gezergün',
};

/** The annotated category page mockup shown under the layout section. */
const MOCKUP = {
  src: '/images/blog/seo-uyumlu-kategori-sayfasi-ornek.png',
  width: 1491,
  height: 1055,
  alt: 'SEO uyumlu elbise kategori sayfası örneği: breadcrumb, H1, kategori tanıtım metni, alt kategori linkleri, filtreler, ürün sayısı ve sıralama, öne çıkan kategoriler, kategori içeriği ve benzer kategoriler',
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
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
      {
        id: 'seo-uyumlu-kategori-sayfasi-yapisi-nasil-olmali',
        label: 'SEO Uyumlu Kategori Sayfası Yapısı Nasıl Olmalı?',
      },
    ],
  },
  {
    label: 'Sayfanın üst bölümü',
    collapsed: false,
    items: [
      { id: '1-breadcrumb-kullanilmali', label: '1. Breadcrumb Kullanılmalı' },
      {
        id: '2-kategori-ismi-h1-olarak-sayfanin-ust-bolumunde-yer-almali',
        label: '2. Kategori İsmi H1 Olarak Sayfanın Üst Bölümünde Yer Almalı',
      },
      {
        id: '3-h1-altinda-kisa-bir-kategori-aciklamasi-kullanilabilir',
        label: '3. H1 Altında Kısa Bir Kategori Açıklaması Kullanılabilir',
      },
      {
        id: '4-alt-kategorilere-kategori-ustu-linkleme-yapilmali',
        label: '4. Alt Kategorilere Kategori Üstü Linkleme Yapılmalı',
      },
    ],
  },
  {
    label: 'Ürün listeleme',
    collapsed: true,
    items: [
      { id: '5-urun-sayisi-gosterilmeli', label: '5. Ürün Sayısı Gösterilmeli' },
      { id: '6-filtreleme-sistemi-guclu-olmali', label: '6. Filtreleme Sistemi Güçlü Olmalı' },
      { id: '7-siralama-secenekleri-sunulmali', label: '7. Sıralama Seçenekleri Sunulmalı' },
      {
        id: '8-urun-kartlari-seo-ve-ux-acisindan-optimize-edilmeli',
        label: '8. Ürün Kartları SEO ve UX Açısından Optimize Edilmeli',
      },
      { id: '9-urun-isimleri-aciklayici-olmali', label: '9. Ürün İsimleri Açıklayıcı Olmalı' },
      { id: '10-urun-gorselleri-optimize-edilmeli', label: '10. Ürün Görselleri Optimize Edilmeli' },
      { id: '11-urunlerin-taranabilir-olmasi-gerekiyor', label: '11. Ürünlerin Taranabilir Olması Gerekiyor' },
    ],
  },
  {
    label: 'Sayfanın alt bölümü ve teknik katman',
    collapsed: true,
    items: [
      {
        id: '12-one-cikan-kategoriler-alani-olusturulabilir',
        label: '12. Öne Çıkan Kategoriler Alanı Oluşturulabilir',
      },
      {
        id: '13-kategori-icerigi-urunlerin-altinda-kullanilabilir',
        label: '13. Kategori İçeriği Ürünlerin Altında Kullanılabilir',
      },
      {
        id: '14-benzer-kategorilere-dahili-link-verilebilir',
        label: '14. Benzer Kategorilere Dahili Link Verilebilir',
      },
      {
        id: '15-kullanici-deneyimi-seodan-ayri-dusunulmemeli',
        label: '15. Kullanıcı Deneyimi SEO’dan Ayrı Düşünülmemeli',
      },
      { id: '16-teknik-seo-katmani-unutulmamali', label: '16. Teknik SEO Katmanı Unutulmamalı' },
    ],
  },
  {
    label: 'Özet',
    collapsed: true,
    items: [
      { id: 'seo-uyumlu-kategori-sayfasi-ornegi', label: 'SEO Uyumlu Kategori Sayfası Örneği' },
      {
        id: 'en-sik-yapilan-hatalar',
        label: 'SEO Uyumlu Kategori Sayfasında En Sık Yapılan Hatalar',
      },
      {
        id: 'kategori-seosunu-bir-sistem-olarak-dusunmek-gerekiyor',
        label: 'Kategori SEO’sunu Bir Sistem Olarak Düşünmek Gerekiyor',
      },
      { id: 'sonuc', label: 'Sonuç' },
    ],
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
    image: [OG_IMAGE.url, `${BASE_URL}${MOCKUP.src}`],
    author: ref(PERSON_ID),
    publisher: ref(PERSON_ID),
    isPartOf: ref(WEBSITE_ID),
    about: ['E-ticaret SEO', 'Kategori Sayfası', 'Internal Linking', 'Crawlability', 'Kullanıcı Deneyimi'].map(
      (name) => ({ '@type': 'Thing', name }),
    ),
  },
  breadcrumbNode('tr', { name: 'Blog', url: `${BASE_URL}/blog` }, { name: HEADLINE, url: PAGE_URL }),
);

function Chevron() {
  return (
    <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/** The draft's one-item-per-line enumerations. */
function Fragments({ items }: { items: string[] }) {
  return (
    <ul className="article-fragments">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/**
 * Example category names. The draft linked them to store URLs that do not
 * exist on this site, so they render as chips instead of links.
 */
function Chips({ items }: { items: string[] }) {
  return (
    <ul className="query-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function CategoryPageGuidePage() {
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
              <li aria-current="page">Kategori Sayfası Rehberi</li>
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
                E-ticaret SEO çalışmalarında kategori sayfaları benim en fazla önemsediğim sayfa
                tiplerinden biridir. Bunun temel sebebi oldukça basit: Kategori sayfaları hem yüksek
                hacimli jenerik aramalarda sıralama alma potansiyeline sahiptir hem de kullanıcıyı
                doğrudan ürünlere yönlendiren önemli bir ticari landing page görevi görür.
              </p>
              <p>Örneğin kullanıcı Google’da:</p>
              <ul className="query-list">
                <li>“elbise”</li>
                <li>“kadın elbise”</li>
                <li>“siyah elbise”</li>
                <li>“uzun elbise”</li>
                <li>“yazlık elbise”</li>
              </ul>
              <p>
                gibi sorgular yaptığında her sorguda kullanıcıyı bir ürün detay sayfasına göndermek
                doğru olmayabilir. Çünkü kullanıcının amacı henüz belirli bir ürünü satın almak
                değil, seçenekleri görmek ve karşılaştırmaktır.
              </p>
              <p>İşte kategori sayfalarının temel görevi tam olarak burada başlar.</p>
              <p>
                Ben SEO uyumlu bir kategori sayfasını yalnızca içerisinde ürünlerin listelendiği bir
                sayfa olarak görmüyorum.
              </p>
              <p>İyi hazırlanmış bir kategori sayfası;</p>
              <Fragments
                items={[
                  'kullanıcının aradığı ürünleri kolayca bulmasını,',
                  'alt kategorilere ulaşmasını,',
                  'ürünleri filtreleyip karşılaştırmasını,',
                  'Google’ın site mimarisini daha rahat anlamasını,',
                  'önemli sayfalara SEO değerinin doğru şekilde aktarılmasını',
                ]}
              />
              <p>sağlamalıdır.</p>
              <p>Bu yazıda SEO uyumlu kategori sayfasının nasıl olması gerektiğini adım adım anlatacağım.</p>
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

            <section id="seo-uyumlu-kategori-sayfasi-yapisi-nasil-olmali">
              <h2>SEO Uyumlu Kategori Sayfası Yapısı Nasıl Olmalı?</h2>
              <p>Benim ideal kategori sayfası sıralamam genel olarak şu şekilde:</p>
              <ul className="article-path">
                <li>Breadcrumb → Kategori Başlığı → Kısa Kategori Açıklaması</li>
                <li>→ Alt Kategoriler → Filtreleme ve Sıralama → Ürünler</li>
                <li>→ Öne Çıkan Kategoriler → Uzun Kategori İçeriği → Benzer Kategoriler</li>
              </ul>
              <p>
                Elbette her e-ticaret sitesinin ürün yapısı, kategori ağacı ve kullanıcı davranışları
                farklıdır. Bu nedenle bu yapı her projeye birebir uygulanması gereken katı bir şablon
                değildir.
              </p>
              <p>Ancak başlangıç noktası olarak oldukça sağlıklı bir mimari sunduğunu düşünüyorum.</p>
              <figure className="article-figure">
                <a href={MOCKUP.src} target="_blank" rel="noopener">
                  <Image
                    src={MOCKUP.src}
                    alt={MOCKUP.alt}
                    width={MOCKUP.width}
                    height={MOCKUP.height}
                    sizes="(max-width: 860px) 100vw, 800px"
                  />
                  <span className="sr-only"> (görseli tam boyutta yeni sekmede açar)</span>
                </a>
                <figcaption>SEO uyumlu bir e-ticaret kategori sayfası için örnek sayfa yapısı.</figcaption>
              </figure>
            </section>

            <section id="1-breadcrumb-kullanilmali">
              <h2>1. Breadcrumb Kullanılmalı</h2>
              <p>
                Kategori sayfasının üst bölümünde breadcrumb kullanmak hem SEO hem de kullanıcı
                deneyimi açısından önemlidir.
              </p>
              <p>Örneğin:</p>
              <p className="article-example">Ana Sayfa &gt; Kadın &gt; Giyim &gt; Elbise</p>
              <p>
                Bu yapı sayesinde kullanıcı site içerisinde hangi seviyede olduğunu daha rahat
                anlayabilir. Aynı zamanda kategori hiyerarşisinin arama motorları tarafından
                anlaşılmasını kolaylaştırabilir.
              </p>
              <p>
                Özellikle geniş kategori ağacına sahip e-ticaret sitelerinde breadcrumb kullanımını
                oldukça önemli görüyorum.
              </p>
              <p>
                Burada önemli olan breadcrumb yapısının gerçek kategori mimarisiyle uyumlu olmasıdır.
                Sadece SEO amacıyla oluşturulmuş, kullanıcının gerçek gezinme yapısını yansıtmayan
                breadcrumb kullanımı doğru değildir.
              </p>
            </section>

            <section id="2-kategori-ismi-h1-olarak-sayfanin-ust-bolumunde-yer-almali">
              <h2>2. Kategori İsmi H1 Olarak Sayfanın Üst Bölümünde Yer Almalı</h2>
              <p>Sayfanın ana konusu mümkün olduğunca açık olmalıdır.</p>
              <p>Örneğin kategori:</p>
              <p className="article-example">Elbise</p>
              <p>ise sayfanın ana başlığının da:</p>
              <p className="article-example">Elbise</p>
              <p>olması oldukça doğal bir yapıdır.</p>
              <p>
                Ben kategori sayfalarında ana kategori sorgusunu karşılayan, açık ve sade bir H1
                kullanılmasını tercih ediyorum.
              </p>
              <p>
                H1 içerisinde gereksiz şekilde anahtar kelime doldurmak yerine kategori ismini
                doğrudan vermek çoğu durumda yeterlidir.
              </p>
              <p>Örneğin:</p>
              <p className="article-example">Elbise Modelleri, Ucuz Kadın Elbise Fiyatları, En Güzel Elbiseler</p>
              <p>gibi tamamen SEO amacıyla hazırlanmış başlıklar yerine daha doğal bir yapı tercih edilebilir.</p>
              <p>
                H1 SEO’nun tek başına sıralama belirleyen sihirli bir elementi değildir ancak sayfanın
                konusunu kullanıcıya ve arama motorlarına açık şekilde anlatması açısından önemlidir.
              </p>
            </section>

            <section id="3-h1-altinda-kisa-bir-kategori-aciklamasi-kullanilabilir">
              <h2>3. H1 Altında Kısa Bir Kategori Açıklaması Kullanılabilir</h2>
              <p>
                Kategori başlığının hemen altında birkaç cümlelik kısa bir açıklama kullanılmasını
                faydalı buluyorum.
              </p>
              <p>Ancak burada çok önemli bir ayrım var.</p>
              <p>
                Sayfanın en üst bölümüne yüzlerce kelimelik SEO içeriği koymayı doğru bulmuyorum.
                Çünkü kullanıcı kategori sayfasına geldiğinde çoğu zaman ilk olarak ürünleri görmek
                ister.
              </p>
              <p>Ürünleri aşağıya iten uzun içerikler kullanıcı deneyimine zarar verebilir.</p>
              <p>Bunun yerine örneğin şöyle kısa bir açıklama kullanılabilir:</p>
              <blockquote className="article-callout">
                <p>
                  Günlük, abiye, uzun, midi ve farklı renk seçeneklerine sahip elbise modellerini
                  inceleyebilir; beden, fiyat ve marka seçeneklerine göre filtreleme yapabilirsiniz.
                </p>
              </blockquote>
              <p>Buradaki amaç:</p>
              <Fragments
                items={[
                  'kategori kapsamını anlatmak,',
                  'kullanıcı beklentisini karşılamak,',
                  'kategoriyle ilgili semantik bağlam oluşturmak',
                ]}
              />
              <p>olmalıdır.</p>
              <p>Uzun kategori içeriğini ise sayfanın daha alt bölümüne taşımayı tercih ediyorum.</p>
            </section>

            <section id="4-alt-kategorilere-kategori-ustu-linkleme-yapilmali">
              <h2>4. Alt Kategorilere Kategori Üstü Linkleme Yapılmalı</h2>
              <p>Bana göre kategori sayfasının en önemli alanlarından biri burasıdır.</p>
              <p>
                Ana kategorinin hemen altında kullanıcının gitmek isteyebileceği önemli alt
                kategorilere bağlantı verilebilir.
              </p>
              <p>
                Örneğin <strong>Elbise</strong> kategorisinde:
              </p>
              <Chips
                items={[
                  'Siyah Elbise',
                  'Beyaz Elbise',
                  'Uzun Elbise',
                  'Midi Elbise',
                  'Mini Elbise',
                  'Yazlık Elbise',
                  'Abiye Elbise',
                  'Günlük Elbise',
                ]}
              />
              <p>gibi kategoriler gösterilebilir.</p>
              <p>Bu alan hem kullanıcı deneyimi hem de SEO açısından oldukça değerlidir.</p>
              <p>
                Kullanıcı açısından baktığımızda kişinin aradığı kategoriye daha hızlı ulaşmasını
                sağlar. SEO tarafından baktığımızda ise önemli alt kategori sayfalarına dahili
                bağlantı aktarılmış olur.
              </p>
              <p>Fakat burada küçük ama önemli bir uyarı yapmak gerekiyor.</p>
              <p className="article-key">
                <strong>Her filtreyi veya her olası kelime kombinasyonunu kategori haline getirmek doğru değildir.</strong>
              </p>
              <p>Alt kategori oluştururken:</p>
              <Fragments
                items={[
                  'kullanıcı arama talebi,',
                  'ürün sayısı,',
                  'ticari değer,',
                  'kategori mantığı,',
                  'stok sürekliliği,',
                  'arama niyeti',
                ]}
              />
              <p>birlikte değerlendirilmelidir.</p>
              <p>
                Örneğin yeterli ürünün bulunmadığı çok spesifik bir sorgu için ayrı kategori açmak
                gereksiz olabilir. Hangi alt kategorilerin açılması gerektiğini{' '}
                <Link href="/seo-uyumlu-kategori-agaci">SEO uyumlu kategori ağacı</Link> rehberinde
                adım adım anlattım.
              </p>
            </section>

            <section id="5-urun-sayisi-gosterilmeli">
              <h2>5. Ürün Sayısı Gösterilmeli</h2>
              <p>
                Kategori içerisinde kaç ürün olduğunu göstermek küçük gibi görünse de kullanıcı
                açısından faydalı bir detaydır.
              </p>
              <p>Örneğin:</p>
              <p className="article-example">1.248 ürün</p>
              <p>gibi bir gösterim kullanıcıya kategori genişliği hakkında hızlıca fikir verebilir.</p>
              <p>
                Özellikle büyük pazar yerlerinde ürün sayısı, kullanıcının filtreleme davranışını da
                etkileyebilir.
              </p>
              <p>
                10 ürün olan bir kategoride kullanıcı filtrelemeye ihtiyaç duymayabilirken 10.000 ürün
                bulunan bir kategoride filtreleme sistemi kritik hale gelir.
              </p>
            </section>

            <section id="6-filtreleme-sistemi-guclu-olmali">
              <h2>6. Filtreleme Sistemi Güçlü Olmalı</h2>
              <p>
                E-ticaret kategori sayfalarında kullanıcı deneyimini en fazla etkileyen alanlardan
                biri filtreleme sistemidir.
              </p>
              <p>Elbise kategorisinde örneğin:</p>
              <Chips
                items={[
                  'Beden',
                  'Renk',
                  'Marka',
                  'Fiyat',
                  'Kumaş',
                  'Elbise boyu',
                  'Kol tipi',
                  'Yaka tipi',
                  'Kalıp',
                  'Desen',
                ]}
              />
              <p>gibi filtreler kullanılabilir.</p>
              <p>
                Burada filtrelerin kategoriye özel olması gerektiğini düşünüyorum. Örneğin televizyon
                kategorisiyle elbise kategorisinin aynı filtreleme mantığına sahip olması beklenemez.
              </p>
              <p>Kullanıcının satın alma kararında önemli olan özellikler kategori bazlı belirlenmelidir.</p>
              <p>Filtreleme sadece UX konusu değildir. SEO tarafında da oldukça önemli bir konuya dönüşebilir.</p>
              <p>
                Çünkü her filtre seçiminin yeni bir URL oluşturduğu sistemlerde kısa sürede yüz
                binlerce hatta milyonlarca URL oluşabilir.
              </p>
              <p>Örneğin:</p>
              <pre className="article-tree">{`/elbise?renk=siyah
/elbise?renk=siyah&beden=m
/elbise?renk=siyah&beden=m&marka=x`}</pre>
              <p>gibi kombinasyonlar kontrol edilmezse ciddi crawl budget ve indexation sorunları yaratabilir.</p>
              <p>Bu nedenle faceted navigation yani filtre URL’lerinin yönetimi ayrıca ele alınmalıdır.</p>
              <p>
                Bu konu oldukça geniş olduğu için{' '}
                <strong>
                  filtreleme sistemlerinin SEO açısından nasıl yönetilmesi gerektiğini ayrı bir yazıda
                  detaylı olarak ele alacağım.
                </strong>
              </p>
            </section>

            <section id="7-siralama-secenekleri-sunulmali">
              <h2>7. Sıralama Seçenekleri Sunulmalı</h2>
              <p>Filtreleme kadar sıralama seçenekleri de kategori kullanıcı deneyimi açısından önemlidir.</p>
              <p>Örneğin:</p>
              <Chips
                items={['Önerilen', 'En çok satan', 'En yüksek puan', 'En yeniler', 'Fiyat artan', 'Fiyat azalan']}
              />
              <p>gibi seçenekler sunulabilir.</p>
              <p>
                Burada benim dikkat ettiğim nokta kullanıcıların gerçekten kullandığı sıralama
                seçeneklerinin sunulmasıdır.
              </p>
              <p>
                Onlarca farklı sıralama yöntemi eklemek yerine temel satın alma davranışlarını
                karşılayan seçenekleri sunmak daha sağlıklı olabilir.
              </p>
            </section>

            <section id="8-urun-kartlari-seo-ve-ux-acisindan-optimize-edilmeli">
              <h2>8. Ürün Kartları SEO ve UX Açısından Optimize Edilmeli</h2>
              <p>
                Kategori sayfasının temel amacı ürünleri kullanıcının karşısına çıkarmaktır.
                Dolayısıyla ürün kartlarının kalitesi oldukça önemlidir.
              </p>
              <p>Bir ürün kartında genel olarak şu bilgilerin bulunmasını beklerim:</p>
              <Fragments
                items={[
                  'ürün görseli,',
                  'ürün adı,',
                  'marka,',
                  'fiyat,',
                  'indirimli fiyat,',
                  'kampanya bilgisi,',
                  'değerlendirme puanı,',
                  'değerlendirme sayısı,',
                  'varsa renk veya varyant seçenekleri.',
                ]}
              />
              <p>Ancak bütün bilgileri ürün kartına doldurmak da doğru değildir.</p>
              <p>
                Kategori sayfasında kullanıcı karar vermesi için gerekli olan temel bilgileri görmeli,
                ürünün detaylarına ürün sayfasından ulaşmalıdır.
              </p>
            </section>

            <section id="9-urun-isimleri-aciklayici-olmali">
              <h2>9. Ürün İsimleri Açıklayıcı Olmalı</h2>
              <p>Ürün isimleri kategori sayfası SEO’sunda göz ardı edilen ancak önemli alanlardan biridir.</p>
              <p>Ürün isimlerinin kullanıcının ürünü anlayabileceği şekilde açık olması gerekir.</p>
              <p>Örneğin:</p>
              <p className="article-example">Kadın Siyah Uzun Kollu Midi Elbise</p>
              <p>gibi bir ürün adı:</p>
              <p className="article-example">Ürün 12546</p>
              <p>gibi anlamsız bir isimlendirmeden çok daha faydalıdır.</p>
              <p>
                Ayrıca ürün isimlerinin ürün detay sayfasına verilen anchor text görevini de
                üstlenebileceğini unutmamak gerekir.
              </p>
              <p>Ancak burada sık yapılan bir yanlışa değinmek istiyorum.</p>
              <p className="article-key">
                <strong>Her ürün isminin mutlaka H2 olması gerektiğini düşünmüyorum.</strong>
              </p>
              <p>
                Bir kategori sayfasında 100 ürün bulunuyorsa 100 adet H2 oluşturmak her zaman anlamlı
                bir HTML yapısı oluşturmaz.
              </p>
              <p>
                Heading kullanımı sitenin front-end yapısına ve erişilebilirlik mimarisine göre
                değerlendirilmelidir.
              </p>
              <p>Ben burada heading etiketi kullanımından çok:</p>
              <Fragments
                items={[
                  'ürün adının HTML içerisinde gerçek metin olması,',
                  'ürün sayfasına gerçek bir bağlantı vermesi,',
                  'açıklayıcı olması',
                ]}
              />
              <p>konularını daha önemli görüyorum.</p>
            </section>

            <section id="10-urun-gorselleri-optimize-edilmeli">
              <h2>10. Ürün Görselleri Optimize Edilmeli</h2>
              <p>
                E-ticarette ürün görselleri sadece tasarım elementi değildir. Kullanıcının satın alma
                kararının temel parçalarından biridir.
              </p>
              <p>Aynı zamanda görsel arama tarafında da trafik fırsatı oluşturabilir.</p>
              <p>Ürün görsellerinde:</p>
              <Fragments
                items={[
                  'kaliteli görüntü,',
                  'doğru en-boy oranı,',
                  'optimize edilmiş dosya boyutu,',
                  'doğru görsel çözünürlüğü,',
                  'açıklayıcı alt metinler,',
                  'anlamlı dosya isimleri,',
                  'responsive image kullanımı',
                ]}
              />
              <p>gibi konular değerlendirilmelidir.</p>
              <p>
                Özellikle büyük e-ticaret sitelerinde kötü optimize edilmiş görseller Core Web Vitals
                ve sayfa hızını ciddi şekilde etkileyebilir.
              </p>
              <p>
                Bu nedenle image SEO’yu yalnızca <code>alt</code> etiketi yazmaktan ibaret görmemek
                gerekir.
              </p>
            </section>

            <section id="11-urunlerin-taranabilir-olmasi-gerekiyor">
              <h2>11. Ürünlerin Taranabilir Olması Gerekiyor</h2>
              <p>
                Kategori sayfasında 20 ürün gösteriliyor ancak kategoride toplam 3.000 ürün
                bulunuyorsa önemli bir soru ortaya çıkıyor:
              </p>
              <p className="article-key">
                <strong>Google geri kalan ürünlere nasıl ulaşacak?</strong>
              </p>
              <p>Burada pagination, Load More veya Infinite Scroll gibi yapılar devreye giriyor.</p>
              <p>
                Örneğin kullanıcı <strong>Daha Fazla Göster</strong> butonuna tıklayarak yeni ürünleri
                görebiliyor olabilir.
              </p>
              <p>Ancak Googlebot’un kullanıcı gibi butona tıklayacağını varsaymak doğru değildir.</p>
              <p>
                Bu nedenle ürünlerin arama motorlarının takip edebileceği URL yapıları üzerinden
                erişilebilir olması gerekir.
              </p>
              <p>
                Pagination mimarisi, JavaScript rendering ve ürünlerin crawl edilebilirliği oldukça
                kapsamlı teknik SEO konularıdır.
              </p>
              <p>
                Bu nedenle{' '}
                <strong>
                  e-ticaret sitelerinde crawlability ve pagination mimarisini ayrı bir teknik SEO
                  içeriğinde detaylı olarak ele almayı planlıyorum.
                </strong>
              </p>
            </section>

            <section id="12-one-cikan-kategoriler-alani-olusturulabilir">
              <h2>12. Öne Çıkan Kategoriler Alanı Oluşturulabilir</h2>
              <p>Ürün listelemesinin ardından öne çıkan kategoriler alanı oluşturulabilir.</p>
              <p>Elbise örneğinden devam edelim.</p>
              <h3>Öne Çıkan Elbise Kategorileri</h3>
              <Chips
                items={[
                  'Düğün Elbiseleri',
                  'Mezuniyet Elbiseleri',
                  'Günlük Elbiseler',
                  'Ofis Elbiseleri',
                  'Yazlık Elbiseler',
                  'Davet Elbiseleri',
                ]}
              />
              <p>gibi kullanım senaryolarına göre kategoriler gösterilebilir.</p>
              <p>Bu alanın avantajı kullanıcının ürün keşfine devam etmesini sağlamasıdır.</p>
              <p>Aynı zamanda site içerisindeki stratejik kategori sayfalarına dahili link aktarımı yapılabilir.</p>
            </section>

            <section id="13-kategori-icerigi-urunlerin-altinda-kullanilabilir">
              <h2>13. Kategori İçeriği Ürünlerin Altında Kullanılabilir</h2>
              <p>Kategori açıklaması SEO çalışmalarında yıllardır tartışılan konulardan biridir.</p>
              <p>Ben kategori içeriklerinin tamamen gereksiz olduğunu düşünmüyorum.</p>
              <p>Ancak şu yaklaşımı doğru bulmuyorum:</p>
              <p className="article-key">
                <strong>Kategoriye 1.000 kelime içerik yazarsak SEO performansı artar.</strong>
              </p>
              <p>Kelime sayısı tek başına kalite veya SEO göstergesi değildir.</p>
              <p>Kategori içeriğinin kullanıcının gerçekten ihtiyaç duyabileceği bilgileri vermesi gerekir.</p>
              <p>Örneğin Elbise kategorisinde içerik içerisinde:</p>
              <Fragments
                items={[
                  'elbise seçerken nelere dikkat edilmeli,',
                  'vücut tipine göre elbise seçimi,',
                  'elbise boyları,',
                  'kumaş türleri,',
                  'mevsime göre elbise seçimi,',
                  'elbise kombinleri',
                ]}
              />
              <p>gibi kullanıcının karar verme sürecine yardımcı olacak bilgiler bulunabilir.</p>
              <p>
                Buradaki amacımız Google için metin üretmek değil, kullanıcıya yardımcı olacak bir
                içerik alanı oluşturmaktır.
              </p>
              <p>
                Kategori içeriklerinin nasıl hazırlanması gerektiğini ayrı bir yazıda detaylı olarak
                ele alacağım.
              </p>
            </section>

            <section id="14-benzer-kategorilere-dahili-link-verilebilir">
              <h2>14. Benzer Kategorilere Dahili Link Verilebilir</h2>
              <p>
                Sayfanın alt bölümünde kullanıcının ilgilenebileceği benzer kategorilere bağlantı
                vermek oldukça faydalıdır.
              </p>
              <p>Örneğin Elbise kategorisinin altında:</p>
              <h3>Bunlar da İlginizi Çekebilir</h3>
              <Chips items={['Etek', 'Bluz', 'Tulum', 'Kadın Takım', 'Abiye', 'Gömlek']} />
              <p>Ancak internal linking yapısını sadece birkaç kategori linki eklemek olarak görmemek gerekir.</p>
              <p>Doğru bir internal linking mimarisinde:</p>
              <Fragments
                items={[
                  'hangi sayfaların daha fazla link alacağı,',
                  'anchor text dağılımı,',
                  'kategori derinliği,',
                  'orphan URL’ler,',
                  'click depth,',
                  'site hiyerarşisi,',
                  'PageRank dağılımı',
                ]}
              />
              <p>gibi çok daha fazla değişken bulunmaktadır.</p>
              <p>
                Dolayısıyla <strong>internal linking mimarisi başlı başına ayrı bir SEO konusu.</strong>
              </p>
              <p>
                E-ticaret siteleri için internal linking stratejisini farklı bir yazıda çok daha
                detaylı olarak inceleyeceğim.
              </p>
            </section>

            <section id="15-kullanici-deneyimi-seodan-ayri-dusunulmemeli">
              <h2>15. Kullanıcı Deneyimi SEO’dan Ayrı Düşünülmemeli</h2>
              <p>Kategori sayfasını yalnızca Google için optimize etmek bence en büyük hatalardan biridir.</p>
              <p>
                Kullanıcı kategoriye geldikten sonra ürün bulamıyor, filtreleri kullanamıyor veya sayfa
                çok yavaş açılıyorsa SEO çalışmasının ticari karşılığı sınırlı kalacaktır.
              </p>
              <p>Bu nedenle kategori sayfasını tasarlarken bazı temel sorular sormak gerekir:</p>
              <Fragments
                items={[
                  'Kullanıcı aradığı ürünü ne kadar hızlı bulabiliyor?',
                  'Filtreler anlaşılır mı?',
                  'Mobil kullanım kolay mı?',
                  'Ürün kartlarında gerekli bilgiler bulunuyor mu?',
                  'Kullanıcı kategori içerisinde kayboluyor mu?',
                  'Önemli alt kategorilere kolay ulaşılabiliyor mu?',
                  'Sayfa hızlı açılıyor mu?',
                ]}
              />
              <p>SEO trafiği kullanıcıyı sayfaya getirir.</p>
              <p>Ancak kullanıcının sitede ne yaptığı UX, CRO ve ürün deneyimiyle ilgilidir.</p>
              <p>
                Bu nedenle özellikle e-ticaret projelerinde SEO ile UX ekiplerinin birbirinden tamamen
                bağımsız çalışmasını doğru bulmuyorum.
              </p>
              <p>
                UX konusu da oldukça geniş olduğu için{' '}
                <strong>SEO ve UX ilişkisini ayrı bir içerikte daha detaylı inceleyeceğiz.</strong>
              </p>
            </section>

            <section id="16-teknik-seo-katmani-unutulmamali">
              <h2>16. Teknik SEO Katmanı Unutulmamalı</h2>
              <p>Buraya kadar çoğunlukla kullanıcının gördüğü kategori alanlarından bahsettik.</p>
              <p>Fakat bir de arka planda çalışan teknik SEO katmanı bulunuyor.</p>
              <p>Kategori sayfasında kontrol edilmesi gereken konular arasında:</p>
              <Fragments
                items={[
                  'SEO Title,',
                  'Meta Description,',
                  'URL yapısı,',
                  'canonical etiketi,',
                  'index / noindex kararları,',
                  'robots yönetimi,',
                  'filtre URL’leri,',
                  'pagination,',
                  'structured data,',
                  'Core Web Vitals,',
                  'mobile-first yapı,',
                  'sitemap,',
                  'HTTP status code,',
                  'boş kategori yönetimi',
                ]}
              />
              <p>gibi konular bulunuyor.</p>
              <p>
                Örneğin bir kategori sayfasının tasarım olarak mükemmel görünmesi fakat yanlışlıkla{' '}
                <code>noindex</code> olması bütün SEO potansiyelini ortadan kaldırabilir.
              </p>
              <p>Dolayısıyla kategori SEO’sunu sadece içerik veya tasarım üzerinden değerlendirmek eksik kalır.</p>
            </section>

            <section id="seo-uyumlu-kategori-sayfasi-ornegi">
              <h2>SEO Uyumlu Kategori Sayfası Örneği</h2>
              <p>Tüm yapıyı tek bir şema içerisinde gösterecek olursak:</p>

              <h3>1. Breadcrumb</h3>
              <p className="article-example">Ana Sayfa &gt; Kadın &gt; Elbise</p>

              <h3>2. H1</h3>
              <p className="article-example">Elbise</p>

              <h3>3. Kısa Açıklama</h3>
              <p>Kategori hakkında 1-3 cümlelik kısa açıklama.</p>

              <h3>4. Alt Kategoriler</h3>
              <Chips items={['Siyah Elbise', 'Beyaz Elbise', 'Uzun Elbise', 'Midi Elbise', 'Abiye Elbise']} />

              <h3>5. Ürün Sayısı</h3>
              <p className="article-example">1.248 ürün</p>

              <h3>6. Filtreleme</h3>
              <Chips items={['Renk', 'Beden', 'Marka', 'Fiyat', 'Kumaş', 'Boy']} />

              <h3>7. Sıralama</h3>
              <Chips items={['Önerilen', 'En Çok Satan', 'En Yeniler', 'Fiyat']} />

              <h3>8. Ürün Listeleme</h3>
              <Fragments items={['Ürün görseli', 'Ürün adı', 'Fiyat', 'Değerlendirme', 'Varyantlar']} />

              <h3>9. Pagination / Load More</h3>
              <p>Googlebot ve kullanıcıların ürünlere ulaşabileceği bir yapı.</p>

              <h3>10. Öne Çıkan Kategoriler</h3>
              <Chips items={['Günlük Elbise', 'Davet Elbisesi', 'Ofis Elbisesi']} />

              <h3>11. Uzun Kategori İçeriği</h3>
              <p>Kullanıcının satın alma kararını destekleyen bilgilendirici içerik.</p>

              <h3>12. Benzer Kategoriler</h3>
              <Chips items={['Etek', 'Bluz', 'Tulum', 'Abiye', 'Kadın Takım']} />

              <p>Benim temel kategori şablonum bu şekilde olur.</p>
            </section>

            <section id="en-sik-yapilan-hatalar">
              <h2>SEO Uyumlu Kategori Sayfasında En Sık Yapılan Hatalar</h2>
              <p>Kategori SEO çalışmalarında sık gördüğüm bazı problemler bulunuyor.</p>
              <p>Bunların başında:</p>
              <Fragments
                items={[
                  'kategori sayfasına gereksiz uzun içerik eklemek,',
                  'ürünleri aşağıya itmek,',
                  'her filtreyi indeksletmek,',
                  'binlerce parametre URL’si oluşturmak,',
                  'alt kategorilere link vermemek,',
                  'kategori ağacını gereğinden fazla derinleştirmek,',
                  'ürün isimlerini anlamsız oluşturmak,',
                  'görselleri optimize etmemek,',
                  'JavaScript nedeniyle Google’ın ürünleri görememesi,',
                  'boş kategorileri indeksletmek,',
                  'canonical yapılarını yanlış kullanmak,',
                  'bütün SEO çalışmasını kategori metnine bağlamak',
                ]}
              />
              <p>geliyor.</p>
              <p>Özellikle son maddeyi önemli buluyorum.</p>
              <p className="article-key">
                <strong>Kategori SEO’su yalnızca kategori açıklaması yazmak değildir.</strong>
              </p>
            </section>

            <section id="kategori-seosunu-bir-sistem-olarak-dusunmek-gerekiyor">
              <h2>Kategori SEO’sunu Bir Sistem Olarak Düşünmek Gerekiyor</h2>
              <p>Ben kategori sayfasını dört farklı katmanın birleşimi olarak değerlendiriyorum:</p>
              <p className="article-key">
                <strong>SEO + UX + Crawlability + Internal Linking</strong>
              </p>
              <p>SEO katmanı sayfanın arama motorlarındaki görünürlüğünü oluşturur.</p>
              <p>UX katmanı kullanıcının ürünleri bulmasını ve kategori içerisinde rahat hareket etmesini sağlar.</p>
              <p>Crawlability katmanı Googlebot’un ürünleri ve alt kategorileri keşfedebilmesini sağlar.</p>
              <p>
                Internal linking ise sitenin kategori hiyerarşisinin ve SEO değerinin sayfalar arasında
                doğru şekilde dağıtılmasına yardımcı olur.
              </p>
              <p>Bu dört yapı birlikte çalışmadığında kategori performansı genellikle sınırlı kalır.</p>
              <p>Ancak özellikle:</p>
              <Fragments items={['crawlability,', 'faceted navigation,', 'pagination,', 'internal linking']} />
              <p>konuları oldukça teknik ve geniş başlıklar.</p>
              <p>
                Bu nedenle bu yazıda temel mantıklarını anlattım. Her birini ilerleyen içeriklerde ayrı
                ayrı daha derin şekilde inceleyeceğiz.
              </p>
            </section>

            <section className="article-conclusion" id="sonuc">
              <h2>Sonuç: SEO Uyumlu Kategori Sayfası Sadece SEO Metninden İbaret Değildir</h2>
              <p>
                SEO uyumlu kategori sayfası denildiğinde hâlâ birçok kişinin aklına ürünlerin altında
                bulunan uzun SEO metinleri geliyor.
              </p>
              <p>Ben bu yaklaşımın oldukça eksik olduğunu düşünüyorum.</p>
              <p>İyi bir kategori sayfası;</p>
              <p className="article-key">
                <strong>
                  kullanıcıya doğru ürünleri gösteren, alt kategorileri keşfetmesini sağlayan,
                  filtreleme deneyimini kolaylaştıran, arama motorlarının site yapısını anlamasına
                  yardımcı olan ve önemli sayfalar arasında doğru bağlantıları kuran bir landing page
                  olmalıdır.
                </strong>
              </p>
              <p>Dolayısıyla kategori SEO’sunda yalnızca anahtar kelimelere değil;</p>
              <Fragments
                items={[
                  'kullanıcı niyetine,',
                  'kategori mimarisine,',
                  'ürünlere,',
                  'iç linklere,',
                  'filtrelere,',
                  'crawlability’ye,',
                  'sayfa hızına,',
                  'mobil deneyime',
                ]}
              />
              <p>birlikte bakmak gerekiyor.</p>
              <p>Benim için başarılı kategori SEO’sunun temel mantığı oldukça basit:</p>
              <p className="article-key">
                <strong>
                  Google’ın anlayabildiği, kullanıcının rahat kullanabildiği ve ürünlerin kolay
                  keşfedilebildiği bir kategori yapısı oluşturmak.
                </strong>
              </p>
              <p>
                Bunu başarabildiğimiz noktada kategori sayfası yalnızca SEO trafiği alan bir sayfa
                olmaktan çıkıp doğrudan e-ticaret büyümesini destekleyen güçlü bir landing page’e
                dönüşüyor.
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

      <RelatedPosts current={PATH} />

      {/* CTA Section */}
      <section className="cta-section" aria-labelledby="contact-heading">
        <div className="container">
          <h2 id="contact-heading">İletişime Geçin</h2>
          <p>
            Eğitim, konuşmacılık, podcast konukluğu veya iş birliği için bana yazın; SEO
            sorularınızı da yanıtlamaktan memnuniyet duyarım.
          </p>
          <div className="cta-actions">
            <Link href="/iletisim" className="btn btn-primary btn-large">
              İletişim Formu
            </Link>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn btn-outline btn-large"
            >
              WhatsApp’tan Yazın
              <span className="sr-only"> (yeni sekmede açılır)</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
