import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * One step inside `brightrail-stepper`. Optional projected content is rendered in workflow layout.
 */
@Component({
  selector: 'brightrail-step',
  standalone: true,
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'br-step',
    style: 'display: contents;',
  },
})
export class BrightrailStepComponent {
  /** Workflow title (e.g. "Verify Email"). */
  readonly label = input('');
  /** Milestone caption (e.g. "Complete", "60%", "Pending"). */
  readonly caption = input('');
}
