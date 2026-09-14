import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_SETTINGS } from '../../src/lib/redirect-matcher/defaults';
import { runMatch } from '../../src/lib/redirect-matcher/match';
import { ROW_LIMIT, prepareInputs, rowLimitNotices } from '../../src/lib/redirect-matcher/parse';

const options = { includeQuery: false, stripLanguagePrefix: false };

const WORDS = [
  'kirmizi', 'elbise', 'modelleri', 'kadin', 'erkek', 'ayakkabi', 'canta', 'spor',
  'cocuk', 'bebek', 'takim', 'gomlek', 'pantolon', 'etek', 'ceket', 'mont',
  'sneaker', 'bot', 'sandalet', 'terlik', 'kolye', 'yuzuk', 'kupe', 'bileklik',
  'saat', 'gozluk', 'kemer', 'cuzdan', 'sapka', 'atki', 'eldiven', 'corap',
  'pijama', 'mayo', 'bikini', 'fiyatlari', 'indirimli', 'outlet', 'abiye', 'triko',
];

/** Deterministic pseudo-random URLs, so a slow run is reproducible. */
function urls(count: number, seed: number): string[] {
  let state = seed;
  const next = (limit: number) => {
    state = (state * 1103515245 + 12345) & 0x7fffffff;
    return state % limit;
  };
  const list: string[] = [];
  for (let i = 0; i < count; i += 1) {
    const depth = 1 + next(3);
    const segments: string[] = [];
    for (let d = 0; d < depth; d += 1) {
      const words = 1 + next(3);
      segments.push(Array.from({ length: words }, () => WORDS[next(WORDS.length)]).join('-'));
    }
    list.push(`/${segments.join('/')}-${i}`);
  }
  return list;
}

/** Acceptance criterion 7. */
test('the row limit is per list and stops the job', () => {
  assert.equal(ROW_LIMIT, 2000);
  assert.deepEqual(rowLimitNotices(2000, 2000), []);
  const notices = rowLimitNotices(2001, 10);
  assert.equal(notices.length, 1);
  assert.deepEqual(notices[0], { kind: 'row-limit', side: 'old', count: 2001, limit: 2000 });
});

/** Acceptance criterion 6, minus the UI: the full 4M pairs, chunked. */
test('matches 2000 x 2000 while reporting progress', () => {
  const input = prepareInputs(urls(ROW_LIMIT, 7), urls(ROW_LIMIT, 991), options);
  // A handful of generated paths coincide across the two lists and are
  // classified as needing no redirect, so the counts land just under the limit.
  assert.ok(input.old.length > ROW_LIMIT - 20, `only ${input.old.length} sources`);
  assert.equal(input.new.length, ROW_LIMIT);
  const sourceCount = input.old.length;

  const started = Date.now();
  const run = runMatch(input, DEFAULT_SETTINGS);
  const phases = new Set<string>();
  let updates = 0;
  let lastDone = -1;

  let step = run.next();
  while (!step.done) {
    phases.add(step.value.phase);
    if (step.value.phase === 'matching') {
      // Progress has to move forward, or the bar is a decoration.
      assert.ok(step.value.done > lastDone, 'progress must advance');
      lastDone = step.value.done;
      updates += 1;
    }
    step = run.next();
  }
  const elapsed = Date.now() - started;

  assert.deepEqual([...phases].sort(), ['matching', 'normalizing', 'warnings']);
  assert.ok(updates >= 50, `expected frequent progress reports, got ${updates}`);
  assert.equal(step.value.rows.length, sourceCount);
  assert.equal(lastDone, sourceCount);
  // Generous: this guards against an accidental quadratic blow-up in a helper,
  // not against a slow CI runner.
  assert.ok(elapsed < 60_000, `matching took ${elapsed}ms`);
  console.log(`      2000x2000 matched in ${elapsed}ms`);
});

test('cancelling mid-run leaves the generator finished and does no more work', () => {
  const input = prepareInputs(urls(200, 3), urls(200, 5), options);
  const run = runMatch(input, DEFAULT_SETTINGS);
  run.next();
  run.next();
  const stopped = run.return({ rows: [], old: [], new: [] });
  assert.equal(stopped.done, true);
  assert.equal(run.next().done, true);
});
