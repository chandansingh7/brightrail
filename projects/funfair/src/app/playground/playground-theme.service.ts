import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type PlaygroundThemeId = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class PlaygroundThemeService {
  private readonly doc = inject(DOCUMENT);

  /** Drives Material light/dark for the document and both theme dropdowns. */
  readonly theme = signal<PlaygroundThemeId>('light');

  constructor() {
    const raw = this.doc.documentElement.dataset['theme'];
    const initial: PlaygroundThemeId = raw === 'dark' ? 'dark' : 'light';
    this.theme.set(initial);
    this.doc.documentElement.dataset['theme'] = initial;
  }

  setTheme(id: PlaygroundThemeId): void {
    this.theme.set(id);
    this.doc.documentElement.dataset['theme'] = id;
  }
}
