import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import {
  BrightrailRadioComponent,
  BrightrailRadioGroupComponent,
  BrightrailRadioGroupOption,
} from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { RADIO_VARIATION_SNIPPETS } from './radio-variation-snippets';

@Component({
  selector: 'app-radio-variation-catalog',
  standalone: true,
  imports: [BrightrailRadioComponent, BrightrailRadioGroupComponent, CatalogVariationTileComponent],
  templateUrl: './radio-variation-catalog.component.html',
  styleUrl: './radio-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioVariationCatalogComponent {
  readonly s = RADIO_VARIATION_SNIPPETS;

  readonly verticalOptions: BrightrailRadioGroupOption[] = [
    { id: 'first', label: 'First option', helperText: 'Recommended for most users' },
    { id: 'second', label: 'Second option' },
    { id: 'third', label: 'Third option' },
  ];

  readonly horizontalOptions: BrightrailRadioGroupOption[] = [
    { id: 'a', label: 'Option A' },
    { id: 'b', label: 'Option B' },
  ];

  readonly validationOptions: BrightrailRadioGroupOption[] = [
    { id: 'yes', label: 'Yes' },
    { id: 'no', label: 'No' },
  ];

  readonly verticalSelected = signal('first');
  readonly horizontalSelected = signal('a');
  readonly validationSelected = signal('');

  onVerticalChange(id: string): void {
    this.verticalSelected.set(id);
  }

  onHorizontalChange(id: string): void {
    this.horizontalSelected.set(id);
  }

  onValidationChange(id: string): void {
    this.validationSelected.set(id);
  }
}
