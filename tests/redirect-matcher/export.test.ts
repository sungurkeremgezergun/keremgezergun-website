import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_SETTINGS } from '../../src/lib/redirect-matcher/defaults';
import {
  CSV_BOM,
  buildExportRows,
  toCsv,
  toHtaccess,
  toNginx,
  toRedirectionCsv,
  type CsvLabels,
} from '../../src/lib/redirect-matcher/export';
import { runMatch } from '../../src/lib/redirect-matcher/match';
import { prepareInputs } from '../../src/lib/redirect-matcher/parse';
import type { MatchReport, MatcherSettings } from '../../src/lib/redirect-matcher/types';

const options = { includeQuery: false, stripLanguagePrefix: false };

const labels: CsvLabels = {
  header: ['eski_url', 'yeni_url', 'skor', 'guven', 'gerekce', 'uyari'],
  confidence: { high: 'Yuksek', review: 'Gozden gecir', weak: 'Zayif', none: 'Eslesme yok' },
  reason: {
    exact: 'Birebir',
    'id-match': 'ID eslesmesi',
    'same-slug': 'Ayni slug',
    'broader-page': 'Daha genel sayfa',
    'narrower-page': 'Daha dar sayfa',
    'parent-suggestion': 'Ust kategori onerisi',
    similar: 'Benzer',
  },
  warning: {
    chain: 'Zincir',
    loop: 'Dongu',
    'many-to-one': 'Coklu hedef',
    'broader-page': 'Daha genel sayfa',
    'narrower-page': 'Daha dar sayfa',
    ambiguous: 'Belirsiz',
    'query-only': 'Yalnizca parametreyle ayrisiyor',
    unreadable: 'Okunamadi',
  },
};

function report(
  oldValues: string[],
  newValues: string[],
  overrides: Partial<MatcherSettings> = {},
): { report: MatchReport; settings: MatcherSettings } {
  const settings = { ...DEFAULT_SETTINGS, ...overrides };
  const input = prepareInputs(oldValues, newValues, options);
  const run = runMatch(input, settings);
  let step = run.next();
  while (!step.done) step = run.next();
  // `selected` is user-owned state seeded from the confidence band. These tests
  // exercise the export layer, not the bands, so they stand in for the
  // "approve everything" bulk action.
  for (const row of step.value.rows) row.selected = row.chosen >= 0;
  return { report: step.value, settings };
}

/** Acceptance criterion 10. */
test('CSV starts with a BOM so Excel reads Turkish correctly', () => {
  const { report: result, settings } = report(['/kadin/kirmizi-elbise'], ['/kadin-giyim/kirmizi-elbise']);
  const csv = toCsv(buildExportRows(result, settings).included, labels);
  assert.ok(csv.startsWith(CSV_BOM));
  assert.equal(CSV_BOM.charCodeAt(0), 0xfeff);
});

/** Acceptance criterion 2, on the way out. */
test('exports the original URL, never the folded comparison form', () => {
  const { report: result, settings } = report(
    ['https://www.eski.example.com/%C3%9Cr%C3%BCn/Sik-Canta'],
    ['https://www.yeni.example.com/urun/sik-canta'],
  );
  const [row] = buildExportRows(result, settings).included;
  assert.equal(row.from, 'https://www.eski.example.com/%C3%9Cr%C3%BCn/Sik-Canta');
  // The server rule has to match the path the visitor actually requests, with
  // its original case and encoding intact.
  assert.equal(row.fromPath, '/%C3%9Cr%C3%BCn/Sik-Canta');
  assert.equal(row.toOutput, '/urun/sik-canta');
});

test('renders absolute targets when the output setting asks for them', () => {
  const { report: result, settings } = report(
    ['https://eski.example.com/elbise'],
    ['https://yeni.example.com/kadin-elbise'],
    { absoluteOutput: true, outputHost: 'yeni.example.com' },
  );
  const [row] = buildExportRows(result, settings).included;
  assert.equal(row.toOutput, 'https://yeni.example.com/kadin-elbise');
});

test('Apache output anchors the pattern instead of matching by prefix', () => {
  const { report: result, settings } = report(['/elbise-x'], ['/kadin-elbise-x']);
  const rules = toHtaccess(buildExportRows(result, settings).included, []);
  assert.match(rules, /RedirectMatch 301 "\^\/elbise-x\/\?\$" "\/kadin-elbise-x"/);
  // A bare `Redirect` would also catch /elbise-x-mavi and everything below it.
  assert.ok(!/^Redirect 301/m.test(rules));
});

test('Apache output escapes regex metacharacters and quotes', () => {
  const { report: result, settings } = report(
    ['/urun+ozel/kampanya(2019).html'],
    ['/urun-ozel/kampanya-2019'],
  );
  const rules = toHtaccess(buildExportRows(result, settings).included, []);
  assert.ok(rules.includes('\\+'), 'plus must be escaped');
  assert.ok(rules.includes('\\('), 'parenthesis must be escaped');
  assert.ok(rules.includes('\\.'), 'dot must be escaped');
});

test('nginx output quotes both sides and maps on $uri', () => {
  const { report: result, settings } = report(['/elbise-y'], ['/kadin-elbise-y']);
  const rules = toNginx(buildExportRows(result, settings).included, []);
  assert.ok(rules.includes('map $uri $redirect_target {'));
  assert.ok(rules.includes('default "";'));
  assert.ok(rules.includes('"/elbise-y" "/kadin-elbise-y";'));
  assert.ok(!rules.includes('$request_uri'), '$request_uri would include the query string');
});

test('server output escapes a quote in the path rather than breaking the config', () => {
  const { report: result, settings } = report(['/urun/a"b-kazak'], ['/urun/ab-kazak']);
  const rows = buildExportRows(result, settings).included;
  assert.equal(rows.length, 1);
  assert.ok(toNginx(rows, []).includes('\\"'));
  assert.ok(toHtaccess(rows, []).includes('\\"'));
});

test('server output drops the query string and says so', () => {
  const { report: result, settings } = report(
    ['/elbise?sayfa=1', '/elbise?sayfa=2'],
    ['/kadin-elbise'],
  );
  const rows = buildExportRows(result, settings).included;
  const rules = toHtaccess(rows, []);
  const ruleLines = rules.split('\n').filter((line) => line.startsWith('RedirectMatch'));
  assert.ok(ruleLines.length > 0);
  for (const line of ruleLines) {
    assert.ok(!line.includes('?sayfa'), `the pattern must not carry the query string: ${line}`);
  }
  // The comment does keep the full path, so the user can see which rows
  // collapsed onto the same rule.
  assert.ok(rules.includes('query string ignored'), 'the collision has to be stated');
});

test('the Redirection plugin format carries paths and a 301', () => {
  const { report: result, settings } = report(['/elbise-z'], ['/kadin-elbise-z']);
  const csv = toRedirectionCsv(buildExportRows(result, settings).included);
  assert.ok(csv.includes('source,target,regex,code'));
  assert.ok(csv.includes('/elbise-z,/kadin-elbise-z,false,301'));
});

test('unmatched rows are separated from the export set', () => {
  const { report: result, settings } = report(
    ['/tamamen-alakasiz-bir-sayfa-basligi'],
    ['/ayakkabi'],
  );
  const sets = buildExportRows(result, settings);
  assert.equal(sets.included.length, 0);
  assert.equal(sets.unmatched.length, 1);
});

test('CSV quotes a cell containing the delimiter or a quote', () => {
  const { report: result, settings } = report(['/a,b-kazak'], ['/ab-kazak']);
  const csv = toCsv(buildExportRows(result, settings).included, labels);
  assert.ok(csv.includes('"/a,b-kazak"'));
});
