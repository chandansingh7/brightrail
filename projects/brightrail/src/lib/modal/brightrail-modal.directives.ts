import { Directive } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

/** Primary heading row inside {@link BrightrailModalHeaderComponent}. */
@Directive({
  selector: '[brightrailModalTitle]',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  host: {
    class: 'br-modal__title-text',
  },
})
export class BrightrailModalTitleDirective {}

/** Header trailing controls (e.g. close icon button). Project into {@link BrightrailModalHeaderComponent}. */
@Directive({
  selector: '[brightrailModalHeaderActions]',
  standalone: true,
  host: {
    class: 'br-modal__header-actions-inner',
  },
})
export class BrightrailModalHeaderActionsDirective {}
