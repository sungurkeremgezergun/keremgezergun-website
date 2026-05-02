const LINE_SEPARATOR = String.fromCharCode(0x2028);
const PARAGRAPH_SEPARATOR = String.fromCharCode(0x2029);

const XSS_REPLACEMENTS: Array<[RegExp, string]> = [
  [/</g, '\\u003c'],
  [/>/g, '\\u003e'],
  [/&/g, '\\u0026'],
  [new RegExp(LINE_SEPARATOR, 'g'), '\\u2028'],
  [new RegExp(PARAGRAPH_SEPARATOR, 'g'), '\\u2029'],
];

export function jsonLdSafe(schema: unknown): string {
  return XSS_REPLACEMENTS.reduce(
    (acc, [pattern, replacement]) => acc.replace(pattern, replacement),
    JSON.stringify(schema),
  );
}
