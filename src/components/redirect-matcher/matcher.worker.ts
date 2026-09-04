import { runJob } from '@/lib/redirect-matcher/match';
import type { MatchOutcome, MatchProgress, MatcherSettings } from '@/lib/redirect-matcher/types';

/**
 * The matcher, off the main thread.
 *
 * A thin adapter: all the logic lives in `runJob`, which the main-thread
 * fallback in useMatcher.ts drives identically. Nothing here may reach for the
 * DOM.
 *
 * `self` types as `Window` because the project's `lib` includes `dom` and not
 * `webworker`, and the two cannot be combined in one program without hundreds
 * of duplicate-identifier errors. Narrowing `globalThis` to the two members this
 * file uses is the zero-dependency way out.
 */
const ctx = globalThis as unknown as {
  postMessage(data: unknown): void;
  addEventListener(type: 'message', callback: (event: MessageEvent) => void): void;
};

export type WorkerRequest = {
  oldValues: string[];
  newValues: string[];
  settings: MatcherSettings;
};

export type WorkerResponse =
  | { type: 'progress'; progress: MatchProgress }
  | { type: 'done'; outcome: MatchOutcome }
  | { type: 'error'; message: string };

/** Progress reports are throttled so the postMessage traffic cannot dominate. */
const REPORT_INTERVAL_MS = 50;

ctx.addEventListener('message', (event: MessageEvent) => {
  const request = event.data as WorkerRequest;

  try {
    const job = runJob(request.oldValues, request.newValues, request.settings);
    let step = job.next();
    let lastReport = 0;
    let pending: MatchProgress | undefined;

    while (!step.done) {
      pending = step.value;
      const now = Date.now();
      if (now - lastReport >= REPORT_INTERVAL_MS) {
        ctx.postMessage({ type: 'progress', progress: pending } satisfies WorkerResponse);
        lastReport = now;
        pending = undefined;
      }
      step = job.next();
    }

    if (pending) ctx.postMessage({ type: 'progress', progress: pending } satisfies WorkerResponse);
    ctx.postMessage({ type: 'done', outcome: step.value } satisfies WorkerResponse);
  } catch (error) {
    ctx.postMessage({
      type: 'error',
      message: error instanceof Error ? error.message : String(error),
    } satisfies WorkerResponse);
  }
});
