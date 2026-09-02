// Every user-visible roadmap string carries both languages. This replaced a
// phrase-substitution "translator" that produced broken English for roughly
// two thirds of the page — see git history. Do not reintroduce runtime
// translation here: add the English text alongside the Turkish instead.
import type { Localized } from '@/lib/i18n';

export type ResourceType =
  | 'guide'
  | 'course'
  | 'video'
  | 'blog'
  | 'tool'
  | 'template'
  | 'extension'
  | 'podcast'
  | 'newsletter'
  | 'event';

export type RoadmapResource = {
  href: string;
  type: ResourceType;
  author: string;
  title: Localized;
};

export type RoadmapSubsection = { title: Localized; resources: RoadmapResource[] };

export type RoadmapSection = {
  title: Localized;
  desc: Localized;
  defaultOpen?: boolean;
  subsections: RoadmapSubsection[];
};

export const resourceTypeLabels: Record<ResourceType, Localized> = {
  guide: { tr: 'Rehber', en: 'Guide' },
  course: { tr: 'Kurs', en: 'Course' },
  video: { tr: 'Video', en: 'Video' },
  blog: { tr: 'Blog', en: 'Blog' },
  tool: { tr: 'Araç', en: 'Tool' },
  template: { tr: 'Şablon', en: 'Template' },
  extension: { tr: 'Eklenti', en: 'Extension' },
  podcast: { tr: 'Podcast', en: 'Podcast' },
  newsletter: { tr: 'Bülten', en: 'Newsletter' },
  event: { tr: 'Etkinlik', en: 'Event' },
};

export const roadmapSections: RoadmapSection[] = [
  {
    title: { tr: 'HTML & CSS Temelleri', en: 'HTML & CSS Fundamentals' },
    desc: { tr: 'SEO için gerekli HTML ve CSS temel bilgilerini edinin.', en: 'Pick up the HTML and CSS foundations that technical SEO work depends on.' },
    defaultOpen: true,
    subsections: [
      {
        title: { tr: 'HTML Temelleri', en: 'HTML Fundamentals' },
        resources: [
          {
            href: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics',
            type: 'guide',
            author: 'Mozilla',
            title: { tr: 'HTML Temelleri (MDN)', en: 'HTML Basics (MDN)' },
          },
          {
            href: 'https://www.w3schools.com/html/',
            type: 'course',
            author: 'W3Schools',
            title: { tr: 'W3Schools HTML Eğitimi', en: 'W3Schools HTML Tutorial' },
          },
          {
            href: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
            type: 'course',
            author: 'freeCodeCamp',
            title: { tr: 'freeCodeCamp HTML/CSS Eğitimi', en: 'freeCodeCamp HTML/CSS Course' },
          },
        ],
      },
      {
        title: { tr: 'SEO için HTML & CSS', en: 'HTML & CSS for SEO' },
        resources: [
          {
            href: 'https://ahrefs.com/blog/html-for-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO için Bilinmesi Gereken HTML Etiketleri', en: 'HTML for SEO: The Tags You Need to Know' },
          },
          {
            href: 'https://www.searchenginejournal.com/important-tags-seo/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'SEO Dostu HTML Etiketleri', en: 'The Most Important HTML Tags for SEO' },
          },
          {
            href: 'https://moz.com/blog/accessibility-seo',
            type: 'guide',
            author: 'Moz',
            title: { tr: 'Web Erişilebilirlik ve SEO İlişkisi', en: 'How Web Accessibility and SEO Relate' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'SEO\'ya Giriş ve Temel Kavramlar', en: 'Introduction to SEO and Core Concepts' },
    desc: { tr: 'SEO\'nun ne olduğunu, arama motorlarının nasıl çalıştığını ve temel terminolojiyi kavrayın.', en: 'Understand what SEO is, how search engines work and the core terminology.' },
    subsections: [
      {
        title: { tr: 'SEO Nedir ve Neden Önemlidir', en: 'What SEO Is and Why It Matters' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google SEO Başlangıç Rehberi', en: 'Google SEO Starter Guide' },
          },
          {
            href: 'https://www.google.com/search/howsearchworks/',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google Arama Nasıl Çalışır', en: 'How Google Search Works' },
          },
          {
            href: 'https://moz.com/beginners-guide-to-seo',
            type: 'guide',
            author: 'Moz',
            title: { tr: 'Yeni Başlayanlar İçin SEO Rehberi', en: 'The Beginner\'s Guide to SEO' },
          },
          {
            href: 'https://ahrefs.com/blog/what-is-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO Nedir? Arama Motoru Optimizasyonu Açıklaması', en: 'What Is SEO? Search Engine Optimization Explained' },
          },
          {
            href: 'https://www.semrush.com/academy/courses/seo-fundamentals/',
            type: 'course',
            author: 'Semrush Academy',
            title: { tr: 'SEO Temelleri Kursu', en: 'SEO Fundamentals Course' },
          },
          {
            href: 'https://backlinko.com/seo-this-year',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'SEO: Kapsamlı Rehber', en: 'SEO: The Complete Guide' },
          },
        ],
      },
      {
        title: { tr: 'Arama Motorlarının Yapısı ve İşleyişi', en: 'How Search Engines Are Built and Operate' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/fundamentals/how-search-works',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google Arama Derinlemesine Nasıl Çalışır', en: 'How Google Search Works (In Depth)' },
          },
          {
            href: 'https://developers.google.com/search/docs/crawling-indexing',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google Tarama, İndeksleme ve Sunma', en: 'Crawling, Indexing and Serving' },
          },
          {
            href: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google Sıralama Sistemleri Rehberi', en: 'A Guide to Google Ranking Systems' },
          },
          {
            href: 'https://ahrefs.com/blog/search-engine-indexing/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Arama Motoru İndeksleme: Nasıl Çalışır', en: 'Search Engine Indexing: How It Works' },
          },
          {
            href: 'https://www.youtube.com/watch?v=0eKVizvYSUQ',
            type: 'video',
            author: 'Google',
            title: { tr: 'Google Arama Nasıl Çalışır (Video)', en: 'How Google Search Works (Video)' },
          },
        ],
      },
      {
        title: { tr: 'SEO Terimleri ve Sözlük', en: 'SEO Terminology and Glossaries' },
        resources: [
          {
            href: 'https://ahrefs.com/seo/glossary',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO Sözlüğü: 250+ Terimin Açıklaması', en: 'SEO Glossary: 250+ Terms Explained' },
          },
          {
            href: 'https://moz.com/learn/seo/seo-glossary',
            type: 'guide',
            author: 'Moz',
            title: { tr: 'SEO Sözlüğü: Temel SEO Terimleri', en: 'SEO Glossary: Essential SEO Terms' },
          },
          {
            href: 'https://developers.google.com/search/docs/glossary',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google Arama Merkezi Sözlüğü', en: 'Google Search Central Glossary' },
          },
          {
            href: 'https://www.searchenginejournal.com/seo-guide/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'SEO Kapsamlı Rehberi', en: 'The Complete SEO Guide' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'SEO Stratejisi ve Yol Haritası', en: 'SEO Strategy and Roadmapping' },
    desc: { tr: 'Etkili bir SEO stratejisi oluşturun, hedeflerinizi belirleyin ve önceliklendirin.', en: 'Build an effective SEO strategy, set goals and decide what to work on first.' },
    subsections: [
      {
        title: { tr: 'SEO Stratejisi Oluşturma', en: 'Building an SEO Strategy' },
        resources: [
          {
            href: 'https://backlinko.com/seo-strategy',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Etkili Bir SEO Stratejisi Nasıl Oluşturulur', en: 'How to Create an Effective SEO Strategy' },
          },
          {
            href: 'https://blog.hubspot.com/marketing/seo-strategy',
            type: 'guide',
            author: 'HubSpot',
            title: { tr: 'SEO Stratejisi Oluşturma [Şablon Dahil]', en: 'How to Build an SEO Strategy [Template Included]' },
          },
          {
            href: 'https://searchengineland.com/seo-strategy-strategic-seo-planning-437603',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'SEO Stratejisi: Stratejik SEO Planlamasının 3 Adımı', en: 'SEO Strategy: The 3 Steps of Strategic SEO Planning' },
          },
          {
            href: 'https://ahrefs.com/blog/seo-roadmap/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: '7 Adımda SEO Yol Haritası Oluşturma', en: 'How to Build an SEO Roadmap in 7 Steps' },
          },
          {
            href: 'https://backlinko.com/seo-roadmap',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Performans Odaklı SEO Yol Haritası Nasıl Kurulur', en: 'How to Build a Performance-Driven SEO Roadmap' },
          },
        ],
      },
      {
        title: { tr: 'SEO Hedef Belirleme ve Önceliklendirme', en: 'Goal Setting and Prioritization' },
        resources: [
          {
            href: 'https://searchengineland.com/smart-goals-seo-288724',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'SMART SEO Hedefleri Nasıl Belirlenir (Örneklerle)', en: 'How to Set SMART SEO Goals (With Examples)' },
          },
          {
            href: 'https://searchengineland.com/seo-goals-strategy-planning-453492',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'SEO Yürütme: Hedefler, Strateji ve Planlama', en: 'Executing SEO: Goals, Strategy and Planning' },
          },
          {
            href: 'https://www.searchenginejournal.com/set-achieve-realistic-seo-goals/288839/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Gerçekçi SEO Hedefleri Nasıl Belirlenir ve Ulaşılır', en: 'How to Set and Achieve Realistic SEO Goals' },
          },
          {
            href: 'https://searchengineland.com/seo-prioritization-how-to-focus-on-what-moves-the-needle-452482',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'SEO Önceliklendirme: Fark Yaratana Odaklanma', en: 'SEO Prioritization: Focusing on What Moves the Needle' },
          },
          {
            href: 'https://searchengineland.com/how-to-set-goals-for-your-seo-team-447742',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'SEO Ekibiniz İçin Hedefler Nasıl Belirlenir', en: 'How to Set Goals for Your SEO Team' },
          },
        ],
      },
      {
        title: { tr: 'PPC ve SEO Sinerjisi', en: 'PPC and SEO Synergy' },
        resources: [
          {
            href: 'https://www.searchenginejournal.com/combine-seo-ppc-data/370544/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'SEO ve PPC Verilerini Birleştirerek Daha Güçlü Sonuçlar Elde Etme', en: 'Combine SEO and PPC Data for Stronger Results' },
          },
          {
            href: 'https://searchengineland.com/ppc-seo-co-optimization-audits-446907',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'PPC ve SEO Verileriyle Ortak Optimizasyon Denetimleri', en: 'PPC and SEO Co-Optimization Audits' },
          },
          {
            href: 'https://www.semrush.com/blog/ppc-and-seo-working-together/',
            type: 'blog',
            author: 'Semrush',
            title: { tr: 'PPC ve SEO\'nun Birlikte Çalışma Gücü', en: 'The Power of PPC and SEO Working Together' },
          },
          {
            href: 'https://backlinko.com/seo-and-ppc',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'SEO ve PPC: Maksimum ROI İçin 8 Hizalama Yolu', en: 'SEO and PPC: 8 Ways to Align Them for Maximum ROI' },
          },
          {
            href: 'https://searchengineland.com/end-seo-ppc-silos-unified-search-strategy-ai-era-463006',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'SEO-PPC Silolarının Sonu: AI Çağında Birleşik Arama Stratejisi', en: 'The End of SEO-PPC Silos: A Unified Search Strategy for the AI Era' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Anahtar Kelime Araştırması', en: 'Keyword Research' },
    desc: { tr: 'Hedef kitlenizin arama davranışını anlayarak doğru kelimeleri hedefleyin.', en: 'Target the right queries by understanding how your audience actually searches.' },
    subsections: [
      {
        title: { tr: 'Anahtar Kelime Araştırma Süreci', en: 'The Keyword Research Process' },
        resources: [
          {
            href: 'https://ahrefs.com/blog/keyword-research/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Anahtar Kelime Araştırması: Başlangıç Rehberi', en: 'Keyword Research: A Beginner\'s Guide' },
          },
          {
            href: 'https://www.semrush.com/blog/keyword-research/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Anahtar Kelime Araştırması Nasıl Yapılır (6 Yol)', en: 'How to Do Keyword Research (6 Methods)' },
          },
          {
            href: 'https://backlinko.com/keyword-research-tools',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'En İyi 8 Anahtar Kelime Araştırma Aracı', en: 'The 8 Best Keyword Research Tools' },
          },
          {
            href: 'https://ahrefs.com/academy/keyword-research-course',
            type: 'course',
            author: 'Ahrefs Academy',
            title: { tr: 'Anahtar Kelime Araştırma Kursu', en: 'Keyword Research Course' },
          },
          {
            href: 'https://www.semrush.com/academy/courses/keyword-research-essentials-with-semrush/',
            type: 'course',
            author: 'Semrush Academy',
            title: { tr: 'Anahtar Kelime Araştırma Temelleri', en: 'Keyword Research Essentials' },
          },
        ],
      },
      {
        title: { tr: 'Anahtar Kelime Zorluk ve Fırsat Analizi', en: 'Keyword Difficulty and Opportunity Analysis' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/keyword-difficulty/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Anahtar Kelime Zorluğu Nedir? Nasıl Ölçülür', en: 'What Is Keyword Difficulty and How Is It Measured?' },
          },
          {
            href: 'https://ahrefs.com/blog/keyword-difficulty/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Anahtar Kelime Zorluğu: Sıralama Şansınızı Tahmin Edin', en: 'Keyword Difficulty: Estimating Your Chances of Ranking' },
          },
          {
            href: 'https://www.semrush.com/blog/how-to-choose-long-tail-keywords/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Uzun Kuyruklu Anahtar Kelimeler: Kapsamlı Rehber', en: 'Long-Tail Keywords: A Complete Guide' },
          },
          {
            href: 'https://ahrefs.com/blog/long-tail-vs-short-tail-keywords/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Uzun Kuyruklu ve Kısa Kuyruklu Anahtar Kelimeler', en: 'Long-Tail vs Short-Tail Keywords' },
          },
        ],
      },
      {
        title: { tr: 'Rakip Anahtar Kelime Analizi', en: 'Competitor Keyword Analysis' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/competitor-keywords/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Rakip Anahtar Kelimeleri: Bulma ve Kazanma Yolları', en: 'Competitor Keywords: How to Find and Win Them' },
          },
          {
            href: 'https://ahrefs.com/blog/competitor-keywords/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Rakip Anahtar Kelimeleri Nasıl Bulunur ve Kullanılır', en: 'How to Find and Use Competitor Keywords' },
          },
          {
            href: 'https://www.semrush.com/blog/keyword-gap-analysis/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Anahtar Kelime Boşluk Analizi Nedir ve Nasıl Yapılır', en: 'What Keyword Gap Analysis Is and How to Do It' },
          },
          {
            href: 'https://ahrefs.com/blog/content-gap-analysis/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'İçerik Boşluk Analizi Nasıl Yapılır [Şablon Dahil]', en: 'How to Run a Content Gap Analysis [Template Included]' },
          },
        ],
      },
      {
        title: { tr: 'Konu Kümeleri ve Anahtar Kelime Haritalama', en: 'Topic Clusters and Keyword Mapping' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/topic-clusters/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'SEO İçin Konu Kümeleri: Nedir ve Nasıl Oluşturulur', en: 'Topic Clusters for SEO: What They Are and How to Build Them' },
          },
          {
            href: 'https://blog.hubspot.com/marketing/topic-clusters-seo',
            type: 'guide',
            author: 'HubSpot',
            title: { tr: 'Konu Kümeleri: SEO\'nun Bir Sonraki Evrimi', en: 'Topic Clusters: The Next Evolution of SEO' },
          },
          {
            href: 'https://backlinko.com/keyword-mapping',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Anahtar Kelime Haritalama: Adım Adım Rehber', en: 'Keyword Mapping: A Step-by-Step Guide' },
          },
          {
            href: 'https://www.semrush.com/blog/pillar-page/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Temel Sayfa (Pillar Page) Nedir ve Nasıl Oluşturulur', en: 'What a Pillar Page Is and How to Create One' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Arama Niyeti (Search Intent) Derin Analizi', en: 'Search Intent in Depth' },
    desc: { tr: 'Kullanıcıların arama arkasındaki gerçek amacını çözümleyin ve içeriğinizi buna göre şekillendirin.', en: 'Read the real goal behind a query and shape your content around it.' },
    subsections: [
      {
        title: { tr: 'Arama Niyeti Türleri ve Sınıflandırma', en: 'Search Intent Types and Classification' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/search-intent/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Arama Niyeti Nedir? Nasıl Belirlenir ve Optimize Edilir', en: 'What Is Search Intent? How to Identify and Optimize for It' },
          },
          {
            href: 'https://ahrefs.com/blog/search-intent/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO\'da Arama Niyeti: Nedir ve Nasıl Optimize Edilir', en: 'Search Intent in SEO: What It Is and How to Optimize for It' },
          },
          {
            href: 'https://backlinko.com/hub/seo/search-intent',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Arama Niyeti ve SEO: Kullanıcı Hedeflerine Göre Optimize Edin', en: 'Search Intent and SEO: Optimizing for User Goals' },
          },
          {
            href: 'https://www.semrush.com/blog/types-of-keywords-commercial-informational-navigational-transactional/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'SEO\'da 4 Anahtar Kelime Türü (Örneklerle)', en: 'The 4 Types of Keywords in SEO (With Examples)' },
          },
        ],
      },
      {
        title: { tr: 'Niyet Eşleştirme ve İçerik Uyumu', en: 'Intent Matching and Content Fit' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Yararlı, Güvenilir ve Kullanıcı Odaklı İçerik Oluşturma', en: 'Creating Helpful, Reliable, People-First Content' },
          },
          {
            href: 'https://ahrefs.com/blog/content-gap-analysis/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'İçerik Boşluk Analizi: Eksikleri Bulun', en: 'Content Gap Analysis: Finding What\'s Missing' },
          },
          {
            href: 'https://backlinko.com/skyscraper-technique',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Gökdelen Tekniği: Rakipleri Geride Bırakan İçerik Oluşturma', en: 'The Skyscraper Technique: Creating Content That Outranks Competitors' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'SERP Analizi ve Rakip Sayfa İncelemesi', en: 'SERP Analysis and Competitor Page Review' },
    desc: { tr: 'Arama sonuçlarını analiz ederek rakiplerinizin stratejilerini çözün.', en: 'Analyse search results to work out what competitors are doing and why it ranks.' },
    subsections: [
      {
        title: { tr: 'SERP Yapısını Anlama', en: 'Understanding SERP Structure' },
        resources: [
          {
            href: 'https://backlinko.com/hub/seo/serp-features',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'SERP Özellikleri: Nedir ve Neden Önemlidir', en: 'SERP Features: What They Are and Why They Matter' },
          },
          {
            href: 'https://www.semrush.com/blog/serp-features-guide/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'SERP Özellikleri Nelerdir? Türleri ve Optimizasyonu', en: 'What Are SERP Features? Types and Optimization' },
          },
          {
            href: 'https://ahrefs.com/blog/competitor-keywords/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Rakip Anahtar Kelimeleri Nasıl Bulunur ve Analiz Edilir', en: 'How to Find and Analyse Competitor Keywords' },
          },
          {
            href: 'https://backlinko.com/find-competitors-keywords',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Rakiplerinizin Anahtar Kelimelerini Bulma', en: 'How to Find Your Competitors\' Keywords' },
          },
        ],
      },
      {
        title: { tr: 'Featured Snippet ve PAA Optimizasyonu', en: 'Featured Snippet and PAA Optimization' },
        resources: [
          {
            href: 'https://ahrefs.com/blog/featured-snippets/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Öne Çıkan Snippet\'lar: Google\'da Zirveye Kısayol', en: 'Featured Snippets: A Shortcut to the Top of Google' },
          },
          {
            href: 'https://www.searchenginejournal.com/featured-snippets-optimization/410622/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Google Öne Çıkan Snippet İçin Optimizasyon: 12 Adım', en: 'How to Optimize for Google Featured Snippets: 12 Steps' },
          },
          {
            href: 'https://backlinko.com/hub/seo/featured-snippets',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Öne Çıkan Snippet: Google\'da Sıfır Pozisyonunu Yakalamak', en: 'Featured Snippets: How to Win Position Zero on Google' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Site İçi SEO (On-Page)', en: 'On-Page SEO' },
    desc: { tr: 'Her sayfayı arama motorları ve kullanıcılar için optimize edin.', en: 'Optimize every page for both search engines and the people reading it.' },
    subsections: [
      {
        title: { tr: 'Title Tag ve Meta Description', en: 'Title Tags and Meta Descriptions' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/appearance/title-link',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google Aramada Başlık Bağlantılarını Etkileme', en: 'Influence Your Title Links in Google Search' },
          },
          {
            href: 'https://developers.google.com/search/docs/appearance/snippet',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Arama Sonuçlarında Snippet Kontrolü', en: 'Control Your Snippets in Search Results' },
          },
          {
            href: 'https://www.semrush.com/blog/title-tag/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Title Tag Nedir? Nasıl Optimize Edilir', en: 'What Is a Title Tag and How Do You Optimize It?' },
          },
          {
            href: 'https://backlinko.com/meta-tags',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Meta Etiketler: Nedir ve Nasıl Kullanılır', en: 'Meta Tags: What They Are and How to Use Them' },
          },
        ],
      },
      {
        title: { tr: 'Başlık Hiyerarşisi ve URL Yapısı', en: 'Heading Hierarchy and URL Structure' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/heading-tags/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Başlık Etiketleri Nedir? Neden Önemlidir', en: 'What Are Heading Tags and Why Do They Matter?' },
          },
          {
            href: 'https://backlinko.com/h1-tag',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'H1 Etiketi: En İyi Uygulamalar ve Stratejiler', en: 'The H1 Tag: Best Practices and Strategies' },
          },
          {
            href: 'https://developers.google.com/search/docs/crawling-indexing/url-structure',
            type: 'guide',
            author: 'Google',
            title: { tr: 'URL Yapısı En İyi Uygulamaları', en: 'URL Structure Best Practices' },
          },
          {
            href: 'https://ahrefs.com/blog/seo-friendly-urls/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO Dostu URL\'ler Nasıl Oluşturulur', en: 'How to Create SEO-Friendly URLs' },
          },
        ],
      },
      {
        title: { tr: 'İç Bağlantı (Internal Linking) Stratejisi', en: 'Internal Linking Strategy' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/internal-links/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'İç Bağlantılar: Kapsamlı Rehber ve Stratejiler', en: 'Internal Links: A Complete Guide and Strategies' },
          },
          {
            href: 'https://ahrefs.com/blog/internal-links-for-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO İçin İç Bağlantılar: Uygulanabilir Rehber', en: 'Internal Links for SEO: An Actionable Guide' },
          },
          {
            href: 'https://backlinko.com/hub/seo/internal-links',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'SEO İçin İç Bağlantı: Kapsamlı Rehber', en: 'Internal Linking for SEO: The Complete Guide' },
          },
          {
            href: 'https://developers.google.com/search/docs/crawling-indexing/links-crawlable',
            type: 'guide',
            author: 'Google',
            title: { tr: 'SEO Bağlantı En İyi Uygulamaları', en: 'Link Best Practices for SEO' },
          },
        ],
      },
      {
        title: { tr: 'İçerik Optimizasyonu', en: 'Content Optimization' },
        resources: [
          {
            href: 'https://backlinko.com/on-page-seo',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'On-Page SEO: Kesin Rehber', en: 'On-Page SEO: The Definitive Guide' },
          },
          {
            href: 'https://ahrefs.com/blog/on-page-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'On-Page SEO: Hem Robotlar Hem Okuyucular İçin Optimizasyon', en: 'On-Page SEO: Optimizing for Bots and Readers Alike' },
          },
          {
            href: 'https://www.semrush.com/blog/content-optimization-guide',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'İçerik Optimizasyonu: SEO\'yu Güçlendiren 15 Taktik', en: 'Content Optimization: 15 Tactics That Strengthen SEO' },
          },
          {
            href: 'https://developers.google.com/search/docs/appearance/page-experience',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google Sayfa Deneyimini Anlama', en: 'Understanding Google Page Experience' },
          },
          {
            href: 'https://www.semrush.com/academy/courses/on-page-seo-essentials-with-semrush/',
            type: 'course',
            author: 'Semrush Academy',
            title: { tr: 'On-Page SEO Temelleri Kursu', en: 'On-Page SEO Essentials Course' },
          },
        ],
      },
      {
        title: { tr: 'Landing Page Optimizasyonu', en: 'Landing Page Optimization' },
        resources: [
          {
            href: 'https://ahrefs.com/blog/landing-page-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO İçin Landing Page Oluşturma ve Optimize Etme', en: 'Creating and Optimizing Landing Pages for SEO' },
          },
          {
            href: 'https://www.semrush.com/blog/landing-page-optimization/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Landing Page Optimizasyonu Nedir ve Nasıl Yapılır', en: 'What Landing Page Optimization Is and How to Do It' },
          },
          {
            href: 'https://www.semrush.com/blog/seo-landing-page/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Landing Page\'ler İçin SEO: SERP\'te Sıralanma Yöntemleri', en: 'SEO for Landing Pages: How to Rank in the SERPs' },
          },
          {
            href: 'https://searchengineland.com/landing-pages-seo-conversions-447672',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'SEO ve Dönüşümü Artıran Landing Page Tasarımı', en: 'Designing Landing Pages That Lift SEO and Conversions' },
          },
          {
            href: 'https://neilpatel.com/blog/the-definitive-guide-to-creating-high-converting-landing-pages/',
            type: 'guide',
            author: 'Neil Patel',
            title: { tr: 'Yüksek Dönüşümlü Landing Page Oluşturma Rehberi', en: 'The Definitive Guide to Creating High-Converting Landing Pages' },
          },
        ],
      },
      {
        title: { tr: 'Organik Tıklama Oranı (CTR) Optimizasyonu', en: 'Organic Click-Through Rate Optimization' },
        resources: [
          {
            href: 'https://backlinko.com/google-ctr-stats',
            type: 'blog',
            author: 'Backlinko',
            title: { tr: '4 Milyon Google Arama Sonucunu Analiz Ettik: Organik TO', en: 'We Analysed 4 Million Google Search Results: Organic CTR' },
          },
          {
            href: 'https://ahrefs.com/blog/how-to-improve-ctr/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Tıklama Oranını (CTR) İyileştirmenin 9 Kanıtlanmış Yolu', en: '9 Proven Ways to Improve Your Click-Through Rate' },
          },
          {
            href: 'https://www.semrush.com/blog/organic-ctr/',
            type: 'blog',
            author: 'Semrush',
            title: { tr: 'Organik CTR SEO\'yu Nasıl Etkiler? (5 İyileştirme Yolu)', en: 'How Organic CTR Affects SEO (and 5 Ways to Improve It)' },
          },
          {
            href: 'https://searchengineland.com/seo-page-titles-meta-descriptions-clicks-448381',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Başlıklar ve Meta Açıklamalar: Daha Fazla Tıklama Kazanma', en: 'Page Titles and Meta Descriptions: Earning More Clicks' },
          },
          {
            href: 'https://www.searchenginejournal.com/boost-google-organic-click-through-rate/381736/',
            type: 'blog',
            author: 'Search Engine Journal',
            title: { tr: 'Google\'da Organik TO\'yu Artırmanın 12 Kanıtlanmış Adımı', en: '12 Proven Steps to Boost Organic Click-Through Rate on Google' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'SEO Uyumlu İçerik Üretimi', en: 'Search-Led Content Production' },
    desc: { tr: 'Hem kullanıcıya hem arama motorlarına hitap eden, kaliteli içerikler oluşturun.', en: 'Create genuinely useful content that also satisfies search engines.' },
    subsections: [
      {
        title: { tr: 'İçerik Stratejisi ve Planlama', en: 'Content Strategy and Planning' },
        resources: [
          {
            href: 'https://ahrefs.com/blog/content-strategy/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Sıfırdan İçerik Stratejisi Nasıl Kurulur', en: 'How to Build a Content Strategy From Scratch' },
          },
          {
            href: 'https://backlinko.com/content-marketing-guide',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'İçerik Pazarlama: Kesin Rehber', en: 'Content Marketing: The Definitive Guide' },
          },
          {
            href: 'https://ahrefs.com/blog/topic-clusters/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Konu Kümeleri: Site Otoritesi Nasıl Artırılır', en: 'Topic Clusters: How to Build Site Authority' },
          },
          {
            href: 'https://ahrefs.com/blog/content-gap-analysis/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Rakiplerin Yazdığı Ama Sizde Olmayan Konuları Bulun', en: 'Find the Topics Competitors Cover and You Don\'t' },
          },
        ],
      },
      {
        title: { tr: 'SEO Metin Yazarlığı (Copywriting)', en: 'SEO Copywriting' },
        resources: [
          {
            href: 'https://ahrefs.com/blog/how-to-write-a-blog-post/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Sıralanan Blog Yazısı Nasıl Yazılır', en: 'How to Write a Blog Post That Ranks' },
          },
          {
            href: 'https://backlinko.com/seo-copywriting',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'SEO Metin Yazarlığı: Kesin Rehber', en: 'SEO Copywriting: The Definitive Guide' },
          },
          {
            href: 'https://ahrefs.com/blog/evergreen-content/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Zamansız (Evergreen) İçerik Nasıl Oluşturulur', en: 'How to Create Evergreen Content' },
          },
          {
            href: 'https://ahrefs.com/blog/content-refresh/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'İçerik Güncelleme: Eski Yazılarla Trafiği Geri Kazanma', en: 'Content Refreshes: Winning Traffic Back With Old Posts' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'İçerik Yaşam Döngüsü Yönetimi', en: 'Content Lifecycle Management' },
    desc: { tr: 'İçerik çürümesi, budama, güncelleme ve anahtar kelime yamyamlığı ile içerik portföyünüzü yönetin.', en: 'Manage your content portfolio through decay, pruning, refreshes and cannibalization.' },
    subsections: [
      {
        title: { tr: 'İçerik Çürümesi ve Güncelleme', en: 'Content Decay and Refreshes' },
        resources: [
          {
            href: 'https://searchengineland.com/guide/content-decay',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'İçerik Çürümesi: Nedir ve Trafik Düşüşleri Nasıl Tersine Çevrilir', en: 'Content Decay: What It Is and How to Reverse Traffic Declines' },
          },
          {
            href: 'https://ahrefs.com/blog/content-decay/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'İçerik Çürümesi Nedir? (Trafiğinizi Çökertmeden Nasıl Düzeltilir)', en: 'What Is Content Decay? (And How to Fix It Before Traffic Collapses)' },
          },
          {
            href: 'https://www.searchenginejournal.com/content-decay-and-refresh-strategies-to-maintain-site-relevancy/524723/',
            type: 'blog',
            author: 'Search Engine Journal',
            title: { tr: 'Site Güncelliğini Korumak İçin İçerik Yenileme Stratejileri', en: 'Content Decay and Refresh Strategies to Maintain Site Relevancy' },
          },
        ],
      },
      {
        title: { tr: 'İçerik Budama ve Denetimi', en: 'Content Pruning and Auditing' },
        resources: [
          {
            href: 'https://searchengineland.com/guide/content-pruning',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'İçerik Budama: Düşük Performanslıları Kaldırarak SEO Güçlendirme', en: 'Content Pruning: Strengthening SEO by Removing Underperformers' },
          },
          {
            href: 'https://www.semrush.com/blog/content-audit/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'İçerik Denetimi Nasıl Yapılır: Kapsamlı Rehber [Şablon Dahil]', en: 'How to Run a Content Audit: A Complete Guide [Template Included]' },
          },
        ],
      },
      {
        title: { tr: 'Anahtar Kelime Yamyamlığı (Cannibalization)', en: 'Keyword Cannibalization' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/keyword-cannibalization-guide/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Anahtar Kelime Yamyamlığı: Bulma, Düzeltme ve Önleme Rehberi', en: 'Keyword Cannibalization: How to Find, Fix and Prevent It' },
          },
          {
            href: 'https://ahrefs.com/blog/keyword-cannibalization/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Anahtar Kelime Yamyamlığı: Gerçekte Nedir ve Nasıl Düzeltilir', en: 'Keyword Cannibalization: What It Really Is and How to Fix It' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'E-E-A-T (Deneyim, Uzmanlık, Otorite, Güven)', en: 'E-E-A-T (Experience, Expertise, Authoritativeness, Trust)' },
    desc: { tr: 'Google\'ın içerik kalitesini değerlendirme çerçevesini anlayın ve uygulayın.', en: 'Understand and apply Google\'s framework for evaluating content quality.' },
    subsections: [
      {
        title: { tr: 'E-E-A-T Çerçevesini Kavrama', en: 'Understanding the E-E-A-T Framework' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Yararlı, Güvenilir ve Kullanıcı Odaklı İçerik Oluşturma', en: 'Creating Helpful, Reliable, People-First Content' },
          },
          {
            href: 'https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google Arama Kalitesi Değerlendirici Kılavuzu', en: 'Google Search Quality Rater Guidelines' },
          },
          {
            href: 'https://ahrefs.com/blog/eeat-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'E-E-A-T: Güven İnşa Edip Görünürlüğü Artırma', en: 'E-E-A-T: Building Trust and Growing Visibility' },
          },
          {
            href: 'https://www.semrush.com/blog/eeat/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Google E-E-A-T Nedir ve SEO\'yu Nasıl Etkiler', en: 'What Google E-E-A-T Is and How It Affects SEO' },
          },
          {
            href: 'https://searchengineland.com/guide/google-e-e-a-t-for-seo',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'E-E-A-T\'i Anlamak İçin SEO Rehberi', en: 'An SEO\'s Guide to Understanding E-E-A-T' },
          },
        ],
      },
      {
        title: { tr: 'Otorite ve Güvenilirlik İnşası', en: 'Building Authority and Trust' },
        resources: [
          {
            href: 'https://ahrefs.com/blog/eeat-audit/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'E-E-A-T Denetimi: Güveni Ölçen 220+ İşaret', en: 'The E-E-A-T Audit: 220+ Signals That Measure Trust' },
          },
          {
            href: 'https://yoast.com/author-publisher-entities-seo/',
            type: 'guide',
            author: 'Yoast',
            title: { tr: 'SEO\'da Yazar ve Yayıncı Varlıklarını Güçlendirme', en: 'Strengthening Author and Publisher Entities in SEO' },
          },
          {
            href: 'https://yoast.com/experience-in-e-e-a-t/',
            type: 'guide',
            author: 'Yoast',
            title: { tr: 'E-E-A-T\'deki Yeni E: Deneyimin Önemi', en: 'The New E in E-E-A-T: Why Experience Matters' },
          },
          {
            href: 'https://rankmath.com/kb/author-seo/',
            type: 'guide',
            author: 'Rank Math',
            title: { tr: 'E-E-A-T\'i Güçlendirmek İçin Yazar SEO\'su', en: 'Author SEO: Strengthening E-E-A-T' },
          },
        ],
      },
      {
        title: { tr: 'YMYL ve Hassas İçerik', en: 'YMYL and Sensitive Content' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/ymyl/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'YMYL Nedir ve SEO\'yu Nasıl Etkiler?', en: 'What Is YMYL and How Does It Affect SEO?' },
          },
          {
            href: 'https://searchengineland.com/guide/ymyl',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'YMYL Nedir? Google\'ın Yüksek Riskli İçerik Kategorisi', en: 'What Is YMYL? Google\'s High-Stakes Content Category' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Topical Authority ve Semantic SEO', en: 'Topical Authority and Semantic SEO' },
    desc: { tr: 'Konu otoritesi inşa edin, anlam odaklı içerik ve entity SEO stratejileri geliştirin.', en: 'Build topical authority with meaning-led content and entity SEO strategies.' },
    subsections: [
      {
        title: { tr: 'Topical Authority (Konu Otoritesi)', en: 'Topical Authority' },
        resources: [
          {
            href: 'https://searchengineland.com/guide/topical-authority',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Konu Otoritesi: Alanınızda Başvuru Kaynağı Olun', en: 'Topical Authority: Becoming the Reference in Your Field' },
          },
          {
            href: 'https://www.semrush.com/blog/topical-authority/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Konu Otoritesi Nedir? (ve Nasıl İnşa Edilir)', en: 'What Is Topical Authority (and How Do You Build It)?' },
          },
          {
            href: 'https://ahrefs.com/blog/topical-authority/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO\'da Konu Otoritesi Nedir ve Nasıl Oluşturulur', en: 'Topical Authority in SEO: What It Is and How to Build It' },
          },
          {
            href: 'https://neilpatel.com/blog/topical-authority/',
            type: 'guide',
            author: 'Neil Patel',
            title: { tr: 'Konu Otoritesi: Tanımı ve İnşa Yöntemleri', en: 'Topical Authority: Definition and How to Build It' },
          },
          {
            href: 'https://www.searchenginejournal.com/topical-authority/247189/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Konu Otoritesi Nedir ve Nasıl Çalışır', en: 'What Topical Authority Is and How It Works' },
          },
        ],
      },
      {
        title: { tr: 'Semantic SEO ve Entity Optimizasyonu', en: 'Semantic SEO and Entity Optimization' },
        resources: [
          {
            href: 'https://searchengineland.com/guide/semantic-seo',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Semantic SEO: Anahtar Kelimeler Yerine Anlam İçin Optimize Etme', en: 'Semantic SEO: Optimizing for Meaning Instead of Keywords' },
          },
          {
            href: 'https://searchengineland.com/guide/entity-first-content-optimization',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Entity-First SEO: İçeriği Google Bilgi Grafiği ile Hizalama', en: 'Entity-First SEO: Aligning Content With Google\'s Knowledge Graph' },
          },
          {
            href: 'https://ahrefs.com/blog/semantic-seo/',
            type: 'blog',
            author: 'Ahrefs',
            title: { tr: 'Semantic SEO: Çoğu SEO Uzmanının Anlamadığı İleri Düzey Beceri', en: 'Semantic SEO: The Advanced Skill Most SEOs Miss' },
          },
          {
            href: 'https://www.semrush.com/blog/semantic-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Semantic SEO Nedir ve 10 Başarı İpucu', en: 'What Semantic SEO Is, Plus 10 Tips for Success' },
          },
          {
            href: 'https://backlinko.com/hub/seo/semantic-seo',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Semantic SEO Nedir ve Neden Önemlidir', en: 'What Semantic SEO Is and Why It Matters' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Entity SEO ve Knowledge Panel', en: 'Entity SEO and Knowledge Panels' },
    desc: { tr: 'Google Bilgi Grafiği\'ni anlayın, Knowledge Panel\'inizi optimize edin ve marka SERP\'inizi yönetin.', en: 'Understand Google\'s Knowledge Graph, optimize your Knowledge Panel and own your brand SERP.' },
    subsections: [
      {
        title: { tr: 'Entity SEO ve Bilgi Grafiği', en: 'Entity SEO and the Knowledge Graph' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/entity-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Entity SEO Nedir ve Neden Önemlidir', en: 'What Entity SEO Is and Why It Matters' },
          },
          {
            href: 'https://ahrefs.com/blog/google-knowledge-graph/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Google Bilgi Grafiği Açıklaması: SEO\'yu Nasıl Etkiler', en: 'The Google Knowledge Graph Explained: How It Affects SEO' },
          },
        ],
      },
      {
        title: { tr: 'Knowledge Panel Optimizasyonu', en: 'Knowledge Panel Optimization' },
        resources: [
          {
            href: 'https://searchengineland.com/guide/google-knowledge-panel',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Google Knowledge Panel: Nedir ve Nasıl Öne Çıkılır', en: 'Google Knowledge Panels: What They Are and How to Stand Out' },
          },
          {
            href: 'https://www.semrush.com/blog/google-knowledge-panel/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Google Knowledge Panel: Nedir ve Nasıl Elde Edilir', en: 'Google Knowledge Panels: What They Are and How to Get One' },
          },
          {
            href: 'https://searchengineland.com/optimize-company-google-knowledge-panel-453882',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'Şirketinizin Google Knowledge Panel\'ini Optimize Etme', en: 'How to Optimize Your Company\'s Google Knowledge Panel' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Teknik SEO', en: 'Technical SEO' },
    desc: { tr: 'Sitenizin teknik altyapısını, tarama sürecini ve indeksleme performansını optimize edin.', en: 'Optimize your technical foundations, crawl process and indexing performance.' },
    subsections: [
      {
        title: { tr: 'Tarama ve İndeksleme Temelleri', en: 'Crawling and Indexing Fundamentals' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/crawling-indexing',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google Tarama ve İndeksleme Dokümantasyonu', en: 'Google Crawling and Indexing Documentation' },
          },
          {
            href: 'https://ahrefs.com/blog/technical-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Teknik SEO Başlangıç Rehberi', en: 'Technical SEO: A Beginner\'s Guide' },
          },
          {
            href: 'https://backlinko.com/technical-seo-guide',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Teknik SEO: Kapsamlı Rehber', en: 'Technical SEO: The Complete Guide' },
          },
          {
            href: 'https://www.screamingfrog.co.uk/seo-spider/',
            type: 'tool',
            author: 'Screaming Frog',
            title: { tr: 'Screaming Frog SEO Spider', en: 'Screaming Frog SEO Spider' },
          },
        ],
      },
      {
        title: { tr: 'Sitemap ve Robots.txt', en: 'Sitemaps and Robots.txt' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Site Haritası Hakkında Bilgi Edinin', en: 'Learn About Sitemaps' },
          },
          {
            href: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Site Haritası Oluşturma ve Gönderme', en: 'Build and Submit a Sitemap' },
          },
          {
            href: 'https://developers.google.com/search/docs/crawling-indexing/robots/intro',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Robots.txt Giriş ve Rehberi', en: 'Robots.txt Introduction and Guide' },
          },
          {
            href: 'https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt',
            type: 'guide',
            author: 'Google',
            title: { tr: 'robots.txt Dosyası Oluşturma ve Gönderme', en: 'Create and Submit a robots.txt File' },
          },
        ],
      },
      {
        title: { tr: 'Canonical Etiketler ve Yönlendirmeler', en: 'Canonical Tags and Redirects' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Kanonik URL Nasıl Belirlenir', en: 'How to Specify a Canonical URL' },
          },
          {
            href: 'https://www.semrush.com/blog/canonical-url-guide/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Canonical URL\'ler: En İyi Uygulamalar ve Yaygın Sorunlar', en: 'Canonical URLs: Best Practices and Common Issues' },
          },
          {
            href: 'https://www.semrush.com/blog/301-vs-302-redirect/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: '301 vs. 302 Yönlendirme: Hangisi Seçilmeli', en: '301 vs 302 Redirects: Which Should You Use?' },
          },
          {
            href: 'https://www.semrush.com/blog/redirects/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Yönlendirmeler: Nedir ve Nasıl Kullanılır', en: 'Redirects: What They Are and How to Use Them' },
          },
        ],
      },
      {
        title: { tr: 'Crawl Budget ve Site Mimarisi', en: 'Crawl Budget and Site Architecture' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/crawl-budget/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Tarama Bütçesi Nedir ve Neden Önemlidir', en: 'What Crawl Budget Is and Why It Matters' },
          },
          {
            href: 'https://backlinko.com/hub/seo/architecture',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Web Sitesi Mimarisi: SEO Dostu Yapı Oluşturma', en: 'Website Architecture: Building an SEO-Friendly Structure' },
          },
          {
            href: 'https://www.semrush.com/blog/technical-seo-checklist/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Kapsamlı Teknik SEO Kontrol Listesi', en: 'The Complete Technical SEO Checklist' },
          },
          {
            href: 'https://searchengineland.com/pagination-seo-what-you-need-to-know-453707',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Sayfalandırma ve SEO: Bilmeniz Gerekenler', en: 'Pagination and SEO: What You Need to Know' },
          },
        ],
      },
      {
        title: { tr: 'Log Analizi (Log File Analysis)', en: 'Log File Analysis' },
        resources: [
          {
            href: 'https://searchengineland.com/guide/log-file-analysis',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'SEO İçin Log Dosyası Analizi: Tarama Sorunlarını Bulun', en: 'Log File Analysis for SEO: Find Your Crawl Problems' },
          },
          {
            href: 'https://www.semrush.com/blog/log-file-analysis/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Log Dosyası Analizi Nedir ve SEO İçin Nasıl Yapılır', en: 'What Log File Analysis Is and How to Do It for SEO' },
          },
          {
            href: 'https://ahrefs.com/blog/log-file-analysis/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO Log Dosyası Analizi Nasıl Yapılır [Şablon Dahil]', en: 'How to Do Log File Analysis for SEO [Template Included]' },
          },
          {
            href: 'https://www.searchenginejournal.com/seo-log-file-analysis-guide/419660/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'SEO Log Dosyası Analizi Nedir? Başlangıç Rehberi', en: 'SEO Log File Analysis: A Beginner\'s Guide' },
          },
          {
            href: 'https://www.screamingfrog.co.uk/log-file-analyser/',
            type: 'tool',
            author: 'Screaming Frog',
            title: { tr: 'SEO Log Dosyası Analiz Aracı', en: 'SEO Log File Analyser' },
          },
        ],
      },
      {
        title: { tr: 'Crawl Davranışı Analizi', en: 'Crawl Behaviour Analysis' },
        resources: [
          {
            href: 'https://developers.google.com/search/blog/2017/01/what-crawl-budget-means-for-googlebot',
            type: 'blog',
            author: 'Google',
            title: { tr: 'Googlebot İçin Tarama Bütçesi Ne Anlama Gelir', en: 'What Crawl Budget Means for Googlebot' },
          },
          {
            href: 'https://support.google.com/webmasters/answer/9679690',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Search Console Tarama İstatistikleri Raporu', en: 'The Search Console Crawl Stats Report' },
          },
          {
            href: 'https://searchengineland.com/guide/crawl-budget',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Tarama Bütçesi Nedir? Çalışma Prensibi ve Optimizasyon İpuçları', en: 'What Is Crawl Budget? How It Works and How to Optimize It' },
          },
          {
            href: 'https://www.semrush.com/blog/crawl-budget/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Tarama Bütçesi Nedir ve SEO İçin Neden Önemlidir', en: 'What Crawl Budget Is and Why It Matters for SEO' },
          },
        ],
      },
      {
        title: { tr: 'Edge SEO', en: 'Edge SEO' },
        resources: [
          {
            href: 'https://searchengineland.com/edge-seo-447510',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Edge SEO Nedir?', en: 'What Is Edge SEO?' },
          },
          {
            href: 'https://www.searchenginejournal.com/edge-seo/273983/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Edge SEO Nedir ve Neden Benimsemelisiniz', en: 'What Edge SEO Is and Why You Should Adopt It' },
          },
          {
            href: 'https://searchengineland.com/guide/what-is-technical-seo',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Teknik SEO Nedir? CDN Seviyesi Uygulama Dahil Kesin Rehber', en: 'What Is Technical SEO? The Definitive Guide, Including CDN-Level Implementation' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Site Hızı ve Core Web Vitals', en: 'Site Speed and Core Web Vitals' },
    desc: { tr: 'Sayfa performansını optimize ederek hem kullanıcı deneyimini hem sıralamayı iyileştirin.', en: 'Improve both user experience and rankings by optimizing page performance.' },
    subsections: [
      {
        title: { tr: 'Core Web Vitals\'a Genel Bakış', en: 'Core Web Vitals Overview' },
        resources: [
          {
            href: 'https://web.dev/articles/vitals',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Web Vitals Nedir', en: 'What Are Web Vitals?' },
          },
          {
            href: 'https://web.dev/explore/learn-core-web-vitals',
            type: 'course',
            author: 'web.dev (Google)',
            title: { tr: 'Core Web Vitals Öğrenme Yolu', en: 'Learn Core Web Vitals' },
          },
          {
            href: 'https://web.dev/articles/top-cwv',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Core Web Vitals İyileştirmenin En Etkili Yolları', en: 'The Most Effective Ways to Improve Core Web Vitals' },
          },
          {
            href: 'https://ahrefs.com/blog/core-web-vitals/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Core Web Vitals Nedir ve Nasıl İyileştirilir', en: 'What Core Web Vitals Are and How to Improve Them' },
          },
          {
            href: 'https://www.semrush.com/blog/core-web-vitals/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Core Web Vitals: Nedir ve Nasıl İyileştirilir', en: 'Core Web Vitals: What They Are and How to Improve Them' },
          },
          {
            href: 'https://ahrefs.com/blog/core-web-vitals-study/',
            type: 'blog',
            author: 'Ahrefs',
            title: { tr: 'CrUX ve 5.2 Milyon Sayfa ile Core Web Vitals Veri Çalışması', en: 'A Core Web Vitals Data Study of 5.2 Million Pages Using CrUX' },
          },
        ],
      },
      {
        title: { tr: 'LCP (Largest Contentful Paint) Derinlemesine', en: 'LCP (Largest Contentful Paint) in Depth' },
        resources: [
          {
            href: 'https://web.dev/articles/lcp',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'En Büyük İçerikli Boyama (LCP): Metrik Tanımı', en: 'Largest Contentful Paint (LCP): Metric Definition' },
          },
          {
            href: 'https://web.dev/articles/optimize-lcp',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'LCP Optimizasyonu: Kapsamlı Rehber', en: 'Optimize LCP: A Complete Guide' },
          },
          {
            href: 'https://web.dev/blog/common-misconceptions-lcp',
            type: 'blog',
            author: 'web.dev (Google)',
            title: { tr: 'LCP Optimizasyonu Hakkında Yaygın Yanılgılar', en: 'Common Misconceptions About Optimizing LCP' },
          },
          {
            href: 'https://www.smashingmagazine.com/2023/01/optimizing-image-element-lcp/',
            type: 'guide',
            author: 'Smashing Magazine',
            title: { tr: 'Görsel Element LCP\'sini Optimize Etme', en: 'Optimizing the LCP Image Element' },
          },
          {
            href: 'https://web.dev/articles/font-best-practices',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Font Optimizasyonu En İyi Uygulamaları', en: 'Font Best Practices' },
          },
          {
            href: 'https://www.debugbear.com/blog/lcp-subparts',
            type: 'guide',
            author: 'DebugBear',
            title: { tr: 'LCP Alt Parçalarını Ölçerek Performansı İyileştirme', en: 'Improving Performance by Measuring LCP Subparts' },
          },
          {
            href: 'https://www.debugbear.com/blog/preload-largest-contentful-paint-image',
            type: 'guide',
            author: 'DebugBear',
            title: { tr: 'LCP Görselini Preload ile Önceden Yükleme', en: 'Preloading the LCP Image' },
          },
          {
            href: 'https://web.dev/articles/extract-critical-css',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Kritik CSS Çıkarma ve Satır İçi Ekleme', en: 'Extract and Inline Critical CSS' },
          },
          {
            href: 'https://www.semrush.com/blog/lcp/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'LCP Nedir ve Nasıl İyileştirilir', en: 'What LCP Is and How to Improve It' },
          },
        ],
      },
      {
        title: { tr: 'INP (Interaction to Next Paint) Derinlemesine', en: 'INP (Interaction to Next Paint) in Depth' },
        resources: [
          {
            href: 'https://web.dev/articles/inp',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Sonraki Boyamaya Etkileşim (INP): Metrik Tanımı', en: 'Interaction to Next Paint (INP): Metric Definition' },
          },
          {
            href: 'https://web.dev/articles/optimize-inp',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'INP Optimizasyonu: Kapsamlı Rehber', en: 'Optimize INP: A Complete Guide' },
          },
          {
            href: 'https://developer.chrome.com/docs/performance/insights/inp-breakdown',
            type: 'guide',
            author: 'Chrome for Developers',
            title: { tr: 'INP Ayrıştırma: Giriş Gecikmesi, İşleme ve Sunum', en: 'Breaking Down INP: Input Delay, Processing and Presentation' },
          },
          {
            href: 'https://web.dev/articles/optimize-long-tasks',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Uzun Görevleri Optimize Etme (Long Tasks)', en: 'Optimize Long Tasks' },
          },
          {
            href: 'https://web.dev/off-main-thread/',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Web Workers ile JavaScript\'i Ana Thread Dışında Çalıştırma', en: 'Get JavaScript Off the Main Thread With Web Workers' },
          },
          {
            href: 'https://web.dev/articles/script-evaluation-and-long-tasks',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Script Değerlendirmesi ve Uzun Görevler', en: 'Script Evaluation and Long Tasks' },
          },
          {
            href: 'https://web.dev/articles/manually-diagnose-slow-interactions-in-the-lab',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Laboratuvarda Yavaş Etkileşimleri Manuel Olarak Teşhis Etme', en: 'Manually Diagnose Slow Interactions in the Lab' },
          },
          {
            href: 'https://www.debugbear.com/blog/inp-chrome-devtools',
            type: 'guide',
            author: 'DebugBear',
            title: { tr: 'Chrome DevTools ile INP Nasıl İyileştirilir', en: 'How to Improve INP With Chrome DevTools' },
          },
        ],
      },
      {
        title: { tr: 'CLS (Cumulative Layout Shift) Derinlemesine', en: 'CLS (Cumulative Layout Shift) in Depth' },
        resources: [
          {
            href: 'https://web.dev/articles/cls',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Kümülatif Düzen Kayması (CLS): Metrik Tanımı', en: 'Cumulative Layout Shift (CLS): Metric Definition' },
          },
          {
            href: 'https://web.dev/articles/optimize-cls',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'CLS Optimizasyonu: Kapsamlı Rehber', en: 'Optimize CLS: A Complete Guide' },
          },
          {
            href: 'https://www.smashingmagazine.com/2021/06/how-to-fix-cumulative-layout-shift-issues/',
            type: 'guide',
            author: 'Smashing Magazine',
            title: { tr: 'CLS Sorunları Nasıl Düzeltilir: Kapsamlı Pratik Rehber', en: 'How to Fix Cumulative Layout Shift Issues: A Practical Guide' },
          },
          {
            href: 'https://developer.chrome.com/docs/performance/insights/cls-culprit',
            type: 'guide',
            author: 'Chrome for Developers',
            title: { tr: 'Düzen Kayması Suçluları: Kök Neden Tespiti', en: 'Layout Shift Culprits: Finding the Root Cause' },
          },
          {
            href: 'https://web.dev/articles/animations-guide',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Yüksek Performanslı CSS Animasyonları Oluşturma', en: 'Building High-Performance CSS Animations' },
          },
          {
            href: 'https://css-tricks.com/lets-take-a-deep-dive-into-the-css-contain-property/',
            type: 'guide',
            author: 'CSS-Tricks',
            title: { tr: 'CSS Contain Özelliği Derinlemesine İnceleme', en: 'A Deep Dive Into the CSS Contain Property' },
          },
          {
            href: 'https://www.debugbear.com/blog/web-font-layout-shift',
            type: 'guide',
            author: 'DebugBear',
            title: { tr: 'Web Fontlarının Neden Olduğu Düzen Kaymalarını Düzeltme', en: 'Fixing Layout Shifts Caused by Web Fonts' },
          },
        ],
      },
      {
        title: { tr: 'TTFB (Time to First Byte) Derinlemesine', en: 'TTFB (Time to First Byte) in Depth' },
        resources: [
          {
            href: 'https://web.dev/articles/ttfb',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'İlk Bayta Kadar Geçen Süre (TTFB): Metrik Tanımı', en: 'Time to First Byte (TTFB): Metric Definition' },
          },
          {
            href: 'https://web.dev/articles/optimize-ttfb',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'TTFB Optimizasyonu: Kapsamlı Rehber', en: 'Optimize TTFB: A Complete Guide' },
          },
          {
            href: 'https://www.smashingmagazine.com/2025/02/time-to-first-byte-beyond-server-response-time/',
            type: 'guide',
            author: 'Smashing Magazine',
            title: { tr: 'TTFB: Sunucu Yanıt Süresinin Ötesinde', en: 'Time to First Byte: Beyond Server Response Time' },
          },
          {
            href: 'https://web.dev/articles/preconnect-and-dns-prefetch',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Erken Ağ Bağlantıları Kurma (preconnect ve dns-prefetch)', en: 'Establish Network Connections Early (preconnect and dns-prefetch)' },
          },
          {
            href: 'https://www.debugbear.com/blog/reduce-initial-server-response-time',
            type: 'guide',
            author: 'DebugBear',
            title: { tr: 'İlk Sunucu Yanıt Süresini Azaltmanın 5 Yolu', en: '5 Ways to Reduce Initial Server Response Time' },
          },
          {
            href: 'https://www.debugbear.com/blog/http-server-connections',
            type: 'guide',
            author: 'DebugBear',
            title: { tr: 'HTTP Sunucu Bağlantıları: HTTP/1.1, HTTP/2 ve HTTP/3', en: 'HTTP Server Connections: HTTP/1.1, HTTP/2 and HTTP/3' },
          },
          {
            href: 'https://developer.chrome.com/docs/lighthouse/performance/server-response-time',
            type: 'guide',
            author: 'Chrome for Developers',
            title: { tr: 'Sunucu Yanıt Sürelerini Azaltma (TTFB)', en: 'Reduce Server Response Times (TTFB)' },
          },
        ],
      },
      {
        title: { tr: 'Performans Ölçüm ve İzleme', en: 'Performance Measurement and Monitoring' },
        resources: [
          {
            href: 'https://web.dev/articles/vitals-measurement-getting-started',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Web Vitals Ölçmeye Başlarken', en: 'Getting Started With Measuring Web Vitals' },
          },
          {
            href: 'https://web.dev/articles/crux-and-rum-differences',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'CrUX Verileri Neden RUM Verilerinden Farklıdır', en: 'Why CrUX Data Differs From Your RUM Data' },
          },
          {
            href: 'https://developer.chrome.com/docs/devtools/performance/overview',
            type: 'guide',
            author: 'Chrome for Developers',
            title: { tr: 'Chrome DevTools Performans Paneli Rehberi', en: 'The Chrome DevTools Performance Panel' },
          },
          {
            href: 'https://web.dev/articles/performance-budgets-101',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Performans Bütçeleri 101', en: 'Performance Budgets 101' },
          },
          {
            href: 'https://www.debugbear.com/software/core-web-vitals-monitoring-tools',
            type: 'guide',
            author: 'DebugBear',
            title: { tr: 'Sayfa Hızı İzleme İçin 9 Core Web Vitals Aracı', en: '9 Core Web Vitals Tools for Page Speed Monitoring' },
          },
          {
            href: 'https://www.debugbear.com/blog/core-web-vitals-audit',
            type: 'guide',
            author: 'DebugBear',
            title: { tr: 'Core Web Vitals Denetimi Nasıl Yapılır: Derinlemesine Rehber', en: 'How to Run a Core Web Vitals Audit: An In-Depth Guide' },
          },
        ],
      },
      {
        title: { tr: 'İleri Seviye Performans Teknikleri', en: 'Advanced Performance Techniques' },
        resources: [
          {
            href: 'https://web.dev/learn/performance/understanding-the-critical-path',
            type: 'course',
            author: 'web.dev (Google)',
            title: { tr: 'Kritik Yolu (Critical Path) Anlama', en: 'Understanding the Critical Path' },
          },
          {
            href: 'https://web.dev/articles/fetch-priority',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Fetch Priority API ile Kaynak Yüklemeyi Optimize Etme', en: 'Optimize Resource Loading With the Fetch Priority API' },
          },
          {
            href: 'https://web.dev/learn/performance/prefetching-prerendering-precaching',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Prefetching, Prerendering ve Service Worker Precaching', en: 'Prefetching, Prerendering and Service Worker Precaching' },
          },
          {
            href: 'https://developer.chrome.com/docs/web-platform/prerender-pages',
            type: 'guide',
            author: 'Chrome for Developers',
            title: { tr: 'Anında Sayfa Geçişleri İçin Prerender', en: 'Prerender Pages for Instant Navigations' },
          },
          {
            href: 'https://web.dev/articles/rendering-on-the-web',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Web\'de Render: SSR, CSR, Streaming ve Islands Mimarisi', en: 'Rendering on the Web: SSR, CSR, Streaming and Islands' },
          },
          {
            href: 'https://developer.chrome.com/docs/workbox/caching-strategies-overview',
            type: 'guide',
            author: 'Chrome for Developers',
            title: { tr: 'Service Worker Önbellekleme Stratejileri', en: 'Service Worker Caching Strategies' },
          },
          {
            href: 'https://www.debugbear.com/blog/resource-hints-rel-preload-prefetch-preconnect',
            type: 'guide',
            author: 'DebugBear',
            title: { tr: 'Kaynak İpuçları: preload, prefetch ve preconnect Karşılaştırması', en: 'Resource Hints: preload vs prefetch vs preconnect' },
          },
          {
            href: 'https://developers.google.com/speed/docs/insights/v5/about',
            type: 'tool',
            author: 'Google',
            title: { tr: 'PageSpeed Insights', en: 'PageSpeed Insights' },
          },
          {
            href: 'https://developer.chrome.com/docs/lighthouse/overview/',
            type: 'tool',
            author: 'Chrome for Developers',
            title: { tr: 'Lighthouse Tanıtımı', en: 'Lighthouse Overview' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Schema Markup ve Yapılandırılmış Veri', en: 'Schema Markup and Structured Data' },
    desc: { tr: 'Arama motorlarının içeriğinizi daha iyi anlamasını sağlayarak zengin sonuçlar elde edin.', en: 'Help search engines understand your content and earn rich results.' },
    subsections: [
      {
        title: { tr: 'Schema Markup Temelleri', en: 'Schema Markup Fundamentals' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Yapılandırılmış Veri İşaretlemesine Giriş', en: 'Introduction to Structured Data Markup' },
          },
          {
            href: 'https://schema.org/docs/gs.html',
            type: 'guide',
            author: 'Schema.org',
            title: { tr: 'Schema.org ile Başlarken', en: 'Getting Started With Schema.org' },
          },
          {
            href: 'https://ahrefs.com/blog/schema-markup/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Schema Markup Nedir ve Nasıl Uygulanır', en: 'What Schema Markup Is and How to Implement It' },
          },
          {
            href: 'https://www.semrush.com/blog/schema-markup/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Schema Markup Nedir ve Nasıl Eklenir', en: 'What Schema Markup Is and How to Add It' },
          },
        ],
      },
      {
        title: { tr: 'Schema Türleri ve Kullanım Alanları', en: 'Schema Types and Where to Use Them' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/appearance/structured-data/search-gallery',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google\'ın Desteklediği Yapılandırılmış Veri Türleri', en: 'Structured Data Types Google Supports' },
          },
          {
            href: 'https://developers.google.com/search/docs/appearance/structured-data/product',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Ürün Yapılandırılmış Verisi', en: 'Product Structured Data' },
          },
          {
            href: 'https://developers.google.com/search/docs/appearance/structured-data/faqpage',
            type: 'guide',
            author: 'Google',
            title: { tr: 'SSS Yapılandırılmış Verisi', en: 'FAQ Structured Data' },
          },
          {
            href: 'https://developers.google.com/search/docs/appearance/structured-data/local-business',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Yerel İşletme Yapılandırılmış Verisi', en: 'Local Business Structured Data' },
          },
          {
            href: 'https://backlinko.com/schema-markup-guide',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Schema Markup: Nedir ve Neden Önemlidir', en: 'Schema Markup: What It Is and Why It Matters' },
          },
        ],
      },
      {
        title: { tr: 'Zengin Sonuçlar ve Test Araçları', en: 'Rich Results and Testing Tools' },
        resources: [
          {
            href: 'https://search.google.com/test/rich-results',
            type: 'tool',
            author: 'Google',
            title: { tr: 'Google Zengin Sonuç Testi', en: 'Google Rich Results Test' },
          },
          {
            href: 'https://technicalseo.com/tools/schema-markup-generator/',
            type: 'tool',
            author: 'TechnicalSEO.com',
            title: { tr: 'Schema Markup Oluşturucu (JSON-LD)', en: 'Schema Markup Generator (JSON-LD)' },
          },
          {
            href: 'https://ahrefs.com/blog/rich-snippets/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Zengin Snippet\'lar: Nedir ve Nasıl Elde Edilir', en: 'Rich Snippets: What They Are and How to Get Them' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'JavaScript ve Modern Web SEO', en: 'JavaScript and Modern Web SEO' },
    desc: { tr: 'JS framework\'leri, headless CMS, JAMstack ve render stratejilerinin SEO üzerindeki etkisini öğrenin.', en: 'Learn how JS frameworks, headless CMSs, Jamstack and rendering strategy affect SEO.' },
    subsections: [
      {
        title: { tr: 'JavaScript SEO Temelleri', en: 'JavaScript SEO Fundamentals' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics',
            type: 'guide',
            author: 'Google',
            title: { tr: 'JavaScript SEO Temelleri', en: 'JavaScript SEO Basics' },
          },
          {
            href: 'https://web.dev/rendering-on-the-web/',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Web\'de Render İşlemi', en: 'Rendering on the Web' },
          },
          {
            href: 'https://ahrefs.com/blog/javascript-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'JavaScript SEO Sorunları ve En İyi Uygulamalar', en: 'JavaScript SEO Issues and Best Practices' },
          },
          {
            href: 'https://www.semrush.com/blog/javascript-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'JavaScript SEO: Kapsamlı Rehber', en: 'JavaScript SEO: A Complete Guide' },
          },
        ],
      },
      {
        title: { tr: 'SSR vs CSR ve Render Stratejileri', en: 'SSR vs CSR and Rendering Strategy' },
        resources: [
          {
            href: 'https://developers.google.com/solutions/content-driven/hosting/rendering',
            type: 'guide',
            author: 'Google',
            title: { tr: 'İçerik Odaklı Web Uygulamaları İçin Render', en: 'Rendering for Content-Heavy Web Applications' },
          },
          {
            href: 'https://www.searchenginejournal.com/server-side-vs-client-side-rendering-what-google-recommends/545946/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Sunucu Taraflı vs İstemci Taraflı Render: Google Ne Önerir', en: 'Server-Side vs Client-Side Rendering: What Google Recommends' },
          },
          {
            href: 'https://www.searchenginejournal.com/client-side-vs-server-side/482574/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'SEO İçin İstemci Taraflı vs Sunucu Taraflı Render', en: 'Client-Side vs Server-Side Rendering for SEO' },
          },
        ],
      },
      {
        title: { tr: 'Headless SEO', en: 'Headless SEO' },
        resources: [
          {
            href: 'https://www.contentful.com/seo-guide/headless-seo/',
            type: 'guide',
            author: 'Contentful',
            title: { tr: 'Headless SEO Açıklaması', en: 'Headless SEO Explained' },
          },
          {
            href: 'https://hygraph.com/learn/headless-cms/headless-cms-seo',
            type: 'guide',
            author: 'Hygraph',
            title: { tr: 'Headless CMS ve SEO En İyi Uygulamaları', en: 'Headless CMS and SEO Best Practices' },
          },
          {
            href: 'https://agilitycms.com/blog/are-headless-cms-good-for-seo',
            type: 'blog',
            author: 'Agility CMS',
            title: { tr: 'Headless CMS ve SEO: Bilmeniz Gerekenler', en: 'Headless CMS and SEO: What You Need to Know' },
          },
          {
            href: 'https://strapi.io/blog/headless-cms-strapi-seo-best-practices',
            type: 'blog',
            author: 'Strapi',
            title: { tr: 'Headless CMS ve Strapi SEO En İyi Uygulamaları', en: 'Headless CMS and Strapi SEO Best Practices' },
          },
        ],
      },
      {
        title: { tr: 'JAMstack SEO', en: 'Jamstack SEO' },
        resources: [
          {
            href: 'https://bejamas.com/hub/guides/jamstack-seo-guide',
            type: 'guide',
            author: 'Bejamas',
            title: { tr: 'JAMstack SEO Rehberi', en: 'The Jamstack SEO Guide' },
          },
          {
            href: 'https://www.netlify.com/blog/2016/06/17/five-seo-rules-for-your-jamstack-site/',
            type: 'blog',
            author: 'Netlify',
            title: { tr: 'JAMstack Siteniz İçin 5 SEO Kuralı', en: 'Five SEO Rules for Your Jamstack Site' },
          },
          {
            href: 'https://bejamas.com/hub/guides/content-seo',
            type: 'guide',
            author: 'Bejamas',
            title: { tr: 'JAMstack İçerik SEO Rehberi', en: 'Content SEO for Jamstack' },
          },
          {
            href: 'https://www.netlify.com/jamstack/',
            type: 'guide',
            author: 'Netlify',
            title: { tr: 'JAMstack\'e Hoş Geldiniz', en: 'Welcome to the Jamstack' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Site Taşıma (Migration) SEO', en: 'Site Migration SEO' },
    desc: { tr: 'Domain değişikliği, CMS geçişi ve yeniden tasarım süreçlerinde SEO\'nuzu koruyun.', en: 'Protect organic performance through domain changes, CMS moves and redesigns.' },
    subsections: [
      {
        title: { tr: 'Site Taşıma Süreci ve Kontrol Listesi', en: 'The Migration Process and Checklists' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Site Taşıma ve Göçler', en: 'Site Moves and Migrations' },
          },
          {
            href: 'https://searchengineland.com/guide/ultimate-site-migration-seo-checklist',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Site Taşıma SEO Rehberi: Sıralamaları ve Trafiği Koruma', en: 'The Site Migration SEO Guide: Protecting Rankings and Traffic' },
          },
          {
            href: 'https://www.semrush.com/blog/website-migration-checklist/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Kapsamlı Web Sitesi Taşıma Kontrol Listesi [SEO Dostu]', en: 'The Complete Website Migration Checklist [SEO-Friendly]' },
          },
          {
            href: 'https://backlinko.com/website-migration-checklist',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Web Sitesi Taşıma Kontrol Listesi (88 Adım + Ücretsiz Şablon)', en: 'Website Migration Checklist (88 Steps + Free Template)' },
          },
          {
            href: 'https://www.searchenginejournal.com/essential-steps-website-migration/491862/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Web Sitesi Taşıma SEO En İyi Uygulamaları', en: 'Website Migration SEO Best Practices' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Web Erişilebilirlik ve SEO', en: 'Web Accessibility and SEO' },
    desc: { tr: 'WCAG uyumluluğu ile hem erişilebilirliği hem SEO performansını artırın.', en: 'Raise both accessibility and SEO performance through WCAG conformance.' },
    subsections: [
      {
        title: { tr: 'Erişilebilirlik ve SEO Kesişimi', en: 'Where Accessibility and SEO Meet' },
        resources: [
          {
            href: 'https://searchengineland.com/guide/seo-accessibility',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'SEO Erişilebilirlik: Sitenizi Herkes İçin Aranabilir Yapın', en: 'SEO Accessibility: Making Your Site Searchable for Everyone' },
          },
          {
            href: 'https://ahrefs.com/blog/accessibility-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO Uzmanları İçin Erişilebilirlik: ADA ve WCAG Uyumu', en: 'Accessibility for SEOs: ADA and WCAG Compliance' },
          },
          {
            href: 'https://www.searchenginejournal.com/intersection-of-seo-and-accessibility-optimizing-for-all-users/510254/',
            type: 'blog',
            author: 'Search Engine Journal',
            title: { tr: 'SEO ve Erişilebilirliğin Kesişimi: Tüm Kullanıcılar İçin Optimizasyon', en: 'The Intersection of SEO and Accessibility: Optimizing for All Users' },
          },
          {
            href: 'https://yoast.com/image-seo-alt-tag-and-title-tag-optimization/',
            type: 'guide',
            author: 'Yoast',
            title: { tr: 'Görsel SEO: Alt Text ve Title Text Optimizasyonu', en: 'Image SEO: Alt Text and Title Text Optimization' },
          },
          {
            href: 'https://www.semrush.com/blog/semantic-html5-guide/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Semantik HTML Nedir ve Doğru Kullanımı', en: 'What Semantic HTML Is and How to Use It Correctly' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Görsel SEO (Image SEO)', en: 'Image SEO' },
    desc: { tr: 'Görsellerinizi optimize ederek Google Images ve organik aramalardan trafik kazanın.', en: 'Optimize images to win traffic from Google Images and organic search.' },
    subsections: [
      {
        title: { tr: 'Görsel Optimizasyon Temelleri', en: 'Image Optimization Fundamentals' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/appearance/google-images',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google Görsel SEO En İyi Uygulamaları', en: 'Google Image SEO Best Practices' },
          },
          {
            href: 'https://ahrefs.com/blog/image-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Görsel SEO: 12 Uygulanabilir İpucu', en: 'Image SEO: 12 Actionable Tips' },
          },
          {
            href: 'https://www.semrush.com/blog/image-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Görsel SEO: Arama ve Kullanıcılar İçin Görsel Optimizasyonu', en: 'Image SEO: Optimizing Images for Search and Users' },
          },
          {
            href: 'https://backlinko.com/image-seo',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Daha İyi Optimizasyon İçin 15 Görsel SEO İpucu', en: '15 Image SEO Tips for Better Optimization' },
          },
        ],
      },
      {
        title: { tr: 'Image Sitemap ve Alt Text Optimizasyonu', en: 'Image Sitemaps and Alt Text' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Görsel Site Haritaları', en: 'Image Sitemaps' },
          },
          {
            href: 'https://ahrefs.com/blog/alt-text/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO İçin Alt Text: Görsellerinizi Nasıl Optimize Edersiniz', en: 'Alt Text for SEO: How to Optimize Your Images' },
          },
          {
            href: 'https://yoast.com/image-seo-alt-tag-and-title-tag-optimization/',
            type: 'guide',
            author: 'Yoast',
            title: { tr: 'Görsel SEO: Alt Text ve Title Text Optimizasyonu', en: 'Image SEO: Alt Text and Title Text Optimization' },
          },
        ],
      },
      {
        title: { tr: 'İleri Seviye Görsel Performans', en: 'Advanced Image Performance' },
        resources: [
          {
            href: 'https://web.dev/articles/browser-level-image-lazy-loading',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Tarayıcı Düzeyinde Tembel Görsel Yükleme', en: 'Browser-Level Image Lazy Loading' },
          },
          {
            href: 'https://web.dev/learn/design/responsive-images',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Duyarlı Görseller (Responsive Images)', en: 'Responsive Images' },
          },
          {
            href: 'https://web.dev/learn/performance/image-performance',
            type: 'guide',
            author: 'web.dev (Google)',
            title: { tr: 'Görsel Performansı', en: 'Image Performance' },
          },
          {
            href: 'https://backlinko.com/visual-search-ranking-factors',
            type: 'blog',
            author: 'Backlinko',
            title: { tr: 'Google Lens Çalışması: Görsel Arama Sonuçları', en: 'A Google Lens Study: Visual Search Ranking Factors' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Video SEO ve YouTube SEO', en: 'Video SEO and YouTube SEO' },
    desc: { tr: 'Video içeriklerinizi YouTube ve Google\'da üst sıralara taşıyın.', en: 'Move your video content up the rankings on YouTube and Google.' },
    subsections: [
      {
        title: { tr: 'Video İçerik Optimizasyonu', en: 'Video Content Optimization' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/appearance/video',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Video SEO En İyi Uygulamaları', en: 'Video SEO Best Practices' },
          },
          {
            href: 'https://developers.google.com/search/docs/appearance/structured-data/video',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Video Schema Markup (VideoObject)', en: 'Video Schema Markup (VideoObject)' },
          },
          {
            href: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Video Site Haritaları ve Örnekler', en: 'Video Sitemaps and Examples' },
          },
          {
            href: 'https://www.searchenginejournal.com/how-to-optimize-videos/422208/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Video SEO: Video Optimizasyonu İçin 10 Adım', en: 'Video SEO: 10 Steps to Optimizing Your Videos' },
          },
          {
            href: 'https://backlinko.com/video-seo-guide',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Video SEO: Kapsamlı Oyun Kitabı', en: 'Video SEO: The Complete Playbook' },
          },
        ],
      },
      {
        title: { tr: 'YouTube SEO ve Algoritma', en: 'YouTube SEO and the Algorithm' },
        resources: [
          {
            href: 'https://backlinko.com/how-to-rank-youtube-videos',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'YouTube SEO: Videoları Nasıl Sıralarsınız', en: 'YouTube SEO: How to Rank Your Videos' },
          },
          {
            href: 'https://ahrefs.com/blog/youtube-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'YouTube SEO: Videoları Baştan Sona Sıralama', en: 'YouTube SEO: Ranking Videos From Start to Finish' },
          },
          {
            href: 'https://www.semrush.com/blog/youtube-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'YouTube SEO: Videoları Sıralayın ve Kanalınızı Büyütün', en: 'YouTube SEO: Rank Your Videos and Grow Your Channel' },
          },
          {
            href: 'https://www.semrush.com/academy/courses/you-tube-search-trends-and-seo-strategies/',
            type: 'course',
            author: 'Semrush Academy',
            title: { tr: 'YouTube SEO Stratejileri Kursu', en: 'YouTube Search Trends and SEO Strategies Course' },
          },
          {
            href: 'https://blog.hubspot.com/marketing/youtube-seo',
            type: 'guide',
            author: 'HubSpot',
            title: { tr: 'YouTube SEO: YouTube Araması İçin Optimize Etme', en: 'YouTube SEO: How to Optimize for YouTube Search' },
          },
        ],
      },
      {
        title: { tr: 'Ölçeklenebilir Video ve İçerik Stratejisi', en: 'Scalable Video and Content Strategy' },
        resources: [
          {
            href: 'https://www.searchenginejournal.com/enterprise-seo-operating-models-that-scale-in-2026-and-beyond/566073/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Ölçeklenen Kurumsal SEO Operasyon Modelleri', en: 'Enterprise SEO Operating Models That Scale' },
          },
          {
            href: 'https://www.singlegrain.com/seo/how-to-scale-seo-strategic-frameworks-for-sustainable-growth/',
            type: 'guide',
            author: 'Single Grain',
            title: { tr: 'SEO Nasıl Ölçeklenir: Sürdürülebilir Büyüme Çerçeveleri', en: 'How to Scale SEO: Strategic Frameworks for Sustainable Growth' },
          },
          {
            href: 'https://www.growth-memo.com/p/the-changing-dynamic-of-programmatic',
            type: 'blog',
            author: 'Kevin Indig',
            title: { tr: 'Programatik SEO\'nun Değişen Dinamiği', en: 'The Changing Dynamic of Programmatic SEO' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Off-Page SEO ve Link Building', en: 'Off-Page SEO and Link Building' },
    desc: { tr: 'Site dışı sinyaller, backlink stratejileri ve dijital PR ile otoritenizi güçlendirin.', en: 'Strengthen authority through off-site signals, backlink strategy and digital PR.' },
    subsections: [
      {
        title: { tr: 'Off-Page SEO Genel Kavramlar', en: 'Off-Page SEO Concepts' },
        resources: [
          {
            href: 'https://backlinko.com/off-page-seo-guide',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Off-Page SEO: Kapsamlı Rehber', en: 'Off-Page SEO: The Complete Guide' },
          },
          {
            href: 'https://ahrefs.com/blog/off-page-seo-checklist/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Off-Page SEO Kontrol Listesi', en: 'The Off-Page SEO Checklist' },
          },
          {
            href: 'https://www.semrush.com/blog/off-page-seo-checklist/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Off-Page SEO Kontrol Listesi: En İyi 8 İpucu', en: 'Off-Page SEO Checklist: 8 Top Tips' },
          },
        ],
      },
      {
        title: { tr: 'Link Building Stratejileri', en: 'Link Building Strategies' },
        resources: [
          {
            href: 'https://backlinko.com/link-building',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'SEO İçin Link İnşası: Kesin Rehber', en: 'Link Building for SEO: The Definitive Guide' },
          },
          {
            href: 'https://ahrefs.com/blog/link-building-strategies/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: '9 Link İnşa Stratejisi', en: '9 Link Building Strategies' },
          },
          {
            href: 'https://backlinko.com/resource-page-link-building',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Kaynak Sayfası Link İnşası', en: 'Resource Page Link Building' },
          },
          {
            href: 'https://ahrefs.com/blog/outreach-emails/',
            type: 'template',
            author: 'Ahrefs',
            title: { tr: 'Link İnşa İletişim E-posta Şablonları', en: 'Link Building Outreach Email Templates' },
          },
          {
            href: 'https://ahrefs.com/blog/competitive-link-analysis/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Rakip Geri Bağlantı Analizi', en: 'Competitive Backlink Analysis' },
          },
        ],
      },
      {
        title: { tr: 'Dijital PR', en: 'Digital PR' },
        resources: [
          {
            href: 'https://ahrefs.com/blog/digital-pr/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Dijital PR: Kapsamlı Rehber', en: 'Digital PR: The Complete Guide' },
          },
          {
            href: 'https://www.searchenginejournal.com/digital-pr-link-building/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Link İnşası İçin Dijital PR', en: 'Digital PR for Link Building' },
          },
        ],
      },
      {
        title: { tr: 'Brand Mentions ve Linksiz Sinyaller', en: 'Brand Mentions and Link-Free Signals' },
        resources: [
          {
            href: 'https://searchengineland.com/guide/brand-mentions',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Marka Bahisleri ve SEO: Nedir ve Neden Önemlidir', en: 'Brand Mentions and SEO: What They Are and Why They Matter' },
          },
          {
            href: 'https://searchengineland.com/use-brand-mentions-seo-linkless-future-link-building-290344',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'SEO İçin Marka Bahisleri Nasıl Kullanılır', en: 'How to Use Brand Mentions for SEO' },
          },
          {
            href: 'https://www.semrush.com/blog/brand-mentions/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Marka Bahisleri: Takip ve Optimizasyon Rehberi', en: 'Brand Mentions: A Guide to Tracking and Optimization' },
          },
          {
            href: 'https://ahrefs.com/blog/unlinked-mentions/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Bağlantısız Marka Bahislerini Bağlantıya Dönüştürme', en: 'Turning Unlinked Brand Mentions Into Links' },
          },
          {
            href: 'https://neilpatel.com/blog/brand-mentions/',
            type: 'blog',
            author: 'Neil Patel',
            title: { tr: 'Marka Bahisleri ile SEO Sıralamalarını İyileştirme', en: 'Improving SEO Rankings With Brand Mentions' },
          },
        ],
      },
      {
        title: { tr: 'Toxic Backlink Analizi ve Temizleme', en: 'Toxic Backlink Analysis and Cleanup' },
        resources: [
          {
            href: 'https://support.google.com/webmasters/answer/2648487',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Sitenize Gelen Bağlantıları Reddetme', en: 'Disavow Links to Your Site' },
          },
          {
            href: 'https://searchengineland.com/guide/how-to-disavow-backlinks',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Geri Bağlantıları Reddetme: Zararlı Linkleri Güvenle Kaldırma', en: 'How to Disavow Backlinks: Removing Harmful Links Safely' },
          },
          {
            href: 'https://www.semrush.com/blog/toxic-links-guidelines/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Zararlı Geri Bağlantılar: Nedir ve Nasıl Bulunur', en: 'Toxic Backlinks: What They Are and How to Find Them' },
          },
          {
            href: 'https://www.semrush.com/blog/how-to-disavow/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Geri Bağlantılar Nasıl Reddedilir (Gerçekten Gerekli Mi?)', en: 'How to Disavow Backlinks (and Whether You Really Need To)' },
          },
          {
            href: 'https://ahrefs.com/blog/remove-backlinks/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Geri Bağlantıları Kaldırma ve Link Profilini Temizleme', en: 'Removing Backlinks and Cleaning Up Your Link Profile' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Online İtibar Yönetimi (ORM)', en: 'Online Reputation Management (ORM)' },
    desc: { tr: 'Dijital itibarınızı yönetin, marka algısını kontrol altına alın.', en: 'Manage your digital reputation and take control of how the brand is perceived.' },
    subsections: [
      {
        title: { tr: 'ORM Temelleri ve Stratejileri', en: 'ORM Fundamentals and Strategy' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/online-reputation-management/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Online İtibar Yönetimine Başlangıç Rehberi', en: 'A Beginner\'s Guide to Online Reputation Management' },
          },
          {
            href: 'https://ahrefs.com/blog/online-reputation-management/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Online İtibar Yönetimi: Başlangıç Rehberi', en: 'Online Reputation Management: A Beginner\'s Guide' },
          },
          {
            href: 'https://www.searchenginejournal.com/seo-reputation-management/478005/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'SEO ve İtibar Yönetimi: Derinlemesine Rehber', en: 'SEO and Reputation Management: An In-Depth Guide' },
          },
          {
            href: 'https://neilpatel.com/blog/guide-to-reputation-management/',
            type: 'guide',
            author: 'Neil Patel',
            title: { tr: 'Online İtibar Yönetimi Nedir? Kesin Rehber', en: 'What Is Online Reputation Management? The Definitive Guide' },
          },
          {
            href: 'https://www.semrush.com/local/blog/seo-reputation-management/',
            type: 'blog',
            author: 'Semrush',
            title: { tr: 'SEO İtibar Yönetimi: En İyi Stratejiler', en: 'SEO Reputation Management: The Best Strategies' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Yerel SEO (Local SEO)', en: 'Local SEO' },
    desc: { tr: 'Yerel aramalarda öne çıkarak bölgenizdeki müşterilere ulaşın.', en: 'Stand out in local search and reach customers in your area.' },
    subsections: [
      {
        title: { tr: 'Google Business Profile Optimizasyonu', en: 'Google Business Profile Optimization' },
        resources: [
          {
            href: 'https://support.google.com/business/answer/7091',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google\'da Yerel Sıralamanızı İyileştirme İpuçları', en: 'Tips to Improve Your Local Ranking on Google' },
          },
          {
            href: 'https://whitespark.ca/google-business-profile-guide/',
            type: 'guide',
            author: 'Whitespark',
            title: { tr: 'Google İşletme Profili Optimizasyonu: Kapsamlı Rehber', en: 'Google Business Profile Optimization: The Complete Guide' },
          },
          {
            href: 'https://ahrefs.com/blog/google-my-business/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Google İşletme Profilini 30 Dakikada Optimize Etme', en: 'How to Optimize Your Google Business Profile in 30 Minutes' },
          },
          {
            href: 'https://www.semrush.com/blog/google-business-profile-optimization/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Google İşletme Profili Optimizasyon İpuçları', en: 'Google Business Profile Optimization Tips' },
          },
          {
            href: 'https://whitespark.ca/blog/how-to-outrank-99-of-local-competitors-google-business-profile-tier-list/',
            type: 'blog',
            author: 'Whitespark',
            title: { tr: 'Yerel Rakiplerin %99\'unu Geçme: GBP Seviye Listesi', en: 'How to Outrank 99% of Local Competitors: A Google Business Profile Tier List' },
          },
        ],
      },
      {
        title: { tr: 'Yerel Sıralama Faktörleri', en: 'Local Ranking Factors' },
        resources: [
          {
            href: 'https://whitespark.ca/local-search-ranking-factors/',
            type: 'guide',
            author: 'Whitespark',
            title: { tr: 'Yerel Arama Sıralama Faktörleri Raporu', en: 'The Local Search Ranking Factors Report' },
          },
          {
            href: 'https://ahrefs.com/blog/local-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Yerel SEO: Kapsamlı Rehber', en: 'Local SEO: The Complete Guide' },
          },
          {
            href: 'https://backlinko.com/local-seo-guide',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Yerel SEO: Kesin Rehber', en: 'Local SEO: The Definitive Guide' },
          },
          {
            href: 'https://www.semrush.com/academy/courses/local-seo-essentials-with-semrush/',
            type: 'course',
            author: 'Semrush Academy',
            title: { tr: 'Yerel SEO Temelleri Kursu', en: 'Local SEO Essentials Course' },
          },
        ],
      },
      {
        title: { tr: 'Local Citation ve NAP Tutarlılığı', en: 'Local Citations and NAP Consistency' },
        resources: [
          {
            href: 'https://www.brightlocal.com/learn/local-citations/',
            type: 'guide',
            author: 'BrightLocal',
            title: { tr: 'Yerel Alıntılar (Citation) El Kitabı', en: 'The Local Citations Handbook' },
          },
          {
            href: 'https://www.brightlocal.com/learn/local-citations/nap-data-accuracy/',
            type: 'guide',
            author: 'BrightLocal',
            title: { tr: 'NAP Veri Doğruluğu Neden Önemlidir', en: 'Why NAP Data Accuracy Matters' },
          },
          {
            href: 'https://whitespark.ca/blog/local-citation-building-best-practices/',
            type: 'blog',
            author: 'Whitespark',
            title: { tr: 'Yerel Alıntı Oluşturma En İyi Uygulamaları', en: 'Local Citation Building Best Practices' },
          },
          {
            href: 'https://www.brightlocal.com/learn/building-local-citations-manually/',
            type: 'guide',
            author: 'BrightLocal',
            title: { tr: 'Manuel Yerel Alıntı Oluşturma Rehberi', en: 'A Guide to Building Local Citations Manually' },
          },
        ],
      },
      {
        title: { tr: 'Yorum (Review) Yönetimi', en: 'Review Management' },
        resources: [
          {
            href: 'https://searchengineland.com/guide/how-to-win-at-google-reviews',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Google Yorumları ve SEO: Ölçeklenen İleri Stratejiler', en: 'Google Reviews and SEO: Advanced Strategies That Scale' },
          },
          {
            href: 'https://www.brightlocal.com/learn/google-business-reviews/',
            type: 'guide',
            author: 'BrightLocal',
            title: { tr: 'İşletmeler İçin Google Yorumları Kapsamlı Rehberi', en: 'The Complete Guide to Google Reviews for Businesses' },
          },
          {
            href: 'https://www.searchenginejournal.com/google-reviews-impact-rankings/429783/',
            type: 'blog',
            author: 'Search Engine Journal',
            title: { tr: 'Google Yorumları Harita ve Organik Sıralamayı Nasıl Etkiler', en: 'How Google Reviews Affect Map and Organic Rankings' },
          },
          {
            href: 'https://www.brightlocal.com/learn/review-management/introduction-to-reviews/benefits-of-reviews/',
            type: 'guide',
            author: 'BrightLocal',
            title: { tr: 'Google Yorumlarının İşletme Faydaları', en: 'The Business Benefits of Google Reviews' },
          },
          {
            href: 'https://www.brightlocal.com/learn/local-seo-schema-templates/',
            type: 'template',
            author: 'BrightLocal',
            title: { tr: 'Yerel SEO İçin 8 Schema Şablonu', en: '8 Schema Templates for Local SEO' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'E-ticaret SEO', en: 'E-commerce SEO' },
    desc: { tr: 'Online mağazanızın organik görünürlüğünü ve satışlarını artırın.', en: 'Grow the organic visibility and revenue of your online store.' },
    subsections: [
      {
        title: { tr: 'Ürün ve Kategori Sayfası Optimizasyonu', en: 'Product and Category Page Optimization' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/appearance/structured-data/product',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google\'da Ürün Yapılandırılmış Verisi', en: 'Product Structured Data on Google' },
          },
          {
            href: 'https://developers.google.com/search/docs/specialty/ecommerce/include-structured-data-relevant-to-ecommerce',
            type: 'guide',
            author: 'Google',
            title: { tr: 'E-ticaret Siteleri İçin Yapılandırılmış Veri', en: 'Structured Data for E-commerce Sites' },
          },
          {
            href: 'https://www.shopify.com/blog/ecommerce-seo-beginners-guide',
            type: 'guide',
            author: 'Shopify',
            title: { tr: 'E-ticaret SEO Rehberi', en: 'The E-commerce SEO Guide' },
          },
          {
            href: 'https://www.conductor.com/academy/product-page-seo/',
            type: 'guide',
            author: 'Conductor',
            title: { tr: 'Ürün Sayfası SEO\'su: 17 En İyi Uygulama', en: 'Product Page SEO: 17 Best Practices' },
          },
        ],
      },
      {
        title: { tr: 'E-ticaret Site Mimarisi ve Teknik SEO', en: 'E-commerce Site Architecture and Technical SEO' },
        resources: [
          {
            href: 'https://neilpatel.com/blog/faceted-navigation/',
            type: 'guide',
            author: 'Neil Patel',
            title: { tr: 'Fasetli Navigasyon ve SEO Üzerindeki Etkisi', en: 'Faceted Navigation and Its Impact on SEO' },
          },
          {
            href: 'https://www.semrush.com/academy/courses/boost-ecommerce-seo-with-internal-linking/',
            type: 'course',
            author: 'Semrush Academy',
            title: { tr: 'İç Bağlantı ile E-ticaret SEO\'sunu Güçlendirme', en: 'Boost E-commerce SEO With Internal Linking' },
          },
          {
            href: 'https://www.bigcommerce.com/articles/ecommerce/ecommerce-seo/',
            type: 'guide',
            author: 'BigCommerce',
            title: { tr: 'E-ticaret SEO: Organik Trafiğinizi Artırın', en: 'E-commerce SEO: Grow Your Organic Traffic' },
          },
          {
            href: 'https://developers.google.com/search/docs/appearance/structured-data/product-variants',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Ürün Varyant Yapılandırılmış Verisi', en: 'Product Variant Structured Data' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'SaaS / B2B SEO', en: 'SaaS and B2B SEO' },
    desc: { tr: 'SaaS ve B2B şirketler için ürün odaklı SEO stratejileri geliştirin.', en: 'Develop product-led SEO strategies for SaaS and B2B companies.' },
    subsections: [
      {
        title: { tr: 'SaaS SEO Stratejileri', en: 'SaaS SEO Strategy' },
        resources: [
          {
            href: 'https://ahrefs.com/blog/saas-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SaaS SEO: Denenmiş ve Test Edilmiş Rehber', en: 'SaaS SEO: A Tried and Tested Guide' },
          },
          {
            href: 'https://www.semrush.com/blog/saas-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'SaaS SEO: Büyüme İçin Uygulanabilir Strateji', en: 'SaaS SEO: An Actionable Strategy for Growth' },
          },
          {
            href: 'https://backlinko.com/saas-seo',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'SaaS SEO: Kazanan Bir Strateji Nasıl Kurulur', en: 'SaaS SEO: How to Build a Winning Strategy' },
          },
          {
            href: 'https://www.searchenginejournal.com/guide-enterprise-seo-strategy-saas-brands/476177/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'SaaS Markaları İçin Kurumsal SEO Stratejisi Rehberi', en: 'A Guide to Enterprise SEO Strategy for SaaS Brands' },
          },
          {
            href: 'https://www.searchenginejournal.com/bottom-of-funnel-keywords-seo/489814/',
            type: 'blog',
            author: 'Search Engine Journal',
            title: { tr: 'SEO\'da Dönüşüm Hunisinin Alt Anahtar Kelimelerine Neden Öncelik Verilmeli', en: 'Why You Should Prioritize Bottom-of-Funnel Keywords in SEO' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Kurumsal (Enterprise) SEO', en: 'Enterprise SEO' },
    desc: { tr: 'Büyük ölçekli organizasyonlarda SEO yönetimi, ekip oluşturma ve paydaş iletişimi.', en: 'Run SEO at scale: team structure, governance and stakeholder communication.' },
    subsections: [
      {
        title: { tr: 'Enterprise SEO Yönetimi', en: 'Enterprise SEO Management' },
        resources: [
          {
            href: 'https://searchengineland.com/guide/enterprise-seo',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Kurumsal SEO: Ölçeklenebilir Arama Başarısı İçin Kapsamlı Rehber', en: 'Enterprise SEO: A Complete Guide to Scalable Search Success' },
          },
          {
            href: 'https://www.semrush.com/blog/enterprise-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Kurumsal SEO Nedir? [Zorluklar ve Başarı İpuçları]', en: 'What Is Enterprise SEO? [Challenges and Tips for Success]' },
          },
          {
            href: 'https://www.searchenginejournal.com/enterprise-seo-operating-models-that-scale-in-2026-and-beyond/566073/',
            type: 'blog',
            author: 'Search Engine Journal',
            title: { tr: 'Ölçeklenen Kurumsal SEO Operasyon Modelleri', en: 'Enterprise SEO Operating Models That Scale' },
          },
        ],
      },
      {
        title: { tr: 'SEO Paydaş Yönetimi ve İç İletişim', en: 'Stakeholder Management and Internal Communication' },
        resources: [
          {
            href: 'https://searchengineland.com/guides/seo-stakeholders',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'SEO Paydaşları: Ekipleri Hizalayın ve ROI\'yi Kanıtlayın', en: 'SEO Stakeholders: Align Teams and Prove ROI' },
          },
          {
            href: 'https://searchengineland.com/seos-future-isnt-content-its-governance-464152',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'SEO\'nun Geleceği İçerik Değil, Yönetişimdir', en: 'SEO\'s Future Isn\'t Content, It\'s Governance' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Uluslararası SEO', en: 'International SEO' },
    desc: { tr: 'Farklı ülke ve dillerdeki hedef kitlenize etkili şekilde ulaşın.', en: 'Reach audiences across different countries and languages effectively.' },
    subsections: [
      {
        title: { tr: 'Hreflang ve Çok Dilli Yapılandırma', en: 'Hreflang and Multilingual Setup' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/specialty/international/localized-versions',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Sayfalarınızın Yerelleştirilmiş Sürümleri', en: 'Localized Versions of Your Pages' },
          },
          {
            href: 'https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Çok Bölgeli ve Çok Dilli Siteleri Yönetme', en: 'Managing Multi-Regional and Multilingual Sites' },
          },
          {
            href: 'https://ahrefs.com/blog/international-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: '10 Uluslararası SEO En İyi Uygulaması + Kontrol Listesi', en: '10 International SEO Best Practices + Checklist' },
          },
          {
            href: 'https://searchengineland.com/guide/international-seo',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Uluslararası SEO Temelleri', en: 'International SEO Fundamentals' },
          },
          {
            href: 'https://www.semrush.com/academy/courses/International-seo/',
            type: 'course',
            author: 'Semrush Academy',
            title: { tr: 'Uluslararası SEO Kursu', en: 'International SEO Course' },
          },
        ],
      },
      {
        title: { tr: 'Uluslararası SEO Stratejisi', en: 'International SEO Strategy' },
        resources: [
          {
            href: 'https://ahrefs.com/blog/multilingual-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Çok Dilli SEO: Canva ve Wise Trafiği Nasıl İkiye Katladı', en: 'Multilingual SEO: How Canva and Wise Doubled Their Traffic' },
          },
          {
            href: 'https://www.screamingfrog.co.uk/seo-spider/tutorials/how-to-audit-hreflang/',
            type: 'tool',
            author: 'Screaming Frog',
            title: { tr: 'Hreflang Denetimi ve Test Rehberi', en: 'How to Audit and Test Hreflang' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Mobil SEO', en: 'Mobile SEO' },
    desc: { tr: 'Mobile-first dünyasında sitenizin mobil performansını optimize edin.', en: 'Optimize mobile performance in a mobile-first world.' },
    subsections: [
      {
        title: { tr: 'Mobile-First İndeksleme ve Optimizasyon', en: 'Mobile-First Indexing and Optimization' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Mobile-First İndeksleme En İyi Uygulamaları', en: 'Mobile-First Indexing Best Practices' },
          },
          {
            href: 'https://www.semrush.com/blog/mobile-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Mobil SEO: Kapsamlı Rehber', en: 'Mobile SEO: The Complete Guide' },
          },
          {
            href: 'https://ahrefs.com/blog/mobile-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Mobil SEO: 10 Optimizasyon İpucu', en: 'Mobile SEO: 10 Optimization Tips' },
          },
          {
            href: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Core Web Vitals ve Google Arama Sonuçları', en: 'Core Web Vitals and Google Search Results' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'App Store Optimization (ASO)', en: 'App Store Optimization (ASO)' },
    desc: { tr: 'Uygulama mağazalarında görünürlüğünüzü artırarak daha fazla indirme elde edin.', en: 'Increase visibility in app stores and win more installs.' },
    subsections: [
      {
        title: { tr: 'ASO Temelleri', en: 'ASO Fundamentals' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/app-store-optimization/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Uygulama Mağazası Optimizasyonu Nedir? Kapsamlı Rehber', en: 'What Is App Store Optimization? The Complete Guide' },
          },
          {
            href: 'https://www.searchenginejournal.com/app-store-optimization-how-to-guide/241967/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Uygulama Mağazası Optimizasyonu (ASO) Kapsamlı Rehberi', en: 'App Store Optimization (ASO): A Complete How-To Guide' },
          },
          {
            href: 'https://neilpatel.com/blog/app-store-optimization/',
            type: 'guide',
            author: 'Neil Patel',
            title: { tr: 'ASO Kapsamlı Rehberi', en: 'The Complete Guide to ASO' },
          },
          {
            href: 'https://searchengineland.com/what-is-aso-7-fundamentals-to-app-store-optimization-445495',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'ASO Nedir? Uygulama Mağazası Optimizasyonunun 7 Temeli', en: 'What Is ASO? 7 Fundamentals of App Store Optimization' },
          },
          {
            href: 'https://blog.hubspot.com/marketing/aso-marketing-strategy',
            type: 'blog',
            author: 'HubSpot',
            title: { tr: 'ASO Pazarlama Stratejisi Derinlemesine İnceleme', en: 'An ASO Marketing Strategy Deep Dive' },
          },
        ],
      },
      {
        title: { tr: 'Google Play SEO', en: 'Google Play SEO' },
        resources: [
          {
            href: 'https://neilpatel.com/blog/seo-aso-google-play-store/',
            type: 'guide',
            author: 'Neil Patel',
            title: { tr: 'Google Play Store Optimizasyonları: ASO ve SEO', en: 'Google Play Store Optimization: ASO and SEO' },
          },
          {
            href: 'https://searchengineland.com/app-store-vs-google-play-aso-strategy-450983',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'App Store vs Google Play: ASO Stratejinizi Uyarlama', en: 'App Store vs Google Play: Adapting Your ASO Strategy' },
          },
          {
            href: 'https://searchengineland.com/app-store-optimization-tips-seo-research-skills-438728',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'ASO: SEO Araştırma Becerilerinizi Kullanmanın 8 İpucu', en: 'ASO: 8 Tips for Using Your SEO Research Skills' },
          },
          {
            href: 'https://neilpatel.com/blog/aso-keyword-research/',
            type: 'guide',
            author: 'Neil Patel',
            title: { tr: 'Uygulama Mağazası Anahtar Kelime Araştırma Rehberi', en: 'A Guide to App Store Keyword Research' },
          },
        ],
      },
      {
        title: { tr: 'Apple App Store SEO', en: 'Apple App Store SEO' },
        resources: [
          {
            href: 'https://neilpatel.com/blog/apple-app-store-aso/',
            type: 'guide',
            author: 'Neil Patel',
            title: { tr: 'Apple App Store Optimizasyonu (ASO)', en: 'Apple App Store Optimization (ASO)' },
          },
          {
            href: 'https://searchengineland.com/app-store-vs-google-play-aso-strategy-450983',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'App Store vs Google Play: ASO Stratejinizi Uyarlama', en: 'App Store vs Google Play: Adapting Your ASO Strategy' },
          },
          {
            href: 'https://sensortower.com/blog/the-ios-aso-keyword-research-and-optimization-workflow-guide',
            type: 'guide',
            author: 'Sensor Tower',
            title: { tr: 'iOS ASO Anahtar Kelime Araştırma ve Optimizasyon İş Akışı', en: 'The iOS ASO Keyword Research and Optimization Workflow' },
          },
          {
            href: 'https://searchengineland.com/app-store-optimization-tips-seo-research-skills-438728',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'ASO: SEO Araştırma Becerilerinizi Kullanmanın 8 İpucu', en: 'ASO: 8 Tips for Using Your SEO Research Skills' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Haber SEO ve Google Discover', en: 'News SEO and Google Discover' },
    desc: { tr: 'Google News, Top Stories ve Discover\'da görünürlük kazanın.', en: 'Earn visibility in Google News, Top Stories and Discover.' },
    subsections: [
      {
        title: { tr: 'Haber SEO (News SEO)', en: 'News SEO' },
        resources: [
          {
            href: 'https://www.searchenginejournal.com/google-news-top-stories-discover/393182/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Google News, Top Stories ve Discover İçin Optimizasyon Rehberi', en: 'A Guide to Optimizing for Google News, Top Stories and Discover' },
          },
          {
            href: 'https://www.semrush.com/blog/news-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Haber SEO Rehberi: Haber Makaleleri Nasıl Optimize Edilir', en: 'The News SEO Guide: How to Optimize News Articles' },
          },
          {
            href: 'https://searchengineland.com/google-news-optimization-boost-content-visibility-traffic-395031',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Google News Optimizasyonu ile İçerik Görünürlüğünü Artırma', en: 'Boosting Content Visibility With Google News Optimization' },
          },
          {
            href: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Haber Site Haritası Oluşturma', en: 'Create a News Sitemap' },
          },
        ],
      },
      {
        title: { tr: 'Google Discover Optimizasyonu', en: 'Google Discover Optimization' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/appearance/google-discover',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google Discover\'da Yer Alma', en: 'Appearing in Google Discover' },
          },
          {
            href: 'https://searchengineland.com/google-discover-optimization-a-complete-guide-439665',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Google Discover Optimizasyonu: Kapsamlı Rehber', en: 'Google Discover Optimization: A Complete Guide' },
          },
          {
            href: 'https://www.semrush.com/blog/how-to-optimize-for-google-discover/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Google Discover Nedir? (ve Nasıl Yer Alınır)', en: 'What Is Google Discover? (And How to Get Featured)' },
          },
          {
            href: 'https://ahrefs.com/blog/google-discover/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Google Discover: Nasıl Sıralanılır ve Trafik Çekilir', en: 'Google Discover: How to Rank and Drive Traffic' },
          },
          {
            href: 'https://developers.google.com/search/docs/appearance/web-stories-creation-best-practices',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Web Stories Oluşturma En İyi Uygulamaları', en: 'Web Stories Creation Best Practices' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Mevsimsel ve Etkinlik Odaklı SEO', en: 'Seasonal and Event-Driven SEO' },
    desc: { tr: 'Sezona özel kampanyalar ve etkinlik bazlı SEO stratejileri ile doğru zamanda trafik yakalayın.', en: 'Catch demand at the right moment with seasonal campaigns and event-driven SEO.' },
    subsections: [
      {
        title: { tr: 'Mevsimsel SEO Stratejileri', en: 'Seasonal SEO Strategy' },
        resources: [
          {
            href: 'https://searchengineland.com/seo-best-practices-black-friday-holiday-season-389219',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'Black Friday ve Tatil Sezonu İçin 5 SEO En İyi Uygulaması', en: '5 SEO Best Practices for Black Friday and the Holiday Season' },
          },
          {
            href: 'https://ahrefs.com/blog/holiday-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: '6 Tatil SEO İpucu (Alışveriş Sezonunda Trafiği Artırma)', en: '6 Holiday SEO Tips (Growing Traffic in the Shopping Season)' },
          },
          {
            href: 'https://www.searchenginejournal.com/seasonal-seo-tips/438300/',
            type: 'blog',
            author: 'Search Engine Journal',
            title: { tr: 'Mevsimsel SEO İpuçları: Yıl Boyu Arama İyileştirmeleri', en: 'Seasonal SEO Tips: Search Improvements All Year Round' },
          },
          {
            href: 'https://searchengineland.com/seasonal-content-marketing-guide-387771',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Mevsimsel İçerik Pazarlama Rehberiniz', en: 'Your Guide to Seasonal Content Marketing' },
          },
          {
            href: 'https://searchengineland.com/prep-holiday-seo-campaigns-now-how-430986',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'Tatil SEO Kampanyalarınızı Neden Şimdi Hazırlamalısınız', en: 'Why You Should Prepare Your Holiday SEO Campaigns Now' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Google Algoritmaları ve Güncellemeler', en: 'Google Algorithms and Updates' },
    desc: { tr: 'Google\'ın temel algoritmalarını, güncellemelerini ve sıralama sistemlerini anlayın.', en: 'Understand Google\'s core algorithms, updates and ranking systems.' },
    subsections: [
      {
        title: { tr: 'Google Core Update\'ler', en: 'Google Core Updates' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/appearance/core-updates',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google Arama Temel Güncellemeleri', en: 'Google Search Core Updates' },
          },
          {
            href: 'https://searchengineland.com/guide/google-core-updates',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Google Core Güncellemeleri: Ne Anlama Gelir ve Nasıl Toparlanılır', en: 'Google Core Updates: What They Mean and How to Recover' },
          },
          {
            href: 'https://www.searchenginejournal.com/google-algorithm-history/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Google Algoritma Güncellemeleri ve Değişiklikleri: Tam Tarihçe', en: 'Google Algorithm Updates and Changes: The Complete History' },
          },
          {
            href: 'https://www.semrush.com/blog/google-algorithm-update/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Google Algoritma Güncellemeleri Zaman Çizelgesi', en: 'The Google Algorithm Update Timeline' },
          },
          {
            href: 'https://ahrefs.com/google-algorithm-updates',
            type: 'tool',
            author: 'Ahrefs',
            title: { tr: 'Google Algoritma Güncellemeleri Tarihçesi', en: 'A History of Google Algorithm Updates' },
          },
        ],
      },
      {
        title: { tr: 'Helpful Content Update', en: 'The Helpful Content Update' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Yararlı, Güvenilir ve Kullanıcı Odaklı İçerik Oluşturma', en: 'Creating Helpful, Reliable, People-First Content' },
          },
          {
            href: 'https://developers.google.com/search/blog/2022/08/helpful-content-update',
            type: 'blog',
            author: 'Google',
            title: { tr: 'İçerik Oluşturucuların Helpful Content Update Hakkında Bilmesi Gerekenler', en: 'What Creators Should Know About the Helpful Content Update' },
          },
          {
            href: 'https://searchengineland.com/library/platforms/google/google-algorithm-updates/helpful-content-update',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Google\'ın Helpful Content Update\'i', en: 'Google\'s Helpful Content Update' },
          },
          {
            href: 'https://www.semrush.com/blog/helpful-content/',
            type: 'blog',
            author: 'Semrush',
            title: { tr: 'Google\'ın Yararlı İçerik Güncellemesi ve Ne Yapmalı', en: 'Google\'s Helpful Content Update and What to Do About It' },
          },
          {
            href: 'https://developers.google.com/search/blog/2024/03/core-update-spam-policies',
            type: 'blog',
            author: 'Google',
            title: { tr: 'Mart 2024 Core Update ve Yeni Spam Politikaları', en: 'The March 2024 Core Update and New Spam Policies' },
          },
        ],
      },
      {
        title: { tr: 'Spam Update ve Algoritma Türleri', en: 'Spam Updates and Algorithm Types' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/essentials/spam-policies',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google Web Araması Spam Politikaları', en: 'Google Web Search Spam Policies' },
          },
          {
            href: 'https://developers.google.com/search/docs/appearance/spam-updates',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google Arama Spam Güncellemeleri', en: 'Google Search Spam Updates' },
          },
          {
            href: 'https://developers.google.com/search/blog/2022/12/december-22-link-spam-update',
            type: 'blog',
            author: 'Google',
            title: { tr: 'Google Arama İçin Bağlantı Spam Güncellemesi', en: 'The Link Spam Update for Google Search' },
          },
          {
            href: 'https://searchengineland.com/google-released-massive-search-quality-improvements-with-march-2024-core-update-and-multiple-spam-updates-438144',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'Mart 2024 Core Update ve Spam Güncellemeleri Açıklaması', en: 'The March 2024 Core Update and Spam Updates Explained' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Google Cezaları ve Kurtarma', en: 'Google Penalties and Recovery' },
    desc: { tr: 'Google ceza türlerini öğrenin, manual action\'ları çözün ve sitenizi kurtarın.', en: 'Learn the penalty types, resolve manual actions and recover your site.' },
    subsections: [
      {
        title: { tr: 'Google Ceza Türleri', en: 'Google Penalty Types' },
        resources: [
          {
            href: 'https://searchengineland.com/guide/google-penalty',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Google Ceza Rehberi: Tespit, Kurtarma ve Önleme', en: 'The Google Penalty Guide: Detection, Recovery and Prevention' },
          },
          {
            href: 'https://www.searchenginejournal.com/the-complete-list-of-google-penalties-and-how-to-recover/201510/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Google Cezalarının Tam Listesi ve Kurtarma Yolları', en: 'The Complete List of Google Penalties and How to Recover' },
          },
          {
            href: 'https://ahrefs.com/blog/google-penalties/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Google Cezaları: Yeni Başlayanlar İçin Rehber', en: 'Google Penalties: A Beginner\'s Guide' },
          },
          {
            href: 'https://www.semrush.com/blog/google-penalty/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Google Cezalarını Anlamak: Kapsamlı Rehber', en: 'Understanding Google Penalties: A Complete Guide' },
          },
        ],
      },
      {
        title: { tr: 'Manual Actions ve Recovery Süreçleri', en: 'Manual Actions and Recovery' },
        resources: [
          {
            href: 'https://support.google.com/webmasters/answer/9044175',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Manuel İşlemler Raporu - Search Console Yardım', en: 'The Manual Actions Report — Search Console Help' },
          },
          {
            href: 'https://searchengineland.com/google-penalties-manual-actions-notifications-guide-388509',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Google Cezaları, Manuel İşlemler ve Bildirimler Rehberi', en: 'A Guide to Google Penalties, Manual Actions and Notifications' },
          },
          {
            href: 'https://searchengineland.com/google-manual-actions-frequently-asked-questions-284289',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'Google Manuel İşlemler: Sık Sorulan Sorular ve Cevaplar', en: 'Google Manual Actions: Frequently Asked Questions' },
          },
          {
            href: 'https://developers.google.com/search/docs/essentials',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google Arama Temelleri (Web Yöneticisi Yönergeleri)', en: 'Google Search Essentials (Webmaster Guidelines)' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Negatif SEO Tespiti ve Korunma', en: 'Negative SEO Detection and Defence' },
    desc: { tr: 'Kötü niyetli SEO saldırılarını tespit edin, sitenizi koruyun ve toparlanın.', en: 'Detect malicious SEO attacks, defend your site and recover.' },
    subsections: [
      {
        title: { tr: 'Negatif SEO Türleri ve Tespit Yöntemleri', en: 'Negative SEO Types and Detection' },
        resources: [
          {
            href: 'https://searchengineland.com/guide/negative-seo',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Negatif SEO Nedir? Önleme, Tespit ve Kurtarma', en: 'What Is Negative SEO? Prevention, Detection and Recovery' },
          },
          {
            href: 'https://www.semrush.com/blog/what-is-negative-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Negatif SEO Nedir ve Saldırılar Nasıl Önlenir', en: 'What Negative SEO Is and How to Prevent Attacks' },
          },
          {
            href: 'https://ahrefs.com/blog/negative-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Negatif SEO Saldırıları Nasıl Tespit Edilir ve Savuşturulur', en: 'How to Detect and Fend Off Negative SEO Attacks' },
          },
          {
            href: 'https://www.searchenginejournal.com/combat-recover-negative-seo-attack-survival-guide/114507/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Negatif SEO Saldırısından Kurtulma: Hayatta Kalma Rehberi', en: 'Recovering From a Negative SEO Attack: A Survival Guide' },
          },
          {
            href: 'https://searchengineland.com/heres-how-to-monitor-for-negative-seo-308750',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'Negatif SEO İçin Nasıl İzleme Yapılır', en: 'How to Monitor for Negative SEO' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'SEO Denetimi (Audit)', en: 'SEO Audits' },
    desc: { tr: 'Kapsamlı site denetimleri yaparak sorunları tespit edin ve iyileştirme planı oluşturun.', en: 'Run thorough site audits to surface issues and build an improvement plan.' },
    subsections: [
      {
        title: { tr: 'Denetim Süreci ve Kontrol Listeleri', en: 'The Audit Process and Checklists' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/seo-audit/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Kapsamlı SEO Denetimi Nasıl Yapılır', en: 'How to Run a Complete SEO Audit' },
          },
          {
            href: 'https://ahrefs.com/blog/seo-audit/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: '13 Adımda SEO Denetimi Nasıl Yapılır', en: 'How to Do an SEO Audit in 13 Steps' },
          },
          {
            href: 'https://backlinko.com/seo-site-audit',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: '18 Adımlık SEO Denetim Kontrol Listesi', en: 'The 18-Step SEO Audit Checklist' },
          },
          {
            href: 'https://www.searchenginejournal.com/seo-audit/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'SEO Denetimi Nasıl Yapılır: Kapsamlı Kontrol Listesi', en: 'How to Do an SEO Audit: A Complete Checklist' },
          },
          {
            href: 'https://www.semrush.com/blog/technical-seo-audit/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Teknik SEO Denetimi Nasıl Yapılır', en: 'How to Run a Technical SEO Audit' },
          },
          {
            href: 'https://www.screamingfrog.co.uk/blog/mastering-seo-audits/',
            type: 'guide',
            author: 'Screaming Frog',
            title: { tr: 'Screaming Frog ile SEO Denetimlerinde Uzmanlaşma', en: 'Mastering SEO Audits With Screaming Frog' },
          },
        ],
      },
      {
        title: { tr: 'Denetim Araçları ve Şablonları', en: 'Audit Tools and Templates' },
        resources: [
          {
            href: 'https://www.semrush.com/siteaudit/',
            type: 'tool',
            author: 'Semrush',
            title: { tr: 'Semrush Site Denetim Aracı', en: 'Semrush Site Audit' },
          },
          {
            href: 'https://ahrefs.com/site-audit',
            type: 'tool',
            author: 'Ahrefs',
            title: { tr: 'Ahrefs Site Denetim Aracı', en: 'Ahrefs Site Audit' },
          },
          {
            href: 'https://www.screamingfrog.co.uk/seo-spider/',
            type: 'tool',
            author: 'Screaming Frog',
            title: { tr: 'Screaming Frog SEO Spider', en: 'Screaming Frog SEO Spider' },
          },
          {
            href: 'https://www.seoptimer.com/',
            type: 'tool',
            author: 'SEOptimer',
            title: { tr: 'SEOptimer: Ücretsiz SEO Denetim Aracı', en: 'SEOptimer: Free SEO Audit Tool' },
          },
          {
            href: 'https://backlinko.com/templates/marketing/seo-audit',
            type: 'template',
            author: 'Backlinko',
            title: { tr: 'Derinlemesine SEO Denetim Şablonu', en: 'An In-Depth SEO Audit Template' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'SEO Analitik ve Raporlama', en: 'SEO Analytics and Reporting' },
    desc: { tr: 'SEO performansınızı ölçün, analiz edin ve etkili raporlar hazırlayın.', en: 'Measure and analyse SEO performance, then report it in a way people act on.' },
    subsections: [
      {
        title: { tr: 'Google Search Console', en: 'Google Search Console' },
        resources: [
          {
            href: 'https://search.google.com/search-console',
            type: 'tool',
            author: 'Google',
            title: { tr: 'Google Search Console', en: 'Google Search Console' },
          },
          {
            href: 'https://ahrefs.com/blog/google-search-console/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Google Search Console: Kapsamlı Rehber', en: 'Google Search Console: The Complete Guide' },
          },
          {
            href: 'https://support.google.com/webmasters/answer/7576553',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Performans Raporu Rehberi', en: 'The Performance Report Guide' },
          },
        ],
      },
      {
        title: { tr: 'Google Analytics 4', en: 'Google Analytics 4' },
        resources: [
          {
            href: 'https://analytics.google.com/',
            type: 'tool',
            author: 'Google',
            title: { tr: 'Google Analytics 4', en: 'Google Analytics 4' },
          },
          {
            href: 'https://ahrefs.com/blog/google-analytics-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO İçin Google Analytics', en: 'Google Analytics for SEO' },
          },
          {
            href: 'https://analytics.google.com/analytics/academy/',
            type: 'course',
            author: 'Google',
            title: { tr: 'Google Analytics Akademisi', en: 'Google Analytics Academy' },
          },
        ],
      },
      {
        title: { tr: 'SEO Raporlama ve KPI\'lar', en: 'SEO Reporting and KPIs' },
        resources: [
          {
            href: 'https://ahrefs.com/blog/seo-report/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO Raporlama: Kapsamlı Rehber', en: 'SEO Reporting: The Complete Guide' },
          },
          {
            href: 'https://lookerstudio.google.com/',
            type: 'tool',
            author: 'Google',
            title: { tr: 'Google Looker Studio', en: 'Google Looker Studio' },
          },
          {
            href: 'https://ahrefs.com/blog/seo-kpis/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Takip Etmeniz Gereken SEO KPI\'ları', en: 'The SEO KPIs You Should Track' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'SEO Tahminleme ve ROI Hesaplama', en: 'SEO Forecasting and ROI Modelling' },
    desc: { tr: 'SEO yatırım getirisini ölçün, trafik tahminleri yapın ve paydaşlara değer gösterin.', en: 'Model return on SEO investment, forecast traffic and prove value to stakeholders.' },
    subsections: [
      {
        title: { tr: 'SEO Tahminleme Modelleri', en: 'SEO Forecasting Models' },
        resources: [
          {
            href: 'https://ahrefs.com/blog/seo-forecasting/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO Tahminleme: Onay Almanın Sanatı', en: 'SEO Forecasting: The Art of Getting Buy-In' },
          },
          {
            href: 'https://www.semrush.com/blog/seo-forecasting/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'SEO Tahminleme Nedir ve Neden Önemlidir', en: 'What SEO Forecasting Is and Why It Matters' },
          },
          {
            href: 'https://searchengineland.com/seo-forecasting-google-sheets-guide-451253',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Google Sheets ile SEO Tahminleme Rehberiniz', en: 'Your Guide to SEO Forecasting With Google Sheets' },
          },
        ],
      },
      {
        title: { tr: 'SEO ROI Hesaplama', en: 'Calculating SEO ROI' },
        resources: [
          {
            href: 'https://ahrefs.com/blog/seo-roi/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO ROI Nasıl Ölçülür (6 Zorluk Dahil)', en: 'How to Measure SEO ROI (Including 6 Challenges)' },
          },
          {
            href: 'https://www.semrush.com/blog/seo-roi/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'SEO\'nun ROI\'si: Formüllerle Yatırım Getirisi Nasıl Ölçülür', en: 'The ROI of SEO: How to Measure Return With Formulas' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'UX, CRO ve Dönüşüm Optimizasyonu', en: 'UX, CRO and Conversion Optimization' },
    desc: { tr: 'Kullanıcı deneyimi ile SEO\'yu birleştirin, trafik ve dönüşüm oranlarını optimize edin.', en: 'Combine user experience with SEO to optimize both traffic and conversion.' },
    subsections: [
      {
        title: { tr: 'UX (Kullanıcı Deneyimi) ve SEO İlişkisi', en: 'How UX and SEO Relate' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/ux-and-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'UX ve SEO Nasıl İlişkilidir (ve İkisi İçin Optimizasyon)', en: 'How UX and SEO Relate (and How to Optimize for Both)' },
          },
          {
            href: 'https://ahrefs.com/blog/ux-and-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'UX ve SEO: Sadece SERP\'i Değil, Arama Yapan Kişiyi Kazanma', en: 'UX and SEO: Winning the Searcher, Not Just the SERP' },
          },
          {
            href: 'https://blog.hubspot.com/website/ux-and-seo',
            type: 'blog',
            author: 'HubSpot',
            title: { tr: 'UX ve SEO: Ne Kadar Önemli?', en: 'UX and SEO: How Much Does It Matter?' },
          },
          {
            href: 'https://www.searchenginejournal.com/ux-design-seo/476959/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Kullanıcı Deneyimi Nedir? Tasarım SEO\'yu Nasıl Etkiler', en: 'What Is User Experience? How Design Affects SEO' },
          },
          {
            href: 'https://searchengineland.com/seo-ux-strategic-balance-437276',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'SEO ve UX: Stratejik Dengeyi Bulma', en: 'SEO and UX: Finding the Strategic Balance' },
          },
        ],
      },
      {
        title: { tr: 'SEO + CRO (Dönüşüm Oranı Optimizasyonu)', en: 'SEO + CRO (Conversion Rate Optimization)' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/seo-and-cro/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'SEO ve CRO: Daha İyi Sonuçlar İçin Stratejileri Birleştirme', en: 'SEO and CRO: Combining Strategies for Better Results' },
          },
          {
            href: 'https://backlinko.com/conversion-rate-optimization',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Dönüşüm Oranı Optimizasyonu: Kesin Rehber', en: 'Conversion Rate Optimization: The Definitive Guide' },
          },
          {
            href: 'https://blog.hubspot.com/marketing/conversion-rate-optimization-guide',
            type: 'guide',
            author: 'HubSpot',
            title: { tr: 'Dönüşüm Oranı Optimizasyonu (CRO) Stratejisi', en: 'A Conversion Rate Optimization (CRO) Strategy' },
          },
          {
            href: 'https://neilpatel.com/blog/seo-conversion/',
            type: 'blog',
            author: 'Neil Patel',
            title: { tr: 'SEO vs CRO: Dönüşüm Sağlayan Arama Trafiği Nasıl Çekilir', en: 'SEO vs CRO: How to Attract Search Traffic That Converts' },
          },
          {
            href: 'https://searchengineland.com/driving-traffic-not-leads-seo-cro-440747',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'Trafik Var Ama Lead Yok mu? SEO ve CRO ile Kazanın', en: 'Traffic but No Leads? Win With SEO and CRO' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'SEO A/B Testleri ve Deneyler', en: 'SEO A/B Testing and Experiments' },
    desc: { tr: 'SEO değişikliklerini veri ile doğrulayın, split test ve deney süreçlerini öğrenin.', en: 'Validate SEO changes with data through split testing and controlled experiments.' },
    subsections: [
      {
        title: { tr: 'SEO A/B Testi Temelleri', en: 'SEO A/B Testing Fundamentals' },
        resources: [
          {
            href: 'https://www.searchpilot.com/resources/blog/what-is-seo-split-testing',
            type: 'guide',
            author: 'SearchPilot',
            title: { tr: 'SEO A/B Testi Nedir? Kapsamlı Rehber', en: 'What Is SEO A/B Testing? A Complete Guide' },
          },
          {
            href: 'https://www.semrush.com/blog/seo-a-b-split-testing-101/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'SEO A/B Split Testi 101', en: 'SEO A/B Split Testing 101' },
          },
          {
            href: 'https://vwo.com/blog/seo-ab-testing/',
            type: 'guide',
            author: 'VWO',
            title: { tr: 'SEO A/B Test Rehberi: Adımlar, Araçlar ve Gerçek Örnekler', en: 'The SEO A/B Testing Guide: Steps, Tools and Real Examples' },
          },
          {
            href: 'https://www.shopify.com/blog/seo-ab-testing',
            type: 'guide',
            author: 'Shopify',
            title: { tr: 'SEO A/B Testi Nasıl Çalışır: Test Tasarlama Rehberi', en: 'How SEO A/B Testing Works: A Guide to Designing Tests' },
          },
        ],
      },
      {
        title: { tr: 'Split Testing Araçları ve Vaka Çalışmaları', en: 'Split Testing Tools and Case Studies' },
        resources: [
          {
            href: 'https://www.searchpilot.com/resources/case-studies',
            type: 'guide',
            author: 'SearchPilot',
            title: { tr: 'SEO Test Sonuçları ve Vaka Çalışmaları', en: 'SEO Test Results and Case Studies' },
          },
          {
            href: 'https://www.searchpilot.com/resources/blog/how-to-design-robust-seo-experiments',
            type: 'guide',
            author: 'SearchPilot',
            title: { tr: 'Sağlam SEO Deneyleri Nasıl Tasarlanır', en: 'How to Design Robust SEO Experiments' },
          },
          {
            href: 'https://www.semrush.com/splitsignal/',
            type: 'tool',
            author: 'Semrush',
            title: { tr: 'SplitSignal - SEO A/B Testi Aracı', en: 'SplitSignal — SEO A/B Testing Tool' },
          },
          {
            href: 'https://www.semrush.com/kb/1201-how-to-draft-a-splitsignal-test-a-complete-guide',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'SplitSignal Testi Hazırlama: Kapsamlı Rehber', en: 'How to Draft a SplitSignal Test: A Complete Guide' },
          },
          {
            href: 'https://www.kevin-indig.com/how-to-run-bayesian-seo-tests/',
            type: 'blog',
            author: 'Kevin Indig',
            title: { tr: 'Bayesian SEO Testleri Nasıl Çalıştırılır', en: 'How to Run Bayesian SEO Tests' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Programmatic SEO', en: 'Programmatic SEO' },
    desc: { tr: 'Ölçeklenebilir içerik üretimi ve programatik SEO ile büyük trafik potansiyeli yakalayın.', en: 'Unlock large traffic potential with scalable, data-driven page generation.' },
    subsections: [
      {
        title: { tr: 'Programmatic SEO Stratejileri', en: 'Programmatic SEO Strategy' },
        resources: [
          {
            href: 'https://ahrefs.com/blog/programmatic-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Programatik SEO: Yeni Başlayanlar İçin Açıklama', en: 'Programmatic SEO Explained for Beginners' },
          },
          {
            href: 'https://backlinko.com/programmatic-seo',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Programatik SEO: Nedir, İpuçları ve Örnekler', en: 'Programmatic SEO: What It Is, Tips and Examples' },
          },
          {
            href: 'https://searchengineland.com/guide/programmatic-seo',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Programatik SEO: İçerik, Sıralama ve Trafiği Ölçeklendirme', en: 'Programmatic SEO: Scaling Content, Rankings and Traffic' },
          },
          {
            href: 'https://www.growth-memo.com/p/the-changing-dynamic-of-programmatic',
            type: 'blog',
            author: 'Kevin Indig',
            title: { tr: 'Programatik SEO\'nun Değişen Dinamiği', en: 'The Changing Dynamic of Programmatic SEO' },
          },
          {
            href: 'https://playbooks.hypergrowthpartners.com/p/ai-powered-programmatic-seo',
            type: 'guide',
            author: 'HyperGrowth Partners',
            title: { tr: 'AI Destekli Programatik SEO Oyun Kitabı', en: 'The AI-Powered Programmatic SEO Playbook' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Sesli Arama (Voice Search) Optimizasyonu', en: 'Voice Search Optimization' },
    desc: { tr: 'Sesli asistanlar ve konuşma dili sorguları için içeriklerinizi optimize edin.', en: 'Optimize content for voice assistants and conversational queries.' },
    subsections: [
      {
        title: { tr: 'Sesli Arama SEO Stratejileri', en: 'Voice Search SEO Strategy' },
        resources: [
          {
            href: 'https://backlinko.com/optimize-for-voice-search',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Sesli Arama Optimizasyonu: Kesin Rehber', en: 'Voice Search Optimization: The Definitive Guide' },
          },
          {
            href: 'https://backlinko.com/voice-search-seo-study',
            type: 'blog',
            author: 'Backlinko',
            title: { tr: '10.000 Google Home Sonucunu Analiz Ettik: Sesli Arama SEO', en: 'We Analysed 10,000 Google Home Results: Voice Search SEO' },
          },
          {
            href: 'https://searchengineland.com/guide/voice-search',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Sesli Arama SEO: Sözlü Sorgular İçin Nasıl Optimize Edilir', en: 'Voice Search SEO: How to Optimize for Spoken Queries' },
          },
          {
            href: 'https://www.searchenginejournal.com/voice-search-optimization-strategy/379946/',
            type: 'blog',
            author: 'Search Engine Journal',
            title: { tr: 'Sesli Arama SEO: İşletmeler İçin 9 Pratik İpucu', en: 'Voice Search SEO: 9 Practical Tips for Businesses' },
          },
          {
            href: 'https://www.semrush.com/blog/voice-search-optimization/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Sesli Arama Optimizasyonu: Sonuçlarınızı İyileştirmenin 6 Yolu', en: 'Voice Search Optimization: 6 Ways to Improve Your Results' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'SERP Özellikleri ve Zero-Click Arama', en: 'SERP Features and Zero-Click Search' },
    desc: { tr: 'Tıklamasız aramaların yükselişi ve AI arama sonuçlarının SEO\'ya etkisini anlayın.', en: 'Understand the rise of zero-click search and what AI results mean for SEO.' },
    subsections: [
      {
        title: { tr: 'Zero-Click Arama Trendi', en: 'The Zero-Click Search Trend' },
        resources: [
          {
            href: 'https://searchengineland.com/guide/zero-click-searches',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Zero-Click Aramalar: Nedir ve SEO\'cular Nasıl Uyum Sağlar', en: 'Zero-Click Searches: What They Are and How SEOs Adapt' },
          },
          {
            href: 'https://www.semrush.com/blog/zero-click-searches/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Tıklamasız Arama Pazarında Nasıl Kazanılır', en: 'How to Win in a Zero-Click Search Market' },
          },
          {
            href: 'https://ahrefs.com/blog/zero-click-search/',
            type: 'blog',
            author: 'Ahrefs',
            title: { tr: 'Zero-Click Aramaya Hoş Geldiniz', en: 'Welcome to Zero-Click Search' },
          },
          {
            href: 'https://www.bain.com/insights/goodbye-clicks-hello-ai-zero-click-search-redefines-marketing/',
            type: 'blog',
            author: 'Bain & Company',
            title: { tr: 'Hoşçakal Tıklamalar, Merhaba AI: Tıklamasız Arama Pazarlamayı Yeniden Tanımlıyor', en: 'Goodbye Clicks, Hello AI: Zero-Click Search Redefines Marketing' },
          },
        ],
      },
      {
        title: { tr: 'AI Overviews ve SGE Etkisi', en: 'AI Overviews and the Impact of SGE' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/appearance/ai-features',
            type: 'guide',
            author: 'Google',
            title: { tr: 'AI Özellikleri ve Web Siteniz', en: 'AI Features and Your Website' },
          },
          {
            href: 'https://www.semrush.com/blog/semrush-ai-overviews-study/',
            type: 'blog',
            author: 'Semrush',
            title: { tr: 'AI Overviews Çalışması: SEO Verilerinin Gösterdiği', en: 'The AI Overviews Study: What the SEO Data Shows' },
          },
          {
            href: 'https://www.searchenginejournal.com/ai-search-benchmark-every-seo-leader-needs/561301/',
            type: 'blog',
            author: 'Search Engine Journal',
            title: { tr: 'AI Arama Kıyaslaması: AEO ve AI Overviews', en: 'The AI Search Benchmark Every SEO Leader Needs' },
          },
          {
            href: 'https://ahrefs.com/blog/ai-seo-statistics/',
            type: 'blog',
            author: 'Ahrefs',
            title: { tr: '90+ AI SEO İstatistiği (Güncel Veriler)', en: '90+ AI SEO Statistics (Current Data)' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Yapay Zeka ve SEO', en: 'Artificial Intelligence and SEO' },
    desc: { tr: 'AI araçlarını SEO iş akışlarınıza entegre edin, risklerini anlayın ve verimlilik kazanın.', en: 'Bring AI tools into your SEO workflow, understand the risks and gain leverage.' },
    subsections: [
      {
        title: { tr: 'AI ile İçerik Üretimi (SEO için)', en: 'Producing Content With AI (for SEO)' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/fundamentals/using-gen-ai-content',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Google\'ın Üretici AI İçeriği Hakkında Rehberi', en: 'Google\'s Guidance on Generative AI Content' },
          },
          {
            href: 'https://developers.google.com/search/blog/2023/02/google-search-and-ai-content',
            type: 'blog',
            author: 'Google',
            title: { tr: 'Google Arama\'nın AI Üretimi İçerik Hakkında Görüşü', en: 'Google Search and AI-Generated Content' },
          },
          {
            href: 'https://searchengineland.com/guide/ai-generated-content',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'AI Üretimi İçerik: Faydaları, Riskleri ve En İyi Uygulamalar', en: 'AI-Generated Content: Benefits, Risks and Best Practices' },
          },
          {
            href: 'https://blog.hubspot.com/marketing/ai-content-optimization',
            type: 'guide',
            author: 'HubSpot',
            title: { tr: 'AI İçerik Optimizasyonu: Google ve AI Aramada Bulunma', en: 'AI Content Optimization: Being Found in Google and AI Search' },
          },
        ],
      },
      {
        title: { tr: 'Prompt Engineering (SEO için)', en: 'Prompt Engineering (for SEO)' },
        resources: [
          {
            href: 'https://searchengineland.com/advanced-ai-prompt-engineering-strategies-seo-436286',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'SEO İçin İleri Seviye AI Prompt Mühendisliği Stratejileri', en: 'Advanced AI Prompt Engineering Strategies for SEO' },
          },
          {
            href: 'https://searchengineland.com/guide/seo-prompts-for-chatgpt',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'ChatGPT İçin SEO Prompt\'ları: AI ile Sıralamaları Yükseltme', en: 'SEO Prompts for ChatGPT: Lifting Rankings With AI' },
          },
          {
            href: 'https://www.clearscope.io/blog/prompt-engineering-for-seo-content',
            type: 'blog',
            author: 'Clearscope',
            title: { tr: 'SEO İçeriği İçin Daha İyi AI Prompt\'ları Tasarlama', en: 'Designing Better AI Prompts for SEO Content' },
          },
          {
            href: 'https://www.coursera.org/learn/ai-prompts-for-seo-growth',
            type: 'course',
            author: 'Coursera',
            title: { tr: 'SEO Büyümesi İçin AI Prompt\'ları Kursu', en: 'AI Prompts for SEO Growth Course' },
          },
          {
            href: 'https://searchengineland.com/prompt-research-seo-geo-strategy-471399',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'Prompt Araştırması: SEO ve GEO Stratejisinin Yeni Katmanı', en: 'Prompt Research: The New Layer of SEO and GEO Strategy' },
          },
        ],
      },
      {
        title: { tr: 'AI Content Riskleri ve Dikkat Noktaları', en: 'AI Content Risks and Caveats' },
        resources: [
          {
            href: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
            type: 'guide',
            author: 'Google',
            title: { tr: 'Yararlı, Kullanıcı Odaklı İçerik Oluşturma', en: 'Creating Helpful, People-First Content' },
          },
          {
            href: 'https://backlinko.com/chatgpt-for-seo',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'SEO İçin ChatGPT: Kapsamlı Rehber, İpuçları ve Prompt\'lar', en: 'ChatGPT for SEO: A Complete Guide, Tips and Prompts' },
          },
          {
            href: 'https://blog.hubspot.com/marketing/ai-seo',
            type: 'guide',
            author: 'HubSpot',
            title: { tr: 'En İyi 14 AI SEO Aracı ve Kullanım Rehberi', en: 'The 14 Best AI SEO Tools and How to Use Them' },
          },
          {
            href: 'https://backlinko.com/ai-seo-tools',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Kullandığımız 8 AI SEO Aracı', en: 'The 8 AI SEO Tools We Use' },
          },
        ],
      },
      {
        title: { tr: 'SEO Otomasyon İş Akışları', en: 'SEO Automation Workflows' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/how-to-optimize-content-for-ai-search-engines/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'AI Arama Motorları İçin İçerik Optimizasyonu', en: 'How to Optimize Content for AI Search Engines' },
          },
          {
            href: 'https://blog.hubspot.com/marketing/ai-search-strategy',
            type: 'guide',
            author: 'HubSpot',
            title: { tr: 'Modern Pazarlama Ekipleri İçin AI Arama Stratejisi', en: 'An AI Search Strategy for Modern Marketing Teams' },
          },
          {
            href: 'https://www.semrush.com/blog/top-ai-powered-semrush-features/',
            type: 'blog',
            author: 'Semrush',
            title: { tr: 'AI Destekli Semrush Özellikleri', en: 'AI-Powered Semrush Features' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'GEO - Üretici Yapay Zeka Optimizasyonu', en: 'GEO — Generative Engine Optimization' },
    desc: { tr: 'AI arama motorlarında görünür olun: Google AI, ChatGPT, Perplexity ve daha fazlası.', en: 'Be visible in AI search: Google AI, ChatGPT, Perplexity and beyond.' },
    subsections: [
      {
        title: { tr: 'GEO Temelleri ve Stratejiler', en: 'GEO Fundamentals and Strategy' },
        resources: [
          {
            href: 'https://backlinko.com/generative-engine-optimization-geo',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Üretici Motor Optimizasyonu: AI Aramada Nasıl Kazanılır', en: 'Generative Engine Optimization: How to Win in AI Search' },
          },
          {
            href: 'https://neilpatel.com/blog/generative-engine-optimization-geo/',
            type: 'guide',
            author: 'Neil Patel',
            title: { tr: 'Üretici Motor Optimizasyonu (GEO) Nedir?', en: 'What Is Generative Engine Optimization (GEO)?' },
          },
          {
            href: 'https://neilpatel.com/blog/geo-vs-seo/',
            type: 'blog',
            author: 'Neil Patel',
            title: { tr: 'GEO vs SEO: Farkları Anlama', en: 'GEO vs SEO: Understanding the Differences' },
          },
          {
            href: 'https://arxiv.org/abs/2311.09735',
            type: 'guide',
            author: 'Princeton / IIT Delhi',
            title: { tr: 'GEO: Üretici Motor Optimizasyonu (Akademik Makale)', en: 'GEO: Generative Engine Optimization (Academic Paper)' },
          },
        ],
      },
      {
        title: { tr: 'Çoklu Platform AI Görünürlüğü', en: 'Multi-Platform AI Visibility' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/search-everywhere-optimization/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Her Yerde Arama Optimizasyonu Stratejisi', en: 'Search Everywhere Optimization Strategy' },
          },
          {
            href: 'https://backlinko.com/search-everywhere-optimization',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Her Yerde Arama Optimizasyonu Rehberi + Kontrol Listesi', en: 'The Search Everywhere Optimization Guide + Checklist' },
          },
          {
            href: 'https://www.hubspot.com/aeo-grader',
            type: 'tool',
            author: 'HubSpot',
            title: { tr: 'AEO Değerlendirici - Yanıt Motoru Optimizasyon Aracı', en: 'AEO Grader — Answer Engine Optimization Tool' },
          },
          {
            href: 'https://searchengineland.com/schema-markup-ai-search-no-hype-472339',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'Schema Markup AI Aramaya Nasıl Uyar', en: 'How Schema Markup Fits Into AI Search' },
          },
          {
            href: 'https://www.davidcosgrove.com/llm-citability-guide/',
            type: 'guide',
            author: 'David Cosgrove',
            title: { tr: 'LLM Alıntılanabilirlik: İçeriğinizin AI Tarafından Alıntılanması', en: 'LLM Citability: Getting Your Content Cited by AI' },
          },
          {
            href: 'https://thedigitalbloom.com/learn/2025-ai-citation-llm-visibility-report/',
            type: 'guide',
            author: 'The Digital Bloom',
            title: { tr: 'AI Görünürlük Raporu: LLM\'ler Kaynakları Nasıl Seçer', en: 'The AI Visibility Report: How LLMs Choose Sources' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'Alternatif Arama Motorları ve Platform SEO', en: 'Alternative Search Engines and Platform SEO' },
    desc: { tr: 'Google dışındaki arama motorları ve platformlarda görünürlük kazanın.', en: 'Earn visibility on search engines and platforms other than Google.' },
    subsections: [
      {
        title: { tr: 'Bing SEO', en: 'Bing SEO' },
        resources: [
          {
            href: 'https://searchengineland.com/guide/bing',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Bing SEO Rehberi', en: 'The Bing SEO Guide' },
          },
          {
            href: 'https://neilpatel.com/blog/a-simple-guide-to-bing-seo/',
            type: 'guide',
            author: 'Neil Patel',
            title: { tr: 'Bing SEO Kapsamlı Rehberi', en: 'A Simple Guide to Bing SEO' },
          },
          {
            href: 'https://www.semrush.com/blog/bing-search/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Bing Arama Rehberi: Tarihçe, AI Özellikleri ve SEO İpuçları', en: 'The Bing Search Guide: History, AI Features and SEO Tips' },
          },
          {
            href: 'https://www.searchenginejournal.com/seo-bing-vs-google/223363/',
            type: 'blog',
            author: 'Search Engine Journal',
            title: { tr: 'Bing SEO\'nun Google\'dan 5 Büyük Farkı', en: '5 Big Ways Bing SEO Differs From Google' },
          },
        ],
      },
      {
        title: { tr: 'Reddit SEO', en: 'Reddit SEO' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/reddit-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Reddit SEO: Arama Motoru ve AI Görünürlüğü İçin 5 Adım', en: 'Reddit SEO: 5 Steps for Search Engine and AI Visibility' },
          },
          {
            href: 'https://searchengineland.com/reddit-seo-453406',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Reddit SEO: Bilmeniz Gereken Her Şey', en: 'Reddit SEO: Everything You Need to Know' },
          },
          {
            href: 'https://neilpatel.com/blog/reddit-seo/',
            type: 'guide',
            author: 'Neil Patel',
            title: { tr: 'SEO İçin Reddit Nasıl Kullanılır', en: 'How to Use Reddit for SEO' },
          },
          {
            href: 'https://ahrefs.com/blog/reddit-keyword-research/',
            type: 'blog',
            author: 'Ahrefs',
            title: { tr: 'Reddit Anahtar Kelime Araştırması: Rakiplerin Kaçırdığı Kelimeleri Bulma', en: 'Reddit Keyword Research: Finding Terms Competitors Miss' },
          },
        ],
      },
      {
        title: { tr: 'TikTok SEO', en: 'TikTok SEO' },
        resources: [
          {
            href: 'https://searchengineland.com/tiktok-seo-the-ultimate-guide-439795',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'TikTok SEO: Kapsamlı Rehber', en: 'TikTok SEO: The Ultimate Guide' },
          },
          {
            href: 'https://backlinko.com/tiktok-seo',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'TikTok SEO: Arama ve For You Sayfası İçin Optimizasyon', en: 'TikTok SEO: Optimizing for Search and the For You Page' },
          },
          {
            href: 'https://www.semrush.com/blog/tiktok-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'TikTok SEO: Profil Görünürlüğünü Artırma Rehberi', en: 'TikTok SEO: A Guide to Increasing Profile Visibility' },
          },
          {
            href: 'https://ahrefs.com/blog/tiktok-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'TikTok SEO Nasıl Yapılır: 4 Haftada Başlangıçtan Uzmanlığa', en: 'How to Do TikTok SEO: Beginner to Expert in 4 Weeks' },
          },
        ],
      },
      {
        title: { tr: 'Amazon SEO', en: 'Amazon SEO' },
        resources: [
          {
            href: 'https://www.searchenginejournal.com/amazon-seo-sellers-guide/436454/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Amazon SEO: Satıcılar İçin Kapsamlı Rehber', en: 'Amazon SEO: A Complete Guide for Sellers' },
          },
          {
            href: 'https://www.semrush.com/blog/amazon-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Amazon SEO: Ürün Listelerini Optimize Etme Stratejileri', en: 'Amazon SEO: Strategies for Optimizing Product Listings' },
          },
          {
            href: 'https://searchengineland.com/amazon-seo-guide-449563',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'Amazon SEO: Kapsamlı Rehber', en: 'Amazon SEO: The Complete Guide' },
          },
          {
            href: 'https://neilpatel.com/blog/amazon-seo/',
            type: 'guide',
            author: 'Neil Patel',
            title: { tr: 'Amazon SEO: İlk 5\'e Sıralama İçin 7 Adımlı Çerçeve', en: 'Amazon SEO: A 7-Step Framework for Ranking in the Top 5' },
          },
        ],
      },
      {
        title: { tr: 'eBay SEO', en: 'eBay SEO' },
        resources: [
          {
            href: 'https://neilpatel.com/blog/ebay-seo/',
            type: 'guide',
            author: 'Neil Patel',
            title: { tr: 'Satışları Artırmak İçin 10 eBay SEO İpucu', en: '10 eBay SEO Tips to Increase Sales' },
          },
          {
            href: 'https://www.semrush.com/blog/quick-tips-ebay-amazon-and-craigslist-seo-for-your-products/',
            type: 'blog',
            author: 'Semrush',
            title: { tr: 'eBay, Amazon ve Craigslist SEO İpuçları', en: 'Quick SEO Tips for eBay, Amazon and Craigslist' },
          },
        ],
      },
      {
        title: { tr: 'Instagram SEO', en: 'Instagram SEO' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/instagram-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Instagram SEO: Nedir, Nasıl Yapılır ve En İyi Uygulamalar', en: 'Instagram SEO: What It Is, How to Do It and Best Practices' },
          },
          {
            href: 'https://blog.hubspot.com/marketing/instagram-seo',
            type: 'guide',
            author: 'HubSpot',
            title: { tr: 'Instagram SEO: Erişiminizi Artırmanın 10 Tekniği', en: 'Instagram SEO: 10 Techniques to Grow Your Reach' },
          },
          {
            href: 'https://neilpatel.com/blog/instagram-seo/',
            type: 'guide',
            author: 'Neil Patel',
            title: { tr: 'Instagram SEO: Görünürlüğünüzü Artırma İpuçları', en: 'Instagram SEO: Tips for Increasing Your Visibility' },
          },
        ],
      },
      {
        title: { tr: 'Quora SEO', en: 'Quora SEO' },
        resources: [
          {
            href: 'https://neilpatel.com/blog/quora-seo/',
            type: 'guide',
            author: 'Neil Patel',
            title: { tr: 'SEO İçin Quora Nasıl Kullanılır: Trafik ve Otorite Kazanma', en: 'How to Use Quora for SEO: Winning Traffic and Authority' },
          },
          {
            href: 'https://searchengineland.com/use-quora-seo-research-432036',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'SEO ve Araştırma İçin Quora Nasıl Kullanılır', en: 'How to Use Quora for SEO and Research' },
          },
          {
            href: 'https://ahrefs.com/blog/quora-marketing/',
            type: 'blog',
            author: 'Ahrefs',
            title: { tr: 'Quora Pazarlama: ~1 Milyon Görüntüleme Nasıl Ürettik', en: 'Quora Marketing: How We Generated ~1 Million Views' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'SEO Otomasyonu ve Programlama', en: 'SEO Automation and Programming' },
    desc: { tr: 'Python, SQL, RegEx ve diğer araçlarla SEO süreçlerinizi otomatikleştirin.', en: 'Automate SEO work with Python, SQL, RegEx and related tooling.' },
    subsections: [
      {
        title: { tr: 'Python ve Programlama ile SEO', en: 'SEO With Python and Programming' },
        resources: [
          {
            href: 'https://ahrefs.com/blog/python-for-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO İçin Python: Yeni Başlayanlar İçin Açıklama', en: 'Python for SEO Explained for Beginners' },
          },
          {
            href: 'https://searchengineland.com/python-scripts-automating-seo-tasks-395527',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'SEO Görevlerini Otomatikleştirmek İçin 5 Python Script', en: '5 Python Scripts for Automating SEO Tasks' },
          },
          {
            href: 'https://searchengineland.com/regex-seo-ai-data-analysis-463933',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'SEO İçin RegEx: AI ve Veri Analizini Güçlendiren Basit Dil', en: 'RegEx for SEO: The Simple Language Powering AI and Data Analysis' },
          },
        ],
      },
      {
        title: { tr: 'SQL, BigQuery ve Makine Öğrenimi', en: 'SQL, BigQuery and Machine Learning' },
        resources: [
          {
            href: 'https://www.searchenginejournal.com/google-search-console-data-bigquery-enhanced-analytics/496535/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Google Search Console Verileri ve BigQuery ile Gelişmiş Analitik', en: 'Enhanced Analytics With Google Search Console Data and BigQuery' },
          },
          {
            href: 'https://www.searchenginejournal.com/machine-learning-practical-introduction-seo-professionals/366304/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'SEO Profesyonelleri İçin Makine Öğrenimine Pratik Giriş', en: 'A Practical Introduction to Machine Learning for SEO Professionals' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'CMS\'e Özel SEO Uygulamaları', en: 'CMS-Specific SEO' },
    desc: { tr: 'WordPress, Shopify, Webflow ve diğer platformlarda SEO\'yu doğru şekilde uygulayın.', en: 'Apply SEO correctly on WordPress, Shopify, Webflow and other platforms.' },
    subsections: [
      {
        title: { tr: 'WordPress SEO', en: 'WordPress SEO' },
        resources: [
          {
            href: 'https://yoast.com/wordpress-seo/',
            type: 'guide',
            author: 'Yoast',
            title: { tr: 'WordPress SEO: Kesin Rehber', en: 'WordPress SEO: The Definitive Guide' },
          },
          {
            href: 'https://www.wpbeginner.com/wordpress-seo/',
            type: 'guide',
            author: 'WPBeginner',
            title: { tr: 'Yeni Başlayanlar İçin WordPress SEO Rehberi (Adım Adım)', en: 'The Beginner\'s WordPress SEO Guide (Step by Step)' },
          },
          {
            href: 'https://ahrefs.com/blog/wordpress-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'WordPress SEO: 20 İpucu ve En İyi Uygulama', en: 'WordPress SEO: 20 Tips and Best Practices' },
          },
          {
            href: 'https://www.semrush.com/blog/wordpress-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'WordPress SEO: Kapsamlı Rehber', en: 'WordPress SEO: The Complete Guide' },
          },
          {
            href: 'https://www.wpbeginner.com/showcase/9-best-wordpress-seo-plugins-and-tools-that-you-should-use/',
            type: 'guide',
            author: 'WPBeginner',
            title: { tr: 'En İyi 15 WordPress SEO Eklentisi ve Aracı', en: 'The 15 Best WordPress SEO Plugins and Tools' },
          },
          {
            href: 'https://backlinko.com/best-seo-plugin-for-wordpress',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'WordPress İçin En İyi 5 SEO Eklentisi (Test Edilmiş)', en: 'The 5 Best SEO Plugins for WordPress (Tested)' },
          },
          {
            href: 'https://www.wpbeginner.com/wordpress-performance-speed/',
            type: 'guide',
            author: 'WPBeginner',
            title: { tr: 'WordPress Hız ve Performans Artırma Rehberi', en: 'A Guide to Boosting WordPress Speed and Performance' },
          },
          {
            href: 'https://www.wpbeginner.com/plugins/best-wordpress-caching-plugins/',
            type: 'guide',
            author: 'WPBeginner',
            title: { tr: 'En İyi 5 WordPress Önbellekleme Eklentisi', en: 'The 5 Best WordPress Caching Plugins' },
          },
        ],
      },
      {
        title: { tr: 'Shopify SEO', en: 'Shopify SEO' },
        resources: [
          {
            href: 'https://www.shopify.com/blog/shopify-seo',
            type: 'guide',
            author: 'Shopify',
            title: { tr: 'Shopify SEO: Mağaza Trafiğinizi Nasıl Artırırsınız', en: 'Shopify SEO: How to Grow Your Store Traffic' },
          },
          {
            href: 'https://backlinko.com/shopify-seo',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: 'Shopify SEO: Yeni Başlayanlar İçin Kapsamlı Rehber', en: 'Shopify SEO: A Complete Beginner\'s Guide' },
          },
          {
            href: 'https://ahrefs.com/blog/shopify-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Shopify SEO: Yeni Başlayanlar İçin Basit Rehber', en: 'Shopify SEO: A Simple Guide for Beginners' },
          },
          {
            href: 'https://www.semrush.com/blog/shopify-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Shopify SEO: Başlangıç Optimizasyon Rehberi', en: 'Shopify SEO: A Starter Optimization Guide' },
          },
          {
            href: 'https://www.searchenginejournal.com/shopify-seo-checklist/433674/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Sitenizi Sıralamak İçin Shopify SEO Kontrol Listesi', en: 'The Shopify SEO Checklist for Ranking Your Site' },
          },
          {
            href: 'https://help.shopify.com/en/manual/promoting-marketing/seo/editing-robots-txt',
            type: 'guide',
            author: 'Shopify',
            title: { tr: 'Shopify robots.txt.liquid Düzenleme', en: 'Editing Shopify robots.txt.liquid' },
          },
          {
            href: 'https://www.shopify.com/blog/ecommerce-product-page-seo',
            type: 'blog',
            author: 'Shopify',
            title: { tr: 'E-ticaret Ürün Sayfası SEO\'sunu İyileştirme', en: 'Improving E-commerce Product Page SEO' },
          },
        ],
      },
      {
        title: { tr: 'Diğer CMS Platformları', en: 'Other CMS Platforms' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/webflow-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Webflow SEO: Arama Performansını Artırmanın 8 Yolu', en: 'Webflow SEO: 8 Ways to Improve Search Performance' },
          },
          {
            href: 'https://ahrefs.com/blog/wix-seo/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Wix SEO Hakkında Bilmeniz Gereken Her Şey', en: 'Everything You Need to Know About Wix SEO' },
          },
          {
            href: 'https://www.semrush.com/blog/best-cms-for-seo/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'SEO İçin En İyi 9 İçerik Yönetim Sistemi', en: 'The 9 Best Content Management Systems for SEO' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'SEO Araçları', en: 'SEO Tools' },
    desc: { tr: 'SEO çalışmalarınız için kullanabileceğiniz araçları kategorilere göre keşfedin.', en: 'Explore the tools available for your SEO work, grouped by category.' },
    subsections: [
      {
        title: { tr: 'Google SEO Araçları', en: 'Google SEO Tools' },
        resources: [
          {
            href: 'https://search.google.com/search-console',
            type: 'tool',
            author: 'Google',
            title: { tr: 'Google Search Console', en: 'Google Search Console' },
          },
          {
            href: 'https://analytics.google.com/',
            type: 'tool',
            author: 'Google',
            title: { tr: 'Google Analytics 4', en: 'Google Analytics 4' },
          },
          {
            href: 'https://pagespeed.web.dev/',
            type: 'tool',
            author: 'Google',
            title: { tr: 'Google PageSpeed Insights', en: 'Google PageSpeed Insights' },
          },
          {
            href: 'https://trends.google.com/',
            type: 'tool',
            author: 'Google',
            title: { tr: 'Google Trends', en: 'Google Trends' },
          },
          {
            href: 'https://developer.chrome.com/docs/lighthouse/',
            type: 'tool',
            author: 'Google',
            title: { tr: 'Google Lighthouse', en: 'Google Lighthouse' },
          },
        ],
      },
      {
        title: { tr: 'Sıralama Takip (Rank Tracking) Araçları', en: 'Rank Tracking Tools' },
        resources: [
          {
            href: 'https://ahrefs.com/blog/best-rank-tracker/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'En İyi Sıralama Takip Araçları: Doğru Olanı Seçme', en: 'The Best Rank Tracking Tools: Choosing the Right One' },
          },
          {
            href: 'https://ahrefs.com/blog/keyword-tracking-tools/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Anahtar Kelime Takip Araçları (Her Bütçeye Uygun)', en: 'Keyword Tracking Tools (For Every Budget)' },
          },
          {
            href: 'https://www.semrush.com/blog/what-is-a-rank-tracker/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Sıralama Takip Aracı Nedir?', en: 'What Is a Rank Tracker?' },
          },
          {
            href: 'https://www.semrush.com/blog/how-to-use-a-rank-tracker/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Sıralama Takip Aracı Nasıl Kullanılır', en: 'How to Use a Rank Tracker' },
          },
        ],
      },
      {
        title: { tr: 'Teknik SEO Araçları', en: 'Technical SEO Tools' },
        resources: [
          {
            href: 'https://www.screamingfrog.co.uk/seo-spider/',
            type: 'tool',
            author: 'Screaming Frog',
            title: { tr: 'Screaming Frog SEO Spider', en: 'Screaming Frog SEO Spider' },
          },
          {
            href: 'https://ahrefs.com/webmaster-tools',
            type: 'tool',
            author: 'Ahrefs',
            title: { tr: 'Ahrefs Web Yöneticisi Araçları', en: 'Ahrefs Webmaster Tools' },
          },
          {
            href: 'https://technicalseo.com/tools/schema-markup-generator/',
            type: 'tool',
            author: 'TechnicalSEO.com',
            title: { tr: 'Schema Markup Oluşturucu', en: 'Schema Markup Generator' },
          },
          {
            href: 'https://gtmetrix.com/',
            type: 'tool',
            author: 'GTmetrix',
            title: { tr: 'GTmetrix', en: 'GTmetrix' },
          },
          {
            href: 'https://www.semrush.com/blog/seo-audit-tools/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'En İyi SEO Denetim Araçları', en: 'The Best SEO Audit Tools' },
          },
        ],
      },
      {
        title: { tr: 'Genel SEO Araç Rehberleri', en: 'General SEO Tool Guides' },
        resources: [
          {
            href: 'https://backlinko.com/seo-tools',
            type: 'guide',
            author: 'Backlinko',
            title: { tr: '177+ En İyi SEO Aracı: Tam Liste', en: '177+ Best SEO Tools: The Full List' },
          },
          {
            href: 'https://ahrefs.com/blog/free-seo-tools/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: '34 Ücretsiz SEO Aracı', en: '34 Free SEO Tools' },
          },
          {
            href: 'https://ahrefs.com/blog/google-seo-tools-explained/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'Google\'ın Ücretsiz SEO Araçları Açıklaması', en: 'Google\'s Free SEO Tools Explained' },
          },
        ],
      },
      {
        title: { tr: 'Anahtar Kelime Araştırma Araçları', en: 'Keyword Research Tools' },
        resources: [
          {
            href: 'https://neilpatel.com/ubersuggest/',
            type: 'tool',
            author: 'Neil Patel',
            title: { tr: 'Ubersuggest', en: 'Ubersuggest' },
          },
          {
            href: 'https://answerthepublic.com/',
            type: 'tool',
            author: 'AnswerThePublic',
            title: { tr: 'AnswerThePublic', en: 'AnswerThePublic' },
          },
          {
            href: 'https://surferseo.com/keyword-surfer-extension/',
            type: 'extension',
            author: 'Surfer SEO',
            title: { tr: 'Keyword Surfer', en: 'Keyword Surfer' },
          },
          {
            href: 'https://alsoasked.com/',
            type: 'tool',
            author: 'Also Asked',
            title: { tr: 'Also Asked', en: 'Also Asked' },
          },
        ],
      },
      {
        title: { tr: 'Chrome SEO Eklentileri', en: 'Chrome SEO Extensions' },
        resources: [
          {
            href: 'https://ahrefs.com/seo-toolbar',
            type: 'extension',
            author: 'Ahrefs',
            title: { tr: 'Ahrefs SEO Toolbar', en: 'Ahrefs SEO Toolbar' },
          },
          {
            href: 'https://moz.com/products/pro/seo-toolbar',
            type: 'extension',
            author: 'Moz',
            title: { tr: 'MozBar', en: 'MozBar' },
          },
          {
            href: 'https://www.seoquake.com/',
            type: 'extension',
            author: 'Semrush',
            title: { tr: 'SEOquake', en: 'SEOquake' },
          },
          {
            href: 'https://detailed.com/extension/',
            type: 'extension',
            author: 'Detailed',
            title: { tr: 'Detailed SEO Extension', en: 'Detailed SEO Extension' },
          },
          {
            href: 'https://www.wappalyzer.com/',
            type: 'extension',
            author: 'Wappalyzer',
            title: { tr: 'Wappalyzer', en: 'Wappalyzer' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'SEO Kariyer ve Gelişim', en: 'SEO Careers and Development' },
    desc: { tr: 'SEO kariyer yolunuzu planlayın, freelance çalışmayı öğrenin ve case study hazırlayın.', en: 'Plan your SEO career, learn to work freelance and build case studies.' },
    subsections: [
      {
        title: { tr: 'SEO Kariyer Yolu', en: 'SEO Career Paths' },
        resources: [
          {
            href: 'https://searchengineland.com/seo-career-path-388834',
            type: 'guide',
            author: 'Search Engine Land',
            title: { tr: 'SEO Kariyer Yolu: Nasıl Görünür ve Nasıl İlerlenir', en: 'The SEO Career Path: What It Looks Like and How to Progress' },
          },
          {
            href: 'https://www.searchenginejournal.com/navigating-seo-career-landscape-degrees-myths-realities/506388/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'SEO Kariyer Manzarasında Yol Almak', en: 'Navigating the SEO Career Landscape' },
          },
          {
            href: 'https://brainstation.io/career-guides/how-to-become-an-seo-specialist/',
            type: 'guide',
            author: 'BrainStation',
            title: { tr: 'SEO Uzmanı Nasıl Olunur', en: 'How to Become an SEO Specialist' },
          },
          {
            href: 'https://www.indeed.com/career-advice/finding-a-job/how-to-become-seo-expert',
            type: 'guide',
            author: 'Indeed',
            title: { tr: 'SEO Uzmanı Nasıl Olunur: Adımlar, Beceriler ve Maaş', en: 'How to Become an SEO Expert: Steps, Skills and Salary' },
          },
          {
            href: 'https://trafficthinktank.com/how-to-get-a-job-in-seo/',
            type: 'guide',
            author: 'Traffic Think Tank',
            title: { tr: 'SEO\'da İş Bulma: İçeriden Rehber', en: 'How to Get a Job in SEO: An Insider Guide' },
          },
        ],
      },
      {
        title: { tr: 'Freelance SEO', en: 'Freelance SEO' },
        resources: [
          {
            href: 'https://www.searchenginejournal.com/becoming-seo-consultant/443213/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'SEO Danışmanı Olma: Beceriler ve Kariyer Görünümü', en: 'Becoming an SEO Consultant: Skills and Career Outlook' },
          },
          {
            href: 'https://www.searchenginejournal.com/how-to-become-an-independent-seo-consultant-and-succeed/508847/',
            type: 'guide',
            author: 'Search Engine Journal',
            title: { tr: 'Bağımsız SEO Danışmanı Olma ve Başarılı Olma', en: 'How to Become an Independent SEO Consultant and Succeed' },
          },
          {
            href: 'https://searchengineland.com/how-to-become-an-seo-freelancer-without-underpricing-or-burning-out-470323',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'SEO Freelancer Olma: Düşük Fiyatlandırma ve Tükenmişlik Olmadan', en: 'How to Become an SEO Freelancer Without Underpricing or Burning Out' },
          },
          {
            href: 'https://ahrefs.com/blog/seo-pricing/',
            type: 'guide',
            author: 'Ahrefs',
            title: { tr: 'SEO Fiyatlandırması: SEO Ne Kadar Tutar?', en: 'SEO Pricing: How Much Does SEO Cost?' },
          },
        ],
      },
      {
        title: { tr: 'SEO Case Study Hazırlama', en: 'Building an SEO Case Study' },
        resources: [
          {
            href: 'https://www.semrush.com/blog/how-to-write-a-case-study/',
            type: 'guide',
            author: 'Semrush',
            title: { tr: 'Vaka Çalışması Nasıl Yazılır: Şablon Dahil Rehber', en: 'How to Write a Case Study: A Guide With Template' },
          },
          {
            href: 'https://www.robbierichards.com/seo/case-study/',
            type: 'blog',
            author: 'Robbie Richards',
            title: { tr: 'SEO Vaka Çalışması: 150K Ziyaret Üreten 6 Adımlık Süreç', en: 'An SEO Case Study: The 6-Step Process That Generated 150K Visits' },
          },
          {
            href: 'https://ignitevisibility.com/create-mini-seo-case-studies/',
            type: 'guide',
            author: 'Ignite Visibility',
            title: { tr: 'Kendi Mini SEO Vaka Çalışmanızı Oluşturma', en: 'How to Create Your Own Mini SEO Case Study' },
          },
        ],
      },
    ],
  },
  {
    title: { tr: 'SEO Güncel Kalma', en: 'Keeping Up With SEO' },
    desc: { tr: 'SEO dünyasındaki değişiklikleri takip etmek için haber, podcast ve newsletter kaynakları.', en: 'News, podcasts and newsletters for keeping up with how SEO changes.' },
    subsections: [
      {
        title: { tr: 'SEO Haber ve Blog Kaynakları', en: 'SEO News and Blog Sources' },
        resources: [
          {
            href: 'https://developers.google.com/search/blog',
            type: 'blog',
            author: 'Google',
            title: { tr: 'Google Arama Merkezi Blogu', en: 'Google Search Central Blog' },
          },
          {
            href: 'https://www.searchenginejournal.com/',
            type: 'blog',
            author: 'Search Engine Journal',
            title: { tr: 'Search Engine Journal', en: 'Search Engine Journal' },
          },
          {
            href: 'https://searchengineland.com/',
            type: 'blog',
            author: 'Search Engine Land',
            title: { tr: 'Search Engine Land', en: 'Search Engine Land' },
          },
          {
            href: 'https://www.seroundtable.com/',
            type: 'blog',
            author: 'Barry Schwartz',
            title: { tr: 'Search Engine Roundtable', en: 'Search Engine Roundtable' },
          },
          {
            href: 'https://moz.com/blog',
            type: 'blog',
            author: 'Moz',
            title: { tr: 'Moz Blog', en: 'Moz Blog' },
          },
          {
            href: 'https://ahrefs.com/blog/',
            type: 'blog',
            author: 'Ahrefs',
            title: { tr: 'Ahrefs Blog', en: 'Ahrefs Blog' },
          },
        ],
      },
      {
        title: { tr: 'SEO Podcast\'leri', en: 'SEO Podcasts' },
        resources: [
          {
            href: 'https://developers.google.com/search/podcasts/search-off-the-record',
            type: 'podcast',
            author: 'Google',
            title: { tr: 'Search Off the Record', en: 'Search Off the Record' },
          },
          {
            href: 'https://ahrefs.com/podcast',
            type: 'podcast',
            author: 'Ahrefs',
            title: { tr: 'Ahrefs Podcast', en: 'Ahrefs Podcast' },
          },
          {
            href: 'https://www.authorityhacker.com/podcast/',
            type: 'podcast',
            author: 'Authority Hacker',
            title: { tr: 'Authority Hacker Podcast', en: 'Authority Hacker Podcast' },
          },
        ],
      },
      {
        title: { tr: 'SEO Newsletter\'ları', en: 'SEO Newsletters' },
        resources: [
          {
            href: 'https://seofomo.co/',
            type: 'newsletter',
            author: 'Aleyda Solis',
            title: { tr: 'SEOFOMO', en: 'SEOFOMO' },
          },
          {
            href: 'https://seomba.com/',
            type: 'newsletter',
            author: 'Tom Critchlow',
            title: { tr: 'The SEO MBA', en: 'The SEO MBA' },
          },
          {
            href: 'https://www.searchenginejournal.com/newsletter/',
            type: 'newsletter',
            author: 'Search Engine Journal',
            title: { tr: 'Search Engine Journal Bülteni', en: 'The Search Engine Journal Newsletter' },
          },
        ],
      },
      {
        title: { tr: 'SEO Etkinlikleri ve Konferansları', en: 'SEO Events and Conferences' },
        resources: [
          {
            href: 'https://developers.google.com/search/events',
            type: 'event',
            author: 'Google',
            title: { tr: 'Google Search Central Live', en: 'Google Search Central Live' },
          },
          {
            href: 'https://www.brightonseo.com/',
            type: 'event',
            author: 'BrightonSEO',
            title: { tr: 'BrightonSEO', en: 'BrightonSEO' },
          },
          {
            href: 'https://moz.com/mozcon',
            type: 'event',
            author: 'Moz',
            title: { tr: 'MozCon', en: 'MozCon' },
          },
        ],
      },
    ],
  },
];

/**
 * Anchor slug for a section, used by both the `<details>` id and the
 * ItemList in `roadmapSchema.ts`.
 *
 * The Turkish letters are mapped explicitly. `normalize('NFD')` does not help
 * here: ı and İ are distinct base letters, not i plus a combining mark, so a
 * generic diacritic strip leaves them intact and produces the wrong slug.
 * Changing a section title therefore changes its anchor.
 */
const TR_LETTERS: Record<string, string> = {
  ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u',
  Ç: 'c', Ğ: 'g', İ: 'i', I: 'i', Ö: 'o', Ş: 's', Ü: 'u',
};

export function sectionSlug(section: RoadmapSection): string {
  return section.title.tr
    .replace(/[çğıöşüÇĞİIÖŞÜ]/g, (letter) => TR_LETTERS[letter])
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * The counts shown on the page and quoted in the metadata. Derived, so the
 * stat cards, the meta description and the schema cannot disagree — they did.
 */
export const roadmapTotals = {
  resources: roadmapSections.reduce(
    (n, section) => n + section.subsections.reduce((m, sub) => m + sub.resources.length, 0),
    0,
  ),
  categories: roadmapSections.length,
  subtopics: roadmapSections.reduce((n, section) => n + section.subsections.length, 0),
};
