'use client';

import { useState } from 'react';
import type { Language } from '@/lib/i18n';
import { results } from './content';
import styles from './RedirectMatcher.module.css';

/**
 * A code block you can copy.
 *
 * The page's promise is that it writes your server rules; leaving the reader to
 * select a line that scrolls sideways inside its own box stops one step short
 * of that. The button is the only reason this is a client component.
 */
export default function CodeBlock({ code, language }: { code: string; language: Language }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // A denied clipboard permission is not worth an error state; the text is
      // selectable either way.
    }
  };

  return (
    <div className={styles.codeWrap}>
      <button type="button" className={styles.copyButton} onClick={copy}>
        {copied ? results.copied[language] : results.copy[language]}
      </button>
      <pre className={styles.code}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
