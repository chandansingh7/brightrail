import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrightrailTextareaComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { TEXTAREA_VARIATION_SNIPPETS } from './textarea-variation-snippets';

@Component({
  selector: 'app-textarea-variation-catalog',
  standalone: true,
  imports: [FormsModule, BrightrailTextareaComponent, CatalogVariationTileComponent],
  templateUrl: './textarea-variation-catalog.component.html',
  styleUrl: './textarea-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaVariationCatalogComponent {
  readonly s = TEXTAREA_VARIATION_SNIPPETS;

  readonly demoDescription = 'Sample project description for the catalog preview.';
  readonly demoNotes = 'Quick notes go here.';
  readonly demoTerms = 'These terms govern use of the service.';
  readonly demoBio = 'Product designer with 8 years of experience.';
  readonly demoFeedback = '';
  readonly demoShortNote = '';
  readonly demoMessage = '';
  readonly demoValue = 'Medium textarea content.';
  readonly demoSummary = 'All requirements met.';
  readonly demoAddress = '123 Main St';
  readonly demoReason = '';
  readonly demoInstructions = 'Follow the steps below.';
  readonly demoLocked = 'Cannot edit this content.';
  readonly demoFixed = 'Fixed height content.';
  readonly demoVertical = 'Vertical resize enabled.';
  readonly demoHorizontal = 'Horizontal resize enabled.';
  readonly demoBoth = 'Both axes resize enabled.';
  readonly demoProject = 'A comprehensive platform for team collaboration.';
  readonly demoDraft = 'Saving draft…';
  futuristicGlassValue = '';
  futuristicNeonValue = '';
  futuristicCyberValue = '';
  futuristicHoloValue = '';
}
