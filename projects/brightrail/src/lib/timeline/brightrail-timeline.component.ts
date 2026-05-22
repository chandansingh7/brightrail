import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

@Component({
  selector: 'brightrail-timeline',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `
    <ol class="br-timeline" [attr.aria-label]="ariaLabel() || null">
      <ng-content />
    </ol>
  `,
  styleUrl: './brightrail-timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'br-timeline-host',
  },
})
export class BrightrailTimelineComponent {
  readonly ariaLabel = input('Timeline');
}
