import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

@Component({
  selector: 'brightrail-card-footer',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: '<ng-content />',
  host: {
    class: 'br-card-footer',
  },
  styleUrl: './brightrail-card-parts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailCardFooterComponent {}
