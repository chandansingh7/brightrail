import { Directive } from '@angular/core';

/** Marks projected title region inside {@link BrightrailCardHeaderComponent} (`withTitle` layout). */
@Directive({
  selector: '[brightrailCardHeaderTitle]',
  standalone: true,
})
export class BrightrailCardHeaderTitleDirective {}

/** Marks projected trailing actions (icon buttons, menus) in the titled header row. */
@Directive({
  selector: '[brightrailCardHeaderActions]',
  standalone: true,
})
export class BrightrailCardHeaderActionsDirective {}

/** Optional leading visual (avatar, chart badge, logo) in the titled header row. */
@Directive({
  selector: '[brightrailCardHeaderLeading]',
  standalone: true,
})
export class BrightrailCardHeaderLeadingDirective {}
