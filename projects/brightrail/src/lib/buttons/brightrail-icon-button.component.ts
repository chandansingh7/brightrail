import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { BrightrailFocusVisibleDirective } from '../platform/brightrail-focus-visible.directive';

@Component({
  selector: 'brightrail-icon-button',
  standalone: true,
  imports: [BrightrailFocusVisibleDirective],
  template: `
    <button
      type="button"
      class="br-icon-button"
      brightrailFocusVisible
      [attr.aria-label]="ariaLabel() || null"
    >
      <span class="br-icon-button__glyph"><ng-content /></span>
    </button>
  `,
  styleUrl: './brightrail-icon-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailIconButtonComponent {
  /** Accessibility name when the button has no visible text. */
  readonly ariaLabel = input<string>('');
}
