import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

/**
 * One step inside `brightrail-stepper`. Optional projected content is rendered in workflow layout.
 */
@Component({
  selector: 'brightrail-step',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'br-step',
    style: 'display: contents;',
  },
})
export class BrightrailStepComponent {
  /** Workflow / step title (e.g. "Verify Email"). */
  readonly label = input('');
  /** Optional secondary label. */
  readonly description = input('');
  /** Milestone caption (legacy API). */
  readonly caption = input('');
  /** Optional explicit status (otherwise inferred from currentStep). */
  readonly status = input<'completed' | 'current' | 'pending' | 'error' | 'disabled' | 'inactive'>('pending');
}
