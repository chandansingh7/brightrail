import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailFormFieldComponent,
  BrightrailSwitchComponent,
  BrightrailTextFieldComponent,
} from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { FORM_FIELD_VARIATION_SNIPPETS } from './form-field-variation-snippets';

@Component({
  selector: 'app-form-field-variation-catalog',
  standalone: true,
  imports: [
    FormsModule,
    BrightrailFormFieldComponent,
    BrightrailTextFieldComponent,
    BrightrailSwitchComponent,
    CatalogVariationTileComponent,
  ],
  templateUrl: './form-field-variation-catalog.component.html',
  styleUrl: './form-field-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldVariationCatalogComponent {
  readonly s = FORM_FIELD_VARIATION_SNIPPETS;
  readonly ngModelStandalone = { standalone: true };

  email = 'you@example.com';
  displayName = 'Jane Doe';
  reference = '';
  workspace = 'Acme Corp';
  password = '';
  apiKey = '';
  company = 'Brightrail Inc.';
  title = 'Product designer';
  notificationsOn = true;
  acceptedTerms = false;
  firstName = 'Jane';
  lastName = 'Doe';
  isPublic = false;
  showApiKeyError = true;
}
