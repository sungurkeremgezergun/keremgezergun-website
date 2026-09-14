'use client';

import { useCallback, useId, useRef, useState } from 'react';
import type { Language } from '@/lib/i18n';
import { DEFAULT_SETTINGS } from '@/lib/redirect-matcher/defaults';
import { templateCsv } from '@/lib/redirect-matcher/template';
import type { ParseNotice } from '@/lib/redirect-matcher/types';
import ExportBar from './ExportBar';
import ResultsTable from './ResultsTable';
import styles from './RedirectMatcher.module.css';
import { chrome, dropReasons, notices as noticeCopy, progress as progressCopy, results, settings as settingsCopy, upload } from './content';
import { useMatcher } from './useMatcher';

/**
 * The tool itself.
 *
 * Deliberately the only interactive part of the page: the surrounding copy and
 * the article below it stay in the server-rendered markup, so the page is
 * complete and indexable before any JavaScript runs.
 */
export default function Tool({ language }: { language: Language }) {
  const matcher = useMatcher();
  const [tab, setTab] = useState<'file' | 'paste'>('file');
  const [dragging, setDragging] = useState(false);
  const [oldText, setOldText] = useState('');
  const [newText, setNewText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const ids = useId();

  const { settings, setSettings } = matcher;

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDragging(false);
      const file = event.dataTransfer.files?.[0];
      if (file) void matcher.loadFile(file);
    },
    [matcher],
  );

  const downloadTemplate = useCallback(() => {
    const blob = new Blob([templateCsv(language)], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = language === 'en' ? 'redirect-matcher-template.csv' : 'yonlendirme-sablonu.csv';
    link.click();
    URL.revokeObjectURL(url);
  }, [language]);

  const noticeText = (notice: ParseNotice): string => {
    switch (notice.kind) {
      case 'assumed-columns':
        return noticeCopy.assumedColumns[language];
      case 'single-column':
        return noticeCopy.singleColumn[language];
      case 'delimiter':
        return notice.delimiter === ';'
          ? noticeCopy.delimiterSemicolon[language]
          : noticeCopy.delimiterTab[language];
      case 'row-limit':
        return `${noticeCopy.rowLimit[language]} (${notice.count} / ${notice.limit})`;
      case 'domain-change':
        return `${noticeCopy.domainChange[language]} ${notice.from} → ${notice.to}`;
      case 'collapsed':
        return `${notice.count} ${noticeCopy.collapsed[language]}`;
      case 'dropped':
        return `${notice.count} ${noticeCopy.droppedPrefix[language]} — ${dropReasons[notice.reason][language]}`;
    }
  };

  const source = matcher.source;
  const weightTotal = Math.round(
    Object.values(settings.weights).reduce((sum, value) => sum + value, 0) * 100,
  );

  // The upload preview and the finished run report the same kinds of notice.
  // Once a run exists its notices are authoritative — the settings may have
  // changed since the file was read — and a Set keeps the two from doubling up.
  const noticeSet = new Set<string>();
  if (source?.assumedColumns) noticeSet.add(noticeCopy.assumedColumns[language]);
  if (source?.delimiter === ';' || source?.delimiter === '\t') {
    noticeSet.add(noticeText({ kind: 'delimiter', delimiter: source.delimiter }));
  }
  for (const notice of source?.notices ?? []) {
    if (notice.kind === 'row-limit' || !matcher.outcome) noticeSet.add(noticeText(notice));
  }
  for (const notice of matcher.outcome?.notices ?? []) noticeSet.add(noticeText(notice));
  const visibleNotices = [...noticeSet];

  const errorText = matcher.error ? noticeCopy[matcher.error][language] : null;

  return (
    <div className={styles.tool}>
      <div className={styles.privacy}>
        <p>{chrome.privacy[language]}</p>
        <a className={styles.privacyLink} href="#matcher-gizlilik">
          {chrome.privacyMore[language]}
        </a>
        <div className={styles.sampleRow}>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => matcher.loadSample(chrome.sample[language])}
          >
            {chrome.sample[language]}
          </button>
          <span className={styles.sampleHint}>{chrome.sampleHint[language]}</span>
        </div>
      </div>

      <section className={styles.step} aria-labelledby={`${ids}-template`}>
        <h3 id={`${ids}-template`} className={styles.stepHeading}>
          {upload.templateHeading[language]}
        </h3>
        <p className={styles.stepNote}>{upload.templateNote[language]}</p>
        <p className={styles.stepWarning}>{upload.templateWarning[language]}</p>
        <div className={styles.templateActions}>
          <button type="button" className="btn btn-primary" onClick={downloadTemplate}>
            {upload.templateButton[language]}
          </button>
        </div>
      </section>

      <section className={styles.step} aria-labelledby={`${ids}-upload`}>
        <h3 id={`${ids}-upload`} className={styles.stepHeading}>
          {upload.uploadHeading[language]}
        </h3>

        <div className={styles.tabs} role="tablist">
          <button
            type="button"
            role="tab"
            className={styles.tab}
            aria-selected={tab === 'file'}
            onClick={() => setTab('file')}
          >
            {upload.tabFile[language]}
          </button>
          <button
            type="button"
            role="tab"
            className={styles.tab}
            aria-selected={tab === 'paste'}
            onClick={() => setTab('paste')}
          >
            {upload.tabPaste[language]}
          </button>
        </div>

        {tab === 'file' ? (
          <div
            className={`${styles.dropzone} ${dragging ? styles.dropzoneActive : ''}`}
            onDragOver={(event) => {
              event.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={onDrop}
          >
            <p className={styles.dropzoneLabel}>{upload.dropzone[language]}</p>
            <p className={styles.hint}>{upload.or[language]}</p>
            {/*
              A real file input, not a styled button that opens one. Dragging is
              an enhancement; this is the single-pointer alternative SC 2.5.7
              requires, and it carries the visible label SC 3.3.2 requires.
            */}
            {/*
              A real <input type="file"> with a real <label>, but the browser's
              own "Dosya Seç · Dosya seçilmedi" control is clipped out of view:
              inside a custom dropzone it read as a third, contradictory way to
              do the same thing. The label is the visible trigger, so this stays
              a single-pointer alternative to dragging (SC 2.5.7) and keeps its
              visible label (SC 3.3.2).
            */}
            <div className={styles.fileField}>
              <input
                ref={fileInputRef}
                id={`${ids}-file`}
                className={styles.fileInput}
                type="file"
                accept=".csv,text/csv,text/plain"
                aria-describedby={`${ids}-file-hint`}
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) void matcher.loadFile(file);
                }}
              />
              <label className="btn btn-outline" htmlFor={`${ids}-file`}>
                {upload.fileLabel[language]}
              </label>
              <span id={`${ids}-file-hint`} className={styles.hint}>
                {upload.fileHint[language]}
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.pasteGrid}>
              <div className={styles.field}>
                <label htmlFor={`${ids}-old`}>{upload.pasteOldLabel[language]}</label>
                <textarea
                  id={`${ids}-old`}
                  value={oldText}
                  onChange={(event) => setOldText(event.target.value)}
                  aria-describedby={`${ids}-paste-hint`}
                  spellCheck={false}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor={`${ids}-new`}>{upload.pasteNewLabel[language]}</label>
                <textarea
                  id={`${ids}-new`}
                  value={newText}
                  onChange={(event) => setNewText(event.target.value)}
                  aria-describedby={`${ids}-paste-hint`}
                  spellCheck={false}
                />
              </div>
            </div>
            <p id={`${ids}-paste-hint`} className={styles.hint}>
              {upload.pasteHint[language]}
            </p>
            <div className={styles.actions}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => matcher.loadPasted(oldText, newText, upload.tabPaste[language])}
              >
                {upload.pasteApply[language]}
              </button>
            </div>
          </>
        )}

        {source && (
          <p className={styles.summary} role="status">
            <span className={styles.summaryFile}>{source.label}</span>
            <span>
              {source.usableOld} {upload.summaryOld[language]}
            </span>
            <span>
              {source.usableNew} {upload.summaryNew[language]}
            </span>
            {source.noRedirectNeeded > 0 && (
              <span>
                {source.noRedirectNeeded} {upload.summaryNoRedirect[language]}
              </span>
            )}
            {source.skipped > 0 && (
              <span>
                {source.skipped} {upload.summarySkipped[language]}
              </span>
            )}
          </p>
        )}

        {/*
          matcher.cancelled belongs in this condition: with a clean file there are
          no other notices, so the cancellation message had nothing to render into.
        */}
        {(visibleNotices.length > 0 || errorText || matcher.cancelled) && (
          <ul className={styles.noticeList}>
            {errorText && (
              <li className={styles.error} role="alert">
                {errorText}
              </li>
            )}
            {matcher.cancelled && <li className={styles.notice}>{noticeCopy.cancelled[language]}</li>}
            {visibleNotices.map((text) => (
              <li key={text} className={styles.notice}>
                {text}
              </li>
            ))}
          </ul>
        )}

        <details className={styles.settings}>
          <summary>{settingsCopy.heading[language]}</summary>
          <div className={styles.settingsBody}>
            <div className={styles.settingsGrid}>
              <div className={styles.field}>
                <label htmlFor={`${ids}-threshold`}>{settingsCopy.threshold[language]}</label>
                <input
                  id={`${ids}-threshold`}
                  className={styles.numberInput}
                  type="number"
                  min={0}
                  max={100}
                  value={settings.threshold}
                  aria-describedby={`${ids}-threshold-hint`}
                  onChange={(event) =>
                    setSettings({ ...settings, threshold: Number(event.target.value) })
                  }
                />
                <span id={`${ids}-threshold-hint`} className={styles.hint}>
                  {settingsCopy.thresholdHint[language]}
                </span>
              </div>

              <div className={styles.field}>
                <label htmlFor={`${ids}-host`}>{settingsCopy.outputHost[language]}</label>
                <input
                  id={`${ids}-host`}
                  className={styles.textInput}
                  type="text"
                  value={settings.outputHost}
                  placeholder={settingsCopy.outputHostPlaceholder[language]}
                  aria-describedby={`${ids}-host-hint`}
                  onChange={(event) => setSettings({ ...settings, outputHost: event.target.value })}
                />
                <span id={`${ids}-host-hint`} className={styles.hint}>
                  {settingsCopy.outputHostHint[language]}
                </span>
              </div>
            </div>

            <div className={styles.settingsGrid}>
              <label className={styles.checkboxField}>
                <input
                  type="checkbox"
                  checked={settings.includeQuery}
                  onChange={(event) =>
                    setSettings({ ...settings, includeQuery: event.target.checked })
                  }
                />
                <span>{settingsCopy.includeQuery[language]}</span>
              </label>

              <label className={styles.checkboxField}>
                <input
                  type="checkbox"
                  checked={settings.stripLanguagePrefix}
                  onChange={(event) =>
                    setSettings({ ...settings, stripLanguagePrefix: event.target.checked })
                  }
                />
                <span>{settingsCopy.stripLanguagePrefix[language]}</span>
              </label>

              <label className={styles.checkboxField}>
                <input
                  type="checkbox"
                  checked={settings.absoluteOutput}
                  onChange={(event) =>
                    setSettings({ ...settings, absoluteOutput: event.target.checked })
                  }
                />
                <span>{settingsCopy.absoluteOutput[language]}</span>
              </label>
            </div>

            <fieldset className={styles.weights}>
              <legend>{settingsCopy.weights[language]}</legend>
              <div className={styles.settingsGrid}>
                {(
                  [
                    ['tokens', settingsCopy.weightTokens[language]],
                    ['characters', settingsCopy.weightCharacters[language]],
                    ['structure', settingsCopy.weightStructure[language]],
                    ['shape', settingsCopy.weightShape[language]],
                  ] as const
                ).map(([key, label]) => (
                  <div key={key} className={styles.field}>
                    <label htmlFor={`${ids}-w-${key}`}>{label}</label>
                    {/*
                      Shown as a percentage, because the guide above states the
                      same four numbers as 50 / 25 / 15 / 10. Two notations for
                      one value made the panel look unrelated to the text.
                    */}
                    <input
                      id={`${ids}-w-${key}`}
                      className={styles.numberInput}
                      type="number"
                      min={0}
                      max={100}
                      step={5}
                      value={Math.round(settings.weights[key] * 100)}
                      onChange={(event) =>
                        setSettings({
                          ...settings,
                          weights: {
                            ...settings.weights,
                            [key]: Number(event.target.value) / 100,
                          },
                        })
                      }
                    />
                  </div>
                ))}
              </div>
              <p className={styles.hint}>
                <strong>{settingsCopy.weightsTotal[language]}: {weightTotal}%</strong>
                {weightTotal !== 100 ? ' — ' : ' · '}
                {settingsCopy.weightsHint[language]}
              </p>
            </fieldset>

            <div>
              <button
                type="button"
                className={styles.bulkButton}
                onClick={() => setSettings(DEFAULT_SETTINGS)}
              >
                {settingsCopy.reset[language]}
              </button>
            </div>
          </div>
        </details>

        <div className={styles.actions}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={matcher.run}
            disabled={
              !source ||
              source.overLimit ||
              source.usableOld === 0 ||
              source.usableNew === 0 ||
              matcher.stage === 'running'
            }
          >
            {matcher.stage === 'done' ? upload.runAgain[language] : upload.run[language]}
          </button>
          {source && (
            <button type="button" className={styles.bulkButton} onClick={matcher.reset}>
              {upload.clear[language]}
            </button>
          )}
        </div>
      </section>

      {matcher.stage === 'running' && matcher.progress && (
        <div className={styles.progress}>
          <div className={styles.progressHead}>
            <span className={styles.progressPhase} role="status">
              {progressCopy[matcher.progress.phase][language]} — {matcher.progress.done}{' '}
              {progressCopy.of[language]} {matcher.progress.total}
            </span>
            <button type="button" className={styles.bulkButton} onClick={matcher.cancel}>
              {progressCopy.cancel[language]}
            </button>
          </div>
          <progress value={matcher.progress.done} max={Math.max(1, matcher.progress.total)} />
        </div>
      )}

      {matcher.stage === 'done' && matcher.outcome && (
        <>
          <p className={styles.stepWarning}>{noticeCopy.homepageWarning[language]}</p>

          <ResultsTable
            language={language}
            outcome={matcher.outcome}
            rows={matcher.rows}
            counts={matcher.counts}
            canUndo={matcher.canUndo}
            onChoose={matcher.chooseCandidate}
            onManual={matcher.setManualTarget}
            onToggle={matcher.toggleSelected}
            onApproveHigh={matcher.approveHigh}
            onClearWeak={matcher.clearWeak}
            onExcludeAll={matcher.excludeSelected}
            onUndo={matcher.undo}
          />

          {matcher.outcome.unchanged.length > 0 && (
            <section className={styles.unchanged} aria-labelledby={`${ids}-unchanged`}>
              <h3 id={`${ids}-unchanged`} className={styles.stepHeading}>
                {results.unchangedHeading[language]} ({matcher.outcome.unchanged.length})
              </h3>
              <p className={styles.hint}>{results.unchangedNote[language]}</p>
              <ul className={styles.unchangedList} aria-label={results.unchangedHeading[language]}>
                {matcher.outcome.unchanged.map((url) => (
                  <li key={url}>{url}</li>
                ))}
              </ul>
            </section>
          )}

          <ExportBar
            language={language}
            outcome={matcher.outcome}
            rows={matcher.rows}
            settings={settings}
            selectedCount={matcher.selectedCount}
            downloaded={matcher.downloaded}
            onDownloaded={matcher.markDownloaded}
          />
        </>
      )}
    </div>
  );
}
