import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

/**
 * Slot for bulk row actions (multi-select). Project `<button>` elements; style with:
 * - `br-table__bulk-btn--primary` — filled accent (main action)
 * - `br-table__bulk-btn--secondary` — outlined neutral (default if no modifier)
 * - `br-table__bulk-btn--ghost` — minimal / tertiary
 * - `br-table__bulk-btn--danger` — destructive
 *
 * The same classes apply in the `brightrail-table-single-actions` projection slot.
 */
@Component({
  selector: 'brightrail-table-bulk-actions',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `<div class="br-table-bulk-actions" role="group"><ng-content /></div>`,
  styleUrl: './brightrail-table-bulk-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailTableBulkActionsComponent {}
