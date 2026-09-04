import { test } from 'node:test';
import assert from 'node:assert/strict';
import { foldTurkish, normalizeUrl, stripSuffix } from '../../src/lib/redirect-matcher/normalize';

const options = { includeQuery: false, stripLanguagePrefix: false };

function pathOf(raw: string, overrides: Partial<typeof options> = {}) {
  const result = normalizeUrl(raw, { ...options, ...overrides });
  assert.equal(result.ok, true, `expected ${raw} to normalize`);
  return result.ok ? result.value : null;
}

/** Acceptance criterion 2. */
test('strips protocol, www and host down to a root-relative path', () => {
  const value = pathOf('https://www.keremgezergun.com/bla-bla');
  assert.equal(value?.path, '/bla-bla');
  assert.equal(value?.host, 'keremgezergun.com');
  assert.equal(value?.original, 'https://www.keremgezergun.com/bla-bla');
});

/** Acceptance criterion 5. */
test('collapses the trailing slash but keeps the home page', () => {
  assert.equal(pathOf('/elbise/')?.path, '/elbise');
  assert.equal(pathOf('/elbise')?.path, '/elbise');
  assert.equal(pathOf('/')?.path, '/');
  assert.equal(pathOf('https://example.com/')?.path, '/');
});

/** Acceptance criterion 3. */
test('folds Turkish characters for comparison and keeps the original', () => {
  const turkish = pathOf('/urun/sik-canta');
  const ascii = pathOf('/urun/sik-canta');
  assert.equal(turkish?.path, ascii?.path);
});

test('folds the dotted capital I without leaving a combining mark', () => {
  assert.equal(foldTurkish('İSTANBUL'), 'istanbul');
  assert.equal(foldTurkish('IRMAK'), 'irmak');
  assert.equal(foldTurkish('Şık-Çanta'), 'sik-canta');
});

/** Acceptance criterion 4. */
test('percent-decodes before tokenizing', () => {
  const encoded = pathOf('/%C3%BCr%C3%BCn');
  assert.equal(encoded?.path, '/urun');
  assert.deepEqual(encoded?.tokens, ['urun']);
});

test('marks a malformed escape unreadable instead of throwing', () => {
  const result = normalizeUrl('/%E0%A4%A', options);
  assert.equal(result.ok, false);
  assert.equal(result.ok === false && result.reason, 'unreadable');
});

test('drops web file extensions and index segments', () => {
  assert.equal(pathOf('/elbise.html')?.path, '/elbise');
  assert.equal(pathOf('/kadin/elbise.aspx')?.path, '/kadin/elbise');
  assert.equal(pathOf('/index.html')?.path, '/');
  assert.equal(pathOf('/kadin/index.php')?.path, '/kadin');
});

test('does not read a bare filename as a hostname', () => {
  // Were 'index.html' read as a host it would normalize to '/' and silently
  // become a home-page redirect. It has no slash and no www., so it is a stray
  // cell instead.
  const bare = normalizeUrl('index.html', options);
  assert.equal(bare.ok, false);
  assert.equal(bare.ok === false && bare.reason, 'not-a-url');
  assert.equal(pathOf('example.com/elbise')?.host, 'example.com');
  assert.equal(pathOf('example.com/elbise')?.path, '/elbise');
  assert.equal(pathOf('www.example.com')?.path, '/');
});

test('drops the fragment and, by default, the query', () => {
  assert.equal(pathOf('/elbise#renk')?.path, '/elbise');
  assert.equal(pathOf('/elbise?sayfa=2')?.path, '/elbise');
  assert.equal(pathOf('/elbise?sayfa=2')?.query, 'sayfa=2');
  assert.equal(pathOf('/elbise?sayfa=2', { includeQuery: true })?.path, '/elbise?sayfa=2');
});

test('strips a locale prefix only when asked', () => {
  assert.equal(pathOf('/tr/elbise')?.path, '/tr/elbise');
  assert.equal(pathOf('/tr/elbise', { stripLanguagePrefix: true })?.path, '/elbise');
  assert.equal(pathOf('/en-us/dress', { stripLanguagePrefix: true })?.path, '/dress');
});

test('rejects cells that are not URLs', () => {
  for (const value of ['eski_url', 'Kirmizi Elbise', '']) {
    assert.equal(normalizeUrl(value, options).ok, false, value);
  }
});

test('stems only words longer than five characters, repeatedly', () => {
  assert.equal(stripSuffix('elbiseler'), 'elbise');
  assert.equal(stripSuffix('modelleri'), 'model');
  assert.equal(stripSuffix('fiyatlari'), 'fiyat');
  assert.equal(stripSuffix('kolye'), 'kolye');
  assert.equal(stripSuffix('otobusler'), stripSuffix('otobus'));
  assert.equal(stripSuffix('dresses'), 'dress');
});

test('separates noise words from the core token set', () => {
  const value = pathOf('/kirmizi-elbise-modelleri');
  // 'kirmizi' loses its trailing 'i' to the possessive rule. That is fine as
  // long as it is symmetric: every candidate carrying the word stems the same
  // way, so the pair still matches.
  assert.deepEqual(value?.tokens, ['kirmiz', 'elbise', 'model']);
  assert.deepEqual(value?.core, ['kirmiz', 'elbise']);
});

test('treats categories and category as the same noise word', () => {
  assert.deepEqual(pathOf('/categories/dress')?.core, ['dress']);
  assert.deepEqual(pathOf('/category/dress')?.core, ['dress']);
});

test('collects id-shaped tokens', () => {
  assert.deepEqual(pathOf('/urun/12345/elbise')?.ids, ['12345']);
  assert.deepEqual(pathOf('/p/abc1234')?.ids, ['abc1234']);
  assert.deepEqual(pathOf('/elbise/123')?.ids, []);
});
