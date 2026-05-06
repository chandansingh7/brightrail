import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  BrightrailButtonComponent,
  BrightrailDrawerBodyComponent,
  BrightrailDrawerComponent,
  BrightrailDrawerFooterComponent,
  BrightrailDrawerHeaderComponent,
  BrightrailDrawerTitleDirective,
} from 'brightrail';

@Component({
  selector: 'app-drawer-catalog-overview',
  standalone: true,
  imports: [
    BrightrailDrawerComponent,
    BrightrailDrawerHeaderComponent,
    BrightrailDrawerBodyComponent,
    BrightrailDrawerFooterComponent,
    BrightrailDrawerTitleDirective,
    BrightrailButtonComponent,
  ],
  templateUrl: './drawer-catalog-overview.component.html',
  styleUrl: './drawer-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerCatalogOverviewComponent {}
