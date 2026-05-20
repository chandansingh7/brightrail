import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import type { BrightrailTimelineItemStatus } from './brightrail-timeline.types';

@Component({
  selector: 'brightrail-timeline-item',
  standalone: true,
  template: `
    <li [class]="'br-timeline__item ' + statusClass()">
      <div class="br-timeline__track" aria-hidden="true">
        <span class="br-timeline__dot"></span>
        <span class="br-timeline__line"></span>
      </div>
      <div class="br-timeline__content">
        @if (title().trim()) {
          <div class="br-timeline__title">{{ title() }}</div>
        }
        @if (description().trim()) {
          <div class="br-timeline__description">{{ description() }}</div>
        }
        <ng-content />
      </div>
    </li>
  `,
  styleUrl: './brightrail-timeline-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailTimelineItemComponent {
  readonly title = input('');
  readonly description = input('');
  readonly status = input<BrightrailTimelineItemStatus>('pending');
  readonly statusClass = computed(() => `br-timeline__item--${this.status()}`);
}
