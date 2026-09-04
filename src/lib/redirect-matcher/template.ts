import type { Language } from './locale';

/**
 * The download template and the demo fixture.
 *
 * The template is the entire input contract: two columns, fixed headers, and
 * comment lines that explain the one thing users get wrong. Its example rows are
 * deliberately arranged so that row N of one column does not correspond to row N
 * of the other -- if they lined up, everyone would fill the file as if it were a
 * pairing table.
 */

const TEMPLATE_NOTES: Record<Language, string[]> = {
  tr: [
    'Redirect Matcher sablonu. Iki kolonu doldurup dosyayi geri yukleyin.',
    'eski_url : 404 veren / eskiyen URL listesi (yonlendirilecek olanlar)',
    'yeni_url : yeni sitede var olan URL listesi (hedef havuzu)',
    'ONEMLI: bu iki kolon BAGIMSIZ listelerdir. Ayni satirdaki iki deger',
    'birbiriyle eslestirilmez. Kolonlarin uzunlugu farkli olabilir, bos',
    'hucre birakabilirsiniz. Asagidaki ornek satirlar bilerek eslesmiyor.',
    'Bu # ile baslayan satirlari silmeniz gerekmez.',
  ],
  en: [
    'Redirect Matcher template. Fill in both columns and upload the file.',
    'old_url : the list of 404 / retiring URLs (the ones to redirect)',
    'new_url : the list of URLs that exist on the new site (the target pool)',
    'IMPORTANT: these two columns are INDEPENDENT lists. The two values on the',
    'same row are not paired with each other. The columns may have different',
    'lengths and may contain blank cells. The example rows below deliberately',
    'do not line up. You do not need to delete these # comment lines.',
  ],
};

const TEMPLATE_OLD = [
  '/kadin/kirmizi-elbise-modelleri',
  '/ayakkabi/spor-ayakkabi-fiyatlari',
  '/aksesuar/kolye',
  '/eski-kampanya-sayfasi',
];

const TEMPLATE_NEW = [
  '/aksesuar/gumus-kolye',
  '/kadin-giyim/kirmizi-elbise',
  '/kampanyalar',
  '/ayakkabi/kadin-spor-ayakkabi',
  '/ayakkabi/erkek-spor-ayakkabi',
];

/** The template, written with ';' so Turkish Excel opens it in columns. */
export function templateCsv(language: Language): string {
  const header = language === 'en' ? 'old_url;new_url' : 'eski_url;yeni_url';
  const rows: string[] = TEMPLATE_NOTES[language].map((note) => `# ${note}`);
  rows.push(header);
  const height = Math.max(TEMPLATE_OLD.length, TEMPLATE_NEW.length);
  for (let i = 0; i < height; i += 1) {
    rows.push(`${TEMPLATE_OLD[i] ?? ''};${TEMPLATE_NEW[i] ?? ''}`);
  }
  return '\uFEFF' + rows.join('\r\n') + '\r\n';
}

/**
 * The "try it with sample data" fixture.
 *
 * Small enough to read at a glance and shaped to show every outcome the tool
 * can produce: an exact match, a clearly better candidate beating a broader
 * one, an id match, a chain, a fanout, and something with no match at all.
 */
export const SAMPLE_OLD: string[] = [
  '/kadin/kirmizi-elbise-modelleri',
  '/kadin/mavi-elbise-modelleri',
  '/kadin/siyah-elbise',
  '/ayakkabi/spor-ayakkabi-fiyatlari',
  '/ayakkabi/kosu-ayakkabisi',
  '/aksesuar/gumus-kolye-cesitleri',
  '/aksesuar/altin-yuzuk',
  '/urun/48211/deri-canta',
  '/canta/omuz-cantasi-modelleri',
  '/erkek/gomlek-fiyatlari',
  '/erkek/takim-elbise',
  '/cocuk/bebek-tulumu',
  '/outlet/indirimli-mont',
  '/kampanya/yilbasi-2019',
  '/blog/nasil-kombin-yapilir',
  '/iletisim.html',
  '/hakkimizda/index.php',
  '/kadin/elbise/kirmizi/uzun/abiye-model-77',
  '/%C3%BCr%C3%BCn/%C5%9Fik-canta',
  '/kadin/kirmizi-elbise-modelleri?sayfa=2',
];

export const SAMPLE_NEW: string[] = [
  '/kadin-giyim/kirmizi-elbise',
  '/kadin-giyim/mavi-elbise',
  '/kadin-giyim/siyah-elbise',
  '/kadin-giyim/elbise',
  '/ayakkabi/kadin-spor-ayakkabi',
  '/ayakkabi/kosu-ayakkabi',
  '/aksesuar/gumus-kolye',
  '/aksesuar/altin-yuzuk',
  '/p/48211',
  '/canta/omuz-cantasi',
  '/canta/deri-canta',
  '/erkek-giyim/gomlek',
  '/erkek-giyim/takim-elbise',
  '/cocuk-giyim/bebek-tulumu',
  '/outlet/mont',
  '/kampanyalar',
  '/blog/kombin-rehberi',
  '/iletisim',
  '/hakkimizda',
  '/urun/sik-canta',
];
