import type { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { postByPath } from '@/lib/blog/posts';
import { contact } from '@/lib/contact';
import { englishAlternateMetadata } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';
import { BASE_URL, PERSON_ID, WEBSITE_ID, graph, ref } from '@/lib/schema/base';
import { breadcrumbNode, faqNode, type Faq } from '@/lib/schema/page';

const PAGE_PATH = '/en/ecommerce-seo';
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;

/** The H1, reused as the BlogPosting headline and the last breadcrumb. */
const HEADLINE = 'What Is E-commerce SEO? The Complete E-commerce SEO Guide';

/** Root layout appends " | Kerem Gezergün", so the title stays short here. */
const TITLE = 'What Is E-commerce SEO? The Complete 2026 Guide';

const DESCRIPTION =
  'What e-commerce SEO is and how to do it: category, product and filter pages, technical SEO, Merchant Center, GEO and organic revenue optimization, in depth.';

const PUBLISHED = '2026-09-14';
const PUBLISHED_LABEL = '14 September 2026';

/** ~5,100 words at ~200 wpm. Update by hand if the text changes. */
const WORD_COUNT = 5100;
const READING_TIME = '26 min read';

const OG_IMAGE = {
  url: `${BASE_URL}${postByPath(PAGE_PATH).cover}`,
  width: 1200,
  height: 630,
  alt: 'What Is E-commerce SEO? The Complete E-commerce SEO Guide — Kerem Gezergün',
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: englishAlternateMetadata('/e-ticaret-seo', PAGE_PATH),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [OG_IMAGE],
    locale: 'en_US',
    type: 'article',
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [`${BASE_URL}/en`],
    section: 'E-commerce SEO',
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
 * Section ids are slugs of the headings. Grouped for the TOC; the 41-entry
 * step list starts collapsed so the page does not open on a wall of links.
 */
const toc = [
  {
    label: 'Foundations',
    collapsed: false,
    items: [
      { id: 'why-ecommerce-seo-differs-from-classic-seo', label: 'Why Is E-commerce SEO Different from Classic SEO?' },
      { id: 'what-is-the-core-goal-of-ecommerce-seo', label: 'What Is the Core Goal of E-commerce SEO?' },
    ],
  },
  {
    label: 'Step by step',
    collapsed: true,
    items: [
      { id: 'how-to-do-ecommerce-seo', label: 'How to Do E-commerce SEO' },
      { id: '1-combine-keyword-research-with-the-product-catalogue', label: '1. Combine Keyword Research with the Product Catalogue' },
      { id: '2-look-at-on-site-search-not-just-seo-tools', label: '2. Look at On-Site Search, Not Just SEO Tools' },
      { id: '3-what-should-ecommerce-site-architecture-look-like', label: '3. What Should E-commerce Site Architecture Look Like?' },
      { id: '4-what-should-the-url-structure-be', label: '4. What Should the URL Structure Be?' },
      { id: '5-faceted-navigation-and-filter-seo', label: '5. Faceted Navigation and Filter SEO' },
      { id: '6-how-to-do-category-page-seo', label: '6. How to Do Category Page SEO' },
      { id: '7-product-order-on-the-category-page-affects-seo-too', label: '7. Product Order on the Category Page Affects SEO Too' },
      { id: '8-how-to-do-product-page-seo', label: '8. How to Do Product Page SEO' },
      { id: '9-should-thousands-of-product-descriptions-be-written-one-by-one', label: '9. Should Thousands of Product Descriptions Be Written One by One?' },
      { id: '10-how-to-manage-product-variants', label: '10. How to Manage Product Variants' },
      { id: '11-how-to-manage-out-of-stock-products', label: '11. How to Manage Out-of-Stock Products' },
      { id: '12-do-not-recreate-seasonal-and-campaign-urls-every-year', label: '12. Do Not Recreate Seasonal and Campaign URLs Every Year' },
      { id: '13-what-is-the-canonical-tag-and-how-is-it-used-in-ecommerce', label: '13. What Is the Canonical Tag and How Is It Used in E-commerce?' },
      { id: '14-how-to-use-the-xml-sitemap', label: '14. How to Use the XML Sitemap' },
      { id: '15-pagination-and-infinite-scroll-seo', label: '15. Pagination and Infinite Scroll SEO' },
      { id: '16-why-javascript-seo-matters-in-ecommerce', label: '16. Why JavaScript SEO Matters in E-commerce' },
      { id: '17-core-web-vitals-and-performance-on-ecommerce-sites', label: '17. Core Web Vitals and Performance on E-commerce Sites' },
      { id: '18-why-product-schema-matters-for-ecommerce-seo', label: '18. Why Product Schema Matters for E-commerce SEO' },
      { id: '19-is-merchant-center-part-of-seo', label: '19. Is Merchant Center Part of SEO?' },
      { id: '20-do-not-ignore-google-images-and-google-lens', label: '20. Do Not Ignore Google Images and Google Lens' },
      { id: '21-are-product-reviews-valuable-for-seo', label: '21. Are Product Reviews Valuable for SEO?' },
      { id: '22-how-to-build-an-ecommerce-content-strategy', label: '22. How to Build an E-commerce Content Strategy' },
      { id: '23-why-comparison-content-matters', label: '23. Why Comparison Content Matters' },
      { id: '24-how-can-ecommerce-sites-build-authority', label: '24. How Can E-commerce Sites Build Authority?' },
      { id: '25-what-does-e-e-a-t-mean-for-ecommerce-sites', label: '25. What Does E-E-A-T Mean for E-commerce Sites?' },
      { id: '26-should-seo-and-cro-work-together', label: '26. Should SEO and CRO Work Together?' },
      { id: '27-how-to-do-internal-linking-on-ecommerce-sites', label: '27. How to Do Internal Linking on E-commerce Sites' },
      { id: '28-should-on-site-search-results-be-indexed-on-google', label: '28. Should On-Site Search Results Be Indexed on Google?' },
      { id: '29-how-does-cannibalization-happen-in-ecommerce-seo', label: '29. How Does Cannibalization Happen in E-commerce SEO?' },
      { id: '30-how-to-measure-ecommerce-seo-performance', label: '30. How to Measure E-commerce SEO Performance' },
      { id: '31-how-to-calculate-seo-roi', label: '31. How to Calculate SEO ROI' },
      { id: '32-how-to-use-search-console-on-ecommerce-sites', label: '32. How to Use Search Console on E-commerce Sites' },
      { id: '33-measure-ecommerce-seo-and-google-merchant-center-data-together', label: '33. Measure E-commerce SEO and Google Merchant Center Data Together' },
      { id: '34-ecommerce-seo-and-geo-what-changes-for-ai-search', label: '34. E-commerce SEO and GEO: What Changes for AI Search?' },
      { id: '35-do-ai-crawlers-need-a-separate-seo-strategy', label: '35. Do AI Crawlers Need a Separate SEO Strategy?' },
      { id: '36-how-to-do-international-ecommerce-seo', label: '36. How to Do International E-commerce SEO' },
      { id: '37-do-marketplaces-affect-your-own-stores-seo', label: '37. Do Marketplaces Affect Your Own Store’s SEO?' },
      { id: '38-the-most-common-ecommerce-seo-mistakes', label: '38. The Most Common E-commerce SEO Mistakes' },
      { id: '39-where-to-start-seo-on-a-new-ecommerce-site', label: '39. Where to Start SEO on a New E-commerce Site' },
      { id: '40-where-to-start-seo-on-an-existing-large-ecommerce-site', label: '40. Where to Start SEO on an Existing Large E-commerce Site' },
    ],
  },
  {
    label: 'Checklist · FAQ · Conclusion',
    collapsed: false,
    items: [
      { id: 'checklist', label: 'E-commerce SEO Checklist' },
      { id: 'faq', label: 'Frequently Asked Questions About E-commerce SEO' },
      { id: 'conclusion', label: 'Conclusion: E-commerce SEO Is a Growth System, Not a Content Task' },
    ],
  },
] as const;

const faqs: Faq[] = [
  {
    q: 'What is e-commerce SEO?',
    a: 'E-commerce SEO is the combined technical SEO, content, product data, site architecture and authority work done so that an online store’s product and category pages are visible in search engines for queries with purchase intent.',
  },
  {
    q: 'How is e-commerce SEO done?',
    a: 'E-commerce SEO is done by analysing search demand, building the category architecture, fixing technical crawl and index problems, optimising category and product pages, setting up structured data and the Merchant Center integration, and developing the content and internal linking system.',
  },
  {
    q: 'Why is e-commerce SEO important?',
    a: 'E-commerce SEO lets users with purchase intent discover a brand’s products and categories without advertising cost. Successful SEO aims to grow not just organic traffic but visibility on non-brand commercial queries and organic revenue.',
  },
  {
    q: 'Are category pages or product pages more important for SEO?',
    a: 'They serve different search intents. Category pages usually target broader commercial queries, while product pages answer brand, model and specific product searches. In an e-commerce SEO strategy they are not alternatives to each other.',
  },
  {
    q: 'Should filter pages on an e-commerce site be indexed?',
    a: 'Not every filter page should be indexed. Some filter combinations with real search demand and enough products can be treated as standalone landing pages. For low-value filters or ones that generate unlimited combinations, the crawl and index strategy needs to be controlled.',
  },
  {
    q: 'Should out-of-stock products be deleted for SEO?',
    a: 'Not always. For products that are temporarily out of stock, the page can be kept. For products removed permanently, a 301 redirect where an equivalent exists, or a 404 or 410 where there is no real equivalent, can be considered. The decision should follow the product’s lifecycle.',
  },
  {
    q: 'Do product descriptions need to be unique?',
    a: 'A product’s core technical specifications will naturally match other stores. But instead of copying only the manufacturer’s description, adding usage experience, measurements, compatibility, pros and cons, real customer questions and what sets the product apart from competitors provides much more value.',
  },
  {
    q: 'Does Product schema improve SEO?',
    a: 'Product structured data does not guarantee higher rankings, but it helps Google understand the product name, price, availability, rating and other attributes more accurately, and can make eligible product pages suitable for rich product experiences.',
  },
  {
    q: 'Is Merchant Center required for SEO?',
    a: 'Merchant Center is not required to be indexed in Google Search. But it passes product data to Google more directly and is required for some product surfaces such as Shopping. On large e-commerce sites, managing structured data and Merchant Center feeds together is recommended.',
  },
  {
    q: 'Is a blog important for e-commerce SEO?',
    a: 'Yes, but the blog’s purpose should not be traffic alone. Content should answer the user’s questions before choosing and buying a product, and that content should be linked to the relevant category and product pages.',
  },
  {
    q: 'Are backlinks important for e-commerce SEO?',
    a: 'In competitive sectors, a brand’s authority on the web matters. But rather than low-quality bulk backlink campaigns, original research, product tests, data studies, digital PR and editorially citable content offer a more sustainable approach.',
  },
  {
    q: 'What is the difference between SEO and CRO?',
    a: 'SEO focuses on helping users discover the site, while CRO aims to increase the rate at which visitors complete a target action such as a purchase. In e-commerce, organic traffic and conversion performance should be evaluated together.',
  },
  {
    q: 'How long does e-commerce SEO take to show results?',
    a: 'There is no single standard timeline. The site’s age, technical state, competition, existing authority, product count and the scope of the changes all affect the outcome. Some technical changes show an effect quickly, while sustainable growth in competitive categories can take longer.',
  },
  {
    q: 'Will GEO replace e-commerce SEO?',
    a: 'No. GEO and AI Search optimisation are an expanding layer of search visibility rather than a replacement for classic SEO. Google also states that classic SEO fundamentals still apply in generative search features such as AI Overviews and AI Mode.',
  },
  {
    q: 'Can AI be used in e-commerce SEO?',
    a: 'Yes. AI can be used for keyword clustering, product data enrichment, content drafts, analysis and scalable operations. But having AI rewrite the manufacturer’s description in different words does not create original information. Human verification and real product data remain critical.',
  },
  {
    q: 'How is e-commerce SEO success measured?',
    a: 'Alongside ranking and traffic indicators, track non-brand organic clicks, category and product visibility, organic conversion rate, transactions, revenue and, where possible, gross profit contribution.',
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
    inLanguage: 'en',
    articleSection: 'E-commerce SEO',
    wordCount: WORD_COUNT,
    image: OG_IMAGE.url,
    author: ref(PERSON_ID),
    publisher: ref(PERSON_ID),
    isPartOf: ref(WEBSITE_ID),
    about: ['E-commerce SEO', 'Technical SEO', 'Faceted Navigation', 'Google Merchant Center', 'GEO'].map(
      (name) => ({ '@type': 'Thing', name }),
    ),
  },
  breadcrumbNode('en', { name: 'SEO Blog', url: `${BASE_URL}/en/seo-blog` }, { name: HEADLINE, url: PAGE_URL }),
  faqNode(PAGE_URL, 'en', faqs),
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

const checklist = [
  ['Search demand', 'Has a keyword → URL map been built?'],
  ['Category architecture', 'Does the catalogue structure match demand?'],
  ['Filters', 'Are the facets to index separated from the ones to block?'],
  ['Product pages', 'Is there original, decision-supporting information?'],
  ['Variants', 'Are the URL, canonical and ProductGroup logic consistent?'],
  ['Stock management', 'Are temporary and permanent stock loss handled differently?'],
  ['Crawl', 'Are unnecessary URLs eating up bot resources?'],
  ['Index', 'Do the indexed URLs really carry organic value?'],
  ['Sitemap', 'Does it contain only canonical, indexable URLs?'],
  ['Structured data', 'Are Product, Offer, Breadcrumb and the required fields correct?'],
  ['Merchant Center', 'Are the feed and the website’s product data consistent?'],
  ['Internal linking', 'Do the important categories and products get enough links?'],
  ['Images', 'Do they describe the products well and protect performance?'],
  ['Content', 'Is there a logical journey from informational queries to commercial pages?'],
  ['Authority', 'Does the brand have original, citable content?'],
  ['CRO', 'Can the organic visitor find and buy the product?'],
  ['Measurement', 'Is non-brand organic revenue measured, not just traffic?'],
  ['GEO', 'Is the product and brand information clear enough for AI systems to understand?'],
] as const;

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
                <Link href="/en">Home</Link>
              </li>
              <li>
                <Link href="/en/seo-blog">SEO Blog</Link>
              </li>
              <li aria-current="page">E-commerce SEO Guide</li>
            </ol>
          </nav>
          <span className="section-tag">Guide</span>
          <h1 id="page-title">{HEADLINE}</h1>
          <p className="article-meta">
            <Link href="/en" rel="author">
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
                E-commerce SEO is the body of work that makes sure an online store’s product,
                category and other commercial pages are discovered correctly, understood and made
                visible by search engines for queries with purchase intent.
              </p>
              <p>
                But e-commerce SEO is not just adding keywords to product descriptions or editing
                the title tags of category pages.
              </p>
              <p>
                On an e-commerce site with thousands of products, dozens of categories, filters,
                variants, constantly changing stock, prices and dynamic URLs, SEO is also an{' '}
                <strong>information architecture, product data, technical infrastructure and
                commercial growth problem.</strong>
              </p>
              <p>
                The aim of a successful e-commerce SEO strategy is not just to win more organic
                traffic, but to{' '}
                <strong>grow organic revenue by connecting users with the right search intent to
                the right product or category.</strong>
              </p>
              <p>
                That is why judging e-commerce SEO performance by “where do we rank on Google?”
                alone is not enough.
              </p>
              <p>The real question to ask is this:</p>
              <aside className="article-callout" aria-label="Core question">
                <p>
                  <strong>When your customers search for a product, how accurately do Google and
                  the other search systems discover your store — and how much revenue does that
                  visibility produce?</strong>
                </p>
              </aside>
            </header>

            {/* Collapsible TOC: 44 entries is too many for the two-column box, so
                each group is a native <details> and needs no JS. */}
            <nav className="article-toc article-toc-grouped" aria-labelledby="toc-heading">
              <p id="toc-heading" className="article-toc-title">
                Contents
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

            <section id="why-ecommerce-seo-differs-from-classic-seo">
              <h2>Why Is E-commerce SEO Different from Classic SEO?</h2>
              <p>
                The basic principles of SEO apply to e-commerce sites too. Search engines have to
                crawl the pages, index them, understand the content and match it to the user’s
                query.
              </p>
              <p>But in e-commerce these problems play out at a much larger scale.</p>
              <p>
                On a 50-page corporate website you can fix a faulty title tag by hand. On an
                e-commerce site with 50,000 products you cannot take the same approach.
              </p>
              <p>
                Here it is <strong>templates and systems</strong> that need optimising, far more
                than individual URLs.
              </p>
              <p>
                A canonical error in one product template can affect 20,000 products at once. A
                filter system can generate millions of unnecessary URLs. Bad stock handling can wipe
                out, within days, thousands of product pages that spent years earning backlinks and
                organic visibility.
              </p>
              <p>That is why five topics stand out in e-commerce SEO work:</p>
              <p className="article-key">
                <strong>scale, catalogue structure, crawl and index management, constantly changing
                product data, and commercial search intent.</strong>
              </p>
            </section>

            <section id="what-is-the-core-goal-of-ecommerce-seo">
              <h2>What Is the Core Goal of E-commerce SEO?</h2>
              <p>
                At its simplest, the goal of e-commerce SEO is to connect the product the customer
                is looking for with the right page in the store.
              </p>
              <p>For example, when a user searches for:</p>
              <p className="article-example">“running shoes”</p>
              <p>they have a general category need.</p>
              <p className="article-example">“men’s black running shoes”</p>
              <p>brings clearer product attributes.</p>
              <p className="article-example">“Nike Pegasus 41 men’s black size 10”</p>
              <p>means the user is now very close to a specific product or variant.</p>
              <p>Trying to serve all three queries with the same page is not right.</p>
              <p>
                The job of the SEO strategy is to analyse search demand and determine the right page
                type for each query cluster.
              </p>
              <p>
                General category queries can be served by category pages, more specific commercial
                queries by subcategories or controlled filter pages, brand-and-model queries by
                product pages, and informational searches by guides and blog content.
              </p>
              <p>This is where the foundation of e-commerce SEO starts:</p>
              <p className="article-key"><strong>Every search intent has the right match on the site.</strong></p>
            </section>

            <section id="how-to-do-ecommerce-seo">
              <h2>How to Do E-commerce SEO</h2>
              <p>The starting point of e-commerce SEO is not the title or the meta description.</p>
              <p>
                User demand, the product catalogue and the site architecture have to be analysed
                together first.
              </p>
            </section>

            <section className="article-step" id="1-combine-keyword-research-with-the-product-catalogue">
              <h2>1. Combine Keyword Research with the Product Catalogue</h2>
              <p>Classic keyword research can surface high-volume keywords.</p>
              <p>In e-commerce, the real problem is this:</p>
              <p className="article-key"><strong>Which page should serve this query?</strong></p>
              <p>Suppose a womenswear store has the following queries:</p>
              <ul className="query-list">
                <li>“women’s dress”</li>
                <li>“black dress”</li>
                <li>“black maxi dress”</li>
                <li>“black long-sleeve dress”</li>
                <li>“black long-sleeve modest dress”</li>
              </ul>
              <p>Creating a separate page for each of these queries may not be right.</p>
              <p>
                The queries should first be clustered, and real demand and product variety
                evaluated together.
              </p>
              <p>
                If “black dress” has significant demand and enough product variety, a separate
                landing page or an indexable filter page can be created.
              </p>
              <p>
                But letting hundreds of very low-demand combinations get indexed can needlessly
                inflate the number of URLs the site needs crawled and indexed, instead of creating
                value.
              </p>
              <p>
                So the output of e-commerce keyword research should not be just a spreadsheet of
                keywords, but a <strong>keyword-to-URL map</strong>.
              </p>
              <p>
                For each keyword cluster, it should be decided which category, subcategory,
                product, filter or content page will answer it.
              </p>
            </section>

            <section className="article-step" id="2-look-at-on-site-search-not-just-seo-tools">
              <h2>2. Look at On-Site Search, Not Just SEO Tools</h2>
              <p>
                One of the most valuable SEO data sources an e-commerce company has is usually
                ignored:
              </p>
              <p className="article-key"><strong>On-site search data.</strong></p>
              <p>You can estimate what a customer searches for on Google from SEO tools.</p>
              <p>But what they search for once inside your store, you can see directly in your own data.</p>
              <p>If users keep searching on-site for things like:</p>
              <ul className="query-list">
                <li>“oversized shirt”</li>
                <li>“linen trousers”</li>
                <li>“waterproof jacket”</li>
                <li>“iphone 17 case”</li>
              </ul>
              <p>
                and your site has no strong category or landing page serving those needs, there is
                a significant information architecture opportunity.
              </p>
              <p>
                More importantly, <strong>on-site searches that return no results</strong> should
                be examined.
              </p>
              <p>
                Queries that users search for but the store cannot answer can point at a need for a
                new category, filter, product group, synonym or merchandising change.
              </p>
              <p>
                This is one of the rare data sources that SEO, UX, CRO and product management teams
                can all use together.
              </p>
            </section>

            <section className="article-step" id="3-what-should-ecommerce-site-architecture-look-like">
              <h2>3. What Should E-commerce Site Architecture Look Like?</h2>
              <p>
                Good e-commerce site architecture makes the product catalogue easier to understand
                for both the customer and the search engine.
              </p>
              <p>The basic structure usually follows this logic:</p>
              <p className="article-key"><strong>Home → Main category → Subcategory → Product</strong></p>
              <p>For example:</p>
              <ul className="article-path">
                <li>Home</li>
                <li>→ Men</li>
                <li>→ Shoes</li>
                <li>→ Running Shoes</li>
                <li>→ Nike Pegasus 41</li>
              </ul>
              <p>
                The aim is not to force every product to be exactly three clicks from the home
                page. The real aim is for the site’s important pages to be strongly connected,
                semantically and through navigation.
              </p>
              <p>
                Google also states clearly that it uses the links between pages to understand
                e-commerce site structure, and that the category → subcategory → product links need
                to be reachable by the crawler.
              </p>
              <p>The category architecture should not be built for SEO alone.</p>
              <p>
                How real users classify products, which attributes they choose by and which
                categories are commercially important should be evaluated together.
              </p>
              <p>
                That is why the category tree is not an SEO file; it is the company’s digital
                product taxonomy.
              </p>
            </section>

            <section className="article-step" id="4-what-should-the-url-structure-be">
              <h2>4. What Should the URL Structure Be?</h2>
              <p>E-commerce URLs should be as readable and consistent as possible.</p>
              <p>For example:</p>
              <p className="article-example"><code>site.com/men/shoes/running-shoes/</code></p>
              <p>tells the user easily what the page is.</p>
              <p>But making the URL longer for its own sake does not help either.</p>
              <p>
                The more important issue is preventing the same content from being reachable
                through a large number of different URLs.
              </p>
              <p>
                Filters, tracking parameters, sort options, pagination and variant structures in
                particular can create hundreds of versions of the same content.
              </p>
              <p>
                Google specifically stresses the importance of a consistent URL structure,
                self-referencing canonicals and standard &lt;a href&gt; links the crawler can
                follow in e-commerce URL architecture.
              </p>
            </section>

            <section className="article-step" id="5-faceted-navigation-and-filter-seo">
              <h2>5. Faceted Navigation and Filter SEO</h2>
              <p>Faceted navigation is one of the most critical topics in e-commerce SEO.</p>
              <p>For the user, filters are very useful.</p>
              <p>A user in the shoes category can select:</p>
              <ul className="article-fragments">
                <li>Brand: Nike</li>
                <li>Colour: Black</li>
                <li>Size: 10</li>
                <li>Gender: Men</li>
                <li>Price: $100–$150</li>
              </ul>
              <p>and reach the product they want quickly.</p>
              <p>For SEO, the problem starts when every combination generates its own URL.</p>
              <p>
                A system like 10 brands × 10 colours × 15 sizes × 10 price options can in theory
                generate far more URLs than there are products in the catalogue.
              </p>
              <p>
                Google specifically notes that faceted navigation systems can cause over-crawling
                by generating unnecessary URLs, and can slow the discovery of important pages.
              </p>
              <p>So the core question is not:</p>
              <p className="article-key"><strong>“Should we index filter URLs?”</strong></p>
              <p>but:</p>
              <p className="article-key"><strong>“Which filter combinations have real organic search demand?”</strong></p>
              <p>For example:</p>
              <p className="article-example">“women’s black dress”</p>
              <p>may be an important search cluster.</p>
              <p>
                In that case it can make sense to treat the relevant filter combination as a
                separate SEO landing page with its own title, H1, description, canonical and
                internal link structure.
              </p>
              <p>But keeping combinations like:</p>
              <p className="article-example">“women’s black dress + size M + $80–$100 + sorted by bestsellers”</p>
              <p>
                open to search engines will, in most cases, create more confusion than benefit.
              </p>
            </section>

            <section className="article-step" id="6-how-to-do-category-page-seo">
              <h2>6. How to Do Category Page SEO</h2>
              <p>The most valuable organic landing pages of e-commerce sites are usually the category pages.</p>
              <p>Because category queries carry high commercial intent.</p>
              <ul className="query-list">
                <li>“women’s coats”</li>
                <li>“men’s sneakers”</li>
                <li>“desks”</li>
                <li>“gaming laptops”</li>
              </ul>
              <p>
                On queries like these, the user wants to compare options rather than look at one
                specific product model.
              </p>
              <p>That is why a category page should not be just a grid of products.</p>
              <p>
                On a successful category page, the user should be able to understand three things
                the moment they arrive:
              </p>
              <p className="article-key"><strong>Where am I? What can I find? How do I narrow my choice?</strong></p>
              <p>The category H1 should be clear.</p>
              <p>The title tag should be written for the target query and the user’s intent.</p>
              <p>
                The category description should not be a generic 1,000-word text written purely
                for SEO.
              </p>
              <p>It should give the user the information they actually need.</p>
              <p>In a “Running Shoes” category, for example, the content can answer:</p>
              <p>What is the difference between road and trail running shoes?</p>
              <p>Which sole type suits which use?</p>
              <p>How should you pick a size when choosing running shoes?</p>
              <p>
                But placing all of that content above the product grid and pushing the user away
                from the products is not right either.
              </p>
              <p>A balance has to be struck between SEO content and the shopping experience.</p>
            </section>

            <section className="article-step" id="7-product-order-on-the-category-page-affects-seo-too">
              <h2>7. Product Order on the Category Page Affects SEO Too</h2>
              <p>Category SEO is not just text.</p>
              <p>Which products come first inside the category matters as well.</p>
              <p>
                Pushing products that are constantly out of stock, perform very poorly or do not
                interest the user to the top of the category can weaken the organic visitor’s
                experience.
              </p>
              <p>Merchandising and SEO teams need to work together.</p>
              <p>On a category page with high organic entries, for example, making products that are:</p>
              <ul className="article-fragments">
                <li>deep in stock,</li>
                <li>high-converting,</li>
                <li>competitively priced,</li>
                <li>well reviewed,</li>
                <li>backed by high-quality images</li>
              </ul>
              <p>
                easy for the user to discover can raise both commercial performance and the overall
                quality of the page.
              </p>
              <p>SEO here is not independent of the product merchandising strategy.</p>
            </section>

            <section className="article-step" id="8-how-to-do-product-page-seo">
              <h2>8. How to Do Product Page SEO</h2>
              <p>
                The core purpose of a product page is to give a user looking for a specific product
                the information they need to decide.
              </p>
              <p>The product title should carry the core elements that identify the product.</p>
              <p>For example, instead of:</p>
              <p className="article-example">“ABC-1024”</p>
              <p>a title like:</p>
              <p className="article-example">“Nike Pegasus 41 Men’s Running Shoes – Black”</p>
              <p>is far more descriptive for both the user and the search engine.</p>
              <p>
                But making product titles unreadable just to squeeze in more keywords is not right.
              </p>
              <p>
                The product description, meanwhile, should not be the place where a few sentences
                from the manufacturer’s catalogue are pasted verbatim.
              </p>
              <p>
                If dozens of stores sell the same product, the manufacturer’s standard information
                does not set you apart from the competition.
              </p>
              <p>Real information gain can come from the answers to these questions:</p>
              <p>How does the product fit?</p>
              <p>Who is it for?</p>
              <p>Who is it not for?</p>
              <p>What is different from the previous model?</p>
              <p>What is it compatible with?</p>
              <p>What are its real measurements?</p>
              <p>How should it be cared for?</p>
              <p>What is in the box?</p>
              <p>What do customers who use the product ask most often?</p>
              <p>
                This information makes the user’s purchase decision easier and gives the product
                page an originality competitors cannot easily copy.
              </p>
            </section>

            <section className="article-step" id="9-should-thousands-of-product-descriptions-be-written-one-by-one">
              <h2>9. Should Thousands of Product Descriptions Be Written One by One?</h2>
              <p>No.</p>
              <p>
                In a 20,000-product catalogue, writing a long description for every product by hand
                can be both expensive and unnecessary.
              </p>
              <p>Prioritise.</p>
              <p>
                Products that get organic impressions, generate high revenue, carry high margins,
                will stay in stock for a long time or have strategic importance can be optimised
                first.
              </p>
              <p>An <strong>SEO opportunity × revenue potential</strong> logic works here.</p>
              <p>
                For example, products that get high impressions in Google Search Console but sit in
                positions 8–20 and have good sales potential can go into the first optimisation
                group.
              </p>
              <p>
                Product content can be scaled with AI, but having the manufacturer’s existing
                description rewritten in different words does not create real information gain.
              </p>
              <p>
                AI’s job should not be to invent new information, but to make the company’s real
                product data more usable.
              </p>
            </section>

            <section className="article-step" id="10-how-to-manage-product-variants">
              <h2>10. How to Manage Product Variants</h2>
              <p>
                Variants such as colour, size, storage capacity, material or pack size need their
                own planning in e-commerce SEO.
              </p>
              <p>For example:</p>
              <ul className="article-fragments">
                <li>iPhone 17 256 GB Black</li>
                <li>iPhone 17 512 GB Black</li>
                <li>iPhone 17 256 GB White</li>
              </ul>
              <p>are different variants of the same product family.</p>
              <p>
                Generating an independent URL for every variant can make sense in some catalogues
                and create needless duplicate URLs in others.
              </p>
              <p>The decision should follow search demand, user experience and the product structure.</p>
              <p>
                Google supports structured data properties such as ProductGroup, hasVariant,
                variesBy and productGroupID to better understand how variants relate to each other.
              </p>
              <p>
                The important point here is not to add a canonical tag and forget the problem, but
                to make sure the URL, the structured data, Merchant Center and the front-end product
                selector all use the same variant logic.
              </p>
            </section>

            <section className="article-step" id="11-how-to-manage-out-of-stock-products">
              <h2>11. How to Manage Out-of-Stock Products</h2>
              <p>“Delete the product when it sells out.”</p>
              <p>This is one of the most dangerous generalisations in e-commerce SEO.</p>
              <p>The right decision depends on why the product is out of stock.</p>
              <p>
                If the product has sold out temporarily but will come back, keeping the page is
                usually more sensible than removing it.
              </p>
              <p>The user can be shown an “out of stock” notice.</p>
              <p>A “notify me when back in stock” option can be offered.</p>
              <p>Alternative products can be shown.</p>
              <p>The availability field in the structured data can be updated.</p>
              <p>If the product has been removed permanently, the decision is different.</p>
              <p>
                If there is a real new model or an exact equivalent, a 301 redirect to the new
                product can be considered.
              </p>
              <p>
                If there is no real equivalent, redirecting every product to the category or the
                home page is not right.
              </p>
              <p>A 404 or 410 response may be more correct.</p>
              <p>
                The biggest mistake is redirecting thousands of removed products to unrelated
                categories purely to “not lose the SEO value”.
              </p>
            </section>

            <section className="article-step" id="12-do-not-recreate-seasonal-and-campaign-urls-every-year">
              <h2>12. Do Not Recreate Seasonal and Campaign URLs Every Year</h2>
              <p>
                For recurring periods such as Black Friday, Mother’s Day, Valentine’s Day or
                back-to-school, using a permanent landing page where possible can be more
                sustainable than creating a new URL every year.
              </p>
              <p>For example, the:</p>
              <p className="article-example"><code>/black-friday/</code></p>
              <p>page can be updated every year.</p>
              <p>
                That way the page’s historical signals, backlinks and internal link value can be
                preserved.
              </p>
              <p>The content and products can be updated a few weeks before the campaign starts.</p>
              <p>In SEO, starting work once the season has begun usually means being late.</p>
            </section>

            <section className="article-step" id="13-what-is-the-canonical-tag-and-how-is-it-used-in-ecommerce">
              <h2>13. What Is the Canonical Tag and How Is It Used in E-commerce?</h2>
              <p>
                The canonical tag helps tell the search engine the preferred URL version among URLs
                with similar or identical content.
              </p>
              <p>In e-commerce it matters especially for:</p>
              <ul className="article-fragments">
                <li>variants,</li>
                <li>parameterised URLs,</li>
                <li>sort options,</li>
                <li>similar catalogue pages</li>
              </ul>
              <p>and similar structures.</p>
              <p>But the canonical is not a “URL clean-up button”.</p>
              <p>
                Letting Google crawl millions of unnecessary URLs and canonicalising all of them to
                another page does not fully solve the crawl problem.
              </p>
              <p>
                On large catalogues in particular, canonicals, robots.txt, the internal link
                structure and crawl control should be evaluated together.
              </p>
            </section>

            <section className="article-step" id="14-how-to-use-the-xml-sitemap">
              <h2>14. How to Use the XML Sitemap</h2>
              <p>The XML sitemap helps you tell the search engine the important URLs on your site.</p>
              <p>
                But it is more accurate to think of the sitemap as “the list of every URL we want
                Google to index”.
              </p>
              <p>
                Non-canonical URLs, redirecting pages, 404 URLs and noindex pages should not be in
                the sitemap.
              </p>
              <p>On large e-commerce sites, sitemaps can be split into segments:</p>
              <ul className="article-fragments">
                <li>a product sitemap,</li>
                <li>a category sitemap,</li>
                <li>a blog sitemap,</li>
                <li>an image sitemap</li>
              </ul>
              <p>and so on.</p>
              <p>This structure also makes technical problems easier to analyse.</p>
              <p>
                For example, the index rate of the 100,000 URLs in the product sitemap alone can be
                tracked separately.
              </p>
            </section>

            <section className="article-step" id="15-pagination-and-infinite-scroll-seo">
              <h2>15. Pagination and Infinite Scroll SEO</h2>
              <p>E-commerce categories can hold hundreds of products.</p>
              <p>Loading every product on one page is not right for performance.</p>
              <p>Pagination or infinite scroll can be used.</p>
              <p>
                But products appearing via JavaScript as the user scrolls does not mean Google can
                automatically discover all of them.
              </p>
              <p>The crawler needs to reach the products through standard URLs and links.</p>
              <p>
                Google also states that in pagination and incremental loading systems, a link
                structure that lets the crawler discover all of the content has to be in place.
              </p>
              <p>So “the user can see it” and “the search engine can discover it” are not the same thing.</p>
            </section>

            <section className="article-step" id="16-why-javascript-seo-matters-in-ecommerce">
              <h2>16. Why JavaScript SEO Matters in E-commerce</h2>
              <p>Modern e-commerce platforms use more and more JavaScript.</p>
              <p>
                Product variants, prices, filters, reviews, navigation and even product descriptions
                can be generated with JavaScript.
              </p>
              <p>The problem starts here:</p>
              <p>
                If critical content the user sees on screen is not in the initial HTML, it can become
                dependent on the crawler’s rendering process.
              </p>
              <p>
                This matters even more for fast-changing information such as price, stock or
                structured data.
              </p>
              <p>
                Google recommends that Merchant Listing structured data be in the initial HTML
                where possible, and notes that product markup generated dynamically with JavaScript
                may be less reliable for fast-changing price and stock data.
              </p>
            </section>

            <section className="article-step" id="17-core-web-vitals-and-performance-on-ecommerce-sites">
              <h2>17. Core Web Vitals and Performance on E-commerce Sites</h2>
              <p>
                E-commerce sites can easily get heavy because of high-resolution images,
                third-party scripts, personalisation tools, live chat systems, remarketing tags and
                heavy JavaScript.
              </p>
              <p>Performance optimisation here is not just a matter of raising the PageSpeed score.</p>
              <p>It should speed up the user’s product discovery and purchase experience.</p>
              <p>In particular, critical elements such as:</p>
              <ul className="article-fragments">
                <li>the main product image,</li>
                <li>the product name,</li>
                <li>the price,</li>
                <li>variant selection,</li>
                <li>the add-to-cart button</li>
              </ul>
              <p>need to load quickly and stably.</p>
              <p>Performance work is shared ground for the SEO and CRO teams.</p>
            </section>

            <section className="article-step" id="18-why-product-schema-matters-for-ecommerce-seo">
              <h2>18. Why Product Schema Matters for E-commerce SEO</h2>
              <p>
                The information on a product page should be communicated clearly not only to the
                user but to search engines too.
              </p>
              <p>With Product and Offer structured data, a product’s:</p>
              <ul className="article-fragments">
                <li>name,</li>
                <li>price,</li>
                <li>availability,</li>
                <li>brand,</li>
                <li>rating,</li>
                <li>shipping and return details</li>
              </ul>
              <p>can be passed to search engines more explicitly.</p>
              <p>
                Google states that purchasable product pages with appropriate Product markup may be
                eligible for richer product displays, including Merchant Listing experiences.
              </p>
              <p>Structured data is not a ranking guarantee.</p>
              <p>
                But it is an important data layer that makes it easier for the search engine to
                understand product data correctly.
              </p>
            </section>

            <section className="article-step" id="19-is-merchant-center-part-of-seo">
              <h2>19. Is Merchant Center Part of SEO?</h2>
              <p>
                Yes. In a modern e-commerce SEO approach, Google Merchant Center should not be seen
                as a tool used only by the Google Ads team.
              </p>
              <p>
                To understand product data more accurately, Google can use both the structured data
                on the web page and the product feeds submitted through Merchant Center.
              </p>
              <p>
                Google also explains that product data can be used across surfaces such as Search,
                Images, Lens and Shopping.
              </p>
              <p>
                That is why an e-commerce SEO specialist needs to understand at least the structure
                of the Merchant Center product feed.
              </p>
              <p>
                Product title, description, GTIN, brand, price, stock, colour, size and variant
                relationships should be consistent between the website and the feed.
              </p>
              <p>
                A product showing $149 on the website and $169 in the Merchant Center feed, for
                example, damages data quality.
              </p>
              <p>The same goes for stock information.</p>
              <p>Product data is no longer just the text on the PDP.</p>
              <p className="article-key"><strong>Product data is an important part of SEO.</strong></p>
            </section>

            <section className="article-step" id="20-do-not-ignore-google-images-and-google-lens">
              <h2>20. Do Not Ignore Google Images and Google Lens</h2>
              <p>
                In sectors where the visual decision matters — fashion, furniture, decor,
                cosmetics, shoes and accessories in particular — the search journey is not made of
                classic web results alone.
              </p>
              <p>
                Google notes that products can be discovered on surfaces such as Images and Lens,
                beyond Search.
              </p>
              <p>That is why product images are part of the SEO strategy.</p>
              <p>An image should not just be high resolution; it should show the product accurately.</p>
              <p>
                Different angles, usage context, detail shots, scale references and, where needed,
                video help the user understand the product.
              </p>
              <p>File sizes, meanwhile, should not drag performance down unnecessarily.</p>
            </section>

            <section className="article-step" id="21-are-product-reviews-valuable-for-seo">
              <h2>21. Are Product Reviews Valuable for SEO?</h2>
              <p>Product reviews are valuable for two reasons.</p>
              <p>First, they provide social proof that supports the customer’s purchase decision.</p>
              <p>
                Second, they produce natural phrasing about the product that the brand itself would
                not have thought of.
              </p>
              <p>While the brand writes:</p>
              <p className="article-example">“regular fit”</p>
              <p>in the product description, customers answer real buying questions in reviews:</p>
              <ul className="query-list">
                <li>“runs a little narrow”</li>
                <li>“I’m 168 cm and 60 kg, got an M”</li>
                <li>“the fabric doesn’t make you sweat in summer”</li>
              </ul>
              <p>This content can be especially valuable for long-tail searches.</p>
              <p>But generating fake or artificial reviews is not an SEO strategy.</p>
            </section>

            <section className="article-step" id="22-how-to-build-an-ecommerce-content-strategy">
              <h2>22. How to Build an E-commerce Content Strategy</h2>
              <p>
                Writing a blog matters for e-commerce SEO, but “let’s post two blog articles a week”
                is not a strategy on its own.
              </p>
              <p>Content should answer the questions along the buying journey.</p>
              <p>A store selling running shoes, for example, can focus on users’ real decision questions instead of only producing:</p>
              <p className="article-example">“What Are Running Shoes?”</p>
              <ul className="query-list">
                <li>“What size running shoes should I buy?”</li>
                <li>“What is the difference between trail and road running shoes?”</li>
                <li>“How do I choose running shoes for flat feet?”</li>
                <li>“When should running shoes be replaced?”</li>
                <li>“What are the differences between Nike Pegasus and Vomero?”</li>
              </ul>
              <p>The critical point here is that blog content should not be cut off from the commercial pages.</p>
              <p>
                Guides should link to categories and products, and category pages should link to
                the relevant guides where it helps.
              </p>
              <p>
                That way content marketing becomes part of the product discovery system instead of
                a separate island of traffic.
              </p>
            </section>

            <section className="article-step" id="23-why-comparison-content-matters">
              <h2>23. Why Comparison Content Matters</h2>
              <p>
                Comparisons are among the important queries users make as they approach a purchase
                decision.
              </p>
              <p>For example:</p>
              <ul className="query-list">
                <li>“iPhone 17 or 17 Pro?”</li>
                <li>“5-litre or 7-litre air fryer?”</li>
                <li>“Pegasus or Vomero?”</li>
              </ul>
              <p>are queries with high decision intent.</p>
              <p>
                Good comparison content should not be limited to copying the manufacturers’
                specifications side by side.
              </p>
              <p>It should explain the real differences in use.</p>
              <p>It should say which one suits whom.</p>
              <p>It should show the pros and cons.</p>
              <p>
                Where possible, it should include original information from your own testing,
                usage, customer feedback or sales data.
              </p>
              <p>
                First-party content of this kind is an important asset that strengthens the brand’s
                topical authority.
              </p>
            </section>

            <section className="article-step" id="24-how-can-ecommerce-sites-build-authority">
              <h2>24. How Can E-commerce Sites Build Authority?</h2>
              <p>SEO authority does not mean buying backlinks.</p>
              <p>Strong brands are talked about, referenced and cited as sources across the web.</p>
              <p>
                That is why e-commerce sites need to produce original assets that can earn
                backlinks.
              </p>
              <p>A study built on real sales data, such as:</p>
              <p className="article-example">“Running Shoe Preferences in 2026”</p>
              <p>
                can carry more digital PR potential than dozens of ordinary blog posts.
              </p>
              <p>
                Likewise, real product tests, expert opinions, industry research, price trends and
                user behaviour analyses can earn natural references.
              </p>
              <p>One of the strongest backlink strategies is:</p>
              <p className="article-key"><strong>producing information that others will want to cite.</strong></p>
            </section>

            <section className="article-step" id="25-what-does-e-e-a-t-mean-for-ecommerce-sites">
              <h2>25. What Does E-E-A-T Mean for E-commerce Sites?</h2>
              <p>Showing only a product name and a price on a product page is not enough to build trust.</p>
              <p>Who the brand is should be clear.</p>
              <p>Contact and company details should be present.</p>
              <p>Shipping and return policies should be easy to understand.</p>
              <p>On content that requires expertise, author and expert details can be shown.</p>
              <p>When content was last updated can be stated.</p>
              <p>Real tests and experience can be evidenced.</p>
              <p>
                In product categories where the decision carries more risk — health, cosmetics,
                supplements, finance or safety in particular — the accuracy and sourcing of content
                matters more.
              </p>
              <p>Authority is not just a domain metric.</p>
              <p className="article-key">
                <strong>It is the user and the search engine being able to understand why the brand
                is trustworthy.</strong>
              </p>
            </section>

            <section className="article-step" id="26-should-seo-and-cro-work-together">
              <h2>26. Should SEO and CRO Work Together?</h2>
              <p>Absolutely.</p>
              <p>SEO brings the customer into the store; CRO improves the customer’s purchase journey.</p>
              <p>
                If the conversion rate falls while organic traffic doubles, the real success for the
                business may be limited.
              </p>
              <p>That is why e-commerce SEO analysis should also ask these questions:</p>
              <p>Can the user understand the products when they land on the category?</p>
              <p>Do the filters work correctly?</p>
              <p>Does the product card carry the necessary information?</p>
              <p>Are the price and the CTA clear on the product page?</p>
              <p>Is size or variant selection confusing?</p>
              <p>Can the delivery time be seen before purchase?</p>
              <p>Are the return conditions easy to understand?</p>
              <p>Do the product images describe the product well enough?</p>
              <p>
                SEO’s job is not just to bring visitors, but to{' '}
                <strong>bring the commercially right visitor to the right experience.</strong>
              </p>
              <p>
                That is why, especially in large stores, SEO, UX and CRO should not be run in
                complete isolation from each other.
              </p>
              <p>
                When getting professional help with e-commerce SEO, it also matters to choose an{' '}
                <Link href="/en">e-commerce SEO consultant</Link> who works from a category
                architecture and organic revenue perspective, not keyword rankings alone.
              </p>
            </section>

            <section className="article-step" id="27-how-to-do-internal-linking-on-ecommerce-sites">
              <h2>27. How to Do Internal Linking on E-commerce Sites</h2>
              <p>
                Internal links help the search engine discover the site’s important pages and
                understand the semantic relationship between them.
              </p>
              <p>
                In e-commerce, internal linking is not just anchor text from the blog to a category.
              </p>
              <ul className="article-fragments">
                <li>Main navigation,</li>
                <li>the mega menu,</li>
                <li>the breadcrumb,</li>
                <li>category–subcategory relationships,</li>
                <li>product recommendations,</li>
                <li>related products,</li>
                <li>complementary products,</li>
                <li>brand pages,</li>
                <li>blog–category relationships</li>
              </ul>
              <p>should all be thought about together.</p>
              <p>
                A link from the “how to choose running shoes” guide to the “men’s running shoes”
                category, for example, makes sense for both the user journey and SEO.
              </p>
              <p>
                But automatically adding meaningless exact-match links to thousands of pages is not
                a good internal linking strategy.
              </p>
            </section>

            <section className="article-step" id="28-should-on-site-search-results-be-indexed-on-google">
              <h2>28. Should On-Site Search Results Be Indexed on Google?</h2>
              <p>
                As a general rule, automatically creating an indexable page for every query users
                search on-site is risky.
              </p>
              <p>Because millions of low-quality or empty-result URLs can be created.</p>
              <p>For example, rather than letting pages like:</p>
              <p className="article-example"><code>/search?q=red+jacket</code></p>
              <p>
                get indexed without limit, queries with real search demand can be turned into
                categories or dedicated landing pages.
              </p>
              <p>
                It is healthier to see on-site search as a <strong>demand discovery system</strong>,
                not a system for generating SEO landing pages.
              </p>
            </section>

            <section className="article-step" id="29-how-does-cannibalization-happen-in-ecommerce-seo">
              <h2>29. How Does Cannibalization Happen in E-commerce SEO?</h2>
              <p>
                Keyword cannibalization can happen when more than one page targets the same search
                intent.
              </p>
              <p>For example, if:</p>
              <p className="article-example"><code>/womens-sneakers/</code></p>
              <p>and</p>
              <p className="article-example"><code>/womens-shoes/?type=sneakers</code></p>
              <p>serve the same query, the two pages can become alternatives to each other.</p>
              <p>Likewise:</p>
              <ul className="article-fragments">
                <li>category,</li>
                <li>filter,</li>
                <li>campaign,</li>
                <li>blog,</li>
                <li>brand</li>
              </ul>
              <p>pages can all target the same commercial query.</p>
              <p>The solution is not always to add a canonical.</p>
              <p>First, decide which page should serve which search intent.</p>
              <p>
                Then align the content, internal linking, canonical, redirect or indexing decisions
                with that target.
              </p>
            </section>

            <section className="article-step" id="30-how-to-measure-ecommerce-seo-performance">
              <h2>30. How to Measure E-commerce SEO Performance</h2>
              <p>The biggest mistake is looking only at organic traffic.</p>
              <p>
                To see the commercial effect of SEO work, traffic and revenue have to be evaluated
                together.
              </p>
              <p>For example:</p>
              <p>Organic visits grew 30%.</p>
              <p>But all of the growth came from informational queries like “what is X?”.</p>
              <p>Category traffic did not change.</p>
              <p>Organic revenue grew only 2%.</p>
              <p>
                In that case, even though SEO visibility grew, the commercial goal was not met to
                the expected degree.
              </p>
              <p>For e-commerce SEO, these performance layers in particular should be considered together:</p>
              <p className="article-key"><strong>Visibility → Traffic → Product discovery → Cart → Purchase → Revenue</strong></p>
              <p>Brand and non-brand organic traffic should also be examined separately.</p>
              <p>Because the brand is already strong, traffic from the:</p>
              <p className="article-example">“Brand Name”</p>
              <p>query should not be presented as SEO growth.</p>
              <p>The real growth should be looked for in visibility and revenue on non-brand commercial queries such as:</p>
              <ul className="query-list">
                <li>“men’s oversized shirt”</li>
                <li>“black running shoes”</li>
                <li>“wireless headphones”</li>
              </ul>
            </section>

            <section className="article-step" id="31-how-to-calculate-seo-roi">
              <h2>31. How to Calculate SEO ROI</h2>
              <p>E-commerce SEO investment should not be evaluated on traffic alone.</p>
              <p>A simple approach might be:</p>
              <p className="article-key"><strong>(SEO-driven gross profit – SEO cost) / SEO cost</strong></p>
              <p>
                But because of attribution, measuring SEO’s real contribution is not always this
                simple.
              </p>
              <p>
                A user can discover the product organically on Google and buy it three days later by
                coming to the site directly.
              </p>
              <p>
                That is why GA4, Search Console, the CRM and, where possible, the company’s BI data
                should be analysed together.
              </p>
              <p>If the end of the SEO report only says:</p>
              <p>“We reached the top 3 on 50 keywords.”</p>
              <p>the business side’s need may not be fully met.</p>
              <p>The real question should be:</p>
              <p className="article-key"><strong>What did this visibility earn the company?</strong></p>
            </section>

            <section className="article-step" id="32-how-to-use-search-console-on-ecommerce-sites">
              <h2>32. How to Use Search Console on E-commerce Sites</h2>
              <p>Search Console data should not be used only to look at the total clicks chart.</p>
              <p>Page types should be segmented.</p>
              <ul className="article-fragments">
                <li>Category URLs separately,</li>
                <li>products separately,</li>
                <li>the blog separately,</li>
                <li>brand pages separately</li>
              </ul>
              <p>can each be examined.</p>
              <p>
                That way you can notice, for example, that category traffic is actually falling
                while overall organic traffic grows.
              </p>
              <p>
                Likewise, categories with high impressions but low CTR, or high-commercial-value
                queries sitting in positions 8–20, can be identified.
              </p>
              <p>These pages are often the source of quick SEO wins.</p>
            </section>

            <section className="article-step" id="33-measure-ecommerce-seo-and-google-merchant-center-data-together">
              <h2>33. Measure E-commerce SEO and Google Merchant Center Data Together</h2>
              <p>
                Limiting organic product visibility to classic Search Console web results is no
                longer enough.
              </p>
              <p>
                Products can appear in front of users in Google Search, Images, Shopping, Lens and
                other product discovery experiences.
              </p>
              <p>
                Merchant Center performance, product feed quality and free listing data should also
                be examined as part of the SEO and organic product discovery strategy.
              </p>
              <p>
                Rather than the SEO team and the paid shopping team forming data silos, it is
                better to set shared standards on product data.
              </p>
            </section>

            <section className="article-step" id="34-ecommerce-seo-and-geo-what-changes-for-ai-search">
              <h2>34. E-commerce SEO and GEO: What Changes for AI Search?</h2>
              <p>Users’ product discovery behaviour is no longer made of classic Google results alone.</p>
              <p>A user can now ask an AI-based search system a very detailed question like:</p>
              <p className="article-example">“recommend a good men’s running shoe under $150 that I can use in the rain”</p>
              <p>
                This shift makes it more important that product pages and content are{' '}
                <strong>structured well enough to genuinely describe the product</strong>, not just
                for keywords.
              </p>
              <p>
                Product name, brand, material, purpose, compatibility, price, stock, variants,
                images, shipping and returns should all be explicit.
              </p>
              <p>
                Google’s current guidance for its generative AI features also stresses that classic
                SEO fundamentals still apply, that no special “AI schema” is needed, and that
                original, valuable, trustworthy content matters.
              </p>
              <p>So GEO is not an alternative to technical SEO.</p>
              <p>
                Building solid AI visibility on a catalogue that cannot be technically accessed,
                indexed or understood correctly is hard too.
              </p>
            </section>

            <section className="article-step" id="35-do-ai-crawlers-need-a-separate-seo-strategy">
              <h2>35. Do AI Crawlers Need a Separate SEO Strategy?</h2>
              <p>Not every AI system uses the same crawler or retrieval mechanism.</p>
              <p>
                That is why crawler access should be checked at the robots.txt, CDN or firewall
                level.
              </p>
              <p>
                But single-file fixes like “I added llms.txt, GEO is done” are not a real strategy.
              </p>
              <p>The priorities are still:</p>
              <ul className="article-fragments">
                <li>defining the product correctly,</li>
                <li>keeping the page accessible,</li>
                <li>internal linking,</li>
                <li>high-quality product data,</li>
                <li>original content,</li>
                <li>trustworthy brand signals,</li>
                <li>structured data</li>
              </ul>
              <p>and consistent entity information.</p>
              <p>
                Google also states clearly that no special AI markup or separate machine-readable
                file is required to appear in its own AI features.
              </p>
            </section>

            <section className="article-step" id="36-how-to-do-international-ecommerce-seo">
              <h2>36. How to Do International E-commerce SEO</h2>
              <p>
                If an e-commerce site sells to different countries, translating the content is not
                enough on its own.
              </p>
              <ul className="article-fragments">
                <li>Country and language targeting,</li>
                <li>hreflang,</li>
                <li>currency,</li>
                <li>stock availability,</li>
                <li>shipping options,</li>
                <li>local search behaviour,</li>
                <li>product demand,</li>
                <li>category names</li>
              </ul>
              <p>should be evaluated together.</p>
              <p>
                A category name used in Türkiye may not carry the same demand in the German or UK
                market.
              </p>
              <p>So keyword research should be done separately for each market.</p>
              <p>Translation and localisation are not the same thing.</p>
            </section>

            <section className="article-step" id="37-do-marketplaces-affect-your-own-stores-seo">
              <h2>37. Do Marketplaces Affect Your Own Store’s SEO?</h2>
              <p>
                If you sell on marketplaces such as Amazon, Trendyol or Hepsiburada, the same
                product can exist on several strong domains across the web.
              </p>
              <p>
                Using the standard manufacturer descriptions verbatim on every channel in particular
                makes it harder for your own store to differentiate.
              </p>
              <p>Your own website’s advantage is that it can provide more information.</p>
              <ul className="article-fragments">
                <li>More detailed product content,</li>
                <li>the brand story,</li>
                <li>comparisons,</li>
                <li>real user questions,</li>
                <li>product expertise,</li>
                <li>guides</li>
              </ul>
              <p>can turn your own domain into more than just another point of sale.</p>
              <p>
                Marketplace visibility and your own site’s organic strategy are not alternatives;
                they are different customer acquisition channels.
              </p>
            </section>

            <section className="article-step" id="38-the-most-common-ecommerce-seo-mistakes">
              <h2>38. The Most Common E-commerce SEO Mistakes</h2>
              <p>
                On e-commerce SEO projects, the problem is usually not one big mistake but small
                mistakes repeated thousands of times across the catalogue.
              </p>
              <p>
                Indexing every filter, generating uncontrolled URLs for every product variant, using
                supplier descriptions verbatim, deleting sold-out products outright, redirecting
                every removed product to the category, hiding critical content behind JavaScript,
                leaving category pages as nothing but a product grid, and judging SEO performance
                on traffic alone are among the most common examples.
              </p>
              <p>
                Never forget that on an e-commerce site, a small template error spreads to thousands
                of URLs.
              </p>
              <p>
                That is why one of the most important skills in e-commerce SEO is{' '}
                <strong>being able to see the effect of scale.</strong>
              </p>
            </section>

            <section className="article-step" id="39-where-to-start-seo-on-a-new-ecommerce-site">
              <h2>39. Where to Start SEO on a New E-commerce Site</h2>
              <p>On a new site, the first job is not producing 100 blog posts.</p>
              <p>The site architecture has to be set up correctly first.</p>
              <p>
                Build the category tree and URL structure, set the crawl and index rules, optimise
                the product and category templates, set up structured data and prepare the Merchant
                Center product data.
              </p>
              <p>After that, the content layer can be built.</p>
              <p>
                Producing hundreds of pieces of content on top of the wrong site architecture can
                lead to far more expensive migrations later.
              </p>
            </section>

            <section className="article-step" id="40-where-to-start-seo-on-an-existing-large-ecommerce-site">
              <h2>40. Where to Start SEO on an Existing Large E-commerce Site</h2>
              <p>On a large site, measure the current state first.</p>
              <ul className="article-fragments">
                <li>Which URLs Google is crawling,</li>
                <li>which URLs are indexed,</li>
                <li>which categories generate revenue,</li>
                <li>how many URLs the filter system creates,</li>
                <li>the canonical structure,</li>
                <li>sitemap quality,</li>
                <li>internal linking,</li>
                <li>products that dropped out of stock,</li>
                <li>structured data errors,</li>
                <li>Merchant Center issues</li>
              </ul>
              <p>should be analysed together.</p>
              <p>
                Then prioritise the problems with an{' '}
                <strong>impact × development cost × commercial value</strong> approach.
              </p>
              <p>
                Fixing a template error on 20,000 product pages can have far more impact than
                changing the meta descriptions of 10 blog posts.
              </p>
            </section>

            <section id="checklist">
              <h2>E-commerce SEO Checklist</h2>
              <div className="table-wrapper checklist-table">
                <table>
                  <caption className="visually-hidden">E-commerce SEO checklist: area and the core point to check</caption>
                  <thead>
                    <tr>
                      <th scope="col">Area</th>
                      <th scope="col">Core point to check</th>
                    </tr>
                  </thead>
                  <tbody>
                    {checklist.map(([area, question]) => (
                      <tr key={area}>
                        <td>
                          <CheckIcon />
                          {area}
                        </td>
                        <td>{question}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="article-faq" id="faq">
              <h2>Frequently Asked Questions About E-commerce SEO</h2>
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

            <section className="article-conclusion" id="conclusion">
              <h2>Conclusion: E-commerce SEO Is a Growth System, Not a Content Task</h2>
              <p>
                E-commerce SEO has become a far broader discipline than adding keywords to product
                descriptions or changing category titles.
              </p>
              <p>
                How the product catalogue is structured, which search intents the categories serve,
                which URLs the filters generate, which pages crawlers reach, how product variants
                are defined, how stock changes are handled and how product data is passed to Google
                are all parts of the same system.
              </p>
              <p>User experience and commercial performance have to be added to that.</p>
              <p>
                Because high organic traffic is not real e-commerce success if the user cannot find
                the right product.
              </p>
              <p>
                Likewise, a category that ranks well on Google but keeps showing out-of-stock
                products does not create sustainable value for the company.
              </p>
              <p>
                So the aim of modern e-commerce SEO is not just to “reach the top of Google”.
              </p>
              <p>The aim is:</p>
              <p className="article-key">
                <strong>to understand search demand, connect the right product and category with
                the right user, and turn that visibility into measurable organic revenue.</strong>
              </p>
              <p>
                As AI Overviews, AI Mode and other AI-based search experiences join the classic
                product discovery surfaces of Google Search, Shopping, Images and Lens, this
                approach only becomes more important.
              </p>
              <p>The winning e-commerce sites will not be the ones that use more keywords;</p>
              <p className="article-key">
                <strong>they will be the brands that structure their product catalogue so that
                both people and machines can understand it most easily.</strong>
              </p>
            </section>

            <aside className="article-author" aria-label="Author">
              <p className="article-author-name">
                <Link href="/en">Kerem Gezergün</Link>
              </p>
              <p className="article-author-role">E-commerce SEO specialist · Hepsiburada</p>
            </aside>
          </article>
        </div>
      </section>

      <RelatedPosts current={PAGE_PATH} language="en" />

      {/* CTA Section */}
      <section className="cta-section" aria-labelledby="contact-heading">
        <div className="container">
          <h2 id="contact-heading">Get in touch</h2>
          <p>
            Write to me about training, speaking, a podcast guest spot or a collaboration; I am
            also happy to answer SEO questions.
          </p>
          <div className="cta-actions">
            <Link href="/en/contact" className="btn btn-primary btn-large">
              Contact form
            </Link>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn btn-outline btn-large"
            >
              Message me on WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
