import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BrightrailToastComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { TOAST_VARIATION_SNIPPETS } from './toast-variation-snippets';

@Component({
  selector: 'app-toast-variation-catalog',
  standalone: true,
  imports: [BrightrailToastComponent, CatalogVariationTileComponent],
  templateUrl: './toast-variation-catalog.component.html',
  styleUrl: './toast-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastVariationCatalogComponent {
  readonly s = TOAST_VARIATION_SNIPPETS;
}
