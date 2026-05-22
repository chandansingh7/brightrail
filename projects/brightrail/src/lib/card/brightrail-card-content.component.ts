import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

@Component({
  selector: 'brightrail-card-content',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: '<ng-content />',
  host: {
    class: 'br-card-content',
  },
  styleUrl: './brightrail-card-parts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailCardContentComponent {}
