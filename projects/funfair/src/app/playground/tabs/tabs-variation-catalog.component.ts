import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import {
  BrightrailTabComponent,
  BrightrailTabContentDirective,
  BrightrailTabsComponent,
} from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { TABS_VARIATION_SNIPPETS } from './tabs-variation-snippets';

interface ClosableTabDef {
  label: string;
  active?: boolean;
}

@Component({
  selector: 'app-tabs-variation-catalog',
  standalone: true,
  imports: [
    BrightrailTabsComponent,
    BrightrailTabComponent,
    BrightrailTabContentDirective,
    CatalogVariationTileComponent,
  ],
  templateUrl: './tabs-variation-catalog.component.html',
  styleUrl: './tabs-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsVariationCatalogComponent {
  readonly s = TABS_VARIATION_SNIPPETS;

  readonly scrollableSegments = Array.from({ length: 8 }, (_, i) => ({
    label: `Segment ${i + 1}`,
    body: `Content for segment ${i + 1}.`,
    active: i === 0,
  }));

  readonly closableTabs = signal<ClosableTabDef[]>([
    { label: 'Overview', active: true },
    { label: 'Details' },
    { label: 'Activity' },
  ]);

  onClosableClose(label: string): void {
    this.closableTabs.update((rows) => rows.filter((r) => r.label !== label));
  }
}
