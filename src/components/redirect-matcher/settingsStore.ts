'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { DEFAULT_SETTINGS } from '@/lib/redirect-matcher/defaults';
import type { MatcherSettings } from '@/lib/redirect-matcher/types';

/**
 * Settings, remembered in this browser.
 *
 * An external store rather than `useState` plus an effect. The prerendered HTML
 * has to show the defaults -- there is no localStorage on the server -- and the
 * client has to show the stored values. `useSyncExternalStore` is the mechanism
 * built for exactly that: React hydrates against `getServerSnapshot`, then
 * re-renders against `getSnapshot`, with no hydration mismatch and no setState
 * inside an effect.
 *
 * Only settings are stored. The URL lists are deliberately not remembered.
 */

const STORAGE_KEY = 'redirect-matcher-settings';

const listeners = new Set<() => void>();
let cached: MatcherSettings | null = null;

function read(): MatcherSettings {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(stored) as Partial<MatcherSettings>;
    return {
      ...DEFAULT_SETTINGS,
      ...parsed,
      weights: { ...DEFAULT_SETTINGS.weights, ...parsed.weights },
    };
  } catch {
    // A private window, cleared site data, or a browser that throws on access.
    return DEFAULT_SETTINGS;
  }
}

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const getSnapshot = (): MatcherSettings => {
  cached ??= read();
  return cached;
};

const getServerSnapshot = (): MatcherSettings => DEFAULT_SETTINGS;

function write(next: MatcherSettings): void {
  cached = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Remembering settings is a convenience; failing to is not an error.
  }
  for (const listener of listeners) listener();
}

export function useSettings(): [MatcherSettings, (next: MatcherSettings) => void] {
  const settings = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const update = useCallback((next: MatcherSettings) => write(next), []);
  return [settings, update];
}
