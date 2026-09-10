import type { Localized } from '@/lib/i18n';

/**
 * The article under the tool.
 *
 * The scoring section is the point of it: every competing tool leaves its
 * similarity score a black box, and explaining ours in full is both the honest
 * thing to do and the reason anyone would link to this page.
 */

export type Block =
  | { kind: 'p'; text: Localized }
  | { kind: 'ul'; items: Localized[] }
  | { kind: 'ol'; items: Localized[] }
  | { kind: 'code'; text: string }
  /**
   * External sources.
   *
   * The guide makes specific claims about how Google treats chains, soft 404s
   * and 302s. Those claims are correct, and citing them builds authority with a
   * technical audience rather than spending it.
   */
  | { kind: 'sources'; heading: Localized; items: { label: Localized; href: string }[] }
  /** `caption` is required: a data table without one is unlabelled for a
   *  screen reader, and it is rendered visually hidden. */
  | { kind: 'table'; caption: Localized; head: Localized[]; rows: Localized[][] };

export type Section = { id: string; heading: Localized; blocks: Block[] };

export const sections: Section[] = [
  {
    id: 'skor',
    heading: {
      tr: 'Benzerlik skoru nasıl hesaplanıyor?',
      en: 'How is the similarity score calculated?',
    },
    blocks: [
      {
        kind: 'p',
        text: {
          tr: 'Skor 0–100 arası tek bir sayıdır ve dört bileşenin ağırlıklı toplamıdır. Çoğu araç skoru nasıl hesapladığını açıklamaz. Burada tamamı yazılı: hangi satıra güveneceğinize karar verebilmeniz için sayıyı değil, gerekçeyi görmeniz gerekir.',
          en: 'The score is a single number between 0 and 100: the weighted sum of four components. Most tools do not explain how their score is calculated. It is written out in full here, because deciding which rows to trust requires seeing the reasoning, not just the number.',
        },
      },
      {
        kind: 'table',
        caption: {
          tr: 'Skorun dört bileşeni, ağırlıkları ve ne ölçtükleri',
          en: 'The four components of the score, their weights and what they measure',
        },
        head: [
          { tr: 'Bileşen', en: 'Component' },
          { tr: 'Ağırlık', en: 'Weight' },
          { tr: 'Ne ölçüyor', en: 'What it measures' },
        ],
        rows: [
          [
            { tr: 'Ağırlıklı kelime örtüşmesi', en: 'Weighted word overlap' },
            { tr: '%50', en: '50%' },
            {
              tr: 'İki URL’nin kaç anlamlı kelimeyi paylaştığı. Kelimeler eşit ağırlıkta değil.',
              en: 'How many meaningful words the two URLs share. Words are not weighted equally.',
            },
          ],
          [
            { tr: 'Harf düzeyi benzerlik', en: 'Character-level similarity' },
            { tr: '%25', en: '25%' },
            {
              tr: 'Yazım farkları, ek farkları, kelime sırası değişimleri. Üçlü harf kümeleri üzerinden.',
              en: 'Spelling differences, different endings, reordered words. Measured on character trigrams.',
            },
          ],
          [
            { tr: 'Yol yapısı', en: 'Path structure' },
            { tr: '%15', en: '15%' },
            {
              tr: 'Kategori ağacındaki yakınlık: iki URL aynı dizinlerin altında mı duruyor?',
              en: 'Closeness in the category tree: do the two URLs sit under the same directories?',
            },
          ],
          [
            { tr: 'Derinlik ve uzunluk', en: 'Depth and length' },
            { tr: '%10', en: '10%' },
            {
              tr: 'Aynı seviyedeki sayfalar birbirine daha yakındır.',
              en: 'Pages at the same level are closer to each other.',
            },
          ],
        ],
      },
      {
        kind: 'p',
        text: {
          tr: 'Kelime ağırlıkları yeni URL listenizden hesaplanır. Bir kelime listede ne kadar çok geçiyorsa o kadar az bilgi taşır: 300 URL’de geçen "elbise" kelimesinin eşleşmesi, 12 URL’de geçen "kirmizi" kelimesinin eşleşmesinden çok daha az değerlidir. Buna ek olarak Türkçe e-ticaret URL’lerinde anlam taşımayan kalıp kelimeler — modelleri, cesitleri, fiyatlari, indirimli, satin-al, urun, sayfa, kategori — düşük ağırlıklı sayılır.',
          en: 'Word weights are computed from your new URL list. The more often a word appears in it, the less it says: matching on "dress" when 300 URLs contain it is far less informative than matching on "crimson" when 12 do. On top of that, the filler words that carry no meaning in an e-commerce URL — models, types, prices, discounted, buy, product, page, category — are given a low weight.',
        },
      },
      {
        kind: 'p',
        text: {
          tr: 'Bu kelimeler tamamen silinmez, yalnızca ağırlığı düşürülür. Silinseydi /elbise-fiyatlari ile /elbise-modelleri birebir aynı görünürdü ve araç size sahte bir %100 eşleşme gösterirdi.',
          en: 'These words are down-weighted, never deleted. If they were deleted, /dress-prices and /dress-models would look identical and the tool would report a fake 100% match.',
        },
      },
      {
        kind: 'p',
        text: {
          tr: 'Örtüşme her iki tarafın eşleşmeyen kelimeleri de cezalandırılarak hesaplanır. Bu, doğru sonuç için zorunlu: /elbise adresi /kirmizi-elbise-modelleri içinde tamamen geçer, dolayısıyla yalnızca "adayın kelimeleri kaynakta var mı?" diye bakan bir hesap ona %100 verir ve kısa, genel URL’ler her zaman kazanır. Bu araç adayda olmayan kelimeyi de hesaba katar; hiçbir yerde "metin içinde geçiyor mu" kontrolü kullanmaz.',
          en: 'Overlap is calculated so that the unmatched words on both sides cost something. This is not a refinement, it is a requirement: /dress is entirely contained inside /crimson-dress-models, so a measure that only asks "are the candidate’s words present in the source?" awards it 100% and short generic URLs win every time. This tool also counts the words the candidate is missing, and never uses a substring check anywhere in its scoring.',
        },
      },
      {
        kind: 'p',
        text: {
          tr: 'Bunun üzerine bir de özgüllük kuralı gelir. Gürültü kelimeleri çıkarıldıktan sonra kalan anlamlı kelime kümeleri karşılaştırılır. Aday kaynağın alt kümesiyse, yani daha genel bir sayfaysa, skoru en fazla 65 olur ve "daha genel sayfa" etiketi alır. Kaynak adayın alt kümesiyse tavan 60’tır. Tavan adayı listeden çıkarmaz; yalnızca otomatik onaylanmasını ve eşit özgüllükteki bir adayı geçmesini engeller.',
          en: 'A specificity rule sits on top of that. After the filler words are set aside, the remaining meaningful word sets are compared: if the candidate is a subset of the source — a more general page — its score is capped at 65 and it is labelled "broader page"; if the source is a subset of the candidate, the cap is 60. A cap does not remove a candidate, it only stops it being auto-approved and stops it outranking a candidate of equal specificity.',
        },
      },
      {
        kind: 'p',
        text: {
          tr: 'Somut bir örnek: kaynak URL /kirmizi-elbise-modelleri; anlamlı kelimeleri kirmizi ve elbise ("modelleri" gürültü).',
          en: 'A worked example: the source URL is /crimson-dress-models; its meaningful words are crimson and dress ("models" is filler).',
        },
      },
      {
        kind: 'table',
        caption: {
          tr: '/kirmizi-elbise-modelleri için iki adayın adım adım değerlendirmesi',
          en: 'Two candidates for /crimson-dress-models, assessed step by step',
        },
        head: [
          { tr: 'Aday', en: 'Candidate' },
          { tr: 'Değerlendirme', en: 'Assessment' },
          { tr: 'Skor', en: 'Score' },
        ],
        rows: [
          [
            { tr: '/kirmizi-elbise', en: '/crimson-dress' },
            {
              tr: 'Anlamlı kelime kümesi kaynakla aynı → tavan yok; son segmentin anlamlı kelimeleri de aynı olduğu için 90 tabanı devreye girer',
              en: 'Same meaningful word set as the source, so no cap; the last segment carries the same meaningful words too, which brings in the 90 floor',
            },
            { tr: '90', en: '90' },
          ],
          [
            { tr: '/elbise', en: '/dress' },
            {
              tr: 'Kaynağın alt kümesi → tavan 65; ayrıca "elbise" yaygın bir kelime, ağırlığı düşük',
              en: 'A subset of the source, so capped at 65; "dress" is also a common word with a low weight',
            },
            { tr: '56', en: '56' },
          ],
        ],
      },
      {
        kind: 'p',
        text: {
          tr: 'Bu hesabın üzerine üç kısayol eklenir. Standartlaştırılmış yollar birebir aynıysa skor 100’dür. İki URL ortak bir ürün numarası veya SKU taşıyorsa skor en az 95 olur ve bu taban özgüllük tavanını ezer — ID, aynı ürünün kanıtıdır. Son segmentin anlamlı kelimeleri aynı ama dizin farklıysa skor en az 90 olur; bu taban tavanı ezmez, çünkü /kadin/elbise ile /elbise arasında son segment aynı olsa bile aday hâlâ daha genel sayfadır. Son taban bir koşula bağlı: slug ayırt edici olmalı, yani en az iki anlamlı kelime taşımalı ya da taşıdığı tek kelime listede nadir olmalı. Aksi hâlde /kadin/elbise ile /erkek/elbise son segmentlerini paylaştığı için kadın sayfasından erkek sayfasına yapılan bir yönlendirme 90 alırdı.',
          en: 'Three shortcuts sit above this calculation. If the normalized paths are identical the score is 100. If both URLs carry the same product id or SKU the score is at least 95, and that floor overrides the specificity cap — an id is evidence of the same product. If the last segment carries the same meaningful words but the directory differs the score is at least 90; this floor does not override the cap, because between /women/dress and /dress the last segment matches while the candidate is still the more general page. That last floor has a condition: the slug has to be distinctive, meaning at least two meaningful words, or one word that is rare in the list. Otherwise /women/dress and /men/dress share their last segment and a women’s-to-men’s redirect would score 90.',
        },
      },
      {
        kind: 'p',
        text: {
          tr: 'Gürültü temizliğinin kapsama testinden önce yapılması bu sonucun ön koşuludur. Yapılmasaydı /kirmizi-elbise de kaynağın alt kümesi sayılır ("modelleri" kelimesi onda yok) ve doğru cevap da 65’e kırpılırdı.',
          en: 'Clearing the filler words before the coverage test is what makes this result possible. Without it /crimson-dress would also count as a subset of the source — it is missing the word "models" — and the correct answer would be capped at 65 as well.',
        },
      },
      {
        kind: 'p',
        text: {
          tr: 'Kapsama testinin bir ince noktası var. İki URL aynı derinlikteyse test yalnızca son segment üzerinden yapılır, tüm yol üzerinden değil. Sebebi en yaygın taşıma deseni: /kadin/kirmizi-elbise-modelleri adresinin /kadin-giyim/kirmizi-elbise olması. Tüm yolun kelimelerine bakılırsa fazladan gelen "giyim" kelimesi kaynağı adayın alt kümesi yapar ve apaçık doğru olan cevap 60’a kırpılır. Dizinler yapıdır; sayfayı tanımlayan son segmenttir ve özgüllük değişikliği de orada görünür.',
          en: 'The coverage test has one subtlety. When two URLs sit at the same depth the test runs on the last segment alone, not the whole path. The reason is the most common migration there is: /women/crimson-dress-models becoming /womenswear/crimson-dress. Looking at the whole path, the extra word "womenswear" makes the source a subset of the candidate and caps the obviously correct answer at 60. Directories are structure; the last segment is what identifies the page, and it is where a real change in specificity shows up.',
        },
      },
      {
        kind: 'p',
        text: {
          tr: 'Karşılaştırma her zaman standartlaştırılmış hâl üzerinden yapılır: alan adı ve protokol düşer, sondaki eğik çizgi atılır, yüzde kodlaması çözülür, .html/.php gibi uzantılar yok sayılır, çapa ve sorgu parametreleri düşer, Türkçe karakterler karşılaştırma için sadeleştirilir. Çıktıya her zaman sizin verdiğiniz orijinal URL yazılır — sunucu kuralı gerçek adresi eşlemek zorundadır, sadeleştirilmiş hâli değil.',
          en: 'Comparison always runs on a normalized form: the protocol and domain come off, the trailing slash goes, percent encoding is decoded, extensions like .html and .php are ignored, the fragment and query string are dropped, and Turkish characters are folded to ASCII for comparison only. Every export writes the original URL you supplied — a server rule has to match the real address, not the folded one.',
        },
      },
    ],
  },

  {
    id: 'kontrol-listesi',
    heading: {
      tr: 'Site taşımasında yönlendirme kontrol listesi',
      en: 'A redirect checklist for a site migration',
    },
    blocks: [
      {
        kind: 'ol',
        items: [
          {
            tr: 'Taşımadan önce eski siteyi tam tarayın ve 200 dönen tüm URL’leri dışa aktarın. Taşıma sonrası bu listeyi üretmek çok daha zordur.',
            en: 'Crawl the old site completely before the migration and export every URL that returns 200. Producing this list after the migration is far harder.',
          },
          {
            tr: 'Search Console’dan son 16 aylık tıklama alan URL’leri ve analitikten organik giriş sayfalarını da ekleyin. Tarayıcının bulamadığı ama trafik alan sayfalar hep olur.',
            en: 'Add the URLs that received clicks in the last 16 months from Search Console, plus your organic landing pages from analytics. There are always pages a crawler misses that still get traffic.',
          },
          {
            tr: 'Backlink aracınızdan dış bağlantı alan URL’leri çıkarın. Bunlar yönlendirmesi en kritik olanlardır; kaybedilen her biri doğrudan link değeri kaybıdır.',
            en: 'Pull the URLs that have external links from your backlink tool. These are the most critical to redirect; each one lost is link equity lost.',
          },
          {
            tr: 'Yeni sitenin canlı URL listesini alın. Eşleştirmeyi staging üzerinden yapıyorsanız, yayına aldığınızda adreslerin değişmeyeceğinden emin olun.',
            en: 'Get the live URL list for the new site. If you are matching against staging, make sure those addresses will not change when it goes live.',
          },
          {
            tr: 'Bu araçla eşleştirin, 90 üstünü toplu onaylayın, 50–89 arasını tek tek gözden geçirin. Zamanınızı burada harcayın; işin tamamı bu 40 satırdır.',
            en: 'Match with this tool, bulk-approve everything above 90, and review the 50–89 band one row at a time. Spend your time here; those forty rows are the whole job.',
          },
          {
            tr: 'Zincir ve döngü uyarılarını temizleyin. Yönlendirme zinciri her adımda değer sızdırır ve Google zincirin bir noktasında takip etmeyi bırakır.',
            en: 'Clear the chain and loop warnings. A redirect chain leaks value at every hop, and Google stops following at some point along it.',
          },
          {
            tr: 'Aynı hedefe 20’den fazla eski URL yönleniyorsa o hedefi yeniden düşünün. Bu genelde eşleştirmenin değil, yeni sitede karşılığı olmayan bir bölümün işaretidir.',
            en: 'If more than 20 old URLs point at one target, reconsider that target. It usually signals a section with no equivalent on the new site rather than a matching problem.',
          },
          {
            tr: 'Kuralları 301 olarak kurun, 302 değil. Kalıcı taşımada 302 sinyali Google’ın eski URL’yi kanonik tutmasına yol açar.',
            en: 'Deploy the rules as 301, not 302. On a permanent move a 302 signals Google to keep the old URL as canonical.',
          },
          {
            tr: 'Yayına aldıktan sonra eski URL listesini tekrar tarayın: hepsi tek adımda 301 ile 200 dönen bir sayfaya çıkmalı.',
            en: 'After going live, crawl the old URL list again: every one should reach a page returning 200 through a single 301.',
          },
          {
            tr: 'Yeni sitemap’i Search Console’a gönderin, eski sitemap’i en az birkaç ay yayında tutun. Google eski URL’leri yeniden taramadan yönlendirmeleri göremez.',
            en: 'Submit the new sitemap in Search Console and keep the old sitemap live for at least a few months. Google cannot see your redirects until it recrawls the old URLs.',
          },
          {
            tr: 'Yönlendirmeleri en az bir yıl kaldırmayın. Google eski URL’leri aylarca tarar ve dış bağlantılar hiç güncellenmez.',
            en: 'Do not remove the redirects for at least a year. Google keeps crawling old URLs for months, and external links are never updated.',
          },
        ],
      },
    ],
  },

  {
    id: 'sunucu',
    heading: { tr: 'Sunucu tarafında kurulum', en: 'Setting the rules up on your server' },
    blocks: [
      {
        kind: 'p',
        text: {
          tr: 'Apache çıktısı Redirect değil RedirectMatch kullanır ve deseni iki uçtan sabitler. Bunun sebebi Redirect direktifinin ön ek eşlemesidir: /elbise için yazdığınız bir kural /elbise-mavi ve altındaki her yolu da yakalar. Kuralları .htaccess dosyanızın başına, diğer yönlendirmelerden önce koyun.',
          en: 'The Apache output uses RedirectMatch rather than Redirect, with the pattern anchored at both ends. The reason is that Redirect matches by prefix: a rule written for /dress also catches /dress-blue and everything beneath it. Put the rules at the top of your .htaccess file, ahead of your other redirects.',
        },
      },
      {
        kind: 'code',
        text: 'RedirectMatch 301 "^/kadin/kirmizi-elbise-modelleri/?$" "/kadin-giyim/kirmizi-elbise"',
      },
      {
        kind: 'p',
        text: {
          tr: 'Yükledikten sonra sözdizimini doğrulayın: apachectl configtest. Hata verirse dosyayı geri alın; kırık bir .htaccess tüm siteyi 500 döndürür.',
          en: 'Verify the syntax after uploading: apachectl configtest. If it errors, roll the file back — a broken .htaccess returns 500 for the whole site.',
        },
      },
      {
        kind: 'p',
        text: {
          tr: 'Nginx çıktısı bir map bloğudur, çünkü iki bin kuralı ifade etmenin yolu budur. Map bloğu http bağlamına, koşul da server bloğuna girer. Anahtar $request_uri değil $uri’dir: $uri sorgu parametresi olmayan, çözülmüş yoldur — kuralların eşlediği şey de tam olarak bu.',
          en: 'The nginx output is a map block, because that is how you express two thousand rules. The map goes in the http context and the condition in the server block. The key is $uri, not $request_uri: $uri is the decoded path without the query string, which is exactly what the rules match.',
        },
      },
      {
        kind: 'code',
        text: 'map $uri $redirect_target {\n    default "";\n    "/kadin/kirmizi-elbise-modelleri" "/kadin-giyim/kirmizi-elbise";\n}\n\nserver {\n    if ($redirect_target != "") {\n        return 301 $redirect_target;\n    }\n}',
      },
      {
        kind: 'p',
        text: {
          tr: 'nginx -t ile doğrulayın, sonra nginx -s reload ile yeniden yükleyin. Yeniden başlatmak gerekmez.',
          en: 'Check it with nginx -t, then reload with nginx -s reload. A full restart is not needed.',
        },
      },
      {
        kind: 'p',
        text: {
          tr: 'WordPress kullanıyorsanız Redirection eklentisi biçimini seçin ve Tools → Import ekranından yükleyin. Bin satırın üzerinde yönlendirmede eklenti yerine sunucu kuralını tercih edin: her istekte PHP çalıştırmak gereksiz yük.',
          en: 'On WordPress, pick the Redirection plugin format and load it from Tools → Import. Above a thousand rules prefer a server rule over the plugin: running PHP on every request is needless overhead.',
        },
      },
      {
        kind: 'p',
        text: {
          tr: 'Cloudflare veya benzeri bir CDN arkasındaysanız yönlendirmeleri kurduktan sonra önbelleği temizleyin. Eski 404 yanıtları önbellekte kalmışsa yeni kuralınız görünmez.',
          en: 'If you sit behind Cloudflare or a similar CDN, purge the cache after deploying. If the old 404 responses are still cached, your new rules are invisible.',
        },
      },
    ],
  },

  {
    id: 'hatalar',
    heading: { tr: 'Sık yapılan hatalar', en: 'Common mistakes' },
    blocks: [
      {
        kind: 'ul',
        items: [
          {
            tr: 'Eşleşmeyenleri toplu hâlde ana sayfaya yönlendirmek. Google alakasız bir hedefe yapılan yönlendirmeyi soft 404 sayar ve eski sayfanın değerini aktarmaz. Yanlış yönlendirme, yönlendirme yapmamaktan daha zararlıdır: 404 dürüst bir sinyaldir, yanlış 301 değildir.',
            en: 'Bulk-redirecting everything unmatched to the home page. Google treats a redirect to an irrelevant target as a soft 404 and passes none of the old page’s value. A wrong redirect is worse than no redirect: a 404 is an honest signal, a wrong 301 is not.',
          },
          {
            tr: 'Zinciri görmezden gelmek. A → B → C zincirinde her adım değer sızdırır ve Google beşinci adımdan sonra takip etmeyi bırakır. Her zaman doğrudan son hedefe yönlendirin.',
            en: 'Ignoring chains. In A → B → C every hop leaks value, and Google stops following after about five. Always redirect straight to the final destination.',
          },
          {
            tr: 'Apache’de RedirectMatch yerine Redirect kullanmak. Ön ek eşlemesi yüzünden /urun kuralı /urun-detay, /urun/123 ve daha yüzlerce adresi de yakalar; bunu fark etmek için haftalar geçer.',
            en: 'Using Redirect instead of RedirectMatch on Apache. Because it matches by prefix, a rule for /product also catches /product-detail, /product/123 and hundreds of other addresses — and it takes weeks to notice.',
          },
          {
            tr: '301 yerine 302 kullanmak. Geçici yönlendirme sinyali Google’ın eski URL’yi indekste tutmasına ve link değerinin aktarılmamasına yol açar.',
            en: 'Using 302 instead of 301. A temporary signal keeps the old URL in the index and does not pass link equity.',
          },
          {
            tr: 'Sorgu parametrelerini hesaba katmamak. /urunler?kategori=elbise ile /urunler?kategori=canta yalnızca parametreyle ayrışır; yol bazlı bir kural ikisini ayırt edemez. Bu araç böyle satırları ayrı tutar ve uyarır.',
            en: 'Overlooking query strings. /products?category=dress and /products?category=bag differ only by parameter, and a path-based rule cannot tell them apart. This tool keeps such rows separate and warns about them.',
          },
          {
            tr: 'www ve protokol karışımı bırakmak. Yönlendirme hedefleri tek bir kanonik biçime çıkmalı, yoksa her istek iki atlama yapar.',
            en: 'Leaving a mix of www and protocol variants. Redirect targets must resolve to one canonical form, or every request takes two hops.',
          },
          {
            tr: 'Türkçe karakterli URL’leri kodlanmış hâlleriyle test etmemek. Tarayıcı /ürün gösterir, sunucuya /%C3%BCr%C3%BCn gider. Kuralınızı gerçek istekle doğrulayın.',
            en: 'Not testing URLs with non-ASCII characters in their encoded form. The browser shows /ürün while the server receives /%C3%BCr%C3%BCn. Verify your rule with a real request.',
          },
          {
            tr: 'Yönlendirmeleri kurup doğrulamamak. Kural yazmak işin yarısı; eski URL listesini yeniden tarayıp hepsinin tek adımda 200’e çıktığını görmek diğer yarısı.',
            en: 'Deploying the rules and never verifying them. Writing the rules is half the job; recrawling the old URL list and seeing every one reach a 200 in a single hop is the other half.',
          },
        ],
      },
      {
        kind: 'sources',
        heading: { tr: 'Bu bölümdeki iddiaların kaynakları', en: 'Sources for the claims above' },
        items: [
          {
            label: {
              tr: 'Google Search Central — Yönlendirmeler ve Google Arama',
              en: 'Google Search Central — Redirects and Google Search',
            },
            href: 'https://developers.google.com/search/docs/crawling-indexing/301-redirects',
          },
          {
            label: {
              tr: 'Google Search Central — URL değişiklikleriyle site taşıma',
              en: 'Google Search Central — Site moves with URL changes',
            },
            href: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes',
          },
          {
            label: {
              tr: 'Google Search Central — HTTP ve ağ hataları (soft 404 dahil)',
              en: 'Google Search Central — HTTP and network errors (including soft 404s)',
            },
            href: 'https://developers.google.com/search/docs/crawling-indexing/http-network-errors',
          },
        ],
      },
    ],
  },

  {
    id: 'gizlilik',
    heading: { tr: 'Verileriniz nereye gidiyor?', en: 'Where does your data go?' },
    blocks: [
      {
        kind: 'p',
        text: {
          tr: 'Hiçbir yere. Dosya okuma, standartlaştırma, eşleştirme ve dosya üretme adımlarının tamamı tarayıcınızda, bir Web Worker içinde çalışır. Eşleştirme sırasında geliştirici araçlarının ağ sekmesini açık tutarsanız tek bir istek bile göremezsiniz.',
          en: 'Nowhere. Reading the file, normalizing, matching and writing the output all happen in your browser, inside a Web Worker. Keep the network tab open while matching runs and you will not see a single request.',
        },
      },
      {
        kind: 'p',
        text: {
          tr: 'Bu bir gizlilik tercihi olduğu kadar pratik bir tercih: müşteri URL listesi çoğu ajans için gizli bilgidir ve bir web aracına yüklenmesi gerekmez. Yalnızca ayarlarınız (eşik, çıktı biçimi, ağırlıklar) tarayıcınızın yerel deposunda hatırlanır. Verileriniz hatırlanmaz — sayfayı kapattığınızda listeniz de sonuçlarınız da gider. Bu yüzden sonuçlarınızı indirmeden sayfadan ayrılmayın.',
          en: 'That is a practical choice as much as a privacy one: a client’s URL list is confidential information at most agencies and does not need to be uploaded to a web tool. Only your settings — threshold, output format, weights — are remembered in your browser’s local storage. Your data is not: closing the page takes your list and your results with it, which is why you should download the output before you leave.',
        },
      },
    ],
  },
];

export type Faq = { q: Localized; a: Localized };

export const faqs: Faq[] = [
  {
    q: { tr: 'Kaç satır işleyebilir?', en: 'How many rows can it handle?' },
    a: {
      tr: 'Liste başına 2.000 satır. Bu sınır aşıldığında araç işi başlatmaz ve kaç satır olduğunu söyler; sessizce ilk 2.000 satırı almaz, çünkü fark etmediğiniz bir kırpma eksik yönlendirme haritasıyla site taşımanıza yol açar. Daha büyük listeleri bölerek çalıştırın: eşleştirme her eski URL’yi her yeni URL ile karşılaştırdığı için bölmek sonucu bozmaz, yeter ki yeni URL listesinin tamamını her parçada verin.',
      en: 'Two thousand rows per list. Above that the tool refuses to start and tells you the count; it does not silently take the first 2,000, because a truncation you do not notice means migrating a site with an incomplete redirect map. Split larger lists into parts: matching compares every old URL against every new URL, so splitting does not change the result as long as you supply the complete new URL list with each part.',
    },
  },
  {
    q: { tr: 'Dosyam sunucuya yükleniyor mu?', en: 'Is my file uploaded to a server?' },
    a: {
      tr: 'Hayır. Tüm işlem tarayıcınızda çalışır; URL listeniz cihazınızdan çıkmaz. Eşleştirme sırasında ağ sekmesinde hiçbir istek göremezsiniz.',
      en: 'No. Everything runs in your browser and your URL list never leaves your device. You will not see any request in the network tab while matching runs.',
    },
  },
  {
    q: { tr: 'Excel dosyası yükleyebilir miyim?', en: 'Can I upload an Excel file?' },
    a: {
      tr: 'Doğrudan .xlsx yüklemesi yok. Excel’de "Farklı Kaydet → CSV" seçin; araç ayırıcıyı otomatik algılar, Türkçe Excel’in yazdığı noktalı virgül dahil. Alternatif olarak iki kolonu Yapıştır sekmesindeki kutulara kopyalayabilirsiniz.',
      en: 'There is no direct .xlsx upload. In Excel choose "Save As → CSV"; the tool detects the delimiter automatically, including the semicolon that Turkish Excel writes. You can also copy the two columns into the boxes on the Paste tab.',
    },
  },
  {
    q: {
      tr: 'Şablondaki iki kolon birbirine karşılık geliyor mu?',
      en: 'Do the two columns in the template correspond to each other?',
    },
    a: {
      tr: 'Hayır, bu en sık yapılan hata. İki kolon bağımsız listelerdir: eski_url yönlendirilecek URL’leri, yeni_url hedef havuzunu tutar. Aynı satırdaki iki değer birbiriyle eşleştirilmez. Kolonların uzunluğu farklı olabilir — 40 eski ve 900 yeni URL tamamen normaldir.',
      en: 'No, and this is the most common mistake. The two columns are independent lists: old_url holds the URLs to redirect, new_url holds the target pool. The two values on one row are not paired. The columns may have different lengths — 40 old and 900 new URLs is entirely normal.',
    },
  },
  {
    q: { tr: 'Skoru kaçtan itibaren güvenebilirim?', en: 'From what score can I trust a match?' },
    a: {
      tr: '90 ve üstü yüksek güven: toplu onaylayabilirsiniz. 70–89 arası gözden geçirilmeli ve varsayılan görünüm sizi doğrudan buraya bırakır. 50–69 arası zayıf sayılır ve otomatik seçilmez. 50 altı eşleşmedi kabul edilir; varsa üst kategori önerisi gösterilir ama seçilmez.',
      en: '90 and above is high confidence and can be bulk-approved. 70–89 needs review, and the default view drops you straight into it. 50–69 counts as weak and is not selected automatically. Below 50 is treated as no match; a parent-category suggestion is shown when one exists, but never selected.',
    },
  },
  {
    q: {
      tr: 'Eşleşmeyen URL’leri ana sayfaya yönlendirmeli miyim?',
      en: 'Should I redirect unmatched URLs to the home page?',
    },
    a: {
      tr: 'Hayır. Google alakasız bir hedefe yapılan yönlendirmeyi soft 404 sayar ve eski sayfanın değerini aktarmaz. Ya gerçekten ilgili bir üst kategoriye yönlendirin ya da 404/410 bırakın. 404 dürüst bir sinyaldir; yanlış bir 301 değildir.',
      en: 'No. Google treats a redirect to an irrelevant target as a soft 404 and passes none of the old page’s value. Either redirect to a genuinely related parent category or leave a 404/410. A 404 is an honest signal; a wrong 301 is not.',
    },
  },
  {
    q: { tr: 'Türkçe karakterli URL’ler doğru eşleşiyor mu?', en: 'Do URLs with Turkish characters match correctly?' },
    a: {
      tr: 'Evet. Türkçe harfler karşılaştırma öncesinde açık bir eşleme tablosuyla sadeleştirilir, sonra küçük harfe çevrilir — bu sıra önemli, çünkü standart küçültme büyük İ harfini gözle görünmeyen bir artığa dönüştürür ve eşleşmeyi sessizce bozar. Yüzde kodlaması da kelimelere ayırmadan önce çözülür, yani /%C3%BCr%C3%BCn ile /ürün aynı sonucu verir. Ekranda ve çıktıda her zaman sizin orijinal URL’niz görünür.',
      en: 'Yes. Turkish letters are folded to ASCII through an explicit mapping table before lowercasing — the order matters, because a standard lowercase turns the dotted capital İ into an invisible artefact that silently breaks matching. Percent encoding is decoded before tokenization too, so /%C3%BCr%C3%BCn and /ürün give the same result. The interface and every export always show your original URL.',
    },
  },
  {
    q: { tr: 'Sorgu parametreleri ne oluyor?', en: 'What happens to query strings?' },
    a: {
      tr: 'Varsayılan olarak karşılaştırmada yok sayılırlar; ayarlardan dahil edebilirsiniz. Yalnızca parametreyle ayrışan iki eski URL birleştirilmez, ayrı satır olarak kalır ve "yalnızca parametreyle ayrışıyor" uyarısı alır — çünkü yol bazlı bir sunucu kuralı ikisini ayırt edemez ve bunu bilmeniz gerekir.',
      en: 'By default they are ignored in the comparison; you can include them in the settings. Two old URLs that differ only by parameter are not merged: they stay as separate rows carrying a "differs only by query string" warning, because a path-based server rule cannot tell them apart and you need to know that.',
    },
  },
  {
    q: { tr: 'Alan adı değiştiriyorum, çıktı ne olacak?', en: 'I am changing domain — what does the output look like?' },
    a: {
      tr: 'Araç iki listede farklı alan adları görürse bunu size bildirir ve çıktı biçimini otomatik olarak tam URL’ye çevirir; hedefler göreli yol olarak yazılsa eski alan adına işaret ederdi. Hedef alan adını ayarlardan değiştirebilirsiniz.',
      en: 'If the tool sees different domains in the two lists it tells you and switches the output to absolute URLs automatically; written as relative paths the targets would point back at the old domain. You can change the target domain in the settings.',
    },
  },
  {
    q: { tr: 'Zincir ve döngü uyarıları ne anlama geliyor?', en: 'What do the chain and loop warnings mean?' },
    a: {
      tr: 'Zincir, hedef URL’nin eski listenizde de bulunması demektir: bu yönlendirme başka bir yönlendirmeye çıkar. Döngü, A → B ve B → A durumudur ve sonsuz yönlendirme üretir. İkisi de yayına almadan önce düzeltilmelidir; zincir her adımda değer sızdırır, döngü sayfayı tamamen erişilemez yapar.',
      en: 'A chain means the target is also in your old list: this redirect lands on another redirect. A loop is A → B together with B → A, which produces an infinite redirect. Both must be fixed before deploying — a chain leaks value at every hop, and a loop makes the page completely unreachable.',
    },
  },
];
