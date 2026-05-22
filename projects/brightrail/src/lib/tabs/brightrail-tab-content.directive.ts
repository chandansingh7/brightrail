import { Directive, TemplateRef, inject } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

/** Marks an `ng-template` whose content is shown when this tab is selected. */
@Directive({
  selector: '[brightrailTabContent]',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
})
export class BrightrailTabContentDirective {
  readonly templateRef = inject(TemplateRef<unknown>);
}
