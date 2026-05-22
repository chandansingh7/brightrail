import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailAccordionComponent,
  BrightrailAccordionItemComponent,
  BrightrailAlertComponent,
  BrightrailAlertMessageDirective,
  BrightrailAlertTitleDirective,
  BrightrailAvatarComponent,
  BrightrailBadgeComponent,
  BrightrailBreadcrumbComponent,
  BrightrailButtonIconComponent,
  BrightrailButtonComponent,
  BrightrailCardComponent,
  BrightrailCardContentComponent,
  BrightrailCardHeaderComponent,
  BrightrailCheckboxComponent,
  BrightrailChipComponent,
  BrightrailComboboxComponent,
  BrightrailDatePickerComponent,
  BrightrailEmptyStateComponent,
  BrightrailFileUploadComponent,
  BrightrailFormFieldComponent,
  BrightrailGraphComponent,
  BrightrailMenuComponent,
  BrightrailMenuItemComponent,
  BrightrailMenuTriggerDirective,
  BrightrailPaginationComponent,
  BrightrailPopoverComponent,
  BrightrailPopoverTriggerDirective,
  BrightrailProgressComponent,
  BrightrailRadioComponent,
  BrightrailRatingComponent,
  BrightrailRichTextEditorComponent,
  BrightrailSelectComponent,
  BrightrailSkeletonComponent,
  BrightrailSliderComponent,
  BrightrailStepComponent,
  BrightrailStepperComponent,
  BrightrailSwitchComponent,
  BrightrailTabComponent,
  BrightrailTabContentDirective,
  BrightrailTableComponent,
  BrightrailTabsComponent,
  BrightrailTextFieldComponent,
  BrightrailTextareaComponent,
  BrightrailTimelineComponent,
  BrightrailTimelineItemComponent,
  BrightrailToastComponent,
  BrightrailTooltipDirective,
  BrightrailTreeComponent,
  BrightrailTreeTableComponent,
  BrightrailValidationSummaryComponent,
} from 'brightrail';

import { FF_AVATAR_DEFAULT_SRC } from '../avatar/avatar-demo-assets';
import {
  HUB_PREVIEW_BREADCRUMB_ITEMS,
  HUB_PREVIEW_GRAPH_SERIES,
  HUB_PREVIEW_TABLE_COLUMNS,
  HUB_PREVIEW_TABLE_ROWS,
  HUB_PREVIEW_TREE_NODES,
  HUB_PREVIEW_TREE_TABLE_NODES,
  HUB_PREVIEW_VALIDATION_ERRORS,
  hubPreviewFallbackIcon,
  hubPreviewUsesFallbackIcon,
} from './variation-catalog-hub-preview-data';

@Component({
  selector: 'app-variation-catalog-hub-preview',
  standalone: true,
  imports: [
    FormsModule,
    BrightrailAccordionComponent,
    BrightrailAccordionItemComponent,
    BrightrailAlertComponent,
    BrightrailAlertTitleDirective,
    BrightrailAlertMessageDirective,
    BrightrailAvatarComponent,
    BrightrailBadgeComponent,
    BrightrailBreadcrumbComponent,
    BrightrailButtonIconComponent,
    BrightrailButtonComponent,
    BrightrailCardComponent,
    BrightrailCardHeaderComponent,
    BrightrailCardContentComponent,
    BrightrailCheckboxComponent,
    BrightrailChipComponent,
    BrightrailComboboxComponent,
    BrightrailDatePickerComponent,
    BrightrailEmptyStateComponent,
    BrightrailFileUploadComponent,
    BrightrailFormFieldComponent,
    BrightrailGraphComponent,
    BrightrailMenuComponent,
    BrightrailMenuItemComponent,
    BrightrailMenuTriggerDirective,
    BrightrailPaginationComponent,
    BrightrailPopoverComponent,
    BrightrailPopoverTriggerDirective,
    BrightrailProgressComponent,
    BrightrailRadioComponent,
    BrightrailRatingComponent,
    BrightrailRichTextEditorComponent,
    BrightrailSelectComponent,
    BrightrailSkeletonComponent,
    BrightrailSliderComponent,
    BrightrailStepComponent,
    BrightrailStepperComponent,
    BrightrailSwitchComponent,
    BrightrailTabComponent,
    BrightrailTabContentDirective,
    BrightrailTableComponent,
    BrightrailTabsComponent,
    BrightrailTextFieldComponent,
    BrightrailTextareaComponent,
    BrightrailTimelineComponent,
    BrightrailTimelineItemComponent,
    BrightrailToastComponent,
    BrightrailTooltipDirective,
    BrightrailTreeComponent,
    BrightrailTreeTableComponent,
    BrightrailValidationSummaryComponent,
  ],
  templateUrl: './variation-catalog-hub-preview.component.html',
  styleUrl: './variation-catalog-hub-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariationCatalogHubPreviewComponent {
  readonly playgroundRoute = input.required<string>();

  readonly demoAvatarSrc = FF_AVATAR_DEFAULT_SRC;
  readonly breadcrumbItems = HUB_PREVIEW_BREADCRUMB_ITEMS;
  readonly tableRows = HUB_PREVIEW_TABLE_ROWS;
  readonly tableColumns = HUB_PREVIEW_TABLE_COLUMNS;
  readonly graphSeries = HUB_PREVIEW_GRAPH_SERIES;
  readonly treeNodes = HUB_PREVIEW_TREE_NODES;
  readonly treeTableNodes = HUB_PREVIEW_TREE_TABLE_NODES;
  readonly validationErrors = HUB_PREVIEW_VALIDATION_ERRORS;

  readonly hubTextValue = '';
  readonly hubSelectValue = 'us';
  readonly hubComboboxValue = '';
  readonly hubDateValue = new Date(2026, 4, 20);
  readonly hubTextareaValue = '';
  readonly ngModelStandalone = { standalone: true };

  readonly comboboxOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
  ];

  readonly selectDisplayText = 'United States';

  fallbackIcon(route: string): string {
    return hubPreviewFallbackIcon(route);
  }

  usesFallbackIcon(route: string): boolean {
    return hubPreviewUsesFallbackIcon(route);
  }
}
