/*
 * Public API Surface of brightrail
 *
 * Source layout (library internals):
 *   lib/styles     — shared tokens & optional global theme entry
 *   lib/buttons    — buttons, split, group, icon glyph, icon button
 *   lib/icons      — standalone icons
 *   lib/fields     — text-field, select, combobox, form-field, date-picker, file-upload
 *   lib/toast      — toast UI, container, and signal-based service
 *   lib/menu       — dropdown menu, items, and trigger directive
 *   lib/card       — card shell & slots
 *   lib/alert      — alerts & banners
 *   lib/tabs       — tab strip + panels
 *   lib/modal      — dialog shell & slots
 *   lib/table      — data tables (density, variants, pagination)
 *   lib/pagination — pager controls & summaries
 *   lib/progress   — linear & circular progress, steppers, file rows
 *   lib/graph      — SVG charts (line, bar, area, donut, gauge, heatmap, funnel, …)
 *   lib/tree       — hierarchical tree (expand/collapse, selection)
 *   lib/app-shell  — application layout (sidebar, top bar, page header)
 *   lib/timeline   — vertical activity timeline
 *   lib/command-palette — searchable command modal with keyboard navigation
 *   lib/skeleton   — loading placeholders
 *   lib/empty-state — empty views with icon & action slots
 *   lib/validation-summary — form error lists
 *   lib/avatar     — avatars, presence, enterprise badges, stacked groups
 *   lib/tooltip    — portal tooltips (hover / focus / click) + avatar host wiring
 *   lib/shell      — welcome / misc shell widgets
 */

export * from './lib/shell/brightrail-welcome.component';
export * from './lib/buttons/brightrail-button-icon.component';
export * from './lib/buttons/brightrail-icon-button.component';
export * from './lib/buttons/brightrail-button.component';
export * from './lib/icons/brightrail-icon.component';
export * from './lib/buttons/brightrail-split-button.component';
export * from './lib/buttons/brightrail-button-group.component';
export * from './lib/fields/text-field/brightrail-text-field.component';
export * from './lib/fields/form-field/brightrail-form-field.component';
export * from './lib/fields/combobox/brightrail-combobox.component';
export * from './lib/fields/combobox/brightrail-combobox.types';
export * from './lib/fields/select/brightrail-select.component';
export * from './lib/fields/date-picker/brightrail-date-picker.component';
export * from './lib/fields/file-upload/brightrail-file-upload.component';
export * from './lib/fields/checkbox/brightrail-checkbox.component';
export * from './lib/fields/checkbox/brightrail-checkbox-group.component';
export * from './lib/fields/switch/brightrail-switch.component';
export * from './lib/fields/slider/brightrail-slider.component';
export * from './lib/fields/textarea/brightrail-textarea.component';
export * from './lib/skeleton/brightrail-skeleton.component';
export * from './lib/empty-state/brightrail-empty-state.component';
export * from './lib/validation-summary/brightrail-validation-summary.component';
export * from './lib/fields/radio/brightrail-radio.component';
export * from './lib/fields/radio/brightrail-radio-group.component';
export * from './lib/card/brightrail-card.component';
export * from './lib/card/brightrail-card-actions.component';
export * from './lib/card/brightrail-card-media.component';
export * from './lib/card/brightrail-card-header.component';
export * from './lib/card/brightrail-card-header.directives';
export * from './lib/card/brightrail-card-content.component';
export * from './lib/card/brightrail-card-footer.component';
export * from './lib/toast/brightrail-toast.component';
export * from './lib/toast/brightrail-toast-container.component';
export * from './lib/toast/brightrail-toast.service';
export * from './lib/toast/brightrail-toast.types';
export * from './lib/menu/brightrail-menu.component';
export * from './lib/menu/brightrail-menu-item.component';
export * from './lib/menu/brightrail-menu-trigger.directive';
export * from './lib/alert/brightrail-alert.component';
export * from './lib/alert/brightrail-alert-actions.component';
export * from './lib/alert/brightrail-alert.directives';
export * from './lib/badge/brightrail-badge.component';
export * from './lib/avatar/brightrail-avatar.component';
export * from './lib/avatar/brightrail-avatar-group.component';
export * from './lib/tooltip/brightrail-tooltip.types';
export * from './lib/tooltip/brightrail-tooltip.directive';
export * from './lib/chip/brightrail-chip.component';
export * from './lib/tabs/brightrail-tab-content.directive';
export * from './lib/tabs/brightrail-tab.component';
export * from './lib/tabs/brightrail-tabs.component';
export * from './lib/modal/brightrail-modal.component';
export * from './lib/modal/brightrail-modal-header.component';
export * from './lib/modal/brightrail-modal-body.component';
export * from './lib/modal/brightrail-modal-footer.component';
export * from './lib/modal/brightrail-modal.directives';
export * from './lib/drawer/brightrail-drawer.component';
export * from './lib/drawer/brightrail-drawer-header.component';
export * from './lib/drawer/brightrail-drawer-body.component';
export * from './lib/drawer/brightrail-drawer-footer.component';
export * from './lib/drawer/brightrail-drawer.directives';
export * from './lib/breadcrumb/brightrail-breadcrumb.component';
export * from './lib/table/brightrail-table.types';
export * from './lib/table/brightrail-table.component';
export * from './lib/table/brightrail-table-toolbar.component';
export * from './lib/table/brightrail-table-toolbar-actions.component';
export * from './lib/table/brightrail-table-bulk-actions.component';
export * from './lib/table/brightrail-table-single-actions.component';
export * from './lib/accordion/brightrail-accordion-api';
export * from './lib/accordion/brightrail-accordion.component';
export * from './lib/accordion/brightrail-accordion-item.component';
export * from './lib/pagination/brightrail-pagination.component';
export * from './lib/progress/brightrail-progress.component';
export * from './lib/progress/brightrail-step.component';
export * from './lib/progress/brightrail-stepper.component';
export * from './lib/progress/brightrail-progress-file-row.component';
export * from './lib/graph/brightrail-graph.types';
export * from './lib/graph/brightrail-graph.component';
export * from './lib/tree/brightrail-tree.types';
export * from './lib/tree/brightrail-tree.component';
export * from './lib/app-shell/brightrail-app-shell.component';
export * from './lib/app-shell/brightrail-app-shell.directives';
export * from './lib/app-shell/brightrail-sidebar.component';
export * from './lib/app-shell/brightrail-top-bar.component';
export * from './lib/app-shell/brightrail-page-header.component';
export * from './lib/timeline/brightrail-timeline.types';
export * from './lib/timeline/brightrail-timeline.component';
export * from './lib/timeline/brightrail-timeline-item.component';
export * from './lib/command-palette/brightrail-command-palette.types';
export * from './lib/command-palette/brightrail-command-palette.component';
export * from './lib/platform/brightrail-listbox-keyboard.utils';
export * from './lib/platform/brightrail-tree-keyboard.utils';
export * from './lib/platform/brightrail-date-grid-keyboard.utils';
export * from './lib/platform/brightrail-focus-trap.directive';
export * from './lib/platform/brightrail-focus-visible.directive';
export * from './lib/platform/brightrail-live-announcer.service';
export * from './lib/platform/brightrail-platform.providers';
export * from './lib/platform/brightrail-cdk-a11y.exports';
export * from './lib/platform/brightrail-angular-aria.exports';
export * from './lib/platform/brightrail-platform-adoption';
export * from './lib/i18n/brightrail-i18n';
export * from './lib/i18n/brightrail-i18n.providers';
export * from './lib/popover/brightrail-popover.component';
export * from './lib/popover/brightrail-popover-trigger.directive';
export * from './lib/tree-table/brightrail-tree-table.component';
export * from './lib/tree-table/brightrail-tree-table.types';
export * from './lib/tree-table/brightrail-tree-table.utils';
export * from './lib/rich-text-editor/brightrail-rich-text-editor.component';
export * from './lib/rating/brightrail-rating.component';
export * from './lib/futuristic/brightrail-futuristic-appearance.types';
export * from './lib/futuristic/brightrail-futuristic-host.util';
export * from './lib/futuristic/brightrail-futuristic.providers';
export * from './lib/futuristic/brightrail-fx-shell.directive';
export * from './lib/futuristic/brightrail-futuristic-host';
export { BRIGHTRAIL_FX_SHELL_HOST } from './lib/futuristic/brightrail-futuristic-host';
export * from './lib/holographic-panel/brightrail-holographic-panel.component';
export * from './lib/holographic-panel/brightrail-holographic-panel.types';
export * from './lib/neural-graph/brightrail-neural-graph.component';
export * from './lib/neural-graph/brightrail-neural-graph.types';
export * from './lib/neural-graph/brightrail-neural-graph.utils';
export * from './lib/cyber-badge/brightrail-cyber-badge.component';
export * from './lib/cyber-badge/brightrail-cyber-badge.types';
export * from './lib/quantum-stepper/brightrail-quantum-stepper.component';
export * from './lib/quantum-stepper/brightrail-quantum-stepper.types';
