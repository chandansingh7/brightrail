import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'brightrail-card-footer',
  standalone: true,
  template: '<ng-content />',
  host: {
    class: 'br-card-footer',
  },
  styleUrl: './brightrail-card-parts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailCardFooterComponent {}
