import { Directive } from '@angular/core';

/** Primary page title inside {@link BrightrailPageHeaderComponent}. */
@Directive({
  selector: '[brightrailPageTitle]',
  standalone: true,
  host: { class: 'br-page-header__title' },
})
export class BrightrailPageTitleDirective {}

/** Secondary line under the page title. */
@Directive({
  selector: '[brightrailPageSubtitle]',
  standalone: true,
  host: { class: 'br-page-header__subtitle' },
})
export class BrightrailPageSubtitleDirective {}

/** Trailing actions (buttons, menus) in the page header. */
@Directive({
  selector: '[brightrailPageHeaderActions]',
  standalone: true,
  host: { class: 'br-page-header__actions-inner' },
})
export class BrightrailPageHeaderActionsDirective {}
