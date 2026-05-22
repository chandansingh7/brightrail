import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import {
  applyBrightrailFuturisticAppearance,
  type BrightrailFuturisticAppearance,
} from 'brightrail';

export type PlaygroundThemeId = 'light' | 'dark';

export type PlaygroundFxShellId = BrightrailFuturisticAppearance | 'none';

@Injectable({ providedIn: 'root' })
export class PlaygroundThemeService {
  private readonly doc = inject(DOCUMENT);

  /** Drives Material light/dark for the document and both theme dropdowns. */
  readonly theme = signal<PlaygroundThemeId>('light');

  /** Site-wide cyber / neon / holo / glass shell on all Brightrail components. */
  readonly fxShell = signal<PlaygroundFxShellId>('none');

  constructor() {
    const raw = this.doc.documentElement.dataset['theme'];
    const initial: PlaygroundThemeId = raw === 'dark' ? 'dark' : 'light';
    this.theme.set(initial);
    this.doc.documentElement.dataset['theme'] = initial;

    const fxRaw = this.doc.documentElement.getAttribute('data-br-fx');
    const fxInitial: PlaygroundFxShellId =
      fxRaw === 'cyber' || fxRaw === 'neon' || fxRaw === 'holo' || fxRaw === 'glass' ? fxRaw : 'none';
    this.fxShell.set(fxInitial);
  }

  setTheme(id: PlaygroundThemeId): void {
    this.theme.set(id);
    this.doc.documentElement.dataset['theme'] = id;
  }

  setFxShell(id: PlaygroundFxShellId): void {
    this.fxShell.set(id);
    applyBrightrailFuturisticAppearance(this.doc, id === 'none' ? null : id);
  }
}
