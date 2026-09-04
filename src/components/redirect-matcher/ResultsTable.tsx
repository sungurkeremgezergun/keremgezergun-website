'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Language } from '@/lib/i18n';
import { CANDIDATE_LIMIT } from '@/lib/redirect-matcher/defaults';
import type { MatchOutcome, MatchRow } from '@/lib/redirect-matcher/types';
import {
  confidenceLabels,
  reasonLabels,
  results,
  warningExplanations,
  warningLabels,
} from './content';
import { highlightParts } from './highlight';
import styles from './RedirectMatcher.module.css';

/** Rows rendered at once. The default filter usually holds far fewer than this. */
const PAGE_SIZE = 100;

type Filter = 'all' | 'high' | 'review' | 'none';

type Props = {
  language: Language;
  outcome: MatchOutcome;
  rows: MatchRow[];
  counts: { total: number; high: number; review: number; none: number };
  canUndo: boolean;
  onChoose: (source: number, candidate: number) => void;
  onManual: (source: number, value: string) => void;
  onToggle: (source: number) => void;
  onApproveHigh: () => void;
  onClearWeak: () => void;
  onExcludeAll: () => void;
  onUndo: () => void;
};

/** Rows that still need a human decision: matched, but not confidently. */
const needsReview = (row: MatchRow) => row.confidence === 'review' || row.confidence === 'weak';

export default function ResultsTable({
  language,
  outcome,
  rows,
  counts,
  canUndo,
  onChoose,
  onManual,
  onToggle,
  onApproveHigh,
  onClearWeak,
  onExcludeAll,
  onUndo,
}: Props) {
  // The job is not to read 400 rows, it is to decide on the 40 unclear ones.
  const [filter, setFilter] = useState<Filter>('review');
  const [page, setPage] = useState(0);
  const [activeRow, setActiveRow] = useState(0);
  const bodyRef = useRef<HTMLTableSectionElement>(null);

  const visible = useMemo(() => {
    if (filter === 'high') return rows.filter((row) => row.confidence === 'high');
    if (filter === 'review') return rows.filter(needsReview);
    if (filter === 'none') return rows.filter((row) => row.confidence === 'none');
    return rows;
  }, [filter, rows]);

  const pageCount = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const clampedPage = Math.min(page, pageCount - 1);
  const pageRows = visible.slice(clampedPage * PAGE_SIZE, clampedPage * PAGE_SIZE + PAGE_SIZE);

  const changeFilter = useCallback((next: Filter) => {
    setFilter(next);
    setPage(0);
    setActiveRow(0);
  }, []);

  /** Move focus with the roving tabindex the arrow keys drive. */
  useEffect(() => {
    const row = bodyRef.current?.querySelectorAll<HTMLTableRowElement>('tr')[activeRow];
    if (row && bodyRef.current?.contains(document.activeElement)) row.focus();
  }, [activeRow, clampedPage]);

  const onRowKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLTableRowElement>, row: MatchRow, index: number) => {
      // Only while the row itself holds focus. A key pressed inside the select or
      // the text input belongs to that control, and SC 2.1.4 allows single
      // character shortcuts exactly when they are scoped to a focused component.
      if (event.target !== event.currentTarget) return;

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActiveRow(Math.min(index + 1, pageRows.length - 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActiveRow(Math.max(index - 1, 0));
      } else if (event.key === ' ') {
        event.preventDefault();
        onToggle(row.source);
      } else if (/^[1-5]$/.test(event.key)) {
        const candidate = Number(event.key) - 1;
        if (candidate < row.candidates.length) {
          event.preventDefault();
          onChoose(row.source, candidate);
        }
      }
    },
    [onChoose, onToggle, pageRows.length],
  );

  const filters: Array<{ key: Filter; label: string; count: number }> = [
    { key: 'all', label: results.filterAll[language], count: counts.total },
    { key: 'high', label: results.filterHigh[language], count: counts.high },
    { key: 'review', label: results.filterReview[language], count: counts.review },
    { key: 'none', label: results.filterNone[language], count: counts.none },
  ];

  return (
    <section className={styles.results} aria-labelledby="matcher-results-heading">
      <h3 id="matcher-results-heading" className={styles.stepHeading}>
        {results.caption[language]}
      </h3>

      <fieldset className={styles.filters}>
        <legend className="sr-only">{results.filterAll[language]}</legend>
        {filters.map((entry) => (
          <button
            key={entry.key}
            type="button"
            className={styles.filter}
            aria-pressed={filter === entry.key}
            onClick={() => changeFilter(entry.key)}
          >
            <span className={styles.filterCount}>{entry.count}</span>
            <span>{entry.label}</span>
          </button>
        ))}
      </fieldset>

      {/* Announced without taking focus, which is what SC 4.1.3 asks for. */}
      <p role="status" className={styles.hint}>
        {visible.length} / {counts.total}
      </p>

      <div className={styles.bulk}>
        <button type="button" className={styles.bulkButton} onClick={onApproveHigh}>
          {results.approveHigh[language]}
        </button>
        <button type="button" className={styles.bulkButton} onClick={onClearWeak}>
          {results.clearWeak[language]}
        </button>
        <button type="button" className={styles.bulkButton} onClick={onExcludeAll}>
          {results.excludeSelected[language]}
        </button>
        <button type="button" className={styles.bulkButton} onClick={onUndo} disabled={!canUndo}>
          {canUndo ? results.undo[language] : results.undoneNothing[language]}
        </button>
      </div>

      <dl className={styles.keyboard}>
        <dt>{results.keyboardHeading[language]}</dt>
        <dd>{results.keyboardRows[language]}</dd>
        <dd>{results.keyboardNote[language]}</dd>
      </dl>

      <p className={styles.hint}>{results.narrowNote[language]}</p>

      {pageRows.length === 0 ? (
        <p className={styles.empty}>{results.filterNone[language]}: 0</p>
      ) : (
        <div
          className={styles.tableWrap}
          tabIndex={0}
          role="group"
          aria-label={results.caption[language]}
        >
          <table>
            <caption className="sr-only">{results.caption[language]}</caption>
            <thead>
              <tr>
                <th scope="col">{results.colInclude[language]}</th>
                <th scope="col">{results.colOld[language]}</th>
                <th scope="col">{results.colNew[language]}</th>
                <th scope="col">{results.colScore[language]}</th>
                <th scope="col">{results.colReason[language]}</th>
                <th scope="col">{results.colWarning[language]}</th>
              </tr>
            </thead>
            <tbody ref={bodyRef}>
              {pageRows.map((row, index) => {
                const source = outcome.old[row.source];
                const candidate = row.chosen >= 0 ? row.candidates[row.chosen] : undefined;
                const matched = new Set(candidate?.matched ?? []);
                const target = candidate ? outcome.new[candidate.target] : undefined;

                return (
                  <tr
                    key={row.source}
                    className={`${styles.row} ${row.selected ? '' : styles.rowExcluded}`}
                    tabIndex={index === activeRow ? 0 : -1}
                    onFocus={() => setActiveRow(index)}
                    onKeyDown={(event) => onRowKeyDown(event, row, index)}
                  >
                    <td>
                      <input
                        type="checkbox"
                        className={styles.include}
                        checked={row.selected}
                        onChange={() => onToggle(row.source)}
                        aria-label={`${results.colInclude[language]}: ${source.original}`}
                      />
                    </td>

                    <th scope="row" className={styles.urlCell}>
                      {highlightParts(source.original, matched).map((part, partIndex) =>
                        part.matched ? (
                          <mark key={partIndex} className={styles.matchedWord}>
                            {part.text}
                          </mark>
                        ) : (
                          <span key={partIndex}>{part.text}</span>
                        ),
                      )}
                    </th>

                    <td>
                      <div className={styles.targetCell}>
                        <label className="sr-only" htmlFor={`target-${row.source}`}>
                          {results.manualLabel[language]}
                        </label>
                        <select
                          id={`target-${row.source}`}
                          className={styles.select}
                          value={row.manualTarget ? 'manual' : String(row.chosen)}
                          onChange={(event) => {
                            if (event.target.value === 'manual') onManual(row.source, '');
                            else onChoose(row.source, Number(event.target.value));
                          }}
                        >
                          <option value="-1">{results.noTarget[language]}</option>
                          {row.candidates.slice(0, CANDIDATE_LIMIT).map((entry, entryIndex) => (
                            <option key={entry.target} value={entryIndex}>
                              {entryIndex + 1}. {outcome.new[entry.target].original} — {entry.score}
                            </option>
                          ))}
                          <option value="manual">{results.manual[language]}</option>
                        </select>

                        {row.manualTarget !== undefined ? (
                          <input
                            type="text"
                            className={styles.manualInput}
                            value={row.manualTarget}
                            onChange={(event) => onManual(row.source, event.target.value)}
                            aria-label={results.manualLabel[language]}
                          />
                        ) : (
                          target && (
                            <span className={styles.urlCell}>
                              {highlightParts(target.original, matched).map((part, partIndex) =>
                                part.matched ? (
                                  <mark key={partIndex} className={styles.matchedWord}>
                                    {part.text}
                                  </mark>
                                ) : (
                                  <span key={partIndex}>{part.text}</span>
                                ),
                              )}
                            </span>
                          )
                        )}
                      </div>
                    </td>

                    <td>
                      <span className={styles.score}>{candidate ? candidate.score : '—'}</span>
                      <span className={styles.band}>{confidenceLabels[row.confidence][language]}</span>
                    </td>

                    <td>
                      <span className={styles.chips}>
                        {(candidate?.reasons ?? []).map((reason) => (
                          <span key={reason} className={styles.chip}>
                            {reasonLabels[reason][language]}
                          </span>
                        ))}
                      </span>
                      {/*
                        The highlight above is visual. The same information has
                        to reach a screen reader as text, which is also what
                        keeps SC 1.4.1 satisfied.
                      */}
                      {matched.size > 0 && (
                        <span className="sr-only">
                          {results.matchedWords[language]}: {[...matched].join(', ')}
                        </span>
                      )}
                    </td>

                    <td>
                      <span className={styles.chips}>
                        {row.warnings.map((warning) => (
                          <span
                            key={warning}
                            className={`${styles.chip} ${styles.chipWarning}`}
                            title={warningExplanations[warning][language]}
                          >
                            {warningLabels[warning][language]}
                            <span className="sr-only">
                              {' '}
                              — {warningExplanations[warning][language]}
                            </span>
                          </span>
                        ))}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {pageCount > 1 && (
        <div className={styles.pager}>
          <button
            type="button"
            className={styles.bulkButton}
            onClick={() => setPage(Math.max(0, clampedPage - 1))}
            disabled={clampedPage === 0}
          >
            {results.previous[language]}
          </button>
          <span>
            {results.page[language]} {clampedPage + 1} / {pageCount}
          </span>
          <button
            type="button"
            className={styles.bulkButton}
            onClick={() => setPage(Math.min(pageCount - 1, clampedPage + 1))}
            disabled={clampedPage === pageCount - 1}
          >
            {results.next[language]}
          </button>
        </div>
      )}
    </section>
  );
}
