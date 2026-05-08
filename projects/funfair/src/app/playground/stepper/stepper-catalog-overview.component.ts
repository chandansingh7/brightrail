import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrightrailStepComponent, BrightrailStepperComponent } from 'brightrail';

@Component({
  selector: 'app-stepper-catalog-overview',
  standalone: true,
  imports: [RouterLink, BrightrailStepperComponent, BrightrailStepComponent],
  templateUrl: './stepper-catalog-overview.component.html',
  styleUrl: './stepper-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperCatalogOverviewComponent {}
