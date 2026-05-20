import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  BrightrailAppShellComponent,
  BrightrailPageHeaderActionsDirective,
  BrightrailPageHeaderComponent,
  BrightrailPageSubtitleDirective,
  BrightrailPageTitleDirective,
  BrightrailSidebarComponent,
  BrightrailTopBarComponent,
} from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { APP_SHELL_VARIATION_SNIPPETS } from './app-shell-variation-snippets';

@Component({
  selector: 'app-app-shell-variation-catalog',
  standalone: true,
  imports: [
    BrightrailAppShellComponent,
    BrightrailSidebarComponent,
    BrightrailTopBarComponent,
    BrightrailPageHeaderComponent,
    BrightrailPageTitleDirective,
    BrightrailPageSubtitleDirective,
    BrightrailPageHeaderActionsDirective,
    CatalogVariationTileComponent,
  ],
  templateUrl: './app-shell-variation-catalog.component.html',
  styleUrl: './app-shell-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellVariationCatalogComponent {
  readonly s = APP_SHELL_VARIATION_SNIPPETS;
}
