import { DOCUMENT } from '@angular/common';
import {
  APP_INITIALIZER,
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
} from '@angular/core';

import {
  BRIGHTRAIL_I18N,
  type BrightrailI18nConfig,
  resolveBrightrailI18n,
} from './brightrail-i18n';

function applyBrightrailDocumentI18n(doc: Document, config: BrightrailI18nConfig): void {
  const resolved = resolveBrightrailI18n(config);
  const root = doc.documentElement;
  root.lang = resolved.locale;
  root.dir = resolved.direction;
  doc.body.classList.toggle('brightrail-root--rtl', resolved.direction === 'rtl');
}

/**
 * System-wide locale and direction for every Brightrail surface.
 * Sets `lang` / `dir` on `<html>` and toggles `brightrail-root--rtl` on `<body>`.
 */
export function provideBrightrailI18n(config: BrightrailI18nConfig = {}): EnvironmentProviders {
  const resolved = resolveBrightrailI18n(config);
  return makeEnvironmentProviders([
    { provide: BRIGHTRAIL_I18N, useValue: resolved },
    provideAppInitializer(() => {
      const doc = inject(DOCUMENT);
      applyBrightrailDocumentI18n(doc, resolved);
    }),
  ]);
}

/** @deprecated Use provideBrightrailI18n — kept for compatibility with early adopters. */
export function provideBrightrailI18nInitializer(config: BrightrailI18nConfig = {}): EnvironmentProviders {
  const resolved = resolveBrightrailI18n(config);
  return makeEnvironmentProviders([
    { provide: BRIGHTRAIL_I18N, useValue: resolved },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (doc: Document) => () => applyBrightrailDocumentI18n(doc, resolved),
      deps: [DOCUMENT],
    },
  ]);
}
