import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import {
  BrightrailCheckboxComponent,
  BrightrailCheckboxGroupComponent,
  BrightrailCheckboxGroupOption,
} from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { CHECKBOX_VARIATION_SNIPPETS } from './checkbox-variation-snippets';

@Component({
  selector: 'app-checkbox-variation-catalog',
  standalone: true,
  imports: [BrightrailCheckboxComponent, BrightrailCheckboxGroupComponent, CatalogVariationTileComponent],
  templateUrl: './checkbox-variation-catalog.component.html',
  styleUrl: './checkbox-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxVariationCatalogComponent {
  readonly s = CHECKBOX_VARIATION_SNIPPETS;

  readonly verticalOptions: BrightrailCheckboxGroupOption[] = [
    { id: 'email', label: 'Email updates' },
    { id: 'sms', label: 'SMS alerts' },
    { id: 'push', label: 'Push notifications' },
  ];

  readonly horizontalOptions: BrightrailCheckboxGroupOption[] = [
    { id: 'opt-a', label: 'Option A' },
    { id: 'opt-b', label: 'Option B' },
    { id: 'opt-c', label: 'Option C' },
  ];

  readonly selectAllOptions: BrightrailCheckboxGroupOption[] = [
    { id: 'item-1', label: 'Item 1' },
    { id: 'item-2', label: 'Item 2' },
    { id: 'item-3', label: 'Item 3' },
  ];

  readonly verticalSelected = signal<string[]>(['email']);
  readonly horizontalSelected = signal<string[]>(['opt-b']);
  readonly selectAllSelected = signal<string[]>(['item-1']);

  onVerticalChange(ids: string[]): void {
    this.verticalSelected.set(ids);
  }

  onHorizontalChange(ids: string[]): void {
    this.horizontalSelected.set(ids);
  }

  onSelectAllChange(ids: string[]): void {
    this.selectAllSelected.set(ids);
  }
}
