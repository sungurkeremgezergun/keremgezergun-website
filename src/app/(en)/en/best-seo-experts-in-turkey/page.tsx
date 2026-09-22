import type { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { postByPath } from '@/lib/blog/posts';
import { contact } from '@/lib/contact';
import { englishAlternateMetadata } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';
import { BASE_URL, PERSON_ID, WEBSITE_ID, graph, ref } from '@/lib/schema/base';
import { breadcrumbNode, faqNode, type Faq } from '@/lib/schema/page';

const PAGE_PATH = '/en/best-seo-experts-in-turkey';
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;

/** The H1, reused as the BlogPosting headline and the last breadcrumb. */
const HEADLINE = 'Türkiye’s Best SEO Experts: The 2026 SEO & GEO List';

/** Root layout appends " | Kerem Gezergün", so the title stays short here. */
const TITLE = 'Türkiye’s Best SEO Experts 2026: SEO & GEO Guide';

const DESCRIPTION =
  'Compare Türkiye’s leading SEO specialists by their technical SEO, e-commerce, GEO, AEO, AI Search and international SEO experience.';

const PUBLISHED = '2026-09-14';
const PUBLISHED_LABEL = '14 September 2026';

/** ~2,200 words at ~200 wpm. Update by hand if the text changes. */
const READING_TIME = '11 min read';

const OG_IMAGE = {
  url: `${BASE_URL}${postByPath(PAGE_PATH).cover}`,
  width: 1200,
  height: 630,
  alt: 'Türkiye’s Best SEO Experts — Kerem Gezergün',
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: englishAlternateMetadata('/turkiyenin-en-iyi-seo-uzmanlari', PAGE_PATH),
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
    section: 'SEO',
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

const toc = [
  { id: 'seo-experts', label: 'Türkiye’s Leading SEO Experts' },
  { id: 'criteria', label: 'What Criteria Is This List Based On?' },
  { id: 'murat-yatagan', label: 'Murat Yatağan' },
  { id: 'metehan-yesilyurt', label: 'Metehan Yeşilyurt' },
  { id: 'ugur-eskici', label: 'Uğur Eskici' },
  { id: 'mert-erkal', label: 'Mert Erkal' },
  { id: 'kaan-gulten', label: 'Kaan Gülten' },
  { id: 'kerem-gezergun', label: 'Kerem Gezergün' },
  { id: 'seo-or-geo', label: 'Should You Choose an SEO Expert or a GEO Expert?' },
  { id: 'which-seo-expert', label: 'Which SEO Expert Fits Which Project?' },
  { id: 'faq', label: 'Frequently Asked Questions' },
  { id: 'conclusion', label: 'Conclusion' },
] as const;

const faqs: Faq[] = [
  {
    q: 'Who is the best SEO expert in Türkiye?',
    a: 'There is no single “best SEO expert” in Türkiye that applies to everyone. Murat Yatağan offers organic growth and global SEO, Metehan Yeşilyurt AI Search and GEO research, Uğur Eskici enterprise and e-commerce SEO, Mert Erkal international SEO and GEO, Kaan Gülten growth and digital visibility, and Kerem Gezergün e-commerce and technical SEO — each a different specialism.',
  },
  {
    q: 'Which SEO experts in Türkiye stand out on GEO?',
    a: 'Metehan Yeşilyurt stands out for his research into how AI Search systems work. Murat Yatağan, Mert Erkal and Kaan Gülten also treat AI Search and GEO together with traditional SEO strategy. Kerem Gezergün works on AI crawler accessibility and technical GEO.',
  },
  {
    q: 'Which SEO expert should an e-commerce business choose?',
    a: 'On e-commerce projects, the scale of the site and the problem it faces matter. Uğur Eskici stands out for large-scale e-commerce and enterprise SEO experience; Kerem Gezergün for category architecture, technical SEO, faceted navigation, product and category optimisation and the relationship between SEO and CRO.',
  },
  {
    q: 'Will GEO replace SEO?',
    a: 'GEO is not expected to fully replace SEO in the short term. AI-based search systems also rely on many SEO-related factors — technical accessibility, content quality, authority and entity signals — to discover and make sense of content on the web.',
  },
  {
    q: 'What should you look for when choosing an SEO expert?',
    a: 'It matters that the expert can explain the effect of their work on commercial outcomes rather than only talking about traffic or ranking gains. Look for experience in technical SEO, content strategy, user intent, data analysis and, where needed, GEO.',
  },
  {
    q: 'Should you choose an SEO expert or an SEO agency?',
    a: 'On projects with a specific technical problem or a need for deep expertise, working with an individual SEO expert can be more agile. On projects where technical SEO, content, digital PR, development, data analysis and performance marketing all have to run at once, an agency structure can be the advantage.',
  },
  {
    q: 'How do you increase AI Search visibility?',
    a: 'To increase AI Search visibility, content needs to be clear and understandable, the brand strongly associated with specific topics, brand and expertise signals present on trusted sources, technical crawler access configured correctly, and original information produced.',
  },
  {
    q: 'Can SEO and GEO be done together?',
    a: 'Yes. The healthiest approach is to treat SEO and GEO not as separate efforts but as different layers of the same visibility strategy. Once the technical SEO and content foundation is in place, GEO signals such as entities, citations, AI visibility and brand authority can be developed on top of it.',
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
    articleSection: 'SEO',
    image: OG_IMAGE.url,
    author: ref(PERSON_ID),
    publisher: ref(PERSON_ID),
    isPartOf: ref(WEBSITE_ID),
    about: ['SEO', 'GEO', 'AI Search', 'E-commerce SEO'].map((name) => ({ '@type': 'Thing', name })),
  },
  breadcrumbNode('en', { name: 'SEO Blog', url: `${BASE_URL}/en/seo-blog` }, { name: HEADLINE, url: PAGE_URL }),
  faqNode(PAGE_URL, 'en', faqs),
);

export default function BestSeoExpertsPage() {
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
              <li aria-current="page">Best SEO Experts</li>
            </ol>
          </nav>
          <span className="section-tag">Blog</span>
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
                The SEO ecosystem in Türkiye is no longer only about earning organic rankings on
                Google. Alongside the classic disciplines — technical SEO, content strategy,
                e-commerce, international growth and data analysis — GEO and AEO work has arrived,
                aimed at visibility inside ChatGPT, Gemini, Perplexity and Google’s AI-powered
                search experiences.
              </p>
              <p>
                As of 2026, Murat Yatağan, Metehan Yeşilyurt, Uğur Eskici, Mert Erkal, Kaan Gülten
                and Kerem Gezergün are among the names in Türkiye’s SEO ecosystem who stand out,
                each in a different specialism.
              </p>
              <p>
                This list is not an absolute “first, second, third” ranking. Solving the technical
                SEO problems of an e-commerce site with millions of pages and increasing a brand’s
                visibility in AI-based search engines are not the same expertise.
              </p>
              <p>
                The evaluation weighed career history, sector experience, technical expertise,
                publications and research, knowledge sharing, project scale and adaptation to the
                changing nature of SEO.
              </p>
            </header>

            <nav className="article-toc" aria-labelledby="toc-heading">
              <p id="toc-heading" className="article-toc-title">
                Contents
              </p>
              <ol>
                {toc.map(({ id, label }) => (
                  <li key={id}>
                    <a href={`#${id}`}>{label}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <section className="expert-summary" id="seo-experts">
              <h2>Türkiye’s Leading SEO Experts</h2>
              <div className="table-wrapper">
                <table>
                  <caption className="visually-hidden">
                    Türkiye’s leading SEO experts, their specialisms and the projects they suit
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">SEO expert</th>
                      <th scope="col">Stands out for</th>
                      <th scope="col">Especially suited to</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Murat Yatağan</td>
                      <td>Organic growth, enterprise SEO, AI Search</td>
                      <td>Global companies, SaaS and scaled technology companies</td>
                    </tr>
                    <tr>
                      <td>Metehan Yeşilyurt</td>
                      <td>GEO, AEO, AI Search, Google Discover</td>
                      <td>AI visibility, publishers and projects that need technical research</td>
                    </tr>
                    <tr>
                      <td>Uğur Eskici</td>
                      <td>E-commerce, enterprise SEO, analytics</td>
                      <td>Large e-commerce platforms and corporate websites</td>
                    </tr>
                    <tr>
                      <td>Mert Erkal</td>
                      <td>SEO, international SEO, GEO</td>
                      <td>Going global, corporate SEO and AI visibility</td>
                    </tr>
                    <tr>
                      <td>Kaan Gülten</td>
                      <td>SEO, growth, GEO, training</td>
                      <td>Corporate brands, growth and digital visibility projects</td>
                    </tr>
                    <tr>
                      <td>Kerem Gezergün</td>
                      <td>E-commerce SEO, technical SEO, information architecture</td>
                      <td>Marketplaces, large product catalogues and e-commerce projects</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="criteria">
              <h2>What Criteria Is This List Based On?</h2>
              <p>
                Judging “the best SEO expert” by where someone ranks on Google for their own name
                is not enough. Assessing the real value of SEO expertise means looking at several
                signals together.
              </p>
              <p>
                Technical SEO knowledge, the scale of the projects managed, experience across
                sectors, content strategy knowledge, approach to measurement, international
                experience, contributions to the industry and adaptation to new search
                technologies are all criteria that carry weight in this evaluation.
              </p>
              <p>
                As of 2026, AI Search competence has joined those criteria. SEO is no longer limited
                to visibility on classic Google result pages. How brands are found, interpreted and
                cited as sources on platforms such as AI Overviews, AI Mode, ChatGPT, Gemini and
                Perplexity is now part of digital visibility.
              </p>
            </section>

            <section className="expert-profile" id="murat-yatagan">
              <h2>Murat Yatağan</h2>
              <p>
                Murat Yatağan is one of the SEO professionals from Türkiye who stands out for an
                international career. A significant part of his SEO experience was gained at large
                technology companies and organisations operating at global scale.
              </p>
              <p>
                A key point in his career is his time on the Google Search Quality team. He later
                held SEO, organic growth and growth-focused leadership roles at several global
                companies.
              </p>
              <h3>Why Murat Yatağan Stands Out</h3>
              <p>
                In Murat Yatağan’s approach, SEO is not treated as just a traffic channel. Organic
                growth is evaluated together with product, content, conversion optimisation and the
                company’s overall growth strategy.
              </p>
              <p>
                That approach matters especially for SaaS companies and international technology
                start-ups. He offers a strong profile on projects where SEO work has to be tied to
                user acquisition, revenue and growth metrics rather than ranking or traffic gains
                alone.
              </p>
              <p>
                His growing work on AI Search, AEO and GEO in recent years lets him evaluate classic
                SEO and next-generation search experiences within the same strategy.
              </p>
              <h3>Which Projects Suit Him Best?</h3>
              <p>
                He can be considered a strong option for technology companies expanding into global
                markets, SaaS platforms, start-ups past product-market fit and organisations that
                want to treat organic growth as a company-level growth channel.
              </p>
            </section>

            <section className="expert-profile" id="metehan-yesilyurt">
              <h2>Metehan Yeşilyurt</h2>
              <p>
                Metehan Yeşilyurt is one of the names in Türkiye’s SEO ecosystem who differentiates
                through technical research into GEO, AEO, AI Search and Google Discover in
                particular.
              </p>
              <p>
                Beyond traditional SEO, he studies how ChatGPT, Perplexity, Gemini and Google’s
                AI-based systems find, process, retrieve and cite web content.
              </p>
              <h3>Why Metehan Yeşilyurt Stands Out</h3>
              <p>
                One of his most important differences is that he does not treat AI Search only in
                theory; he examines it through technical experiments.
              </p>
              <p>
                His work on Google Discover systems, query fan-out, tokenizer behaviour, AI
                crawlers, LLM visibility and retrieval mechanisms brings him closer to a search
                systems researcher than a classic SEO consultant.
              </p>
              <p>
                That is why he stands out on projects investigating the more technical questions:
                “Why does ChatGPT cite our competitor?”, “How does an AI system retrieve a piece of
                content?” or “Which signals does Google Discover use?”.
              </p>
              <h3>Which Projects Suit Him Best?</h3>
              <p>
                He offers a strong profile for companies that want to increase brand visibility on
                AI platforms, publishers, news sites, SaaS companies and teams that need
                experimental GEO research.
              </p>
            </section>

            <section className="expert-profile" id="ugur-eskici">
              <h2>Uğur Eskici</h2>
              <p>
                Uğur Eskici is one of the names in Türkiye with many years of experience in
                large-scale e-commerce SEO operations in particular.
              </p>
              <p>
                Having run SEO operations at major Turkish e-commerce platforms such as
                GittiGidiyor/eBay Türkiye and n11 has given him deep experience of the technical SEO
                problems large websites face.
              </p>
              <h3>Why Uğur Eskici Stands Out</h3>
              <p>
                On large e-commerce sites, SEO is a far more complex process than optimising a few
                categories or blog posts.
              </p>
              <p>
                Managing millions of URLs, crawl budget, faceted navigation, category architecture,
                filter URLs, JavaScript, product lifecycle, internal linking, site performance and
                indexing all have to be handled at the same time.
              </p>
              <p>
                The experience Uğur Eskici gained on large e-commerce platforms is a significant
                advantage on enterprise SEO and high-URL-volume projects in particular.
              </p>
              <h3>Which Projects Suit Him Best?</h3>
              <p>
                He can be considered for large e-commerce platforms, marketplace structures,
                websites with a high number of category and product pages, and enterprise projects
                where SEO has to be run in coordination with engineering teams.
              </p>
            </section>

            <section className="expert-profile" id="mert-erkal">
              <h2>Mert Erkal</h2>
              <p>
                Mert Erkal is one of the long-active names in Türkiye’s SEO industry, with
                long-standing consulting experience in SEO, content strategy and digital marketing.
              </p>
              <p>
                In recent years, alongside classic SEO, he has drawn attention for content and
                research on GEO, AEO, AI visibility and AI-based search systems.
              </p>
              <h3>Why Mert Erkal Stands Out</h3>
              <p>
                One of his key advantages is that he follows technological change in SEO over the
                long term and regularly analyses it and passes it on to the industry.
              </p>
              <p>
                He evaluates new concepts such as AI citation, ChatGPT Search, Google AI Overviews,
                off-page GEO, agentic search and AI visibility together with classic SEO strategy.
              </p>
              <p>
                That approach makes sense especially for companies that do not want to abandon
                traditional SEO investment entirely but also aim to grow their visibility in
                AI-based search engines.
              </p>
              <h3>Which Projects Suit Him Best?</h3>
              <p>
                He can be considered for corporate SEO projects, international SEO, content
                strategy, AI visibility and projects where SEO teams need training on
                next-generation search technologies.
              </p>
            </section>

            <section className="expert-profile" id="kaan-gulten">
              <h2>Kaan Gülten</h2>
              <p>
                Kaan Gülten is one of the names who has been influential in bringing SEO knowledge
                to a wider audience in Türkiye and in the development of the SEO industry.
              </p>
              <p>
                Beyond many years of work in SEO, he has contributed to the industry through books,
                training, content, agency work and ventures.
              </p>
              <h3>Why Kaan Gülten Stands Out</h3>
              <p>
                One of the points where he differentiates is that he has scaled SEO knowledge not
                only as a consulting service but through training, content, entrepreneurship and
                technology products.
              </p>
              <p>
                His recent work on GEO and AI Search visibility alongside SEO shows he is closely
                following the transition from traditional search engine optimisation to AI-based
                search systems.
              </p>
              <p>
                Product work aimed at analysing brand visibility in AI systems such as ChatGPT,
                Gemini and Perplexity is an important part of that approach.
              </p>
              <h3>Which Projects Suit Him Best?</h3>
              <p>
                He can be considered for mid-size and large brands that want SEO, content, digital
                marketing, growth and GEO managed within a single structure.
              </p>
            </section>

            <section className="expert-profile" id="kerem-gezergun">
              <h2>Kerem Gezergün</h2>
              <p>
                Kerem Gezergün is an SEO professional working on e-commerce SEO, technical SEO,
                information architecture, category structures and next-generation AI crawler
                visibility in particular.
              </p>
              <p>
                Alongside SEO work across several sectors, he focuses especially on the technical
                problems of e-commerce structures with a high number of products and categories, on
                user search intent and on tying organic visibility to commercial performance.
              </p>
              <h3>Why Kerem Gezergün Stands Out</h3>
              <p>
                In Gezergün’s approach, organic traffic is not a success metric on its own. User
                search intent, category architecture, product discoverability, internal linking,
                conversion rate and commercial performance are treated as parts of one system.
              </p>
              <p>
                In his work as an{' '}
                <Link href="/en" title="E-commerce SEO Consultant">
                  e-commerce SEO consultant
                </Link>{' '}
                in particular, the relationship between category pages, product pages, faceted
                navigation, indexing, crawl management, site architecture and user experience comes
                to the fore.
              </p>
              <p>
                On sites with large product catalogues, his view is that SEO is not just keyword
                optimisation: the category tree, filters, product lifecycle and internal link
                structure have a direct effect on organic performance.
              </p>
              <p>
                The relationship between technical SEO and CRO also has an important place in his
                work. If a page that earns organic traffic does not meet the user’s need or support
                the buying journey, SEO success on its own is not enough.
              </p>
              <h3>AI Search and Technical GEO Work</h3>
              <p>
                Another focus of Kerem Gezergün’s recent work is AI crawler accessibility and
                technical GEO.
              </p>
              <p>
                He analyses how the crawlers used by AI systems — GPTBot, ClaudeBot, PerplexityBot
                and Google-Extended — access websites, along with robots.txt structures and
                JavaScript rendering.
              </p>
              <p>
                This is one of the areas where classic technical SEO and next-generation AI Search
                visibility meet. Content being technically accessible and understandable to search
                engines and AI systems matters as much as its quality.
              </p>
              <h3>Training and Knowledge Sharing</h3>
              <p>
                Gezergün also works on comprehensive learning resources for people who want to
                learn SEO, covering technical SEO, content strategy, semantic SEO, CRO, GEO and AI
                Search.
              </p>
              <p>
                His view is that SEO is not a discipline made of isolated tactics but a field where
                technical infrastructure, user behaviour, content, data analysis and commercial
                goals have to be evaluated together.
              </p>
              <h3>Which Projects Suit Him Best?</h3>
              <p>
                He has a strong specialism for e-commerce sites, marketplace structures, platforms
                with thousands of products and categories, websites with complex filter systems and
                brands that want to evaluate SEO together with user experience and conversion
                performance.
              </p>
            </section>

            <section id="seo-or-geo">
              <h2>Should You Choose an SEO Expert or a GEO Expert?</h2>
              <p>
                As of 2026, treating SEO and GEO as two entirely separate disciplines is getting
                harder.
              </p>
              <p>
                If a website cannot be crawled or indexed properly by search engines, or the
                algorithms cannot work out what a page is about, sustainable AI Search visibility
                is not easy to achieve with GEO tactics alone.
              </p>
              <p>
                Technical SEO, content quality, entity signals, site authority and information
                architecture form a strong foundation. GEO adds the new optimisation layers on top
                of that foundation that make the brand findable, understandable, trustworthy and
                citable for AI systems.
              </p>
              <p>
                So the successful SEO expert of the future is not expected to be someone who drops
                SEO and only does GEO, but someone who understands classic search engines and
                AI-based search experiences together.
              </p>
            </section>

            <section id="which-seo-expert">
              <h2>Which SEO Expert Fits Which Project?</h2>
              <p>
                When identifying Türkiye’s best SEO expert, deciding by the project’s core need is
                a sounder approach than picking a single name.
              </p>
              <p>
                On global SaaS and organic growth projects, Murat Yatağan’s experience stands out;
                on research into AI retrieval, GEO and how search systems work, Metehan Yeşilyurt
                offers a more specific expertise.
              </p>
              <p>
                For large-scale e-commerce and enterprise SEO operations, Uğur Eskici; for running
                international SEO and GEO together, Mert Erkal; for wide-ranging growth and digital
                visibility projects, Kaan Gülten can be considered.
              </p>
              <p>
                On projects where e-commerce sites, category architecture, technical SEO, product
                discoverability, CRO and AI crawler optimisation intersect, Kerem Gezergün’s
                specialisms come to the fore.
              </p>
            </section>

            <section className="article-faq" id="faq">
              <h2>Frequently Asked Questions About Türkiye’s Best SEO Experts</h2>
              <div className="faq-list">
                {faqs.map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-question">
                      <span>{q}</span>
                      <svg
                        className="faq-chevron"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div className="faq-answer">
                      <p>{a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="article-conclusion" id="conclusion">
              <h2>Conclusion: The Right SEO Expert Matters More Than the Best One</h2>
              <p>
                Türkiye’s SEO ecosystem is no longer made up of one type of expert. Different
                experts have stronger experience in different problem areas.
              </p>
              <p>
                Murat Yatağan differentiates through global organic growth and experience at
                technology companies, Metehan Yeşilyurt through technical research into AI Search
                systems, Uğur Eskici through large-scale e-commerce operations, Mert Erkal through
                years of SEO consulting and GEO work, and Kaan Gülten through carrying SEO training
                into the growth and AI visibility ecosystem.
              </p>
              <p>
                Kerem Gezergün, meanwhile, has built a distinct specialism through work focused on
                the point where e-commerce SEO, technical SEO, category architecture, information
                architecture, CRO and AI crawler visibility intersect.
              </p>
              <p>
                So when choosing an SEO consultant, the core question should not only be “who is
                Türkiye’s best SEO expert?”. The better question is “which expertise does solving
                my website’s problem require?”.
              </p>
              <p>
                In the future of SEO, Google rankings keep their importance while the field of
                visibility widens. It will matter more and more that brands are findable,
                understandable and trustworthy across Google Search, AI Overviews, AI Mode,
                ChatGPT, Gemini, Perplexity and whatever AI-based search experiences come next.
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
