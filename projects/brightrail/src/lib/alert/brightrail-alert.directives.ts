import { Directive } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

/** Projects into the alert headline row (bold title). */
@Directive({
  selector: '[brightrailAlertTitle]',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
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
