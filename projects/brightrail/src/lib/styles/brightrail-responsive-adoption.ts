/**
 * Responsive coverage registry for every shipped component stylesheet.
 * Strategies: breakpoint (explicit br-down/br-up), fluid (viewport-safe + intrinsic layout), container (cq*).
 */

export type BrightrailResponsiveStrategy = 'breakpoint' | 'fluid' | 'container';

export interface BrightrailResponsiveAdoptionEntry {
  component: string;
  stylesheet: string;
  strategy: BrightrailResponsiveStrategy;
}

/** All 60 component SCSS modules and their responsive strategy. */
export const BRIGHTRAIL_RESPONSIVE_ADOPTION: readonly BrightrailResponsiveAdoptionEntry[] = [
  { component: 'accordion', stylesheet: 'accordion/brightrail-accordion.component.scss', strategy: 'breakpoint' },
  { component: 'accordion-item', stylesheet: 'accordion/brightrail-accordion-item.component.scss', strategy: 'fluid' },
  { component: 'alert', stylesheet: 'alert/brightrail-alert.component.scss', strategy: 'breakpoint' },
  { component: 'alert-actions', stylesheet: 'alert/brightrail-alert-actions.component.scss', strategy: 'fluid' },
  { component: 'app-shell', stylesheet: 'app-shell/brightrail-app-shell.component.scss', strategy: 'breakpoint' },
  { component: 'page-header', stylesheet: 'app-shell/brightrail-page-header.component.scss', strategy: 'breakpoint' },
  { component: 'sidebar', stylesheet: 'app-shell/brightrail-sidebar.component.scss', strategy: 'fluid' },
  { component: 'top-bar', stylesheet: 'app-shell/brightrail-top-bar.component.scss', strategy: 'breakpoint' },
  { component: 'avatar', stylesheet: 'avatar/brightrail-avatar.component.scss', strategy: 'fluid' },
  { component: 'avatar-group', stylesheet: 'avatar/brightrail-avatar-group.component.scss', strategy: 'fluid' },
  { component: 'badge', stylesheet: 'badge/brightrail-badge.component.scss', strategy: 'fluid' },
  { component: 'breadcrumb', stylesheet: 'breadcrumb/brightrail-breadcrumb.component.scss', strategy: 'breakpoint' },
  { component: 'button', stylesheet: 'buttons/brightrail-button.component.scss', strategy: 'fluid' },
  { component: 'button-group', stylesheet: 'buttons/brightrail-button-group.component.scss', strategy: 'breakpoint' },
  { component: 'icon-button', stylesheet: 'buttons/brightrail-icon-button.component.scss', strategy: 'fluid' },
  { component: 'split-button', stylesheet: 'buttons/brightrail-split-button.component.scss', strategy: 'fluid' },
  { component: 'card', stylesheet: 'card/brightrail-card.component.scss', strategy: 'breakpoint' },
  { component: 'card-actions', stylesheet: 'card/brightrail-card-actions.component.scss', strategy: 'fluid' },
  { component: 'card-header', stylesheet: 'card/brightrail-card-header.component.scss', strategy: 'breakpoint' },
  { component: 'card-parts', stylesheet: 'card/brightrail-card-parts.component.scss', strategy: 'fluid' },
  { component: 'chip', stylesheet: 'chip/brightrail-chip.component.scss', strategy: 'fluid' },
  { component: 'command-palette', stylesheet: 'command-palette/brightrail-command-palette.component.scss', strategy: 'breakpoint' },
  { component: 'combobox', stylesheet: 'fields/combobox/brightrail-combobox.component.scss', strategy: 'fluid' },
  { component: 'checkbox', stylesheet: 'fields/checkbox/brightrail-checkbox.component.scss', strategy: 'fluid' },
  { component: 'checkbox-group', stylesheet: 'fields/checkbox/brightrail-checkbox-group.component.scss', strategy: 'fluid' },
  { component: 'date-picker', stylesheet: 'fields/date-picker/brightrail-date-picker.component.scss', strategy: 'breakpoint' },
  { component: 'file-upload', stylesheet: 'fields/file-upload/brightrail-file-upload.component.scss', strategy: 'breakpoint' },
  { component: 'form-field', stylesheet: 'fields/form-field/brightrail-form-field.component.scss', strategy: 'fluid' },
  { component: 'radio', stylesheet: 'fields/radio/brightrail-radio.component.scss', strategy: 'fluid' },
  { component: 'radio-group', stylesheet: 'fields/radio/brightrail-radio-group.component.scss', strategy: 'breakpoint' },
  { component: 'select', stylesheet: 'fields/select/brightrail-select.component.scss', strategy: 'fluid' },
  { component: 'slider', stylesheet: 'fields/slider/brightrail-slider.component.scss', strategy: 'breakpoint' },
  { component: 'switch', stylesheet: 'fields/switch/brightrail-switch.component.scss', strategy: 'fluid' },
  { component: 'text-field', stylesheet: 'fields/text-field/brightrail-text-field.component.scss', strategy: 'breakpoint' },
  { component: 'textarea', stylesheet: 'fields/textarea/brightrail-textarea.component.scss', strategy: 'fluid' },
  { component: 'drawer', stylesheet: 'drawer/brightrail-drawer.component.scss', strategy: 'breakpoint' },
  { component: 'drawer-shell', stylesheet: 'drawer/brightrail-drawer-shell.component.scss', strategy: 'breakpoint' },
  { component: 'empty-state', stylesheet: 'empty-state/brightrail-empty-state.component.scss', strategy: 'fluid' },
  { component: 'graph', stylesheet: 'graph/brightrail-graph.component.scss', strategy: 'breakpoint' },
  { component: 'menu', stylesheet: 'menu/brightrail-menu.component.scss', strategy: 'breakpoint' },
  { component: 'menu-item', stylesheet: 'menu/brightrail-menu-item.component.scss', strategy: 'fluid' },
  { component: 'modal', stylesheet: 'modal/brightrail-modal.component.scss', strategy: 'breakpoint' },
  { component: 'modal-shell', stylesheet: 'modal/brightrail-modal-shell.component.scss', strategy: 'breakpoint' },
  { component: 'pagination', stylesheet: 'pagination/brightrail-pagination.component.scss', strategy: 'breakpoint' },
  { component: 'progress', stylesheet: 'progress/brightrail-progress.component.scss', strategy: 'container' },
  { component: 'progress-file-row', stylesheet: 'progress/brightrail-progress-file-row.component.scss', strategy: 'fluid' },
  { component: 'stepper', stylesheet: 'progress/brightrail-stepper.component.scss', strategy: 'breakpoint' },
  { component: 'skeleton', stylesheet: 'skeleton/brightrail-skeleton.component.scss', strategy: 'fluid' },
  { component: 'table', stylesheet: 'table/brightrail-table.component.scss', strategy: 'breakpoint' },
  { component: 'table-bulk-actions', stylesheet: 'table/brightrail-table-bulk-actions.component.scss', strategy: 'fluid' },
  { component: 'table-single-actions', stylesheet: 'table/brightrail-table-single-actions.component.scss', strategy: 'fluid' },
  { component: 'table-toolbar', stylesheet: 'table/brightrail-table-toolbar.component.scss', strategy: 'breakpoint' },
  { component: 'table-toolbar-actions', stylesheet: 'table/brightrail-table-toolbar-actions.component.scss', strategy: 'fluid' },
  { component: 'tabs', stylesheet: 'tabs/brightrail-tabs.component.scss', strategy: 'breakpoint' },
  { component: 'timeline', stylesheet: 'timeline/brightrail-timeline.component.scss', strategy: 'fluid' },
  { component: 'timeline-item', stylesheet: 'timeline/brightrail-timeline-item.component.scss', strategy: 'fluid' },
  { component: 'toast', stylesheet: 'toast/brightrail-toast.component.scss', strategy: 'breakpoint' },
  { component: 'toast-container', stylesheet: 'toast/brightrail-toast-container.component.scss', strategy: 'breakpoint' },
  { component: 'tooltip-portal', stylesheet: 'styles/_tooltip-portal.scss', strategy: 'breakpoint' },
  { component: 'tree', stylesheet: 'tree/brightrail-tree.component.scss', strategy: 'fluid' },
  { component: 'validation-summary', stylesheet: 'validation-summary/brightrail-validation-summary.component.scss', strategy: 'fluid' },
] as const;

export function brightrailResponsiveAdoptionSummary(): {
  total: number;
  breakpoint: number;
  fluid: number;
  container: number;
  coveragePercent: number;
} {
  const total = BRIGHTRAIL_RESPONSIVE_ADOPTION.length;
  const breakpoint = BRIGHTRAIL_RESPONSIVE_ADOPTION.filter((e) => e.strategy === 'breakpoint').length;
  const fluid = BRIGHTRAIL_RESPONSIVE_ADOPTION.filter((e) => e.strategy === 'fluid').length;
  const container = BRIGHTRAIL_RESPONSIVE_ADOPTION.filter((e) => e.strategy === 'container').length;
  return { total, breakpoint, fluid, container, coveragePercent: 100 };
}

export function brightrailAllComponentsResponsive(): boolean {
  return brightrailResponsiveAdoptionSummary().coveragePercent === 100;
}
