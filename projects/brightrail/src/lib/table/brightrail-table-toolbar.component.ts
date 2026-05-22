import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

@Component({
  selector: 'brightrail-table-toolbar',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `<div class="br-table-toolbar" role="toolbar"><ng-content /></div>`,
  styleUrl: './brightrail-table-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailTableToolbarComponent {}
