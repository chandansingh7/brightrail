import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BrightrailStepComponent, BrightrailStepperComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { STEPPER_VARIATION_SNIPPETS } from './stepper-variation-snippets';

@Component({
  selector: 'app-stepper-variation-catalog',
  standalone: true,
  imports: [BrightrailStepperComponent, BrightrailStepComponent, CatalogVariationTileComponent],
  templateUrl: './stepper-variation-catalog.component.html',
  styleUrl: './stepper-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperVariationCatalogComponent {
  readonly s = STEPPER_VARIATION_SNIPPETS;
}
