import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { BrightrailIconButtonComponent } from '../buttons/brightrail-icon-button.component';

/**
 * Optional preset actions for {@link BrightrailTableToolbarComponent}: search, filter (funnel),
 * download, and overflow — matching the advanced multi-select table reference layout.
 */
@Component({
  selector: 'brightrail-table-toolbar-actions',
  standalone: true,
  imports: [BrightrailIconButtonComponent],
  templateUrl: './brightrail-table-toolbar-actions.component.html',
  styleUrl: './brightrail-table-toolbar-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailTableToolbarActionsComponent {
  readonly searchClick = output<void>();
  readonly filterClick = output<void>();
  readonly downloadClick = output<void>();
  readonly moreClick = output<void>();
}
