import type { WritableSignal } from '@angular/core';

/** Snapshot current playground control values for a11y preview transfer. */
export function snapshotPlaygroundState(
  readers: Record<string, () => unknown>,
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, read] of Object.entries(readers)) {
    out[key] = read();
  }
  return out;
}

/** Restore playground controls from a stored snapshot. Returns true when any field applied. */
export function restorePlaygroundState(
  state: unknown,
  writers: Record<string, WritableSignal<unknown>>,
): boolean {
  if (!state || typeof state !== 'object') {
    return false;
  }
  const snapshot = state as Record<string, unknown>;
  let restored = false;
  for (const [key, sig] of Object.entries(writers)) {
    if (Object.prototype.hasOwnProperty.call(snapshot, key)) {
      sig.set(snapshot[key]);
      restored = true;
    }
  }
  return restored;
}
