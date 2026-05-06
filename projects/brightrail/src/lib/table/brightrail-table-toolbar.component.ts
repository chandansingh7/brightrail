import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'brightrail-table-toolbar',
  standalone: true,
  template: `<div class="br-table-toolbar" role="toolbar"><ng-content /></div>`,
  styleUrl: './brightrail-table-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailTableToolbarComponent {}
