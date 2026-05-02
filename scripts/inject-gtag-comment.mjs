// Post-build hook: prepend Google's "<!-- Google tag (gtag.js) -->" HTML
// comment to every prerendered HTML file in .next/server/app, immediately
// before the gtag.js loader script.
//
// React/JSX cannot emit raw HTML comments, so we patch the static build
// output. Idempotent: skips files that already contain the comment.

import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = '.next/server/app';
const NEEDLE = '<script async="" src="https://www.googletagmanager.com/gtag/js?id=G-TVTZYGQ64H">';
const COMMENT = '<!-- Google tag (gtag.js) -->';
const REPLACEMENT = `${COMMENT}${NEEDLE}`;

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) yield* walk(path);
    else if (path.endsWith('.html')) yield path;
  }
}

let modified = 0;
let alreadyDone = 0;
let missingNeedle = 0;

for (const file of walk(ROOT)) {
  const original = readFileSync(file, 'utf8');

  if (original.includes(COMMENT + NEEDLE) || original.includes(`${COMMENT}\n${NEEDLE}`)) {
    alreadyDone++;
    continue;
  }
  if (!original.includes(NEEDLE)) {
    missingNeedle++;
    continue;
  }

  writeFileSync(file, original.replace(NEEDLE, REPLACEMENT));
  modified++;
}

console.log(
  `inject-gtag-comment: modified=${modified} already=${alreadyDone} skipped=${missingNeedle}`,
);
