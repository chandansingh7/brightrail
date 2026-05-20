import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrightrailAccordionComponent, BrightrailAccordionItemComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { ACCORDION_VARIATION_SNIPPETS } from './accordion-variation-snippets';

@Component({
  selector: 'app-accordion-variation-catalog',
  standalone: true,
  imports: [BrightrailAccordionComponent, BrightrailAccordionItemComponent, CatalogVariationTileComponent],
  templateUrl: './accordion-variation-catalog.component.html',
  styleUrl: './accordion-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionVariationCatalogComponent {
  readonly s = ACCORDION_VARIATION_SNIPPETS;
}
