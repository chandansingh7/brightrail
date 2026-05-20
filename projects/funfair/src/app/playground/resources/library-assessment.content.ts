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

export const LIBRARY_ASSESSMENT_LAST_REVIEWED = '2026-05-20';

export const LIBRARY_ASSESSMENT_STATS = {
  exportCount: 93,
  playgroundCount: 36,
  variationCatalogCount: 36,
  platformCoveragePercent: 100,
} as const;

export const LIBRARY_RATINGS: readonly LibraryRatingRow[] = [
  {
    lens: 'Early-stage Angular design system',
    score: '8 / 10 (B+)',
    summary: 'Broad component coverage for v0.0.1, modern Angular patterns, and a useful playground.',
  },
  {
    lens: 'Enterprise production platform',
    score: '6.5–7 / 10 (B-)',
    summary: 'Platform layer covers every shipped component — CDK focus trap, live announcer, and WAI-ARIA APG patterns are built in; call provideBrightrailPlatform() once at bootstrap.',
  },
];

export const LIBRARY_PRO: LibraryProConSection = {
  title: 'Composable, token-driven components with a serious showcase',
  items: [
    'Ships composable patterns—not isolated widgets',
    'Modal and drawer shells use slots; table includes toolbar and bulk actions',
    'Form fields support ControlValueAccessor with CSS custom property theming',
    'Funfair provides settings, live preview, snippets, and variation catalogs',
    'Platform layer ships provideBrightrailPlatform(), CDK focus trap, live announcer, focus-visible directive, and a 100% adoption registry',
    'Every component uses native WAI-ARIA APG keyboard patterns or semantic HTML — consumers do not wire CDK or Aria themselves',
    'CI gates run axe (semantic rules + known-debt baseline) on every a11y-preview route and Playwright visual baselines on Funfair — new a11y or layout regressions fail the build',
  ],
};

export const LIBRARY_CON: LibraryProConSection = {
  title: 'Platform tooling and governance are still maturing',
  items: [
    'No secondary entry points, test harnesses, or schematics / migrations yet',
    'No system-wide i18n / RTL story beyond isolated components',
    'Enterprise governance and operational tooling mostly planned in doc/, not shipped',
  ],
};

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
    summary: 'modal, drawer, tooltip, command palette',
    links: [
      { label: 'Modal', path: 'modal' },
      { label: 'Drawer', path: 'drawer' },
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
];

export const LIBRARY_MISSING_PRODUCTION: readonly LibraryMissingItem[] = [
  {
    priority: 'High',
    name: 'Rich text editor',
    why: 'Long-form content, comments, and knowledge-base editing in admin apps.',
  },
  {
    priority: 'Medium',
    name: 'Tree-table',
    why: 'Hierarchical grids for permissions, org structures, and nested row actions.',
  },
  {
    priority: 'Medium',
    name: 'Popover / anchored surface',
    why: 'Lightweight contextual panels without full modal or drawer chrome.',
  },
  {
    priority: 'Lower',
    name: 'Rating / star input',
    why: 'Reviews, feedback forms, and preference pickers.',
  },
];

export const LIBRARY_MISSING_CONCEPT: readonly LibraryMissingItem[] = [
  {
    priority: 'Medium',
    name: 'Holographic data panel',
    why: 'Glassmorphism KPI tiles and neon-accent dashboards for AI command centers.',
    note: 'Showcased as variation-catalog shell styling — not a shipped library component yet.',
    showcaseRoute: 'graph/catalog',
  },
  {
    priority: 'Medium',
    name: 'Neural network graph',
    why: 'Interactive node-link visualizations for ML pipelines and dependency maps.',
    note: 'Concept layouts live in graph and tree variation catalogs.',
    showcaseRoute: 'graph/catalog',
  },
  {
    priority: 'Lower',
    name: 'Cyber status badge',
    why: 'Animated presence indicators and sci-fi role badges for futuristic admin UIs.',
    note: 'Previewed via badge and avatar catalog shells.',
    showcaseRoute: 'badge/catalog',
  },
  {
    priority: 'Lower',
    name: 'Quantum stepper',
    why: 'Multi-phase workflow with glowing connectors for onboarding and AI setup wizards.',
    note: 'Previewed via stepper and progress catalog shells.',
    showcaseRoute: 'stepper/catalog',
  },
];

/** @deprecated Use LIBRARY_MISSING_PRODUCTION or LIBRARY_MISSING_CONCEPT */
export const LIBRARY_MISSING: readonly LibraryMissingItem[] = [
  ...LIBRARY_MISSING_PRODUCTION,
  ...LIBRARY_MISSING_CONCEPT,
];

export const LIBRARY_ENTERPRISE_GAPS: readonly string[] = [
  'Formal design token package and multi-theme conformance',
  'Per-component WCAG AA documentation (automated axe CI is in place on a11y-preview routes)',
  'Unified form-field pattern with consistent aria-describedby',
  'i18n and RTL across the system (not only date picker locale)',
  'Table virtualization, column pinning, and server-driven data APIs',
  'brightrail/testing harnesses and secondary APF entry points',
  'ng add / ng update schematics, semver, and deprecation policy',
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
    label: 'Tree-table and popover for dense admin UIs',
    status: 'planned',
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
    label: 'brightrail/testing harnesses for unit and integration tests',
    status: 'planned',
  },
  {
    label: 'Rich text editor for content workflows',
    status: 'planned',
  },
  {
    label: 'Holographic data panel and neural network graph components',
    status: 'planned',
  },
  {
    label: 'Table virtualization and server-driven data APIs',
    status: 'planned',
  },
  {
    label: 'ng add / ng update schematics and semver policy',
    status: 'planned',
  },
];
