import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailAccordionComponent,
  BrightrailAccordionItemComponent,
  BrightrailAlertActionsComponent,
  BrightrailAlertComponent,
  BrightrailAlertMessageDirective,
  BrightrailAlertTitleDirective,
  BrightrailAvatarComponent,
  BrightrailAvatarGroupComponent,
  BrightrailBadgeComponent,
  BrightrailButtonComponent,
  BrightrailButtonGroupComponent,
  BrightrailButtonIconComponent,
  BrightrailCardActionsComponent,
  BrightrailCardComponent,
  BrightrailCardContentComponent,
  BrightrailCardFooterComponent,
  BrightrailCardHeaderActionsDirective,
  BrightrailCardHeaderComponent,
  BrightrailCardHeaderLeadingDirective,
  BrightrailCardHeaderTitleDirective,
  BrightrailCardMediaComponent,
  BrightrailCheckboxGroupComponent,
  BrightrailChipComponent,
  BrightrailComboboxComponent,
  BrightrailCommandPaletteComponent,
  BrightrailCyberBadgeComponent,
  BrightrailDatePickerComponent,
  BrightrailDrawerBodyComponent,
  BrightrailDrawerComponent,
  BrightrailDrawerFooterComponent,
  BrightrailDrawerHeaderActionsDirective,
  BrightrailDrawerHeaderComponent,
  BrightrailDrawerSubtitleDirective,
  BrightrailDrawerTitleDirective,
  BrightrailEmptyStateComponent,
  BrightrailFileUploadComponent,
  BrightrailFocusTrapDirective,
  BrightrailFocusVisibleDirective,
  BrightrailFormFieldComponent,
  BrightrailGraphComponent,
  BrightrailHolographicPanelComponent,
  BrightrailIconButtonComponent,
  BrightrailIconComponent,
  BrightrailMenuComponent,
  BrightrailMenuItemComponent,
  BrightrailMenuTriggerDirective,
  BrightrailModalBodyComponent,
  BrightrailModalComponent,
  BrightrailModalFooterComponent,
  BrightrailModalHeaderActionsDirective,
  BrightrailModalHeaderComponent,
  BrightrailModalTitleDirective,
  BrightrailNeuralGraphComponent,
  BrightrailPaginationComponent,
  BrightrailPopoverComponent,
  BrightrailPopoverTriggerDirective,
  BrightrailProgressComponent,
  BrightrailProgressFileRowComponent,
  BrightrailQuantumStepperComponent,
  BrightrailRadioGroupComponent,
  BrightrailRatingComponent,
  BrightrailRichTextEditorComponent,
  BrightrailSelectComponent,
  BrightrailSkeletonComponent,
  BrightrailSliderComponent,
  BrightrailSplitButtonComponent,
  BrightrailStepComponent,
  BrightrailStepperComponent,
  BrightrailSwitchComponent,
  BrightrailTabComponent,
  BrightrailTabContentDirective,
  BrightrailTableBulkActionsComponent,
  BrightrailTableComponent,
  BrightrailTableSingleActionsComponent,
  BrightrailTableToolbarActionsComponent,
  BrightrailTableToolbarComponent,
  BrightrailTabsComponent,
  BrightrailTextFieldComponent,
  BrightrailTextareaComponent,
  BrightrailTimelineComponent,
  BrightrailTimelineItemComponent,
  BrightrailToastComponent,
  BrightrailToastService,
  BrightrailTooltipDirective,
  BrightrailTreeComponent,
  BrightrailTreeTableComponent,
  BrightrailValidationSummaryComponent,
  BrightrailWelcomeComponent,
} from 'brightrail';
import { inject } from '@angular/core';

import {
  COMMERCE_CATEGORY_OPTIONS,
  EDUCATION_TREE_NODES,
  EDUCATION_TREE_TABLE_NODES,
  FINTECH_REVENUE_SERIES,
  NEURAL_GRAPH_LINKS,
  NEURAL_GRAPH_NODES,
  QUANTUM_STEPS,
  SAAS_COMMANDS,
  SAAS_USER_COLUMNS,
  SAAS_USER_ROWS,
  tablePagination,
} from './demo-data';

@Component({
  selector: 'app-library-coverage-showcase',
  standalone: true,
  imports: [
    FormsModule,
    BrightrailWelcomeComponent,
    BrightrailButtonIconComponent,
    BrightrailIconButtonComponent,
    BrightrailButtonComponent,
    BrightrailIconComponent,
    BrightrailSplitButtonComponent,
    BrightrailButtonGroupComponent,
    BrightrailTextFieldComponent,
    BrightrailFormFieldComponent,
    BrightrailComboboxComponent,
    BrightrailSelectComponent,
    BrightrailDatePickerComponent,
    BrightrailFileUploadComponent,
    BrightrailCheckboxGroupComponent,
    BrightrailSwitchComponent,
    BrightrailSliderComponent,
    BrightrailTextareaComponent,
    BrightrailSkeletonComponent,
    BrightrailEmptyStateComponent,
    BrightrailValidationSummaryComponent,
    BrightrailRadioGroupComponent,
    BrightrailCardComponent,
    BrightrailCardActionsComponent,
    BrightrailCardMediaComponent,
    BrightrailCardHeaderComponent,
    BrightrailCardHeaderTitleDirective,
    BrightrailCardHeaderActionsDirective,
    BrightrailCardHeaderLeadingDirective,
    BrightrailCardContentComponent,
    BrightrailCardFooterComponent,
    BrightrailToastComponent,
    BrightrailMenuComponent,
    BrightrailMenuItemComponent,
    BrightrailMenuTriggerDirective,
    BrightrailAlertComponent,
    BrightrailAlertTitleDirective,
    BrightrailAlertMessageDirective,
    BrightrailAlertActionsComponent,
    BrightrailBadgeComponent,
    BrightrailAvatarComponent,
    BrightrailAvatarGroupComponent,
    BrightrailChipComponent,
    BrightrailTabsComponent,
    BrightrailTabComponent,
    BrightrailTabContentDirective,
    BrightrailModalComponent,
    BrightrailModalHeaderComponent,
    BrightrailModalTitleDirective,
    BrightrailModalHeaderActionsDirective,
    BrightrailModalBodyComponent,
    BrightrailModalFooterComponent,
    BrightrailDrawerComponent,
    BrightrailDrawerHeaderComponent,
    BrightrailDrawerTitleDirective,
    BrightrailDrawerSubtitleDirective,
    BrightrailDrawerHeaderActionsDirective,
    BrightrailDrawerBodyComponent,
    BrightrailDrawerFooterComponent,
    BrightrailTableComponent,
    BrightrailTableToolbarComponent,
    BrightrailTableToolbarActionsComponent,
    BrightrailTableBulkActionsComponent,
    BrightrailTableSingleActionsComponent,
    BrightrailAccordionComponent,
    BrightrailAccordionItemComponent,
    BrightrailPaginationComponent,
    BrightrailProgressComponent,
    BrightrailStepComponent,
    BrightrailStepperComponent,
    BrightrailProgressFileRowComponent,
    BrightrailGraphComponent,
    BrightrailTreeComponent,
    BrightrailTimelineComponent,
    BrightrailTimelineItemComponent,
    BrightrailCommandPaletteComponent,
    BrightrailPopoverComponent,
    BrightrailPopoverTriggerDirective,
    BrightrailTreeTableComponent,
    BrightrailRichTextEditorComponent,
    BrightrailRatingComponent,
    BrightrailHolographicPanelComponent,
    BrightrailNeuralGraphComponent,
    BrightrailCyberBadgeComponent,
    BrightrailQuantumStepperComponent,
    BrightrailTooltipDirective,
    BrightrailFocusTrapDirective,
    BrightrailFocusVisibleDirective,
  ],
  templateUrl: './library-coverage-showcase.component.html',
  styleUrl: './library-coverage-showcase.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryCoverageShowcaseComponent {
  private readonly toast = inject(BrightrailToastService);

  readonly commands = SAAS_COMMANDS;
  readonly tableRows = SAAS_USER_ROWS;
  readonly tableColumns = SAAS_USER_COLUMNS;
  readonly pagination = tablePagination(3);
  readonly categories = COMMERCE_CATEGORY_OPTIONS;
  readonly treeNodes = EDUCATION_TREE_NODES;
  readonly treeTableNodes = EDUCATION_TREE_TABLE_NODES;
  readonly graphSeries = FINTECH_REVENUE_SERIES;
  readonly neuralNodes = NEURAL_GRAPH_NODES;
  readonly neuralLinks = NEURAL_GRAPH_LINKS;
  readonly quantumSteps = QUANTUM_STEPS;
  readonly holoMetrics = [
    { label: 'Coverage', value: '100', unit: '%', trend: 'up' as const },
  ];

  readonly radioOptions = [
    { id: 'a', label: 'Alpha' },
    { id: 'b', label: 'Beta' },
  ];

  readonly checkboxOptions = [
    { id: 'x', label: 'X' },
    { id: 'y', label: 'Y' },
  ];

  readonly paletteOpen = signal(false);
  readonly modalOpen = signal(false);
  readonly drawerOpen = signal(false);
  selectValue = 'a';
  comboboxValue = 'apparel';
  switchOn = true;
  sliderValue = 40;
  ratingValue = 3;
  textValue = '';
  textareaValue = '';
  dateValue = '';
  radioValue = 'a';
  checkboxValues: string[] = ['x'];
  richText = '<p>Rich text</p>';
  readonly validationErrors = signal<string[]>(['Sample validation message']);
  readonly pageIndex = signal(0);
  readonly quantumStep = signal(1);

  showToast(): void {
    this.toast.show({ message: 'Toast via BrightrailToastService', variant: 'info', title: 'Library coverage' });
  }
}
