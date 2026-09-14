import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseDelimited, prepareInputs, readColumns, splitPasted } from '../../src/lib/redirect-matcher/parse';
import { templateCsv } from '../../src/lib/redirect-matcher/template';

const options = { includeQuery: false, stripLanguagePrefix: false };
const TAB = '\t';

/** Acceptance criterion 12. */
test('the downloaded template reads back with no choices to make', () => {
  const table = parseDelimited(templateCsv('tr'));
  const columns = readColumns(table.rows);
  assert.equal(table.delimiter, ';');
  assert.equal(columns.assumedColumns, false);
  assert.equal(columns.singleColumn, false);
  assert.ok(columns.oldValues.length > 0);
  assert.ok(columns.newValues.length > 0);
  // The example rows must not line up, or users fill the file as a pairing table.
  assert.notEqual(columns.oldValues.length, columns.newValues.length);
});

test('the English template uses the English headers', () => {
  const columns = readColumns(parseDelimited(templateCsv('en')).rows);
  assert.ok(columns.oldValues.length > 0);
  assert.equal(columns.assumedColumns, false);
});

/** Acceptance criterion 13. */
test('detects the delimiter Turkish Excel writes', () => {
  const semicolon = parseDelimited('eski_url;yeni_url\n/a;/b\n/c;/d\n');
  assert.equal(semicolon.delimiter, ';');
  assert.deepEqual(semicolon.rows[1], ['/a', '/b']);

  const comma = parseDelimited('eski_url,yeni_url\n/a,/b\n');
  assert.equal(comma.delimiter, ',');

  const tabbed = parseDelimited(`eski_url${TAB}yeni_url\n/a${TAB}/b\n`);
  assert.equal(tabbed.delimiter, TAB);
});

test('handles quoted fields, doubled quotes and embedded newlines', () => {
  const table = parseDelimited('eski_url,yeni_url\n"/a,b","/c ""d"""\n"/multi\nline",/e\n');
  assert.deepEqual(table.rows[1], ['/a,b', '/c "d"']);
  assert.deepEqual(table.rows[2], ['/multi\nline', '/e']);
});

test('skips comment lines and blank rows', () => {
  const table = parseDelimited('# a note\n\neski_url,yeni_url\n/a,/b\n#  another\n');
  assert.equal(table.rows.length, 2);
  assert.deepEqual(table.rows[0], ['eski_url', 'yeni_url']);
});

test('accepts headers in either order and in either language', () => {
  const swapped = readColumns(parseDelimited('yeni_url,eski_url\n/new,/old\n').rows);
  assert.deepEqual(swapped.oldValues, ['/old']);
  assert.deepEqual(swapped.newValues, ['/new']);

  const english = readColumns(parseDelimited('old_url,new_url\n/old,/new\n').rows);
  assert.deepEqual(english.oldValues, ['/old']);
});

test('ignores extra columns', () => {
  const columns = readColumns(
    parseDelimited('status,eski_url,title,yeni_url\n404,/old,Sayfa,/new\n').rows,
  );
  assert.deepEqual(columns.oldValues, ['/old']);
  assert.deepEqual(columns.newValues, ['/new']);
});

/** Acceptance criterion 15. */
test('assumes the first two columns when there is no header', () => {
  const columns = readColumns(parseDelimited('/old-1,/new-1\n/old-2,/new-2\n').rows);
  assert.equal(columns.assumedColumns, true);
  assert.deepEqual(columns.oldValues, ['/old-1', '/old-2']);
  assert.deepEqual(columns.newValues, ['/new-1', '/new-2']);
});

test('reports a single-column file instead of guessing', () => {
  const columns = readColumns(parseDelimited('/old-1\n/old-2\n').rows);
  assert.equal(columns.singleColumn, true);
  assert.deepEqual(columns.newValues, []);
});

/** Acceptance criterion 14. */
test('columns of different lengths do not shift each other', () => {
  const rows = [['eski_url', 'yeni_url'], ['/o1', '/n1'], ['', '/n2'], ['', '/n3'], ['/o2', '']];
  const columns = readColumns(rows);
  assert.deepEqual(columns.oldValues, ['/o1', '/o2']);
  assert.deepEqual(columns.newValues, ['/n1', '/n2', '/n3']);
});

/** Acceptance criterion 11. */
test('a dirty file is processed and every drop is accounted for', () => {
  const input = prepareInputs(
    [
      '/elbise',
      '',
      '  /elbise  ',
      'https://www.example.com/elbise/',
      'not a url',
      '/%E0%A4%A',
      'http://example.com/canta',
    ],
    ['/yeni-elbise', '/yeni-canta'],
    options,
  );

  assert.equal(input.old.length, 2, 'four spellings of /elbise collapse into one');
  const reasons = input.drops.map((drop) => drop.reason).sort();
  assert.deepEqual(reasons, ['duplicate', 'duplicate', 'empty', 'not-a-url', 'unreadable']);
  assert.ok(input.notices.some((notice) => notice.kind === 'collapsed'));
  assert.ok(
    input.notices.some((notice) => notice.kind === 'dropped' && notice.reason === 'unreadable'),
  );
});

test('reports a domain change', () => {
  const input = prepareInputs(
    ['https://eski.example.com/elbise'],
    ['https://yeni.example.com/kadin-elbise'],
    options,
  );
  const notice = input.notices.find((entry) => entry.kind === 'domain-change');
  assert.ok(notice && notice.kind === 'domain-change');
  assert.equal(notice.from, 'eski.example.com');
  assert.equal(notice.to, 'yeni.example.com');
});

test('pasted text becomes one URL per line', () => {
  assert.deepEqual(splitPasted('/a\n\n  /b  \n# note\n/c'), ['/a', '/b', '/c']);
});
