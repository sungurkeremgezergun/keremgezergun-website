'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSettings } from './settingsStore';
import { HIGH_BAND, WEAK_BAND } from '@/lib/redirect-matcher/defaults';
import { runJob } from '@/lib/redirect-matcher/match';
import {
  ROW_LIMIT,
  parseDelimited,
  prepareInputs,
  readColumns,
  rowLimitNotices,
  splitPasted,
} from '@/lib/redirect-matcher/parse';
import { normalizeUrl } from '@/lib/redirect-matcher/normalize';
import { SAMPLE_NEW, SAMPLE_OLD } from '@/lib/redirect-matcher/template';
import { withWarnings, type SiteRef } from '@/lib/redirect-matcher/warnings';
import type {
  MatchOutcome,
  MatchProgress,
  MatchRow,
  MatcherSettings,
  ParseNotice,
} from '@/lib/redirect-matcher/types';
import type { WorkerResponse } from './matcher.worker';

/**
 * All of the tool's state.
 *
 * The worker is created in the run handler rather than in an effect: a client
 * component is also evaluated during the prerender pass, and React's
 * development Strict Mode mounts effects twice. A one-shot CPU job has no
 * reason to outlive the click that started it.
 */

export type Stage = 'idle' | 'ready' | 'running' | 'done';

export type InputSource = {
  label: string;
  oldValues: string[];
  newValues: string[];
  /** Valid URLs left after normalization, which is what the summary reports. */
  usableOld: number;
  usableNew: number;
  skipped: number;
  notices: ParseNotice[];
  assumedColumns: boolean;
  singleColumn: boolean;
  delimiter: string;
  overLimit: boolean;
};

export type ErrorKind = 'unsupportedFile' | 'noUrls' | 'singleColumn' | 'noMatches' | 'worker';

type Scheduler = { yield?: () => Promise<void> };

/** Hand the main thread back so the browser can paint and accept input. */
function releaseThread(): Promise<void> {
  const scheduler = (globalThis as { scheduler?: Scheduler }).scheduler;
  if (scheduler?.yield) return scheduler.yield();
  return new Promise((resolve) => setTimeout(resolve, 0));
}

export function useMatcher() {
  const [settings, setSettings] = useSettings();
  const [source, setSource] = useState<InputSource | null>(null);
  const [stage, setStage] = useState<Stage>('idle');
  const [progress, setProgress] = useState<MatchProgress | null>(null);
  const [outcome, setOutcome] = useState<MatchOutcome | null>(null);
  const [rows, setRows] = useState<MatchRow[]>([]);
  const [history, setHistory] = useState<MatchRow[][]>([]);
  const [error, setError] = useState<ErrorKind | null>(null);
  const [cancelled, setCancelled] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const workerRef = useRef<Worker | null>(null);
  const abortRef = useRef(false);

  const stopWorker = useCallback(() => {
    workerRef.current?.terminate();
    workerRef.current = null;
    abortRef.current = true;
  }, []);

  useEffect(() => stopWorker, [stopWorker]);

  const acceptLists = useCallback(
    (label: string, oldValues: string[], newValues: string[], extra: Partial<InputSource> = {}) => {
      const limitNotices = rowLimitNotices(oldValues.length, newValues.length);

      // Normalizing both lists up front costs about fifteen milliseconds at the
      // row limit and is what lets the summary say how many rows were skipped
      // and why, the moment the file lands. The worker normalizes again during
      // the run, because the settings may have changed in between.
      const preview = limitNotices.length
        ? null
        : prepareInputs(oldValues, newValues, {
            includeQuery: settings.includeQuery,
            stripLanguagePrefix: settings.stripLanguagePrefix,
          });

      setSource({
        label,
        oldValues,
        newValues,
        usableOld: preview ? preview.old.length : oldValues.length,
        usableNew: preview ? preview.new.length : newValues.length,
        skipped: preview ? preview.drops.length : 0,
        notices: [...(preview?.notices ?? []), ...limitNotices],
        assumedColumns: extra.assumedColumns ?? false,
        singleColumn: extra.singleColumn ?? false,
        delimiter: extra.delimiter ?? ',',
        overLimit: limitNotices.length > 0,
      });
      setStage('ready');
      setOutcome(null);
      setRows([]);
      setHistory([]);
      setProgress(null);
      setCancelled(false);
      setDownloaded(false);
      setError(
        !limitNotices.length && preview && (preview.old.length === 0 || preview.new.length === 0)
          ? 'noUrls'
          : null,
      );
    },
    [settings.includeQuery, settings.stripLanguagePrefix],
  );

  const loadFile = useCallback(
    async (file: File) => {
      setError(null);
      const name = file.name.toLowerCase();
      if (!name.endsWith('.csv') && !name.endsWith('.txt') && file.type !== 'text/csv') {
        setError('unsupportedFile');
        setSource(null);
        setStage('idle');
        return;
      }

      const text = await file.text();
      const table = parseDelimited(text);
      const columns = readColumns(table.rows);

      if (columns.singleColumn) {
        setError('singleColumn');
        setSource(null);
        setStage('idle');
        return;
      }

      acceptLists(file.name, columns.oldValues, columns.newValues, {
        assumedColumns: columns.assumedColumns,
        singleColumn: columns.singleColumn,
        delimiter: table.delimiter,
      });
    },
    [acceptLists],
  );

  const loadPasted = useCallback(
    (oldText: string, newText: string, label: string) => {
      acceptLists(label, splitPasted(oldText), splitPasted(newText));
    },
    [acceptLists],
  );

  const loadSample = useCallback(
    (label: string) => {
      acceptLists(label, [...SAMPLE_OLD], [...SAMPLE_NEW]);
    },
    [acceptLists],
  );

  const reset = useCallback(() => {
    stopWorker();
    setSource(null);
    setStage('idle');
    setOutcome(null);
    setRows([]);
    setHistory([]);
    setProgress(null);
    setError(null);
    setCancelled(false);
    setDownloaded(false);
  }, [stopWorker]);

  const finish = useCallback(
    (result: MatchOutcome) => {
      setOutcome(result);
      setRows(result.rows);
      setHistory([]);
      setStage('done');
      setDownloaded(false);
      setError(result.rows.some((row) => row.chosen >= 0) ? null : 'noMatches');

      // A domain change means relative targets would point at the old site. The
      // output switches itself and the notice says so, rather than opening a
      // dialog: this tool asks the user no questions.
      const moved = result.notices.find((notice) => notice.kind === 'domain-change');
      if (moved && moved.kind === 'domain-change' && !settings.absoluteOutput) {
        setSettings({
          ...settings,
          absoluteOutput: true,
          outputHost: settings.outputHost || moved.to,
        });
      }
    },
    [setSettings, settings],
  );

  /** The main-thread path, used when a worker cannot be created. */
  const runOnMainThread = useCallback(
    async (oldValues: string[], newValues: string[], active: MatcherSettings) => {
      const job = runJob(oldValues, newValues, active);
      let step = job.next();
      let lastRelease = Date.now();

      while (!step.done) {
        setProgress(step.value);
        const now = Date.now();
        if (now - lastRelease >= 50) {
          await releaseThread();
          lastRelease = Date.now();
          if (abortRef.current) {
            job.return({ rows: [], old: [], new: [], unchanged: [], drops: [], notices: [] });
            return;
          }
        }
        step = job.next();
      }

      finish(step.value);
    },
    [finish],
  );

  const run = useCallback(() => {
    if (!source || source.overLimit || source.usableOld === 0 || source.usableNew === 0) return;

    abortRef.current = false;
    setCancelled(false);
    setError(null);
    setStage('running');
    setProgress({ phase: 'normalizing', done: 0, total: source.newValues.length });

    const request = {
      oldValues: source.oldValues,
      newValues: source.newValues,
      settings,
    };

    let worker: Worker | null = null;
    try {
      worker = new Worker(new URL('./matcher.worker.ts', import.meta.url));
    } catch {
      // No worker available: the same generator runs on the main thread, split
      // into chunks so the page keeps painting and stays cancellable.
      void runOnMainThread(request.oldValues, request.newValues, settings);
      return;
    }

    workerRef.current = worker;

    worker.addEventListener('message', (event: MessageEvent) => {
      const response = event.data as WorkerResponse;
      if (response.type === 'progress') setProgress(response.progress);
      else if (response.type === 'done') {
        finish(response.outcome);
        stopWorker();
      } else {
        setError('worker');
        setStage('ready');
        stopWorker();
      }
    });

    worker.addEventListener('error', () => {
      setError('worker');
      setStage('ready');
      stopWorker();
    });

    worker.postMessage(request);
  }, [finish, runOnMainThread, settings, source, stopWorker]);

  const cancel = useCallback(() => {
    stopWorker();
    setStage(source ? 'ready' : 'idle');
    setProgress(null);
    setCancelled(true);
  }, [source, stopWorker]);

  /**
   * Every row edit is recorded, so any of them can be undone, and the
   * structural warnings are recomputed from the resolved targets.
   *
   * Retargeting a row by hand is the realistic way to build a chain: at match
   * time a target that is also an old URL has already been separated out as
   * needing no redirect. Without this the warning column would go stale the
   * moment the user changed anything.
   */
  const editRows = useCallback(
    (update: (current: MatchRow[]) => MatchRow[]) => {
      setRows((current) => {
        setHistory((past) => [...past.slice(-20), current]);
        const next = update(current);
        if (!outcome) return next;

        const resolve = (row: MatchRow): SiteRef | undefined => {
          if (row.manualTarget !== undefined) {
            const typed = row.manualTarget.trim();
            if (!typed) return undefined;
            const parsed = normalizeUrl(typed, {
              includeQuery: settings.includeQuery,
              stripLanguagePrefix: settings.stripLanguagePrefix,
            });
            return parsed.ok ? { path: parsed.value.path, host: parsed.value.host } : undefined;
          }
          return row.chosen >= 0 ? outcome.new[row.candidates[row.chosen].target] : undefined;
        };

        return withWarnings(next, outcome.old, resolve);
      });
      setDownloaded(false);
    },
    [outcome, settings.includeQuery, settings.stripLanguagePrefix],
  );

  const undo = useCallback(() => {
    setHistory((past) => {
      if (past.length === 0) return past;
      setRows(past[past.length - 1]);
      return past.slice(0, -1);
    });
  }, []);

  const chooseCandidate = useCallback(
    (sourceIndex: number, candidateIndex: number) => {
      editRows((current) =>
        current.map((row) =>
          row.source === sourceIndex
            ? { ...row, chosen: candidateIndex, manualTarget: undefined, selected: candidateIndex >= 0 }
            : row,
        ),
      );
    },
    [editRows],
  );

  const setManualTarget = useCallback(
    (sourceIndex: number, value: string) => {
      // The raw string is kept, not a trimmed one: an empty manual field still
      // means "manual mode", and collapsing it to undefined would snap the
      // select back to the suggested candidate as soon as the user cleared it.
      editRows((current) =>
        current.map((row) =>
          row.source === sourceIndex
            ? { ...row, manualTarget: value, selected: value.trim().length > 0 }
            : row,
        ),
      );
    },
    [editRows],
  );

  const toggleSelected = useCallback(
    (sourceIndex: number) => {
      editRows((current) =>
        current.map((row) => (row.source === sourceIndex ? { ...row, selected: !row.selected } : row)),
      );
    },
    [editRows],
  );

  const approveHigh = useCallback(() => {
    editRows((current) =>
      current.map((row) => {
        const candidate = row.chosen >= 0 ? row.candidates[row.chosen] : undefined;
        return candidate && candidate.score >= HIGH_BAND ? { ...row, selected: true } : row;
      }),
    );
  }, [editRows]);

  const clearWeak = useCallback(() => {
    editRows((current) =>
      current.map((row) => {
        const candidate = row.chosen >= 0 ? row.candidates[row.chosen] : undefined;
        return !candidate || candidate.score < WEAK_BAND ? { ...row, selected: false } : row;
      }),
    );
  }, [editRows]);

  const excludeSelected = useCallback(() => {
    editRows((current) => current.map((row) => ({ ...row, selected: false })));
  }, [editRows]);

  const counts = useMemo(() => {
    let high = 0;
    let review = 0;
    let none = 0;
    for (const row of rows) {
      if (row.confidence === 'high') high += 1;
      else if (row.confidence === 'review' || row.confidence === 'weak') review += 1;
      else none += 1;
    }
    return { total: rows.length, high, review, none };
  }, [rows]);

  const selectedCount = useMemo(
    () =>
      rows.filter((row) => row.selected && (row.chosen >= 0 || row.manualTarget?.trim())).length,
    [rows],
  );

  // A results set that has not been downloaded is gone if the tab closes. Next's
  // client-side navigation does not fire this, which is why the export bar also
  // carries a persistent reminder.
  useEffect(() => {
    if (stage !== 'done' || downloaded || selectedCount === 0) return;
    const warn = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [downloaded, selectedCount, stage]);

  return {
    limit: ROW_LIMIT,
    settings,
    setSettings,
    source,
    stage,
    progress,
    outcome,
    rows,
    counts,
    selectedCount,
    error,
    cancelled,
    downloaded,
    canUndo: history.length > 0,
    loadFile,
    loadPasted,
    loadSample,
    reset,
    run,
    cancel,
    undo,
    chooseCandidate,
    setManualTarget,
    toggleSelected,
    approveHigh,
    clearWeak,
    excludeSelected,
    markDownloaded: () => setDownloaded(true),
  };
}
