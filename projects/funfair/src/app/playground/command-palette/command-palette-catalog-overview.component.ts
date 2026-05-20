import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CommandPaletteVariationCatalogComponent } from './command-palette-variation-catalog.component';
import { COMMAND_PALETTE_HTML_EXAMPLES } from './command-palette-variation-snippets';

@Component({
  selector: 'app-command-palette-catalog-overview',
  standalone: true,
  imports: [RouterLink, CommandPaletteVariationCatalogComponent],
  templateUrl: './command-palette-catalog-overview.component.html',
  styleUrl: './command-palette-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandPaletteCatalogOverviewComponent {
  readonly htmlExamples = COMMAND_PALETTE_HTML_EXAMPLES;
}
