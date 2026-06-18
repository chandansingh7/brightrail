import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailAlertActionsComponent,
  BrightrailAlertComponent,
  BrightrailAlertMessageDirective,
  BrightrailAlertTitleDirective,
  BrightrailBadgeComponent,
  BrightrailButtonComponent,
  BrightrailGraphComponent,
  BrightrailModalBodyComponent,
  BrightrailModalComponent,
  BrightrailModalFooterComponent,
  BrightrailModalHeaderComponent,
  BrightrailModalTitleDirective,
  BrightrailProgressComponent,
  BrightrailSliderComponent,
  BrightrailStepComponent,
  BrightrailStepperComponent,
  BrightrailSwitchComponent,
  BrightrailTableComponent,
  BrightrailTimelineComponent,
  BrightrailTimelineItemComponent,
} from 'brightrail';

import {
  FINTECH_PORTFOLIO_COLUMNS,
  FINTECH_PORTFOLIO_ROWS,
  FINTECH_REVENUE_SERIES,
} from '../../shared/demo-data';
import { DemoShellComponent } from '../../shared/demo-shell.component';
import { DEMO_SITES } from '../../shared/demo-sites.registry';
import { demoBreadcrumb } from '../../shared/demo-site.util';
import { DemoThemeService } from '../../shared/demo-theme.service';
import { LibraryCoverageHostComponent } from '../../shared/library-coverage-host.component';

@Component({
  selector: 'app-fintech-site',
  standalone: true,
  imports: [
    FormsModule,
    DemoShellComponent,
    BrightrailGraphComponent,
    BrightrailProgressComponent,
    BrightrailStepperComponent,
    BrightrailStepComponent,
    BrightrailAlertComponent,
    BrightrailAlertTitleDirective,
    BrightrailAlertMessageDirective,
    BrightrailAlertActionsComponent,
    BrightrailTimelineComponent,
    BrightrailTimelineItemComponent,
    BrightrailSwitchComponent,
    BrightrailSliderComponent,
    BrightrailTableComponent,
    BrightrailBadgeComponent,
    BrightrailButtonComponent,
    BrightrailModalComponent,
    BrightrailModalHeaderComponent,
    BrightrailModalBodyComponent,
    BrightrailModalFooterComponent,
    BrightrailModalTitleDirective,
    LibraryCoverageHostComponent,
  ],
  templateUrl: './fintech-site.component.html',
  styleUrl: './fintech-site.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FintechSiteComponent implements OnInit {
  private readonly theme = inject(DemoThemeService);

  readonly site = DEMO_SITES.fintech;
  readonly breadcrumbs = demoBreadcrumb(this.site, 'Portfolio');
  readonly holdings = FINTECH_PORTFOLIO_ROWS;
  readonly columns = FINTECH_PORTFOLIO_COLUMNS;
  readonly revenueSeries = FINTECH_REVENUE_SERIES;
  autoInvest = true;
  riskTolerance = 60;
  readonly approvalOpen = signal(false);
  readonly onboardingStep = signal(1);

  ngOnInit(): void {
    this.theme.applySite(this.site);
  }
}
