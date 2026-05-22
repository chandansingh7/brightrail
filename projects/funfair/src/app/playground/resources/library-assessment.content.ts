export interface LibraryRatingRow {
  readonly lens: string;
  readonly score: string;
  readonly summary: string;
}

export interface LibraryMissingItem {
  readonly priority: 'High' | 'Medium' | 'Lower';
  readonly name: string;
  readonly why: string;
  readonly note?: string;
  readonly showcaseRoute?: string;
}

export interface LibraryPlaygroundLink {
  readonly label: string;
  readonly path: string;
}

export interface LibraryShippedArea {
  readonly category: string;
  readonly summary: string;
  readonly links: readonly LibraryPlaygroundLink[];
}

export interface LibraryRoadmapItem {
  readonly label: string;
  readonly status: 'done' | 'planned';
  readonly link?: string;
}

export interface LibraryProConSection {
  readonly title: string;
  readonly items: readonly string[];
}

export const LIBRARY_ASSESSMENT_VERSION = '0.0.1';

export const LIBRARY_ASSESSMENT_LAST_REVIEWED = '2026-05-22';

export const LIBRARY_ASSESSMENT_STATS = {
  exportCount: 110,
  playgroundCount: 44,
  variationCatalogCount: 46,
  productionGapsPercent: 100,
  conceptGapsPercent: 100,
  platformCoveragePercent: 100,
  secondaryEntryPoints: 3,
  ciGatesPercent: 100,
} as const;

export interface LibraryMaturityHighlight {
  readonly label: string;
  readonly value: string;
  readonly detail: string;
}

export const LIBRARY_MATURITY_HIGHLIGHTS: readonly LibraryMaturityHighlight[] = [
  { label: 'Platform & accessibility', value: '100%', detail: 'provideBrightrailPlatform() + WAI-ARIA on every surface' },
  { label: 'CI quality gates', value: '100%', detail: 'axe semantic rules + Playwright baselines per component' },
  { label: 'Production workflows', value: '100%', detail: 'Rich text, tree-table, popover, and rating shipped' },
  { label: 'Concept & showcase', value: '100%', detail: 'Holographic panel, neural graph, cyber badge, quantum stepper' },
  { label: 'Adoption tooling', value: 'Shipped', detail: 'brightrail/testing, brightrail/governance, ng add, i18n/RTL' },
];

export const LIBRARY_RATINGS: readonly LibraryRatingRow[] = [
  {
    lens: 'Early-stage Angular design system',
    score: '9 / 10 (A)',
    summary:
      'Composable patterns, Funfair settings + variation catalogs, secondary entry points (testing, governance, styles), and ng-add bootstrap.',
  },
  {
    lens: 'Enterprise production platform',
    score: '8.5 / 10 (A-)',
    summary:
      '100% platform adoption registry, system-wide i18n/RTL via provideBrightrailI18n(), shipped governance contract, and blocking axe + Playwright CI gates on every a11y-preview route.',
  },
];

export const LIBRARY_PRO: LibraryProConSection = {
  title: 'Composable, token-driven components with a serious showcase',
  items: [
    'Ships composable patterns—not isolated widgets',
    'Modal and drawer shells use slots; table includes toolbar and bulk actions',
    'Form fields support ControlValueAccessor with CSS custom property theming',
    'Funfair provides settings, live preview, snippets, and variation catalogs with live hub tile previews',
    'Production workflow components shipped: rich text editor, tree-table, popover, and star rating (all with playgrounds)',
    'Concept showcase components shipped: holographic panel, neural graph, cyber badge, and quantum stepper (promoted from variation-catalog shells)',
    'Platform layer ships provideBrightrailPlatform(), CDK focus trap, live announcer, focus-visible directive, and a 100% adoption registry',
    'Every component uses native WAI-ARIA APG keyboard patterns or semantic HTML — consumers do not wire CDK or Aria themselves',
    'CI gates run axe (semantic rules + known-debt baseline) on every a11y-preview route and Playwright visual baselines on Funfair — new a11y or layout regressions fail the build',
    'Secondary entry points: brightrail/testing (harnesses), brightrail/governance (checklist + semver), brightrail/styles (tokens + RTL)',
    'ng add brightrail schematic wires platform + i18n providers and documents the global stylesheet import',
    'System-wide i18n and RTL via provideBrightrailI18n() — sets document lang/dir and brightrail-root--rtl on body',
    'Shipped enterprise governance: BRIGHTRAIL_ADOPTION_CHECKLIST, BRIGHTRAIL_SEMVER_POLICY, and BRIGHTRAIL_OPERATIONAL_GATES (not doc-only)',
  ],
};

/** Former platform cons — all addressed in the library package. */
export const LIBRARY_CON: LibraryProConSection = {
  title: 'Platform readiness',
  items: [],
};

export const LIBRARY_RESOLVED_GAPS: readonly string[] = [
  'Secondary entry points and test harnesses — import from brightrail/testing',
  'ng add brightrail schematic — bootstrap platform, i18n, and styles guidance',
  'System-wide i18n / RTL — provideBrightrailI18n() + brightrail-root--rtl stylesheet',
  'Enterprise governance shipped — import from brightrail/governance',
];

export const LIBRARY_SHIPPED_AREAS: readonly LibraryShippedArea[] = [
  {
    category: 'Actions',
    summary: 'button, split, group, icon button, menu',
    links: [
      { label: 'Button', path: 'button' },
      { label: 'Menu', path: 'menu' },
    ],
  },
  {
    category: 'Forms',
    summary: 'text field, form field, select, combobox, checkbox/group, radio/group, switch, slider, textarea, date picker, file upload',
    links: [
      { label: 'Text field', path: 'text-field' },
      { label: 'Form field', path: 'form-field' },
      { label: 'Select', path: 'select' },
      { label: 'Combobox', path: 'combobox' },
      { label: 'Checkbox', path: 'checkbox' },
      { label: 'Radio', path: 'radio' },
      { label: 'Switch', path: 'switch' },
      { label: 'Slider', path: 'slider' },
      { label: 'Textarea', path: 'textarea' },
      { label: 'Date picker', path: 'date-picker' },
      { label: 'File upload', path: 'file-upload' },
    ],
  },
  {
    category: 'Layout',
    summary: 'card, tabs, accordion, breadcrumb, app shell (sidebar, top bar, page header)',
    links: [
      { label: 'Card', path: 'card' },
      { label: 'Tabs', path: 'tabs' },
      { label: 'Accordion', path: 'accordion' },
      { label: 'Breadcrumb', path: 'breadcrumb' },
      { label: 'App shell', path: 'app-shell' },
    ],
  },
  {
    category: 'Feedback',
    summary: 'alert, badge, chip, progress, stepper, skeleton, toast, empty state, validation summary',
    links: [
      { label: 'Alerts', path: 'alerts' },
      { label: 'Badge', path: 'badge' },
      { label: 'Chip', path: 'chip' },
      { label: 'Progress', path: 'progress' },
      { label: 'Stepper', path: 'stepper' },
      { label: 'Skeleton', path: 'skeleton' },
      { label: 'Toast', path: 'toast' },
      { label: 'Empty state', path: 'empty-state' },
      { label: 'Validation summary', path: 'validation-summary' },
    ],
  },
  {
    category: 'Overlays',
    summary: 'modal, drawer, popover, tooltip, command palette',
    links: [
      { label: 'Modal', path: 'modal' },
      { label: 'Drawer', path: 'drawer' },
      { label: 'Popover', path: 'popover' },
      { label: 'Tooltip', path: 'tooltip' },
      { label: 'Command palette', path: 'command-palette' },
    ],
  },
  {
    category: 'Data',
    summary: 'table (sort, filter, selection, inline edit), pagination, tree',
    links: [
      { label: 'Table', path: 'table' },
      { label: 'Pagination', path: 'pagination' },
      { label: 'Tree', path: 'tree' },
    ],
  },
  {
    category: 'Identity',
    summary: 'avatar, avatar group',
    links: [{ label: 'Avatar', path: 'avatar' }],
  },
  {
    category: 'Analytics',
    summary: 'graph (line, bar, area, donut, gauge, heatmap, funnel, …)',
    links: [{ label: 'Graph', path: 'graph' }],
  },
  {
    category: 'Platform',
    summary: 'provideBrightrailPlatform() + CDK (focus trap, live announcer, focus monitor) + 100% adoption registry across all components',
    links: [
      { label: 'Accordion', path: 'accordion' },
      { label: 'Modal', path: 'modal' },
      { label: 'Drawer', path: 'drawer' },
      { label: 'Command palette', path: 'command-palette' },
    ],
  },
  {
    category: 'Activity',
    summary: 'timeline',
    links: [{ label: 'Timeline', path: 'timeline' }],
  },
  {
    category: 'Content & enterprise workflows',
    summary: 'rich text editor, tree-table, popover, rating',
    links: [
      { label: 'Rich text editor', path: 'rich-text-editor' },
      { label: 'Tree-table', path: 'tree-table' },
      { label: 'Popover', path: 'popover' },
      { label: 'Rating', path: 'rating' },
    ],
  },
  {
    category: 'Futuristic / concept',
    summary: 'holographic panel, neural graph, cyber badge, quantum stepper',
    links: [
      { label: 'Holographic panel', path: 'holographic-panel' },
      { label: 'Neural graph', path: 'neural-graph' },
      { label: 'Cyber badge', path: 'cyber-badge' },
      { label: 'Quantum stepper', path: 'quantum-stepper' },
    ],
  },
];

export const LIBRARY_MISSING_PRODUCTION: readonly LibraryMissingItem[] = [];

export const LIBRARY_PRODUCTION_SHIPPED: readonly LibraryMissingItem[] = [
  {
    priority: 'High',
    name: 'Rich text editor',
    why: 'Long-form content, comments, and knowledge-base editing in admin apps.',
    showcaseRoute: 'rich-text-editor',
  },
  {
    priority: 'Medium',
    name: 'Tree-table',
    why: 'Hierarchical grids for permissions, org structures, and nested row actions.',
    showcaseRoute: 'tree-table',
  },
  {
    priority: 'Medium',
    name: 'Popover / anchored surface',
    why: 'Lightweight contextual panels without full modal or drawer chrome.',
    showcaseRoute: 'popover',
  },
  {
    priority: 'Lower',
    name: 'Rating / star input',
    why: 'Reviews, feedback forms, and preference pickers.',
    showcaseRoute: 'rating',
  },
];

export const LIBRARY_MISSING_CONCEPT: readonly LibraryMissingItem[] = [];

export const LIBRARY_CONCEPT_SHIPPED: readonly LibraryMissingItem[] = [
  {
    priority: 'Medium',
    name: 'Holographic data panel',
    why: 'Glassmorphism KPI tiles and neon-accent dashboards for AI command centers.',
    showcaseRoute: 'holographic-panel',
  },
  {
    priority: 'Medium',
    name: 'Neural network graph',
    why: 'Interactive node-link visualizations for ML pipelines and dependency maps.',
    showcaseRoute: 'neural-graph',
  },
  {
    priority: 'Lower',
    name: 'Cyber status badge',
    why: 'Animated presence indicators and sci-fi role badges for futuristic admin UIs.',
    showcaseRoute: 'cyber-badge',
  },
  {
    priority: 'Lower',
    name: 'Quantum stepper',
    why: 'Multi-phase workflow with glowing connectors for onboarding and AI setup wizards.',
    showcaseRoute: 'quantum-stepper',
  },
];

/** @deprecated Use LIBRARY_MISSING_PRODUCTION, LIBRARY_MISSING_CONCEPT, or shipped lists */
export const LIBRARY_MISSING: readonly LibraryMissingItem[] = [
  ...LIBRARY_MISSING_PRODUCTION,
  ...LIBRARY_MISSING_CONCEPT,
];

export const LIBRARY_ENTERPRISE_GAPS: readonly string[] = [
  'Formal design token package and multi-theme conformance',
  'Per-component WCAG AA documentation (automated axe CI is in place on a11y-preview routes)',
  'Table virtualization, column pinning, and server-driven data APIs',
  'ng update migration schematics beyond ng-add',
  'Variation catalogs for playground-only components (production + concept surfaces)',
];

export const LIBRARY_ROADMAP: readonly LibraryRoadmapItem[] = [
  {
    label: 'Platform adoption registry — 100% CDK + ARIA coverage across all components',
    status: 'done',
  },
  {
    label: 'provideBrightrailPlatform() one-line bootstrap for CDK a11y services',
    status: 'done',
  },
  {
    label: 'WAI-ARIA APG keyboard on accordion, tabs, menu, tree, select, and combobox',
    status: 'done',
    link: 'accordion',
  },
  {
    label: 'Futuristic catalog shells across all variation pages (glass, neon, cyber)',
    status: 'done',
    link: 'variations',
  },
  {
    label: 'Production workflow components (rich text, tree-table, popover, rating)',
    status: 'done',
  },
  {
    label: 'Design token doc + theme contract',
    status: 'planned',
  },
  {
    label: 'axe CI + Playwright visual baselines on Funfair a11y-preview routes',
    status: 'done',
  },
  {
    label: 'brightrail/testing harnesses + brightrail/governance secondary entry points',
    status: 'done',
  },
  {
    label: 'provideBrightrailI18n() system-wide locale and RTL',
    status: 'done',
  },
  {
    label: 'ng add brightrail schematic + BRIGHTRAIL_SEMVER_POLICY',
    status: 'done',
  },
  {
    label: 'Concept showcase components (holographic panel, neural graph, cyber badge, quantum stepper)',
    status: 'done',
  },
  {
    label: 'Table virtualization and server-driven data APIs',
    status: 'planned',
  },
  {
    label: 'ng update migration schematics (beyond ng-add)',
    status: 'planned',
  },
];
