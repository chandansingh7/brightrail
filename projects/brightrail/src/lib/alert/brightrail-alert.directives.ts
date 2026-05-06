import { Directive } from '@angular/core';

/** Projects into the alert headline row (bold title). */
@Directive({
  selector: '[brightrailAlertTitle]',
  standalone: true,
  host: { class: 'br-alert__title' },
})
export class BrightrailAlertTitleDirective {}

/** Projects into the alert body copy beneath the title. */
@Directive({
  selector: '[brightrailAlertMessage]',
  standalone: true,
  host: { class: 'br-alert__message' },
})
export class BrightrailAlertMessageDirective {}
