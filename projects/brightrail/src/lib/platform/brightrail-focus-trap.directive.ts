import { Directive, booleanAttribute, input } from '@angular/core';
import { CdkTrapFocus } from '@angular/cdk/a11y';

/**
 * Traps keyboard focus inside an overlay surface such as a modal or drawer.
 * Wraps CDK {@link CdkTrapFocus} as part of the Brightrail platform layer.
 */
@Directive({
  selector: '[brightrailFocusTrap]',
  standalone: true,
  hostDirectives: [
    {
      directive: CdkTrapFocus,
      inputs: ['cdkTrapFocus: brightrailFocusTrap', 'cdkTrapFocusAutoCapture: brightrailFocusTrapAutoCapture'],
    },
  ],
})
export class BrightrailFocusTrapDirective {
  readonly brightrailFocusTrap = input(true, { transform: booleanAttribute });
  readonly brightrailFocusTrapAutoCapture = input(true, { transform: booleanAttribute });
}
