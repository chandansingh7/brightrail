import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  BrightrailButtonComponent,
  BrightrailModalBodyComponent,
  BrightrailModalComponent,
  BrightrailModalFooterComponent,
  BrightrailModalHeaderComponent,
  BrightrailModalTitleDirective,
} from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { MODAL_VARIATION_SNIPPETS } from './modal-variation-snippets';

@Component({
  selector: 'app-modal-variation-catalog',
  standalone: true,
  imports: [
    BrightrailModalComponent,
    BrightrailModalHeaderComponent,
    BrightrailModalBodyComponent,
    BrightrailModalFooterComponent,
    BrightrailModalTitleDirective,
    BrightrailButtonComponent,
    CatalogVariationTileComponent,
  ],
  templateUrl: './modal-variation-catalog.component.html',
  styleUrl: './modal-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalVariationCatalogComponent {
  readonly s = MODAL_VARIATION_SNIPPETS;
}
