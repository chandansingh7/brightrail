import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'brightrail-timeline',
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
