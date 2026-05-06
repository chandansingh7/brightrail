import { Directive, TemplateRef, inject } from '@angular/core';

/** Marks an `ng-template` whose content is shown when this tab is selected. */
@Directive({
  selector: '[brightrailTabContent]',
  standalone: true,
})
export class BrightrailTabContentDirective {
  readonly templateRef = inject(TemplateRef<unknown>);
}
