import { jsonLdSafe } from '@/lib/jsonLd';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Ana Sayfa',
      item: 'https://www.keremgezergun.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'SEO Rehberi',
      item: 'https://www.keremgezergun.com/seo-ogrenme-haritasi',
    },
  ],
};

function ChevronSvg() {
  return (
    <svg
      className="chevron"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

interface AccordionSectionProps {
  title: string;
  desc: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

function AccordionSection({ title, desc, defaultOpen = false, children }: AccordionSectionProps) {
  return (
    <details className="section-accordion" open={defaultOpen}>
      <summary className="section-accordion-header">
        <span className="title">
          {title}
          <span className="desc">{desc}</span>
        </span>
        <ChevronSvg />
      </summary>
      <div className="section-accordion-body">{children}</div>
    </details>
  );
}

interface ResourceItemProps {
  href: string;
  type: string;
  typeClass: string;
  title: string;
  author: string;
}

function ResourceItem({ href, type, typeClass, title, author }: ResourceItemProps) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="resource-item"
        aria-label={`${title}, ${author} (yeni sekmede açılır)`}
      >
        <span className={`resource-type ${typeClass}`}>{type}</span>
        <span className="resource-title">{title}</span>
        <span className="resource-author">{author}</span>
      </a>
    </li>
  );
}

interface SubsectionProps {
  title: string;
  children: React.ReactNode;
}

function Subsection({ title, children }: SubsectionProps) {
  return (
    <section className="subsection">
      <h3 className="subsection-title">{title}</h3>
      <ul className="resource-list">{children}</ul>
    </section>
  );
}

export default function SeoOgrenmeHaritasiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumbSchema) }}
      />

      <main id="main-content" role="main">
        <section className="page-header" aria-labelledby="page-title">
          <div className="container">
            <span className="section-tag">SEO Rehberi</span>
            <h1 id="page-title">SEO Rehberi</h1>
            <p>Temellerden ileri seviyeye, kapsamlı kaynak rehberi ile SEO öğrenin.</p>
          </div>
        </section>

        <section className="page-content" aria-labelledby="roadmap-heading">
          <div className="container">
            <h2 id="roadmap-heading" className="visually-hidden">
              SEO Kaynakları
            </h2>

            <div className="roadmap-intro">
              <ul className="roadmap-stats">
                <li className="roadmap-stat">
                  <span className="number">590+</span>
                  <span className="label">Kaynak</span>
                </li>
                <li className="roadmap-stat">
                  <span className="number">50</span>
                  <span className="label">Ana Kategori</span>
                </li>
                <li className="roadmap-stat">
                  <span className="number">139</span>
                  <span className="label">Alt Konu</span>
                </li>
              </ul>
              <p>
                Bu rehber, SEO öğrenmek isteyenler için derlenmiş kapsamlı bir kaynak
                haritasıdır. Strateji, teknik altyapı, içerik, analitik ve kariyer dahil
                her alanda kaliteli ve güncel kaynaklar bulabilirsiniz.
              </p>
            </div>

            {/* ===== 1. HTML & CSS Temelleri ===== */}
            <AccordionSection
              title="HTML & CSS Temelleri"
              desc="SEO için gerekli HTML ve CSS temel bilgilerini edinin."
              defaultOpen={true}
            >
              <Subsection title="HTML Temelleri">
                <ResourceItem href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" type="Rehber" typeClass="type-guide" title="HTML Temelleri (MDN)" author="Mozilla" />
                <ResourceItem href="https://www.w3schools.com/html/" type="Kurs" typeClass="type-course" title="W3Schools HTML Eğitimi" author="W3Schools" />
                <ResourceItem href="https://www.freecodecamp.org/learn/2022/responsive-web-design/" type="Kurs" typeClass="type-course" title="freeCodeCamp HTML/CSS Eğitimi" author="freeCodeCamp" />
              </Subsection>
              <Subsection title="SEO için HTML & CSS">
                <ResourceItem href="https://ahrefs.com/blog/html-for-seo/" type="Rehber" typeClass="type-guide" title="SEO için Bilinmesi Gereken HTML Etiketleri" author="Ahrefs" />
                <ResourceItem href="https://www.searchenginejournal.com/important-tags-seo/" type="Rehber" typeClass="type-guide" title="SEO Dostu HTML Etiketleri" author="Search Engine Journal" />
                <ResourceItem href="https://moz.com/blog/accessibility-seo" type="Rehber" typeClass="type-guide" title="Web Erişilebilirlik ve SEO İlişkisi" author="Moz" />
              </Subsection>
            </AccordionSection>

            {/* ===== 2. SEO'ya Giriş ve Temel Kavramlar ===== */}
            <AccordionSection
              title="SEO'ya Giriş ve Temel Kavramlar"
              desc="SEO'nun ne olduğunu, arama motorlarının nasıl çalıştığını ve temel terminolojiyi kavrayın."
            >
              <Subsection title="SEO Nedir ve Neden Önemlidir">
                <ResourceItem href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" type="Rehber" typeClass="type-guide" title="Google SEO Başlangıç Rehberi" author="Google" />
                <ResourceItem href="https://www.google.com/search/howsearchworks/" type="Rehber" typeClass="type-guide" title="Google Arama Nasıl Çalışır" author="Google" />
                <ResourceItem href="https://moz.com/beginners-guide-to-seo" type="Rehber" typeClass="type-guide" title="Yeni Başlayanlar İçin SEO Rehberi" author="Moz" />
                <ResourceItem href="https://ahrefs.com/blog/what-is-seo/" type="Rehber" typeClass="type-guide" title="SEO Nedir? Arama Motoru Optimizasyonu Açıklaması" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/academy/courses/seo-fundamentals/" type="Kurs" typeClass="type-course" title="SEO Temelleri Kursu" author="Semrush Academy" />
                <ResourceItem href="https://backlinko.com/seo-this-year" type="Rehber" typeClass="type-guide" title="SEO: Kapsamlı Rehber" author="Backlinko" />
              </Subsection>
              <Subsection title="Arama Motorlarının Yapısı ve İşleyişi">
                <ResourceItem href="https://developers.google.com/search/docs/fundamentals/how-search-works" type="Rehber" typeClass="type-guide" title="Google Arama Derinlemesine Nasıl Çalışır" author="Google" />
                <ResourceItem href="https://developers.google.com/search/docs/crawling-indexing" type="Rehber" typeClass="type-guide" title="Google Tarama, İndeksleme ve Sunma" author="Google" />
                <ResourceItem href="https://developers.google.com/search/docs/appearance/ranking-systems-guide" type="Rehber" typeClass="type-guide" title="Google Sıralama Sistemleri Rehberi" author="Google" />
                <ResourceItem href="https://ahrefs.com/blog/search-engine-indexing/" type="Rehber" typeClass="type-guide" title="Arama Motoru İndeksleme: Nasıl Çalışır" author="Ahrefs" />
                <ResourceItem href="https://www.youtube.com/watch?v=0eKVizvYSUQ" type="Video" typeClass="type-video" title="Google Arama Nasıl Çalışır (Video)" author="Google" />
              </Subsection>
              <Subsection title="SEO Terimleri ve Sözlük">
                <ResourceItem href="https://ahrefs.com/seo/glossary" type="Rehber" typeClass="type-guide" title="SEO Sözlüğü: 250+ Terimin Açıklaması" author="Ahrefs" />
                <ResourceItem href="https://moz.com/learn/seo/seo-glossary" type="Rehber" typeClass="type-guide" title="SEO Sözlüğü: Temel SEO Terimleri" author="Moz" />
                <ResourceItem href="https://developers.google.com/search/docs/glossary" type="Rehber" typeClass="type-guide" title="Google Arama Merkezi Sözlüğü" author="Google" />
                <ResourceItem href="https://www.searchenginejournal.com/seo-guide/" type="Rehber" typeClass="type-guide" title="SEO Kapsamlı Rehberi" author="Search Engine Journal" />
              </Subsection>
            </AccordionSection>

            {/* ===== 3. SEO Stratejisi ve Yol Haritası ===== */}
            <AccordionSection
              title="SEO Stratejisi ve Yol Haritası"
              desc="Etkili bir SEO stratejisi oluşturun, hedeflerinizi belirleyin ve önceliklendirin."
            >
              <Subsection title="SEO Stratejisi Oluşturma">
                <ResourceItem href="https://backlinko.com/seo-strategy" type="Rehber" typeClass="type-guide" title="Etkili Bir SEO Stratejisi Nasıl Oluşturulur" author="Backlinko" />
                <ResourceItem href="https://blog.hubspot.com/marketing/seo-strategy" type="Rehber" typeClass="type-guide" title="SEO Stratejisi Oluşturma [Şablon Dahil]" author="HubSpot" />
                <ResourceItem href="https://searchengineland.com/seo-strategy-strategic-seo-planning-437603" type="Blog" typeClass="type-blog" title="SEO Stratejisi: Stratejik SEO Planlamasının 3 Adımı" author="Search Engine Land" />
                <ResourceItem href="https://ahrefs.com/blog/seo-roadmap/" type="Rehber" typeClass="type-guide" title="7 Adımda SEO Yol Haritası Oluşturma" author="Ahrefs" />
                <ResourceItem href="https://backlinko.com/seo-roadmap" type="Rehber" typeClass="type-guide" title="Performans Odaklı SEO Yol Haritası Nasıl Kurulur" author="Backlinko" />
              </Subsection>
              <Subsection title="SEO Hedef Belirleme ve Önceliklendirme">
                <ResourceItem href="https://searchengineland.com/smart-goals-seo-288724" type="Rehber" typeClass="type-guide" title="SMART SEO Hedefleri Nasıl Belirlenir (Örneklerle)" author="Search Engine Land" />
                <ResourceItem href="https://searchengineland.com/seo-goals-strategy-planning-453492" type="Rehber" typeClass="type-guide" title="SEO Yürütme: Hedefler, Strateji ve Planlama" author="Search Engine Land" />
                <ResourceItem href="https://www.searchenginejournal.com/set-achieve-realistic-seo-goals/288839/" type="Rehber" typeClass="type-guide" title="Gerçekçi SEO Hedefleri Nasıl Belirlenir ve Ulaşılır" author="Search Engine Journal" />
                <ResourceItem href="https://searchengineland.com/seo-prioritization-how-to-focus-on-what-moves-the-needle-452482" type="Blog" typeClass="type-blog" title="SEO Önceliklendirme: Fark Yaratana Odaklanma" author="Search Engine Land" />
                <ResourceItem href="https://searchengineland.com/how-to-set-goals-for-your-seo-team-447742" type="Rehber" typeClass="type-guide" title="SEO Ekibiniz İçin Hedefler Nasıl Belirlenir" author="Search Engine Land" />
              </Subsection>
              <Subsection title="PPC ve SEO Sinerjisi">
                <ResourceItem href="https://www.searchenginejournal.com/combine-seo-ppc-data/370544/" type="Rehber" typeClass="type-guide" title="SEO ve PPC Verilerini Birleştirerek Daha Güçlü Sonuçlar Elde Etme" author="Search Engine Journal" />
                <ResourceItem href="https://searchengineland.com/ppc-seo-co-optimization-audits-446907" type="Rehber" typeClass="type-guide" title="PPC ve SEO Verileriyle Ortak Optimizasyon Denetimleri" author="Search Engine Land" />
                <ResourceItem href="https://www.semrush.com/blog/ppc-and-seo-working-together/" type="Blog" typeClass="type-blog" title="PPC ve SEO'nun Birlikte Çalışma Gücü" author="Semrush" />
                <ResourceItem href="https://backlinko.com/seo-and-ppc" type="Rehber" typeClass="type-guide" title="SEO ve PPC: Maksimum ROI İçin 8 Hizalama Yolu" author="Backlinko" />
                <ResourceItem href="https://searchengineland.com/end-seo-ppc-silos-unified-search-strategy-ai-era-463006" type="Blog" typeClass="type-blog" title="SEO-PPC Silolarının Sonu: AI Çağında Birleşik Arama Stratejisi" author="Search Engine Land" />
              </Subsection>
            </AccordionSection>

            {/* ===== 4. Anahtar Kelime Araştırması ===== */}
            <AccordionSection
              title="Anahtar Kelime Araştırması"
              desc="Hedef kitlenizin arama davranışını anlayarak doğru kelimeleri hedefleyin."
            >
              <Subsection title="Anahtar Kelime Araştırma Süreci">
                <ResourceItem href="https://ahrefs.com/blog/keyword-research/" type="Rehber" typeClass="type-guide" title="Anahtar Kelime Araştırması: Başlangıç Rehberi" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/keyword-research/" type="Rehber" typeClass="type-guide" title="Anahtar Kelime Araştırması Nasıl Yapılır (6 Yol)" author="Semrush" />
                <ResourceItem href="https://backlinko.com/keyword-research-tools" type="Rehber" typeClass="type-guide" title="En İyi 8 Anahtar Kelime Araştırma Aracı" author="Backlinko" />
                <ResourceItem href="https://ahrefs.com/academy/keyword-research-course" type="Kurs" typeClass="type-course" title="Anahtar Kelime Araştırma Kursu" author="Ahrefs Academy" />
                <ResourceItem href="https://www.semrush.com/academy/courses/keyword-research-essentials-with-semrush/" type="Kurs" typeClass="type-course" title="Anahtar Kelime Araştırma Temelleri" author="Semrush Academy" />
              </Subsection>
              <Subsection title="Anahtar Kelime Zorluk ve Fırsat Analizi">
                <ResourceItem href="https://www.semrush.com/blog/keyword-difficulty/" type="Rehber" typeClass="type-guide" title="Anahtar Kelime Zorluğu Nedir? Nasıl Ölçülür" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/keyword-difficulty/" type="Rehber" typeClass="type-guide" title="Anahtar Kelime Zorluğu: Sıralama Şansınızı Tahmin Edin" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/how-to-choose-long-tail-keywords/" type="Rehber" typeClass="type-guide" title="Uzun Kuyruklu Anahtar Kelimeler: Kapsamlı Rehber" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/long-tail-vs-short-tail-keywords/" type="Rehber" typeClass="type-guide" title="Uzun Kuyruklu ve Kısa Kuyruklu Anahtar Kelimeler" author="Ahrefs" />
              </Subsection>
              <Subsection title="Rakip Anahtar Kelime Analizi">
                <ResourceItem href="https://www.semrush.com/blog/competitor-keywords/" type="Rehber" typeClass="type-guide" title="Rakip Anahtar Kelimeleri: Bulma ve Kazanma Yolları" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/competitor-keywords/" type="Rehber" typeClass="type-guide" title="Rakip Anahtar Kelimeleri Nasıl Bulunur ve Kullanılır" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/keyword-gap-analysis/" type="Rehber" typeClass="type-guide" title="Anahtar Kelime Boşluk Analizi Nedir ve Nasıl Yapılır" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/content-gap-analysis/" type="Rehber" typeClass="type-guide" title="İçerik Boşluk Analizi Nasıl Yapılır [Şablon Dahil]" author="Ahrefs" />
              </Subsection>
              <Subsection title="Konu Kümeleri ve Anahtar Kelime Haritalama">
                <ResourceItem href="https://www.semrush.com/blog/topic-clusters/" type="Rehber" typeClass="type-guide" title="SEO İçin Konu Kümeleri: Nedir ve Nasıl Oluşturulur" author="Semrush" />
                <ResourceItem href="https://blog.hubspot.com/marketing/topic-clusters-seo" type="Rehber" typeClass="type-guide" title="Konu Kümeleri: SEO'nun Bir Sonraki Evrimi" author="HubSpot" />
                <ResourceItem href="https://backlinko.com/keyword-mapping" type="Rehber" typeClass="type-guide" title="Anahtar Kelime Haritalama: Adım Adım Rehber" author="Backlinko" />
                <ResourceItem href="https://www.semrush.com/blog/pillar-page/" type="Rehber" typeClass="type-guide" title="Temel Sayfa (Pillar Page) Nedir ve Nasıl Oluşturulur" author="Semrush" />
              </Subsection>
            </AccordionSection>

            {/* ===== 5. Arama Niyeti (Search Intent) ===== */}
            <AccordionSection
              title="Arama Niyeti (Search Intent) Derin Analizi"
              desc="Kullanıcıların arama arkasındaki gerçek amacını çözümleyin ve içeriğinizi buna göre şekillendirin."
            >
              <Subsection title="Arama Niyeti Türleri ve Sınıflandırma">
                <ResourceItem href="https://www.semrush.com/blog/search-intent/" type="Rehber" typeClass="type-guide" title="Arama Niyeti Nedir? Nasıl Belirlenir ve Optimize Edilir" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/search-intent/" type="Rehber" typeClass="type-guide" title="SEO'da Arama Niyeti: Nedir ve Nasıl Optimize Edilir" author="Ahrefs" />
                <ResourceItem href="https://backlinko.com/hub/seo/search-intent" type="Rehber" typeClass="type-guide" title="Arama Niyeti ve SEO: Kullanıcı Hedeflerine Göre Optimize Edin" author="Backlinko" />
                <ResourceItem href="https://www.semrush.com/blog/types-of-keywords-commercial-informational-navigational-transactional/" type="Rehber" typeClass="type-guide" title="SEO'da 4 Anahtar Kelime Türü (Örneklerle)" author="Semrush" />
              </Subsection>
              <Subsection title="Niyet Eşleştirme ve İçerik Uyumu">
                <ResourceItem href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" type="Rehber" typeClass="type-guide" title="Yararlı, Güvenilir ve Kullanıcı Odaklı İçerik Oluşturma" author="Google" />
                <ResourceItem href="https://ahrefs.com/blog/content-gap-analysis/" type="Rehber" typeClass="type-guide" title="İçerik Boşluk Analizi: Eksikleri Bulun" author="Ahrefs" />
                <ResourceItem href="https://backlinko.com/skyscraper-technique" type="Rehber" typeClass="type-guide" title="Gökdelen Tekniği: Rakipleri Geride Bırakan İçerik Oluşturma" author="Backlinko" />
              </Subsection>
            </AccordionSection>

            {/* ===== 6. SERP Analizi ve Rakip Sayfa İncelemesi ===== */}
            <AccordionSection
              title="SERP Analizi ve Rakip Sayfa İncelemesi"
              desc="Arama sonuçlarını analiz ederek rakiplerinizin stratejilerini çözün."
            >
              <Subsection title="SERP Yapısını Anlama">
                <ResourceItem href="https://backlinko.com/hub/seo/serp-features" type="Rehber" typeClass="type-guide" title="SERP Özellikleri: Nedir ve Neden Önemlidir" author="Backlinko" />
                <ResourceItem href="https://www.semrush.com/blog/serp-features-guide/" type="Rehber" typeClass="type-guide" title="SERP Özellikleri Nelerdir? Türleri ve Optimizasyonu" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/competitor-keywords/" type="Rehber" typeClass="type-guide" title="Rakip Anahtar Kelimeleri Nasıl Bulunur ve Analiz Edilir" author="Ahrefs" />
                <ResourceItem href="https://backlinko.com/find-competitors-keywords" type="Rehber" typeClass="type-guide" title="Rakiplerinizin Anahtar Kelimelerini Bulma" author="Backlinko" />
              </Subsection>
              <Subsection title="Featured Snippet ve PAA Optimizasyonu">
                <ResourceItem href="https://ahrefs.com/blog/featured-snippets/" type="Rehber" typeClass="type-guide" title="Öne Çıkan Snippet'lar: Google'da Zirveye Kısayol" author="Ahrefs" />
                <ResourceItem href="https://www.searchenginejournal.com/featured-snippets-optimization/410622/" type="Rehber" typeClass="type-guide" title="Google Öne Çıkan Snippet İçin Optimizasyon: 12 Adım" author="Search Engine Journal" />
                <ResourceItem href="https://backlinko.com/hub/seo/featured-snippets" type="Rehber" typeClass="type-guide" title="Öne Çıkan Snippet: Google'da Sıfır Pozisyonunu Yakalamak" author="Backlinko" />
              </Subsection>
            </AccordionSection>

            {/* ===== 7. Site İçi SEO (On-Page) ===== */}
            <AccordionSection
              title="Site İçi SEO (On-Page)"
              desc="Her sayfayı arama motorları ve kullanıcılar için optimize edin."
            >
              <Subsection title="Title Tag ve Meta Description">
                <ResourceItem href="https://developers.google.com/search/docs/appearance/title-link" type="Rehber" typeClass="type-guide" title="Google Aramada Başlık Bağlantılarını Etkileme" author="Google" />
                <ResourceItem href="https://developers.google.com/search/docs/appearance/snippet" type="Rehber" typeClass="type-guide" title="Arama Sonuçlarında Snippet Kontrolü" author="Google" />
                <ResourceItem href="https://www.semrush.com/blog/title-tag/" type="Rehber" typeClass="type-guide" title="Title Tag Nedir? Nasıl Optimize Edilir" author="Semrush" />
                <ResourceItem href="https://backlinko.com/meta-tags" type="Rehber" typeClass="type-guide" title="Meta Etiketler: Nedir ve Nasıl Kullanılır" author="Backlinko" />
              </Subsection>
              <Subsection title="Başlık Hiyerarşisi ve URL Yapısı">
                <ResourceItem href="https://www.semrush.com/blog/heading-tags/" type="Rehber" typeClass="type-guide" title="Başlık Etiketleri Nedir? Neden Önemlidir" author="Semrush" />
                <ResourceItem href="https://backlinko.com/h1-tag" type="Rehber" typeClass="type-guide" title="H1 Etiketi: En İyi Uygulamalar ve Stratejiler" author="Backlinko" />
                <ResourceItem href="https://developers.google.com/search/docs/crawling-indexing/url-structure" type="Rehber" typeClass="type-guide" title="URL Yapısı En İyi Uygulamaları" author="Google" />
                <ResourceItem href="https://ahrefs.com/blog/seo-friendly-urls/" type="Rehber" typeClass="type-guide" title="SEO Dostu URL'ler Nasıl Oluşturulur" author="Ahrefs" />
              </Subsection>
              <Subsection title="İç Bağlantı (Internal Linking) Stratejisi">
                <ResourceItem href="https://www.semrush.com/blog/internal-links/" type="Rehber" typeClass="type-guide" title="İç Bağlantılar: Kapsamlı Rehber ve Stratejiler" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/internal-links-for-seo/" type="Rehber" typeClass="type-guide" title="SEO İçin İç Bağlantılar: Uygulanabilir Rehber" author="Ahrefs" />
                <ResourceItem href="https://backlinko.com/hub/seo/internal-links" type="Rehber" typeClass="type-guide" title="SEO İçin İç Bağlantı: Kapsamlı Rehber" author="Backlinko" />
                <ResourceItem href="https://developers.google.com/search/docs/crawling-indexing/links-crawlable" type="Rehber" typeClass="type-guide" title="SEO Bağlantı En İyi Uygulamaları" author="Google" />
              </Subsection>
              <Subsection title="İçerik Optimizasyonu">
                <ResourceItem href="https://backlinko.com/on-page-seo" type="Rehber" typeClass="type-guide" title="On-Page SEO: Kesin Rehber" author="Backlinko" />
                <ResourceItem href="https://ahrefs.com/blog/on-page-seo/" type="Rehber" typeClass="type-guide" title="On-Page SEO: Hem Robotlar Hem Okuyucular İçin Optimizasyon" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/content-optimization-guide" type="Rehber" typeClass="type-guide" title="İçerik Optimizasyonu: SEO'yu Güçlendiren 15 Taktik" author="Semrush" />
                <ResourceItem href="https://developers.google.com/search/docs/appearance/page-experience" type="Rehber" typeClass="type-guide" title="Google Sayfa Deneyimini Anlama" author="Google" />
                <ResourceItem href="https://www.semrush.com/academy/courses/on-page-seo-essentials-with-semrush/" type="Kurs" typeClass="type-course" title="On-Page SEO Temelleri Kursu" author="Semrush Academy" />
              </Subsection>
              <Subsection title="Landing Page Optimizasyonu">
                <ResourceItem href="https://ahrefs.com/blog/landing-page-seo/" type="Rehber" typeClass="type-guide" title="SEO İçin Landing Page Oluşturma ve Optimize Etme" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/landing-page-optimization/" type="Rehber" typeClass="type-guide" title="Landing Page Optimizasyonu Nedir ve Nasıl Yapılır" author="Semrush" />
                <ResourceItem href="https://www.semrush.com/blog/seo-landing-page/" type="Rehber" typeClass="type-guide" title="Landing Page'ler İçin SEO: SERP'te Sıralanma Yöntemleri" author="Semrush" />
                <ResourceItem href="https://searchengineland.com/landing-pages-seo-conversions-447672" type="Blog" typeClass="type-blog" title="SEO ve Dönüşümü Artıran Landing Page Tasarımı" author="Search Engine Land" />
                <ResourceItem href="https://neilpatel.com/blog/the-definitive-guide-to-creating-high-converting-landing-pages/" type="Rehber" typeClass="type-guide" title="Yüksek Dönüşümlü Landing Page Oluşturma Rehberi" author="Neil Patel" />
              </Subsection>
              <Subsection title="Organik Tıklama Oranı (CTR) Optimizasyonu">
                <ResourceItem href="https://backlinko.com/google-ctr-stats" type="Blog" typeClass="type-blog" title="4 Milyon Google Arama Sonucunu Analiz Ettik: Organik TO" author="Backlinko" />
                <ResourceItem href="https://ahrefs.com/blog/how-to-improve-ctr/" type="Rehber" typeClass="type-guide" title="Tıklama Oranını (CTR) İyileştirmenin 9 Kanıtlanmış Yolu" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/organic-ctr/" type="Blog" typeClass="type-blog" title="Organik CTR SEO'yu Nasıl Etkiler? (5 İyileştirme Yolu)" author="Semrush" />
                <ResourceItem href="https://searchengineland.com/seo-page-titles-meta-descriptions-clicks-448381" type="Rehber" typeClass="type-guide" title="Başlıklar ve Meta Açıklamalar: Daha Fazla Tıklama Kazanma" author="Search Engine Land" />
                <ResourceItem href="https://www.searchenginejournal.com/boost-google-organic-click-through-rate/381736/" type="Blog" typeClass="type-blog" title="Google'da Organik TO'yu Artırmanın 12 Kanıtlanmış Adımı" author="Search Engine Journal" />
              </Subsection>
            </AccordionSection>

            {/* ===== 8. SEO Uyumlu İçerik Üretimi ===== */}
            <AccordionSection
              title="SEO Uyumlu İçerik Üretimi"
              desc="Hem kullanıcıya hem arama motorlarına hitap eden, kaliteli içerikler oluşturun."
            >
              <Subsection title="İçerik Stratejisi ve Planlama">
                <ResourceItem href="https://ahrefs.com/blog/content-strategy/" type="Rehber" typeClass="type-guide" title="Sıfırdan İçerik Stratejisi Nasıl Kurulur" author="Ahrefs" />
                <ResourceItem href="https://backlinko.com/content-marketing-guide" type="Rehber" typeClass="type-guide" title="İçerik Pazarlama: Kesin Rehber" author="Backlinko" />
                <ResourceItem href="https://ahrefs.com/blog/topic-clusters/" type="Rehber" typeClass="type-guide" title="Konu Kümeleri: Site Otoritesi Nasıl Artırılır" author="Ahrefs" />
                <ResourceItem href="https://ahrefs.com/blog/content-gap-analysis/" type="Rehber" typeClass="type-guide" title="Rakiplerin Yazdığı Ama Sizde Olmayan Konuları Bulun" author="Ahrefs" />
              </Subsection>
              <Subsection title="SEO Metin Yazarlığı (Copywriting)">
                <ResourceItem href="https://ahrefs.com/blog/how-to-write-a-blog-post/" type="Rehber" typeClass="type-guide" title="Sıralanan Blog Yazısı Nasıl Yazılır" author="Ahrefs" />
                <ResourceItem href="https://backlinko.com/seo-copywriting" type="Rehber" typeClass="type-guide" title="SEO Metin Yazarlığı: Kesin Rehber" author="Backlinko" />
                <ResourceItem href="https://ahrefs.com/blog/evergreen-content/" type="Rehber" typeClass="type-guide" title="Zamansız (Evergreen) İçerik Nasıl Oluşturulur" author="Ahrefs" />
                <ResourceItem href="https://ahrefs.com/blog/content-refresh/" type="Rehber" typeClass="type-guide" title="İçerik Güncelleme: Eski Yazılarla Trafiği Geri Kazanma" author="Ahrefs" />
              </Subsection>
            </AccordionSection>

            {/* ===== 9. İçerik Yaşam Döngüsü Yönetimi ===== */}
            <AccordionSection
              title="İçerik Yaşam Döngüsü Yönetimi"
              desc="İçerik çürümesi, budama, güncelleme ve anahtar kelime yamyamlığı ile içerik portföyünüzü yönetin."
            >
              <Subsection title="İçerik Çürümesi ve Güncelleme">
                <ResourceItem href="https://searchengineland.com/guide/content-decay" type="Rehber" typeClass="type-guide" title="İçerik Çürümesi: Nedir ve Trafik Düşüşleri Nasıl Tersine Çevrilir" author="Search Engine Land" />
                <ResourceItem href="https://ahrefs.com/blog/content-decay/" type="Rehber" typeClass="type-guide" title="İçerik Çürümesi Nedir? (Trafiğinizi Çökertmeden Nasıl Düzeltilir)" author="Ahrefs" />
                <ResourceItem href="https://www.searchenginejournal.com/content-decay-and-refresh-strategies-to-maintain-site-relevancy/524723/" type="Blog" typeClass="type-blog" title="Site Güncelliğini Korumak İçin İçerik Yenileme Stratejileri" author="Search Engine Journal" />
              </Subsection>
              <Subsection title="İçerik Budama ve Denetimi">
                <ResourceItem href="https://searchengineland.com/guide/content-pruning" type="Rehber" typeClass="type-guide" title="İçerik Budama: Düşük Performanslıları Kaldırarak SEO Güçlendirme" author="Search Engine Land" />
                <ResourceItem href="https://www.semrush.com/blog/content-audit/" type="Rehber" typeClass="type-guide" title="İçerik Denetimi Nasıl Yapılır: Kapsamlı Rehber [Şablon Dahil]" author="Semrush" />
              </Subsection>
              <Subsection title="Anahtar Kelime Yamyamlığı (Cannibalization)">
                <ResourceItem href="https://www.semrush.com/blog/keyword-cannibalization-guide/" type="Rehber" typeClass="type-guide" title="Anahtar Kelime Yamyamlığı: Bulma, Düzeltme ve Önleme Rehberi" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/keyword-cannibalization/" type="Rehber" typeClass="type-guide" title="Anahtar Kelime Yamyamlığı: Gerçekte Nedir ve Nasıl Düzeltilir" author="Ahrefs" />
              </Subsection>
            </AccordionSection>

            {/* ===== 10. E-E-A-T ===== */}
            <AccordionSection
              title="E-E-A-T (Deneyim, Uzmanlık, Otorite, Güven)"
              desc="Google'ın içerik kalitesini değerlendirme çerçevesini anlayın ve uygulayın."
            >
              <Subsection title="E-E-A-T Çerçevesini Kavrama">
                <ResourceItem href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" type="Rehber" typeClass="type-guide" title="Yararlı, Güvenilir ve Kullanıcı Odaklı İçerik Oluşturma" author="Google" />
                <ResourceItem href="https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf" type="Rehber" typeClass="type-guide" title="Google Arama Kalitesi Değerlendirici Kılavuzu" author="Google" />
                <ResourceItem href="https://ahrefs.com/blog/eeat-seo/" type="Rehber" typeClass="type-guide" title="E-E-A-T: Güven İnşa Edip Görünürlüğü Artırma" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/eeat/" type="Rehber" typeClass="type-guide" title="Google E-E-A-T Nedir ve SEO'yu Nasıl Etkiler" author="Semrush" />
                <ResourceItem href="https://searchengineland.com/guide/google-e-e-a-t-for-seo" type="Rehber" typeClass="type-guide" title="E-E-A-T'i Anlamak İçin SEO Rehberi" author="Search Engine Land" />
              </Subsection>
              <Subsection title="Otorite ve Güvenilirlik İnşası">
                <ResourceItem href="https://ahrefs.com/blog/eeat-audit/" type="Rehber" typeClass="type-guide" title="E-E-A-T Denetimi: Güveni Ölçen 220+ İşaret" author="Ahrefs" />
                <ResourceItem href="https://yoast.com/author-publisher-entities-seo/" type="Rehber" typeClass="type-guide" title="SEO'da Yazar ve Yayıncı Varlıklarını Güçlendirme" author="Yoast" />
                <ResourceItem href="https://yoast.com/experience-in-e-e-a-t/" type="Rehber" typeClass="type-guide" title="E-E-A-T'deki Yeni E: Deneyimin Önemi" author="Yoast" />
                <ResourceItem href="https://rankmath.com/kb/author-seo/" type="Rehber" typeClass="type-guide" title="E-E-A-T'i Güçlendirmek İçin Yazar SEO'su" author="Rank Math" />
              </Subsection>
              <Subsection title="YMYL ve Hassas İçerik">
                <ResourceItem href="https://www.semrush.com/blog/ymyl/" type="Rehber" typeClass="type-guide" title="YMYL Nedir ve SEO'yu Nasıl Etkiler?" author="Semrush" />
                <ResourceItem href="https://searchengineland.com/guide/ymyl" type="Rehber" typeClass="type-guide" title="YMYL Nedir? Google'ın Yüksek Riskli İçerik Kategorisi" author="Search Engine Land" />
              </Subsection>
            </AccordionSection>

            {/* ===== 10. Topical Authority ve Semantic SEO ===== */}
            <AccordionSection
              title="Topical Authority ve Semantic SEO"
              desc="Konu otoritesi inşa edin, anlam odaklı içerik ve entity SEO stratejileri geliştirin."
            >
              <Subsection title="Topical Authority (Konu Otoritesi)">
                <ResourceItem href="https://searchengineland.com/guide/topical-authority" type="Rehber" typeClass="type-guide" title="Konu Otoritesi: Alanınızda Başvuru Kaynağı Olun" author="Search Engine Land" />
                <ResourceItem href="https://www.semrush.com/blog/topical-authority/" type="Rehber" typeClass="type-guide" title="Konu Otoritesi Nedir? (ve Nasıl İnşa Edilir)" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/topical-authority/" type="Rehber" typeClass="type-guide" title="SEO'da Konu Otoritesi Nedir ve Nasıl Oluşturulur" author="Ahrefs" />
                <ResourceItem href="https://neilpatel.com/blog/topical-authority/" type="Rehber" typeClass="type-guide" title="Konu Otoritesi: Tanımı ve İnşa Yöntemleri" author="Neil Patel" />
                <ResourceItem href="https://www.searchenginejournal.com/topical-authority/247189/" type="Rehber" typeClass="type-guide" title="Konu Otoritesi Nedir ve Nasıl Çalışır" author="Search Engine Journal" />
              </Subsection>
              <Subsection title="Semantic SEO ve Entity Optimizasyonu">
                <ResourceItem href="https://searchengineland.com/guide/semantic-seo" type="Rehber" typeClass="type-guide" title="Semantic SEO: Anahtar Kelimeler Yerine Anlam İçin Optimize Etme" author="Search Engine Land" />
                <ResourceItem href="https://searchengineland.com/guide/entity-first-content-optimization" type="Rehber" typeClass="type-guide" title="Entity-First SEO: İçeriği Google Bilgi Grafiği ile Hizalama" author="Search Engine Land" />
                <ResourceItem href="https://ahrefs.com/blog/semantic-seo/" type="Blog" typeClass="type-blog" title="Semantic SEO: Çoğu SEO Uzmanının Anlamadığı İleri Düzey Beceri" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/semantic-seo/" type="Rehber" typeClass="type-guide" title="Semantic SEO Nedir ve 10 Başarı İpucu" author="Semrush" />
                <ResourceItem href="https://backlinko.com/hub/seo/semantic-seo" type="Rehber" typeClass="type-guide" title="Semantic SEO Nedir ve Neden Önemlidir" author="Backlinko" />
              </Subsection>
            </AccordionSection>

            {/* ===== 13. Entity SEO ve Knowledge Panel ===== */}
            <AccordionSection
              title="Entity SEO ve Knowledge Panel"
              desc="Google Bilgi Grafiği'ni anlayın, Knowledge Panel'inizi optimize edin ve marka SERP'inizi yönetin."
            >
              <Subsection title="Entity SEO ve Bilgi Grafiği">
                <ResourceItem href="https://www.semrush.com/blog/entity-seo/" type="Rehber" typeClass="type-guide" title="Entity SEO Nedir ve Neden Önemlidir" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/google-knowledge-graph/" type="Rehber" typeClass="type-guide" title="Google Bilgi Grafiği Açıklaması: SEO'yu Nasıl Etkiler" author="Ahrefs" />
              </Subsection>
              <Subsection title="Knowledge Panel Optimizasyonu">
                <ResourceItem href="https://searchengineland.com/guide/google-knowledge-panel" type="Rehber" typeClass="type-guide" title="Google Knowledge Panel: Nedir ve Nasıl Öne Çıkılır" author="Search Engine Land" />
                <ResourceItem href="https://www.semrush.com/blog/google-knowledge-panel/" type="Rehber" typeClass="type-guide" title="Google Knowledge Panel: Nedir ve Nasıl Elde Edilir" author="Semrush" />
                <ResourceItem href="https://searchengineland.com/optimize-company-google-knowledge-panel-453882" type="Blog" typeClass="type-blog" title="Şirketinizin Google Knowledge Panel'ini Optimize Etme" author="Search Engine Land" />
              </Subsection>
            </AccordionSection>

            {/* ===== 14. Teknik SEO ===== */}
            <AccordionSection
              title="Teknik SEO"
              desc="Sitenizin teknik altyapısını, tarama sürecini ve indeksleme performansını optimize edin."
            >
              <Subsection title="Tarama ve İndeksleme Temelleri">
                <ResourceItem href="https://developers.google.com/search/docs/crawling-indexing" type="Rehber" typeClass="type-guide" title="Google Tarama ve İndeksleme Dokümantasyonu" author="Google" />
                <ResourceItem href="https://ahrefs.com/blog/technical-seo/" type="Rehber" typeClass="type-guide" title="Teknik SEO Başlangıç Rehberi" author="Ahrefs" />
                <ResourceItem href="https://backlinko.com/technical-seo-guide" type="Rehber" typeClass="type-guide" title="Teknik SEO: Kapsamlı Rehber" author="Backlinko" />
                <ResourceItem href="https://www.screamingfrog.co.uk/seo-spider/" type="Araç" typeClass="type-tool" title="Screaming Frog SEO Spider" author="Screaming Frog" />
              </Subsection>
              <Subsection title="Sitemap ve Robots.txt">
                <ResourceItem href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview" type="Rehber" typeClass="type-guide" title="Site Haritası Hakkında Bilgi Edinin" author="Google" />
                <ResourceItem href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap" type="Rehber" typeClass="type-guide" title="Site Haritası Oluşturma ve Gönderme" author="Google" />
                <ResourceItem href="https://developers.google.com/search/docs/crawling-indexing/robots/intro" type="Rehber" typeClass="type-guide" title="Robots.txt Giriş ve Rehberi" author="Google" />
                <ResourceItem href="https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt" type="Rehber" typeClass="type-guide" title="robots.txt Dosyası Oluşturma ve Gönderme" author="Google" />
              </Subsection>
              <Subsection title="Canonical Etiketler ve Yönlendirmeler">
                <ResourceItem href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" type="Rehber" typeClass="type-guide" title="Kanonik URL Nasıl Belirlenir" author="Google" />
                <ResourceItem href="https://www.semrush.com/blog/canonical-url-guide/" type="Rehber" typeClass="type-guide" title="Canonical URL'ler: En İyi Uygulamalar ve Yaygın Sorunlar" author="Semrush" />
                <ResourceItem href="https://www.semrush.com/blog/301-vs-302-redirect/" type="Rehber" typeClass="type-guide" title="301 vs. 302 Yönlendirme: Hangisi Seçilmeli" author="Semrush" />
                <ResourceItem href="https://www.semrush.com/blog/redirects/" type="Rehber" typeClass="type-guide" title="Yönlendirmeler: Nedir ve Nasıl Kullanılır" author="Semrush" />
              </Subsection>
              <Subsection title="Crawl Budget ve Site Mimarisi">
                <ResourceItem href="https://www.semrush.com/blog/crawl-budget/" type="Rehber" typeClass="type-guide" title="Tarama Bütçesi Nedir ve Neden Önemlidir" author="Semrush" />
                <ResourceItem href="https://backlinko.com/hub/seo/architecture" type="Rehber" typeClass="type-guide" title="Web Sitesi Mimarisi: SEO Dostu Yapı Oluşturma" author="Backlinko" />
                <ResourceItem href="https://www.semrush.com/blog/technical-seo-checklist/" type="Rehber" typeClass="type-guide" title="Kapsamlı Teknik SEO Kontrol Listesi" author="Semrush" />
                <ResourceItem href="https://searchengineland.com/pagination-seo-what-you-need-to-know-453707" type="Rehber" typeClass="type-guide" title="Sayfalandırma ve SEO: Bilmeniz Gerekenler" author="Search Engine Land" />
              </Subsection>
              <Subsection title="Log Analizi (Log File Analysis)">
                <ResourceItem href="https://searchengineland.com/guide/log-file-analysis" type="Rehber" typeClass="type-guide" title="SEO İçin Log Dosyası Analizi: Tarama Sorunlarını Bulun" author="Search Engine Land" />
                <ResourceItem href="https://www.semrush.com/blog/log-file-analysis/" type="Rehber" typeClass="type-guide" title="Log Dosyası Analizi Nedir ve SEO İçin Nasıl Yapılır" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/log-file-analysis/" type="Rehber" typeClass="type-guide" title="SEO Log Dosyası Analizi Nasıl Yapılır [Şablon Dahil]" author="Ahrefs" />
                <ResourceItem href="https://www.searchenginejournal.com/seo-log-file-analysis-guide/419660/" type="Rehber" typeClass="type-guide" title="SEO Log Dosyası Analizi Nedir? Başlangıç Rehberi" author="Search Engine Journal" />
                <ResourceItem href="https://www.screamingfrog.co.uk/log-file-analyser/" type="Araç" typeClass="type-tool" title="SEO Log Dosyası Analiz Aracı" author="Screaming Frog" />
              </Subsection>
              <Subsection title="Crawl Davranışı Analizi">
                <ResourceItem href="https://developers.google.com/search/blog/2017/01/what-crawl-budget-means-for-googlebot" type="Blog" typeClass="type-blog" title="Googlebot İçin Tarama Bütçesi Ne Anlama Gelir" author="Google" />
                <ResourceItem href="https://support.google.com/webmasters/answer/9679690" type="Rehber" typeClass="type-guide" title="Search Console Tarama İstatistikleri Raporu" author="Google" />
                <ResourceItem href="https://searchengineland.com/guide/crawl-budget" type="Rehber" typeClass="type-guide" title="Tarama Bütçesi Nedir? Çalışma Prensibi ve Optimizasyon İpuçları" author="Search Engine Land" />
                <ResourceItem href="https://www.semrush.com/blog/crawl-budget/" type="Rehber" typeClass="type-guide" title="Tarama Bütçesi Nedir ve SEO İçin Neden Önemlidir" author="Semrush" />
              </Subsection>
              <Subsection title="Edge SEO">
                <ResourceItem href="https://searchengineland.com/edge-seo-447510" type="Rehber" typeClass="type-guide" title="Edge SEO Nedir?" author="Search Engine Land" />
                <ResourceItem href="https://www.searchenginejournal.com/edge-seo/273983/" type="Rehber" typeClass="type-guide" title="Edge SEO Nedir ve Neden Benimsemelisiniz" author="Search Engine Journal" />
                <ResourceItem href="https://searchengineland.com/guide/what-is-technical-seo" type="Rehber" typeClass="type-guide" title="Teknik SEO Nedir? CDN Seviyesi Uygulama Dahil Kesin Rehber" author="Search Engine Land" />
              </Subsection>
            </AccordionSection>

            {/* ===== 12. Site Hızı ve Core Web Vitals ===== */}
            <AccordionSection
              title="Site Hızı ve Core Web Vitals"
              desc="Sayfa performansını optimize ederek hem kullanıcı deneyimini hem sıralamayı iyileştirin."
            >
              <Subsection title="Core Web Vitals'a Genel Bakış">
                <ResourceItem href="https://web.dev/articles/vitals" type="Rehber" typeClass="type-guide" title="Web Vitals Nedir" author="web.dev (Google)" />
                <ResourceItem href="https://web.dev/explore/learn-core-web-vitals" type="Kurs" typeClass="type-course" title="Core Web Vitals Öğrenme Yolu" author="web.dev (Google)" />
                <ResourceItem href="https://web.dev/articles/top-cwv" type="Rehber" typeClass="type-guide" title="Core Web Vitals İyileştirmenin En Etkili Yolları" author="web.dev (Google)" />
                <ResourceItem href="https://ahrefs.com/blog/core-web-vitals/" type="Rehber" typeClass="type-guide" title="Core Web Vitals Nedir ve Nasıl İyileştirilir" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/core-web-vitals/" type="Rehber" typeClass="type-guide" title="Core Web Vitals: Nedir ve Nasıl İyileştirilir" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/core-web-vitals-study/" type="Blog" typeClass="type-blog" title="CrUX ve 5.2 Milyon Sayfa ile Core Web Vitals Veri Çalışması" author="Ahrefs" />
              </Subsection>
              <Subsection title="LCP (Largest Contentful Paint) Derinlemesine">
                <ResourceItem href="https://web.dev/articles/lcp" type="Rehber" typeClass="type-guide" title="En Büyük İçerikli Boyama (LCP): Metrik Tanımı" author="web.dev (Google)" />
                <ResourceItem href="https://web.dev/articles/optimize-lcp" type="Rehber" typeClass="type-guide" title="LCP Optimizasyonu: Kapsamlı Rehber" author="web.dev (Google)" />
                <ResourceItem href="https://web.dev/blog/common-misconceptions-lcp" type="Blog" typeClass="type-blog" title="LCP Optimizasyonu Hakkında Yaygın Yanılgılar" author="web.dev (Google)" />
                <ResourceItem href="https://www.smashingmagazine.com/2023/01/optimizing-image-element-lcp/" type="Rehber" typeClass="type-guide" title="Görsel Element LCP'sini Optimize Etme" author="Smashing Magazine" />
                <ResourceItem href="https://web.dev/articles/font-best-practices" type="Rehber" typeClass="type-guide" title="Font Optimizasyonu En İyi Uygulamaları" author="web.dev (Google)" />
                <ResourceItem href="https://www.debugbear.com/blog/lcp-subparts" type="Rehber" typeClass="type-guide" title="LCP Alt Parçalarını Ölçerek Performansı İyileştirme" author="DebugBear" />
                <ResourceItem href="https://www.debugbear.com/blog/preload-largest-contentful-paint-image" type="Rehber" typeClass="type-guide" title="LCP Görselini Preload ile Önceden Yükleme" author="DebugBear" />
                <ResourceItem href="https://web.dev/articles/extract-critical-css" type="Rehber" typeClass="type-guide" title="Kritik CSS Çıkarma ve Satır İçi Ekleme" author="web.dev (Google)" />
                <ResourceItem href="https://www.semrush.com/blog/lcp/" type="Rehber" typeClass="type-guide" title="LCP Nedir ve Nasıl İyileştirilir" author="Semrush" />
              </Subsection>
              <Subsection title="INP (Interaction to Next Paint) Derinlemesine">
                <ResourceItem href="https://web.dev/articles/inp" type="Rehber" typeClass="type-guide" title="Sonraki Boyamaya Etkileşim (INP): Metrik Tanımı" author="web.dev (Google)" />
                <ResourceItem href="https://web.dev/articles/optimize-inp" type="Rehber" typeClass="type-guide" title="INP Optimizasyonu: Kapsamlı Rehber" author="web.dev (Google)" />
                <ResourceItem href="https://developer.chrome.com/docs/performance/insights/inp-breakdown" type="Rehber" typeClass="type-guide" title="INP Ayrıştırma: Giriş Gecikmesi, İşleme ve Sunum" author="Chrome for Developers" />
                <ResourceItem href="https://web.dev/articles/optimize-long-tasks" type="Rehber" typeClass="type-guide" title="Uzun Görevleri Optimize Etme (Long Tasks)" author="web.dev (Google)" />
                <ResourceItem href="https://web.dev/off-main-thread/" type="Rehber" typeClass="type-guide" title="Web Workers ile JavaScript'i Ana Thread Dışında Çalıştırma" author="web.dev (Google)" />
                <ResourceItem href="https://web.dev/articles/script-evaluation-and-long-tasks" type="Rehber" typeClass="type-guide" title="Script Değerlendirmesi ve Uzun Görevler" author="web.dev (Google)" />
                <ResourceItem href="https://web.dev/articles/manually-diagnose-slow-interactions-in-the-lab" type="Rehber" typeClass="type-guide" title="Laboratuvarda Yavaş Etkileşimleri Manuel Olarak Teşhis Etme" author="web.dev (Google)" />
                <ResourceItem href="https://www.debugbear.com/blog/inp-chrome-devtools" type="Rehber" typeClass="type-guide" title="Chrome DevTools ile INP Nasıl İyileştirilir" author="DebugBear" />
              </Subsection>
              <Subsection title="CLS (Cumulative Layout Shift) Derinlemesine">
                <ResourceItem href="https://web.dev/articles/cls" type="Rehber" typeClass="type-guide" title="Kümülatif Düzen Kayması (CLS): Metrik Tanımı" author="web.dev (Google)" />
                <ResourceItem href="https://web.dev/articles/optimize-cls" type="Rehber" typeClass="type-guide" title="CLS Optimizasyonu: Kapsamlı Rehber" author="web.dev (Google)" />
                <ResourceItem href="https://www.smashingmagazine.com/2021/06/how-to-fix-cumulative-layout-shift-issues/" type="Rehber" typeClass="type-guide" title="CLS Sorunları Nasıl Düzeltilir: Kapsamlı Pratik Rehber" author="Smashing Magazine" />
                <ResourceItem href="https://developer.chrome.com/docs/performance/insights/cls-culprit" type="Rehber" typeClass="type-guide" title="Düzen Kayması Suçluları: Kök Neden Tespiti" author="Chrome for Developers" />
                <ResourceItem href="https://web.dev/articles/animations-guide" type="Rehber" typeClass="type-guide" title="Yüksek Performanslı CSS Animasyonları Oluşturma" author="web.dev (Google)" />
                <ResourceItem href="https://css-tricks.com/lets-take-a-deep-dive-into-the-css-contain-property/" type="Rehber" typeClass="type-guide" title="CSS Contain Özelliği Derinlemesine İnceleme" author="CSS-Tricks" />
                <ResourceItem href="https://www.debugbear.com/blog/web-font-layout-shift" type="Rehber" typeClass="type-guide" title="Web Fontlarının Neden Olduğu Düzen Kaymalarını Düzeltme" author="DebugBear" />
              </Subsection>
              <Subsection title="TTFB (Time to First Byte) Derinlemesine">
                <ResourceItem href="https://web.dev/articles/ttfb" type="Rehber" typeClass="type-guide" title="İlk Bayta Kadar Geçen Süre (TTFB): Metrik Tanımı" author="web.dev (Google)" />
                <ResourceItem href="https://web.dev/articles/optimize-ttfb" type="Rehber" typeClass="type-guide" title="TTFB Optimizasyonu: Kapsamlı Rehber" author="web.dev (Google)" />
                <ResourceItem href="https://www.smashingmagazine.com/2025/02/time-to-first-byte-beyond-server-response-time/" type="Rehber" typeClass="type-guide" title="TTFB: Sunucu Yanıt Süresinin Ötesinde" author="Smashing Magazine" />
                <ResourceItem href="https://web.dev/articles/preconnect-and-dns-prefetch" type="Rehber" typeClass="type-guide" title="Erken Ağ Bağlantıları Kurma (preconnect ve dns-prefetch)" author="web.dev (Google)" />
                <ResourceItem href="https://www.debugbear.com/blog/reduce-initial-server-response-time" type="Rehber" typeClass="type-guide" title="İlk Sunucu Yanıt Süresini Azaltmanın 5 Yolu" author="DebugBear" />
                <ResourceItem href="https://www.debugbear.com/blog/http-server-connections" type="Rehber" typeClass="type-guide" title="HTTP Sunucu Bağlantıları: HTTP/1.1, HTTP/2 ve HTTP/3" author="DebugBear" />
                <ResourceItem href="https://developer.chrome.com/docs/lighthouse/performance/server-response-time" type="Rehber" typeClass="type-guide" title="Sunucu Yanıt Sürelerini Azaltma (TTFB)" author="Chrome for Developers" />
              </Subsection>
              <Subsection title="Performans Ölçüm ve İzleme">
                <ResourceItem href="https://web.dev/articles/vitals-measurement-getting-started" type="Rehber" typeClass="type-guide" title="Web Vitals Ölçmeye Başlarken" author="web.dev (Google)" />
                <ResourceItem href="https://web.dev/articles/crux-and-rum-differences" type="Rehber" typeClass="type-guide" title="CrUX Verileri Neden RUM Verilerinden Farklıdır" author="web.dev (Google)" />
                <ResourceItem href="https://developer.chrome.com/docs/devtools/performance/overview" type="Rehber" typeClass="type-guide" title="Chrome DevTools Performans Paneli Rehberi" author="Chrome for Developers" />
                <ResourceItem href="https://web.dev/articles/performance-budgets-101" type="Rehber" typeClass="type-guide" title="Performans Bütçeleri 101" author="web.dev (Google)" />
                <ResourceItem href="https://www.debugbear.com/software/core-web-vitals-monitoring-tools" type="Rehber" typeClass="type-guide" title="Sayfa Hızı İzleme İçin 9 Core Web Vitals Aracı" author="DebugBear" />
                <ResourceItem href="https://www.debugbear.com/blog/core-web-vitals-audit" type="Rehber" typeClass="type-guide" title="Core Web Vitals Denetimi Nasıl Yapılır: Derinlemesine Rehber" author="DebugBear" />
              </Subsection>
              <Subsection title="İleri Seviye Performans Teknikleri">
                <ResourceItem href="https://web.dev/learn/performance/understanding-the-critical-path" type="Kurs" typeClass="type-course" title="Kritik Yolu (Critical Path) Anlama" author="web.dev (Google)" />
                <ResourceItem href="https://web.dev/articles/fetch-priority" type="Rehber" typeClass="type-guide" title="Fetch Priority API ile Kaynak Yüklemeyi Optimize Etme" author="web.dev (Google)" />
                <ResourceItem href="https://web.dev/learn/performance/prefetching-prerendering-precaching" type="Rehber" typeClass="type-guide" title="Prefetching, Prerendering ve Service Worker Precaching" author="web.dev (Google)" />
                <ResourceItem href="https://developer.chrome.com/docs/web-platform/prerender-pages" type="Rehber" typeClass="type-guide" title="Anında Sayfa Geçişleri İçin Prerender" author="Chrome for Developers" />
                <ResourceItem href="https://web.dev/articles/rendering-on-the-web" type="Rehber" typeClass="type-guide" title="Web'de Render: SSR, CSR, Streaming ve Islands Mimarisi" author="web.dev (Google)" />
                <ResourceItem href="https://developer.chrome.com/docs/workbox/caching-strategies-overview" type="Rehber" typeClass="type-guide" title="Service Worker Önbellekleme Stratejileri" author="Chrome for Developers" />
                <ResourceItem href="https://www.debugbear.com/blog/resource-hints-rel-preload-prefetch-preconnect" type="Rehber" typeClass="type-guide" title="Kaynak İpuçları: preload, prefetch ve preconnect Karşılaştırması" author="DebugBear" />
                <ResourceItem href="https://developers.google.com/speed/docs/insights/v5/about" type="Araç" typeClass="type-tool" title="PageSpeed Insights" author="Google" />
                <ResourceItem href="https://developer.chrome.com/docs/lighthouse/overview/" type="Araç" typeClass="type-tool" title="Lighthouse Tanıtımı" author="Chrome for Developers" />
              </Subsection>
            </AccordionSection>

            {/* ===== 13. Schema Markup ===== */}
            <AccordionSection
              title="Schema Markup ve Yapılandırılmış Veri"
              desc="Arama motorlarının içeriğinizi daha iyi anlamasını sağlayarak zengin sonuçlar elde edin."
            >
              <Subsection title="Schema Markup Temelleri">
                <ResourceItem href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" type="Rehber" typeClass="type-guide" title="Yapılandırılmış Veri İşaretlemesine Giriş" author="Google" />
                <ResourceItem href="https://schema.org/docs/gs.html" type="Rehber" typeClass="type-guide" title="Schema.org ile Başlarken" author="Schema.org" />
                <ResourceItem href="https://ahrefs.com/blog/schema-markup/" type="Rehber" typeClass="type-guide" title="Schema Markup Nedir ve Nasıl Uygulanır" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/schema-markup/" type="Rehber" typeClass="type-guide" title="Schema Markup Nedir ve Nasıl Eklenir" author="Semrush" />
              </Subsection>
              <Subsection title="Schema Türleri ve Kullanım Alanları">
                <ResourceItem href="https://developers.google.com/search/docs/appearance/structured-data/search-gallery" type="Rehber" typeClass="type-guide" title="Google'ın Desteklediği Yapılandırılmış Veri Türleri" author="Google" />
                <ResourceItem href="https://developers.google.com/search/docs/appearance/structured-data/product" type="Rehber" typeClass="type-guide" title="Ürün Yapılandırılmış Verisi" author="Google" />
                <ResourceItem href="https://developers.google.com/search/docs/appearance/structured-data/faqpage" type="Rehber" typeClass="type-guide" title="SSS Yapılandırılmış Verisi" author="Google" />
                <ResourceItem href="https://developers.google.com/search/docs/appearance/structured-data/local-business" type="Rehber" typeClass="type-guide" title="Yerel İşletme Yapılandırılmış Verisi" author="Google" />
                <ResourceItem href="https://backlinko.com/schema-markup-guide" type="Rehber" typeClass="type-guide" title="Schema Markup: Nedir ve Neden Önemlidir" author="Backlinko" />
              </Subsection>
              <Subsection title="Zengin Sonuçlar ve Test Araçları">
                <ResourceItem href="https://search.google.com/test/rich-results" type="Araç" typeClass="type-tool" title="Google Zengin Sonuç Testi" author="Google" />
                <ResourceItem href="https://technicalseo.com/tools/schema-markup-generator/" type="Araç" typeClass="type-tool" title="Schema Markup Oluşturucu (JSON-LD)" author="TechnicalSEO.com" />
                <ResourceItem href="https://ahrefs.com/blog/rich-snippets/" type="Rehber" typeClass="type-guide" title="Zengin Snippet'lar: Nedir ve Nasıl Elde Edilir" author="Ahrefs" />
              </Subsection>
            </AccordionSection>

            {/* ===== 14. JavaScript ve Modern Web SEO ===== */}
            <AccordionSection
              title="JavaScript ve Modern Web SEO"
              desc="JS framework'leri, headless CMS, JAMstack ve render stratejilerinin SEO üzerindeki etkisini öğrenin."
            >
              <Subsection title="JavaScript SEO Temelleri">
                <ResourceItem href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" type="Rehber" typeClass="type-guide" title="JavaScript SEO Temelleri" author="Google" />
                <ResourceItem href="https://web.dev/rendering-on-the-web/" type="Rehber" typeClass="type-guide" title="Web'de Render İşlemi" author="web.dev (Google)" />
                <ResourceItem href="https://ahrefs.com/blog/javascript-seo/" type="Rehber" typeClass="type-guide" title="JavaScript SEO Sorunları ve En İyi Uygulamalar" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/javascript-seo/" type="Rehber" typeClass="type-guide" title="JavaScript SEO: Kapsamlı Rehber" author="Semrush" />
              </Subsection>
              <Subsection title="SSR vs CSR ve Render Stratejileri">
                <ResourceItem href="https://developers.google.com/solutions/content-driven/hosting/rendering" type="Rehber" typeClass="type-guide" title="İçerik Odaklı Web Uygulamaları İçin Render" author="Google" />
                <ResourceItem href="https://www.searchenginejournal.com/server-side-vs-client-side-rendering-what-google-recommends/545946/" type="Rehber" typeClass="type-guide" title="Sunucu Taraflı vs İstemci Taraflı Render: Google Ne Önerir" author="Search Engine Journal" />
                <ResourceItem href="https://www.searchenginejournal.com/client-side-vs-server-side/482574/" type="Rehber" typeClass="type-guide" title="SEO İçin İstemci Taraflı vs Sunucu Taraflı Render" author="Search Engine Journal" />
              </Subsection>
              <Subsection title="Headless SEO">
                <ResourceItem href="https://www.contentful.com/seo-guide/headless-seo/" type="Rehber" typeClass="type-guide" title="Headless SEO Açıklaması" author="Contentful" />
                <ResourceItem href="https://hygraph.com/learn/headless-cms/headless-cms-seo" type="Rehber" typeClass="type-guide" title="Headless CMS ve SEO En İyi Uygulamaları" author="Hygraph" />
                <ResourceItem href="https://agilitycms.com/blog/are-headless-cms-good-for-seo" type="Blog" typeClass="type-blog" title="Headless CMS ve SEO: Bilmeniz Gerekenler" author="Agility CMS" />
                <ResourceItem href="https://strapi.io/blog/headless-cms-strapi-seo-best-practices" type="Blog" typeClass="type-blog" title="Headless CMS ve Strapi SEO En İyi Uygulamaları" author="Strapi" />
              </Subsection>
              <Subsection title="JAMstack SEO">
                <ResourceItem href="https://bejamas.com/hub/guides/jamstack-seo-guide" type="Rehber" typeClass="type-guide" title="JAMstack SEO Rehberi" author="Bejamas" />
                <ResourceItem href="https://www.netlify.com/blog/2016/06/17/five-seo-rules-for-your-jamstack-site/" type="Blog" typeClass="type-blog" title="JAMstack Siteniz İçin 5 SEO Kuralı" author="Netlify" />
                <ResourceItem href="https://bejamas.com/hub/guides/content-seo" type="Rehber" typeClass="type-guide" title="JAMstack İçerik SEO Rehberi" author="Bejamas" />
                <ResourceItem href="https://www.netlify.com/jamstack/" type="Rehber" typeClass="type-guide" title="JAMstack'e Hoş Geldiniz" author="Netlify" />
              </Subsection>
            </AccordionSection>

            {/* ===== Site Taşıma (Migration) SEO ===== */}
            <AccordionSection
              title="Site Taşıma (Migration) SEO"
              desc="Domain değişikliği, CMS geçişi ve yeniden tasarım süreçlerinde SEO'nuzu koruyun."
            >
              <Subsection title="Site Taşıma Süreci ve Kontrol Listesi">
                <ResourceItem href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" type="Rehber" typeClass="type-guide" title="Site Taşıma ve Göçler" author="Google" />
                <ResourceItem href="https://searchengineland.com/guide/ultimate-site-migration-seo-checklist" type="Rehber" typeClass="type-guide" title="Site Taşıma SEO Rehberi: Sıralamaları ve Trafiği Koruma" author="Search Engine Land" />
                <ResourceItem href="https://www.semrush.com/blog/website-migration-checklist/" type="Rehber" typeClass="type-guide" title="Kapsamlı Web Sitesi Taşıma Kontrol Listesi [SEO Dostu]" author="Semrush" />
                <ResourceItem href="https://backlinko.com/website-migration-checklist" type="Rehber" typeClass="type-guide" title="Web Sitesi Taşıma Kontrol Listesi (88 Adım + Ücretsiz Şablon)" author="Backlinko" />
                <ResourceItem href="https://www.searchenginejournal.com/essential-steps-website-migration/491862/" type="Rehber" typeClass="type-guide" title="Web Sitesi Taşıma SEO En İyi Uygulamaları" author="Search Engine Journal" />
              </Subsection>
            </AccordionSection>

            {/* ===== Web Erişilebilirlik ve SEO ===== */}
            <AccordionSection
              title="Web Erişilebilirlik ve SEO"
              desc="WCAG uyumluluğu ile hem erişilebilirliği hem SEO performansını artırın."
            >
              <Subsection title="Erişilebilirlik ve SEO Kesişimi">
                <ResourceItem href="https://searchengineland.com/guide/seo-accessibility" type="Rehber" typeClass="type-guide" title="SEO Erişilebilirlik: Sitenizi Herkes İçin Aranabilir Yapın" author="Search Engine Land" />
                <ResourceItem href="https://ahrefs.com/blog/accessibility-seo/" type="Rehber" typeClass="type-guide" title="SEO Uzmanları İçin Erişilebilirlik: ADA ve WCAG Uyumu" author="Ahrefs" />
                <ResourceItem href="https://www.searchenginejournal.com/intersection-of-seo-and-accessibility-optimizing-for-all-users/510254/" type="Blog" typeClass="type-blog" title="SEO ve Erişilebilirliğin Kesişimi: Tüm Kullanıcılar İçin Optimizasyon" author="Search Engine Journal" />
                <ResourceItem href="https://yoast.com/image-seo-alt-tag-and-title-tag-optimization/" type="Rehber" typeClass="type-guide" title="Görsel SEO: Alt Text ve Title Text Optimizasyonu" author="Yoast" />
                <ResourceItem href="https://www.semrush.com/blog/semantic-html5-guide/" type="Rehber" typeClass="type-guide" title="Semantik HTML Nedir ve Doğru Kullanımı" author="Semrush" />
              </Subsection>
            </AccordionSection>

            {/* ===== Görsel SEO ===== */}
            <AccordionSection
              title="Görsel SEO (Image SEO)"
              desc="Görsellerinizi optimize ederek Google Images ve organik aramalardan trafik kazanın."
            >
              <Subsection title="Görsel Optimizasyon Temelleri">
                <ResourceItem href="https://developers.google.com/search/docs/appearance/google-images" type="Rehber" typeClass="type-guide" title="Google Görsel SEO En İyi Uygulamaları" author="Google" />
                <ResourceItem href="https://ahrefs.com/blog/image-seo/" type="Rehber" typeClass="type-guide" title="Görsel SEO: 12 Uygulanabilir İpucu" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/image-seo/" type="Rehber" typeClass="type-guide" title="Görsel SEO: Arama ve Kullanıcılar İçin Görsel Optimizasyonu" author="Semrush" />
                <ResourceItem href="https://backlinko.com/image-seo" type="Rehber" typeClass="type-guide" title="Daha İyi Optimizasyon İçin 15 Görsel SEO İpucu" author="Backlinko" />
              </Subsection>
              <Subsection title="Image Sitemap ve Alt Text Optimizasyonu">
                <ResourceItem href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps" type="Rehber" typeClass="type-guide" title="Görsel Site Haritaları" author="Google" />
                <ResourceItem href="https://ahrefs.com/blog/alt-text/" type="Rehber" typeClass="type-guide" title="SEO İçin Alt Text: Görsellerinizi Nasıl Optimize Edersiniz" author="Ahrefs" />
                <ResourceItem href="https://yoast.com/image-seo-alt-tag-and-title-tag-optimization/" type="Rehber" typeClass="type-guide" title="Görsel SEO: Alt Text ve Title Text Optimizasyonu" author="Yoast" />
              </Subsection>
              <Subsection title="İleri Seviye Görsel Performans">
                <ResourceItem href="https://web.dev/articles/browser-level-image-lazy-loading" type="Rehber" typeClass="type-guide" title="Tarayıcı Düzeyinde Tembel Görsel Yükleme" author="web.dev (Google)" />
                <ResourceItem href="https://web.dev/learn/design/responsive-images" type="Rehber" typeClass="type-guide" title="Duyarlı Görseller (Responsive Images)" author="web.dev (Google)" />
                <ResourceItem href="https://web.dev/learn/performance/image-performance" type="Rehber" typeClass="type-guide" title="Görsel Performansı" author="web.dev (Google)" />
                <ResourceItem href="https://backlinko.com/visual-search-ranking-factors" type="Blog" typeClass="type-blog" title="Google Lens Çalışması: Görsel Arama Sonuçları" author="Backlinko" />
              </Subsection>
            </AccordionSection>

            {/* ===== 16. Video SEO ===== */}
            <AccordionSection
              title="Video SEO ve YouTube SEO"
              desc="Video içeriklerinizi YouTube ve Google'da üst sıralara taşıyın."
            >
              <Subsection title="Video İçerik Optimizasyonu">
                <ResourceItem href="https://developers.google.com/search/docs/appearance/video" type="Rehber" typeClass="type-guide" title="Video SEO En İyi Uygulamaları" author="Google" />
                <ResourceItem href="https://developers.google.com/search/docs/appearance/structured-data/video" type="Rehber" typeClass="type-guide" title="Video Schema Markup (VideoObject)" author="Google" />
                <ResourceItem href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps" type="Rehber" typeClass="type-guide" title="Video Site Haritaları ve Örnekler" author="Google" />
                <ResourceItem href="https://www.searchenginejournal.com/how-to-optimize-videos/422208/" type="Rehber" typeClass="type-guide" title="Video SEO: Video Optimizasyonu İçin 10 Adım" author="Search Engine Journal" />
                <ResourceItem href="https://backlinko.com/video-seo-guide" type="Rehber" typeClass="type-guide" title="Video SEO: Kapsamlı Oyun Kitabı" author="Backlinko" />
              </Subsection>
              <Subsection title="YouTube SEO ve Algoritma">
                <ResourceItem href="https://backlinko.com/how-to-rank-youtube-videos" type="Rehber" typeClass="type-guide" title="YouTube SEO: Videoları Nasıl Sıralarsınız" author="Backlinko" />
                <ResourceItem href="https://ahrefs.com/blog/youtube-seo/" type="Rehber" typeClass="type-guide" title="YouTube SEO: Videoları Baştan Sona Sıralama" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/youtube-seo/" type="Rehber" typeClass="type-guide" title="YouTube SEO: Videoları Sıralayın ve Kanalınızı Büyütün" author="Semrush" />
                <ResourceItem href="https://www.semrush.com/academy/courses/you-tube-search-trends-and-seo-strategies/" type="Kurs" typeClass="type-course" title="YouTube SEO Stratejileri Kursu" author="Semrush Academy" />
                <ResourceItem href="https://blog.hubspot.com/marketing/youtube-seo" type="Rehber" typeClass="type-guide" title="YouTube SEO: YouTube Araması İçin Optimize Etme" author="HubSpot" />
              </Subsection>
              <Subsection title="Ölçeklenebilir Video ve İçerik Stratejisi">
                <ResourceItem href="https://www.searchenginejournal.com/enterprise-seo-operating-models-that-scale-in-2026-and-beyond/566073/" type="Rehber" typeClass="type-guide" title="Ölçeklenen Kurumsal SEO Operasyon Modelleri" author="Search Engine Journal" />
                <ResourceItem href="https://www.singlegrain.com/seo/how-to-scale-seo-strategic-frameworks-for-sustainable-growth/" type="Rehber" typeClass="type-guide" title="SEO Nasıl Ölçeklenir: Sürdürülebilir Büyüme Çerçeveleri" author="Single Grain" />
                <ResourceItem href="https://www.growth-memo.com/p/the-changing-dynamic-of-programmatic" type="Blog" typeClass="type-blog" title="Programatik SEO'nun Değişen Dinamiği" author="Kevin Indig" />
              </Subsection>
            </AccordionSection>

            {/* ===== 17. Off-Page SEO ve Link Building ===== */}
            <AccordionSection
              title="Off-Page SEO ve Link Building"
              desc="Site dışı sinyaller, backlink stratejileri ve dijital PR ile otoritenizi güçlendirin."
            >
              <Subsection title="Off-Page SEO Genel Kavramlar">
                <ResourceItem href="https://backlinko.com/off-page-seo-guide" type="Rehber" typeClass="type-guide" title="Off-Page SEO: Kapsamlı Rehber" author="Backlinko" />
                <ResourceItem href="https://ahrefs.com/blog/off-page-seo-checklist/" type="Rehber" typeClass="type-guide" title="Off-Page SEO Kontrol Listesi" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/off-page-seo-checklist/" type="Rehber" typeClass="type-guide" title="Off-Page SEO Kontrol Listesi: En İyi 8 İpucu" author="Semrush" />
              </Subsection>
              <Subsection title="Link Building Stratejileri">
                <ResourceItem href="https://backlinko.com/link-building" type="Rehber" typeClass="type-guide" title="SEO İçin Link İnşası: Kesin Rehber" author="Backlinko" />
                <ResourceItem href="https://ahrefs.com/blog/link-building-strategies/" type="Rehber" typeClass="type-guide" title="9 Link İnşa Stratejisi" author="Ahrefs" />
                <ResourceItem href="https://backlinko.com/resource-page-link-building" type="Rehber" typeClass="type-guide" title="Kaynak Sayfası Link İnşası" author="Backlinko" />
                <ResourceItem href="https://ahrefs.com/blog/outreach-emails/" type="Şablon" typeClass="type-template" title="Link İnşa İletişim E-posta Şablonları" author="Ahrefs" />
                <ResourceItem href="https://ahrefs.com/blog/competitive-link-analysis/" type="Rehber" typeClass="type-guide" title="Rakip Geri Bağlantı Analizi" author="Ahrefs" />
              </Subsection>
              <Subsection title="Dijital PR">
                <ResourceItem href="https://ahrefs.com/blog/digital-pr/" type="Rehber" typeClass="type-guide" title="Dijital PR: Kapsamlı Rehber" author="Ahrefs" />
                <ResourceItem href="https://www.searchenginejournal.com/digital-pr-link-building/" type="Rehber" typeClass="type-guide" title="Link İnşası İçin Dijital PR" author="Search Engine Journal" />
              </Subsection>
              <Subsection title="Brand Mentions ve Linksiz Sinyaller">
                <ResourceItem href="https://searchengineland.com/guide/brand-mentions" type="Rehber" typeClass="type-guide" title="Marka Bahisleri ve SEO: Nedir ve Neden Önemlidir" author="Search Engine Land" />
                <ResourceItem href="https://searchengineland.com/use-brand-mentions-seo-linkless-future-link-building-290344" type="Blog" typeClass="type-blog" title="SEO İçin Marka Bahisleri Nasıl Kullanılır" author="Search Engine Land" />
                <ResourceItem href="https://www.semrush.com/blog/brand-mentions/" type="Rehber" typeClass="type-guide" title="Marka Bahisleri: Takip ve Optimizasyon Rehberi" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/unlinked-mentions/" type="Rehber" typeClass="type-guide" title="Bağlantısız Marka Bahislerini Bağlantıya Dönüştürme" author="Ahrefs" />
                <ResourceItem href="https://neilpatel.com/blog/brand-mentions/" type="Blog" typeClass="type-blog" title="Marka Bahisleri ile SEO Sıralamalarını İyileştirme" author="Neil Patel" />
              </Subsection>
              <Subsection title="Toxic Backlink Analizi ve Temizleme">
                <ResourceItem href="https://support.google.com/webmasters/answer/2648487" type="Rehber" typeClass="type-guide" title="Sitenize Gelen Bağlantıları Reddetme" author="Google" />
                <ResourceItem href="https://searchengineland.com/guide/how-to-disavow-backlinks" type="Rehber" typeClass="type-guide" title="Geri Bağlantıları Reddetme: Zararlı Linkleri Güvenle Kaldırma" author="Search Engine Land" />
                <ResourceItem href="https://www.semrush.com/blog/toxic-links-guidelines/" type="Rehber" typeClass="type-guide" title="Zararlı Geri Bağlantılar: Nedir ve Nasıl Bulunur" author="Semrush" />
                <ResourceItem href="https://www.semrush.com/blog/how-to-disavow/" type="Rehber" typeClass="type-guide" title="Geri Bağlantılar Nasıl Reddedilir (Gerçekten Gerekli Mi?)" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/remove-backlinks/" type="Rehber" typeClass="type-guide" title="Geri Bağlantıları Kaldırma ve Link Profilini Temizleme" author="Ahrefs" />
              </Subsection>
            </AccordionSection>

            {/* ===== 18. Online İtibar Yönetimi ===== */}
            <AccordionSection
              title="Online İtibar Yönetimi (ORM)"
              desc="Dijital itibarınızı yönetin, marka algısını kontrol altına alın."
            >
              <Subsection title="ORM Temelleri ve Stratejileri">
                <ResourceItem href="https://www.semrush.com/blog/online-reputation-management/" type="Rehber" typeClass="type-guide" title="Online İtibar Yönetimine Başlangıç Rehberi" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/online-reputation-management/" type="Rehber" typeClass="type-guide" title="Online İtibar Yönetimi: Başlangıç Rehberi" author="Ahrefs" />
                <ResourceItem href="https://www.searchenginejournal.com/seo-reputation-management/478005/" type="Rehber" typeClass="type-guide" title="SEO ve İtibar Yönetimi: Derinlemesine Rehber" author="Search Engine Journal" />
                <ResourceItem href="https://neilpatel.com/blog/guide-to-reputation-management/" type="Rehber" typeClass="type-guide" title="Online İtibar Yönetimi Nedir? Kesin Rehber" author="Neil Patel" />
                <ResourceItem href="https://www.semrush.com/local/blog/seo-reputation-management/" type="Blog" typeClass="type-blog" title="SEO İtibar Yönetimi: En İyi Stratejiler" author="Semrush" />
              </Subsection>
            </AccordionSection>

            {/* ===== 19. Yerel SEO ===== */}
            <AccordionSection
              title="Yerel SEO (Local SEO)"
              desc="Yerel aramalarda öne çıkarak bölgenizdeki müşterilere ulaşın."
            >
              <Subsection title="Google Business Profile Optimizasyonu">
                <ResourceItem href="https://support.google.com/business/answer/7091" type="Rehber" typeClass="type-guide" title="Google'da Yerel Sıralamanızı İyileştirme İpuçları" author="Google" />
                <ResourceItem href="https://whitespark.ca/google-business-profile-guide/" type="Rehber" typeClass="type-guide" title="Google İşletme Profili Optimizasyonu: Kapsamlı Rehber" author="Whitespark" />
                <ResourceItem href="https://ahrefs.com/blog/google-my-business/" type="Rehber" typeClass="type-guide" title="Google İşletme Profilini 30 Dakikada Optimize Etme" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/google-business-profile-optimization/" type="Rehber" typeClass="type-guide" title="Google İşletme Profili Optimizasyon İpuçları" author="Semrush" />
                <ResourceItem href="https://whitespark.ca/blog/how-to-outrank-99-of-local-competitors-google-business-profile-tier-list/" type="Blog" typeClass="type-blog" title="Yerel Rakiplerin %99'unu Geçme: GBP Seviye Listesi" author="Whitespark" />
              </Subsection>
              <Subsection title="Yerel Sıralama Faktörleri">
                <ResourceItem href="https://whitespark.ca/local-search-ranking-factors/" type="Rehber" typeClass="type-guide" title="Yerel Arama Sıralama Faktörleri Raporu" author="Whitespark" />
                <ResourceItem href="https://ahrefs.com/blog/local-seo/" type="Rehber" typeClass="type-guide" title="Yerel SEO: Kapsamlı Rehber" author="Ahrefs" />
                <ResourceItem href="https://backlinko.com/local-seo-guide" type="Rehber" typeClass="type-guide" title="Yerel SEO: Kesin Rehber" author="Backlinko" />
                <ResourceItem href="https://www.semrush.com/academy/courses/local-seo-essentials-with-semrush/" type="Kurs" typeClass="type-course" title="Yerel SEO Temelleri Kursu" author="Semrush Academy" />
              </Subsection>
              <Subsection title="Local Citation ve NAP Tutarlılığı">
                <ResourceItem href="https://www.brightlocal.com/learn/local-citations/" type="Rehber" typeClass="type-guide" title="Yerel Alıntılar (Citation) El Kitabı" author="BrightLocal" />
                <ResourceItem href="https://www.brightlocal.com/learn/local-citations/nap-data-accuracy/" type="Rehber" typeClass="type-guide" title="NAP Veri Doğruluğu Neden Önemlidir" author="BrightLocal" />
                <ResourceItem href="https://whitespark.ca/blog/local-citation-building-best-practices/" type="Blog" typeClass="type-blog" title="Yerel Alıntı Oluşturma En İyi Uygulamaları" author="Whitespark" />
                <ResourceItem href="https://www.brightlocal.com/learn/building-local-citations-manually/" type="Rehber" typeClass="type-guide" title="Manuel Yerel Alıntı Oluşturma Rehberi" author="BrightLocal" />
              </Subsection>
              <Subsection title="Yorum (Review) Yönetimi">
                <ResourceItem href="https://searchengineland.com/guide/how-to-win-at-google-reviews" type="Rehber" typeClass="type-guide" title="Google Yorumları ve SEO: Ölçeklenen İleri Stratejiler" author="Search Engine Land" />
                <ResourceItem href="https://www.brightlocal.com/learn/google-business-reviews/" type="Rehber" typeClass="type-guide" title="İşletmeler İçin Google Yorumları Kapsamlı Rehberi" author="BrightLocal" />
                <ResourceItem href="https://www.searchenginejournal.com/google-reviews-impact-rankings/429783/" type="Blog" typeClass="type-blog" title="Google Yorumları Harita ve Organik Sıralamayı Nasıl Etkiler" author="Search Engine Journal" />
                <ResourceItem href="https://www.brightlocal.com/learn/review-management/introduction-to-reviews/benefits-of-reviews/" type="Rehber" typeClass="type-guide" title="Google Yorumlarının İşletme Faydaları" author="BrightLocal" />
                <ResourceItem href="https://www.brightlocal.com/learn/local-seo-schema-templates/" type="Şablon" typeClass="type-template" title="Yerel SEO İçin 8 Schema Şablonu" author="BrightLocal" />
              </Subsection>
            </AccordionSection>

            {/* ===== 20. E-ticaret SEO ===== */}
            <AccordionSection
              title="E-ticaret SEO"
              desc="Online mağazanızın organik görünürlüğünü ve satışlarını artırın."
            >
              <Subsection title="Ürün ve Kategori Sayfası Optimizasyonu">
                <ResourceItem href="https://developers.google.com/search/docs/appearance/structured-data/product" type="Rehber" typeClass="type-guide" title="Google'da Ürün Yapılandırılmış Verisi" author="Google" />
                <ResourceItem href="https://developers.google.com/search/docs/specialty/ecommerce/include-structured-data-relevant-to-ecommerce" type="Rehber" typeClass="type-guide" title="E-ticaret Siteleri İçin Yapılandırılmış Veri" author="Google" />
                <ResourceItem href="https://www.shopify.com/blog/ecommerce-seo-beginners-guide" type="Rehber" typeClass="type-guide" title="E-ticaret SEO Rehberi" author="Shopify" />
                <ResourceItem href="https://www.conductor.com/academy/product-page-seo/" type="Rehber" typeClass="type-guide" title="Ürün Sayfası SEO'su: 17 En İyi Uygulama" author="Conductor" />
              </Subsection>
              <Subsection title="E-ticaret Site Mimarisi ve Teknik SEO">
                <ResourceItem href="https://neilpatel.com/blog/faceted-navigation/" type="Rehber" typeClass="type-guide" title="Fasetli Navigasyon ve SEO Üzerindeki Etkisi" author="Neil Patel" />
                <ResourceItem href="https://www.semrush.com/academy/courses/boost-ecommerce-seo-with-internal-linking/" type="Kurs" typeClass="type-course" title="İç Bağlantı ile E-ticaret SEO'sunu Güçlendirme" author="Semrush Academy" />
                <ResourceItem href="https://www.bigcommerce.com/articles/ecommerce/ecommerce-seo/" type="Rehber" typeClass="type-guide" title="E-ticaret SEO: Organik Trafiğinizi Artırın" author="BigCommerce" />
                <ResourceItem href="https://developers.google.com/search/docs/appearance/structured-data/product-variants" type="Rehber" typeClass="type-guide" title="Ürün Varyant Yapılandırılmış Verisi" author="Google" />
              </Subsection>
            </AccordionSection>

            {/* ===== SaaS / B2B SEO ===== */}
            <AccordionSection
              title="SaaS / B2B SEO"
              desc="SaaS ve B2B şirketler için ürün odaklı SEO stratejileri geliştirin."
            >
              <Subsection title="SaaS SEO Stratejileri">
                <ResourceItem href="https://ahrefs.com/blog/saas-seo/" type="Rehber" typeClass="type-guide" title="SaaS SEO: Denenmiş ve Test Edilmiş Rehber" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/saas-seo/" type="Rehber" typeClass="type-guide" title="SaaS SEO: Büyüme İçin Uygulanabilir Strateji" author="Semrush" />
                <ResourceItem href="https://backlinko.com/saas-seo" type="Rehber" typeClass="type-guide" title="SaaS SEO: Kazanan Bir Strateji Nasıl Kurulur" author="Backlinko" />
                <ResourceItem href="https://www.searchenginejournal.com/guide-enterprise-seo-strategy-saas-brands/476177/" type="Rehber" typeClass="type-guide" title="SaaS Markaları İçin Kurumsal SEO Stratejisi Rehberi" author="Search Engine Journal" />
                <ResourceItem href="https://www.searchenginejournal.com/bottom-of-funnel-keywords-seo/489814/" type="Blog" typeClass="type-blog" title="SEO'da Dönüşüm Hunisinin Alt Anahtar Kelimelerine Neden Öncelik Verilmeli" author="Search Engine Journal" />
              </Subsection>
            </AccordionSection>

            {/* ===== Kurumsal (Enterprise) SEO ===== */}
            <AccordionSection
              title="Kurumsal (Enterprise) SEO"
              desc="Büyük ölçekli organizasyonlarda SEO yönetimi, ekip oluşturma ve paydaş iletişimi."
            >
              <Subsection title="Enterprise SEO Yönetimi">
                <ResourceItem href="https://searchengineland.com/guide/enterprise-seo" type="Rehber" typeClass="type-guide" title="Kurumsal SEO: Ölçeklenebilir Arama Başarısı İçin Kapsamlı Rehber" author="Search Engine Land" />
                <ResourceItem href="https://www.semrush.com/blog/enterprise-seo/" type="Rehber" typeClass="type-guide" title="Kurumsal SEO Nedir? [Zorluklar ve Başarı İpuçları]" author="Semrush" />
                <ResourceItem href="https://www.searchenginejournal.com/enterprise-seo-operating-models-that-scale-in-2026-and-beyond/566073/" type="Blog" typeClass="type-blog" title="Ölçeklenen Kurumsal SEO Operasyon Modelleri" author="Search Engine Journal" />
              </Subsection>
              <Subsection title="SEO Paydaş Yönetimi ve İç İletişim">
                <ResourceItem href="https://searchengineland.com/guides/seo-stakeholders" type="Rehber" typeClass="type-guide" title="SEO Paydaşları: Ekipleri Hizalayın ve ROI'yi Kanıtlayın" author="Search Engine Land" />
                <ResourceItem href="https://searchengineland.com/seos-future-isnt-content-its-governance-464152" type="Blog" typeClass="type-blog" title="SEO'nun Geleceği İçerik Değil, Yönetişimdir" author="Search Engine Land" />
              </Subsection>
            </AccordionSection>

            {/* ===== Uluslararası SEO ===== */}
            <AccordionSection
              title="Uluslararası SEO"
              desc="Farklı ülke ve dillerdeki hedef kitlenize etkili şekilde ulaşın."
            >
              <Subsection title="Hreflang ve Çok Dilli Yapılandırma">
                <ResourceItem href="https://developers.google.com/search/docs/specialty/international/localized-versions" type="Rehber" typeClass="type-guide" title="Sayfalarınızın Yerelleştirilmiş Sürümleri" author="Google" />
                <ResourceItem href="https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites" type="Rehber" typeClass="type-guide" title="Çok Bölgeli ve Çok Dilli Siteleri Yönetme" author="Google" />
                <ResourceItem href="https://ahrefs.com/blog/international-seo/" type="Rehber" typeClass="type-guide" title="10 Uluslararası SEO En İyi Uygulaması + Kontrol Listesi" author="Ahrefs" />
                <ResourceItem href="https://searchengineland.com/guide/international-seo" type="Rehber" typeClass="type-guide" title="Uluslararası SEO Temelleri" author="Search Engine Land" />
                <ResourceItem href="https://www.semrush.com/academy/courses/International-seo/" type="Kurs" typeClass="type-course" title="Uluslararası SEO Kursu" author="Semrush Academy" />
              </Subsection>
              <Subsection title="Uluslararası SEO Stratejisi">
                <ResourceItem href="https://ahrefs.com/blog/multilingual-seo/" type="Rehber" typeClass="type-guide" title="Çok Dilli SEO: Canva ve Wise Trafiği Nasıl İkiye Katladı" author="Ahrefs" />
                <ResourceItem href="https://www.screamingfrog.co.uk/seo-spider/tutorials/how-to-audit-hreflang/" type="Araç" typeClass="type-tool" title="Hreflang Denetimi ve Test Rehberi" author="Screaming Frog" />
              </Subsection>
            </AccordionSection>

            {/* ===== 22. Mobil SEO ===== */}
            <AccordionSection
              title="Mobil SEO"
              desc="Mobile-first dünyasında sitenizin mobil performansını optimize edin."
            >
              <Subsection title="Mobile-First İndeksleme ve Optimizasyon">
                <ResourceItem href="https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing" type="Rehber" typeClass="type-guide" title="Mobile-First İndeksleme En İyi Uygulamaları" author="Google" />
                <ResourceItem href="https://www.semrush.com/blog/mobile-seo/" type="Rehber" typeClass="type-guide" title="Mobil SEO: Kapsamlı Rehber" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/mobile-seo/" type="Rehber" typeClass="type-guide" title="Mobil SEO: 10 Optimizasyon İpucu" author="Ahrefs" />
                <ResourceItem href="https://developers.google.com/search/docs/appearance/core-web-vitals" type="Rehber" typeClass="type-guide" title="Core Web Vitals ve Google Arama Sonuçları" author="Google" />
              </Subsection>
            </AccordionSection>

            {/* ===== 23. App Store Optimization ===== */}
            <AccordionSection
              title="App Store Optimization (ASO)"
              desc="Uygulama mağazalarında görünürlüğünüzü artırarak daha fazla indirme elde edin."
            >
              <Subsection title="ASO Temelleri">
                <ResourceItem href="https://www.semrush.com/blog/app-store-optimization/" type="Rehber" typeClass="type-guide" title="Uygulama Mağazası Optimizasyonu Nedir? Kapsamlı Rehber" author="Semrush" />
                <ResourceItem href="https://www.searchenginejournal.com/app-store-optimization-how-to-guide/241967/" type="Rehber" typeClass="type-guide" title="Uygulama Mağazası Optimizasyonu (ASO) Kapsamlı Rehberi" author="Search Engine Journal" />
                <ResourceItem href="https://neilpatel.com/blog/app-store-optimization/" type="Rehber" typeClass="type-guide" title="ASO Kapsamlı Rehberi" author="Neil Patel" />
                <ResourceItem href="https://searchengineland.com/what-is-aso-7-fundamentals-to-app-store-optimization-445495" type="Blog" typeClass="type-blog" title="ASO Nedir? Uygulama Mağazası Optimizasyonunun 7 Temeli" author="Search Engine Land" />
                <ResourceItem href="https://blog.hubspot.com/marketing/aso-marketing-strategy" type="Blog" typeClass="type-blog" title="ASO Pazarlama Stratejisi Derinlemesine İnceleme" author="HubSpot" />
              </Subsection>
              <Subsection title="Google Play SEO">
                <ResourceItem href="https://neilpatel.com/blog/seo-aso-google-play-store/" type="Rehber" typeClass="type-guide" title="Google Play Store Optimizasyonları: ASO ve SEO" author="Neil Patel" />
                <ResourceItem href="https://searchengineland.com/app-store-vs-google-play-aso-strategy-450983" type="Blog" typeClass="type-blog" title="App Store vs Google Play: ASO Stratejinizi Uyarlama" author="Search Engine Land" />
                <ResourceItem href="https://searchengineland.com/app-store-optimization-tips-seo-research-skills-438728" type="Blog" typeClass="type-blog" title="ASO: SEO Araştırma Becerilerinizi Kullanmanın 8 İpucu" author="Search Engine Land" />
                <ResourceItem href="https://neilpatel.com/blog/aso-keyword-research/" type="Rehber" typeClass="type-guide" title="Uygulama Mağazası Anahtar Kelime Araştırma Rehberi" author="Neil Patel" />
              </Subsection>
              <Subsection title="Apple App Store SEO">
                <ResourceItem href="https://neilpatel.com/blog/apple-app-store-aso/" type="Rehber" typeClass="type-guide" title="Apple App Store Optimizasyonu (ASO)" author="Neil Patel" />
                <ResourceItem href="https://searchengineland.com/app-store-vs-google-play-aso-strategy-450983" type="Blog" typeClass="type-blog" title="App Store vs Google Play: ASO Stratejinizi Uyarlama" author="Search Engine Land" />
                <ResourceItem href="https://sensortower.com/blog/the-ios-aso-keyword-research-and-optimization-workflow-guide" type="Rehber" typeClass="type-guide" title="iOS ASO Anahtar Kelime Araştırma ve Optimizasyon İş Akışı" author="Sensor Tower" />
                <ResourceItem href="https://searchengineland.com/app-store-optimization-tips-seo-research-skills-438728" type="Blog" typeClass="type-blog" title="ASO: SEO Araştırma Becerilerinizi Kullanmanın 8 İpucu" author="Search Engine Land" />
              </Subsection>
            </AccordionSection>

            {/* ===== Haber SEO ve Google Discover ===== */}
            <AccordionSection
              title="Haber SEO ve Google Discover"
              desc="Google News, Top Stories ve Discover'da görünürlük kazanın."
            >
              <Subsection title="Haber SEO (News SEO)">
                <ResourceItem href="https://www.searchenginejournal.com/google-news-top-stories-discover/393182/" type="Rehber" typeClass="type-guide" title="Google News, Top Stories ve Discover İçin Optimizasyon Rehberi" author="Search Engine Journal" />
                <ResourceItem href="https://www.semrush.com/blog/news-seo/" type="Rehber" typeClass="type-guide" title="Haber SEO Rehberi: Haber Makaleleri Nasıl Optimize Edilir" author="Semrush" />
                <ResourceItem href="https://searchengineland.com/google-news-optimization-boost-content-visibility-traffic-395031" type="Rehber" typeClass="type-guide" title="Google News Optimizasyonu ile İçerik Görünürlüğünü Artırma" author="Search Engine Land" />
                <ResourceItem href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap" type="Rehber" typeClass="type-guide" title="Haber Site Haritası Oluşturma" author="Google" />
              </Subsection>
              <Subsection title="Google Discover Optimizasyonu">
                <ResourceItem href="https://developers.google.com/search/docs/appearance/google-discover" type="Rehber" typeClass="type-guide" title="Google Discover'da Yer Alma" author="Google" />
                <ResourceItem href="https://searchengineland.com/google-discover-optimization-a-complete-guide-439665" type="Rehber" typeClass="type-guide" title="Google Discover Optimizasyonu: Kapsamlı Rehber" author="Search Engine Land" />
                <ResourceItem href="https://www.semrush.com/blog/how-to-optimize-for-google-discover/" type="Rehber" typeClass="type-guide" title="Google Discover Nedir? (ve Nasıl Yer Alınır)" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/google-discover/" type="Rehber" typeClass="type-guide" title="Google Discover: Nasıl Sıralanılır ve Trafik Çekilir" author="Ahrefs" />
                <ResourceItem href="https://developers.google.com/search/docs/appearance/web-stories-creation-best-practices" type="Rehber" typeClass="type-guide" title="Web Stories Oluşturma En İyi Uygulamaları" author="Google" />
              </Subsection>
            </AccordionSection>

            {/* ===== Mevsimsel ve Etkinlik Odaklı SEO ===== */}
            <AccordionSection
              title="Mevsimsel ve Etkinlik Odaklı SEO"
              desc="Sezona özel kampanyalar ve etkinlik bazlı SEO stratejileri ile doğru zamanda trafik yakalayın."
            >
              <Subsection title="Mevsimsel SEO Stratejileri">
                <ResourceItem href="https://searchengineland.com/seo-best-practices-black-friday-holiday-season-389219" type="Blog" typeClass="type-blog" title="Black Friday ve Tatil Sezonu İçin 5 SEO En İyi Uygulaması" author="Search Engine Land" />
                <ResourceItem href="https://ahrefs.com/blog/holiday-seo/" type="Rehber" typeClass="type-guide" title="6 Tatil SEO İpucu (Alışveriş Sezonunda Trafiği Artırma)" author="Ahrefs" />
                <ResourceItem href="https://www.searchenginejournal.com/seasonal-seo-tips/438300/" type="Blog" typeClass="type-blog" title="Mevsimsel SEO İpuçları: Yıl Boyu Arama İyileştirmeleri" author="Search Engine Journal" />
                <ResourceItem href="https://searchengineland.com/seasonal-content-marketing-guide-387771" type="Rehber" typeClass="type-guide" title="Mevsimsel İçerik Pazarlama Rehberiniz" author="Search Engine Land" />
                <ResourceItem href="https://searchengineland.com/prep-holiday-seo-campaigns-now-how-430986" type="Blog" typeClass="type-blog" title="Tatil SEO Kampanyalarınızı Neden Şimdi Hazırlamalısınız" author="Search Engine Land" />
              </Subsection>
            </AccordionSection>

            {/* ===== Google Algoritmaları ===== */}
            <AccordionSection
              title="Google Algoritmaları ve Güncellemeler"
              desc="Google'ın temel algoritmalarını, güncellemelerini ve sıralama sistemlerini anlayın."
            >
              <Subsection title="Google Core Update'ler">
                <ResourceItem href="https://developers.google.com/search/docs/appearance/core-updates" type="Rehber" typeClass="type-guide" title="Google Arama Temel Güncellemeleri" author="Google" />
                <ResourceItem href="https://searchengineland.com/guide/google-core-updates" type="Rehber" typeClass="type-guide" title="Google Core Güncellemeleri: Ne Anlama Gelir ve Nasıl Toparlanılır" author="Search Engine Land" />
                <ResourceItem href="https://www.searchenginejournal.com/google-algorithm-history/" type="Rehber" typeClass="type-guide" title="Google Algoritma Güncellemeleri ve Değişiklikleri: Tam Tarihçe" author="Search Engine Journal" />
                <ResourceItem href="https://www.semrush.com/blog/google-algorithm-update/" type="Rehber" typeClass="type-guide" title="Google Algoritma Güncellemeleri Zaman Çizelgesi" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/google-algorithm-updates" type="Araç" typeClass="type-tool" title="Google Algoritma Güncellemeleri Tarihçesi" author="Ahrefs" />
              </Subsection>
              <Subsection title="Helpful Content Update">
                <ResourceItem href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" type="Rehber" typeClass="type-guide" title="Yararlı, Güvenilir ve Kullanıcı Odaklı İçerik Oluşturma" author="Google" />
                <ResourceItem href="https://developers.google.com/search/blog/2022/08/helpful-content-update" type="Blog" typeClass="type-blog" title="İçerik Oluşturucuların Helpful Content Update Hakkında Bilmesi Gerekenler" author="Google" />
                <ResourceItem href="https://searchengineland.com/library/platforms/google/google-algorithm-updates/helpful-content-update" type="Rehber" typeClass="type-guide" title="Google'ın Helpful Content Update'i" author="Search Engine Land" />
                <ResourceItem href="https://www.semrush.com/blog/helpful-content/" type="Blog" typeClass="type-blog" title="Google'ın Yararlı İçerik Güncellemesi ve Ne Yapmalı" author="Semrush" />
                <ResourceItem href="https://developers.google.com/search/blog/2024/03/core-update-spam-policies" type="Blog" typeClass="type-blog" title="Mart 2024 Core Update ve Yeni Spam Politikaları" author="Google" />
              </Subsection>
              <Subsection title="Spam Update ve Algoritma Türleri">
                <ResourceItem href="https://developers.google.com/search/docs/essentials/spam-policies" type="Rehber" typeClass="type-guide" title="Google Web Araması Spam Politikaları" author="Google" />
                <ResourceItem href="https://developers.google.com/search/docs/appearance/spam-updates" type="Rehber" typeClass="type-guide" title="Google Arama Spam Güncellemeleri" author="Google" />
                <ResourceItem href="https://developers.google.com/search/blog/2022/12/december-22-link-spam-update" type="Blog" typeClass="type-blog" title="Google Arama İçin Bağlantı Spam Güncellemesi" author="Google" />
                <ResourceItem href="https://searchengineland.com/google-released-massive-search-quality-improvements-with-march-2024-core-update-and-multiple-spam-updates-438144" type="Blog" typeClass="type-blog" title="Mart 2024 Core Update ve Spam Güncellemeleri Açıklaması" author="Search Engine Land" />
              </Subsection>
            </AccordionSection>

            {/* ===== 25. Google Cezaları ve Kurtarma ===== */}
            <AccordionSection
              title="Google Cezaları ve Kurtarma"
              desc="Google ceza türlerini öğrenin, manual action'ları çözün ve sitenizi kurtarın."
            >
              <Subsection title="Google Ceza Türleri">
                <ResourceItem href="https://searchengineland.com/guide/google-penalty" type="Rehber" typeClass="type-guide" title="Google Ceza Rehberi: Tespit, Kurtarma ve Önleme" author="Search Engine Land" />
                <ResourceItem href="https://www.searchenginejournal.com/the-complete-list-of-google-penalties-and-how-to-recover/201510/" type="Rehber" typeClass="type-guide" title="Google Cezalarının Tam Listesi ve Kurtarma Yolları" author="Search Engine Journal" />
                <ResourceItem href="https://ahrefs.com/blog/google-penalties/" type="Rehber" typeClass="type-guide" title="Google Cezaları: Yeni Başlayanlar İçin Rehber" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/google-penalty/" type="Rehber" typeClass="type-guide" title="Google Cezalarını Anlamak: Kapsamlı Rehber" author="Semrush" />
              </Subsection>
              <Subsection title="Manual Actions ve Recovery Süreçleri">
                <ResourceItem href="https://support.google.com/webmasters/answer/9044175" type="Rehber" typeClass="type-guide" title="Manuel İşlemler Raporu - Search Console Yardım" author="Google" />
                <ResourceItem href="https://searchengineland.com/google-penalties-manual-actions-notifications-guide-388509" type="Rehber" typeClass="type-guide" title="Google Cezaları, Manuel İşlemler ve Bildirimler Rehberi" author="Search Engine Land" />
                <ResourceItem href="https://searchengineland.com/google-manual-actions-frequently-asked-questions-284289" type="Blog" typeClass="type-blog" title="Google Manuel İşlemler: Sık Sorulan Sorular ve Cevaplar" author="Search Engine Land" />
                <ResourceItem href="https://developers.google.com/search/docs/essentials" type="Rehber" typeClass="type-guide" title="Google Arama Temelleri (Web Yöneticisi Yönergeleri)" author="Google" />
              </Subsection>
            </AccordionSection>

            {/* ===== Negatif SEO Tespiti ve Korunma ===== */}
            <AccordionSection
              title="Negatif SEO Tespiti ve Korunma"
              desc="Kötü niyetli SEO saldırılarını tespit edin, sitenizi koruyun ve toparlanın."
            >
              <Subsection title="Negatif SEO Türleri ve Tespit Yöntemleri">
                <ResourceItem href="https://searchengineland.com/guide/negative-seo" type="Rehber" typeClass="type-guide" title="Negatif SEO Nedir? Önleme, Tespit ve Kurtarma" author="Search Engine Land" />
                <ResourceItem href="https://www.semrush.com/blog/what-is-negative-seo/" type="Rehber" typeClass="type-guide" title="Negatif SEO Nedir ve Saldırılar Nasıl Önlenir" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/negative-seo/" type="Rehber" typeClass="type-guide" title="Negatif SEO Saldırıları Nasıl Tespit Edilir ve Savuşturulur" author="Ahrefs" />
                <ResourceItem href="https://www.searchenginejournal.com/combat-recover-negative-seo-attack-survival-guide/114507/" type="Rehber" typeClass="type-guide" title="Negatif SEO Saldırısından Kurtulma: Hayatta Kalma Rehberi" author="Search Engine Journal" />
                <ResourceItem href="https://searchengineland.com/heres-how-to-monitor-for-negative-seo-308750" type="Blog" typeClass="type-blog" title="Negatif SEO İçin Nasıl İzleme Yapılır" author="Search Engine Land" />
              </Subsection>
            </AccordionSection>

            {/* ===== SEO Denetimi ===== */}
            <AccordionSection
              title="SEO Denetimi (Audit)"
              desc="Kapsamlı site denetimleri yaparak sorunları tespit edin ve iyileştirme planı oluşturun."
            >
              <Subsection title="Denetim Süreci ve Kontrol Listeleri">
                <ResourceItem href="https://www.semrush.com/blog/seo-audit/" type="Rehber" typeClass="type-guide" title="Kapsamlı SEO Denetimi Nasıl Yapılır" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/seo-audit/" type="Rehber" typeClass="type-guide" title="13 Adımda SEO Denetimi Nasıl Yapılır" author="Ahrefs" />
                <ResourceItem href="https://backlinko.com/seo-site-audit" type="Rehber" typeClass="type-guide" title="18 Adımlık SEO Denetim Kontrol Listesi" author="Backlinko" />
                <ResourceItem href="https://www.searchenginejournal.com/seo-audit/" type="Rehber" typeClass="type-guide" title="SEO Denetimi Nasıl Yapılır: Kapsamlı Kontrol Listesi" author="Search Engine Journal" />
                <ResourceItem href="https://www.semrush.com/blog/technical-seo-audit/" type="Rehber" typeClass="type-guide" title="Teknik SEO Denetimi Nasıl Yapılır" author="Semrush" />
                <ResourceItem href="https://www.screamingfrog.co.uk/blog/mastering-seo-audits/" type="Rehber" typeClass="type-guide" title="Screaming Frog ile SEO Denetimlerinde Uzmanlaşma" author="Screaming Frog" />
              </Subsection>
              <Subsection title="Denetim Araçları ve Şablonları">
                <ResourceItem href="https://www.semrush.com/siteaudit/" type="Araç" typeClass="type-tool" title="Semrush Site Denetim Aracı" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/site-audit" type="Araç" typeClass="type-tool" title="Ahrefs Site Denetim Aracı" author="Ahrefs" />
                <ResourceItem href="https://www.screamingfrog.co.uk/seo-spider/" type="Araç" typeClass="type-tool" title="Screaming Frog SEO Spider" author="Screaming Frog" />
                <ResourceItem href="https://www.seoptimer.com/" type="Araç" typeClass="type-tool" title="SEOptimer: Ücretsiz SEO Denetim Aracı" author="SEOptimer" />
                <ResourceItem href="https://backlinko.com/templates/marketing/seo-audit" type="Şablon" typeClass="type-template" title="Derinlemesine SEO Denetim Şablonu" author="Backlinko" />
              </Subsection>
            </AccordionSection>

            {/* ===== 27. SEO Analitik ===== */}
            <AccordionSection
              title="SEO Analitik ve Raporlama"
              desc="SEO performansınızı ölçün, analiz edin ve etkili raporlar hazırlayın."
            >
              <Subsection title="Google Search Console">
                <ResourceItem href="https://search.google.com/search-console" type="Araç" typeClass="type-tool" title="Google Search Console" author="Google" />
                <ResourceItem href="https://ahrefs.com/blog/google-search-console/" type="Rehber" typeClass="type-guide" title="Google Search Console: Kapsamlı Rehber" author="Ahrefs" />
                <ResourceItem href="https://support.google.com/webmasters/answer/7576553" type="Rehber" typeClass="type-guide" title="Performans Raporu Rehberi" author="Google" />
              </Subsection>
              <Subsection title="Google Analytics 4">
                <ResourceItem href="https://analytics.google.com/" type="Araç" typeClass="type-tool" title="Google Analytics 4" author="Google" />
                <ResourceItem href="https://ahrefs.com/blog/google-analytics-seo/" type="Rehber" typeClass="type-guide" title="SEO İçin Google Analytics" author="Ahrefs" />
                <ResourceItem href="https://analytics.google.com/analytics/academy/" type="Kurs" typeClass="type-course" title="Google Analytics Akademisi" author="Google" />
              </Subsection>
              <Subsection title="SEO Raporlama ve KPI'lar">
                <ResourceItem href="https://ahrefs.com/blog/seo-report/" type="Rehber" typeClass="type-guide" title="SEO Raporlama: Kapsamlı Rehber" author="Ahrefs" />
                <ResourceItem href="https://lookerstudio.google.com/" type="Araç" typeClass="type-tool" title="Google Looker Studio" author="Google" />
                <ResourceItem href="https://ahrefs.com/blog/seo-kpis/" type="Rehber" typeClass="type-guide" title="Takip Etmeniz Gereken SEO KPI'ları" author="Ahrefs" />
              </Subsection>
            </AccordionSection>

            {/* ===== SEO Tahminleme ve ROI Hesaplama ===== */}
            <AccordionSection
              title="SEO Tahminleme ve ROI Hesaplama"
              desc="SEO yatırım getirisini ölçün, trafik tahminleri yapın ve paydaşlara değer gösterin."
            >
              <Subsection title="SEO Tahminleme Modelleri">
                <ResourceItem href="https://ahrefs.com/blog/seo-forecasting/" type="Rehber" typeClass="type-guide" title="SEO Tahminleme: Onay Almanın Sanatı" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/seo-forecasting/" type="Rehber" typeClass="type-guide" title="SEO Tahminleme Nedir ve Neden Önemlidir" author="Semrush" />
                <ResourceItem href="https://searchengineland.com/seo-forecasting-google-sheets-guide-451253" type="Rehber" typeClass="type-guide" title="Google Sheets ile SEO Tahminleme Rehberiniz" author="Search Engine Land" />
              </Subsection>
              <Subsection title="SEO ROI Hesaplama">
                <ResourceItem href="https://ahrefs.com/blog/seo-roi/" type="Rehber" typeClass="type-guide" title="SEO ROI Nasıl Ölçülür (6 Zorluk Dahil)" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/seo-roi/" type="Rehber" typeClass="type-guide" title="SEO'nun ROI'si: Formüllerle Yatırım Getirisi Nasıl Ölçülür" author="Semrush" />
              </Subsection>
            </AccordionSection>

            {/* ===== UX, CRO ve Dönüşüm ===== */}
            <AccordionSection
              title="UX, CRO ve Dönüşüm Optimizasyonu"
              desc="Kullanıcı deneyimi ile SEO'yu birleştirin, trafik ve dönüşüm oranlarını optimize edin."
            >
              <Subsection title="UX (Kullanıcı Deneyimi) ve SEO İlişkisi">
                <ResourceItem href="https://www.semrush.com/blog/ux-and-seo/" type="Rehber" typeClass="type-guide" title="UX ve SEO Nasıl İlişkilidir (ve İkisi İçin Optimizasyon)" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/ux-and-seo/" type="Rehber" typeClass="type-guide" title="UX ve SEO: Sadece SERP'i Değil, Arama Yapan Kişiyi Kazanma" author="Ahrefs" />
                <ResourceItem href="https://blog.hubspot.com/website/ux-and-seo" type="Blog" typeClass="type-blog" title="UX ve SEO: Ne Kadar Önemli?" author="HubSpot" />
                <ResourceItem href="https://www.searchenginejournal.com/ux-design-seo/476959/" type="Rehber" typeClass="type-guide" title="Kullanıcı Deneyimi Nedir? Tasarım SEO'yu Nasıl Etkiler" author="Search Engine Journal" />
                <ResourceItem href="https://searchengineland.com/seo-ux-strategic-balance-437276" type="Blog" typeClass="type-blog" title="SEO ve UX: Stratejik Dengeyi Bulma" author="Search Engine Land" />
              </Subsection>
              <Subsection title="SEO + CRO (Dönüşüm Oranı Optimizasyonu)">
                <ResourceItem href="https://www.semrush.com/blog/seo-and-cro/" type="Rehber" typeClass="type-guide" title="SEO ve CRO: Daha İyi Sonuçlar İçin Stratejileri Birleştirme" author="Semrush" />
                <ResourceItem href="https://backlinko.com/conversion-rate-optimization" type="Rehber" typeClass="type-guide" title="Dönüşüm Oranı Optimizasyonu: Kesin Rehber" author="Backlinko" />
                <ResourceItem href="https://blog.hubspot.com/marketing/conversion-rate-optimization-guide" type="Rehber" typeClass="type-guide" title="Dönüşüm Oranı Optimizasyonu (CRO) Stratejisi" author="HubSpot" />
                <ResourceItem href="https://neilpatel.com/blog/seo-conversion/" type="Blog" typeClass="type-blog" title="SEO vs CRO: Dönüşüm Sağlayan Arama Trafiği Nasıl Çekilir" author="Neil Patel" />
                <ResourceItem href="https://searchengineland.com/driving-traffic-not-leads-seo-cro-440747" type="Blog" typeClass="type-blog" title="Trafik Var Ama Lead Yok mu? SEO ve CRO ile Kazanın" author="Search Engine Land" />
              </Subsection>
            </AccordionSection>

            {/* ===== 29. SEO A/B Testleri ===== */}
            <AccordionSection
              title="SEO A/B Testleri ve Deneyler"
              desc="SEO değişikliklerini veri ile doğrulayın, split test ve deney süreçlerini öğrenin."
            >
              <Subsection title="SEO A/B Testi Temelleri">
                <ResourceItem href="https://www.searchpilot.com/resources/blog/what-is-seo-split-testing" type="Rehber" typeClass="type-guide" title="SEO A/B Testi Nedir? Kapsamlı Rehber" author="SearchPilot" />
                <ResourceItem href="https://www.semrush.com/blog/seo-a-b-split-testing-101/" type="Rehber" typeClass="type-guide" title="SEO A/B Split Testi 101" author="Semrush" />
                <ResourceItem href="https://vwo.com/blog/seo-ab-testing/" type="Rehber" typeClass="type-guide" title="SEO A/B Test Rehberi: Adımlar, Araçlar ve Gerçek Örnekler" author="VWO" />
                <ResourceItem href="https://www.shopify.com/blog/seo-ab-testing" type="Rehber" typeClass="type-guide" title="SEO A/B Testi Nasıl Çalışır: Test Tasarlama Rehberi" author="Shopify" />
              </Subsection>
              <Subsection title="Split Testing Araçları ve Vaka Çalışmaları">
                <ResourceItem href="https://www.searchpilot.com/resources/case-studies" type="Rehber" typeClass="type-guide" title="SEO Test Sonuçları ve Vaka Çalışmaları" author="SearchPilot" />
                <ResourceItem href="https://www.searchpilot.com/resources/blog/how-to-design-robust-seo-experiments" type="Rehber" typeClass="type-guide" title="Sağlam SEO Deneyleri Nasıl Tasarlanır" author="SearchPilot" />
                <ResourceItem href="https://www.semrush.com/splitsignal/" type="Araç" typeClass="type-tool" title="SplitSignal - SEO A/B Testi Aracı" author="Semrush" />
                <ResourceItem href="https://www.semrush.com/kb/1201-how-to-draft-a-splitsignal-test-a-complete-guide" type="Rehber" typeClass="type-guide" title="SplitSignal Testi Hazırlama: Kapsamlı Rehber" author="Semrush" />
                <ResourceItem href="https://www.kevin-indig.com/how-to-run-bayesian-seo-tests/" type="Blog" typeClass="type-blog" title="Bayesian SEO Testleri Nasıl Çalıştırılır" author="Kevin Indig" />
              </Subsection>
            </AccordionSection>

            {/* ===== 30. Programmatic SEO ===== */}
            <AccordionSection
              title="Programmatic SEO"
              desc="Ölçeklenebilir içerik üretimi ve programatik SEO ile büyük trafik potansiyeli yakalayın."
            >
              <Subsection title="Programmatic SEO Stratejileri">
                <ResourceItem href="https://ahrefs.com/blog/programmatic-seo/" type="Rehber" typeClass="type-guide" title="Programatik SEO: Yeni Başlayanlar İçin Açıklama" author="Ahrefs" />
                <ResourceItem href="https://backlinko.com/programmatic-seo" type="Rehber" typeClass="type-guide" title="Programatik SEO: Nedir, İpuçları ve Örnekler" author="Backlinko" />
                <ResourceItem href="https://searchengineland.com/guide/programmatic-seo" type="Rehber" typeClass="type-guide" title="Programatik SEO: İçerik, Sıralama ve Trafiği Ölçeklendirme" author="Search Engine Land" />
                <ResourceItem href="https://www.growth-memo.com/p/the-changing-dynamic-of-programmatic" type="Blog" typeClass="type-blog" title="Programatik SEO'nun Değişen Dinamiği" author="Kevin Indig" />
                <ResourceItem href="https://playbooks.hypergrowthpartners.com/p/ai-powered-programmatic-seo" type="Rehber" typeClass="type-guide" title="AI Destekli Programatik SEO Oyun Kitabı" author="HyperGrowth Partners" />
              </Subsection>
            </AccordionSection>

            {/* ===== Sesli Arama (Voice Search) Optimizasyonu ===== */}
            <AccordionSection
              title="Sesli Arama (Voice Search) Optimizasyonu"
              desc="Sesli asistanlar ve konuşma dili sorguları için içeriklerinizi optimize edin."
            >
              <Subsection title="Sesli Arama SEO Stratejileri">
                <ResourceItem href="https://backlinko.com/optimize-for-voice-search" type="Rehber" typeClass="type-guide" title="Sesli Arama Optimizasyonu: Kesin Rehber" author="Backlinko" />
                <ResourceItem href="https://backlinko.com/voice-search-seo-study" type="Blog" typeClass="type-blog" title="10.000 Google Home Sonucunu Analiz Ettik: Sesli Arama SEO" author="Backlinko" />
                <ResourceItem href="https://searchengineland.com/guide/voice-search" type="Rehber" typeClass="type-guide" title="Sesli Arama SEO: Sözlü Sorgular İçin Nasıl Optimize Edilir" author="Search Engine Land" />
                <ResourceItem href="https://www.searchenginejournal.com/voice-search-optimization-strategy/379946/" type="Blog" typeClass="type-blog" title="Sesli Arama SEO: İşletmeler İçin 9 Pratik İpucu" author="Search Engine Journal" />
                <ResourceItem href="https://www.semrush.com/blog/voice-search-optimization/" type="Rehber" typeClass="type-guide" title="Sesli Arama Optimizasyonu: Sonuçlarınızı İyileştirmenin 6 Yolu" author="Semrush" />
              </Subsection>
            </AccordionSection>

            {/* ===== SERP Özellikleri ve Zero-Click ===== */}
            <AccordionSection
              title="SERP Özellikleri ve Zero-Click Arama"
              desc="Tıklamasız aramaların yükselişi ve AI arama sonuçlarının SEO'ya etkisini anlayın."
            >
              <Subsection title="Zero-Click Arama Trendi">
                <ResourceItem href="https://searchengineland.com/guide/zero-click-searches" type="Rehber" typeClass="type-guide" title="Zero-Click Aramalar: Nedir ve SEO'cular Nasıl Uyum Sağlar" author="Search Engine Land" />
                <ResourceItem href="https://www.semrush.com/blog/zero-click-searches/" type="Rehber" typeClass="type-guide" title="Tıklamasız Arama Pazarında Nasıl Kazanılır" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/zero-click-search/" type="Blog" typeClass="type-blog" title="Zero-Click Aramaya Hoş Geldiniz" author="Ahrefs" />
                <ResourceItem href="https://www.bain.com/insights/goodbye-clicks-hello-ai-zero-click-search-redefines-marketing/" type="Blog" typeClass="type-blog" title="Hoşçakal Tıklamalar, Merhaba AI: Tıklamasız Arama Pazarlamayı Yeniden Tanımlıyor" author="Bain & Company" />
              </Subsection>
              <Subsection title="AI Overviews ve SGE Etkisi">
                <ResourceItem href="https://developers.google.com/search/docs/appearance/ai-features" type="Rehber" typeClass="type-guide" title="AI Özellikleri ve Web Siteniz" author="Google" />
                <ResourceItem href="https://www.semrush.com/blog/semrush-ai-overviews-study/" type="Blog" typeClass="type-blog" title="AI Overviews Çalışması: SEO Verilerinin Gösterdiği" author="Semrush" />
                <ResourceItem href="https://www.searchenginejournal.com/ai-search-benchmark-every-seo-leader-needs/561301/" type="Blog" typeClass="type-blog" title="AI Arama Kıyaslaması: AEO ve AI Overviews" author="Search Engine Journal" />
                <ResourceItem href="https://ahrefs.com/blog/ai-seo-statistics/" type="Blog" typeClass="type-blog" title="90+ AI SEO İstatistiği (Güncel Veriler)" author="Ahrefs" />
              </Subsection>
            </AccordionSection>

            {/* ===== 32. Yapay Zeka ve SEO ===== */}
            <AccordionSection
              title="Yapay Zeka ve SEO"
              desc="AI araçlarını SEO iş akışlarınıza entegre edin, risklerini anlayın ve verimlilik kazanın."
            >
              <Subsection title="AI ile İçerik Üretimi (SEO için)">
                <ResourceItem href="https://developers.google.com/search/docs/fundamentals/using-gen-ai-content" type="Rehber" typeClass="type-guide" title="Google'ın Üretici AI İçeriği Hakkında Rehberi" author="Google" />
                <ResourceItem href="https://developers.google.com/search/blog/2023/02/google-search-and-ai-content" type="Blog" typeClass="type-blog" title="Google Arama'nın AI Üretimi İçerik Hakkında Görüşü" author="Google" />
                <ResourceItem href="https://searchengineland.com/guide/ai-generated-content" type="Rehber" typeClass="type-guide" title="AI Üretimi İçerik: Faydaları, Riskleri ve En İyi Uygulamalar" author="Search Engine Land" />
                <ResourceItem href="https://blog.hubspot.com/marketing/ai-content-optimization" type="Rehber" typeClass="type-guide" title="AI İçerik Optimizasyonu: Google ve AI Aramada Bulunma" author="HubSpot" />
              </Subsection>
              <Subsection title="Prompt Engineering (SEO için)">
                <ResourceItem href="https://searchengineland.com/advanced-ai-prompt-engineering-strategies-seo-436286" type="Rehber" typeClass="type-guide" title="SEO İçin İleri Seviye AI Prompt Mühendisliği Stratejileri" author="Search Engine Land" />
                <ResourceItem href="https://searchengineland.com/guide/seo-prompts-for-chatgpt" type="Rehber" typeClass="type-guide" title="ChatGPT İçin SEO Prompt'ları: AI ile Sıralamaları Yükseltme" author="Search Engine Land" />
                <ResourceItem href="https://www.clearscope.io/blog/prompt-engineering-for-seo-content" type="Blog" typeClass="type-blog" title="SEO İçeriği İçin Daha İyi AI Prompt'ları Tasarlama" author="Clearscope" />
                <ResourceItem href="https://www.coursera.org/learn/ai-prompts-for-seo-growth" type="Kurs" typeClass="type-course" title="SEO Büyümesi İçin AI Prompt'ları Kursu" author="Coursera" />
                <ResourceItem href="https://searchengineland.com/prompt-research-seo-geo-strategy-471399" type="Blog" typeClass="type-blog" title="Prompt Araştırması: SEO ve GEO Stratejisinin Yeni Katmanı" author="Search Engine Land" />
              </Subsection>
              <Subsection title="AI Content Riskleri ve Dikkat Noktaları">
                <ResourceItem href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" type="Rehber" typeClass="type-guide" title="Yararlı, Kullanıcı Odaklı İçerik Oluşturma" author="Google" />
                <ResourceItem href="https://backlinko.com/chatgpt-for-seo" type="Rehber" typeClass="type-guide" title="SEO İçin ChatGPT: Kapsamlı Rehber, İpuçları ve Prompt'lar" author="Backlinko" />
                <ResourceItem href="https://blog.hubspot.com/marketing/ai-seo" type="Rehber" typeClass="type-guide" title="En İyi 14 AI SEO Aracı ve Kullanım Rehberi" author="HubSpot" />
                <ResourceItem href="https://backlinko.com/ai-seo-tools" type="Rehber" typeClass="type-guide" title="Kullandığımız 8 AI SEO Aracı" author="Backlinko" />
              </Subsection>
              <Subsection title="SEO Otomasyon İş Akışları">
                <ResourceItem href="https://www.semrush.com/blog/how-to-optimize-content-for-ai-search-engines/" type="Rehber" typeClass="type-guide" title="AI Arama Motorları İçin İçerik Optimizasyonu" author="Semrush" />
                <ResourceItem href="https://blog.hubspot.com/marketing/ai-search-strategy" type="Rehber" typeClass="type-guide" title="Modern Pazarlama Ekipleri İçin AI Arama Stratejisi" author="HubSpot" />
                <ResourceItem href="https://www.semrush.com/blog/top-ai-powered-semrush-features/" type="Blog" typeClass="type-blog" title="AI Destekli Semrush Özellikleri" author="Semrush" />
              </Subsection>
            </AccordionSection>

            {/* ===== 33. GEO ===== */}
            <AccordionSection
              title="GEO - Üretici Yapay Zeka Optimizasyonu"
              desc="AI arama motorlarında görünür olun: Google AI, ChatGPT, Perplexity ve daha fazlası."
            >
              <Subsection title="GEO Temelleri ve Stratejiler">
                <ResourceItem href="https://backlinko.com/generative-engine-optimization-geo" type="Rehber" typeClass="type-guide" title="Üretici Motor Optimizasyonu: AI Aramada Nasıl Kazanılır" author="Backlinko" />
                <ResourceItem href="https://neilpatel.com/blog/generative-engine-optimization-geo/" type="Rehber" typeClass="type-guide" title="Üretici Motor Optimizasyonu (GEO) Nedir?" author="Neil Patel" />
                <ResourceItem href="https://neilpatel.com/blog/geo-vs-seo/" type="Blog" typeClass="type-blog" title="GEO vs SEO: Farkları Anlama" author="Neil Patel" />
                <ResourceItem href="https://arxiv.org/abs/2311.09735" type="Rehber" typeClass="type-guide" title="GEO: Üretici Motor Optimizasyonu (Akademik Makale)" author="Princeton / IIT Delhi" />
              </Subsection>
              <Subsection title="Çoklu Platform AI Görünürlüğü">
                <ResourceItem href="https://www.semrush.com/blog/search-everywhere-optimization/" type="Rehber" typeClass="type-guide" title="Her Yerde Arama Optimizasyonu Stratejisi" author="Semrush" />
                <ResourceItem href="https://backlinko.com/search-everywhere-optimization" type="Rehber" typeClass="type-guide" title="Her Yerde Arama Optimizasyonu Rehberi + Kontrol Listesi" author="Backlinko" />
                <ResourceItem href="https://www.hubspot.com/aeo-grader" type="Araç" typeClass="type-tool" title="AEO Değerlendirici - Yanıt Motoru Optimizasyon Aracı" author="HubSpot" />
                <ResourceItem href="https://searchengineland.com/schema-markup-ai-search-no-hype-472339" type="Blog" typeClass="type-blog" title="Schema Markup AI Aramaya Nasıl Uyar" author="Search Engine Land" />
                <ResourceItem href="https://www.davidcosgrove.com/llm-citability-guide/" type="Rehber" typeClass="type-guide" title="LLM Alıntılanabilirlik: İçeriğinizin AI Tarafından Alıntılanması" author="David Cosgrove" />
                <ResourceItem href="https://thedigitalbloom.com/learn/2025-ai-citation-llm-visibility-report/" type="Rehber" typeClass="type-guide" title="AI Görünürlük Raporu: LLM'ler Kaynakları Nasıl Seçer" author="The Digital Bloom" />
              </Subsection>
            </AccordionSection>

            {/* ===== Alternatif Arama Motorları ve Platform SEO ===== */}
            <AccordionSection
              title="Alternatif Arama Motorları ve Platform SEO"
              desc="Google dışındaki arama motorları ve platformlarda görünürlük kazanın."
            >
              <Subsection title="Bing SEO">
                <ResourceItem href="https://searchengineland.com/guide/bing" type="Rehber" typeClass="type-guide" title="Bing SEO Rehberi" author="Search Engine Land" />
                <ResourceItem href="https://neilpatel.com/blog/a-simple-guide-to-bing-seo/" type="Rehber" typeClass="type-guide" title="Bing SEO Kapsamlı Rehberi" author="Neil Patel" />
                <ResourceItem href="https://www.semrush.com/blog/bing-search/" type="Rehber" typeClass="type-guide" title="Bing Arama Rehberi: Tarihçe, AI Özellikleri ve SEO İpuçları" author="Semrush" />
                <ResourceItem href="https://www.searchenginejournal.com/seo-bing-vs-google/223363/" type="Blog" typeClass="type-blog" title="Bing SEO'nun Google'dan 5 Büyük Farkı" author="Search Engine Journal" />
              </Subsection>
              <Subsection title="Reddit SEO">
                <ResourceItem href="https://www.semrush.com/blog/reddit-seo/" type="Rehber" typeClass="type-guide" title="Reddit SEO: Arama Motoru ve AI Görünürlüğü İçin 5 Adım" author="Semrush" />
                <ResourceItem href="https://searchengineland.com/reddit-seo-453406" type="Rehber" typeClass="type-guide" title="Reddit SEO: Bilmeniz Gereken Her Şey" author="Search Engine Land" />
                <ResourceItem href="https://neilpatel.com/blog/reddit-seo/" type="Rehber" typeClass="type-guide" title="SEO İçin Reddit Nasıl Kullanılır" author="Neil Patel" />
                <ResourceItem href="https://ahrefs.com/blog/reddit-keyword-research/" type="Blog" typeClass="type-blog" title="Reddit Anahtar Kelime Araştırması: Rakiplerin Kaçırdığı Kelimeleri Bulma" author="Ahrefs" />
              </Subsection>
              <Subsection title="TikTok SEO">
                <ResourceItem href="https://searchengineland.com/tiktok-seo-the-ultimate-guide-439795" type="Rehber" typeClass="type-guide" title="TikTok SEO: Kapsamlı Rehber" author="Search Engine Land" />
                <ResourceItem href="https://backlinko.com/tiktok-seo" type="Rehber" typeClass="type-guide" title="TikTok SEO: Arama ve For You Sayfası İçin Optimizasyon" author="Backlinko" />
                <ResourceItem href="https://www.semrush.com/blog/tiktok-seo/" type="Rehber" typeClass="type-guide" title="TikTok SEO: Profil Görünürlüğünü Artırma Rehberi" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/tiktok-seo/" type="Rehber" typeClass="type-guide" title="TikTok SEO Nasıl Yapılır: 4 Haftada Başlangıçtan Uzmanlığa" author="Ahrefs" />
              </Subsection>
              <Subsection title="Amazon SEO">
                <ResourceItem href="https://www.searchenginejournal.com/amazon-seo-sellers-guide/436454/" type="Rehber" typeClass="type-guide" title="Amazon SEO: Satıcılar İçin Kapsamlı Rehber" author="Search Engine Journal" />
                <ResourceItem href="https://www.semrush.com/blog/amazon-seo/" type="Rehber" typeClass="type-guide" title="Amazon SEO: Ürün Listelerini Optimize Etme Stratejileri" author="Semrush" />
                <ResourceItem href="https://searchengineland.com/amazon-seo-guide-449563" type="Rehber" typeClass="type-guide" title="Amazon SEO: Kapsamlı Rehber" author="Search Engine Land" />
                <ResourceItem href="https://neilpatel.com/blog/amazon-seo/" type="Rehber" typeClass="type-guide" title="Amazon SEO: İlk 5'e Sıralama İçin 7 Adımlı Çerçeve" author="Neil Patel" />
              </Subsection>
              <Subsection title="eBay SEO">
                <ResourceItem href="https://neilpatel.com/blog/ebay-seo/" type="Rehber" typeClass="type-guide" title="Satışları Artırmak İçin 10 eBay SEO İpucu" author="Neil Patel" />
                <ResourceItem href="https://www.semrush.com/blog/quick-tips-ebay-amazon-and-craigslist-seo-for-your-products/" type="Blog" typeClass="type-blog" title="eBay, Amazon ve Craigslist SEO İpuçları" author="Semrush" />
              </Subsection>
              <Subsection title="Instagram SEO">
                <ResourceItem href="https://www.semrush.com/blog/instagram-seo/" type="Rehber" typeClass="type-guide" title="Instagram SEO: Nedir, Nasıl Yapılır ve En İyi Uygulamalar" author="Semrush" />
                <ResourceItem href="https://blog.hubspot.com/marketing/instagram-seo" type="Rehber" typeClass="type-guide" title="Instagram SEO: Erişiminizi Artırmanın 10 Tekniği" author="HubSpot" />
                <ResourceItem href="https://neilpatel.com/blog/instagram-seo/" type="Rehber" typeClass="type-guide" title="Instagram SEO: Görünürlüğünüzü Artırma İpuçları" author="Neil Patel" />
              </Subsection>
              <Subsection title="Quora SEO">
                <ResourceItem href="https://neilpatel.com/blog/quora-seo/" type="Rehber" typeClass="type-guide" title="SEO İçin Quora Nasıl Kullanılır: Trafik ve Otorite Kazanma" author="Neil Patel" />
                <ResourceItem href="https://searchengineland.com/use-quora-seo-research-432036" type="Rehber" typeClass="type-guide" title="SEO ve Araştırma İçin Quora Nasıl Kullanılır" author="Search Engine Land" />
                <ResourceItem href="https://ahrefs.com/blog/quora-marketing/" type="Blog" typeClass="type-blog" title="Quora Pazarlama: ~1 Milyon Görüntüleme Nasıl Ürettik" author="Ahrefs" />
              </Subsection>
            </AccordionSection>

            {/* ===== SEO Otomasyonu ve Programlama ===== */}
            <AccordionSection
              title="SEO Otomasyonu ve Programlama"
              desc="Python, SQL, RegEx ve diğer araçlarla SEO süreçlerinizi otomatikleştirin."
            >
              <Subsection title="Python ve Programlama ile SEO">
                <ResourceItem href="https://ahrefs.com/blog/python-for-seo/" type="Rehber" typeClass="type-guide" title="SEO İçin Python: Yeni Başlayanlar İçin Açıklama" author="Ahrefs" />
                <ResourceItem href="https://searchengineland.com/python-scripts-automating-seo-tasks-395527" type="Blog" typeClass="type-blog" title="SEO Görevlerini Otomatikleştirmek İçin 5 Python Script" author="Search Engine Land" />
                <ResourceItem href="https://searchengineland.com/regex-seo-ai-data-analysis-463933" type="Rehber" typeClass="type-guide" title="SEO İçin RegEx: AI ve Veri Analizini Güçlendiren Basit Dil" author="Search Engine Land" />
              </Subsection>
              <Subsection title="SQL, BigQuery ve Makine Öğrenimi">
                <ResourceItem href="https://www.searchenginejournal.com/google-search-console-data-bigquery-enhanced-analytics/496535/" type="Rehber" typeClass="type-guide" title="Google Search Console Verileri ve BigQuery ile Gelişmiş Analitik" author="Search Engine Journal" />
                <ResourceItem href="https://www.searchenginejournal.com/machine-learning-practical-introduction-seo-professionals/366304/" type="Rehber" typeClass="type-guide" title="SEO Profesyonelleri İçin Makine Öğrenimine Pratik Giriş" author="Search Engine Journal" />
              </Subsection>
            </AccordionSection>

            {/* ===== CMS'e Özel SEO Uygulamaları ===== */}
            <AccordionSection
              title="CMS'e Özel SEO Uygulamaları"
              desc="WordPress, Shopify, Webflow ve diğer platformlarda SEO'yu doğru şekilde uygulayın."
            >
              <Subsection title="WordPress SEO">
                <ResourceItem href="https://yoast.com/wordpress-seo/" type="Rehber" typeClass="type-guide" title="WordPress SEO: Kesin Rehber" author="Yoast" />
                <ResourceItem href="https://www.wpbeginner.com/wordpress-seo/" type="Rehber" typeClass="type-guide" title="Yeni Başlayanlar İçin WordPress SEO Rehberi (Adım Adım)" author="WPBeginner" />
                <ResourceItem href="https://ahrefs.com/blog/wordpress-seo/" type="Rehber" typeClass="type-guide" title="WordPress SEO: 20 İpucu ve En İyi Uygulama" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/wordpress-seo/" type="Rehber" typeClass="type-guide" title="WordPress SEO: Kapsamlı Rehber" author="Semrush" />
                <ResourceItem href="https://www.wpbeginner.com/showcase/9-best-wordpress-seo-plugins-and-tools-that-you-should-use/" type="Rehber" typeClass="type-guide" title="En İyi 15 WordPress SEO Eklentisi ve Aracı" author="WPBeginner" />
                <ResourceItem href="https://backlinko.com/best-seo-plugin-for-wordpress" type="Rehber" typeClass="type-guide" title="WordPress İçin En İyi 5 SEO Eklentisi (Test Edilmiş)" author="Backlinko" />
                <ResourceItem href="https://www.wpbeginner.com/wordpress-performance-speed/" type="Rehber" typeClass="type-guide" title="WordPress Hız ve Performans Artırma Rehberi" author="WPBeginner" />
                <ResourceItem href="https://www.wpbeginner.com/plugins/best-wordpress-caching-plugins/" type="Rehber" typeClass="type-guide" title="En İyi 5 WordPress Önbellekleme Eklentisi" author="WPBeginner" />
              </Subsection>
              <Subsection title="Shopify SEO">
                <ResourceItem href="https://www.shopify.com/blog/shopify-seo" type="Rehber" typeClass="type-guide" title="Shopify SEO: Mağaza Trafiğinizi Nasıl Artırırsınız" author="Shopify" />
                <ResourceItem href="https://backlinko.com/shopify-seo" type="Rehber" typeClass="type-guide" title="Shopify SEO: Yeni Başlayanlar İçin Kapsamlı Rehber" author="Backlinko" />
                <ResourceItem href="https://ahrefs.com/blog/shopify-seo/" type="Rehber" typeClass="type-guide" title="Shopify SEO: Yeni Başlayanlar İçin Basit Rehber" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/shopify-seo/" type="Rehber" typeClass="type-guide" title="Shopify SEO: Başlangıç Optimizasyon Rehberi" author="Semrush" />
                <ResourceItem href="https://www.searchenginejournal.com/shopify-seo-checklist/433674/" type="Rehber" typeClass="type-guide" title="Sitenizi Sıralamak İçin Shopify SEO Kontrol Listesi" author="Search Engine Journal" />
                <ResourceItem href="https://help.shopify.com/en/manual/promoting-marketing/seo/editing-robots-txt" type="Rehber" typeClass="type-guide" title="Shopify robots.txt.liquid Düzenleme" author="Shopify" />
                <ResourceItem href="https://www.shopify.com/blog/ecommerce-product-page-seo" type="Blog" typeClass="type-blog" title="E-ticaret Ürün Sayfası SEO'sunu İyileştirme" author="Shopify" />
              </Subsection>
              <Subsection title="Diğer CMS Platformları">
                <ResourceItem href="https://www.semrush.com/blog/webflow-seo/" type="Rehber" typeClass="type-guide" title="Webflow SEO: Arama Performansını Artırmanın 8 Yolu" author="Semrush" />
                <ResourceItem href="https://ahrefs.com/blog/wix-seo/" type="Rehber" typeClass="type-guide" title="Wix SEO Hakkında Bilmeniz Gereken Her Şey" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/best-cms-for-seo/" type="Rehber" typeClass="type-guide" title="SEO İçin En İyi 9 İçerik Yönetim Sistemi" author="Semrush" />
              </Subsection>
            </AccordionSection>

            {/* ===== SEO Araçları ===== */}
            <AccordionSection
              title="SEO Araçları"
              desc="SEO çalışmalarınız için kullanabileceğiniz araçları kategorilere göre keşfedin."
            >
              <Subsection title="Google SEO Araçları">
                <ResourceItem href="https://search.google.com/search-console" type="Araç" typeClass="type-tool" title="Google Search Console" author="Google" />
                <ResourceItem href="https://analytics.google.com/" type="Araç" typeClass="type-tool" title="Google Analytics 4" author="Google" />
                <ResourceItem href="https://pagespeed.web.dev/" type="Araç" typeClass="type-tool" title="Google PageSpeed Insights" author="Google" />
                <ResourceItem href="https://trends.google.com/" type="Araç" typeClass="type-tool" title="Google Trends" author="Google" />
                <ResourceItem href="https://developer.chrome.com/docs/lighthouse/" type="Araç" typeClass="type-tool" title="Google Lighthouse" author="Google" />
              </Subsection>
              <Subsection title="Sıralama Takip (Rank Tracking) Araçları">
                <ResourceItem href="https://ahrefs.com/blog/best-rank-tracker/" type="Rehber" typeClass="type-guide" title="En İyi Sıralama Takip Araçları: Doğru Olanı Seçme" author="Ahrefs" />
                <ResourceItem href="https://ahrefs.com/blog/keyword-tracking-tools/" type="Rehber" typeClass="type-guide" title="Anahtar Kelime Takip Araçları (Her Bütçeye Uygun)" author="Ahrefs" />
                <ResourceItem href="https://www.semrush.com/blog/what-is-a-rank-tracker/" type="Rehber" typeClass="type-guide" title="Sıralama Takip Aracı Nedir?" author="Semrush" />
                <ResourceItem href="https://www.semrush.com/blog/how-to-use-a-rank-tracker/" type="Rehber" typeClass="type-guide" title="Sıralama Takip Aracı Nasıl Kullanılır" author="Semrush" />
              </Subsection>
              <Subsection title="Teknik SEO Araçları">
                <ResourceItem href="https://www.screamingfrog.co.uk/seo-spider/" type="Araç" typeClass="type-tool" title="Screaming Frog SEO Spider" author="Screaming Frog" />
                <ResourceItem href="https://ahrefs.com/webmaster-tools" type="Araç" typeClass="type-tool" title="Ahrefs Web Yöneticisi Araçları" author="Ahrefs" />
                <ResourceItem href="https://technicalseo.com/tools/schema-markup-generator/" type="Araç" typeClass="type-tool" title="Schema Markup Oluşturucu" author="TechnicalSEO.com" />
                <ResourceItem href="https://gtmetrix.com/" type="Araç" typeClass="type-tool" title="GTmetrix" author="GTmetrix" />
                <ResourceItem href="https://www.semrush.com/blog/seo-audit-tools/" type="Rehber" typeClass="type-guide" title="En İyi SEO Denetim Araçları" author="Semrush" />
              </Subsection>
              <Subsection title="Genel SEO Araç Rehberleri">
                <ResourceItem href="https://backlinko.com/seo-tools" type="Rehber" typeClass="type-guide" title="177+ En İyi SEO Aracı: Tam Liste" author="Backlinko" />
                <ResourceItem href="https://ahrefs.com/blog/free-seo-tools/" type="Rehber" typeClass="type-guide" title="34 Ücretsiz SEO Aracı" author="Ahrefs" />
                <ResourceItem href="https://ahrefs.com/blog/google-seo-tools-explained/" type="Rehber" typeClass="type-guide" title="Google'ın Ücretsiz SEO Araçları Açıklaması" author="Ahrefs" />
              </Subsection>
              <Subsection title="Anahtar Kelime Araştırma Araçları">
                <ResourceItem href="https://neilpatel.com/ubersuggest/" type="Araç" typeClass="type-tool" title="Ubersuggest" author="Neil Patel" />
                <ResourceItem href="https://answerthepublic.com/" type="Araç" typeClass="type-tool" title="AnswerThePublic" author="AnswerThePublic" />
                <ResourceItem href="https://surferseo.com/keyword-surfer-extension/" type="Eklenti" typeClass="type-extension" title="Keyword Surfer" author="Surfer SEO" />
                <ResourceItem href="https://alsoasked.com/" type="Araç" typeClass="type-tool" title="Also Asked" author="Also Asked" />
              </Subsection>
              <Subsection title="Chrome SEO Eklentileri">
                <ResourceItem href="https://ahrefs.com/seo-toolbar" type="Eklenti" typeClass="type-extension" title="Ahrefs SEO Toolbar" author="Ahrefs" />
                <ResourceItem href="https://moz.com/products/pro/seo-toolbar" type="Eklenti" typeClass="type-extension" title="MozBar" author="Moz" />
                <ResourceItem href="https://www.seoquake.com/" type="Eklenti" typeClass="type-extension" title="SEOquake" author="Semrush" />
                <ResourceItem href="https://detailed.com/extension/" type="Eklenti" typeClass="type-extension" title="Detailed SEO Extension" author="Detailed" />
                <ResourceItem href="https://www.wappalyzer.com/" type="Eklenti" typeClass="type-extension" title="Wappalyzer" author="Wappalyzer" />
              </Subsection>
            </AccordionSection>

            {/* ===== 35. SEO Kariyer ve Gelişim ===== */}
            <AccordionSection
              title="SEO Kariyer ve Gelişim"
              desc="SEO kariyer yolunuzu planlayın, freelance çalışmayı öğrenin ve case study hazırlayın."
            >
              <Subsection title="SEO Kariyer Yolu">
                <ResourceItem href="https://searchengineland.com/seo-career-path-388834" type="Rehber" typeClass="type-guide" title="SEO Kariyer Yolu: Nasıl Görünür ve Nasıl İlerlenir" author="Search Engine Land" />
                <ResourceItem href="https://www.searchenginejournal.com/navigating-seo-career-landscape-degrees-myths-realities/506388/" type="Rehber" typeClass="type-guide" title="SEO Kariyer Manzarasında Yol Almak" author="Search Engine Journal" />
                <ResourceItem href="https://brainstation.io/career-guides/how-to-become-an-seo-specialist/" type="Rehber" typeClass="type-guide" title="SEO Uzmanı Nasıl Olunur" author="BrainStation" />
                <ResourceItem href="https://www.indeed.com/career-advice/finding-a-job/how-to-become-seo-expert" type="Rehber" typeClass="type-guide" title="SEO Uzmanı Nasıl Olunur: Adımlar, Beceriler ve Maaş" author="Indeed" />
                <ResourceItem href="https://trafficthinktank.com/how-to-get-a-job-in-seo/" type="Rehber" typeClass="type-guide" title="SEO'da İş Bulma: İçeriden Rehber" author="Traffic Think Tank" />
              </Subsection>
              <Subsection title="Freelance SEO">
                <ResourceItem href="https://www.searchenginejournal.com/becoming-seo-consultant/443213/" type="Rehber" typeClass="type-guide" title="SEO Danışmanı Olma: Beceriler ve Kariyer Görünümü" author="Search Engine Journal" />
                <ResourceItem href="https://www.searchenginejournal.com/how-to-become-an-independent-seo-consultant-and-succeed/508847/" type="Rehber" typeClass="type-guide" title="Bağımsız SEO Danışmanı Olma ve Başarılı Olma" author="Search Engine Journal" />
                <ResourceItem href="https://searchengineland.com/how-to-become-an-seo-freelancer-without-underpricing-or-burning-out-470323" type="Blog" typeClass="type-blog" title="SEO Freelancer Olma: Düşük Fiyatlandırma ve Tükenmişlik Olmadan" author="Search Engine Land" />
                <ResourceItem href="https://ahrefs.com/blog/seo-pricing/" type="Rehber" typeClass="type-guide" title="SEO Fiyatlandırması: SEO Ne Kadar Tutar?" author="Ahrefs" />
              </Subsection>
              <Subsection title="SEO Case Study Hazırlama">
                <ResourceItem href="https://www.semrush.com/blog/how-to-write-a-case-study/" type="Rehber" typeClass="type-guide" title="Vaka Çalışması Nasıl Yazılır: Şablon Dahil Rehber" author="Semrush" />
                <ResourceItem href="https://www.robbierichards.com/seo/case-study/" type="Blog" typeClass="type-blog" title="SEO Vaka Çalışması: 150K Ziyaret Üreten 6 Adımlık Süreç" author="Robbie Richards" />
                <ResourceItem href="https://ignitevisibility.com/create-mini-seo-case-studies/" type="Rehber" typeClass="type-guide" title="Kendi Mini SEO Vaka Çalışmanızı Oluşturma" author="Ignite Visibility" />
              </Subsection>
            </AccordionSection>

            {/* ===== 36. SEO Güncel Kalma ===== */}
            <AccordionSection
              title="SEO Güncel Kalma"
              desc="SEO dünyasındaki değişiklikleri takip etmek için haber, podcast ve newsletter kaynakları."
            >
              <Subsection title="SEO Haber ve Blog Kaynakları">
                <ResourceItem href="https://developers.google.com/search/blog" type="Blog" typeClass="type-blog" title="Google Arama Merkezi Blogu" author="Google" />
                <ResourceItem href="https://www.searchenginejournal.com/" type="Blog" typeClass="type-blog" title="Search Engine Journal" author="Search Engine Journal" />
                <ResourceItem href="https://searchengineland.com/" type="Blog" typeClass="type-blog" title="Search Engine Land" author="Search Engine Land" />
                <ResourceItem href="https://www.seroundtable.com/" type="Blog" typeClass="type-blog" title="Search Engine Roundtable" author="Barry Schwartz" />
                <ResourceItem href="https://moz.com/blog" type="Blog" typeClass="type-blog" title="Moz Blog" author="Moz" />
                <ResourceItem href="https://ahrefs.com/blog/" type="Blog" typeClass="type-blog" title="Ahrefs Blog" author="Ahrefs" />
              </Subsection>
              <Subsection title="SEO Podcast'leri">
                <ResourceItem href="https://developers.google.com/search/podcasts/search-off-the-record" type="Podcast" typeClass="type-podcast" title="Search Off the Record" author="Google" />
                <ResourceItem href="https://ahrefs.com/podcast" type="Podcast" typeClass="type-podcast" title="Ahrefs Podcast" author="Ahrefs" />
                <ResourceItem href="https://www.authorityhacker.com/podcast/" type="Podcast" typeClass="type-podcast" title="Authority Hacker Podcast" author="Authority Hacker" />
              </Subsection>
              <Subsection title="SEO Newsletter'ları">
                <ResourceItem href="https://seofomo.co/" type="Bülten" typeClass="type-newsletter" title="SEOFOMO" author="Aleyda Solis" />
                <ResourceItem href="https://seomba.com/" type="Bülten" typeClass="type-newsletter" title="The SEO MBA" author="Tom Critchlow" />
                <ResourceItem href="https://www.searchenginejournal.com/newsletter/" type="Bülten" typeClass="type-newsletter" title="Search Engine Journal Bülteni" author="Search Engine Journal" />
              </Subsection>
              <Subsection title="SEO Etkinlikleri ve Konferansları">
                <ResourceItem href="https://developers.google.com/search/events" type="Etkinlik" typeClass="type-event" title="Google Search Central Live" author="Google" />
                <ResourceItem href="https://www.brightonseo.com/" type="Etkinlik" typeClass="type-event" title="BrightonSEO" author="BrightonSEO" />
                <ResourceItem href="https://moz.com/mozcon" type="Etkinlik" typeClass="type-event" title="MozCon" author="Moz" />
              </Subsection>
            </AccordionSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading">SEO Yolculuğunuzda Yardıma mı İhtiyacınız Var?</h2>
            <p>Profesyonel SEO danışmanlığı ve strateji desteği için bizimle iletişime geçin.</p>
            <a
              href="https://businessup.com.tr/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn btn-primary btn-large"
              aria-label="BusinessUp web sitesini ziyaret et (yeni sekmede açılır)"
            >
              BusinessUp&apos;ı Ziyaret Edin
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
