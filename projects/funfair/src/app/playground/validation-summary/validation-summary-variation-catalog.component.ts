import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrightrailValidationSummaryComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import {
  VALIDATION_SUMMARY_DEMO_ERRORS,
  VALIDATION_SUMMARY_FIELD_ERRORS,
  VALIDATION_SUMMARY_VARIATION_SNIPPETS,
} from './validation-summary-variation-snippets';

@Component({
  selector: 'app-validation-summary-variation-catalog',
  standalone: true,
  imports: [BrightrailValidationSummaryComponent, CatalogVariationTileComponent],
  templateUrl: './validation-summary-variation-catalog.component.html',
  styleUrl: './validation-summary-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidationSummaryVariationCatalogComponent {
  readonly s = VALIDATION_SUMMARY_VARIATION_SNIPPETS;
  readonly stringErrors = VALIDATION_SUMMARY_DEMO_ERRORS;
  readonly fieldErrors = VALIDATION_SUMMARY_FIELD_ERRORS;
  readonly manyErrors = [
    'Name is required',
    'Email is required',
    { field: 'phone', message: 'Enter a valid phone number' },
    { field: 'address', message: 'Street is required' },
  ];
}
