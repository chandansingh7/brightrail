import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'brightrail-card-content',
  standalone: true,
  template: '<ng-content />',
  host: {
    class: 'br-card-content',
  },
  styleUrl: './brightrail-card-parts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailCardContentComponent {}
