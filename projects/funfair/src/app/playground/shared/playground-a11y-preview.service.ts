import { Injectable } from '@angular/core';

import type { PlaygroundThemeId } from '../playground-theme.service';
import type { PlaygroundA11yPreviewPayload } from './playground-a11y-preview.types';

/** localStorage so payload survives `window.open(..., 'noopener')` (sessionStorage is tab-isolated). */
const STORAGE_KEY = 'brightrail.playground.a11y-preview';

@Injectable({ providedIn: 'root' })
export class PlaygroundA11yPreviewService {
  open(componentId: string, theme: PlaygroundThemeId, state: unknown): void {
    const payload: PlaygroundA11yPreviewPayload = { componentId, theme, state };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    const base = `${window.location.origin}${window.location.pathname}`;
    window.open(`${base}#/a11y-preview/${componentId}`, '_blank', 'noopener,noreferrer');
  }

  /** Reads and clears the stored payload for the requested component. */
  consume(componentId: string): PlaygroundA11yPreviewPayload | null {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }
    try {
      const payload = JSON.parse(raw) as PlaygroundA11yPreviewPayload;
      if (payload.componentId !== componentId) {
        return null;
      }
      localStorage.removeItem(STORAGE_KEY);
      return payload;
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  }
}
