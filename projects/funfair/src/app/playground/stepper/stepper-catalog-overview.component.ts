import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { StepperVariationCatalogComponent } from './stepper-variation-catalog.component';
import { STEPPER_HTML_EXAMPLES } from './stepper-variation-snippets';

@Component({
  selector: 'app-stepper-catalog-overview',
  standalone: true,
  imports: [RouterLink, StepperVariationCatalogComponent],
  templateUrl: './stepper-catalog-overview.component.html',
  styleUrl: './stepper-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperCatalogOverviewComponent {
  readonly htmlExamples = STEPPER_HTML_EXAMPLES;
}
