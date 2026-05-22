/** Funfair routes and doc folders for variation catalogs (library APIs live in `brightrail`). */
export interface VariationCatalogEntry {
  readonly label: string;
  readonly playgroundRoute: string;
  readonly catalogRoute: string | null;
  readonly selector: string;
  readonly docFolder: string | null;
  readonly catalogStatus: 'full' | 'partial' | 'playground-only';
}

export const VARIATION_CATALOG_ENTRIES: readonly VariationCatalogEntry[] = [
  { label: 'Accordion', playgroundRoute: 'accordion', catalogRoute: 'accordion/catalog', selector: 'brightrail-accordion', docFolder: 'accordion', catalogStatus: 'full' },
  { label: 'Alerts', playgroundRoute: 'alerts', catalogRoute: 'alerts/catalog', selector: 'brightrail-alert', docFolder: 'alerts', catalogStatus: 'full' },
  { label: 'Avatar', playgroundRoute: 'avatar', catalogRoute: 'avatar/catalog', selector: 'brightrail-avatar', docFolder: 'Avatar', catalogStatus: 'full' },
  { label: 'Badge', playgroundRoute: 'badge', catalogRoute: 'badge/catalog', selector: 'brightrail-badge', docFolder: 'badge', catalogStatus: 'partial' },
  { label: 'Breadcrumb', playgroundRoute: 'breadcrumb', catalogRoute: 'breadcrumb/catalog', selector: 'brightrail-breadcrumb', docFolder: 'breadcrum', catalogStatus: 'full' },
  { label: 'Button', playgroundRoute: 'button', catalogRoute: 'button/catalog', selector: 'brightrail-button', docFolder: null, catalogStatus: 'full' },
  { label: 'Cards', playgroundRoute: 'card', catalogRoute: 'card/catalog', selector: 'brightrail-card', docFolder: 'card', catalogStatus: 'full' },
  { label: 'Checkbox', playgroundRoute: 'checkbox', catalogRoute: 'checkbox/catalog', selector: 'brightrail-checkbox', docFolder: 'checkbox', catalogStatus: 'full' },
  { label: 'Chip', playgroundRoute: 'chip', catalogRoute: 'chip/catalog', selector: 'brightrail-chip', docFolder: 'chips', catalogStatus: 'partial' },
  { label: 'Cyber badge', playgroundRoute: 'cyber-badge', catalogRoute: null, selector: 'brightrail-cyber-badge', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Date picker', playgroundRoute: 'date-picker', catalogRoute: 'date-picker/catalog', selector: 'brightrail-date-picker', docFolder: 'DatePicker', catalogStatus: 'full' },
  { label: 'Drawer / Side Panel', playgroundRoute: 'drawer', catalogRoute: 'drawer/catalog', selector: 'brightrail-drawer', docFolder: 'drawer', catalogStatus: 'full' },
  { label: 'File upload', playgroundRoute: 'file-upload', catalogRoute: 'file-upload/catalog', selector: 'brightrail-file-upload', docFolder: 'fileupload', catalogStatus: 'full' },
  { label: 'Graph / Chart', playgroundRoute: 'graph', catalogRoute: 'graph/catalog', selector: 'brightrail-graph', docFolder: 'graph', catalogStatus: 'full' },
  { label: 'Holographic panel', playgroundRoute: 'holographic-panel', catalogRoute: null, selector: 'brightrail-holographic-panel', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Modals', playgroundRoute: 'modal', catalogRoute: 'modal/catalog', selector: 'brightrail-modal', docFolder: 'modals', catalogStatus: 'full' },
  { label: 'Pagination', playgroundRoute: 'pagination', catalogRoute: 'pagination/catalog', selector: 'brightrail-pagination', docFolder: 'pagination', catalogStatus: 'full' },
  { label: 'Popover', playgroundRoute: 'popover', catalogRoute: null, selector: 'brightrail-popover', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Progress', playgroundRoute: 'progress', catalogRoute: 'progress/catalog', selector: 'brightrail-progress', docFolder: 'progress', catalogStatus: 'full' },
  { label: 'Quantum stepper', playgroundRoute: 'quantum-stepper', catalogRoute: null, selector: 'brightrail-quantum-stepper', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Rating', playgroundRoute: 'rating', catalogRoute: null, selector: 'brightrail-rating', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Rich text editor', playgroundRoute: 'rich-text-editor', catalogRoute: null, selector: 'brightrail-rich-text-editor', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Radio', playgroundRoute: 'radio', catalogRoute: 'radio/catalog', selector: 'brightrail-radio', docFolder: 'radio', catalogStatus: 'full' },
  { label: 'Select', playgroundRoute: 'select', catalogRoute: 'select/catalog', selector: 'brightrail-select', docFolder: null, catalogStatus: 'full' },
  { label: 'Stepper', playgroundRoute: 'stepper', catalogRoute: 'stepper/catalog', selector: 'brightrail-stepper', docFolder: 'stepper', catalogStatus: 'full' },
  { label: 'Table', playgroundRoute: 'table', catalogRoute: 'table/catalog', selector: 'brightrail-table', docFolder: 'table', catalogStatus: 'full' },
  { label: 'Tabs', playgroundRoute: 'tabs', catalogRoute: 'tabs/catalog', selector: 'brightrail-tabs', docFolder: 'tabs', catalogStatus: 'full' },
  { label: 'Text field', playgroundRoute: 'text-field', catalogRoute: 'text-field/catalog', selector: 'brightrail-text-field', docFolder: null, catalogStatus: 'full' },
  { label: 'Tooltip', playgroundRoute: 'tooltip', catalogRoute: 'tooltip/catalog', selector: '[brightrailTooltip]', docFolder: 'tooltip', catalogStatus: 'full' },
  { label: 'App shell', playgroundRoute: 'app-shell', catalogRoute: 'app-shell/catalog', selector: 'brightrail-app-shell', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Combobox', playgroundRoute: 'combobox', catalogRoute: 'combobox/catalog', selector: 'brightrail-combobox', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Command palette', playgroundRoute: 'command-palette', catalogRoute: 'command-palette/catalog', selector: 'brightrail-command-palette', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Empty state', playgroundRoute: 'empty-state', catalogRoute: 'empty-state/catalog', selector: 'brightrail-empty-state', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Form field', playgroundRoute: 'form-field', catalogRoute: 'form-field/catalog', selector: 'brightrail-form-field', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Menu', playgroundRoute: 'menu', catalogRoute: 'menu/catalog', selector: 'brightrail-menu', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Neural graph', playgroundRoute: 'neural-graph', catalogRoute: null, selector: 'brightrail-neural-graph', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Skeleton', playgroundRoute: 'skeleton', catalogRoute: 'skeleton/catalog', selector: 'brightrail-skeleton', docFolder: 'skeleton-loader', catalogStatus: 'full' },
  { label: 'Slider', playgroundRoute: 'slider', catalogRoute: 'slider/catalog', selector: 'brightrail-slider', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Switch', playgroundRoute: 'switch', catalogRoute: 'switch/catalog', selector: 'brightrail-switch', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Textarea', playgroundRoute: 'textarea', catalogRoute: 'textarea/catalog', selector: 'brightrail-textarea', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Timeline', playgroundRoute: 'timeline', catalogRoute: 'timeline/catalog', selector: 'brightrail-timeline', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Toast', playgroundRoute: 'toast', catalogRoute: 'toast/catalog', selector: 'brightrail-toast', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Tree', playgroundRoute: 'tree', catalogRoute: 'tree/catalog', selector: 'brightrail-tree', docFolder: 'graph', catalogStatus: 'partial' },
  { label: 'Tree-table', playgroundRoute: 'tree-table', catalogRoute: null, selector: 'brightrail-tree-table', docFolder: null, catalogStatus: 'playground-only' },
  { label: 'Validation summary', playgroundRoute: 'validation-summary', catalogRoute: 'validation-summary/catalog', selector: 'brightrail-validation-summary', docFolder: null, catalogStatus: 'playground-only' },
] as const;

export function variationCatalogCoveragePercent(): number {
  const withCatalog = VARIATION_CATALOG_ENTRIES.filter((e) => e.catalogRoute != null).length;
  return Math.round((withCatalog / VARIATION_CATALOG_ENTRIES.length) * 100);
}

/** RouterLink segments for a catalog path such as `button/catalog` (not a single segment). */
export function catalogRouteSegments(catalogRoute: string): string[] {
  return ['/', ...catalogRoute.split('/').filter((segment) => segment.length > 0)];
}
