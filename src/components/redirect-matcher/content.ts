import type { Localized } from '@/lib/i18n';
import type { Confidence, DropReason, Reason, WarningKind } from '@/lib/redirect-matcher/types';

/**
 * Every user-visible string on the tool, in both languages.
 *
 * Same convention as the other bilingual components on the site: a flat object
 * of `Localized` values, picked with `copy.key[language]`. No runtime
 * translation — add the English text next to the Turkish one.
 */

export const chrome = {
  eyebrow: { tr: 'Ücretsiz tarayıcı aracı', en: 'Free browser tool' },
  heading: {
    tr: '301 Yönlendirme Eşleştirme Aracı',
    en: 'Redirect Mapping Tool',
  },
  lead: {
    tr: 'Eski ve yeni URL listenizi yükleyin; araç her eski URL için en uygun yeni URL’yi bulur, benzerlik skoru ve gerekçesini gösterir, yönlendirme dosyanızı üretir.',
    en: 'Upload your old and new URL lists. The tool finds the closest new URL for every old one, shows a similarity score and the reasoning behind it, and writes your redirect file.',
  },
  privacy: {
    tr: 'Dosyanız sunucuya yüklenmiyor. Tüm işlem tarayıcınızda çalışıyor; URL listeniz cihazınızdan çıkmıyor.',
    en: 'Your file is never uploaded. Everything runs in your browser; your URL list never leaves your device.',
  },
  privacyDetail: {
    tr: 'Eşleştirme sırasında ağ sekmesinde tek bir istek görmezsiniz. Yalnızca ayarlarınız tarayıcınızda hatırlanır — verileriniz hatırlanmaz.',
    en: 'You will not see a single request in the network tab while matching runs. Only your settings are remembered in this browser — your data is not.',
  },
  sample: { tr: 'Örnek veriyle dene', en: 'Try it with sample data' },
  sampleHint: {
    tr: '20 eski ve 20 yeni URL ile aracı 5 saniyede görün.',
    en: 'See the tool in five seconds with 20 old and 20 new URLs.',
  },
} as const;

export const upload = {
  templateHeading: { tr: '1. Şablonu indirin ve doldurun', en: '1. Download the template and fill it in' },
  templateButton: { tr: 'Şablon CSV’yi indir', en: 'Download the template CSV' },
  templateNote: {
    tr: 'İki kolon var: eski_url (404 veren URL’ler) ve yeni_url (yeni sitedeki URL’ler).',
    en: 'Two columns: old_url (the URLs returning 404) and new_url (the URLs that exist on the new site).',
  },
  templateWarning: {
    tr: 'Bu iki kolon bağımsız listelerdir — aynı satırdaki iki değer birbiriyle eşleştirilmez. Kolonların uzunluğu farklı olabilir.',
    en: 'The two columns are independent lists — the values on one row are not paired with each other. The columns may have different lengths.',
  },
  uploadHeading: { tr: '2. Dosyayı yükleyin', en: '2. Upload the file' },
  dropzone: {
    tr: 'CSV dosyanızı buraya sürükleyin',
    en: 'Drag your CSV file here',
  },
  or: { tr: 'veya', en: 'or' },
  fileLabel: { tr: 'Dosya seçin (CSV)', en: 'Choose a file (CSV)' },
  fileHint: {
    tr: 'CSV kabul edilir. Ayırıcı otomatik algılanır: virgül, noktalı virgül veya sekme.',
    en: 'CSV files only. The delimiter is detected automatically: comma, semicolon or tab.',
  },
  tabFile: { tr: 'Dosya', en: 'File' },
  tabPaste: { tr: 'Yapıştır', en: 'Paste' },
  pasteOldLabel: { tr: 'Eski URL’ler (404 verenler)', en: 'Old URLs (the ones returning 404)' },
  pasteNewLabel: { tr: 'Yeni URL’ler (hedef havuzu)', en: 'New URLs (the target pool)' },
  pasteHint: { tr: 'Satır başına bir URL.', en: 'One URL per line.' },
  pasteApply: { tr: 'Listeleri kullan', en: 'Use these lists' },
  clear: { tr: 'Temizle', en: 'Clear' },
  summaryOld: { tr: 'eski URL', en: 'old URLs' },
  summaryNew: { tr: 'yeni URL', en: 'new URLs' },
  summarySkipped: { tr: 'satır atlandı', en: 'rows skipped' },
  run: { tr: 'Eşleştir', en: 'Match' },
  runAgain: { tr: 'Yeniden eşleştir', en: 'Match again' },
} as const;

export const notices = {
  assumedColumns: {
    tr: 'Başlık bulunamadı. İlk kolon eski URL, ikinci kolon yeni URL olarak okundu. Yanlışsa şablonu indirip doldurun.',
    en: 'No header row found. The first column was read as the old URLs and the second as the new ones. If that is wrong, download the template and fill it in.',
  },
  singleColumn: {
    tr: 'Dosyada tek kolon var. İki liste gerekiyor — şablonu indirip iki kolonu doldurun.',
    en: 'The file has only one column. Two lists are needed — download the template and fill in both columns.',
  },
  delimiterSemicolon: {
    tr: 'Ayırıcı noktalı virgül olarak algılandı (Türkçe Excel böyle kaydeder).',
    en: 'The delimiter was detected as a semicolon (this is how Turkish Excel saves CSV files).',
  },
  delimiterTab: { tr: 'Ayırıcı sekme olarak algılandı.', en: 'The delimiter was detected as a tab.' },
  unsupportedFile: {
    tr: 'Bu dosya biçimi desteklenmiyor. CSV yükleyin (.csv) veya listelerinizi Yapıştır sekmesine girin. Excel dosyanızı "CSV olarak kaydet" ile dönüştürebilirsiniz.',
    en: 'That file format is not supported. Upload a CSV (.csv) or paste your lists into the Paste tab. You can convert an Excel file with "Save as CSV".',
  },
  noUrls: {
    tr: 'Dosya okundu ama geçerli URL bulunamadı. Beklenen biçim: /kategori/urun-adi veya https://siteniz.com/kategori/urun-adi',
    en: 'The file was read but no valid URLs were found. Expected format: /category/product-name or https://yoursite.com/category/product-name',
  },
  noMatches: {
    tr: 'Hiçbir eşleşme bulunamadı. Ayarlardan eşiği düşürmeyi deneyin.',
    en: 'No matches were found. Try lowering the threshold in the settings.',
  },
  cancelled: { tr: 'Eşleştirme iptal edildi.', en: 'Matching was cancelled.' },
  worker: {
    tr: 'Eşleştirme tamamlanamadı. Sayfayı yenileyip tekrar deneyin; sorun sürerse listenizi bölerek çalıştırın.',
    en: 'Matching could not finish. Reload the page and try again; if it keeps happening, split your list and run it in parts.',
  },
  domainChange: {
    tr: 'Alan adı değişikliği tespit edildi. Çıktı biçimi tam URL olarak ayarlandı.',
    en: 'A domain change was detected. The output format has been set to absolute URLs.',
  },
  rowLimit: {
    tr: 'Liste başına en fazla 2.000 satır işlenebilir. Listenizi bölerek çalıştırın.',
    en: 'At most 2,000 rows per list can be processed. Split your list and run it in parts.',
  },
  collapsed: {
    tr: 'satır standartlaştırma sonrası aynı URL’ye denk geldiği için birleştirildi',
    en: 'rows collapsed because they normalize to the same URL',
  },
  homepageWarning: {
    tr: 'Eşleşmeyen URL’leri toplu hâlde ana sayfaya yönlendirmeyin. Yanlış yönlendirme, yönlendirme yapmamaktan daha zararlıdır; Google bunları soft 404 olarak değerlendirir.',
    en: 'Do not bulk-redirect unmatched URLs to the home page. A wrong redirect is worse than no redirect; Google treats these as soft 404s.',
  },
} as const;

export const dropReasons: Record<DropReason, Localized> = {
  empty: { tr: 'boş hücre', en: 'blank cell' },
  'not-a-url': { tr: 'URL değil', en: 'not a URL' },
  duplicate: { tr: 'tekrar eden satır', en: 'duplicate row' },
  unreadable: { tr: 'okunamadı (bozuk kodlama)', en: 'unreadable (malformed encoding)' },
  'same-as-source': { tr: 'yönlendirme gerekmiyor', en: 'no redirect needed' },
};

export const settings = {
  heading: { tr: 'Ayarlar', en: 'Settings' },
  threshold: { tr: 'Eşleşme eşiği', en: 'Match threshold' },
  thresholdHint: {
    tr: 'Bu skorun altındaki hiçbir aday otomatik seçilmez.',
    en: 'No candidate below this score is selected automatically.',
  },
  includeQuery: {
    tr: 'Sorgu parametrelerini karşılaştırmaya dahil et',
    en: 'Include query strings in the comparison',
  },
  stripLanguagePrefix: {
    tr: 'Dil ön ekini yok say (/tr/, /en/)',
    en: 'Ignore the language prefix (/tr/, /en/)',
  },
  absoluteOutput: { tr: 'Çıktıda tam URL kullan', en: 'Use absolute URLs in the output' },
  outputHost: { tr: 'Hedef alan adı', en: 'Target domain' },
  outputHostHint: {
    tr: 'Örnek: yenisite.com',
    en: 'For example: newsite.com',
  },
  weights: { tr: 'Skor ağırlıkları', en: 'Score weights' },
  weightTokens: { tr: 'Kelime örtüşmesi', en: 'Word overlap' },
  weightCharacters: { tr: 'Harf benzerliği', en: 'Character similarity' },
  weightStructure: { tr: 'Yol yapısı', en: 'Path structure' },
  weightShape: { tr: 'Derinlik ve uzunluk', en: 'Depth and length' },
  weightsHint: {
    tr: 'Varsayılanlar çoğu liste için doğrudur; değiştirmeniz gerekmez.',
    en: 'The defaults are right for most lists; you should not need to change them.',
  },
  reset: { tr: 'Varsayılanlara dön', en: 'Reset to defaults' },
} as const;

export const progress = {
  normalizing: { tr: 'URL’ler standartlaştırılıyor', en: 'Normalizing URLs' },
  matching: { tr: 'Eşleştiriliyor', en: 'Matching' },
  warnings: { tr: 'Uyarılar hesaplanıyor', en: 'Working out warnings' },
  cancel: { tr: 'İptal et', en: 'Cancel' },
  of: { tr: '/', en: 'of' },
} as const;

export const results = {
  filterAll: { tr: 'Toplam', en: 'Total' },
  filterHigh: { tr: 'Yüksek güven', en: 'High confidence' },
  filterReview: { tr: 'İncelenecek', en: 'To review' },
  filterNone: { tr: 'Eşleşmeyen', en: 'Unmatched' },
  caption: {
    tr: 'Eşleştirme sonuçları. Her satırda hedefi değiştirebilir, satırı dışarıda bırakabilirsiniz.',
    en: 'Matching results. You can change the target on any row, or leave a row out.',
  },
  colInclude: { tr: 'Dahil', en: 'Include' },
  colOld: { tr: 'Eski URL', en: 'Old URL' },
  colNew: { tr: 'Yeni URL', en: 'New URL' },
  colScore: { tr: 'Skor', en: 'Score' },
  colReason: { tr: 'Neden', en: 'Reason' },
  colWarning: { tr: 'Uyarı', en: 'Warning' },
  manual: { tr: 'Elle URL gir…', en: 'Type a URL…' },
  manualLabel: { tr: 'Hedef URL', en: 'Target URL' },
  noTarget: { tr: 'Hedef yok', en: 'No target' },
  approveHigh: { tr: '90 üstünü onayla', en: 'Approve everything above 90' },
  clearWeak: { tr: '50 altını temizle', en: 'Clear everything below 50' },
  excludeSelected: { tr: 'Seçilenleri dışla', en: 'Exclude the selected rows' },
  undo: { tr: 'Geri al', en: 'Undo' },
  undoneNothing: { tr: 'Geri alınacak işlem yok', en: 'Nothing to undo' },
  page: { tr: 'Sayfa', en: 'Page' },
  previous: { tr: 'Önceki', en: 'Previous' },
  next: { tr: 'Sonraki', en: 'Next' },
  keyboardHeading: { tr: 'Klavye kısayolları', en: 'Keyboard shortcuts' },
  keyboardRows: {
    tr: 'Yukarı / aşağı: satır gez · 1–5: alternatif hedef seç · Boşluk: dahil et / çıkar',
    en: 'Up / down: move between rows · 1–5: pick an alternative target · Space: include or exclude',
  },
  keyboardNote: {
    tr: 'Sayı tuşları yalnızca bir satır odaktayken çalışır.',
    en: 'The number keys only act while a row has focus.',
  },
  narrowNote: {
    tr: 'Dar ekranda tablo kart düzenine geçer. Uzun listeleri gözden geçirmek masaüstünde daha rahat, ama tüm işlevler burada da çalışır.',
    en: 'On a narrow screen the table becomes a card layout. Reviewing a long list is easier on a desktop, but every function works here too.',
  },
  matchedWords: { tr: 'Eşleşen kelimeler', en: 'Matched words' },
  unchangedHeading: { tr: 'Yönlendirme gerekmeyen URL’ler', en: 'URLs that need no redirect' },
  unchangedNote: {
    tr: 'Bu URL’ler yeni listede aynı adresle var.',
    en: 'These URLs exist at the same address in the new list.',
  },
} as const;

export const confidenceLabels: Record<Confidence, Localized> = {
  high: { tr: 'Yüksek güven', en: 'High confidence' },
  review: { tr: 'Gözden geçir', en: 'Review' },
  weak: { tr: 'Zayıf', en: 'Weak' },
  none: { tr: 'Eşleşme yok', en: 'No match' },
};

export const reasonLabels: Record<Reason, Localized> = {
  exact: { tr: 'Birebir aynı', en: 'Exact match' },
  'id-match': { tr: 'ID eşleşmesi', en: 'Id match' },
  'same-slug': { tr: 'Aynı slug', en: 'Same slug' },
  'broader-page': { tr: 'Daha genel sayfa', en: 'Broader page' },
  'narrower-page': { tr: 'Daha dar sayfa', en: 'Narrower page' },
  'parent-suggestion': { tr: 'Üst kategori önerisi', en: 'Parent category suggestion' },
  similar: { tr: 'Benzer', en: 'Similar' },
};

export const warningLabels: Record<WarningKind, Localized> = {
  chain: { tr: 'Zincir', en: 'Chain' },
  loop: { tr: 'Döngü', en: 'Loop' },
  'many-to-one': { tr: 'Çoklu hedef', en: 'Many to one' },
  'broader-page': { tr: 'Daha genel sayfa', en: 'Broader page' },
  'narrower-page': { tr: 'Daha dar sayfa', en: 'Narrower page' },
  ambiguous: { tr: 'Belirsiz — seçim gerekiyor', en: 'Ambiguous — needs a choice' },
  'query-only': {
    tr: 'Yalnızca parametreyle ayrışıyor',
    en: 'Differs only by query string',
  },
  unreadable: { tr: 'Okunamadı', en: 'Unreadable' },
};

export const warningExplanations: Record<WarningKind, Localized> = {
  chain: {
    tr: 'Hedef URL eski liste içinde de var; bu yönlendirme başka bir yönlendirmeye çıkıyor.',
    en: 'The target is also in the old list, so this redirect lands on another redirect.',
  },
  loop: {
    tr: 'A → B ve B → A. Bu döngü sonsuz yönlendirme üretir.',
    en: 'A to B and B to A. This loop produces an infinite redirect.',
  },
  'many-to-one': {
    tr: '20’den fazla eski URL bu hedefe yönleniyor. Google bunları soft 404 sayabilir.',
    en: 'More than 20 old URLs point here. Google may treat these as soft 404s.',
  },
  'broader-page': {
    tr: 'Aday, kaynaktan daha genel bir sayfa. Skoru bu yüzden 65 ile sınırlı.',
    en: 'The candidate is a more general page than the source, so its score is capped at 65.',
  },
  'narrower-page': {
    tr: 'Aday, kaynaktan daha dar bir sayfa. Skoru bu yüzden 60 ile sınırlı.',
    en: 'The candidate is a narrower page than the source, so its score is capped at 60.',
  },
  ambiguous: {
    tr: 'Birden fazla aday aynı skorda. Hangisinin doğru olduğuna siz karar vermelisiniz.',
    en: 'More than one candidate scored the same. You need to decide which one is right.',
  },
  'query-only': {
    tr: 'Bu satır başka bir satırdan yalnızca sorgu parametresiyle ayrışıyor. Sunucu kuralı ikisini ayırt edemez.',
    en: 'This row differs from another only by its query string. A server rule cannot tell them apart.',
  },
  unreadable: {
    tr: 'Satır okunamadı ve atlandı.',
    en: 'The row could not be read and was skipped.',
  },
};

export const exportBar = {
  heading: { tr: 'Dışa aktar', en: 'Export' },
  count: { tr: 'satır dışa aktarılacak', en: 'rows will be exported' },
  format: { tr: 'Biçim', en: 'Format' },
  download: { tr: 'İndir', en: 'Download' },
  formatCsv: { tr: 'CSV (Excel uyumlu)', en: 'CSV (Excel-compatible)' },
  formatHtaccess: { tr: 'Apache .htaccess', en: 'Apache .htaccess' },
  formatNginx: { tr: 'Nginx yapılandırması', en: 'Nginx configuration' },
  formatRedirection: { tr: 'WordPress Redirection CSV', en: 'WordPress Redirection CSV' },
  unmatched: { tr: 'Eşleşmeyenleri indir', en: 'Download the unmatched list' },
  notDownloaded: {
    tr: 'Sonuçlar henüz indirilmedi.',
    en: 'The results have not been downloaded yet.',
  },
  leaveWarning: {
    tr: 'Sonuçlarınız indirilmedi. Sayfadan ayrılırsanız kaybolur.',
    en: 'Your results have not been downloaded. They are lost if you leave the page.',
  },
  csvHeader: {
    tr: ['eski_url', 'yeni_url', 'skor', 'guven', 'gerekce', 'uyari'],
    en: ['old_url', 'new_url', 'score', 'confidence', 'reason', 'warning'],
  },
  unmatchedHeader: {
    tr: ['eski_url', 'en_yuksek_skor'],
    en: ['old_url', 'best_score'],
  },
  fileNote: {
    tr: 'Bu dosya tarayıcınızda üretildi.',
    en: 'This file was generated in your browser.',
  },
} as const;
