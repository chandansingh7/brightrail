import { Directive } from '@angular/core';

/** Primary heading row inside {@link BrightrailModalHeaderComponent}. */
@Directive({
  selector: '[brightrailModalTitle]',
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
