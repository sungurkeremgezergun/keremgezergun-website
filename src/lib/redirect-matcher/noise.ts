/**
 * Words that carry almost no identity in an e-commerce URL.
 *
 * These are down-weighted, never deleted. Deleting them makes
 * `/elbise-fiyatlari` and `/elbise-modelleri` look identical, which produces a
 * fake 100% match — the exact failure the coverage rules exist to prevent.
 * The one place the noise-free set is used is the subset test in score.ts.
 *
 * Both languages live in one list. A Turkish word never appears in an English
 * URL and vice versa, so the union costs nothing and keeps the English page
 * scoring as well as the Turkish one.
 */
export const NOISE_WORDS: ReadonlySet<string> = new Set([
  // Turkish
  'model',
  'modelleri',
  'cesitleri',
  'cesit',
  'fiyat',
  'fiyatlari',
  'indirimli',
  'indirim',
  'kampanyali',
  'kampanya',
  'satin',
  'al',
  'urun',
  'urunler',
  'sayfa',
  'detay',
  'kategori',
  'yeni',
  'en',
  'iyi',
  'ucuz',
  'online',
  'tum',
  'liste',
  // English
  'product',
  'products',
  'item',
  'items',
  'shop',
  'store',
  'buy',
  'price',
  'prices',
  'cheap',
  'sale',
  'discount',
  'page',
  'category',
  'categories',
  'collection',
  'collections',
  'best',
  'top',
  'all',
  'detail',
  'details',
  'list',
]);

/** Multiplier applied to a noise word's inverse-document-frequency weight. */
export const NOISE_WEIGHT = 0.15;
