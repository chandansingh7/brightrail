import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

@Component({
  selector: 'brightrail-drawer-body',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `
    <section class="br-drawer__body" [class.br-drawer__body--flush]="flush()">
      <ng-content />
    </section>
  `,
  styleUrl: './brightrail-drawer-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailDrawerBodyComponent {
  readonly flush = input(false);
}
