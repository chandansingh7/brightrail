import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

@Component({
  selector: 'brightrail-modal-header',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `
    <header class="br-modal__header">
      <div class="br-modal__header-main">
        <ng-content select="[brightrailModalTitle]" />
      </div>
      <div class="br-modal__header-aside">
        <ng-content select="[brightrailModalHeaderActions]" />
      </div>
    </header>
  `,
  styleUrl: './brightrail-modal-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailModalHeaderComponent {}
