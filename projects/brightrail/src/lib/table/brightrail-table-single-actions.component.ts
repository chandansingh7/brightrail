import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

/**
 * Slot for **single-select** row actions. Shown when exactly one row is selected.
 * Project any number of `<button>` elements or other controls (e.g. `brightrail-button`).
 *
 * Optional preset visuals — same classes as bulk actions:
 * - `br-table__bulk-btn--primary`, `--secondary`, `--ghost`, `--danger`
 *
 * Or bring your own markup/styles; the library only lays out the row.
 */
@Component({
  selector: 'brightrail-table-single-actions',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `<div class="br-table-single-actions" role="group"><ng-content /></div>`,
  styleUrl: './brightrail-table-single-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailTableSingleActionsComponent {}
