import { DOCUMENT } from '@angular/common';
import { APP_INITIALIZER, InjectionToken, Provider } from '@angular/core';

import { BrightrailFuturisticAppearance } from './brightrail-futuristic-appearance.types';

export const BRIGHTRAIL_FUTURISTIC_APPEARANCE = new InjectionToken<BrightrailFuturisticAppearance | null>(
  'BRIGHTRAIL_FUTURISTIC_APPEARANCE',
  { factory: () => null },
);

const FX_DOC_ATTR = 'data-br-fx';

export function applyBrightrailFuturisticAppearance(
  doc: Document,
  appearance: BrightrailFuturisticAppearance | null,
): void {
  if (appearance === null) {
    doc.documentElement.removeAttribute(FX_DOC_ATTR);
    return;
  }
  doc.documentElement.setAttribute(FX_DOC_ATTR, appearance);
}

/** Sets `data-br-fx` on `<html>` and a DI token for per-component `fxShell` defaults. */
export function provideBrightrailFuturisticAppearance(
  appearance: BrightrailFuturisticAppearance | null,
): Provider[] {
  return [
    { provide: BRIGHTRAIL_FUTURISTIC_APPEARANCE, useValue: appearance },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (doc: Document) => () => applyBrightrailFuturisticAppearance(doc, appearance),
      deps: [DOCUMENT],
    },
  ];
}
