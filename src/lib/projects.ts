import type { Localized } from '@/lib/i18n';

/**
 * The speaking, organising and podcast work behind the industry-projects
 * pages, in both languages.
 *
 * Both pages used to carry this as hand-written markup, copied between them —
 * which is how the English side ended up with a clock icon on the podcast and
 * a people icon on "Education sector" where the Turkish side had a microphone
 * and a calendar. One source, one set of icons.
 *
 * A card may stand for more than one event (the Ahi Evran entry covers two
 * summits), and a card with no confirmed date carries no event at all: an
 * Event without a `startDate` is a claim the site cannot back up, so it is not
 * made. The card still renders either way.
 */

export type ProjectIcon = 'people' | 'pin' | 'clock' | 'calendar' | 'mic';

export type EventData = {
  slug: string;
  type: 'BusinessEvent' | 'EducationEvent';
  name: Localized;
  description: Localized;
  /** ISO 8601 date. */
  startDate: string;
  endDate?: string;
  organizer?: Localized;
  locationName: Localized;
  addressLocality: Localized;
  maximumAttendeeCapacity?: number;
};

export type IndustryProject = {
  slug: string;
  featured?: boolean;
  badge: Localized;
  title: Localized;
  body: Localized[];
  meta: Array<{ icon: ProjectIcon; label: Localized }>;
  tags: Localized[];
  link?: { href: string; label: Localized; description: Localized };
  events?: EventData[];
};

const KIRSEHIR = { tr: 'Kırşehir', en: 'Kırşehir' };
const AHI_EVRAN = { tr: 'Kırşehir Ahi Evran Üniversitesi', en: 'Kırşehir Ahi Evran University' };

export const industryProjects: IndustryProject[] = [
  {
    slug: 'ahi-evran-zirveleri',
    featured: true,
    badge: { tr: 'Zirve Organizasyonu', en: 'Summit Organizer' },
    title: {
      tr: 'Ahi Evran Üniversitesi Dijital Pazarlama Zirveleri',
      en: 'Ahi Evran University Digital Marketing Summits',
    },
    body: [
      {
        tr: 'Ahi Evran Üniversitesi ile birlikte 2 adet dijital pazarlama zirvesi düzenledim. Zirvelerde sektörün önde gelen isimleri konuşmacı olarak yer aldı ve 800’den fazla katılımcıya ulaştık.',
        en: 'I organized two digital marketing summits with Ahi Evran University. Leading professionals from the industry joined as speakers and the events reached more than 800 participants.',
      },
      {
        tr: 'Zirveler kapsamında SEO, sosyal medya pazarlama, içerik stratejisi, e-ticaret ve dijital reklamcılık konularında kapsamlı oturumlar gerçekleştirildi.',
        en: 'The summits ran in-depth sessions on SEO, social media marketing, content strategy, e-commerce and digital advertising.',
      },
    ],
    meta: [
      { icon: 'people', label: { tr: '800+ Katılımcı', en: '800+ participants' } },
      { icon: 'pin', label: KIRSEHIR },
    ],
    tags: [
      { tr: 'Zirve', en: 'Summit' },
      { tr: 'Dijital Pazarlama', en: 'Digital Marketing' },
      { tr: 'Üniversite', en: 'University' },
    ],
    events: [
      {
        slug: 'ahi-evran-dijital-pazarlama-zirvesi-1',
        type: 'BusinessEvent',
        name: {
          tr: 'Ahiliğin İzinde Dijital Pazarlama Zirvesi',
          en: 'Ahiliğin İzinde Digital Marketing Summit',
        },
        description: {
          tr: 'Kırşehir Ahi Evran Üniversitesi Yönetim Bilişim Sistemleri Topluluğu ile düzenlenen ilk dijital pazarlama zirvesi. SEO, sosyal medya pazarlama, içerik stratejisi ve e-ticaret oturumları.',
          en: 'The first digital marketing summit organised with the Management Information Systems Society at Kırşehir Ahi Evran University, covering SEO, social media marketing, content strategy and e-commerce.',
        },
        startDate: '2024-02-26',
        organizer: AHI_EVRAN,
        locationName: AHI_EVRAN,
        addressLocality: KIRSEHIR,
      },
      {
        slug: 'ahi-evran-dijital-pazarlama-zirvesi-2',
        type: 'BusinessEvent',
        name: {
          tr: 'Ahiliğin İzinde 2. E-Ticaret ve Dijital Pazarlama Zirvesi',
          en: 'Ahiliğin İzinde 2nd E-commerce and Digital Marketing Summit',
        },
        description: {
          tr: 'İki zirvede toplam 800’den fazla katılımcıya ulaşan serinin ikincisi. Sektörün önde gelen isimleri konuşmacı olarak yer aldı.',
          en: 'The second in a series that reached more than 800 attendees in total, with speakers from across the industry.',
        },
        startDate: '2024-10-08',
        organizer: AHI_EVRAN,
        locationName: AHI_EVRAN,
        addressLocality: KIRSEHIR,
        maximumAttendeeCapacity: 800,
      },
    ],
  },
  {
    slug: 'ucretsiz-eticaret-egitimi',
    badge: { tr: 'Eğitim Programı', en: 'Education Programme' },
    title: { tr: 'Ücretsiz E-Ticaret Eğitimi', en: 'Free E-commerce Training' },
    body: [
      {
        tr: 'Gençlere yönelik kapsamlı ve tamamen ücretsiz e-ticaret eğitim programı organizasyonu. E-ticaret’e başlamak isteyen gençler için adım adım rehberlik ve mentörlük sağladık.',
        en: 'A comprehensive, completely free e-commerce training programme for young people. We provided step-by-step guidance and mentoring for anyone wanting to start in e-commerce.',
      },
      {
        tr: 'Eğitim programı kapsamında e-ticaret temelleri, ürün seçimi, fiyatlandırma stratejileri, pazaryeri yönetimi ve SEO konuları işlendi.',
        en: 'The programme covered e-commerce fundamentals, product selection, pricing strategy, marketplace management and SEO.',
      },
    ],
    meta: [{ icon: 'clock', label: { tr: '65+ Saat Eğitim', en: '65+ training hours' } }],
    tags: [
      { tr: 'E-Ticaret', en: 'E-commerce' },
      { tr: 'Ücretsiz Eğitim', en: 'Free Training' },
      { tr: 'Mentörlük', en: 'Mentoring' },
    ],
    events: [
      {
        slug: 'ahilik-temelli-eticaret-egitimi-seo',
        type: 'EducationEvent',
        name: {
          tr: 'Ahilik Temelli E-Ticaret ve Dijital Pazarlama Eğitimi — SEO Oturumu',
          en: 'Ahilik-Based E-commerce and Digital Marketing Training — SEO Session',
        },
        description: {
          tr: 'Ücretsiz e-ticaret eğitim programı kapsamında verilen SEO eğitimi oturumu.',
          en: 'The SEO training session given as part of the free e-commerce training programme.',
        },
        startDate: '2024-07-01',
        organizer: AHI_EVRAN,
        locationName: AHI_EVRAN,
        addressLocality: KIRSEHIR,
      },
    ],
  },
  {
    slug: 'uskudar-universitesi',
    badge: { tr: 'Konuşmacı', en: 'Speaker' },
    title: { tr: 'Üsküdar Üniversitesi', en: 'Üsküdar University' },
    body: [
      {
        tr: 'Üsküdar Üniversitesi’nde SEO ve dijital pazarlama alanında konuşmacı olarak yer aldım. Öğrencilere e-ticaret SEO stratejileri, teknik SEO temelleri ve kariyer tavsiyeleri hakkında bilgiler aktardım.',
        en: 'I spoke at Üsküdar University on SEO and digital marketing, sharing e-commerce SEO strategy, technical SEO foundations and career guidance with students.',
      },
    ],
    meta: [
      { icon: 'pin', label: { tr: 'İstanbul', en: 'Istanbul' } },
      { icon: 'calendar', label: { tr: 'Eğitim Sektörü', en: 'Education sector' } },
    ],
    tags: [
      { tr: 'Eğitim', en: 'Education' },
      { tr: 'SEO', en: 'SEO' },
      { tr: 'Konuşmacı', en: 'Speaker' },
    ],
    events: [
      {
        slug: 'uskudar-universitesi-seo-konusmasi',
        type: 'EducationEvent',
        name: {
          tr: 'Üsküdar Üniversitesi — SEO ve Dijital Pazarlama Konuşması',
          en: 'Üsküdar University — SEO and Digital Marketing Talk',
        },
        description: {
          tr: 'Üsküdar Üniversitesi öğrencilerine SEO ve dijital pazarlama alanında konuşmacı olarak katılım.',
          en: 'A guest talk for Üsküdar University students on SEO and digital marketing.',
        },
        startDate: '2025-12-17',
        organizer: { tr: 'Üsküdar Üniversitesi', en: 'Üsküdar University' },
        locationName: { tr: 'Üsküdar Üniversitesi', en: 'Üsküdar University' },
        addressLocality: { tr: 'İstanbul', en: 'Istanbul' },
      },
    ],
  },
  {
    slug: 'turkiye-psikologlar-dernegi',
    badge: { tr: 'Konuşmacı', en: 'Speaker' },
    title: { tr: 'Türkiye Psikologlar Derneği', en: 'Turkish Psychological Association' },
    body: [
      {
        tr: 'Türkiye Psikologlar Derneği etkinliğinde dijital görünürlük ve SEO konularında konuşmacı olarak katıldım. Profesyonellerin online varlıklarını güçlendirmeleri için stratejiler paylaştım.',
        en: 'I joined a Turkish Psychological Association event as a speaker on digital visibility and SEO, sharing strategies professionals can use to strengthen their online presence.',
      },
    ],
    meta: [
      { icon: 'people', label: { tr: 'Dernek Etkinliği', en: 'Professional association event' } },
    ],
    tags: [
      { tr: 'Dernek', en: 'Association' },
      { tr: 'Dijital Görünürlük', en: 'Digital Visibility' },
      { tr: 'Konuşmacı', en: 'Speaker' },
    ],
    events: [
      {
        slug: 'turkiye-psikologlar-dernegi-dijital-gorunurluk',
        type: 'EducationEvent',
        name: {
          tr: 'Türkiye Psikologlar Derneği — Dijital Görünürlük ve SEO',
          en: 'Turkish Psychological Association — Digital Visibility and SEO',
        },
        description: {
          tr: 'Türkiye Psikologlar Derneği etkinliğinde dijital görünürlük ve SEO üzerine konuşmacı olarak katılım.',
          en: 'A guest talk on digital visibility and SEO at a Turkish Psychological Association event.',
        },
        startDate: '2026-01-26',
        endDate: '2026-01-28',
        organizer: { tr: 'Türkiye Psikologlar Derneği', en: 'Turkish Psychological Association' },
        locationName: { tr: 'Türkiye Psikologlar Derneği', en: 'Turkish Psychological Association' },
        addressLocality: { tr: 'İstanbul', en: 'Istanbul' },
      },
    ],
  },
  {
    slug: 'sepetteki-seo',
    featured: true,
    badge: { tr: 'Podcast', en: 'Podcast' },
    title: { tr: 'Sepetteki SEO', en: 'Sepetteki SEO' },
    body: [
      {
        tr: 'E-ticaret SEO ve yapay zeka konularını ele aldığımız podcast serisi. Simay Özpilavcı ile birlikte e-ticaret sitelerinin arama motoru yolculuğunu, AI ve SEO ilişkisini ele alıyoruz.',
        en: 'A Turkish-language podcast series about e-commerce SEO and artificial intelligence. With Simay Özpilavcı I cover how e-commerce sites perform in search and how AI and SEO intersect.',
      },
    ],
    meta: [{ icon: 'mic', label: { tr: 'Aktif Podcast', en: 'Active podcast' } }],
    tags: [
      { tr: 'Podcast', en: 'Podcast' },
      { tr: 'E-ticaret SEO', en: 'E-commerce SEO' },
      { tr: 'AI', en: 'AI' },
    ],
    link: {
      href: 'https://www.youtube.com/@keremgezergun',
      label: { tr: 'YouTube’da İzle', en: 'Watch on YouTube' },
      description: {
        tr: ' — Sepetteki SEO podcast’i (yeni sekmede açılır)',
        en: ' — the Sepetteki SEO podcast (opens in a new tab)',
      },
    },
  },
];

/** Every dated event, flattened. A card may contribute more than one. */
export const industryEvents: EventData[] = industryProjects.flatMap(
  (project) => project.events ?? [],
);
