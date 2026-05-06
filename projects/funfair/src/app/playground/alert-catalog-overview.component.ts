import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  BrightrailAlertAppearance,
  BrightrailAlertStatus,
} from 'brightrail';

import { AlertVariationCatalogComponent } from './alert-variation-catalog.component';

@Component({
  selector: 'app-alert-catalog-overview',
  standalone: true,
  imports: [FormsModule, RouterLink, AlertVariationCatalogComponent],
  templateUrl: './alert-catalog-overview.component.html',
  styleUrl: './alert-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertCatalogOverviewComponent {
  readonly canonicalSnippet = `<brightrail-alert
  appearance="soft"
  status="info"
  size="md"
  corners="rounded"
  [dismissible]="true"
  [showIcon]="true"
  (dismiss)="onDismiss()"
>
  <div brightrailAlertTitle>Actionable alert</div>
  <div brightrailAlertMessage>Use status (not type) for semantics.</div>
  <brightrail-alert-actions>
    <button type="button" class="your-link-button">Learn more</button>
    <button type="button">Dismiss</button>
  </brightrail-alert-actions>
</brightrail-alert>`;

  readonly mirrorAppearance = signal<BrightrailAlertAppearance>('soft');
  readonly mirrorStatus = signal<BrightrailAlertStatus>('info');
  readonly mirrorSize = signal<'sm' | 'md' | 'lg'>('md');
  readonly mirrorCorners = signal<'rounded' | 'square'>('rounded');

  readonly catalogFocusSection = signal(1);
  readonly catalogShowAllSections = signal(false);

  readonly catalogEffectiveFocus = computed(() =>
    this.catalogShowAllSections() ? 0 : this.catalogFocusSection(),
  );

  private readonly catalogSectionTitles = [
    '',
    'Core types',
    'Appearances',
    'States',
    'Sizes',
    'Popular app alerts',
    'Enterprise patterns',
    'Group patterns',
    'Usage tips',
  ] as const;

  readonly catalogSectionTitle = computed(
    () => this.catalogSectionTitles[this.catalogFocusSection()] ?? '',
  );

  readonly appearanceOptions: BrightrailAlertAppearance[] = ['filled', 'soft', 'outlined', 'tonal'];

  readonly statusOptions: { value: BrightrailAlertStatus; label: string }[] = [
    { value: 'info', label: 'Info' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' },
  ];

  readonly sizeOptions: { value: 'sm' | 'md' | 'lg'; label: string }[] = [
    { value: 'sm', label: 'Compact' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
  ];

  readonly cornersOptions: { value: 'rounded' | 'square'; label: string }[] = [
    { value: 'rounded', label: 'Rounded' },
    { value: 'square', label: 'Square' },
  ];

  catalogSectionPrev(): void {
    const n = this.catalogFocusSection();
    this.catalogFocusSection.set(n <= 1 ? 8 : n - 1);
  }

  catalogSectionNext(): void {
    const n = this.catalogFocusSection();
    this.catalogFocusSection.set(n >= 8 ? 1 : n + 1);
  }

  bindMirrorAppearance(v: string): void {
    this.mirrorAppearance.set(v as BrightrailAlertAppearance);
  }

  bindMirrorStatus(v: string): void {
    this.mirrorStatus.set(v as BrightrailAlertStatus);
  }

  bindMirrorSize(v: string): void {
    this.mirrorSize.set(v as 'sm' | 'md' | 'lg');
  }

  bindMirrorCorners(v: string): void {
    this.mirrorCorners.set(v as 'rounded' | 'square');
  }
}
