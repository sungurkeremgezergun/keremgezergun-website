import type { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { postByPath } from '@/lib/blog/posts';
import { contact } from '@/lib/contact';
import { englishAlternateMetadata } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';
import { BASE_URL, PERSON_ID, WEBSITE_ID, graph, ref } from '@/lib/schema/base';
import { breadcrumbNode, faqNode, type Faq } from '@/lib/schema/page';

const PAGE_PATH = '/en/seo-friendly-category-tree';
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;

/** The H1, reused as the BlogPosting headline and the last breadcrumb. */
const HEADLINE = 'How to Build an SEO-Friendly Category Tree';

/** Root layout appends " | Kerem Gezergün", so the title stays short here. */
const TITLE = HEADLINE;

const DESCRIPTION =
  'Use Semrush, Search Console, Google Ads and SERP analysis to decide which e-commerce categories to open, and build a category tree that matches search demand.';

const PUBLISHED = '2026-09-22';
const PUBLISHED_LABEL = '22 September 2026';

/** ~3,100 words at ~200 wpm. Update by hand if the text changes. */
const WORD_COUNT = 3100;
const READING_TIME = '16 min read';

const OG_IMAGE = {
  url: `${BASE_URL}${postByPath(PAGE_PATH).cover}`,
  width: 1200,
  height: 630,
  alt: 'How to Build an SEO-Friendly Category Tree — Kerem Gezergün',
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: englishAlternateMetadata('/seo-uyumlu-kategori-agaci', PAGE_PATH),
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

/** Section ids are slugs of the headings; grouped for the TOC. */
const toc = [
  {
    label: 'Foundations',
    collapsed: false,
    items: [
      { id: 'what-is-a-category-tree', label: 'What Is a Category Tree?' },
      {
        id: 'what-ecommerce-brands-miss-in-their-category-tree',
        label: 'What E-commerce Brands Miss in Their Category Tree',
      },
      {
        id: 'build-a-category-network-not-a-single-keyword',
        label: 'Build a Category Network, Not a Single Keyword',
      },
    ],
  },
  {
    label: 'Step by step',
    collapsed: false,
    items: [
      { id: 'step-1-do-the-keyword-research', label: 'Step 1: Do the Keyword Research' },
      { id: 'step-2-decide-which-subcategories-to-open', label: 'Step 2: Decide Which Subcategories to Open' },
      {
        id: 'step-3-place-the-new-category-in-the-site-architecture',
        label: 'Step 3: Place the New Category in the Site Architecture',
      },
      {
        id: 'step-4-assign-a-primary-landing-page-to-every-intent',
        label: 'Step 4: Assign a Primary Landing Page to Every Intent',
      },
    ],
  },
  {
    label: 'Operations and tracking',
    collapsed: true,
    items: [
      { id: 'when-does-keyword-cannibalization-become-a-problem', label: 'When Does Keyword Cannibalization Become a Problem?' },
      { id: 'the-most-common-category-tree-mistakes', label: 'The Most Common Category Tree Mistakes' },
      { id: 'manage-the-category-lifecycle', label: 'Manage the Category Lifecycle' },
      { id: 'how-to-track-category-performance', label: 'How to Track Category Performance' },
      { id: 'checklist', label: 'SEO-Friendly Category Tree Checklist' },
      { id: 'faq', label: 'Frequently Asked Questions' },
      { id: 'conclusion', label: 'Conclusion' },
    ],
  },
];

const faqs: Faq[] = [
  {
    q: 'What is the difference between a category tree and a filter?',
    a: 'The category tree is the site’s permanent set of product groups and the hierarchy between them. A filter lets the user narrow the products inside the current category by attributes such as colour, size, fabric or price. Not every filter option needs to become its own category; SEO categories should be created where there is real search demand and a distinct user intent.',
  },
  {
    q: 'How many subcategories should you open?',
    a: 'There is no fixed number. The count depends on search demand, product range, site size, operational capacity and SERP behaviour. The goal is not to open as many categories as possible but to build the right landing pages for the needs users actually have.',
  },
  {
    q: 'What is the minimum number of products a category needs?',
    a: 'Google has no official minimum. But the category has to offer the user a meaningful choice. On most e-commerce projects, 4–5 in-stock products is a workable operational threshold, though some categories and sectors need more.',
  },
  {
    q: 'Can you build a category tree without Semrush?',
    a: 'Yes. Google Ads Keyword Planner, Search Console and manual SERP analysis are enough for strong category research. Semrush speeds the process up but is not required.',
  },
  {
    q: 'Can the same product sit in more than one category?',
    a: 'Yes. A black mini dress, for example, can sit in both “Black Dresses” and “Mini Dresses”. It only has to genuinely match the definition of each category it is placed in.',
  },
  {
    q: 'Can Search Console be used to find category opportunities?',
    a: 'Yes. The long-tail queries a general category page collects often point at new subcategory opportunities. Look especially at specific queries with high impressions where the current page does not rank well.',
  },
  {
    q: 'Can the same keyword be used on more than one page?',
    a: 'More than one page containing the same word is not a problem. The problem is building near-identical landing pages that serve the same search intent. That is why assigning one primary landing page to each core intent is the healthier approach.',
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
    about: ['E-commerce SEO', 'Category Tree', 'Site Architecture', 'Keyword Research', 'SERP Analysis'].map(
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
                <Link href="/en">Home</Link>
              </li>
              <li>
                <Link href="/en/seo-blog">SEO Blog</Link>
              </li>
              <li aria-current="page">Category Tree Guide</li>
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
                When e-commerce SEO comes up, most brands think of product descriptions, blog posts
                or site speed. One of the areas that most directly affects organic sales potential
                is usually overlooked: <strong>the category tree.</strong>
              </p>
              <p>
                Many shopping searches on Google target a group of products, not a single item.
                Someone searching for “black dress”, “satin dress” or “white mini dress” wants to
                compare alternatives, not look at one product.
              </p>
              <p>
                That is why, for a large share of these queries, the page type Google wants to show
                is a category or product listing page rather than a product detail page.
              </p>
              <p>
                If your site only has a general “Dresses” category, you may be leaving significant
                ground to competitors on the more specific searches.
              </p>
              <p>Using the dress category as the running example, this guide covers;</p>
              <ul className="article-fragments">
                <li>which subcategories should be opened,</li>
                <li>which keywords can be targeted from existing categories,</li>
                <li>how new categories fit into the site architecture,</li>
                <li>how to prevent categories from overlapping,</li>
                <li>how to track the categories once they are live</li>
              </ul>
              <p>step by step.</p>
            </header>

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

            <section id="what-is-a-category-tree">
              <h2>What Is a Category Tree?</h2>
              <p>
                A category tree is the hierarchical structure of an e-commerce site’s product
                groups, organised into main and subcategories.
              </p>
              <p>
                Users reach products through this structure, and search engines discover the
                relationships between pages largely through the navigation and internal links it
                creates.
              </p>
              <p>A classic structure might look like this:</p>
              <pre className="article-tree">{`Women
└── Clothing
    └── Dresses`}</pre>
              <p>
                This structure makes sense for product management, but on its own it does not
                match how users actually search on Google.
              </p>
              <p>Users usually search for things like:</p>
              <ul className="query-list">
                <li>“black dress”</li>
                <li>“white dress”</li>
                <li>“mini dress”</li>
                <li>“maxi dress”</li>
                <li>“satin dress”</li>
                <li>“casual dress”</li>
                <li>“black mini dress”</li>
              </ul>
              <p>
                The purpose of an SEO-friendly category tree is to match these needs, wherever
                there is meaningful search demand, with the right landing pages.
              </p>
              <p>In other words, the category structure should be shaped not only by how the company organises its products, but also</p>
              <p className="article-key">
                <strong>by how users search for those products.</strong>
              </p>
            </section>

            <section id="what-ecommerce-brands-miss-in-their-category-tree">
              <h2>What E-commerce Brands Miss in Their Category Tree</h2>
              <p>
                Many e-commerce sites stock dozens of black dresses but have no separate “Black
                Dresses” category.
              </p>
              <p>
                The user can open the general “Dresses” category and pick black from the colour
                filter. Operationally, the need looks covered.
              </p>
              <p>From an SEO standpoint, a different question has to be asked:</p>
              <p className="article-key">
                <strong>Which URL on the site answers the “black dress” search?</strong>
              </p>
              <p>If your competitors have built a category for this query with;</p>
              <ul className="article-fragments">
                <li>its own URL,</li>
                <li>a unique title and H1,</li>
                <li>internal links,</li>
                <li>enough product variety</li>
              </ul>
              <p>
                then competing with nothing but your general dresses category becomes hard.
              </p>
              <p>
                In short: you may have the product, but not the landing page that answers the
                search demand.
              </p>
              <blockquote className="article-callout">
                <p>
                  One of the most common problems I see working with brands is that the products
                  people search for are on the site, but there is no category page that serves
                  that demand. Without adding a single product, simply regrouping the existing
                  ones around search behaviour can open up significant organic visibility.
                </p>
                <footer>
                  — <strong>Sungur Kerem Gezergün</strong>, E-commerce SEO Specialist
                </footer>
              </blockquote>
            </section>

            <section id="build-a-category-network-not-a-single-keyword">
              <h2>Build a Category Network, Not a Single Keyword</h2>
              <p>
                Focusing only on the “dress” query means pointing all of your SEO strength at the
                broadest and usually most competitive query.
              </p>
              <p>Yet the user’s need can be shaped by different attributes:</p>
              <pre className="article-tree">{`Dresses
├── By colour
│   ├── Black Dresses
│   └── White Dresses
│
├── By length
│   ├── Mini Dresses
│   ├── Midi Dresses
│   └── Maxi Dresses
│
├── By fabric
│   ├── Satin Dresses
│   └── Linen Dresses
│
├── By occasion
│   ├── Casual Dresses
│   ├── Office Dresses
│   └── Evening Dresses
│
└── By feature
    ├── Strappy Dresses
    └── Long-Sleeve Dresses`}</pre>
              <p>Some meaningful combinations may emerge later:</p>
              <pre className="article-tree">{`Dresses
└── Black Dresses
    └── Black Mini Dresses`}</pre>
              <p className="article-key">
                <strong>Not every product attribute or filter combination should become a
                category.</strong>
              </p>
              <p>
                If you have 10 colours, 6 lengths and 8 fabrics, hundreds of combinations are
                theoretically possible. Turning all of them into categories is not a sound SEO
                strategy.
              </p>
              <p>
                A category should only be created where there is real user demand, enough product
                variety and a distinct search intent.
              </p>
            </section>

            <section id="how-to-build-an-seo-friendly-category-tree">
              <h2>How to Build an SEO-Friendly Category Tree</h2>
              <p>You can build the category tree in four stages:</p>
              <ol className="article-steps">
                <li>Find the search demand.</li>
                <li>Decide which queries need their own category.</li>
                <li>Place the new category correctly in the site architecture.</li>
                <li>Assign a primary landing page to every search intent.</li>
              </ol>
            </section>

            <section className="article-step" id="step-1-do-the-keyword-research">
              <h2>Step 1: Do the Keyword Research</h2>
              <p>The first goal is to understand which phrases users search for around the product group.</p>
              <p>Four data sources are especially useful:</p>
              <ul className="article-fragments">
                <li>Semrush</li>
                <li>Google Ads Keyword Planner</li>
                <li>Google Search Console</li>
                <li>Google SERP results</li>
              </ul>

              <h3>Finding Subcategory Opportunities with Semrush</h3>
              <p>Search for your main product keyword in Semrush’s Keyword Magic Tool.</p>
              <p className="article-example">“dress”</p>
              <p>After picking your market’s database, you will see queries such as:</p>
              <ul className="query-list">
                <li>“black dress”</li>
                <li>“mini dress”</li>
                <li>“satin dress”</li>
                <li>“maxi dress”</li>
                <li>“white dress”</li>
                <li>“casual dress”</li>
              </ul>
              <p>
                The topic groups in the Keyword Magic Tool can be used to form the first category
                clusters.
              </p>
              <p>
                Keywords flagged with <strong>Commercial</strong> and <strong>Transactional</strong>{' '}
                intent are the higher-priority candidates in category research.
              </p>
              <p>For example:</p>
              <p className="article-example">“satin dress”</p>
              <p>can be a category candidate, while;</p>
              <p className="article-example">“how to iron a satin dress”</p>
              <p>is an informational search and belongs on the content side, not in a category.</p>

              <h3>Check Demand with Google Ads Keyword Planner</h3>
              <p>
                Keyword Planner in Google Ads gives you an approximate demand level for the keywords
                you have researched.
              </p>
              <p>
                You can search for your product group under “Discover new keywords”, or check the
                keyword list you built under “Get search volume and forecasts”.
              </p>
              <p>These figures should not be read as exact demand, though.</p>
              <p>In accounts without ad spend in particular, volumes appear as wide ranges:</p>
              <p className="article-example">1K – 10K</p>
              <p>Google also groups close variants into the same data set.</p>
              <p>
                So a category should never be opened on the strength of one tool’s volume figure
                alone.
              </p>

              <h3>Find Existing Category Opportunities with Search Console</h3>
              <p>
                For an e-commerce site that already gets organic traffic, one of the most valuable
                sources is Google Search Console.
              </p>
              <p>For example, select the</p>
              <p className="article-example"><code>/dresses/</code></p>
              <p>URL with the Page filter and look at which queries it gets impressions for.</p>
              <div className="table-wrapper checklist-table">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Query</th>
                      <th scope="col">Impressions</th>
                      <th scope="col">Average position</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>dress</td>
                      <td>45,000</td>
                      <td>8.2</td>
                    </tr>
                    <tr>
                      <td>black dress</td>
                      <td>12,400</td>
                      <td>15.7</td>
                    </tr>
                    <tr>
                      <td>satin dress</td>
                      <td>8,700</td>
                      <td>18.4</td>
                    </tr>
                    <tr>
                      <td>strappy dress</td>
                      <td>4,200</td>
                      <td>21.1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                When a general category page collects a high number of impressions from more
                specific queries, that points at new subcategory opportunities.
              </p>
              <p>These combinations are especially valuable:</p>
              <ul className="article-fragments">
                <li>high impressions,</li>
                <li>a specific product attribute,</li>
                <li>the current page ranking in the middle or lower positions,</li>
                <li>enough products to serve the query better.</li>
              </ul>
              <p>
                Search Console data is also valuable for catching long-tail category opportunities
                that keyword tools do not show.
              </p>

              <h3>Move the Keywords into a Decision Table</h3>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Keyword</th>
                      <th scope="col">Semrush volume</th>
                      <th scope="col">Google Ads</th>
                      <th scope="col">GSC impressions</th>
                      <th scope="col">Parent category</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>dress</td>
                      <td>…</td>
                      <td>…</td>
                      <td>…</td>
                      <td>—</td>
                    </tr>
                    <tr>
                      <td>black dress</td>
                      <td>…</td>
                      <td>…</td>
                      <td>…</td>
                      <td>Dresses</td>
                    </tr>
                    <tr>
                      <td>white dress</td>
                      <td>…</td>
                      <td>…</td>
                      <td>…</td>
                      <td>Dresses</td>
                    </tr>
                    <tr>
                      <td>black mini dress</td>
                      <td>…</td>
                      <td>…</td>
                      <td>…</td>
                      <td>Black Dresses</td>
                    </tr>
                    <tr>
                      <td>satin dress</td>
                      <td>…</td>
                      <td>…</td>
                      <td>…</td>
                      <td>Dresses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="article-step" id="step-2-decide-which-subcategories-to-open">
              <h2>Step 2: Decide Which Subcategories to Open</h2>
              <p>Not every keyword should become its own category.</p>
              <p>Four basic checks can be run on each category candidate.</p>

              <h3>Check 1: Is There Real Search Demand?</h3>
              <p>Tools like Semrush and Google Ads help you understand the demand level.</p>
              <p>But no volume in the tools does not necessarily mean nobody is searching.</p>
              <p>In particular:</p>
              <ul className="article-fragments">
                <li>new trends,</li>
                <li>niche products,</li>
                <li>seasonal queries,</li>
                <li>low-volume long-tail queries</li>
              </ul>
              <p>may not show up properly in keyword tools.</p>
              <p>
                So rather than dismissing zero-volume queries outright, evaluate them together with
                Search Console, on-site search data and the SERP results.
              </p>

              <h3>Check 2: Is There Enough Product Variety in the Category?</h3>
              <p>Google has no official minimum product count for opening a category.</p>
              <p>But the user has to be able to make a meaningful choice when they land on the category page.</p>
              <p>
                In practice, on most e-commerce scenarios <strong>4–5 in-stock products</strong> can
                be treated as an operational starting threshold.
              </p>
              <p>The number varies by category and sector.</p>
              <p>What matters is that a user landing on the</p>
              <p className="article-example">“Black Mini Dresses”</p>
              <p>category does not meet a single product.</p>
              <p>Accurate product data is critical too.</p>
              <p>If a product’s;</p>
              <ul className="article-fragments">
                <li>colour,</li>
                <li>fabric,</li>
                <li>length,</li>
                <li>occasion</li>
              </ul>
              <p>is missing or entered wrongly, it cannot be assigned to the right category.</p>
              <p>That is why the category tree is directly tied to product data quality.</p>

              <h3>Check 3: Does Google Treat This Search as a Separate Intent?</h3>
              <p>One of the most critical stages of the category decision is SERP analysis.</p>
              <p>Compare these two queries, for example:</p>
              <ul className="query-list">
                <li>“black dress”</li>
                <li>“black mini dress”</li>
              </ul>
              <p>
                The aim is to see whether Google ranks similar or different landing pages for the
                two queries.
              </p>
              <p>
                Look at as much of the <strong>top 10 organic results</strong> as you can, not just
                the first two or three.
              </p>
              <p>Check for:</p>
              <ul className="article-fragments">
                <li>Are the ranking URLs the same?</li>
                <li>Do competitors use separate “Black Mini Dresses” categories?</li>
                <li>Or are general “Black Dresses” categories ranking?</li>
                <li>Are the results mostly PLP/category pages or content pages?</li>
              </ul>

              <h4>The SERP Overlap Logic</h4>
              <p>
                If the top 10 results for two queries are largely the same URLs, Google may be
                treating the queries as similar needs.
              </p>
              <p>For example:</p>
              <ul className="query-list">
                <li>“black dress”</li>
                <li>“black dresses”</li>
              </ul>
              <p>may return largely the same results.</p>
              <p>In that case, creating two separate categories is unnecessary.</p>
              <p>By contrast, if:</p>
              <ul className="query-list">
                <li>“black dress”</li>
                <li>“black mini dress”</li>
              </ul>
              <p>
                show substantially different URL sets in the search results, “Black Mini Dresses”
                can be a separate category candidate.
              </p>
              <p>
                SERP overlap is not an automatic decision mechanism on its own, but it is a strong
                check for separating search intents.
              </p>

              <h4>An Incognito Tab Alone Does Not Mean a Neutral SERP</h4>
              <p>Checking the SERP in an incognito tab reduces the effect of personal history.</p>
              <p>But results can still be affected by;</p>
              <ul className="article-fragments">
                <li>location,</li>
                <li>device,</li>
                <li>language,</li>
                <li>search context</li>
              </ul>
              <p>and similar factors.</p>
              <p>
                So back up the manual check with Semrush SERP Analysis or a similar SERP tracking
                tool where you can.
              </p>

              <h3>Check 4: Is a Separate Landing Page Really Needed?</h3>
              <p>A query having volume does not, on its own, call for a separate category.</p>
              <p>
                Suppose that for the “black mini dress” search you see Google largely ranking
                general “Black Dresses” categories.
              </p>
              <p>
                In that case, rather than opening a separate category, it may be better to serve
                the mini dress need more fully inside the existing “Black Dresses” page.
              </p>
              <p>You can do that by:</p>
              <ul className="article-fragments">
                <li>surfacing the relevant products,</li>
                <li>mentioning mini styles in the category copy,</li>
                <li>letting the user filter down to mini options easily,</li>
                <li>linking through to related subcategories.</li>
              </ul>

              <h3>The Category Decision Table</h3>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Demand?</th>
                      <th scope="col">Enough products?</th>
                      <th scope="col">SERP shows a distinct intent?</th>
                      <th scope="col">Decision</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>Open the category</td>
                    </tr>
                    <tr>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>Target it from the best existing category</td>
                    </tr>
                    <tr>
                      <td>Yes</td>
                      <td>No</td>
                      <td>—</td>
                      <td>Target it from an existing category for now</td>
                    </tr>
                    <tr>
                      <td>Weak / unclear</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>Validate with GSC and SERP data</td>
                    </tr>
                    <tr>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>Do not open a category</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="article-step" id="step-3-place-the-new-category-in-the-site-architecture">
              <h2>Step 3: Place the New Category in the Site Architecture</h2>
              <p>Creating a category is not just opening a new URL.</p>
              <p>
                The page has to be understood as part of the site architecture by users and search
                engines alike.
              </p>

              <h3>URL Structure</h3>
              <p>The URL should be short, readable and consistent.</p>
              <p>For example:</p>
              <p className="article-example"><code>brand.com/black-dresses</code></p>
              <p>or:</p>
              <p className="article-example"><code>brand.com/dresses/black-dresses</code></p>
              <p>Either structure works.</p>
              <p>What matters is applying one consistent URL standard across the site.</p>
              <p>Avoid:</p>
              <ul className="query-list">
                <li><code>/category-123</code></li>
                <li><code>?id=4587</code></li>
              </ul>
              <p>The URL folder structure does not have to mirror the category hierarchy exactly.</p>
              <p>
                For search engines to understand the site architecture, <strong>internal links and
                the breadcrumb</strong> matter most.
              </p>

              <h3>Title and H1</h3>
              <p>Every category should carry its own primary search intent clearly.</p>
              <pre className="article-tree">{`Title: Black Dresses — Styles and Prices | Brand
H1: Black Dresses`}</pre>
              <p>Using the same title across “Black Dresses”, “White Dresses” and “Satin Dresses”:</p>
              <p className="article-example">Dresses | Brand</p>
              <p>makes it harder for the pages to differentiate.</p>

              <h3>The Canonical Tag</h3>
              <p>
                A category page opened for SEO that you want indexed should, under normal
                conditions, have a canonical tag pointing at its own URL.
              </p>
              <pre className="article-tree">{`<link rel="canonical" href="https://www.brand.com/black-dresses" />`}</pre>
              <p>Pointing the new category’s canonical at the parent:</p>
              <p className="article-example"><code>/dresses/</code></p>
              <p>makes it harder for the page to be treated as a landing page in its own right.</p>
              <p>
                So on special category pages you want indexed, a self-referencing canonical is
                usually the right approach.
              </p>

              <h3>The Indexability Check</h3>
              <p>Make sure the new category is technically indexable.</p>
              <p>The basic points to check:</p>
              <ul className="article-fragments">
                <li>Does the URL return HTTP 200?</li>
                <li>
                  Is there a <code>noindex</code> tag on the page?
                </li>
                <li>Is it blocked by robots.txt?</li>
                <li>Is the canonical tag correct?</li>
                <li>Can Google render the page’s main content?</li>
              </ul>
              <p>
                Once the category is created, a check through Search Console’s URL Inspection is
                worthwhile.
              </p>

              <h3>The XML Sitemap</h3>
              <p>Category URLs you want indexed should be in the XML sitemap.</p>
              <p>
                Updating the sitemap when a new category is created makes it easier for search
                engines to discover the new URLs.
              </p>

              <h3>The Breadcrumb</h3>
              <p>
                The category hierarchy should be shown clearly to users and search engines through
                the breadcrumb.
              </p>
              <p className="article-example">Home › Dresses › Black Dresses</p>
              <p>Breadcrumb links need to be real, crawlable links.</p>
              <p>
                Where possible, <code>BreadcrumbList</code> structured data should be applied too.
              </p>

              <h3>Internal Links Within the Tree</h3>
              <p>The new category should not be left as a URL that merely exists.</p>
              <p>Important categories can receive links from:</p>
              <ul className="article-fragments">
                <li>the main menu,</li>
                <li>the parent category,</li>
                <li>the breadcrumb,</li>
                <li>related sibling categories,</li>
                <li>relevant product pages,</li>
                <li>discovery areas inside the category.</li>
              </ul>
              <p>The main “Dresses” category, for example, can carry subcategory links such as:</p>
              <ul className="query-list">
                <li>Black Dresses</li>
                <li>White Dresses</li>
                <li>Mini Dresses</li>
                <li>Satin Dresses</li>
              </ul>

              <h3>Anchor Text</h3>
              <p>Internal link text should state the target page’s topic clearly.</p>
              <p>Better:</p>
              <p className="article-example">“Browse black dress styles.”</p>
              <p>Weaker:</p>
              <p className="article-example">“Click here.”</p>
              <p>
                But linking from every product page to every attribute category is not right
                either. Links should be genuinely meaningful and relevant to the user.
              </p>

              <h3>Make Sure the Links Are Crawlable</h3>
              <p>
                On modern e-commerce sites, category navigation is sometimes built purely through
                JavaScript interaction.
              </p>
              <p>For SEO, use real links wherever possible:</p>
              <pre className="article-tree">{`<a href="/black-dresses/">Black Dresses</a>`}</pre>
              <p>This makes it easier for Google to discover the URL and understand the site architecture.</p>

              <h3>Check That the Products Are Crawlable</h3>
              <p>Getting the category URL indexed is not enough.</p>
              <p>The products inside the category also have to be reachable by the crawler.</p>
              <p>On sites that use:</p>
              <ul className="article-fragments">
                <li>infinite scroll,</li>
                <li>load more,</li>
                <li>JavaScript-based pagination</li>
              </ul>
              <p>in particular, make sure the product URLs are discoverable by Google.</p>
            </section>

            <section className="article-step" id="step-4-assign-a-primary-landing-page-to-every-intent">
              <h2>Step 4: Assign a Primary Landing Page to Every Intent</h2>
              <p>The goal in SEO is not to have exactly one page rank for every keyword.</p>
              <p>A category will naturally appear for dozens, even hundreds, of different queries.</p>
              <p>The real goal is</p>
              <p className="article-key">
                <strong>not to create more than one landing page for the same search intent
                without reason.</strong>
              </p>
              <div className="table-wrapper checklist-table">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Keyword</th>
                      <th scope="col">Primary landing page</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>dress</td>
                      <td>
                        <code>/dresses</code>
                      </td>
                    </tr>
                    <tr>
                      <td>black dress</td>
                      <td>
                        <code>/black-dresses</code>
                      </td>
                    </tr>
                    <tr>
                      <td>black mini dress</td>
                      <td>
                        <code>/black-dresses</code>
                      </td>
                    </tr>
                    <tr>
                      <td>white dress</td>
                      <td>
                        <code>/white-dresses</code>
                      </td>
                    </tr>
                    <tr>
                      <td>satin dress</td>
                      <td>
                        <code>/satin-dresses</code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Here, if “black mini dress” does not justify its own category, it can be one of the
                secondary targets of the existing “Black Dresses” page.
              </p>
              <p>
                Keeping this mapping in a keyword mapping table becomes a major advantage as the
                category tree grows.
              </p>
            </section>

            <section id="when-does-keyword-cannibalization-become-a-problem">
              <h2>When Does Keyword Cannibalization Become a Problem?</h2>
              <p>Two pages from the same domain appearing for the same query is not a problem in itself.</p>
              <p>The problem arises mostly when:</p>
              <ul className="article-fragments">
                <li>two very similar categories exist for the same intent,</li>
                <li>Google ranks the URL you did not expect,</li>
                <li>the ranking URL keeps changing,</li>
                <li>internal links are split between two similar pages,</li>
                <li>backlinks and other signals are fragmented for no reason.</li>
              </ul>
              <p>These two categories, for example, may be too close to each other:</p>
              <ul className="query-list">
                <li><code>/black-mini-dresses</code></li>
                <li><code>/mini-black-dresses</code></li>
              </ul>
              <p>If they serve the same search intent, they should be merged under one landing page.</p>
            </section>

            <section id="the-most-common-category-tree-mistakes">
              <h2>The Most Common Category Tree Mistakes</h2>

              <h3>Turning Every Filter Combination into a Category</h3>
              <p>A product can have dozens of attributes.</p>
              <p>For example:</p>
              <ul className="query-list">
                <li>black</li>
                <li>mini</li>
                <li>satin</li>
                <li>strappy</li>
                <li>evening</li>
                <li>slim fit</li>
              </ul>
              <p>
                Turn every combination of these into a category and you can end up with hundreds or
                thousands of weak landing pages.
              </p>
              <p>A category should only be created where there is:</p>
              <ul className="article-fragments">
                <li>search demand,</li>
                <li>enough products,</li>
                <li>a distinct search intent.</li>
              </ul>

              <h3>Opening Categories Without Looking at the SERP</h3>
              <p>Keyword volume alone is not enough.</p>
              <p>
                Creating categories without checking which page types Google prefers for the query
                can multiply similar landing pages for no reason.
              </p>

              <h3>Opening All Categories at Once</h3>
              <p>Keyword research can surface hundreds of category opportunities.</p>
              <p>Opening all of them at once usually causes operational problems.</p>
              <p>Prioritise by:</p>
              <ol className="article-steps">
                <li>high demand,</li>
                <li>strong stock,</li>
                <li>clear SERP separation,</li>
                <li>high commercial value,</li>
                <li>existing organic opportunity.</li>
              </ol>
              <p>
                Build the strongest category clusters first, then widen the tree once the results
                are in.
              </p>

              <h3>Adding the Wrong Products to a Category</h3>
              <p>A category name is a promise to the user.</p>
              <p>Someone landing on “Black Dresses” wants to see black dresses.</p>
              <p>Adding unrelated products to bulk up the category count breaks the experience.</p>
              <p className="article-key">
                <strong>Fewer, correct products are worth more than many irrelevant ones.</strong>
              </p>

              <h3>Incomplete Product Data</h3>
              <p>The category tree usually depends on product attribute data.</p>
              <p>
                If colour, fabric, length or occasion is missing on the products, the category
                structure will not work properly.
              </p>
              <p>
                That is why an SEO category project is also a <strong>product data quality</strong>{' '}
                project.
              </p>

              <h3>Using the Same Title Across Subcategories</h3>
              <p>Every subcategory should carry its own search intent clearly.</p>
              <pre className="article-tree">{`Black Dresses | Brand
White Dresses | Brand
Satin Dresses | Brand`}</pre>

              <h3>Pointing the Special Category’s Canonical at the Parent</h3>
              <p>
                If you want an SEO category indexed, its canonical should normally point at its own
                URL.
              </p>
              <p>For example, pointing the canonical of:</p>
              <p className="article-example"><code>/black-dresses</code></p>
              <p>at:</p>
              <p className="article-example"><code>/dresses</code></p>
              <p>can reduce the category page’s standalone value.</p>

              <h3>Forgetting the Categories You Opened</h3>
              <p>A category tree is not a one-off SEO project.</p>
              <p>
                A category can hold 20 products the day it opens and be down to two in-stock
                products three months later.
              </p>
              <p>That is why category performance and product counts need regular tracking.</p>
            </section>

            <section id="manage-the-category-lifecycle">
              <h2>Manage the Category Lifecycle</h2>
              <p>No category keeps the same product volume forever.</p>
              <p>So the category lifecycle needs its own rules.</p>

              <h3>If Stock Has Dropped Temporarily</h3>
              <p>
                If the category is still getting search demand and products will be added again
                soon, keeping the page is more sensible than removing it outright.
              </p>

              <h3>If the Category Has Been Discontinued</h3>
              <p>If the product group will no longer be sold, depending on the situation:</p>
              <ul className="article-fragments">
                <li>a 301 redirect to the closest genuinely related category,</li>
                <li>a 404 or 410 if there is no equivalent,</li>
                <li>keeping the URL for a seasonal category and adjusting the off-season experience</li>
              </ul>
              <p>are the options to weigh.</p>
              <p>
                301 redirects should only go to pages that are truly equivalent or a close match.
              </p>
            </section>

            <section id="how-to-track-category-performance">
              <h2>How to Track Category Performance</h2>
              <p>Once a new category is live, do not only ask “did it rank?”.</p>
              <p>Metrics worth tracking:</p>
              <ul className="article-fragments">
                <li>Google Search Console impressions,</li>
                <li>organic clicks,</li>
                <li>average position,</li>
                <li>the number of non-brand queries reaching the category,</li>
                <li>organic sessions,</li>
                <li>organic revenue,</li>
                <li>conversion rate,</li>
                <li>the number of in-stock products in the category,</li>
                <li>index status,</li>
                <li>whether the wrong URL is ranking.</li>
              </ul>
              <p>
                For newly opened categories in particular, Search Console query data shows whether
                the page is really capturing the intent it was built for.
              </p>
            </section>

            <section id="checklist">
              <h2>SEO-Friendly Category Tree Checklist</h2>

              <h3>Research</h3>
              <Checklist
                items={[
                  'Keyword research done with Semrush or a similar tool.',
                  'Google Ads Keyword Planner data checked.',
                  'Search Console queries analysed.',
                  'On-site search data reviewed, where available.',
                  'Commercial and transactional queries separated out.',
                ]}
              />

              <h3>Category decision</h3>
              <Checklist
                items={[
                  'The query has real search demand.',
                  'The category has meaningful product variety.',
                  'Product attribute data is correct and complete.',
                  'The top 10 organic results reviewed.',
                  'SERP overlap checked.',
                  'The need for a separate landing page confirmed.',
                  'No existing category targets the same intent.',
                ]}
              />

              <h3>Technical setup</h3>
              <Checklist
                items={[
                  'The URL is short and readable.',
                  'The title is unique.',
                  'The H1 matches the target category.',
                  'The canonical tag points at the page itself.',
                  'The URL returns HTTP 200.',
                  'No noindex.',
                  'Not blocked by robots.txt.',
                  'Included in the XML sitemap.',
                  'Checked with Search Console URL Inspection.',
                ]}
              />

              <h3>Site architecture</h3>
              <Checklist
                items={[
                  'The breadcrumb works correctly.',
                  'Breadcrumb links are crawlable.',
                  'Breadcrumb structured data applied.',
                  'Linked from the parent category.',
                  'In the main menu, where warranted.',
                  'Linked from related sibling categories.',
                  'Linked from relevant PDPs where it helps the user.',
                  'Links are real <a href=""> links.',
                ]}
              />

              <h3>Product and operations</h3>
              <Checklist
                items={[
                  'The category only contains relevant products.',
                  'Product attribute data is correct.',
                  'New products are mapped to categories on entry.',
                  'In-stock product counts are tracked regularly.',
                  'Category products confirmed reachable by the crawler.',
                ]}
              />

              <h3>Performance tracking</h3>
              <Checklist
                items={[
                  'Search Console impressions tracked.',
                  'Organic traffic tracked.',
                  'Organic revenue tracked.',
                  'Which URL ranks for the target queries is monitored.',
                  'Action is taken when the product count drops to a critical level.',
                ]}
              />
            </section>

            <section className="article-faq" id="faq">
              <h2>Frequently Asked Questions</h2>
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
              <h2>Conclusion</h2>
              <p>Building an SEO-friendly category tree is not just opening new category URLs.</p>
              <p>The real process is</p>
              <p className="article-key">
                <strong>understanding search behaviour, analysing the product inventory, comparing
                SERP results and matching every search intent with the right landing page.</strong>
              </p>
              <p>A workable process runs like this:</p>
              <ol className="article-steps">
                <li>Find the search opportunities with Semrush, Google Ads and Search Console.</li>
                <li>Group the queries by search intent.</li>
                <li>Check the product variety.</li>
                <li>Review the top 10 organic results and the SERP overlap.</li>
                <li>Identify the queries that need their own category.</li>
                <li>
                  Set the new category up properly with its URL, title, H1, canonical and internal
                  links.
                </li>
                <li>Complete the XML sitemap and indexability checks.</li>
                <li>Assign a primary landing page to every intent.</li>
                <li>
                  Track the categories you opened by product count, organic visibility and
                  revenue.
                </li>
              </ol>
              <p>
                A well-built category tree lets your existing inventory match more search demand
                without adding a single product.
              </p>
              <p>
                If you would like to design your category tree together, from search demand,
                existing organic data and your product inventory, I can build a category and
                landing page roadmap for your brand as an{' '}
                <Link href="/en">e-commerce SEO consultant</Link>.
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
