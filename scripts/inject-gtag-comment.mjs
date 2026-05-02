// Post-build hook: rewrite the gtag block in every prerendered HTML file
// so that <head> contains, in this exact order with the exact content
// Google ships in their snippet:
//
//   <!-- Google tag (gtag.js) -->
//   <script async src="https://www.googletagmanager.com/gtag/js?id=G-TVTZYGQ64H"></script>
//   <script>
//     window.dataLayer = window.dataLayer || [];
//     function gtag(){dataLayer.push(arguments);}
//     gtag('js', new Date());
//
//     gtag('config', 'G-TVTZYGQ64H');
//   </script>
//
// React/JSX cannot emit raw HTML comments and React 19 sometimes hoists
// inline <script dangerouslySetInnerHTML> away from sibling <script src>
// tags, so we patch the static build output instead. Idempotent.

import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = '.next/server/app';
const GA_ID = 'G-TVTZYGQ64H';

const LOADER = `<script async="" src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>`;
const INLINE = `<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', '${GA_ID}');\n</script>`;
const COMMENT = '<!-- Google tag (gtag.js) -->';
const SNIPPET = `${COMMENT}\n${LOADER}\n${INLINE}`;

// Matches React-rendered inline init script regardless of whitespace.
const INLINE_RE = new RegExp(
  '<script>\\s*window\\.dataLayer = window\\.dataLayer \\|\\| \\[\\];[\\s\\S]*?gtag\\(\'config\', \'' +
    GA_ID +
    '\'\\);\\s*</script>',
);

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
let skipped = 0;

for (const file of walk(ROOT)) {
  let html = readFileSync(file, 'utf8');

  if (html.includes(SNIPPET)) {
    alreadyDone++;
    continue;
  }
  if (!html.includes(LOADER)) {
    skipped++;
    continue;
  }

  // Strip the React-emitted inline init script wherever it lives.
  html = html.replace(INLINE_RE, '');

  // Replace the loader (which may already have a stray comment in front of it
  // from a previous postbuild run) with the full Google snippet.
  html = html.replace(`${COMMENT}${LOADER}`, SNIPPET);
  if (!html.includes(SNIPPET)) {
    html = html.replace(LOADER, SNIPPET);
  }

  writeFileSync(file, html);
  modified++;
}

console.log(
  `inject-gtag-comment: modified=${modified} already=${alreadyDone} skipped=${skipped}`,
);
