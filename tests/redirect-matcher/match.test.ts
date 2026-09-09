import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_SETTINGS } from '../../src/lib/redirect-matcher/defaults';
import { runMatch } from '../../src/lib/redirect-matcher/match';
import { stripSuffix } from '../../src/lib/redirect-matcher/normalize';
import { prepareInputs } from '../../src/lib/redirect-matcher/parse';
import { withWarnings, type SiteRef } from '../../src/lib/redirect-matcher/warnings';
import type {
  MatchReport,
  MatchRow,
  MatcherSettings,
} from '../../src/lib/redirect-matcher/types';

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

test('a renamed category is not treated as a narrower page', () => {
  // The most common migration there is. On the flattened core sets the extra
  // word 'giyim' makes the source a subset of the candidate, which would cap
  // the obviously correct answer at 60.
  const report = match(
    ['/kadin/kirmizi-elbise-modelleri'],
    ['/kadin-giyim/kirmizi-elbise', '/kadin-giyim/elbise'],
  );
  const best = report.rows[0].candidates[0];
  assert.equal(report.new[best.target].path, '/kadin-giyim/kirmizi-elbise');
  assert.ok(best.score >= 85, `expected a high score, got ${best.score}`);
  assert.ok(!best.reasons.includes('narrower-page'), 'must not be capped');
});

test('a genuinely narrower page at the same depth is still capped', () => {
  const report = match(['/ayakkabi/spor-ayakkabi'], ['/ayakkabi/kadin-spor-ayakkabi']);
  const best = report.rows[0].candidates[0];
  assert.ok(best.reasons.includes('narrower-page'));
  assert.ok(best.score <= 60, `expected a ceiling, got ${best.score}`);
});

test('a single common word in the slug does not earn the 90 floor', () => {
  // '/kadin/elbise' and '/erkek/elbise' share their last segment, so the floor
  // as the brief wrote it would score a women's-to-men's redirect at 90.
  const crowd = Array.from({ length: 30 }, (_, index) => `/erkek/elbise-${index}`);
  const report = match(['/kadin/elbise'], ['/erkek/elbise', ...crowd]);
  const best = report.rows[0].candidates[0];
  assert.equal(report.new[best.target].path, '/erkek/elbise');
  assert.ok(best.score < 70, `expected no floor, got ${best.score}`);
  assert.ok(!best.reasons.includes('same-slug'));
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

test('a softened Turkish consonant still finds its root', () => {
  // gömlek -> gömleği. Strip the possessive and you get `gomleg`, which matches
  // nothing; the possessive form of every word ending in k, p or t would fail.
  const report = match(['/erkek/gomlegi'], ['/erkek-giyim/gomlek', '/erkek-giyim/elbise']);
  const best = report.rows[0].candidates[0];
  assert.equal(report.new[best.target].path, '/erkek-giyim/gomlek');
  assert.ok(best.score >= 85, `expected a high score, got ${best.score}`);

  assert.equal(stripSuffix('gomlegi'), stripSuffix('gomlek'));
  assert.equal(stripSuffix('bardagi'), stripSuffix('bardak'));
  assert.equal(stripSuffix('kitabi'), stripSuffix('kitap'));
  assert.equal(stripSuffix('kanadi'), stripSuffix('kanat'));
  // The English plural must not be softened: weblogs is not weblok.
  assert.equal(stripSuffix('weblogs'), 'weblog');
});

test('a lone number is not a distinctive slug', () => {
  // Both slugs reduce to the word "2" once the filler is set aside, and the
  // 90 floor turned two junk pagination URLs into a high-confidence match.
  const crowd = Array.from({ length: 25 }, (_, index) => `/kategori/urun-${index}`);
  const report = match(['/urunler/tum-urunler-sayfa-2'], ['/sayfa/2', ...crowd]);
  const best = report.rows[0].candidates[0];
  assert.ok(best.score < 70, `expected no floor, got ${best.score}`);
  assert.ok(!best.reasons.includes('same-slug'));
});

test('the 90 floor does not flatten the ordering it lands on', () => {
  // Both parents earn the floor, so both sit on exactly 90; the pre-floor score
  // is what separates the right parent from the wrong one.
  const report = match(
    ['/kadin/kirmizi-elbise-modelleri'],
    ['/erkek-giyim/kirmizi-elbise', '/kadin-giyim/kirmizi-elbise'],
  );
  const [row] = report.rows;
  assert.equal(report.new[row.candidates[0].target].path, '/kadin-giyim/kirmizi-elbise');
  assert.ok(!row.warnings.includes('ambiguous'), 'the tie must be resolvable');
});

test('unrelated URLs are left unmatched rather than forced onto something', () => {
  const catalogue = [
    '/kadin-giyim/kirmizi-elbise',
    '/erkek-giyim/gomlek',
    '/ayakkabi/kosu-ayakkabi',
    '/aksesuar/gumus-kolye',
    '/hakkimizda',
    '/iletisim',
  ];
  const strangers = [
    '/kariyer/is-basvuru-formu-2018',
    '/destek/fatura-iade-sureci',
    '/kvkk-aydinlatma-metni',
    '/zzz-tamamen-alakasiz-bir-sayfa',
    '/xyz123abc',
  ];
  const report = match(strangers, catalogue);
  for (const row of report.rows) {
    const path = report.old[row.source].path;
    assert.equal(row.chosen, -1, `${path} should not have been matched`);
    assert.equal(row.selected, false, `${path} must not be exported`);
    assert.ok(!row.warnings.includes('ambiguous'), `${path} has no match to be ambiguous about`);
  }
});

test('a short word does not latch onto a longer one that contains it', () => {
  // `kolye` is five letters, so the stemmer must leave it alone; reducing it to
  // `kol` would invent a match out of nothing.
  const report = match(['/kol'], ['/aksesuar/kolye', '/aksesuar/altin-yuzuk']);
  assert.equal(report.rows[0].chosen, -1);
  assert.ok(report.rows[0].candidates[0].score < 50);
});

/** Acceptance criterion 9. */
test('a domain migration is not a chain or a loop', () => {
  // Every path exists on both sides of a migration, so comparing paths alone
  // marks every single row a chain and a loop -- the warning column would be
  // useless in the tool's main use case.
  const report = match(
    ['https://eski.example.com/kazak-mavi', 'https://eski.example.com/kazak-lacivert'],
    ['https://yeni.example.com/kazak-mavi', 'https://yeni.example.com/kazak-lacivert'],
  );
  assert.equal(report.rows.length, 2);
  for (const row of report.rows) {
    assert.ok(!row.warnings.includes('chain'), `unexpected chain on row ${row.source}`);
    assert.ok(!row.warnings.includes('loop'), `unexpected loop on row ${row.source}`);
  }
});

test('retargeting a row onto another old URL raises a chain, then a loop', () => {
  // At match time a target that is also an old URL has already been separated
  // out as needing no redirect, so a hand-picked target is the realistic way to
  // build a chain. The warnings are recomputed from the resolved targets.
  const sources: SiteRef[] = [{ path: '/a-kazak' }, { path: '/b-kazak' }];
  const rows: MatchRow[] = sources.map((_, index) => ({
    source: index,
    candidates: [],
    chosen: -1,
    confidence: 'none',
    warnings: ['ambiguous'],
    selected: false,
  }));

  const pointing = ['/b-kazak', '/c-kazak'];
  const chained = withWarnings(rows, sources, (row) => ({ path: pointing[row.source] }));
  assert.ok(chained[0].warnings.includes('chain'), 'a -> b is a chain');
  assert.ok(!chained[0].warnings.includes('loop'), 'b does not point back yet');
  assert.ok(chained[0].warnings.includes('ambiguous'), 'warnings it does not own are kept');

  const both = ['/b-kazak', '/a-kazak'];
  const looped = withWarnings(rows, sources, (row) => ({ path: both[row.source] }));
  assert.equal(looped.filter((row) => row.warnings.includes('loop')).length, 2);

  // Recomputing must clear a warning that no longer applies, not accumulate.
  const cleared = withWarnings(looped, sources, () => undefined);
  assert.ok(cleared.every((row) => !row.warnings.includes('chain')));
  assert.ok(cleared.every((row) => !row.warnings.includes('loop')));
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
