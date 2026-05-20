import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrightrailTextFieldComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { TEXT_FIELD_VARIATION_SNIPPETS } from './text-field-variation-snippets';

@Component({
  selector: 'app-text-field-variation-catalog',
  standalone: true,
  imports: [BrightrailTextFieldComponent, FormsModule, CatalogVariationTileComponent],
  templateUrl: './text-field-variation-catalog.component.html',
  styleUrl: './text-field-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldVariationCatalogComponent {
  readonly s = TEXT_FIELD_VARIATION_SNIPPETS;

  appearanceValue = 'Brightrail';
  labelDemoValue = '';
  insetValue = 'Phoenix';
  leftLabelValue = '120';
  rightLabelValue = '';
  searchValue = '';
  sizeValue = '';
  successValue = 'jamie';
  warningValue = '';
  errorValue = '';
  infoValue = '';
  disabledValue = 'AC-1042';
  shapeValue = '';
  clearableValue = 'Quarterly report';
  passwordValue = '';
  iconLeftValue = '';
  iconRightValue = '';
  iconsBothValue = '42';
}
