import type { WritableSignal } from '@angular/core';
import { signal } from '@angular/core';

import { restorePlaygroundState, snapshotPlaygroundState } from './playground-a11y-state.utils';

describe('playground-a11y-state.utils', () => {
  it('snapshots and restores signal values including falsy booleans', () => {
    const label = signal('Save');
    const loading = signal(false);

    const snapshot = snapshotPlaygroundState({
      label: () => label(),
      loading: () => loading(),
    });

    expect(snapshot).toEqual({ label: 'Save', loading: false });

    label.set('Reset');
    loading.set(true);

    const restored = restorePlaygroundState(snapshot, {
      label: label as WritableSignal<unknown>,
      loading: loading as WritableSignal<unknown>,
    });

    expect(restored).toBe(true);
    expect(label()).toBe('Save');
    expect(loading()).toBe(false);
  });
});
