import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

import { copyTextToClipboard } from './copy-to-clipboard.util';

/**
 * Clickable catalog tile: live preview, expand to show copy-ready markup for the library API.
 */
@Component({
  selector: 'app-catalog-variation-tile',
  standalone: true,
  templateUrl: './catalog-variation-tile.component.html',
  styleUrl: './catalog-variation-tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogVariationTileComponent {
  readonly label = input.required<string>();
  readonly snippet = input.required<string>();
  /** Short hint under the label (optional). */
  readonly hint = input<string | undefined>(undefined);

  readonly expanded = signal(false);
  readonly copyState = signal<'idle' | 'copied' | 'failed'>('idle');

  toggle(): void {
    this.expanded.update((v) => !v);
    if (!this.expanded()) {
      this.copyState.set('idle');
    }
  }

  async copySnippet(): Promise<void> {
    const ok = await copyTextToClipboard(this.snippet());
    this.copyState.set(ok ? 'copied' : 'failed');
    if (ok) {
      window.setTimeout(() => this.copyState.set('idle'), 2000);
    }
  }
}
