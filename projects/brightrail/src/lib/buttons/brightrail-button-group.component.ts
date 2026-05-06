import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type BrightrailButtonGroupMode = 'segmented' | 'pill' | 'compact';

@Component({
  selector: 'brightrail-button-group',
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
