import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BrightrailCommandPaletteComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import {
  COMMAND_PALETTE_DEMO_COMMANDS,
  COMMAND_PALETTE_GROUPED,
  COMMAND_PALETTE_VARIATION_SNIPPETS,
  COMMAND_PALETTE_WITH_DISABLED,
} from './command-palette-variation-snippets';

@Component({
  selector: 'app-command-palette-variation-catalog',
  standalone: true,
  imports: [BrightrailCommandPaletteComponent, CatalogVariationTileComponent],
  templateUrl: './command-palette-variation-catalog.component.html',
  styleUrl: './command-palette-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandPaletteVariationCatalogComponent {
  readonly s = COMMAND_PALETTE_VARIATION_SNIPPETS;
  readonly demoCommands = COMMAND_PALETTE_DEMO_COMMANDS;
  readonly groupedCommands = COMMAND_PALETTE_GROUPED;
  readonly disabledCommands = COMMAND_PALETTE_WITH_DISABLED;
  readonly paletteOpen = signal(false);

  openPalette(): void {
    this.paletteOpen.set(true);
  }
}
