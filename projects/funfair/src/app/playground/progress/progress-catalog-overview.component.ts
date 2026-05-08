import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  BrightrailProgressComponent,
  BrightrailProgressFileRowComponent,
  BrightrailStepComponent,
  BrightrailStepperComponent,
} from 'brightrail';

@Component({
  selector: 'app-progress-catalog-overview',
  standalone: true,
  imports: [
    RouterLink,
    BrightrailProgressComponent,
    BrightrailStepperComponent,
    BrightrailStepComponent,
    BrightrailProgressFileRowComponent,
  ],
  templateUrl: './progress-catalog-overview.component.html',
  styleUrl: './progress-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressCatalogOverviewComponent {}
