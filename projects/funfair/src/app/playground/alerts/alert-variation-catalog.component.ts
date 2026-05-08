import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import {
  BrightrailAlertActionsComponent,
  BrightrailAlertAppearance,
  BrightrailAlertComponent,
  BrightrailAlertMessageDirective,
  BrightrailAlertStatus,
  BrightrailAlertTitleDirective,
  BrightrailButtonComponent,
} from 'brightrail';

/**
 * §1–§8 reference tiles. Mirror inputs tint non-varying dimensions; each section still swaps the
 * dimension it illustrates (status grid, appearance grid, etc.). Used from the alerts resource guide.
 */
@Component({
  selector: 'app-alert-variation-catalog',
  standalone: true,
  imports: [
    BrightrailAlertComponent,
    BrightrailAlertTitleDirective,
    BrightrailAlertMessageDirective,
    BrightrailAlertActionsComponent,
    BrightrailButtonComponent,
  ],
  templateUrl: './alert-variation-catalog.component.html',
  styleUrl: './alert-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertVariationCatalogComponent {
  readonly mirrorAppearance = input<BrightrailAlertAppearance>('soft');
  readonly mirrorStatus = input<BrightrailAlertStatus>('info');
  readonly mirrorSize = input<'sm' | 'md' | 'lg'>('md');
  readonly mirrorCorners = input<'rounded' | 'square'>('rounded');

  /** 0 = show every section; 1–8 = show only that numbered section */
  readonly focusSection = input<number>(0);

  readonly coreStatuses: BrightrailAlertStatus[] = ['info', 'success', 'warning', 'error'];

  readonly appearanceVariants: BrightrailAlertAppearance[] = ['filled', 'soft', 'outlined', 'tonal'];

  sectionVisible(section: number): boolean {
    const f = this.focusSection();
    return f === 0 || f === section;
  }
}
