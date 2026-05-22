import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

@Component({
  selector: 'brightrail-drawer-footer',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `
    <footer class="br-drawer__footer">
      <ng-content />
    </footer>
  `,
  styleUrl: './brightrail-drawer-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailDrawerFooterComponent {}
