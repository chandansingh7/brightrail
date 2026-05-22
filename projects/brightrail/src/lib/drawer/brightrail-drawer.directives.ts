import { Directive } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

@Directive({
  selector: '[brightrailDrawerTitle]',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  host: {
    class: 'br-drawer__header-title',
  },
})
export class BrightrailDrawerTitleDirective {}

@Directive({
  selector: '[brightrailDrawerSubtitle]',
  standalone: true,
  host: {
    class: 'br-drawer__header-subtitle',
  },
})
export class BrightrailDrawerSubtitleDirective {}

@Directive({
  selector: '[brightrailDrawerHeaderActions]',
  standalone: true,
  host: {
    class: 'br-drawer__header-actions',
  },
})
export class BrightrailDrawerHeaderActionsDirective {}
