import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

export type BrightrailButtonGroupMode = 'segmented' | 'pill' | 'compact';

@Component({
  selector: 'brightrail-button-group',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `
    <div
      class="br-group"
      [class.br-group--segmented]="mode() === 'segmented'"
      [class.br-group--pill]="mode() === 'pill'"
      [class.br-group--compact]="mode() === 'compact'"
      role="group"
    >
      <ng-content />
    </div>
  `,
  styleUrl: './brightrail-button-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailButtonGroupComponent {
  readonly mode = input<BrightrailButtonGroupMode>('segmented');
}
