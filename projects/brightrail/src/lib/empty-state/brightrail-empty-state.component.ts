import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'brightrail-empty-state',
  standalone: true,
  template: `
    <div class="br-empty" [class]="hostClass()">
      <div class="br-empty__icon-slot">
        <ng-content select="[brightrailEmptyStateIcon]" />
      </div>
      <div class="br-empty__copy">
        @if (title().trim().length > 0) {
          <h3 class="br-empty__title">{{ title() }}</h3>
        }
        @if (description().trim().length > 0) {
          <p class="br-empty__desc">{{ description() }}</p>
        }
      </div>
      <div class="br-empty__action-slot">
        <ng-content select="[brightrailEmptyStateAction]" />
      </div>
    </div>
  `,
  styleUrl: './brightrail-empty-state.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailEmptyStateComponent {
  readonly title = input('');
  readonly description = input('');
  readonly compact = input(false);

  readonly hostClass = computed(() => (this.compact() ? 'br-empty--compact' : ''));
}
