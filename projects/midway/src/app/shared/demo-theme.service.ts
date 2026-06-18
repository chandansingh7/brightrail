import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { applyBrightrailFuturisticAppearance } from 'brightrail';

import type { DemoSiteConfig } from './demo-site.types';

@Injectable({ providedIn: 'root' })
export class DemoThemeService {
  private readonly doc = inject(DOCUMENT);

  applySite(config: DemoSiteConfig): void {
    this.doc.documentElement.dataset['theme'] = config.theme;
    applyBrightrailFuturisticAppearance(this.doc, config.fx);
    this.doc.documentElement.style.setProperty('--mw-accent', config.accent);
  }

  reset(): void {
    this.doc.documentElement.dataset['theme'] = 'light';
    applyBrightrailFuturisticAppearance(this.doc, null);
    this.doc.documentElement.style.removeProperty('--mw-accent');
  }
}
