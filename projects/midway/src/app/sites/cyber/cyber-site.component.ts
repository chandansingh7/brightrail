import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import {
  BrightrailAlertComponent,
  BrightrailAlertMessageDirective,
  BrightrailAlertTitleDirective,
  BrightrailBadgeComponent,
  BrightrailButtonComponent,
  BrightrailButtonGroupComponent,
  BrightrailChipComponent,
  BrightrailCyberBadgeComponent,
  BrightrailGraphComponent,
  BrightrailHolographicPanelComponent,
  BrightrailNeuralGraphComponent,
  BrightrailProgressComponent,
  BrightrailQuantumStepperComponent,
  BrightrailSkeletonComponent,
  BrightrailTableComponent,
  BrightrailToastService,
} from 'brightrail';

import {
  CYBER_THREAT_COLUMNS,
  CYBER_THREAT_ROWS,
  FINTECH_REVENUE_SERIES,
  NEURAL_GRAPH_LINKS,
  NEURAL_GRAPH_NODES,
  QUANTUM_STEPS,
} from '../../shared/demo-data';
import { DemoShellComponent } from '../../shared/demo-shell.component';
import { DEMO_SITES } from '../../shared/demo-sites.registry';
import { demoBreadcrumb } from '../../shared/demo-site.util';
import { DemoThemeService } from '../../shared/demo-theme.service';
import { LibraryCoverageHostComponent } from '../../shared/library-coverage-host.component';

@Component({
  selector: 'app-cyber-site',
  standalone: true,
  imports: [
    DemoShellComponent,
    BrightrailCyberBadgeComponent,
    BrightrailHolographicPanelComponent,
    BrightrailNeuralGraphComponent,
    BrightrailQuantumStepperComponent,
    BrightrailGraphComponent,
    BrightrailTableComponent,
    BrightrailAlertComponent,
    BrightrailAlertTitleDirective,
    BrightrailAlertMessageDirective,
    BrightrailBadgeComponent,
    BrightrailChipComponent,
    BrightrailButtonComponent,
    BrightrailButtonGroupComponent,
    BrightrailProgressComponent,
    BrightrailSkeletonComponent,
    LibraryCoverageHostComponent,
  ],
  templateUrl: './cyber-site.component.html',
  styleUrl: './cyber-site.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CyberSiteComponent implements OnInit {
  private readonly theme = inject(DemoThemeService);
  private readonly toast = inject(BrightrailToastService);

  readonly site = DEMO_SITES.cyber;
  readonly breadcrumbs = demoBreadcrumb(this.site, 'SOC dashboard');
  readonly threats = CYBER_THREAT_ROWS;
  readonly columns = CYBER_THREAT_COLUMNS;
  readonly neuralNodes = NEURAL_GRAPH_NODES;
  readonly neuralLinks = NEURAL_GRAPH_LINKS;
  readonly quantumSteps = QUANTUM_STEPS;
  readonly telemetrySeries = FINTECH_REVENUE_SERIES;
  readonly holoMetrics = [
    { label: 'Events / sec', value: '12.4k', unit: 'eps', trend: 'up' as const },
    { label: 'Blocked', value: '842', trend: 'down' as const },
    { label: 'Mean detect', value: '1.8', unit: 's', trend: 'flat' as const },
  ];
  readonly scanStep = signal(1);
  readonly liveFeed = signal(true);

  ngOnInit(): void {
    this.theme.applySite(this.site);
  }

  runPlaybook(): void {
    this.toast.show({
      title: 'Countermeasure deployed',
      message: 'Isolation rules applied to subnet 10.0.4.0/24.',
      variant: 'success',
    });
  }
}
