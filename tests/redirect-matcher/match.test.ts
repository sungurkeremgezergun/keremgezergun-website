import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_SETTINGS } from '../../src/lib/redirect-matcher/defaults';
import { runMatch } from '../../src/lib/redirect-matcher/match';
import { prepareInputs } from '../../src/lib/redirect-matcher/parse';
import type { MatchReport, MatcherSettings } from '../../src/lib/redirect-matcher/types';

const options = { includeQuery: false, stripLanguagePrefix: false };

function match(
  oldValues: string[],
  newValues: string[],
  overrides: Partial<MatcherSettings> = {},
): MatchReport {
  const input = prepareInputs(oldValues, newValues, {
    includeQuery: overrides.includeQuery ?? options.includeQuery,
    stripLanguagePrefix: overrides.stripLanguagePrefix ?? options.stripLanguagePrefix,
  });
  const run = runMatch(input, { ...DEFAULT_SETTINGS, ...overrides });
  let step = run.next();
  while (!step.done) step = run.next();
  return step.value;
}

/** Acceptance criterion 1 — the example the whole coverage rule exists for. */
test('ranks the equally specific candidate far above the broader one', () => {
  const report = match(['/kirmizi-elbise-modelleri'], ['/kirmizi-elbise', '/elbise']);
  const [row] = report.rows;
  const ranked = row.candidates.map((candidate) => ({
    path: report.new[candidate.target].path,
    score: candidate.score,
    reasons: candidate.reasons,
  }));

  assert.equal(ranked[0].path, '/kirmizi-elbise');
  assert.equal(ranked[1].path, '/elbise');
  assert.ok(
    ranked[0].score - ranked[1].score >= 20,
    `expected a clear gap, got ${ranked[0].score} vs ${ranked[1].score}`,
  );
  assert.ok(ranked[1].reasons.includes('broader-page'), 'the general page must be labelled');
  assert.ok(!ranked[0].reasons.includes('broader-page'), 'the exact-set page must not be capped');
  assert.equal(row.chosen, 0);
  assert.equal(row.selected, true);
});

test('caps a broader candidate at 65 and a narrower one at 60', () => {
  const broader = match(['/kadin/kirmizi-elbise'], ['/kadin']);
  assert.ok(broader.rows[0].candidates[0].score <= 65);

  const narrower = match(['/elbise'], ['/elbise/kirmizi-uzun-abiye']);
  assert.ok(narrower.rows[0].candidates[0].score <= 60);
});

test('an identical last segment does not beat the coverage ceiling', () => {
  // '/elbise' shares the final segment with '/kadin/elbise' but is still the
  // broader page, so the 90 floor must not apply.
  const report = match(['/kadin/elbise'], ['/elbise']);
  const candidate = report.rows[0].candidates[0];
  assert.ok(candidate.score <= 65, `expected a ceiling, got ${candidate.score}`);
  assert.ok(candidate.reasons.includes('broader-page'));
});

test('an identical slug in a different directory scores at least 90', () => {
  const report = match(['/kadin/kirmizi-abiye'], ['/outlet/kirmizi-abiye']);
  assert.ok(report.rows[0].candidates[0].score >= 90);
  assert.ok(report.rows[0].candidates[0].reasons.includes('same-slug'));
});

test('a shared product id overrides the coverage ceiling', () => {
  const report = match(['/urun/12345/kirmizi-elbise-modelleri'], ['/p/12345']);
  const candidate = report.rows[0].candidates[0];
  assert.ok(candidate.score >= 95, `expected an id floor, got ${candidate.score}`);
  assert.ok(candidate.reasons.includes('id-match'));
});

/** Acceptance criterion 3. */
test('Turkish spelling matches its ASCII equivalent', () => {
  const report = match(
    ['https://eski.example.com/urun/sik-canta'],
    ['https://yeni.example.com/urun/sik-canta'],
  );
  assert.equal(report.rows[0].candidates[0].score, 100);
});

/** Acceptance criterion 4. */
test('percent-encoded and plain spellings collapse into one row', () => {
  const report = match(['/urun/sik-canta', '/%75run/sik-canta'], ['/urun/sik-canta-yeni']);
  assert.equal(report.rows.length, 1, 'the two spellings are the same URL');
  assert.ok(report.rows[0].candidates[0].score >= 70);
});

test('no match leaves the row empty and offers the parent directory', () => {
  const report = match(['/kadin/elbise/kirmizi-uzun-abiye-model-7'], ['/kadin', '/ayakkabi']);
  const [row] = report.rows;
  assert.equal(row.chosen, -1);
  assert.equal(row.selected, false);
  assert.equal(row.confidence, 'none');
  assert.ok(
    row.candidates.some((candidate) => candidate.reasons.includes('parent-suggestion')),
    'expected a parent-directory suggestion',
  );
});

test('an exact path on a different host still needs a redirect', () => {
  // The whole point of a domain migration: every path exists on both sides.
  // Treating these as "nothing to do" would delete the entire redirect map.
  const report = match(['https://old.example.com/Elbise/'], ['https://new.example.com/elbise']);
  assert.equal(report.rows.length, 1);
  assert.equal(report.rows[0].candidates[0].score, 100);
  assert.ok(report.rows[0].candidates[0].reasons.includes('exact'));
});

test('an exact path on the same host needs no redirect', () => {
  const report = match(['https://example.com/Elbise/'], ['https://example.com/elbise']);
  assert.equal(report.rows.length, 0);
});

/** Acceptance criterion 9. */
test('flags a redirect chain in a domain migration', () => {
  // On the same host a target that is also an old URL is classified as needing
  // no redirect, so a chain can only arise once the hosts differ.
  const report = match(
    ['https://eski.example.com/mavi-kazak', 'https://eski.example.com/lacivert-kazak'],
    ['https://yeni.example.com/lacivert-kazak', 'https://yeni.example.com/kazak-koleksiyon'],
  );
  const chained = report.rows.find((row) => row.warnings.includes('chain'));
  assert.ok(chained, 'expected a row pointing at another old URL');
});

test('flags a two-way loop', () => {
  const report = match(
    ['https://eski.example.com/a-kazak', 'https://eski.example.com/b-kazak'],
    ['https://yeni.example.com/b-kazak', 'https://yeni.example.com/a-kazak'],
  );
  const looped = report.rows.filter((row) => row.warnings.includes('loop'));
  assert.equal(looped.length, 2, 'both rows are part of the loop');
});

test('flags many-to-one fanout above the limit', () => {
  const sources = Array.from({ length: 25 }, (_, index) => `/eski-kategori-${index}`);
  const report = match(sources, ['/eski-kategori']);
  const warned = report.rows.filter((row) => row.warnings.includes('many-to-one'));
  assert.ok(warned.length > 0, 'expected a many-to-one warning');
});

test('rows that differ only by query string stay separate and are flagged', () => {
  const report = match(['/elbise?sayfa=1', '/elbise?sayfa=2'], ['/kadin-elbise']);
  assert.equal(report.rows.length, 2);
  for (const row of report.rows) assert.ok(row.warnings.includes('query-only'));
});

test('a source already present in the new list needs no redirect', () => {
  const input = prepareInputs(['/elbise', '/canta'], ['/elbise', '/yeni-canta'], options);
  assert.deepEqual(input.unchanged, ['/elbise']);
  assert.equal(input.old.length, 1);
});
