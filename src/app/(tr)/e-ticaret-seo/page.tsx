import type { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { postByPath } from '@/lib/blog/posts';
import { contact } from '@/lib/contact';
import { alternateMetadata } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';
import { BASE_URL, PERSON_ID, WEBSITE_ID, graph, ref } from '@/lib/schema/base';
import { breadcrumbNode, faqNode, type Faq } from '@/lib/schema/page';

const PAGE_URL = `${BASE_URL}/e-ticaret-seo`;

/** The H1, reused as the BlogPosting headline and the last breadcrumb. */
const HEADLINE = 'E-Ticaret SEO Nedir? Kapsamlı E-Ticaret SEO Rehberi';

/** Root layout appends " | Kerem Gezergün", so the title stays short here. */
const TITLE = 'E-Ticaret SEO Nedir? 2026 Kapsamlı E-Ticaret SEO Rehberi';

const DESCRIPTION =
  'E-ticaret SEO nedir, nasıl yapılır? Kategori, ürün, filtre, teknik SEO, Merchant Center, GEO ve organik gelir optimizasyonunu kapsamlı şekilde öğrenin.';

const PUBLISHED = '2026-09-14';
const PUBLISHED_LABEL = '14 Eylül 2026';

/** 5,321 words in the draft at ~200 wpm. Update by hand if the text changes. */
const WORD_COUNT = 5321;
const READING_TIME = '27 dk okuma';

const OG_IMAGE = {
  url: `${BASE_URL}${postByPath('/e-ticaret-seo').cover}`,
  width: 1200,
  height: 630,
  alt: 'E-Ticaret SEO Nedir? Kapsamlı E-Ticaret SEO Rehberi — Kerem Gezergün',
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternateMetadata('/e-ticaret-seo', '/en/ecommerce-seo'),
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
 * hand); in-page links elsewhere may rely on them. Grouped for the TOC; the
 * 41-entry step list starts collapsed so the page does not open on a wall of links.
 */
const toc = [
  {
    label: 'Temeller',
    collapsed: false,
    items: [
      {
        id: 'e-ticaret-seo-neden-klasik-seodan-farklidir',
        label: 'E-Ticaret SEO Neden Klasik SEO’dan Farklıdır?',
      },
      { id: 'e-ticaret-seonun-temel-amaci-nedir', label: 'E-Ticaret SEO’nun Temel Amacı Nedir?' },
    ],
  },
  {
    label: 'Adım adım',
    collapsed: true,
    items: [
      { id: 'e-ticaret-seo-nasil-yapilir', label: 'E-Ticaret SEO Nasıl Yapılır?' },
      {
        id: '1-anahtar-kelime-arastirmasini-urun-kataloguyla-birlestirin',
        label: '1. Anahtar Kelime Araştırmasını Ürün Kataloğuyla Birleştirin',
      },
      {
        id: '2-sadece-seo-araclarina-degil-site-ici-aramalara-da-bakin',
        label: '2. Sadece SEO Araçlarına Değil, Site İçi Aramalara da Bakın',
      },
      {
        id: '3-e-ticaret-site-mimarisi-nasil-olmalidir',
        label: '3. E-Ticaret Site Mimarisi Nasıl Olmalıdır?',
      },
      { id: '4-url-yapisi-nasil-olmali', label: '4. URL Yapısı Nasıl Olmalı?' },
      {
        id: '5-faceted-navigation-ve-filtre-seosu',
        label: '5. Faceted Navigation ve Filtre SEO’su',
      },
      {
        id: '6-kategori-sayfasi-seosu-nasil-yapilir',
        label: '6. Kategori Sayfası SEO’su Nasıl Yapılır?',
      },
      {
        id: '7-kategori-sayfasindaki-urun-siralamasi-da-seoyu-etkiler',
        label: '7. Kategori Sayfasındaki Ürün Sıralaması da SEO’yu Etkiler',
      },
      { id: '8-urun-sayfasi-seosu-nasil-yapilir', label: '8. Ürün Sayfası SEO’su Nasıl Yapılır?' },
      {
        id: '9-binlerce-urunun-aciklamasi-tek-tek-yazilmali-mi',
        label: '9. Binlerce Ürünün Açıklaması Tek Tek Yazılmalı mı?',
      },
      {
        id: '10-urun-varyantlari-nasil-yonetilmeli',
        label: '10. Ürün Varyantları Nasıl Yönetilmeli?',
      },
      {
        id: '11-stokta-olmayan-urunler-nasil-yonetilmeli',
        label: '11. Stokta Olmayan Ürünler Nasıl Yönetilmeli?',
      },
      {
        id: '12-sezonluk-urun-ve-kampanya-urllerini-her-yil-yeniden-acmayin',
        label: '12. Sezonluk Ürün ve Kampanya URL’lerini Her Yıl Yeniden Açmayın',
      },
      {
        id: '13-canonical-etiketi-nedir-ve-e-ticarette-nasil-kullanilir',
        label: '13. Canonical Etiketi Nedir ve E-Ticarette Nasıl Kullanılır?',
      },
      { id: '14-xml-sitemap-nasil-kullanilmali', label: '14. XML Sitemap Nasıl Kullanılmalı?' },
      {
        id: '15-pagination-ve-infinite-scroll-seosu',
        label: '15. Pagination ve Infinite Scroll SEO’su',
      },
      {
        id: '16-javascript-seo-e-ticarette-neden-onemlidir',
        label: '16. JavaScript SEO E-Ticarette Neden Önemlidir?',
      },
      {
        id: '17-e-ticaret-sitelerinde-core-web-vitals-ve-performans',
        label: '17. E-Ticaret Sitelerinde Core Web Vitals ve Performans',
      },
      {
        id: '18-product-schema-e-ticaret-seo-icin-neden-onemlidir',
        label: '18. Product Schema E-Ticaret SEO İçin Neden Önemlidir?',
      },
      {
        id: '19-merchant-center-seonun-parcasi-mi',
        label: '19. Merchant Center SEO’nun Parçası mı?',
      },
      {
        id: '20-google-images-ve-google-lensi-gormezden-gelmeyin',
        label: '20. Google Images ve Google Lens’i Görmezden Gelmeyin',
      },
      {
        id: '21-urun-yorumlari-seo-icin-degerli-midir',
        label: '21. Ürün Yorumları SEO İçin Değerli midir?',
      },
      {
        id: '22-e-ticaret-icerik-stratejisi-nasil-kurulmali',
        label: '22. E-Ticaret İçerik Stratejisi Nasıl Kurulmalı?',
      },
      {
        id: '23-karsilastirma-icerikleri-neden-onemlidir',
        label: '23. Karşılaştırma İçerikleri Neden Önemlidir?',
      },
      {
        id: '24-e-ticaret-siteleri-otoritesini-nasil-artirabilir',
        label: '24. E-Ticaret Siteleri Otoritesini Nasıl Artırabilir?',
      },
      {
        id: '25-e-e-a-t-e-ticaret-siteleri-icin-ne-anlama-gelir',
        label: '25. E-E-A-T E-Ticaret Siteleri İçin Ne Anlama Gelir?',
      },
      { id: '26-seo-ve-cro-birlikte-calismali-mi', label: '26. SEO ve CRO Birlikte Çalışmalı mı?' },
      {
        id: '27-internal-linking-e-ticaret-sitelerinde-nasil-yapilmali',
        label: '27. Internal Linking E-Ticaret Sitelerinde Nasıl Yapılmalı?',
      },
      {
        id: '28-site-ici-arama-sonuclari-googleda-indekslenmeli-mi',
        label: '28. Site İçi Arama Sonuçları Google’da İndekslenmeli mi?',
      },
      {
        id: '29-e-ticaret-seoda-cannibalization-nasil-olusur',
        label: '29. E-Ticaret SEO’da Cannibalization Nasıl Oluşur?',
      },
      {
        id: '30-e-ticaret-seo-performansi-nasil-olculur',
        label: '30. E-Ticaret SEO Performansı Nasıl Ölçülür?',
      },
      { id: '31-seo-roi-nasil-hesaplanir', label: '31. SEO ROI Nasıl Hesaplanır?' },
      {
        id: '32-search-console-e-ticaret-sitelerinde-nasil-kullanilmali',
        label: '32. Search Console E-Ticaret Sitelerinde Nasıl Kullanılmalı?',
      },
      {
        id: '33-e-ticaret-seo-ve-google-merchant-center-verileri-birlikte-olculmeli',
        label: '33. E-Ticaret SEO ve Google Merchant Center Verileri Birlikte Ölçülmeli',
      },
      {
        id: '34-e-ticaret-seo-ve-geo-ai-search-icin-ne-degisiyor',
        label: '34. E-Ticaret SEO ve GEO: AI Search İçin Ne Değişiyor?',
      },
      {
        id: '35-ai-crawlerlara-ayri-bir-seo-stratejisi-gerekir-mi',
        label: '35. AI Crawler’lara Ayrı Bir SEO Stratejisi Gerekir mi?',
      },
      {
        id: '36-uluslararasi-e-ticaret-seo-nasil-yapilir',
        label: '36. Uluslararası E-Ticaret SEO Nasıl Yapılır?',
      },
      {
        id: '37-pazaryerleri-kendi-e-ticaret-sitenizin-seosunu-etkiler-mi',
        label: '37. Pazaryerleri Kendi E-Ticaret Sitenizin SEO’sunu Etkiler mi?',
      },
      {
        id: '38-e-ticaret-seoda-en-sik-yapilan-hatalar',
        label: '38. E-Ticaret SEO’da En Sık Yapılan Hatalar',
      },
      {
        id: '39-yeni-bir-e-ticaret-sitesinde-seoya-nereden-baslanmali',
        label: '39. Yeni Bir E-Ticaret Sitesinde SEO’ya Nereden Başlanmalı?',
      },
      {
        id: '40-mevcut-buyuk-bir-e-ticaret-sitesinde-seoya-nereden-baslanmali',
        label: '40. Mevcut Büyük Bir E-Ticaret Sitesinde SEO’ya Nereden Başlanmalı?',
      },
    ],
  },
  {
    label: 'Kontrol listesi · SSS · Sonuç',
    collapsed: false,
    items: [
      { id: 'kontrol-listesi', label: 'E-Ticaret SEO Kontrol Listesi' },
      { id: 'sss', label: 'E-Ticaret SEO Hakkında Sıkça Sorulan Sorular' },
      { id: 'sonuc', label: 'Sonuç: E-Ticaret SEO Bir İçerik Çalışması Değil, Büyüme Sistemidir' },
    ],
  },
] as const;

const faqs: Faq[] = [
  {
    q: 'E-Ticaret SEO nedir?',
    a: 'E-ticaret SEO, online mağazaların ürün ve kategori sayfalarının arama motorlarında satın alma niyeti taşıyan sorgularda görünür olmasını sağlamak amacıyla yürütülen teknik SEO, içerik, ürün verisi, site mimarisi ve otorite çalışmalarının bütünüdür.',
  },
  {
    q: 'E-Ticaret SEO nasıl yapılır?',
    a: 'E-ticaret SEO çalışması arama talebinin analiz edilmesi, kategori mimarisinin oluşturulması, teknik crawl ve index sorunlarının çözülmesi, kategori ve ürün sayfalarının optimize edilmesi, structured data ve Merchant Center entegrasyonunun kurulması, içerik ve internal linking sisteminin geliştirilmesiyle yapılır.',
  },
  {
    q: 'E-Ticaret SEO neden önemlidir?',
    a: 'E-ticaret SEO, satın alma niyeti taşıyan kullanıcıların reklam maliyeti olmadan markanın ürün ve kategorilerini keşfetmesini sağlar. Başarılı SEO çalışması yalnızca organik trafiği değil, markasız ticari sorgulardan elde edilen görünürlüğü ve organik geliri artırmayı hedefler.',
  },
  {
    q: 'Kategori sayfaları mı ürün sayfaları mı SEO için daha önemlidir?',
    a: 'İkisi farklı arama niyetlerini karşılar. Kategori sayfaları genellikle daha geniş ticari sorguları hedeflerken ürün sayfaları marka, model ve spesifik ürün aramalarını karşılar. E-ticaret SEO stratejisinde ikisi birbirinin alternatifi değildir.',
  },
  {
    q: 'E-Ticaret sitesinde filtre sayfaları indekslenmeli mi?',
    a: 'Her filtre sayfası indekslenmemelidir. Gerçek arama talebi bulunan ve yeterli ürün sunan bazı filtre kombinasyonları bağımsız landing page olarak değerlendirilebilir. Düşük değerli veya sınırsız kombinasyon üreten filtrelerin ise crawl ve index stratejisi kontrol edilmelidir.',
  },
  {
    q: 'Stokta olmayan ürünler SEO açısından silinmeli mi?',
    a: 'Her zaman değil. Geçici olarak stokta bulunmayan ürünlerde sayfa korunabilir. Kalıcı olarak kaldırılan ürünlerde muadil varsa 301 yönlendirmesi, gerçek muadil yoksa 404 veya 410 gibi seçenekler değerlendirilebilir. Karar ürünün yaşam döngüsüne göre verilmelidir.',
  },
  {
    q: 'Ürün açıklamalarının özgün olması gerekir mi?',
    a: 'Ürünün temel teknik özellikleri doğal olarak başka mağazalarla aynı olabilir. Ancak yalnızca üretici açıklamasını kopyalamak yerine kullanım deneyimi, ölçü, uyumluluk, avantaj ve dezavantajlar, gerçek müşteri soruları ve ürünü rakiplerinden ayıran bilgiler eklemek daha yüksek değer sağlar.',
  },
  {
    q: 'Product Schema SEO’yu geliştirir mi?',
    a: 'Product structured data doğrudan üst sıralama garantisi sağlamaz ancak Google’ın ürün adı, fiyat, stok, puan ve diğer ürün özelliklerini daha doğru anlamasına yardımcı olur ve uygun ürün sayfalarını zengin ürün deneyimlerine elverişli hale getirebilir.',
  },
  {
    q: 'Merchant Center SEO için gerekli midir?',
    a: 'Google Search’te indekslenmek için Merchant Center zorunlu değildir. Ancak ürün verilerinin Google’a daha doğrudan aktarılmasını sağlar ve Shopping gibi bazı ürün yüzeyleri için gereklidir. Büyük e-ticaret sitelerinde structured data ve Merchant Center feed’lerinin birlikte yönetilmesi önerilir.',
  },
  {
    q: 'Blog e-ticaret SEO için önemli midir?',
    a: 'Evet ancak blogun amacı yalnızca trafik artırmak olmamalıdır. Kullanıcının ürün seçimi ve satın alma öncesindeki sorularını cevaplayan içerikler hazırlanmalı ve bu içerikler ilgili kategori ve ürün sayfalarıyla bağlanmalıdır.',
  },
  {
    q: 'Backlink e-ticaret SEO için önemli midir?',
    a: 'Rekabetçi sektörlerde markanın web üzerindeki otoritesi önemlidir. Ancak düşük kaliteli toplu backlink çalışmaları yerine özgün araştırmalar, ürün testleri, veri çalışmaları, dijital PR ve editoryal olarak referans gösterilebilir içerikler daha sürdürülebilir bir yaklaşım sunar.',
  },
  {
    q: 'SEO ve CRO arasındaki fark nedir?',
    a: 'SEO kullanıcının siteyi keşfetmesini sağlamaya odaklanırken CRO siteyi ziyaret eden kullanıcının satın alma gibi hedeflenen aksiyonu gerçekleştirme oranını artırmayı amaçlar. E-ticarette organik trafik ve dönüşüm performansı birlikte değerlendirilmelidir.',
  },
  {
    q: 'E-Ticaret SEO ne kadar sürede sonuç verir?',
    a: 'Tek bir standart süre yoktur. Sitenin yaşı, teknik durumu, rekabet, mevcut otoritesi, ürün sayısı ve yapılacak değişikliklerin kapsamı sonucu etkiler. Bazı teknik değişikliklerin etkisi daha kısa sürede görülebilirken rekabetçi kategorilerde sürdürülebilir büyüme daha uzun süreli çalışmalar gerektirebilir.',
  },
  {
    q: 'GEO e-ticaret SEO’nun yerini alacak mı?',
    a: 'Hayır. GEO ve AI Search optimizasyonu klasik SEO’nun yerine geçmekten çok arama görünürlüğünün genişleyen bir katmanıdır. Google da AI Overviews ve AI Mode gibi üretken arama özelliklerinde klasik SEO temellerinin geçerliliğini koruduğunu belirtiyor.',
  },
  {
    q: 'Yapay zekâ e-ticaret SEO’da kullanılabilir mi?',
    a: 'Evet. Anahtar kelime kümelendirme, ürün veri zenginleştirme, içerik taslakları, analiz ve ölçeklenebilir operasyonlarda AI kullanılabilir. Ancak yapay zekânın üretici açıklamasını yalnızca farklı kelimelerle yeniden yazması özgün bilgi yaratmaz. İnsan doğrulaması ve gerçek ürün verisi kritik olmaya devam eder.',
  },
  {
    q: 'E-Ticaret SEO başarısı nasıl ölçülür?',
    a: 'Sıralama ve trafik göstergelerinin yanında markasız organik tıklamalar, kategori ve ürün görünürlüğü, organik dönüşüm oranı, işlem sayısı, gelir ve mümkünse brüt kâr katkısı takip edilmelidir.',
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
    about: ['E-ticaret SEO', 'Teknik SEO', 'Faceted Navigation', 'Google Merchant Center', 'GEO'].map(
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

export default function EcommerceSeoGuidePage() {
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
              <li aria-current="page">E-Ticaret SEO Rehberi</li>
            </ol>
          </nav>
          <span className="section-tag">Rehber</span>
          {/* "E-Ticaret" must not break at its hyphen; the text itself is HEADLINE. */}
          <h1 id="page-title">
            <span className="nowrap">E-Ticaret</span> SEO Nedir? Kapsamlı{' '}
            <span className="nowrap">E-Ticaret</span> SEO Rehberi
          </h1>
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
                E-ticaret SEO; bir online mağazanın ürün, kategori ve diğer ticari sayfalarının
                arama motorları tarafından doğru şekilde keşfedilmesini, anlaşılmasını ve satın alma
                niyeti taşıyan sorgularda görünür olmasını sağlayan çalışmaların bütünüdür.
              </p>
              <p>
                Ancak e-ticaret SEO yalnızca ürün açıklamalarına anahtar kelime eklemek veya
                kategori sayfalarının title etiketlerini düzenlemek değildir.
              </p>
              <p>
                Binlerce ürünün, onlarca kategorinin, filtrelerin, varyantların, sürekli değişen
                stokların, fiyatların ve dinamik URL’lerin bulunduğu bir e-ticaret sitesinde SEO;
                aynı zamanda bir <strong>bilgi mimarisi, ürün verisi, teknik altyapı ve ticari
                büyüme problemidir.</strong>
              </p>
              <p>
                Başarılı bir e-ticaret SEO stratejisinin amacı yalnızca daha fazla organik trafik
                kazanmak değil, <strong>doğru arama niyetine sahip kullanıcıları doğru ürün veya
                kategoriyle buluşturarak organik geliri büyütmektir.</strong>
              </p>
              <p>
                Bu nedenle e-ticaret SEO performansını yalnızca “Google’da kaçıncı sıradayız?”
                sorusuyla değerlendirmek yeterli değildir.
              </p>
              <p>Asıl sorulması gereken soru şudur:</p>
              <aside className="article-callout" aria-label="Temel soru">
                <p>
                  <strong>Google ve diğer arama sistemleri, müşterileriniz bir ürün aradığında sizin
                  mağazanızı ne kadar doğru keşfediyor ve bu görünürlük ne kadar satış
                  üretiyor?</strong>
                </p>
              </aside>
            </header>

            {/* Podcast embed. next.config.mjs frame-src allows open.spotify.com for this. */}
            <figure className="article-embed">
              <figcaption>
                <span aria-hidden="true">🎙️</span> Sepetteki SEO — bu konuyu podcast&apos;te dinleyin
              </figcaption>
              <iframe
                data-testid="embed-iframe"
                title="Sepetteki SEO — e-ticaret SEO bölümü"
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/episode/2j3Hu0vAHnqp9WSgnNFom2?utm_source=generator&si=6b975a7c649b43b0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </figure>

            {/* Collapsible TOC: 44 entries is too many for the two-column box, so
                each group is a native <details> and needs no JS. */}
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

            <section id="e-ticaret-seo-neden-klasik-seodan-farklidir">
              <h2>E-Ticaret SEO Neden Klasik SEO’dan Farklıdır?</h2>
              <p>
                SEO’nun temel prensipleri e-ticaret siteleri için de geçerlidir. Arama motorları
                sayfaları taramalı, indekslemeli, içeriği anlamalı ve kullanıcı sorgusuyla
                eşleştirebilmelidir.
              </p>
              <p>Fakat e-ticarette bu problemler çok daha büyük bir ölçekte yaşanır.</p>
              <p>
                50 sayfalık kurumsal bir web sitesinde hatalı bir title etiketini tek tek
                düzeltebilirsiniz. 50.000 ürünlü bir e-ticaret sitesinde aynı yaklaşımı
                kullanamazsınız.
              </p>
              <p>
                Burada tek tek URL’lerden çok <strong>şablonları ve sistemleri</strong> optimize
                etmek gerekir.
              </p>
              <p>
                Örneğin bir ürün şablonundaki canonical hatası 20.000 ürünü aynı anda etkileyebilir.
                Bir filtre sistemi milyonlarca gereksiz URL üretebilir. Yanlış stok yönetimi,
                yıllardır backlink ve organik görünürlük kazanmış binlerce ürün sayfasını birkaç gün
                içinde ortadan kaldırabilir.
              </p>
              <p>Bu nedenle e-ticaret SEO çalışmalarında beş konu özellikle öne çıkar:</p>
              <p className="article-key">
                <strong>ölçek, katalog yapısı, tarama ve indeksleme yönetimi, sürekli değişen ürün
                verileri ve ticari arama niyeti.</strong>
              </p>
            </section>

            <section id="e-ticaret-seonun-temel-amaci-nedir">
              <h2>E-Ticaret SEO’nun Temel Amacı Nedir?</h2>
              <p>
                E-ticaret SEO’nun en basit amacı, müşterinin aradığı ürün ile mağazadaki doğru sayfa
                arasında bağlantı kurmaktır.
              </p>
              <p>Örneğin bir kullanıcı:</p>
              <p className="article-example">“spor ayakkabı”</p>
              <p>araması yaptığında genel bir kategori ihtiyacı taşır.</p>
              <p className="article-example">“erkek siyah koşu ayakkabısı”</p>
              <p>aradığında ürün özellikleri daha belirgindir.</p>
              <p className="article-example">“Nike Pegasus 41 erkek siyah 43 numara”</p>
              <p>aramasında ise kullanıcı artık belirli bir ürün veya varyanta oldukça yakındır.</p>
              <p>Bu üç sorguyu aynı sayfayla karşılamaya çalışmak doğru değildir.</p>
              <p>
                SEO stratejisinin görevi, arama talebini analiz ederek her sorgu kümesi için doğru
                sayfa tipini belirlemektir.
              </p>
              <p>
                Genel kategori sorguları kategori sayfalarıyla, daha spesifik ticari sorgular alt
                kategori veya kontrollü filtre sayfalarıyla, marka-model sorguları ürün
                sayfalarıyla, bilgi aramaları ise rehber ve blog içerikleriyle karşılanabilir.
              </p>
              <p>E-ticaret SEO’nun temeli burada başlar:</p>
              <p className="article-key"><strong>Her arama niyetinin sitede doğru karşılığının bulunması.</strong></p>
            </section>

            <section id="e-ticaret-seo-nasil-yapilir">
              <h2>E-Ticaret SEO Nasıl Yapılır?</h2>
              <p>E-ticaret SEO çalışmalarının başlangıç noktası title veya meta description değildir.</p>
              <p>
                Öncelikle kullanıcı talebi, ürün kataloğu ve site mimarisi birlikte analiz
                edilmelidir.
              </p>
            </section>

            <section className="article-step" id="1-anahtar-kelime-arastirmasini-urun-kataloguyla-birlestirin">
              <h2>1. Anahtar Kelime Araştırmasını Ürün Kataloğuyla Birleştirin</h2>
              <p>Klasik anahtar kelime araştırmasında arama hacmi yüksek kelimeler bulunabilir.</p>
              <p>E-ticarette ise asıl problem şudur:</p>
              <p className="article-key"><strong>Bu sorguyu hangi sayfa karşılamalı?</strong></p>
              <p>Örneğin kadın giyim satan bir mağazada şu sorguların bulunduğunu düşünelim:</p>
              <ul className="query-list">
                <li>“kadın elbise”</li>
                <li>“siyah elbise”</li>
                <li>“siyah uzun elbise”</li>
                <li>“siyah uzun kollu elbise”</li>
                <li>“siyah uzun kollu tesettür elbise”</li>
              </ul>
              <p>Bu sorguların her biri için ayrı sayfa oluşturmak doğru olmayabilir.</p>
              <p>
                Öncelikle sorgular kümelenmeli ve gerçek talep ile ürün çeşitliliği birlikte
                değerlendirilmelidir.
              </p>
              <p>
                Eğer “siyah elbise” önemli bir talebe ve yeterli ürün çeşitliliğine sahipse ayrı bir
                landing page veya indekslenebilir filtre sayfası oluşturulabilir.
              </p>
              <p>
                Fakat çok düşük talepli yüzlerce kombinasyonun indekslenmesine izin vermek, değer
                üretmek yerine sitenin taranması ve indekslenmesi gereken URL sayısını gereksiz yere
                büyütebilir.
              </p>
              <p>
                Dolayısıyla e-ticaret keyword research çalışmasının çıktısı yalnızca bir Excel
                anahtar kelime listesi değil, bir <strong>Keyword-to-URL Map</strong> olmalıdır.
              </p>
              <p>
                Her anahtar kelime kümesinin karşısında hangi kategori, alt kategori, ürün, filtre
                veya içerik sayfasının bulunacağı belirlenmelidir.
              </p>
            </section>

            <section className="article-step" id="2-sadece-seo-araclarina-degil-site-ici-aramalara-da-bakin">
              <h2>2. Sadece SEO Araçlarına Değil, Site İçi Aramalara da Bakın</h2>
              <p>
                E-ticaret şirketlerinin sahip olduğu en değerli SEO verilerinden biri çoğu zaman göz
                ardı edilir:
              </p>
              <p className="article-key"><strong>Site içi arama verisi.</strong></p>
              <p>Bir müşterinin Google’da ne aradığını SEO araçlarından tahmin edebilirsiniz.</p>
              <p>
                Fakat mağazanıza girdikten sonra ne aradığını doğrudan kendi verinizden
                görebilirsiniz.
              </p>
              <p>Örneğin kullanıcılar site içi aramada sürekli olarak:</p>
              <ul className="query-list">
                <li>“oversize gömlek”</li>
                <li>“keten pantolon”</li>
                <li>“su geçirmez mont”</li>
                <li>“iphone 17 kılıf”</li>
              </ul>
              <p>
                gibi ifadeleri arıyorsa ve sitenizde bu talepleri karşılayan güçlü kategori veya
                landing page’ler bulunmuyorsa önemli bir bilgi mimarisi fırsatı vardır.
              </p>
              <p>
                Daha da önemlisi, <strong>sonuç bulunamayan site içi
                aramalar</strong> incelenmelidir.
              </p>
              <p>
                Kullanıcıların aradığı fakat mağazanın cevap veremediği sorgular; yeni kategori,
                filtre, ürün grubu, synonym veya merchandising ihtiyacını gösterebilir.
              </p>
              <p>
                Bu veri SEO, UX, CRO ve ürün yönetimi ekiplerinin birlikte kullanabileceği nadir
                veri kaynaklarından biridir.
              </p>
            </section>

            <section className="article-step" id="3-e-ticaret-site-mimarisi-nasil-olmalidir">
              <h2>3. E-Ticaret Site Mimarisi Nasıl Olmalıdır?</h2>
              <p>
                İyi bir e-ticaret site mimarisi hem müşterinin hem de arama motorunun ürün
                kataloğunu anlamasını kolaylaştırır.
              </p>
              <p>Temel yapı genellikle şu mantığa dayanır:</p>
              <p className="article-key"><strong>Ana Sayfa → Ana Kategori → Alt Kategori → Ürün</strong></p>
              <p>Örneğin:</p>
              <ul className="article-path">
                <li>Ana Sayfa</li>
                <li>→ Erkek</li>
                <li>→ Ayakkabı</li>
                <li>→ Koşu Ayakkabısı</li>
                <li>→ Nike Pegasus 41</li>
              </ul>
              <p>
                Buradaki amaç her ürünü ana sayfadan zorunlu olarak üç tık uzağa yerleştirmek
                değildir. Asıl amaç sitenin önemli sayfalarının anlamsal ve navigasyon açısından
                güçlü biçimde birbirine bağlanmasıdır.
              </p>
              <p>
                Google da e-ticaret site yapısını anlamak için sayfalar arasındaki bağlantıları
                kullandığını ve kategori → alt kategori → ürün bağlantılarının crawler tarafından
                erişilebilir olması gerektiğini açıkça belirtiyor.
              </p>
              <p>Kategori mimarisi yalnızca SEO için oluşturulmamalıdır.</p>
              <p>
                Gerçek kullanıcıların ürünleri nasıl sınıflandırdığı, hangi özelliklere göre seçim
                yaptığı ve hangi kategorilerin ticari olarak önemli olduğu birlikte
                değerlendirilmelidir.
              </p>
              <p>
                Bu nedenle kategori ağacı bir SEO dosyası değil, şirketin dijital ürün
                taksonomisidir.
              </p>
            </section>

            <section className="article-step" id="4-url-yapisi-nasil-olmali">
              <h2>4. URL Yapısı Nasıl Olmalı?</h2>
              <p>E-ticaret URL’leri mümkün olduğunca anlaşılır ve tutarlı olmalıdır.</p>
              <p>Örneğin:</p>
              <p className="article-example"><code>site.com/erkek/ayakkabi/kosu-ayakkabisi/</code></p>
              <p>gibi bir yapı kullanıcıya sayfanın ne olduğunu kolayca anlatır.</p>
              <p>Ancak URL’yi gereksiz yere uzatmak da fayda sağlamaz.</p>
              <p>
                Daha önemli konu aynı içeriğin çok sayıda farklı URL üzerinden erişilebilir hale
                gelmesini engellemektir.
              </p>
              <p>
                Özellikle filtreler, tracking parametreleri, sort seçenekleri, pagination ve varyant
                yapıları aynı içeriğin yüzlerce sürümünü oluşturabilir.
              </p>
              <p>
                Google da e-ticaret URL mimarisinde tutarlı URL yapısının, self-referencing
                canonical kullanımının ve crawler tarafından takip edilebilir standart &lt;a
                href&gt; bağlantılarının önemini özellikle vurguluyor.
              </p>
            </section>

            <section className="article-step" id="5-faceted-navigation-ve-filtre-seosu">
              <h2>5. Faceted Navigation ve Filtre SEO’su</h2>
              <p>Faceted navigation, e-ticaret SEO’nun en kritik konularından biridir.</p>
              <p>Kullanıcı açısından filtreler oldukça faydalıdır.</p>
              <p>Ayakkabı kategorisindeki bir kullanıcı:</p>
              <ul className="article-fragments">
                <li>Marka: Nike</li>
                <li>Renk: Siyah</li>
                <li>Beden: 43</li>
                <li>Cinsiyet: Erkek</li>
                <li>Fiyat: 3.000–5.000 TL</li>
              </ul>
              <p>seçerek aradığı ürüne hızla ulaşabilir.</p>
              <p>SEO açısından problem ise her kombinasyonun ayrı URL üretmesiyle başlar.</p>
              <p>
                10 marka × 10 renk × 15 beden × 10 fiyat seçeneği gibi bir sistem teorik olarak
                katalogdaki ürün sayısından çok daha fazla URL oluşturabilir.
              </p>
              <p>
                Google, faceted navigation sistemlerinin gereksiz URL üretmesi nedeniyle aşırı
                taramaya yol açabileceğini ve önemli sayfaların keşfini yavaşlatabileceğini
                özellikle belirtiyor.
              </p>
              <p>Bu nedenle temel soru:</p>
              <p className="article-key"><strong>“Filtre URL’lerini indeksleyelim mi?”</strong></p>
              <p>değil,</p>
              <p className="article-key"><strong>“Hangi filtre kombinasyonlarının gerçek organik arama talebi var?”</strong></p>
              <p>olmalıdır.</p>
              <p>Örneğin:</p>
              <p className="article-example">“kadın siyah elbise”</p>
              <p>önemli bir arama kümesi olabilir.</p>
              <p>
                Bu durumda ilgili filtre kombinasyonunun kendi title, H1, açıklama, canonical ve
                internal link yapısıyla ayrı bir SEO landing page olarak değerlendirilmesi mantıklı
                olabilir.
              </p>
              <p>Fakat:</p>
              <p className="article-example">“kadın siyah elbise + M beden + 1.500–1.750 TL + çok satanlar sıralaması”</p>
              <p>
                gibi kombinasyonların arama motoruna açık tutulması çoğu durumda faydadan çok
                karmaşa yaratacaktır.
              </p>
            </section>

            <section className="article-step" id="6-kategori-sayfasi-seosu-nasil-yapilir">
              <h2>6. Kategori Sayfası SEO’su Nasıl Yapılır?</h2>
              <p>
                E-ticaret sitelerinin en değerli organik landing page’leri çoğu zaman kategori
                sayfalarıdır.
              </p>
              <p>Çünkü kategori sorguları yüksek ticari niyet taşır.</p>
              <ul className="query-list">
                <li>“Kadın mont”</li>
                <li>“erkek sneaker”</li>
                <li>“çalışma masası”</li>
                <li>“oyuncu laptop”</li>
              </ul>
              <p>
                gibi sorgularda kullanıcı belirli bir ürün modelinden ziyade seçenekleri
                karşılaştırmak ister.
              </p>
              <p>Bu nedenle kategori sayfası sadece ürünlerin sıralandığı bir grid olmamalıdır.</p>
              <p>
                Başarılı kategori sayfasında kullanıcının kategoriye girdiği anda üç şeyi
                anlayabilmesi gerekir:
              </p>
              <p className="article-key"><strong>Neredeyim? Ne bulabilirim? Seçimimi nasıl daraltabilirim?</strong></p>
              <p>Kategori H1’i açık olmalıdır.</p>
              <p>Title etiketi hedef sorguya ve kullanıcı niyetine uygun hazırlanmalıdır.</p>
              <p>
                Kategori açıklaması yalnızca SEO amacıyla yazılmış 1.000 kelimelik jenerik bir metin
                olmamalıdır.
              </p>
              <p>Kullanıcının gerçekten ihtiyaç duyduğu bilgiler sunulmalıdır.</p>
              <p>Örneğin “Koşu Ayakkabıları” kategorisinde içerik şu soruları cevaplayabilir:</p>
              <p>Yol koşusu ile trail koşusu ayakkabıları arasındaki fark nedir?</p>
              <p>Hangi taban tipi hangi kullanım için uygundur?</p>
              <p>Koşu ayakkabısı seçerken numara nasıl belirlenmelidir?</p>
              <p>
                Fakat bu içeriğin tamamını ürün grid’inin üzerine yerleştirerek kullanıcıyı
                ürünlerden uzaklaştırmak da doğru değildir.
              </p>
              <p>SEO içeriği ile alışveriş deneyimi arasında denge kurulmalıdır.</p>
            </section>

            <section className="article-step" id="7-kategori-sayfasindaki-urun-siralamasi-da-seoyu-etkiler">
              <h2>7. Kategori Sayfasındaki Ürün Sıralaması da SEO’yu Etkiler</h2>
              <p>Kategori SEO’su yalnızca metinlerden oluşmaz.</p>
              <p>Kategori içerisinde hangi ürünlerin ilk sırada bulunduğu da önemlidir.</p>
              <p>
                Sürekli stokta olmayan, çok düşük performanslı veya kullanıcının ilgisini çekmeyen
                ürünleri kategori başına taşımak organik ziyaretçinin deneyimini zayıflatabilir.
              </p>
              <p>Merchandising ve SEO ekiplerinin birlikte çalışması gerekir.</p>
              <p>Örneğin organik girişlerin yüksek olduğu bir kategori sayfasında:</p>
              <ul className="article-fragments">
                <li>stok derinliği yüksek,</li>
                <li>yüksek dönüşümlü,</li>
                <li>rekabetçi fiyatlı,</li>
                <li>iyi yorum alan,</li>
                <li>yüksek kaliteli görsellere sahip</li>
              </ul>
              <p>
                ürünlerin kullanıcı tarafından kolayca keşfedilebilmesi hem ticari performansı hem
                de sayfanın genel kalitesini artırabilir.
              </p>
              <p>SEO burada ürün merchandising stratejisinden bağımsız değildir.</p>
            </section>

            <section className="article-step" id="8-urun-sayfasi-seosu-nasil-yapilir">
              <h2>8. Ürün Sayfası SEO’su Nasıl Yapılır?</h2>
              <p>
                Ürün sayfasının temel amacı belirli bir ürünü arayan kullanıcının karar verebilmesi
                için gereken bilgiyi sunmaktır.
              </p>
              <p>Ürün başlığında ürünün tanımlanmasını sağlayan temel unsurlar bulunmalıdır.</p>
              <p>Örneğin:</p>
              <p className="article-example">“ABC-1024”</p>
              <p>yerine:</p>
              <p className="article-example">“Nike Pegasus 41 Erkek Koşu Ayakkabısı – Siyah”</p>
              <p>kullanıcı ve arama motoru açısından çok daha açıklayıcıdır.</p>
              <p>
                Ancak ürün başlıklarını sırf daha fazla anahtar kelime kullanmak için okunamaz hale
                getirmek doğru değildir.
              </p>
              <p>
                Ürün sayfasındaki açıklama ise üretici kataloğundaki birkaç cümlenin aynen
                kopyalandığı alan olmamalıdır.
              </p>
              <p>
                Aynı ürünü onlarca mağaza satıyorsa üreticinin sunduğu standart bilgiler sizi
                rakipten ayırmaz.
              </p>
              <p>Gerçek information gain şu soruların cevaplarından gelebilir:</p>
              <p>Ürün nasıl kalıp veriyor?</p>
              <p>Kimler için uygun?</p>
              <p>Kimler için uygun değil?</p>
              <p>Bir önceki modelden farkı nedir?</p>
              <p>Hangi ürünlerle uyumlu?</p>
              <p>Gerçek ölçüleri nelerdir?</p>
              <p>Bakımı nasıl yapılmalıdır?</p>
              <p>Kutu içeriğinde neler bulunur?</p>
              <p>Ürünü kullanan müşterilerin en sık sorduğu soru nedir?</p>
              <p>
                Bu bilgiler kullanıcının satın alma kararını kolaylaştırdığı gibi ürün sayfasına
                rakiplerin kolayca kopyalayamayacağı bir özgünlük kazandırır.
              </p>
            </section>

            <section className="article-step" id="9-binlerce-urunun-aciklamasi-tek-tek-yazilmali-mi">
              <h2>9. Binlerce Ürünün Açıklaması Tek Tek Yazılmalı mı?</h2>
              <p>Hayır.</p>
              <p>
                20.000 ürünlü bir katalogda bütün ürünlere insan eliyle uzun açıklama yazılması hem
                pahalı hem de gereksiz olabilir.
              </p>
              <p>Önceliklendirme yapılmalıdır.</p>
              <p>
                Organik gösterim alan, yüksek gelir üreten, yüksek marjlı, uzun süre stokta kalacak
                veya stratejik öneme sahip ürünler önce optimize edilebilir.
              </p>
              <p>Burada <strong>SEO Opportunity × Revenue Potential</strong> mantığı kullanılabilir.</p>
              <p>
                Örneğin Google Search Console’da yüksek gösterim alan fakat 8–20. sıralar arasında
                bulunan ve iyi satış potansiyeli olan ürünler ilk optimizasyon grubuna alınabilir.
              </p>
              <p>
                AI kullanılarak ürün içeriği ölçeklenebilir fakat yalnızca üreticinin mevcut
                açıklamasını farklı kelimelerle yeniden yazdırmak gerçek bir bilgi kazancı yaratmaz.
              </p>
              <p>
                AI’nın görevi yeni bilgi uydurmak değil, şirketin gerçek ürün verisini daha
                kullanılabilir hale getirmek olmalıdır.
              </p>
            </section>

            <section className="article-step" id="10-urun-varyantlari-nasil-yonetilmeli">
              <h2>10. Ürün Varyantları Nasıl Yönetilmeli?</h2>
              <p>
                Renk, beden, hafıza kapasitesi, materyal veya paket boyutu gibi varyantlar e-ticaret
                SEO’sunda ayrı bir planlama gerektirir.
              </p>
              <p>Örneğin:</p>
              <ul className="article-fragments">
                <li>iPhone 17 256 GB Siyah</li>
                <li>iPhone 17 512 GB Siyah</li>
                <li>iPhone 17 256 GB Beyaz</li>
              </ul>
              <p>aynı ürün ailesinin farklı varyantlarıdır.</p>
              <p>
                Her varyant için bağımsız URL üretmek bazı kataloglarda mantıklı olabilirken
                bazılarında gereksiz yinelenen URL oluşturabilir.
              </p>
              <p>Karar arama talebine, kullanıcı deneyimine ve ürün yapısına göre verilmelidir.</p>
              <p>
                Google, varyantların birbirleriyle ilişkisini daha iyi anlamak için ProductGroup,
                hasVariant, variesBy ve productGroupID gibi yapılandırılmış veri özelliklerini
                destekliyor.
              </p>
              <p>
                Buradaki önemli konu canonical etiketi ekleyip problemi unutmak değil; URL,
                structured data, Merchant Center ve frontend ürün seçiminin aynı varyant mantığını
                kullanmasını sağlamaktır.
              </p>
            </section>

            <section className="article-step" id="11-stokta-olmayan-urunler-nasil-yonetilmeli">
              <h2>11. Stokta Olmayan Ürünler Nasıl Yönetilmeli?</h2>
              <p>“Tükendiğinde ürünü sil.”</p>
              <p>E-ticaret SEO’daki en tehlikeli genellemelerden biridir.</p>
              <p>Doğru karar ürünün neden stokta olmadığına bağlıdır.</p>
              <p>
                Ürün geçici olarak tükendiyse fakat yeniden gelecekse sayfayı kaldırmak yerine
                sayfanın korunması genellikle daha anlamlıdır.
              </p>
              <p>Kullanıcıya “stokta yok” bilgisi gösterilebilir.</p>
              <p>“Stoğa gelince haber ver” seçeneği sunulabilir.</p>
              <p>Alternatif ürünler gösterilebilir.</p>
              <p>Structured data içerisindeki availability bilgisi güncellenebilir.</p>
              <p>Ürün kalıcı olarak kaldırıldıysa karar farklıdır.</p>
              <p>
                Gerçek bir yeni modeli veya birebir muadili varsa ilgili yeni ürüne 301
                yönlendirmesi düşünülebilir.
              </p>
              <p>
                Gerçek bir muadil yoksa her ürünü kategori veya ana sayfaya yönlendirmek doğru
                değildir.
              </p>
              <p>404 veya 410 yanıtı daha doğru olabilir.</p>
              <p>
                En büyük hata ise binlerce kaldırılmış ürünü yalnızca “SEO değerini kaybetmeyelim”
                düşüncesiyle alakasız kategorilere yönlendirmektir.
              </p>
            </section>

            <section className="article-step" id="12-sezonluk-urun-ve-kampanya-urllerini-her-yil-yeniden-acmayin">
              <h2>12. Sezonluk Ürün ve Kampanya URL’lerini Her Yıl Yeniden Açmayın</h2>
              <p>
                Black Friday, Anneler Günü, Sevgililer Günü veya okul alışverişi gibi tekrarlanan
                dönemlerde her yıl yeni bir URL oluşturmak yerine mümkün olduğunda kalıcı landing
                page kullanmak daha sürdürülebilir olabilir.
              </p>
              <p>Örneğin:</p>
              <p className="article-example"><code>/black-friday/</code></p>
              <p>sayfası her yıl güncellenebilir.</p>
              <p>
                Böylece sayfanın geçmiş sinyalleri, backlink’leri ve internal link değeri
                korunabilir.
              </p>
              <p>Kampanya başlamadan birkaç hafta önce içerik ve ürünler güncellenebilir.</p>
              <p>SEO’da sezon başladığında çalışmaya başlamak çoğu zaman geç kalmak anlamına gelir.</p>
            </section>

            <section className="article-step" id="13-canonical-etiketi-nedir-ve-e-ticarette-nasil-kullanilir">
              <h2>13. Canonical Etiketi Nedir ve E-Ticarette Nasıl Kullanılır?</h2>
              <p>
                Canonical etiketi, benzer veya aynı içeriğe sahip URL’ler arasından tercih edilen
                URL sürümünü arama motoruna belirtmeye yardımcı olur.
              </p>
              <p>E-ticarette özellikle:</p>
              <ul className="article-fragments">
                <li>varyantlar,</li>
                <li>parametreli URL’ler,</li>
                <li>sıralama seçenekleri,</li>
                <li>benzer katalog sayfaları</li>
              </ul>
              <p>gibi yapılarda önem kazanır.</p>
              <p>Ancak canonical bir “URL temizleme düğmesi” değildir.</p>
              <p>
                Google’ın gereksiz milyonlarca URL’yi taramasına izin verip hepsini canonical ile
                başka sayfaya yönlendirmek tarama problemini tamamen çözmez.
              </p>
              <p>
                Özellikle büyük kataloglarda canonical, robots.txt, internal link yapısı ve crawl
                kontrolü birlikte değerlendirilmelidir.
              </p>
            </section>

            <section className="article-step" id="14-xml-sitemap-nasil-kullanilmali">
              <h2>14. XML Sitemap Nasıl Kullanılmalı?</h2>
              <p>XML sitemap, arama motoruna sitenizdeki önemli URL’leri bildirmenize yardımcı olur.</p>
              <p>
                Fakat sitemap’i “Google’ın indekslemesini istediğimiz bütün URL’lerin listesi”
                olarak düşünmek daha doğrudur.
              </p>
              <p>
                Canonical olmayan URL’ler, redirect olan sayfalar, 404 URL’leri veya noindex
                sayfalar sitemap içerisinde bulunmamalıdır.
              </p>
              <p>Büyük e-ticaret sitelerinde sitemap’ler segmentlere ayrılabilir:</p>
              <ul className="article-fragments">
                <li>ürün sitemap’i,</li>
                <li>kategori sitemap’i,</li>
                <li>blog sitemap’i,</li>
                <li>görsel sitemap’i</li>
              </ul>
              <p>gibi.</p>
              <p>Bu yapı teknik sorunların analizini de kolaylaştırabilir.</p>
              <p>
                Örneğin yalnızca ürün sitemap’indeki 100.000 URL’nin indeksleme oranı ayrı takip
                edilebilir.
              </p>
            </section>

            <section className="article-step" id="15-pagination-ve-infinite-scroll-seosu">
              <h2>15. Pagination ve Infinite Scroll SEO’su</h2>
              <p>E-ticaret kategorilerinde yüzlerce ürün olabilir.</p>
              <p>Bütün ürünleri tek sayfada yüklemek performans açısından doğru değildir.</p>
              <p>Pagination veya infinite scroll kullanılabilir.</p>
              <p>
                Ancak kullanıcı aşağı indikçe JavaScript ile ürünlerin görünmesi, Google’ın bütün
                ürünleri otomatik olarak keşfedebileceği anlamına gelmez.
              </p>
              <p>Crawler’ın ürünlere standart URL ve bağlantılar üzerinden ulaşabilmesi gerekir.</p>
              <p>
                Google da pagination ve incremental loading sistemlerinde crawler’ın tüm içerikleri
                keşfedebilmesini sağlayacak bağlantı yapısının kurulması gerektiğini belirtiyor.
              </p>
              <p>
                Dolayısıyla “kullanıcı görebiliyor” ile “arama motoru keşfedebiliyor” aynı şey
                değildir.
              </p>
            </section>

            <section className="article-step" id="16-javascript-seo-e-ticarette-neden-onemlidir">
              <h2>16. JavaScript SEO E-Ticarette Neden Önemlidir?</h2>
              <p>Modern e-ticaret platformları giderek daha fazla JavaScript kullanıyor.</p>
              <p>
                Ürün varyantları, fiyatlar, filtreler, yorumlar, navigasyon ve hatta ürün
                açıklamaları JavaScript ile oluşturulabilir.
              </p>
              <p>Problem şu noktada başlar:</p>
              <p>
                Kullanıcı ekranında görünen kritik içerik initial HTML içerisinde bulunmuyorsa
                crawler’ın render sürecine bağımlı hale gelebilir.
              </p>
              <p>
                Özellikle fiyat, stok veya structured data gibi hızla değişen bilgiler için bu konu
                daha önemlidir.
              </p>
              <p>
                Google, Merchant Listing structured data’nın mümkün olduğunda initial HTML’de
                bulunmasını tavsiye ediyor ve JavaScript ile dinamik oluşturulan ürün markup’larının
                hızlı değişen fiyat ve stok verileri açısından daha az güvenilir olabileceğini
                belirtiyor.
              </p>
            </section>

            <section className="article-step" id="17-e-ticaret-sitelerinde-core-web-vitals-ve-performans">
              <h2>17. E-Ticaret Sitelerinde Core Web Vitals ve Performans</h2>
              <p>
                E-ticaret siteleri yüksek çözünürlüklü görseller, üçüncü taraf script’ler,
                personalization araçları, canlı destek sistemleri, remarketing kodları ve yoğun
                JavaScript nedeniyle kolayca ağırlaşabilir.
              </p>
              <p>
                Burada performans optimizasyonu yalnızca PageSpeed skorunu yükseltme çalışması
                değildir.
              </p>
              <p>Kullanıcının ürün keşif ve satın alma deneyimini hızlandırmalıdır.</p>
              <p>Özellikle:</p>
              <ul className="article-fragments">
                <li>ürünün ana görseli,</li>
                <li>ürün adı,</li>
                <li>fiyat,</li>
                <li>varyant seçimi,</li>
                <li>sepete ekleme butonu</li>
              </ul>
              <p>gibi kritik öğelerin hızlı ve stabil biçimde yüklenmesi önemlidir.</p>
              <p>Performans çalışmaları SEO ve CRO ekiplerinin ortak alanıdır.</p>
            </section>

            <section className="article-step" id="18-product-schema-e-ticaret-seo-icin-neden-onemlidir">
              <h2>18. Product Schema E-Ticaret SEO İçin Neden Önemlidir?</h2>
              <p>
                Ürün sayfasındaki bilgiler yalnızca kullanıcıya değil arama motorlarına da açık
                biçimde aktarılmalıdır.
              </p>
              <p>Product ve Offer structured data kullanılarak arama motorlarına ürünün:</p>
              <ul className="article-fragments">
                <li>adı,</li>
                <li>fiyatı,</li>
                <li>stok durumu,</li>
                <li>markası,</li>
                <li>puanı,</li>
                <li>kargo ve iade bilgileri</li>
              </ul>
              <p>gibi özellikleri daha açık biçimde iletilebilir.</p>
              <p>
                Google, uygun Product markup kullanılan satın alınabilir ürün sayfalarının Merchant
                Listing deneyimleri dahil daha zengin ürün görünümlerine uygun olabileceğini
                belirtiyor.
              </p>
              <p>Structured data bir sıralama garantisi değildir.</p>
              <p>
                Fakat arama motorunun ürün verisini doğru anlamasını kolaylaştıran önemli bir veri
                katmanıdır.
              </p>
            </section>

            <section className="article-step" id="19-merchant-center-seonun-parcasi-mi">
              <h2>19. Merchant Center SEO’nun Parçası mı?</h2>
              <p>
                Evet, modern e-ticaret SEO yaklaşımında Google Merchant Center yalnızca Google Ads
                ekibinin kullandığı bir araç olarak görülmemelidir.
              </p>
              <p>
                Google ürün verilerinin daha doğru anlaşılması için hem web sayfasındaki structured
                data’yı hem de Merchant Center üzerinden gönderilen ürün feed’lerini kullanabiliyor.
              </p>
              <p>
                Google ayrıca ürün verisinin Search, Images, Lens ve Shopping gibi farklı yüzeylerde
                kullanılabileceğini açıklıyor.
              </p>
              <p>
                Bu nedenle e-ticaret SEO uzmanının en azından Merchant Center ürün feed yapısını
                anlayabilmesi gerekir.
              </p>
              <p>
                Ürün title’ı, açıklaması, GTIN, marka, fiyat, stok, renk, beden ve varyant
                ilişkileri web sitesi ile feed arasında tutarlı olmalıdır.
              </p>
              <p>
                Örneğin web sitesinde ürün 1.499 TL görünürken Merchant Center feed’inde 1.699 TL
                görünmesi veri kalitesini bozar.
              </p>
              <p>Aynı durum stok bilgisi için de geçerlidir.</p>
              <p>Ürün verisi artık yalnızca PDP’nin üzerindeki metin değildir.</p>
              <p className="article-key"><strong>Product data SEO’nun önemli bir parçasıdır.</strong></p>
            </section>

            <section className="article-step" id="20-google-images-ve-google-lensi-gormezden-gelmeyin">
              <h2>20. Google Images ve Google Lens’i Görmezden Gelmeyin</h2>
              <p>
                Özellikle moda, mobilya, dekorasyon, kozmetik, ayakkabı ve aksesuar gibi görsel
                kararın önemli olduğu sektörlerde arama yolculuğu yalnızca klasik web sonuçlarından
                oluşmaz.
              </p>
              <p>
                Google ürünlerin Search dışında Images ve Lens gibi yüzeylerde de keşfedilebildiğini
                belirtiyor.
              </p>
              <p>Bu nedenle ürün görselleri SEO stratejisinin bir parçasıdır.</p>
              <p>Görsel yalnızca yüksek çözünürlüklü olmakla kalmamalı; ürünü doğru göstermelidir.</p>
              <p>
                Farklı açılar, kullanım bağlamı, detay görselleri, ölçek gösterimi ve gerektiğinde
                video içeriği kullanıcının ürünü anlamasına yardımcı olur.
              </p>
              <p>Dosya boyutları ise performansı gereksiz yere düşürmemelidir.</p>
            </section>

            <section className="article-step" id="21-urun-yorumlari-seo-icin-degerli-midir">
              <h2>21. Ürün Yorumları SEO İçin Değerli midir?</h2>
              <p>Ürün yorumları iki nedenle değerlidir.</p>
              <p>İlk olarak müşterinin satın alma kararını destekleyen sosyal kanıt sağlar.</p>
              <p>
                İkinci olarak ürün hakkında markanın kendisinin düşünmediği doğal ifadelerin
                oluşmasını sağlar.
              </p>
              <p>Örneğin marka ürün açıklamasında:</p>
              <p className="article-example">“regular fit”</p>
              <p>ifadesini kullanırken müşteriler yorumlarda:</p>
              <ul className="query-list">
                <li>“kalıbı biraz dar”</li>
                <li>“168 boy 60 kiloyum M aldım”</li>
                <li>“kumaşı yazın terletmiyor”</li>
              </ul>
              <p>gibi gerçek satın alma sorularına cevap verebilir.</p>
              <p>Bu içerikler özellikle long-tail aramalarda değerli olabilir.</p>
              <p>Ancak sahte veya yapay yorum üretmek SEO stratejisi değildir.</p>
            </section>

            <section className="article-step" id="22-e-ticaret-icerik-stratejisi-nasil-kurulmali">
              <h2>22. E-Ticaret İçerik Stratejisi Nasıl Kurulmalı?</h2>
              <p>
                E-ticaret SEO için blog yazmak önemlidir fakat “haftada iki blog yazısı girelim” tek
                başına strateji değildir.
              </p>
              <p>İçerik, satın alma yolculuğundaki soruları cevaplamalıdır.</p>
              <p>Örneğin koşu ayakkabısı satan bir mağaza yalnızca:</p>
              <p className="article-example">“Koşu Ayakkabısı Nedir?”</p>
              <p>içeriği hazırlamak yerine kullanıcıların gerçek karar sorularına odaklanabilir:</p>
              <ul className="query-list">
                <li>“Koşu ayakkabısı kaç numara alınmalı?”</li>
                <li>“Trail ve yol koşu ayakkabısı arasındaki fark nedir?”</li>
                <li>“Düz taban için koşu ayakkabısı nasıl seçilir?”</li>
                <li>“Koşu ayakkabısı ne zaman değiştirilir?”</li>
                <li>“Nike Pegasus ve Vomero arasındaki farklar nelerdir?”</li>
              </ul>
              <p>Buradaki kritik nokta blog içeriğinin ticari sayfalardan kopuk olmamasıdır.</p>
              <p>
                Rehber içerikleri kategori ve ürünlere; kategori sayfaları da gerektiğinde ilgili
                rehberlere bağlanmalıdır.
              </p>
              <p>
                Böylece içerik pazarlaması ayrı bir trafik adası olmak yerine ürün keşif sisteminin
                parçası haline gelir.
              </p>
            </section>

            <section className="article-step" id="23-karsilastirma-icerikleri-neden-onemlidir">
              <h2>23. Karşılaştırma İçerikleri Neden Önemlidir?</h2>
              <p>
                Kullanıcının satın alma kararına yaklaştığı önemli sorgulardan biri
                karşılaştırmalardır.
              </p>
              <p>Örneğin:</p>
              <ul className="query-list">
                <li>“iPhone 17 mi 17 Pro mu?”</li>
                <li>“Airfryer 5 litre mi 7 litre mi?”</li>
                <li>“Pegasus mu Vomero mu?”</li>
              </ul>
              <p>gibi sorgular yüksek karar niyeti taşır.</p>
              <p>
                İyi bir karşılaştırma içeriği üretici özelliklerini yan yana kopyalamakla sınırlı
                olmamalıdır.
              </p>
              <p>Gerçek kullanım farklarını açıklamalıdır.</p>
              <p>Kim için hangisinin daha uygun olduğunu söylemelidir.</p>
              <p>Avantaj ve dezavantajları göstermelidir.</p>
              <p>
                Mümkünse kendi test, kullanım, müşteri geri bildirimi veya satış verilerinizden
                özgün bilgi içermelidir.
              </p>
              <p>
                Bu tür first-party içerikler markanın konu otoritesini güçlendiren önemli
                varlıklardır.
              </p>
            </section>

            <section className="article-step" id="24-e-ticaret-siteleri-otoritesini-nasil-artirabilir">
              <h2>24. E-Ticaret Siteleri Otoritesini Nasıl Artırabilir?</h2>
              <p>SEO otoritesi yalnızca backlink satın almak anlamına gelmez.</p>
              <p>
                Güçlü markalar web üzerinde konuşulur, referans gösterilir ve kaynak olarak
                kullanılır.
              </p>
              <p>
                E-ticaret sitelerinin bu nedenle backlink alınabilecek özgün varlıklar üretmesi
                gerekir.
              </p>
              <p>Örneğin gerçek satış verileri kullanılarak hazırlanan:</p>
              <p className="article-example">“Türkiye’de 2026 Koşu Ayakkabısı Tercihleri”</p>
              <p>
                gibi bir çalışma onlarca sıradan blog yazısından daha fazla dijital PR potansiyeli
                taşıyabilir.
              </p>
              <p>
                Benzer şekilde gerçek ürün testleri, uzman görüşleri, sektör araştırmaları, fiyat
                trendleri ve kullanıcı davranışı analizleri doğal referans kazanabilir.
              </p>
              <p>En güçlü backlink stratejilerinden biri:</p>
              <p className="article-key"><strong>başkalarının kaynak göstermek isteyeceği bilgi üretmektir.</strong></p>
            </section>

            <section className="article-step" id="25-e-e-a-t-e-ticaret-siteleri-icin-ne-anlama-gelir">
              <h2>25. E-E-A-T E-Ticaret Siteleri İçin Ne Anlama Gelir?</h2>
              <p>
                Bir ürün sayfasında yalnızca ürün adı ve fiyat göstermek güven oluşturmak için
                yeterli değildir.
              </p>
              <p>Markanın kim olduğu açık olmalıdır.</p>
              <p>İletişim ve şirket bilgileri bulunmalıdır.</p>
              <p>Kargo ve iade politikaları anlaşılır olmalıdır.</p>
              <p>Uzmanlık gerektiren içeriklerde yazar ve uzman bilgileri gösterilebilir.</p>
              <p>İçeriklerin ne zaman güncellendiği belirtilebilir.</p>
              <p>Gerçek testler ve deneyimler kanıtlanabilir.</p>
              <p>
                Özellikle sağlık, kozmetik, takviye, finans veya güvenlik gibi kararın daha yüksek
                risk taşıdığı ürün kategorilerinde içeriklerin doğruluğu ve kaynaklandırılması daha
                önemlidir.
              </p>
              <p>Otorite yalnızca domain metric değildir.</p>
              <p className="article-key">
                <strong>Kullanıcı ve arama motorunun markanın neden güvenilir olduğunu
                anlayabilmesidir.</strong>
              </p>
            </section>

            <section className="article-step" id="26-seo-ve-cro-birlikte-calismali-mi">
              <h2>26. SEO ve CRO Birlikte Çalışmalı mı?</h2>
              <p>Kesinlikle.</p>
              <p>SEO müşteriyi mağazaya getirirken CRO müşterinin satın alma yolculuğunu iyileştirir.</p>
              <p>
                Organik trafik iki katına çıktığında dönüşüm oranı düşüyorsa işletme açısından
                gerçek başarı sınırlı olabilir.
              </p>
              <p>Bu nedenle e-ticaret SEO analizinde şu sorular da sorulmalıdır:</p>
              <p>Kullanıcı kategoriye geldiğinde ürünleri anlayabiliyor mu?</p>
              <p>Filtreler doğru çalışıyor mu?</p>
              <p>Ürün kartında gerekli bilgiler var mı?</p>
              <p>Ürün sayfasında fiyat ve CTA net mi?</p>
              <p>Beden veya varyant seçimi kafa karıştırıyor mu?</p>
              <p>Kargo zamanı satın alma öncesinde görülebiliyor mu?</p>
              <p>İade koşulları anlaşılır mı?</p>
              <p>Ürün görselleri ürünü yeterince anlatıyor mu?</p>
              <p>
                SEO’nun görevi yalnızca ziyaretçi getirmek değil, <strong>ticari olarak doğru
                ziyaretçiyi doğru deneyime getirmektir.</strong>
              </p>
              <p>
                Bu nedenle özellikle büyük mağazalarda SEO, UX ve CRO birbirinden tamamen ayrı
                yürütülmemelidir.
              </p>
              <p>
                E-ticaret SEO konusunda profesyonel destek alınırken de yalnızca anahtar kelime
                sıralaması değil, kategori mimarisi ve organik gelir perspektifiyle çalışan
                bir <Link href="/">e-ticaret SEO uzmanı</Link> tercih edilmesi önemlidir.
              </p>
            </section>

            <section className="article-step" id="27-internal-linking-e-ticaret-sitelerinde-nasil-yapilmali">
              <h2>27. Internal Linking E-Ticaret Sitelerinde Nasıl Yapılmalı?</h2>
              <p>
                İç bağlantılar arama motorunun sitenin önemli sayfalarını keşfetmesine ve sayfalar
                arasındaki anlamsal ilişkiyi anlamasına yardımcı olur.
              </p>
              <p>
                E-ticarette internal linking yalnızca blog içerisinden kategoriye anchor text vermek
                değildir.
              </p>
              <ul className="article-fragments">
                <li>Ana navigasyon,</li>
                <li>mega menü,</li>
                <li>breadcrumb,</li>
                <li>kategori–alt kategori ilişkileri,</li>
                <li>ürün önerileri,</li>
                <li>ilgili ürünler,</li>
                <li>tamamlayıcı ürünler,</li>
                <li>marka sayfaları,</li>
                <li>blog–kategori ilişkileri</li>
              </ul>
              <p>birlikte düşünülmelidir.</p>
              <p>
                Örneğin “koşu ayakkabısı nasıl seçilir?” rehberinden “erkek koşu ayakkabıları”
                kategorisine verilen bağlantı hem kullanıcı yolculuğu hem SEO açısından anlamlıdır.
              </p>
              <p>
                Ancak binlerce sayfaya otomatik olarak anlamsız exact-match bağlantılar eklemek iyi
                bir internal linking stratejisi değildir.
              </p>
            </section>

            <section className="article-step" id="28-site-ici-arama-sonuclari-googleda-indekslenmeli-mi">
              <h2>28. Site İçi Arama Sonuçları Google’da İndekslenmeli mi?</h2>
              <p>
                Genel kural olarak kullanıcıların site içi arama yaptığı her sorgu için otomatik
                indekslenebilir sayfa oluşturmak risklidir.
              </p>
              <p>Çünkü milyonlarca düşük kaliteli veya sonuç vermeyen URL oluşabilir.</p>
              <p>Örneğin:</p>
              <p className="article-example"><code>/arama?q=kirmizi+ceket</code></p>
              <p>
                gibi sayfaların sınırsız biçimde indekslenmesi yerine gerçek arama talebi bulunan
                sorgular kategori veya özel landing page yapısına dönüştürülebilir.
              </p>
              <p>
                Site içi aramayı SEO landing page üretme sistemi değil, <strong>talep keşfetme
                sistemi</strong> olarak görmek daha sağlıklı bir yaklaşımdır.
              </p>
            </section>

            <section className="article-step" id="29-e-ticaret-seoda-cannibalization-nasil-olusur">
              <h2>29. E-Ticaret SEO’da Cannibalization Nasıl Oluşur?</h2>
              <p>
                Keyword cannibalization, aynı arama niyetini birden fazla sayfanın hedeflemesiyle
                oluşabilir.
              </p>
              <p>Örneğin:</p>
              <p className="article-example"><code>/kadin-spor-ayakkabi/</code></p>
              <p>ve</p>
              <p className="article-example"><code>/kadin-ayakkabi/?tur=spor</code></p>
              <p>aynı sorguya hizmet ediyorsa iki sayfa birbirinin alternatifi haline gelebilir.</p>
              <p>Benzer şekilde:</p>
              <ul className="article-fragments">
                <li>kategori,</li>
                <li>filtre,</li>
                <li>kampanya,</li>
                <li>blog,</li>
                <li>marka</li>
              </ul>
              <p>sayfaları aynı ticari sorguyu hedefleyebilir.</p>
              <p>Çözüm her durumda canonical eklemek değildir.</p>
              <p>Önce hangi sayfanın hangi arama niyetini karşılaması gerektiği belirlenmelidir.</p>
              <p>
                Sonra içerik, internal linking, canonical, redirect veya indeksleme kararları bu
                hedefe göre düzenlenmelidir.
              </p>
            </section>

            <section className="article-step" id="30-e-ticaret-seo-performansi-nasil-olculur">
              <h2>30. E-Ticaret SEO Performansı Nasıl Ölçülür?</h2>
              <p>En büyük hata yalnızca organik trafiğe bakmaktır.</p>
              <p>
                SEO çalışmasının ticari etkisini görebilmek için trafik ile gelir birlikte
                değerlendirilmelidir.
              </p>
              <p>Örneğin:</p>
              <p>Organik ziyaret %30 arttı.</p>
              <p>Fakat bütün artış “X nedir?” gibi bilgi sorgularından geldi.</p>
              <p>Kategori trafiği değişmedi.</p>
              <p>Organik gelir yalnızca %2 arttı.</p>
              <p>
                Bu durumda SEO görünürlüğü büyümüş olsa bile ticari hedef beklenen ölçüde
                gerçekleşmemiştir.
              </p>
              <p>E-ticaret SEO için özellikle şu performans katmanları birlikte düşünülmelidir:</p>
              <p className="article-key"><strong>Görünürlük → Trafik → Ürün keşfi → Sepet → Satın alma → Gelir</strong></p>
              <p>Markalı ve markasız organik trafik de ayrı incelenmelidir.</p>
              <p>Marka zaten güçlü olduğu için:</p>
              <p className="article-example">“Marka Adı”</p>
              <p>sorgusundan gelen trafik SEO büyümesi gibi gösterilmemelidir.</p>
              <p>Asıl büyüme:</p>
              <ul className="query-list">
                <li>“erkek oversize gömlek”</li>
                <li>“siyah koşu ayakkabısı”</li>
                <li>“kablosuz kulaklık”</li>
              </ul>
              <p>gibi markasız ticari sorgulardaki görünürlük ve gelir artışında aranmalıdır.</p>
            </section>

            <section className="article-step" id="31-seo-roi-nasil-hesaplanir">
              <h2>31. SEO ROI Nasıl Hesaplanır?</h2>
              <p>E-ticaret SEO yatırımı yalnızca trafik üzerinden değerlendirilmemelidir.</p>
              <p>Basit yaklaşım şu olabilir:</p>
              <p className="article-key"><strong>SEO Kaynaklı Brüt Kâr – SEO Maliyeti / SEO Maliyeti</strong></p>
              <p>
                Fakat attribution nedeniyle SEO’nun gerçek katkısını ölçmek her zaman bu kadar basit
                değildir.
              </p>
              <p>
                Bir kullanıcı ürünü Google’da organik olarak keşfedip üç gün sonra doğrudan siteye
                girerek satın alabilir.
              </p>
              <p>
                Bu nedenle GA4, Search Console, CRM ve mümkünse şirketin BI verileri birlikte analiz
                edilmelidir.
              </p>
              <p>SEO raporunun sonunda yalnızca:</p>
              <p>“50 kelimede ilk 3’e çıktık.”</p>
              <p>yazıyorsa iş tarafının ihtiyacı tam karşılanmıyor olabilir.</p>
              <p>Asıl soru:</p>
              <p className="article-key"><strong>Bu görünürlük şirkete ne kazandırdı?</strong></p>
              <p>olmalıdır.</p>
            </section>

            <section className="article-step" id="32-search-console-e-ticaret-sitelerinde-nasil-kullanilmali">
              <h2>32. Search Console E-Ticaret Sitelerinde Nasıl Kullanılmalı?</h2>
              <p>
                Search Console verileri yalnızca toplam tıklama grafiğine bakmak için
                kullanılmamalıdır.
              </p>
              <p>Sayfa tipleri segmentlenmelidir.</p>
              <ul className="article-fragments">
                <li>Kategori URL’leri ayrı,</li>
                <li>ürünler ayrı,</li>
                <li>blog ayrı,</li>
                <li>marka sayfaları ayrı</li>
              </ul>
              <p>incelenebilir.</p>
              <p>
                Böylece örneğin genel organik trafik artarken kategori trafiğinin aslında düştüğü
                fark edilebilir.
              </p>
              <p>
                Aynı şekilde yüksek gösterim alıp düşük CTR üreten kategoriler veya 8–20. sıralarda
                bulunan yüksek ticari değerli sorgular tespit edilebilir.
              </p>
              <p>Bu sayfalar çoğu zaman hızlı SEO kazanımlarının kaynağıdır.</p>
            </section>

            <section className="article-step" id="33-e-ticaret-seo-ve-google-merchant-center-verileri-birlikte-olculmeli">
              <h2>33. E-Ticaret SEO ve Google Merchant Center Verileri Birlikte Ölçülmeli</h2>
              <p>
                Organik ürün görünürlüğünü yalnızca klasik Search Console web sonuçlarıyla
                sınırlamak artık yeterli değildir.
              </p>
              <p>
                Ürünler Google Search, Images, Shopping, Lens ve başka ürün keşif deneyimlerinde
                kullanıcıların karşısına çıkabilir.
              </p>
              <p>
                Merchant Center performansı, ürün feed kalitesi ve ücretsiz listeleme verileri de
                SEO ve organik ürün keşif stratejisinin parçası olarak incelenmelidir.
              </p>
              <p>
                Burada SEO ekibi ile paid shopping ekibinin veri siloları oluşturması yerine ürün
                verisi üzerinde ortak standartlar oluşturması daha doğrudur.
              </p>
            </section>

            <section className="article-step" id="34-e-ticaret-seo-ve-geo-ai-search-icin-ne-degisiyor">
              <h2>34. E-Ticaret SEO ve GEO: AI Search İçin Ne Değişiyor?</h2>
              <p>Kullanıcıların ürün keşif davranışı yalnızca klasik Google sonuçlarından oluşmuyor.</p>
              <p>Kullanıcı artık:</p>
              <p className="article-example">“5.000 TL altında yağmurda kullanabileceğim iyi bir erkek koşu ayakkabısı öner”</p>
              <p>gibi oldukça detaylı bir soruyu yapay zekâ tabanlı arama sistemlerine sorabiliyor.</p>
              <p>
                Bu değişim ürün sayfalarının ve içeriklerin yalnızca anahtar kelimeler için
                değil, <strong>ürünü gerçekten anlatacak kadar iyi
                yapılandırılması</strong> gerektiğini daha önemli hale getiriyor.
              </p>
              <p>
                Ürün adı, marka, materyal, kullanım amacı, uyumluluk, fiyat, stok, varyant,
                görseller, kargo ve iade gibi bilgiler açık olmalıdır.
              </p>
              <p>
                Google’ın üretken AI özellikleri için yayımladığı güncel rehber de klasik SEO
                temellerinin geçerliliğini koruduğunu; özel bir “AI schema” gerekmediğini ve özgün,
                değerli, güvenilir içeriğin önemini vurguluyor.
              </p>
              <p>Yani GEO, teknik SEO’nun alternatifi değildir.</p>
              <p>
                Teknik olarak erişilemeyen, indekslenemeyen ve doğru anlaşılmayan bir katalog
                üzerinde sağlam AI görünürlüğü oluşturmak da zordur.
              </p>
            </section>

            <section className="article-step" id="35-ai-crawlerlara-ayri-bir-seo-stratejisi-gerekir-mi">
              <h2>35. AI Crawler’lara Ayrı Bir SEO Stratejisi Gerekir mi?</h2>
              <p>Her AI sistemi aynı crawler veya retrieval mekanizmasını kullanmaz.</p>
              <p>
                Bu nedenle robots.txt, CDN veya firewall seviyesinde crawler erişimleri kontrol
                edilmelidir.
              </p>
              <p>
                Ancak “llms.txt ekledim, GEO tamamlandı” gibi tek dosyalık çözümler gerçek bir
                strateji değildir.
              </p>
              <p>Öncelik hâlâ şunlardır:</p>
              <ul className="article-fragments">
                <li>ürünün doğru tanımlanması,</li>
                <li>sayfanın erişilebilir olması,</li>
                <li>internal linking,</li>
                <li>yüksek kaliteli ürün verisi,</li>
                <li>özgün içerik,</li>
                <li>güvenilir marka sinyalleri,</li>
                <li>structured data</li>
              </ul>
              <p>ve tutarlı entity bilgileridir.</p>
              <p>
                Google da kendi AI özelliklerinde görünmek için özel bir AI markup veya ayrı
                machine-readable dosya zorunluluğu bulunmadığını açıkça belirtiyor.
              </p>
            </section>

            <section className="article-step" id="36-uluslararasi-e-ticaret-seo-nasil-yapilir">
              <h2>36. Uluslararası E-Ticaret SEO Nasıl Yapılır?</h2>
              <p>
                Bir e-ticaret sitesi farklı ülkelere satış yapıyorsa yalnızca içeriğin dilini
                çevirmek yeterli değildir.
              </p>
              <ul className="article-fragments">
                <li>Ülke ve dil hedeflemesi,</li>
                <li>hreflang,</li>
                <li>para birimi,</li>
                <li>stok durumu,</li>
                <li>kargo seçenekleri,</li>
                <li>yerel arama davranışı,</li>
                <li>ürün talebi,</li>
                <li>kategori isimleri</li>
              </ul>
              <p>birlikte değerlendirilmelidir.</p>
              <p>
                Türkiye’de kullanılan bir kategori ismi Almanya veya İngiltere pazarında aynı talep
                karşılığını taşımayabilir.
              </p>
              <p>Dolayısıyla keyword research her pazar için ayrıca yapılmalıdır.</p>
              <p>Çeviri ile localization aynı şey değildir.</p>
            </section>

            <section className="article-step" id="37-pazaryerleri-kendi-e-ticaret-sitenizin-seosunu-etkiler-mi">
              <h2>37. Pazaryerleri Kendi E-Ticaret Sitenizin SEO’sunu Etkiler mi?</h2>
              <p>
                Trendyol, Hepsiburada veya Amazon gibi pazaryerlerinde ürün satıyorsanız aynı ürün
                internette birden fazla güçlü domain üzerinde bulunabilir.
              </p>
              <p>
                Özellikle standart üretici açıklamalarını her kanalda aynen kullanmak kendi
                mağazanızın farklılaşmasını zorlaştırır.
              </p>
              <p>Kendi web sitenizin avantajı daha fazla bilgi sağlayabilmenizdir.</p>
              <ul className="article-fragments">
                <li>Daha detaylı ürün içeriği,</li>
                <li>marka hikâyesi,</li>
                <li>karşılaştırmalar,</li>
                <li>gerçek kullanıcı soruları,</li>
                <li>ürün uzmanlığı,</li>
                <li>rehber içerikleri</li>
              </ul>
              <p>kendi domain’inizi yalnızca başka bir satış noktası olmaktan çıkarabilir.</p>
              <p>
                Pazaryeri görünürlüğü ile kendi sitenizin organik stratejisi birbirinin alternatifi
                değil, farklı müşteri kazanım kanallarıdır.
              </p>
            </section>

            <section className="article-step" id="38-e-ticaret-seoda-en-sik-yapilan-hatalar">
              <h2>38. E-Ticaret SEO’da En Sık Yapılan Hatalar</h2>
              <p>
                E-ticaret SEO projelerinde sorun çoğu zaman tek bir büyük hatadan değil, katalog
                genelinde binlerce kez tekrarlanan küçük hatalardan oluşur.
              </p>
              <p>
                Her filtreyi indekslemek, her ürün varyantı için kontrolsüz URL üretmek, tedarikçi
                açıklamalarını aynen kullanmak, tükenen ürünleri doğrudan silmek, bütün kaldırılan
                ürünleri kategoriye yönlendirmek, JavaScript arkasında kritik içerik saklamak,
                kategori sayfalarını yalnızca ürün grid’inden ibaret bırakmak ve SEO performansını
                yalnızca trafik üzerinden değerlendirmek en sık karşılaşılan örnekler arasındadır.
              </p>
              <p>
                Bir e-ticaret sitesinde küçük bir template hatasının binlerce URL’ye yayıldığı
                unutulmamalıdır.
              </p>
              <p>
                Bu nedenle e-ticaret SEO’da en önemli becerilerden biri <strong>ölçek etkisini
                görebilmektir.</strong>
              </p>
            </section>

            <section className="article-step" id="39-yeni-bir-e-ticaret-sitesinde-seoya-nereden-baslanmali">
              <h2>39. Yeni Bir E-Ticaret Sitesinde SEO’ya Nereden Başlanmalı?</h2>
              <p>Yeni bir sitede ilk iş 100 blog yazısı üretmek değildir.</p>
              <p>Önce site mimarisi doğru kurulmalıdır.</p>
              <p>
                Kategori ağacı ve URL yapısı oluşturulmalı, crawl ve index kuralları belirlenmeli,
                ürün ve kategori şablonları optimize edilmeli, structured data kurulmalı ve Merchant
                Center ürün verisi hazırlanmalıdır.
              </p>
              <p>Bundan sonra içerik katmanı oluşturulabilir.</p>
              <p>
                Yanlış site mimarisi üzerine yüzlerce içerik üretmek ileride çok daha maliyetli
                migration süreçlerine neden olabilir.
              </p>
            </section>

            <section className="article-step" id="40-mevcut-buyuk-bir-e-ticaret-sitesinde-seoya-nereden-baslanmali">
              <h2>40. Mevcut Büyük Bir E-Ticaret Sitesinde SEO’ya Nereden Başlanmalı?</h2>
              <p>Büyük bir sitede önce mevcut durum ölçülmelidir.</p>
              <ul className="article-fragments">
                <li>Google’ın hangi URL’leri taradığı,</li>
                <li>hangi URL’lerin indekslendiği,</li>
                <li>hangi kategorilerin gelir ürettiği,</li>
                <li>filtre sisteminin kaç URL oluşturduğu,</li>
                <li>canonical yapısı,</li>
                <li>sitemap kalitesi,</li>
                <li>internal linking,</li>
                <li>stoktan düşen ürünler,</li>
                <li>structured data hataları,</li>
                <li>Merchant Center sorunları</li>
              </ul>
              <p>birlikte analiz edilmelidir.</p>
              <p>
                Ardından sorunlar <strong>etki × geliştirme maliyeti × ticari
                değer</strong> yaklaşımıyla önceliklendirilmelidir.
              </p>
              <p>
                20.000 ürün sayfasındaki template hatasını düzeltmek, 10 blog yazısının meta
                description’ını değiştirmekten çok daha yüksek etki yaratabilir.
              </p>
            </section>

            <section id="kontrol-listesi">
              <h2>E-Ticaret SEO Kontrol Listesi</h2>
              <div className="table-wrapper checklist-table">
                <table>
                  <caption className="visually-hidden">E-ticaret SEO kontrol listesi: alan ve kontrol edilmesi gereken temel konu</caption>
                  <thead>
                    <tr>
                      <th scope="col">Alan</th>
                      <th scope="col">Kontrol Edilmesi Gereken Temel Konu</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <CheckIcon />
                        Arama talebi
                      </td>
                      <td>Keyword → URL eşleşmesi oluşturuldu mu?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        Kategori mimarisi
                      </td>
                      <td>Talep ile katalog yapısı örtüşüyor mu?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        Filtreler
                      </td>
                      <td>İndekslenmesi gereken ve engellenmesi gereken facet’ler ayrıldı mı?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        Ürün sayfaları
                      </td>
                      <td>Özgün ve karar destekleyen bilgi var mı?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        Varyantlar
                      </td>
                      <td>URL, canonical ve ProductGroup mantığı tutarlı mı?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        Stok yönetimi
                      </td>
                      <td>Geçici ve kalıcı stok kaybı farklı yönetiliyor mu?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        Crawl
                      </td>
                      <td>Gereksiz URL’ler bot kaynaklarını tüketiyor mu?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        Index
                      </td>
                      <td>İndekslenen URL’ler gerçekten organik değer taşıyor mu?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        Sitemap
                      </td>
                      <td>Yalnızca canonical ve indekslenebilir URL’ler bulunuyor mu?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        Structured Data
                      </td>
                      <td>Product, Offer, Breadcrumb ve gerekli bilgiler doğru mu?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        Merchant Center
                      </td>
                      <td>Feed ile web sitesi ürün bilgileri tutarlı mı?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        Internal Linking
                      </td>
                      <td>Önemli kategori ve ürünlere yeterli bağlantı geliyor mu?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        Görseller
                      </td>
                      <td>Ürünleri yeterince anlatıyor ve performansı koruyor mu?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        İçerik
                      </td>
                      <td>Bilgi sorgularından ticari sayfalara mantıklı yolculuk var mı?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        Otorite
                      </td>
                      <td>Markanın referans gösterilebilir özgün içerikleri var mı?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        CRO
                      </td>
                      <td>Organik ziyaretçi ürünü bulup satın alabiliyor mu?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        Ölçüm
                      </td>
                      <td>Trafik yerine markasız organik gelir de ölçülüyor mu?</td>
                    </tr>
                    <tr>
                      <td>
                        <CheckIcon />
                        GEO
                      </td>
                      <td>Ürün ve marka bilgileri AI sistemlerinin anlayabileceği açıklıkta mı?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="article-faq" id="sss">
              <h2>E-Ticaret SEO Hakkında Sıkça Sorulan Sorular</h2>
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
              <h2>Sonuç: E-Ticaret SEO Bir İçerik Çalışması Değil, Büyüme Sistemidir</h2>
              <p>
                E-ticaret SEO artık ürün açıklamalarına anahtar kelime eklemek veya kategori
                title’larını değiştirmekten çok daha kapsamlı bir disiplin haline geldi.
              </p>
              <p>
                Ürün kataloğunun nasıl yapılandırıldığı, kategorilerin hangi arama niyetlerini
                karşıladığı, filtrelerin hangi URL’leri oluşturduğu, crawler’ların hangi sayfalara
                eriştiği, ürün varyantlarının nasıl tanımlandığı, stok değişimlerinin nasıl
                yönetildiği ve ürün verisinin Google’a nasıl aktarıldığı aynı sistemin parçalarıdır.
              </p>
              <p>Buna kullanıcı deneyimi ve ticari performans da eklenmelidir.</p>
              <p>
                Çünkü yüksek organik trafik, kullanıcı doğru ürünü bulamıyorsa gerçek bir e-ticaret
                başarısı değildir.
              </p>
              <p>
                Aynı şekilde Google’da iyi sıralanan fakat sürekli stok dışı ürünler gösteren bir
                kategori de şirket açısından sürdürülebilir değer üretmez.
              </p>
              <p>
                Modern e-ticaret SEO’nun amacı bu nedenle yalnızca “Google’da üst sıralara çıkmak”
                değildir.
              </p>
              <p>Amaç:</p>
              <p className="article-key">
                <strong>Arama talebini anlamak, doğru ürün ve kategoriyi doğru kullanıcıyla
                buluşturmak ve bu görünürlüğü ölçülebilir organik gelire dönüştürmektir.</strong>
              </p>
              <p>
                Google Search, Shopping, Images ve Lens gibi klasik ürün keşif yüzeylerinin yanına
                AI Overviews, AI Mode ve diğer yapay zekâ tabanlı arama deneyimleri eklendikçe bu
                yaklaşım daha da önemli hale geliyor.
              </p>
              <p>Kazanan e-ticaret siteleri daha fazla anahtar kelime kullananlar değil;</p>
              <p className="article-key">
                <strong>ürün kataloğunu hem insanların hem de makinelerin en kolay anlayabileceği
                şekilde yapılandıran markalar olacaktır.</strong>
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

      <RelatedPosts current="/e-ticaret-seo" />

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
