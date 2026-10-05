import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { postByPath } from '@/lib/blog/posts';
import { contact } from '@/lib/contact';
import { jsonLdSafe } from '@/lib/jsonLd';
import { BASE_URL, PERSON_ID, WEBSITE_ID, graph, ref } from '@/lib/schema/base';
import { breadcrumbNode } from '@/lib/schema/page';

const PATH = '/seo-uyumlu-urun-sayfasi-nasil-olur';
const PAGE_URL = `${BASE_URL}${PATH}`;

/** The H1, reused as the BlogPosting headline and the last breadcrumb. */
const HEADLINE = 'SEO Uyumlu Ürün Sayfası Nasıl Olur?';

/** Root layout appends " | Kerem Gezergün", so the title stays short here. */
const TITLE = HEADLINE;

const DESCRIPTION =
  'SEO uyumlu ürün sayfası nasıl hazırlanır? Görseller, varyantlar, canonical, structured data, FAQ ve internal linking için doğru ürün sayfası yapısını öğrenin.';

const PUBLISHED = '2026-10-05';
const PUBLISHED_LABEL = '5 Ekim 2026';

/** 2,780 words in the draft at ~200 wpm. Update by hand if the text changes. */
const WORD_COUNT = 2780;
const READING_TIME = '14 dk okuma';

const OG_IMAGE = {
  url: `${BASE_URL}${postByPath(PATH).cover}`,
  width: 1200,
  height: 630,
  alt: 'SEO Uyumlu Ürün Sayfası Nasıl Olur? — Kerem Gezergün',
};

/** The annotated product page infographic shown under the layout section. */
const INFOGRAPHIC = {
  src: '/images/blog/seo-uyumlu-urun-sayfasi-ornek.png',
  width: 992,
  height: 1586,
  alt: 'SEO uyumlu ürün sayfası örneği: breadcrumb, ürün görselleri, H1 ürün adı, fiyat, stok ve CTA, ürün özellikleri, ürün açıklaması, FAQ, kullanıcı yorumları, benzer ürünler, ilgili kategoriler ve teknik SEO katmanı',
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
      { id: 'seo-uyumlu-urun-sayfasi-yapisi-nasil-olmali', label: 'SEO Uyumlu Ürün Sayfası Yapısı Nasıl Olmalı?' },
    ],
  },
  {
    label: 'Sayfada görünen alanlar',
    collapsed: false,
    items: [
      {
        id: '1-breadcrumb-urunun-gercek-kategori-hiyerarsisini-yansitmali',
        label: '1. Breadcrumb Ürünün Gerçek Kategori Hiyerarşisini Yansıtmalı',
      },
      {
        id: '2-urun-gorselleri-satin-alma-deneyiminin-temel-parcasidir',
        label: '2. Ürün Görselleri Satın Alma Deneyiminin Temel Parçasıdır',
      },
      {
        id: '3-gorsel-alt-textleri-urun-isminin-kopyasi-olmamali',
        label: '3. Görsel Alt Text’leri Ürün İsminin Kopyası Olmamalı',
      },
      { id: '4-urun-ismi-sayfanin-h1-basligi-olmali', label: '4. Ürün İsmi Sayfanın H1 Başlığı Olmalı' },
      {
        id: '5-fiyat-stok-ve-varyant-bilgileri-kolayca-gorulebilmeli',
        label: '5. Fiyat, Stok ve Varyant Bilgileri Kolayca Görülebilmeli',
      },
      { id: '6-urun-ozellikleri-aciklamadan-ayri-tutulmali', label: '6. Ürün Özellikleri Açıklamadan Ayrı Tutulmalı' },
      {
        id: '7-urun-aciklamasi-kullaniciya-gercekten-bilgi-vermeli',
        label: '7. Ürün Açıklaması Kullanıcıya Gerçekten Bilgi Vermeli',
      },
    ],
  },
  {
    label: 'Varyantlar ve long-tail',
    collapsed: true,
    items: [
      {
        id: '8-varyantli-urunlerde-duplicate-content-problemi-dogru-yonetilmeli',
        label: '8. Varyantlı Ürünlerde Duplicate Content Problemi Doğru Yönetilmeli',
      },
      {
        id: '9-renk-varyantlari-long-tail-aramalar-icin-kullanilabilir',
        label: '9. Renk Varyantları Long-Tail Aramalar İçin Kullanılabilir',
      },
      {
        id: '10-canonical-yapisi-varyant-stratejisiyle-birlikte-tasarlanmali',
        label: '10. Canonical Yapısı Varyant Stratejisiyle Birlikte Tasarlanmalı',
      },
      {
        id: '11-urun-sayfalari-long-tail-keyword-stratejisinin-onemli-bir-parcasidir',
        label: '11. Ürün Sayfaları Long-Tail Keyword Stratejisinin Önemli Bir Parçasıdır',
      },
    ],
  },
  {
    label: 'İçerik ve iç linkleme',
    collapsed: true,
    items: [
      { id: '12-her-urune-ozgu-faq-alani-olusturulabilir', label: '12. Her Ürüne Özgü FAQ Alanı Oluşturulabilir' },
      {
        id: '13-kullanici-yorumlari-urun-icerigini-zenginlestirir',
        label: '13. Kullanıcı Yorumları Ürün İçeriğini Zenginleştirir',
      },
      {
        id: '14-benzer-urunler-alani-product-to-product-linking-saglar',
        label: '14. Benzer Ürünler Alanı Product-to-Product Linking Sağlar',
      },
      {
        id: '15-urun-sayfalarindan-ilgili-kategorilere-geri-link-verilmeli',
        label: '15. Ürün Sayfalarından İlgili Kategorilere Geri Link Verilmeli',
      },
    ],
  },
  {
    label: 'Structured data',
    collapsed: true,
    items: [
      {
        id: '16-structured-data-urun-verisini-arama-motorlarina-anlatir',
        label: '16. Structured Data Ürün Verisini Arama Motorlarına Anlatır',
      },
      {
        id: '17-gelismis-product-schema-cok-daha-fazla-urun-bilgisi-tasiyabilir',
        label: '17. Gelişmiş Product Schema Çok Daha Fazla Ürün Bilgisi Taşıyabilir',
      },
      {
        id: '18-gercek-bir-e-ticaret-schema-optimizasyonu-ornegi',
        label: '18. Gerçek Bir E-Ticaret Schema Optimizasyonu Örneği',
      },
      {
        id: '19-productgroup-varyant-iliskisini-tanimlamak-icin-kullanilabilir',
        label: '19. ProductGroup Varyant İlişkisini Tanımlamak İçin Kullanılabilir',
      },
      {
        id: '20-sku-gtin-ve-urun-tanimlayicilari-dogru-tutulmali',
        label: '20. SKU, GTIN ve Ürün Tanımlayıcıları Doğru Tutulmalı',
      },
    ],
  },
  {
    label: 'Operasyon ve teknik',
    collapsed: true,
    items: [
      {
        id: '21-kargo-ve-iade-bilgileri-satin-alma-kararinin-bir-parcasidir',
        label: '21. Kargo ve İade Bilgileri Satın Alma Kararının Bir Parçasıdır',
      },
      {
        id: '22-stok-disi-urunlerde-otomatik-url-silme-yaklasimi-kullanilmamali',
        label: '22. Stok Dışı Ürünlerde Otomatik URL Silme Yaklaşımı Kullanılmamalı',
      },
      {
        id: '23-title-ve-meta-description-yapisi-olceklenebilir-olmali',
        label: '23. Title ve Meta Description Yapısı Ölçeklenebilir Olmalı',
      },
      {
        id: '24-urun-sayfasi-performansi-teknik-seonun-bir-parcasidir',
        label: '24. Ürün Sayfası Performansı Teknik SEO’nun Bir Parçasıdır',
      },
    ],
  },
  {
    label: 'Özet',
    collapsed: true,
    items: [
      { id: 'seo-uyumlu-urun-sayfasi-ornegi', label: 'SEO Uyumlu Ürün Sayfası Örneği' },
      { id: 'sik-yapilan-hatalar', label: 'SEO Uyumlu Ürün Sayfalarında Sık Yapılan Hatalar' },
      {
        id: 'urun-seosunu-butunsel-bir-sistem-olarak-dusunmek-gerekiyor',
        label: 'Ürün SEO’sunu Bütünsel Bir Sistem Olarak Düşünmek Gerekiyor',
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
    image: [OG_IMAGE.url, `${BASE_URL}${INFOGRAPHIC.src}`],
    author: ref(PERSON_ID),
    publisher: ref(PERSON_ID),
    isPartOf: ref(WEBSITE_ID),
    about: ['E-ticaret SEO', 'Ürün Sayfası', 'Ürün Varyantları', 'Structured Data', 'Internal Linking'].map(
      (name) => ({ '@type': 'Thing', name }),
    ),
  },
  breadcrumbNode('tr', { name: 'Blog', url: `${BASE_URL}/blog` }, { name: HEADLINE, url: PAGE_URL }),
);

const PRODUCT_SCHEMA_EXAMPLE = `{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Kadın Siyah Midi Elbise",
  "image": "https://example.com/siyah-midi-elbise.jpg",
  "sku": "ELB-001",
  "brand": {
    "@type": "Brand",
    "name": "Örnek Marka"
  },
  "offers": {
    "@type": "Offer",
    "price": "1499.90",
    "priceCurrency": "TRY",
    "availability": "https://schema.org/InStock"
  }
}`;

const attributes: [string, string][] = [
  ['Renk', 'Siyah'],
  ['Materyal', '%95 Pamuk, %5 Elastan'],
  ['Kalıp', 'Regular Fit'],
  ['Boy', 'Midi'],
  ['Kol Tipi', 'Askılı'],
  ['Desen', 'Düz'],
  ['Mevsim', 'Yaz'],
  ['Menşei', 'Türkiye'],
];

const example: [string, string][] = [
  ['Breadcrumb', 'Ana Sayfa > Giyim > Üst Giyim > Elbise > Siyah Elbise > Kadın Siyah Midi Elbise'],
  ['Ürün Görselleri', 'Ana görsel, farklı açılar, detay çekimleri ve mümkünse video.'],
  ['Ürün Adı', 'Kadın Siyah Askılı Midi Elbise'],
  ['Fiyat ve Stok', '1.499,90 TL – Stokta'],
  ['Varyantlar', 'Renk ve beden seçenekleri.'],
  ['Satın Alma Alanı', 'Sepete ekle, teslimat ve kargo bilgileri.'],
  ['Ürün Özellikleri', 'Renk, materyal, kalıp, desen, boy ve mevsim.'],
  ['Ürün Açıklaması', 'Kullanıcının karar sürecini destekleyen özgün içerik.'],
  ['FAQ', 'Ürüne özgü gerçek kullanıcı soruları.'],
  ['Kullanıcı Yorumları', 'Gerçek satın alma ve kullanım deneyimleri.'],
  ['Benzer Ürünler', 'Kullanıcının değerlendirebileceği alternatif ürünler.'],
  ['İlgili Kategoriler', 'Siyah Elbise, Midi Elbise, Günlük Elbise ve Kadın Elbise.'],
  ['Structured Data', 'Product, ProductGroup, Offer, Review, Shipping ve Return Policy gibi uygun yapılar.'],
];

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
 * Short names: queries, category names, schema properties. The draft linked
 * the category examples to store URLs that do not exist on this site, so
 * they render as chips instead of links.
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

export default function ProductPageGuidePage() {
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
              <li aria-current="page">Ürün Sayfası Rehberi</li>
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
                E-ticaret sitelerinde ürün sayfaları, organik trafiğin doğrudan satın alma niyetiyle
                buluştuğu en önemli sayfa tiplerinden biridir.
              </p>
              <p>
                <Link href="/seo-uyumlu-kategori-sayfasi-nasil-olur">Kategori sayfaları</Link> daha
                geniş sorguları hedeflerken ürün sayfaları genellikle daha spesifik ve satın alma
                kararına yakın aramalarda devreye girer.
              </p>
              <p>Örneğin;</p>
              <ul className="query-list">
                <li>“elbise”</li>
                <li>“kadın elbise”</li>
                <li>“siyah elbise”</li>
              </ul>
              <p>gibi sorgular çoğunlukla kategori seviyesinde karşılanabilir.</p>
              <p>Buna karşılık;</p>
              <ul className="query-list">
                <li>“kadın siyah askılı midi elbise”</li>
                <li>“siyah keten oversize gömlek”</li>
                <li>“kırmızı uzun kollu abiye elbise”</li>
                <li>“beyaz pamuklu regular fit gömlek”</li>
              </ul>
              <p>gibi daha detaylı sorgular ürün sayfalarının güçlü olduğu alanlardır.</p>
              <p>
                Bu nedenle SEO uyumlu bir ürün sayfasını yalnızca ürün adı, birkaç görsel, fiyat ve
                sepete ekle butonundan oluşan bir yapı olarak değerlendirmek eksik kalır.
              </p>
              <p>Başarılı bir ürün sayfasının aynı anda birkaç görevi yerine getirmesi gerekir:</p>
              <Fragments
                items={[
                  'ürünü kullanıcıya doğru anlatmak,',
                  'satın alma kararını kolaylaştırmak,',
                  'arama motorlarının ürünü ve varyantlarını anlayabilmesini sağlamak,',
                  'long-tail sorgulardan görünürlük kazanmak,',
                  'kategori ve ürünler arasındaki site mimarisini güçlendirmek,',
                  'structured data aracılığıyla ürün verisini arama motorlarına doğru şekilde aktarmak.',
                ]}
              />
              <p>
                Bu yazıda SEO uyumlu bir ürün sayfasının nasıl yapılandırılması gerektiğini adım adım
                ele alacağım.
              </p>
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

            <section id="seo-uyumlu-urun-sayfasi-yapisi-nasil-olmali">
              <h2>SEO Uyumlu Ürün Sayfası Yapısı Nasıl Olmalı?</h2>
              <p>
                Ürün sayfasını tek tek SEO elementlerinden oluşan bir kontrol listesi yerine bütünsel
                bir yapı olarak değerlendirmek gerekir.
              </p>
              <p>İdeal akış genel olarak şu şekilde kurgulanabilir:</p>
              <ul className="article-path">
                <li>Breadcrumb → Ürün Görselleri → Ürün Adı → Fiyat / Stok / Varyantlar</li>
                <li>→ Satın Alma Alanı → Ürün Özellikleri → Ürün Açıklaması → FAQ</li>
                <li>→ Kullanıcı Yorumları → Benzer Ürünler → İlgili Kategoriler</li>
              </ul>
              <p>Bunların arka planında ise:</p>
              <ul className="article-path">
                <li>Canonical → Varyant Yönetimi → Structured Data</li>
                <li>→ Merchant Feed → Internal Linking → Performans</li>
              </ul>
              <p>gibi teknik katmanlar bulunur.</p>
              <figure className="article-figure article-figure-portrait">
                <a href={INFOGRAPHIC.src} target="_blank" rel="noopener">
                  <Image
                    src={INFOGRAPHIC.src}
                    alt={INFOGRAPHIC.alt}
                    width={INFOGRAPHIC.width}
                    height={INFOGRAPHIC.height}
                    sizes="(max-width: 640px) 100vw, 600px"
                  />
                  <span className="sr-only"> (görseli tam boyutta yeni sekmede açar)</span>
                </a>
                <figcaption>SEO uyumlu bir e-ticaret ürün sayfasında bulunabilecek temel alanlar.</figcaption>
              </figure>
            </section>

            <section id="1-breadcrumb-urunun-gercek-kategori-hiyerarsisini-yansitmali">
              <h2>1. Breadcrumb Ürünün Gerçek Kategori Hiyerarşisini Yansıtmalı</h2>
              <p>
                Ürün sayfalarında breadcrumb yalnızca kullanıcının geri dönmesini sağlayan bir
                navigasyon elementi değildir. Aynı zamanda ürünün site içerisindeki konumunu açık
                şekilde gösterir.
              </p>
              <p>Örneğin doğru bir yapı şöyle olabilir:</p>
              <p className="article-example">
                Ana Sayfa &gt; Giyim &gt; Üst Giyim &gt; Elbise &gt; Siyah Elbise &gt; Kadın Siyah Midi Elbise
              </p>
              <p>
                Burada önemli olan breadcrumb’i mümkün olduğunca uzun yapmak değildir. Amaç ürünün
                gerçekten ait olduğu kategori yapısını mümkün olduğunca doğru şekilde yansıtmaktır.
              </p>
              <p>
                Örneğin ürün <strong>Kadın Siyah Midi Elbise</strong> ise kullanıcı ürün sayfasından{' '}
                <strong>Siyah Elbise</strong> kategorisine, oradan <strong>Elbise</strong> kategorisine
                ve daha üst kategori seviyelerine ulaşabilmelidir.
              </p>
              <p>
                Bu yapı hem kullanıcı deneyimini geliştirir hem de ürün ile kategori sayfaları
                arasındaki ilişkiyi güçlendirir.
              </p>
              <p>
                Ancak sitede gerçekte bulunmayan kategori seviyelerini yalnızca anahtar kelime eklemek
                amacıyla breadcrumb’e dahil etmek doğru değildir.
              </p>
            </section>

            <section id="2-urun-gorselleri-satin-alma-deneyiminin-temel-parcasidir">
              <h2>2. Ürün Görselleri Satın Alma Deneyiminin Temel Parçasıdır</h2>
              <p>
                Kullanıcı fiziksel mağazada ürüne dokunabilir, ürünü farklı açılardan inceleyebilir ve
                detaylarını görebilir. E-ticarette bu deneyimin büyük bölümünü ürün görselleri
                üstlenir.
              </p>
              <p>
                Bu nedenle ürün sayfasında yalnızca tek bir ana ürün görseli kullanmak çoğu ürün grubu
                için yeterli değildir.
              </p>
              <p>Ürüne göre;</p>
              <Fragments
                items={[
                  'ön görünüm,',
                  'arka görünüm,',
                  'yan görünüm,',
                  'detay çekimi,',
                  'kumaş veya materyal yakın planı,',
                  'kullanım senaryosu,',
                  'model üzerindeki görünüm,',
                  'ölçüleri anlatan görseller,',
                  'ürün videosu',
                ]}
              />
              <p>gibi farklı içerikler kullanılabilir.</p>
              <p>
                Örneğin bir elbise ürününde yalnızca önden çekilmiş bir görsel yerine ürünün arka
                tasarımı, kumaş dokusu, etek boyu ve model üzerindeki duruşu da gösterilebilir.
              </p>
              <p>Bu yaklaşım yalnızca SEO açısından değil, doğrudan dönüşüm açısından da önemlidir.</p>
            </section>

            <section id="3-gorsel-alt-textleri-urun-isminin-kopyasi-olmamali">
              <h2>3. Görsel Alt Text’leri Ürün İsminin Kopyası Olmamalı</h2>
              <p>
                Ürün görsellerinde sık karşılaşılan hatalardan biri bütün görsellere aynı alt text’in
                verilmesidir.
              </p>
              <p>Örneğin ürün adı:</p>
              <p className="article-example">Kadın Siyah Midi Elbise</p>
              <p>ise ürün sayfasındaki sekiz görselin tamamına:</p>
              <p className="article-example">
                <code>Kadın Siyah Midi Elbise</code>
              </p>
              <p>alt text’ini vermek doğru bir optimizasyon değildir.</p>
              <p>Alt text görselin içeriğini mümkün olduğunca açıklamalıdır.</p>
              <p>Örneğin:</p>
              <div className="table-wrapper checklist-table">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Görsel</th>
                      <th scope="col">Alt text</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ana ürün görseli</td>
                      <td>Siyah midi elbisenin önden görünümü</td>
                    </tr>
                    <tr>
                      <td>Arka görünüm</td>
                      <td>Siyah midi elbisenin arka fermuar ve sırt detayı</td>
                    </tr>
                    <tr>
                      <td>Yakın çekim</td>
                      <td>Siyah midi elbisenin kumaş dokusunun yakın görünümü</td>
                    </tr>
                    <tr>
                      <td>Model görseli</td>
                      <td>Siyah midi elbisenin model üzerindeki yan görünümü</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Burada amaç anahtar kelime kullanmak değil, görselin ne gösterdiğini açıklamaktır.</p>
            </section>

            <section id="4-urun-ismi-sayfanin-h1-basligi-olmali">
              <h2>4. Ürün İsmi Sayfanın H1 Başlığı Olmalı</h2>
              <p>Ürün sayfasının ana başlığı ürün ismini açık şekilde ifade etmelidir.</p>
              <p>Örneğin:</p>
              <p className="article-example">Kadın Siyah Askılı Midi Elbise</p>
              <p>kullanımı doğal ve anlaşılır bir yapıdır.</p>
              <p>
                Ancak burada asıl önemli konu H1 etiketinin kendisinden çok ürün isimlendirme
                sistemidir.
              </p>
              <p>Ürün adı;</p>
              <Fragments
                items={[
                  'ürünü doğru tanımlamalı,',
                  'diğer ürünlerden ayırt edilebilmeli,',
                  'kullanıcı tarafından kolay anlaşılmalı,',
                  'önemli ürün özelliklerini gerektiğinde içerebilmeli,',
                  'anlamsız kodlardan veya gereksiz kelime tekrarlarından oluşmamalıdır.',
                ]}
              />
              <p>
                Ürün isimlendirmesi oldukça geniş bir konu olduğu için SEO uyumlu ürün isimlerinin
                nasıl oluşturulacağını ayrı bir yazıda detaylı olarak ele alacağım.
              </p>
            </section>

            <section id="5-fiyat-stok-ve-varyant-bilgileri-kolayca-gorulebilmeli">
              <h2>5. Fiyat, Stok ve Varyant Bilgileri Kolayca Görülebilmeli</h2>
              <p>
                Ürün sayfası yalnızca organik trafik elde etmek için oluşturulan bir landing page
                değildir. Asıl amaç kullanıcının ürünü değerlendirmesini ve satın alma kararını
                tamamlamasını sağlamaktır.
              </p>
              <p>
                Bu nedenle ürünün en kritik ticari bilgileri sayfanın üst bölümünde kolayca
                görülebilmelidir.
              </p>
              <Fragments
                items={[
                  'mevcut fiyat,',
                  'varsa eski fiyat,',
                  'indirim oranı,',
                  'stok durumu,',
                  'renk seçenekleri,',
                  'beden seçenekleri,',
                  'teslimat bilgisi,',
                  'kargo bilgisi,',
                  'sepete ekle butonu.',
                ]}
              />
              <p>
                Kullanıcının fiyatı, stok durumunu veya uygun beden seçeneklerini öğrenebilmek için
                sayfa içerisinde arama yapmak zorunda kalması iyi bir ürün deneyimi değildir.
              </p>
            </section>

            <section id="6-urun-ozellikleri-aciklamadan-ayri-tutulmali">
              <h2>6. Ürün Özellikleri Açıklamadan Ayrı Tutulmalı</h2>
              <p>Ürün açıklaması ile ürün özellikleri birbirinden farklı iki içerik alanıdır.</p>
              <p>Örneğin bir elbisenin özellikleri şu şekilde yapılandırılmış olarak sunulabilir:</p>
              <div className="table-wrapper checklist-table">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Özellik</th>
                      <th scope="col">Değer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attributes.map(([name, value]) => (
                      <tr key={name}>
                        <td>{name}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>Bu yapı kullanıcının ürünü kısa sürede değerlendirmesini kolaylaştırır.</p>
              <p>
                Aynı zamanda renk, materyal, kalıp, desen veya ölçü gibi veriler serbest metin
                içerisinde saklanmak yerine ayrı ürün özellikleri olarak tutulduğunda filtreleme,
                structured data, ürün feed’leri ve varyant yönetimi gibi birçok alanda yeniden
                kullanılabilir.
              </p>
            </section>

            <section id="7-urun-aciklamasi-kullaniciya-gercekten-bilgi-vermeli">
              <h2>7. Ürün Açıklaması Kullanıcıya Gerçekten Bilgi Vermeli</h2>
              <p>Ürün açıklamaları e-ticaret SEO’sunda en fazla yanlış kullanılan alanlardan biridir.</p>
              <p>
                Özellikle üreticiden veya tedarikçiden alınan açıklamaların onlarca farklı site
                tarafından aynen kullanılması oldukça yaygındır.
              </p>
              <p>Aynı problem site içerisinde de görülebilir.</p>
              <p>
                Örneğin aynı ürünün siyah, beyaz, lacivert ve kırmızı varyantlarının ayrı sayfalarda
                bulunmasına rağmen her sayfada aynı ürün açıklaması kullanılıyorsa sayfalar arasındaki
                içerik farklılığı oldukça düşük olacaktır.
              </p>
              <p className="article-key">
                <strong>
                  Ürün açıklamasının temel amacı kelime sayısını artırmak değil, ürün hakkında satın
                  alma kararını destekleyen bilgi vermektir.
                </strong>
              </p>
              <p>Ürüne göre;</p>
              <Fragments
                items={[
                  'kullanım alanı,',
                  'materyal,',
                  'tasarım özellikleri,',
                  'ölçü,',
                  'kalıp,',
                  'bakım talimatları,',
                  'kombin önerileri,',
                  'önemli kullanım detayları',
                ]}
              />
              <p>anlatılabilir.</p>
              <p>SEO uyumlu ürün açıklamasının nasıl yazılacağını ayrı bir yazıda detaylandıracağım.</p>
            </section>

            <section id="8-varyantli-urunlerde-duplicate-content-problemi-dogru-yonetilmeli">
              <h2>8. Varyantlı Ürünlerde Duplicate Content Problemi Doğru Yönetilmeli</h2>
              <p>
                Moda başta olmak üzere birçok e-ticaret sektöründe aynı ürünün farklı renk, beden,
                materyal veya desen varyantları bulunur.
              </p>
              <p>
                Bu yapı yanlış yönetildiğinde aynı veya çok benzer içeriğe sahip yüzlerce ürün URL’si
                oluşabilir.
              </p>
              <p>Örneğin aynı elbisenin:</p>
              <Chips items={['Siyah Midi Elbise', 'Beyaz Midi Elbise', 'Bej Midi Elbise', 'Lacivert Midi Elbise']} />
              <p>
                sayfalarında yalnızca renk ismini değiştirip aynı açıklamayı kullanmak güçlü bir
                varyant stratejisi değildir.
              </p>
              <p>Ancak bunun çözümü bütün varyantları tek URL altında toplamak da değildir.</p>
              <p>Varyant mimarisi ürün tipine, kullanıcı davranışına ve arama talebine göre değerlendirilmelidir.</p>
            </section>

            <section id="9-renk-varyantlari-long-tail-aramalar-icin-kullanilabilir">
              <h2>9. Renk Varyantları Long-Tail Aramalar İçin Kullanılabilir</h2>
              <p>Renk varyantlarında ayrı URL oluşturulması bazı ürün gruplarında ciddi SEO fırsatı yaratabilir.</p>
              <p>Örneğin kullanıcılar:</p>
              <p className="article-example">“siyah oversize gömlek”</p>
              <p>ve</p>
              <p className="article-example">“beyaz oversize gömlek”</p>
              <p>
                sorgularını ayrı ayrı arıyorsa bu varyantların ayrı URL’lerle hedeflenmesi
                değerlendirilebilir.
              </p>
              <pre className="article-tree">{`/siyah-oversize-kadin-gomlek/
/beyaz-oversize-kadin-gomlek/`}</pre>
              <p>Bu sayede her varyant kendi long-tail sorgu kümesini hedefleyebilir.</p>
              <p>Ancak yalnızca URL’deki renk kelimesini değiştirmek yeterli değildir.</p>
              <p>Ayrı ürün sayfası oluşturulan bir renk varyantının:</p>
              <Fragments
                items={[
                  'kendi ürün görselleri,',
                  'doğru renk bilgisi,',
                  'kendi stok durumu,',
                  'doğru fiyat bilgisi,',
                  'uygun structured data,',
                  'doğru canonical etiketi',
                ]}
              />
              <p>bulunmalıdır.</p>
              <p>Temel yaklaşım şu olmalıdır:</p>
              <p className="article-key">
                <strong>
                  Her varyant için ayrı URL açılmaz; arama talebi ve kullanıcı değeri bulunan
                  varyantlar ayrı landing page olarak değerlendirilebilir.
                </strong>
              </p>
            </section>

            <section id="10-canonical-yapisi-varyant-stratejisiyle-birlikte-tasarlanmali">
              <h2>10. Canonical Yapısı Varyant Stratejisiyle Birlikte Tasarlanmalı</h2>
              <p>
                Varyant URL’leri oluşturulduktan sonra yapılacak en kritik teknik kararlardan biri
                canonical yönetimidir.
              </p>
              <p>
                Burada sık karşılaşılan hata, bütün renk varyantlarının canonical etiketinin otomatik
                olarak ana ürüne yönlendirilmesidir.
              </p>
              <p>Örneğin:</p>
              <pre className="article-tree">{`/siyah-midi-elbise/
/beyaz-midi-elbise/`}</pre>
              <p>
                ayrı arama niyetlerini hedefleyen, farklı görsellere ve varyant bilgilerine sahip
                indexlenebilir landing page’ler olarak tasarlanmışsa bu sayfaların canonical
                stratejisi de buna göre oluşturulmalıdır.
              </p>
              <p>
                Bu nedenle varyant URL yapısı, canonical, structured data ve Merchant Feed birbirinden
                bağımsız kararlar olarak değerlendirilmemelidir.
              </p>
            </section>

            <section id="11-urun-sayfalari-long-tail-keyword-stratejisinin-onemli-bir-parcasidir">
              <h2>11. Ürün Sayfaları Long-Tail Keyword Stratejisinin Önemli Bir Parçasıdır</h2>
              <p>
                Kategori sayfaları genellikle yüksek hacimli ve geniş sorguları hedefler. Ürün
                sayfaları ise daha spesifik aramalarda öne çıkar.
              </p>
              <p>Örneğin:</p>
              <p className="article-example">“elbise”</p>
              <p>oldukça genel bir sorguyken:</p>
              <p className="article-example">“kadın siyah askılı midi yazlık elbise”</p>
              <p>çok daha spesifik bir sorgudur.</p>
              <p>
                Ürün sayfasındaki ürün adı, ürün özellikleri, renk bilgisi, materyal bilgisi,
                açıklama, FAQ ve kullanıcı yorumları birlikte düşünüldüğünde ürün doğal olarak çok
                sayıda long-tail sorguyla ilişkili hale gelebilir.
              </p>
            </section>

            <section id="12-her-urune-ozgu-faq-alani-olusturulabilir">
              <h2>12. Her Ürüne Özgü FAQ Alanı Oluşturulabilir</h2>
              <p>
                FAQ ürün sayfalarında hem kullanıcı deneyimi hem de içerik kapsamı açısından faydalı
                olabilir.
              </p>
              <p>
                Ancak burada tekrar eden standart sorular yerine gerçekten o ürüne özgü sorular
                kullanılmalıdır.
              </p>
              <p>Örneğin bir elbise ürününde:</p>
              <Fragments
                items={[
                  'Ürün iç gösteriyor mu?',
                  'Elbisenin kalıbı dar mı?',
                  'Ürün astarlı mı?',
                  'Elbisenin boyu kaç cm?',
                  'Hangi mevsimde kullanılabilir?',
                  'Makinede yıkanabilir mi?',
                  'Model üzerindeki beden nedir?',
                ]}
              />
              <p>gibi sorular anlamlı olabilir.</p>
              <p>
                FAQ yapısı ürünün gerçek özellikleri, müşteri hizmetlerine gelen sorular, site içi
                aramalar ve kullanıcı yorumlarından beslenmelidir.
              </p>
            </section>

            <section id="13-kullanici-yorumlari-urun-icerigini-zenginlestirir">
              <h2>13. Kullanıcı Yorumları Ürün İçeriğini Zenginleştirir</h2>
              <p>Ürün yorumları yalnızca sosyal kanıt olarak değerlendirilmemelidir.</p>
              <p>
                Gerçek kullanıcıların deneyimleri ürün hakkında marka tarafından yazılmayan birçok
                bilgiyi ortaya çıkarabilir.
              </p>
              <blockquote className="article-callout">
                <p>183 cm boyundayım, elbise dizimin biraz altında kaldı.</p>
              </blockquote>
              <blockquote className="article-callout">
                <p>Kumaşı oldukça ince olduğu için yaz aylarında rahat kullanılabilir.</p>
              </blockquote>
              <p>gibi yorumlar başka kullanıcıların satın alma kararını doğrudan etkileyebilir.</p>
              <p>
                Yorumlarda doğal olarak beden, kalıp, renk, materyal, kalite ve kullanım deneyimi gibi
                ürünle ilişkili birçok konu konuşulur.
              </p>
            </section>

            <section id="14-benzer-urunler-alani-product-to-product-linking-saglar">
              <h2>14. Benzer Ürünler Alanı Product-to-Product Linking Sağlar</h2>
              <p>Kullanıcı her zaman görüntülediği ürünü satın almak zorunda değildir.</p>
              <p>
                Bu nedenle ürün sayfasının sonunda veya uygun bir bölümünde benzer ürünlerin
                gösterilmesi ürün keşfini devam ettirebilir.
              </p>
              <p>Örneğin siyah midi elbise görüntüleyen kullanıcıya:</p>
              <Fragments
                items={[
                  'benzer siyah elbiseler,',
                  'farklı midi elbiseler,',
                  'benzer kesimde ürünler,',
                  'farklı fiyat aralıklarındaki alternatifler',
                ]}
              />
              <p>sunulabilir.</p>
              <p>Bu alan aynı zamanda ürün sayfaları arasında internal linking oluşturur.</p>
            </section>

            <section id="15-urun-sayfalarindan-ilgili-kategorilere-geri-link-verilmeli">
              <h2>15. Ürün Sayfalarından İlgili Kategorilere Geri Link Verilmeli</h2>
              <p>E-ticaret sitelerinde internal linking çoğu zaman tek yönlü düşünülür.</p>
              <p>
                Kategori sayfası ürünlere link verir ancak ürün sayfasından kategori sayfalarına
                yeterince bağlantı verilmez.
              </p>
              <p>
                Örneğin <strong>Kadın Siyah Midi Elbise</strong> ürününün altında:
              </p>
              <h3>İlgili Kategoriler</h3>
              <Chips items={['Kadın Elbise', 'Siyah Elbise', 'Midi Elbise', 'Günlük Elbise']} />
              <p>gibi kategorilere bağlantı verilebilir.</p>
              <p>
                Bu yapı sayesinde kullanıcı mevcut ürünü beğenmediğinde benzer ürün gruplarına
                geçebilir.
              </p>
              <p>SEO tarafında ise ürün sayfalarından kategori hub’larına internal link akışı sağlanmış olur.</p>
            </section>

            <section id="16-structured-data-urun-verisini-arama-motorlarina-anlatir">
              <h2>16. Structured Data Ürün Verisini Arama Motorlarına Anlatır</h2>
              <p>Ürün sayfasının teknik SEO tarafındaki en önemli yapılardan biri structured data’dır.</p>
              <p>En basit ürün schema yapısında genellikle:</p>
              <Fragments
                items={['ürün adı,', 'görsel,', 'marka,', 'SKU,', 'fiyat,', 'para birimi,', 'stok durumu']}
              />
              <p>gibi bilgiler yer alır.</p>
              <p>Örneğin temel bir Product schema şu şekilde olabilir:</p>
              <pre className="article-tree">{PRODUCT_SCHEMA_EXAMPLE}</pre>
              <p>Bu yapının temel amacı Google’a şu bilgiyi açık şekilde vermektir:</p>
              <p className="article-key">
                <strong>
                  Bu sayfadaki varlık bir üründür. Ürünün adı, markası, fiyatı ve stok durumu budur.
                </strong>
              </p>
            </section>

            <section id="17-gelismis-product-schema-cok-daha-fazla-urun-bilgisi-tasiyabilir">
              <h2>17. Gelişmiş Product Schema Çok Daha Fazla Ürün Bilgisi Taşıyabilir</h2>
              <p>İleri seviyede ürün structured data mimarisinde şu alanlar kullanılabilir:</p>
              <Chips
                items={[
                  'ProductGroup',
                  'hasVariant',
                  'variesBy',
                  'productGroupID',
                  'sku',
                  'gtin',
                  'material',
                  'color',
                  'pattern',
                  'size',
                  'additionalProperty',
                  'AggregateRating',
                  'Review',
                  'Offer',
                  'availability',
                  'seller',
                  'shippingDetails',
                  'MerchantReturnPolicy',
                ]}
              />
              <p>Burada amaç schema içerisine mümkün olduğunca fazla alan eklemek değildir.</p>
              <p className="article-key">
                <strong>
                  Doğru yaklaşım, sayfada gerçekten bulunan ürün verisini doğru structured data
                  ilişkileriyle ifade etmektir.
                </strong>
              </p>
            </section>

            <section id="18-gercek-bir-e-ticaret-schema-optimizasyonu-ornegi">
              <h2>18. Gerçek Bir E-Ticaret Schema Optimizasyonu Örneği</h2>
              <p>
                Daha önce çalıştığım markalardan birinde ürün structured data mimarisini yalnızca
                temel <code>Product + Offer</code> seviyesinde bırakmamıştık.
              </p>
              <p>
                Ürün ailesini <code>ProductGroup</code> olarak tanımlayıp varyantların hangi özellik
                üzerinden değiştiğini <code>variesBy</code> ile ifade eden bir yapı kullanmıştık.
              </p>
              <p>
                Aynı yapı içerisinde ürünün marka, kategori, açıklama, materyal, desen, renk ve
                görselleri gibi temel ürün verileri de bulunuyordu.
              </p>
              <p>
                Varyantlar ise <code>hasVariant</code> altında ayrı <code>Product</code> varlıkları
                olarak tanımlanmıştı.
              </p>
              <p>Her varyant için:</p>
              <Fragments
                items={['SKU,', 'GTIN,', 'renk,', 'materyal,', 'desen,', 'ürün grubuyla olan ilişki']}
              />
              <p>gibi bilgiler ayrı ayrı tutuluyordu.</p>
              <p>
                Offer katmanında ise fiyat ve stok bilgisinin yanında para birimi, satıcı, kargo
                ücreti ve teslimat bilgileri de bulunuyordu.
              </p>
              <p>
                İade politikası tarafında iade süresi, iade yöntemi ve ücret gibi bilgiler de
                yapılandırılmış veriyle ifade edilmişti.
              </p>
              <p>
                Bu çalışmanın ardından Google Shopping tarafındaki organik tıklamalarda yaklaşık{' '}
                <strong>%30 artış gözlemlemiştik.</strong>
              </p>
              <p>
                Burada sonucu yalnızca schema değişikliğine bağlamak doğru olmaz. SEO performansı aynı
                dönemde birçok farklı faktörden etkilenebilir.
              </p>
              <p>
                Ancak structured data geliştirmesinin ardından Google Shopping görünürlüğünde ve
                organik tıklamalarda anlamlı bir iyileşme gözlemlediğimizi söyleyebiliriz.
              </p>
            </section>

            <section id="19-productgroup-varyant-iliskisini-tanimlamak-icin-kullanilabilir">
              <h2>19. ProductGroup Varyant İlişkisini Tanımlamak İçin Kullanılabilir</h2>
              <p>
                Aynı ürünün birden fazla varyantı olduğunda bu ürünlerin birbirleriyle olan ilişkisini
                ifade etmek gerekir.
              </p>
              <p>Örneğin ana ürün:</p>
              <p className="article-example">Kadın Midi Elbise</p>
              <p>olsun.</p>
              <p>Renk varyantları:</p>
              <Chips
                items={[
                  'Kadın Siyah Midi Elbise',
                  'Kadın Beyaz Midi Elbise',
                  'Kadın Kırmızı Midi Elbise',
                  'Kadın Lacivert Midi Elbise',
                ]}
              />
              <p>şeklinde olabilir.</p>
              <p>
                Bu durumda <code>ProductGroup</code> ürün ailesini temsil ederken renk seçenekleri ayrı{' '}
                <code>Product</code> varyantları olarak tanımlanabilir.
              </p>
              <p>
                Bu yapının nasıl kurulacağı ve tek URL ile çoklu URL varyant stratejileri ayrı bir ileri
                seviye schema içeriğinde detaylandırılabilir.
              </p>
            </section>

            <section id="20-sku-gtin-ve-urun-tanimlayicilari-dogru-tutulmali">
              <h2>20. SKU, GTIN ve Ürün Tanımlayıcıları Doğru Tutulmalı</h2>
              <p>
                Ürün tanımlayıcılarının doğru tutulması yalnızca şirket içi stok yönetimi açısından
                önemli değildir.
              </p>
              <p>Ürüne bağlı olarak:</p>
              <Chips items={['SKU', 'GTIN', 'EAN', 'MPN']} />
              <p>gibi tanımlayıcılar kullanılabilir.</p>
              <p>
                Bu veriler structured data, Merchant Center, ürün feed’leri, marketplace
                entegrasyonları, stok sistemleri ve ürün eşleştirme gibi birçok süreçte
                kullanılabilir.
              </p>
            </section>

            <section id="21-kargo-ve-iade-bilgileri-satin-alma-kararinin-bir-parcasidir">
              <h2>21. Kargo ve İade Bilgileri Satın Alma Kararının Bir Parçasıdır</h2>
              <p>Ürün fiyatı kullanıcının satın alma kararındaki tek değişken değildir.</p>
              <p>Kullanıcı aynı zamanda:</p>
              <Fragments
                items={[
                  'ürün ne zaman gelir,',
                  'kargo ücreti var mı,',
                  'aynı gün teslimat mümkün mü,',
                  'iade süresi kaç gün,',
                  'mağazadan iade yapılabilir mi',
                ]}
              />
              <p>gibi soruların cevaplarını da bilmek ister.</p>
              <p>Bu nedenle teslimat ve iade koşulları kolay erişilebilir olmalıdır.</p>
            </section>

            <section id="22-stok-disi-urunlerde-otomatik-url-silme-yaklasimi-kullanilmamali">
              <h2>22. Stok Dışı Ürünlerde Otomatik URL Silme Yaklaşımı Kullanılmamalı</h2>
              <p>Bir ürün stoktan çıktığında sayfanın hemen kaldırılması doğru olmayabilir.</p>
              <h3>Ürün geçici olarak stok dışıysa</h3>
              <p>URL açık tutulabilir ve stok bilgisi güncellenebilir.</p>
              <h3>Ürün kalıcı olarak satıştan kalktıysa</h3>
              <p>Duruma göre:</p>
              <Fragments
                items={[
                  '404,',
                  '410,',
                  'gerçek bir alternatif ürüne yönlendirme,',
                  'ilgili kategori sayfasına yönlendirme',
                ]}
              />
              <p>gibi seçenekler değerlendirilebilir.</p>
              <p className="article-key">
                <strong>
                  Bütün stok dışı ürünlerin otomatik olarak kategori sayfasına 301 yönlendirilmesi
                  doğru bir yaklaşım değildir.
                </strong>
              </p>
            </section>

            <section id="23-title-ve-meta-description-yapisi-olceklenebilir-olmali">
              <h2>23. Title ve Meta Description Yapısı Ölçeklenebilir Olmalı</h2>
              <p>Büyük e-ticaret sitelerinde on binlerce veya milyonlarca ürün bulunabilir.</p>
              <p>
                Bu nedenle her ürünün title ve meta description alanını manuel olarak hazırlamak her
                zaman mümkün değildir.
              </p>
              <p>Örneğin:</p>
              <h3>Title</h3>
              <p className="article-example">
                <code>Kadın Siyah Midi Elbise | Marka</code>
              </p>
              <h3>Meta Description</h3>
              <p className="article-example">
                <code>
                  Kadın siyah midi elbiseyi farklı beden seçenekleriyle inceleyin. Fiyat, ürün
                  özellikleri, stok ve teslimat bilgilerini görüntüleyin.
                </code>
              </p>
              <p>şeklinde dinamik template yapıları kullanılabilir.</p>
            </section>

            <section id="24-urun-sayfasi-performansi-teknik-seonun-bir-parcasidir">
              <h2>24. Ürün Sayfası Performansı Teknik SEO’nun Bir Parçasıdır</h2>
              <p>
                Ürün detay sayfaları çoğu e-ticaret sitesinde en fazla kaynağın yüklendiği sayfalar
                arasında yer alır.
              </p>
              <p>Çünkü sayfada aynı anda:</p>
              <Fragments
                items={[
                  'yüksek çözünürlüklü görseller,',
                  'video,',
                  'yorum sistemleri,',
                  'recommendation modülleri,',
                  'analytics scriptleri,',
                  'remarketing kodları,',
                  'kişiselleştirme araçları',
                ]}
              />
              <p>çalışabilir.</p>
              <p>Bu nedenle ürün sayfası optimizasyonunda:</p>
              <Chips
                items={['görsel boyutları', 'responsive image kullanımı', 'lazy loading', 'JavaScript yükü', 'LCP', 'CLS', 'INP']}
              />
              <p>gibi performans metrikleri de değerlendirilmelidir.</p>
            </section>

            <section id="seo-uyumlu-urun-sayfasi-ornegi">
              <h2>SEO Uyumlu Ürün Sayfası Örneği</h2>
              <ol className="article-steps">
                {example.map(([label, value]) => (
                  <li key={label}>
                    <strong>{label}:</strong> {value}
                  </li>
                ))}
              </ol>
            </section>

            <section id="sik-yapilan-hatalar">
              <h2>SEO Uyumlu Ürün Sayfalarında Sık Yapılan Hatalar</h2>
              <Fragments
                items={[
                  'anlamsız veya yetersiz ürün isimleri,',
                  'üreticiden doğrudan kopyalanan açıklamalar,',
                  'bütün ürün görsellerinde aynı alt text’in kullanılması,',
                  'varyantların yanlış canonical yapısıyla yönetilmesi,',
                  'bütün renk seçeneklerinin kontrolsüz şekilde indekslenmesi,',
                  'arama talebi bulunan varyantların tek URL altında kaybedilmesi,',
                  'stok dışı ürün URL’lerinin kontrolsüz şekilde kaldırılması,',
                  'ürün sayfalarından kategori sayfalarına bağlantı verilmemesi,',
                  'bütün ürünlerde aynı FAQ sorularının kullanılması,',
                  'kullanıcı yorumlarının yeterince değerlendirilmemesi,',
                  'yalnızca temel Product schema ile yetinilmesi,',
                  'sayfadaki fiyat ve stok verisi ile structured data’nın uyuşmaması,',
                  'Merchant Feed ile ürün sayfasındaki bilgilerin farklı olması,',
                  'yüksek boyutlu görseller nedeniyle performans sorunları yaşanması.',
                ]}
              />
            </section>

            <section id="urun-seosunu-butunsel-bir-sistem-olarak-dusunmek-gerekiyor">
              <h2>Ürün SEO’sunu Bütünsel Bir Sistem Olarak Düşünmek Gerekiyor</h2>
              <p>
                Ürün sayfası SEO’sunu yalnızca anahtar kelime veya içerik optimizasyonuyla açıklamak
                mümkün değildir.
              </p>
              <p>Sağlıklı bir ürün sayfasında beş temel katman birlikte çalışır:</p>
              <p className="article-key">
                <strong>Search Intent + UX + Product Data + Internal Linking + Structured Data</strong>
              </p>
              <h3>Search Intent</h3>
              <p>Kullanıcının hangi ürünü, özelliği veya varyantı aradığını anlamamızı sağlar.</p>
              <h3>UX</h3>
              <p>Kullanıcının ürünü değerlendirmesini ve satın alma kararını kolaylaştırır.</p>
              <h3>Product Data</h3>
              <p>
                Ürünle ilgili renk, materyal, boyut, fiyat, stok ve varyant gibi bilgilerin doğru ve
                yapılandırılmış şekilde tutulmasını sağlar.
              </p>
              <h3>Internal Linking</h3>
              <p>Ürünleri diğer ürünler ve kategori sayfalarıyla ilişkilendirerek site mimarisini güçlendirir.</p>
              <h3>Structured Data</h3>
              <p>Mevcut ürün bilgisinin arama motorlarına yapılandırılmış biçimde aktarılmasını sağlar.</p>
            </section>

            <section className="article-conclusion" id="sonuc">
              <h2>Sonuç: SEO Uyumlu Ürün Sayfası Sadece Ürün Açıklamasından İbaret Değildir</h2>
              <p>
                SEO uyumlu ürün sayfası denildiğinde hâlâ çoğu zaman ürün adına anahtar kelime eklemek,
                uzun açıklama yazmak ve görsellere alt text girmek gibi sınırlı bir yaklaşım
                kullanılıyor.
              </p>
              <p>Oysa başarılı bir ürün sayfası çok daha kapsamlı bir yapıdır.</p>
              <p className="article-key">
                <strong>
                  Ürün sayfası; ürünü kullanıcıya doğru anlatmalı, satın alma kararını
                  kolaylaştırmalı, arama motorlarının ürün ve varyant ilişkilerini anlayabilmesini
                  sağlamalı, long-tail sorguları hedefleyebilmeli ve site içerisindeki kategori
                  mimarisini desteklemelidir.
                </strong>
              </p>
              <p>Bu nedenle ürün SEO’sunda;</p>
              <Chips
                items={[
                  'breadcrumb',
                  'ürün görselleri',
                  'ürün isimleri',
                  'alt text’ler',
                  'ürün özellikleri',
                  'açıklamalar',
                  'varyantlar',
                  'canonical',
                  'long-tail sorgular',
                  'FAQ',
                  'kullanıcı yorumları',
                  'benzer ürünler',
                  'kategori bağlantıları',
                  'structured data',
                  'stok yönetimi',
                  'sayfa performansı',
                ]}
              />
              <p>birlikte değerlendirilmelidir.</p>
              <p>İyi optimize edilmiş bir ürün sayfası yalnızca Google’dan trafik alan bir URL değildir.</p>
              <p className="article-key">
                <strong>
                  Kullanıcının ürünü keşfettiği, değerlendirdiği ve satın alma kararını verdiği; aynı
                  zamanda arama motorlarının ürün, varyant ve kategori ilişkilerini doğru şekilde
                  anlayabildiği güçlü bir e-ticaret landing page’idir.
                </strong>
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
