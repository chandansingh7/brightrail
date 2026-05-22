import { Directive, computed, inject, input } from '@angular/core';

import { BrightrailFuturisticAppearance } from './brightrail-futuristic-appearance.types';
import {
  futuristicAppearanceHostClass,
  resolveFuturisticAppearance,
} from './brightrail-futuristic-host.util';
import { BRIGHTRAIL_FUTURISTIC_APPEARANCE } from './brightrail-futuristic.providers';

/** Applies `br-fx--{appearance}` on the host (per control or via injected default). */
@Directive({
  selector: '[brightrailFxShell]',
  host: {
    '[class]': 'hostClasses()',
  },
})
export class BrightrailFxShellDirective {
  private readonly defaults = inject(BRIGHTRAIL_FUTURISTIC_APPEARANCE, { optional: true });

  /** Per-instance shell; falls back to {@link provideBrightrailFuturisticAppearance}. */
  readonly fxShell = input<BrightrailFuturisticAppearance | null>(null);

  readonly hostClasses = computed(() => {
    const resolved = resolveFuturisticAppearance(this.fxShell(), this.defaults ?? null);
    const fxClass = futuristicAppearanceHostClass(resolved);
    return fxClass ? `${fxClass} br-fx-host` : '';
  });
}
