import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  BrightrailProgressComponent,
  BrightrailProgressFileRowComponent,
  BrightrailStepComponent,
  BrightrailStepperComponent,
} from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { PROGRESS_VARIATION_SNIPPETS } from './progress-variation-snippets';

@Component({
  selector: 'app-progress-variation-catalog',
  standalone: true,
  imports: [
    BrightrailProgressComponent,
    BrightrailStepperComponent,
    BrightrailStepComponent,
    BrightrailProgressFileRowComponent,
    CatalogVariationTileComponent,
  ],
  templateUrl: './progress-variation-catalog.component.html',
  styleUrl: './progress-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressVariationCatalogComponent {
  readonly s = PROGRESS_VARIATION_SNIPPETS;
}
