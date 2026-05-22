import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

export type BrightrailCardActionsAlign = 'start' | 'center' | 'end' | 'between';

@Component({
  selector: 'brightrail-card-actions',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'hostClass()',
  },
  styleUrl: './brightrail-card-actions.component.scss',
})
export class BrightrailCardActionsComponent {
  readonly align = input<BrightrailCardActionsAlign>('start');

  readonly hostClass = computed(
    () => `br-card-actions br-card-actions--${this.align()}`,
  );
}
