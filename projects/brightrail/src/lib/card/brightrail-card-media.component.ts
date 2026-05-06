import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'brightrail-card-media',
  standalone: true,
  template: '<ng-content />',
  host: {
    class: 'br-card-media',
  },
  styleUrl: './brightrail-card-parts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailCardMediaComponent {}
