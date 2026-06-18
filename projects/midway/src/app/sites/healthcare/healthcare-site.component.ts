import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailAccordionComponent,
  BrightrailAccordionItemComponent,
  BrightrailAlertComponent,
  BrightrailAlertMessageDirective,
  BrightrailButtonComponent,
  BrightrailCheckboxComponent,
  BrightrailCheckboxGroupComponent,
  BrightrailDatePickerComponent,
  BrightrailDrawerBodyComponent,
  BrightrailDrawerComponent,
  BrightrailDrawerFooterComponent,
  BrightrailDrawerHeaderComponent,
  BrightrailDrawerTitleDirective,
  BrightrailFileUploadComponent,
  BrightrailRadioGroupComponent,
  BrightrailTextareaComponent,
  BrightrailTextFieldComponent,
  BrightrailValidationSummaryComponent,
} from 'brightrail';

import { DemoShellComponent } from '../../shared/demo-shell.component';
import { DEMO_SITES } from '../../shared/demo-sites.registry';
import { demoBreadcrumb } from '../../shared/demo-site.util';
import { DemoThemeService } from '../../shared/demo-theme.service';
import { LibraryCoverageHostComponent } from '../../shared/library-coverage-host.component';

@Component({
  selector: 'app-healthcare-site',
  standalone: true,
  imports: [
    FormsModule,
    DemoShellComponent,
    BrightrailAccordionComponent,
    BrightrailAccordionItemComponent,
    BrightrailTextFieldComponent,
    BrightrailTextareaComponent,
    BrightrailCheckboxComponent,
    BrightrailCheckboxGroupComponent,
    BrightrailRadioGroupComponent,
    BrightrailDatePickerComponent,
    BrightrailFileUploadComponent,
    BrightrailValidationSummaryComponent,
    BrightrailAlertComponent,
    BrightrailAlertMessageDirective,
    BrightrailDrawerComponent,
    BrightrailDrawerHeaderComponent,
    BrightrailDrawerBodyComponent,
    BrightrailDrawerFooterComponent,
    BrightrailDrawerTitleDirective,
    BrightrailButtonComponent,
    LibraryCoverageHostComponent,
  ],
  templateUrl: './healthcare-site.component.html',
  styleUrl: './healthcare-site.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HealthcareSiteComponent implements OnInit {
  private readonly theme = inject(DemoThemeService);

  readonly site = DEMO_SITES.healthcare;
  readonly breadcrumbs = demoBreadcrumb(this.site, 'Patient intake');
  readonly drawerOpen = signal(false);
  patientName = '';
  symptoms = '';
  visitType = 'routine';
  consent = false;
  contactPrefs: string[] = ['email'];
  dob = '';
  readonly errors = signal<string[]>([]);

  readonly visitTypeOptions = [
    { id: 'routine', label: 'Routine check-up' },
    { id: 'urgent', label: 'Urgent care' },
    { id: 'followup', label: 'Follow-up' },
  ];

  readonly contactOptions = [
    { id: 'email', label: 'Email reminders' },
    { id: 'sms', label: 'SMS alerts' },
    { id: 'portal', label: 'Portal messages' },
  ];

  ngOnInit(): void {
    this.theme.applySite(this.site);
  }

  submitIntake(): void {
    const next: string[] = [];
    if (!this.patientName.trim()) {
      next.push('Full name is required');
    }
    if (!this.consent) {
      next.push('HIPAA consent must be accepted');
    }
    this.errors.set(next);
    if (!next.length) {
      this.drawerOpen.set(true);
    }
  }
}
