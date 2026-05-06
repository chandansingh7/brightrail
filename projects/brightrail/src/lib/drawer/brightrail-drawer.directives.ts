import { Directive } from '@angular/core';

@Directive({
  selector: '[brightrailDrawerTitle]',
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
