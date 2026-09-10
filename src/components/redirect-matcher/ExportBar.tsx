'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { Language } from '@/lib/i18n';
import {
  buildExportRows,
  toCsv,
  toHtaccess,
  toNginx,
  toRedirectionCsv,
  toUnmatchedCsv,
  type CsvLabels,
} from '@/lib/redirect-matcher/export';
import type { MatchOutcome, MatchRow, MatcherSettings } from '@/lib/redirect-matcher/types';
import { confidenceLabels, exportBar, reasonLabels, warningLabels } from './content';
import styles from './RedirectMatcher.module.css';

type Format = 'csv' | 'htaccess' | 'nginx' | 'redirection';

type Props = {
  language: Language;
  outcome: MatchOutcome;
  rows: MatchRow[];
  settings: MatcherSettings;
  selectedCount: number;
  downloaded: boolean;
  onDownloaded: () => void;
};

const FILE_NAMES: Record<Format, string> = {
  csv: 'yonlendirmeler.csv',
  htaccess: 'yonlendirmeler.htaccess',
  nginx: 'yonlendirmeler.nginx.conf',
  redirection: 'yonlendirmeler-redirection.csv',
};

/**
 * Hand the file to the browser.
 *
 * An object URL rather than a data URI, and revoked immediately: a 2000-row
 * config is well past the length some browsers accept in a data URI.
 */
function download(name: string, content: string, mime: string): void {
  const url = URL.createObjectURL(new Blob([content], { type: `${mime};charset=utf-8` }));
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
}

/**
 * How long results can sit undownloaded before the reminder is worth showing.
 *
 * It used to appear the instant matching finished, in warning colours, before
 * the user had looked at a single row -- a warning about something they had had
 * no chance to do yet.
 */
const REMINDER_DELAY_MS = 60_000;

export default function ExportBar({
  language,
  outcome,
  rows,
  settings,
  selectedCount,
  downloaded,
  onDownloaded,
}: Props) {
  const [format, setFormat] = useState<Format>('csv');
  const [remind, setRemind] = useState(false);
  const armed = useRef(false);

  useEffect(() => {
    if (downloaded || selectedCount === 0) return;
    armed.current = true;
    const timer = window.setTimeout(() => setRemind(true), REMINDER_DELAY_MS);
    // Leaving the tab is the other moment the reminder earns its place.
    const onHide = () => {
      if (document.visibilityState === 'hidden' && armed.current) setRemind(true);
    };
    document.addEventListener('visibilitychange', onHide);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('visibilitychange', onHide);
      armed.current = false;
    };
  }, [downloaded, selectedCount]);

  const labels: CsvLabels = useMemo(
    () => ({
      header: [...exportBar.csvHeader[language]],
      confidence: {
        high: confidenceLabels.high[language],
        review: confidenceLabels.review[language],
        weak: confidenceLabels.weak[language],
        none: confidenceLabels.none[language],
      },
      reason: {
        exact: reasonLabels.exact[language],
        'id-match': reasonLabels['id-match'][language],
        'same-slug': reasonLabels['same-slug'][language],
        'broader-page': reasonLabels['broader-page'][language],
        'narrower-page': reasonLabels['narrower-page'][language],
        'parent-suggestion': reasonLabels['parent-suggestion'][language],
        similar: reasonLabels.similar[language],
      },
      warning: {
        chain: warningLabels.chain[language],
        loop: warningLabels.loop[language],
        'many-to-one': warningLabels['many-to-one'][language],
        'broader-page': warningLabels['broader-page'][language],
        'narrower-page': warningLabels['narrower-page'][language],
        ambiguous: warningLabels.ambiguous[language],
        'query-only': warningLabels['query-only'][language],
        unreadable: warningLabels.unreadable[language],
      },
    }),
    [language],
  );

  const sets = useMemo(
    () => buildExportRows({ rows, old: outcome.old, new: outcome.new }, settings),
    [outcome.new, outcome.old, rows, settings],
  );

  const notes = [exportBar.fileNote[language]];

  const run = () => {
    if (format === 'csv') download(FILE_NAMES.csv, toCsv(sets.included, labels), 'text/csv');
    else if (format === 'htaccess')
      download(FILE_NAMES.htaccess, toHtaccess(sets.included, notes), 'text/plain');
    else if (format === 'nginx')
      download(FILE_NAMES.nginx, toNginx(sets.included, notes), 'text/plain');
    else download(FILE_NAMES.redirection, toRedirectionCsv(sets.included), 'text/csv');
    onDownloaded();
  };

  const runUnmatched = () => {
    download(
      'eslesmeyenler.csv',
      toUnmatchedCsv(sets.unmatched, [...exportBar.unmatchedHeader[language]]),
      'text/csv',
    );
  };

  return (
    <div className={styles.exportBar}>
      <p className={styles.exportCount} role="status">
        {selectedCount} {exportBar.count[language]}
      </p>

      <div className={styles.exportControls}>
        <label className="sr-only" htmlFor="matcher-format">
          {exportBar.format[language]}
        </label>
        <select
          id="matcher-format"
          className={styles.select}
          value={format}
          onChange={(event) => setFormat(event.target.value as Format)}
        >
          <option value="csv">{exportBar.formatCsv[language]}</option>
          <option value="htaccess">{exportBar.formatHtaccess[language]}</option>
          <option value="nginx">{exportBar.formatNginx[language]}</option>
          <option value="redirection">{exportBar.formatRedirection[language]}</option>
        </select>

        <button type="button" className="btn btn-primary" onClick={run} disabled={selectedCount === 0}>
          {exportBar.download[language]}
        </button>

        {sets.unmatched.length > 0 && (
          <button type="button" className={styles.bulkButton} onClick={runUnmatched}>
            {exportBar.unmatched[language]} ({sets.unmatched.length})
          </button>
        )}
      </div>

      {/*
        beforeunload does not fire on Next's client-side navigation, so the
        reminder is also on the page rather than only in a dialog.
      */}
      {remind && !downloaded && selectedCount > 0 && (
        <p className={styles.notDownloaded} role="status">
          {exportBar.notDownloaded[language]}
        </p>
      )}
    </div>
  );
}
