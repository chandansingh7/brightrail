export interface LibraryRatingRow {
  readonly lens: string;
  readonly score: string;
  readonly summary: string;
}

export interface LibraryMissingItem {
  readonly priority: 'High' | 'Medium' | 'Lower';
  readonly name: string;
  readonly why: string;
}

export const LIBRARY_ASSESSMENT_VERSION = '0.0.1';

export const LIBRARY_RATINGS: readonly LibraryRatingRow[] = [
  {
    lens: 'Early-stage Angular design system',
    score: '8 / 10 (B+)',
    summary: 'Broad component coverage for v0.0.1, modern Angular patterns, and a useful playground.',
  },
  {
    lens: 'Enterprise production platform',
    score: '5.5–6 / 10 (C+)',
    summary: 'Solid foundation, but platform tooling and governance are still maturing.',
  },
];

export const LIBRARY_PRO = {
  title: 'Composable, token-driven components with a serious showcase',
  body: `Brightrail ships patterns—not isolated widgets. Modal and drawer shells use slots, the table includes toolbar and bulk actions, form fields support ControlValueAccessor, theming runs on CSS custom properties, and Funfair provides component settings, live preview, HTML/TS snippets, and variation catalogs. That is how design systems actually get adopted.`,
};

export const LIBRARY_CON = {
  title: 'Platform maturity is still library-first, not enterprise-first',
  body: `There is no CDK or Angular Aria layer yet, no secondary entry points or test harnesses, no automated a11y/visual regression gate, no schematics or migrations, and no system-wide i18n/RTL story. Individual components can be polished, but enterprise adoption also depends on governance, conformance, and operational tooling—much of which is planned in doc/, not shipped yet.`,
};

export const LIBRARY_SHIPPED_AREAS: readonly string[] = [
  'Actions — button, split, group, icon button, menu',
  'Forms — text field, form field, select, combobox, checkbox/group, radio/group, switch, slider, textarea, date picker, file upload',
  'Layout — card, tabs, accordion, breadcrumb, app shell (sidebar, top bar, page header)',
  'Feedback — alert, badge, chip, progress, stepper, skeleton, toast, empty state, validation summary',
  'Overlays — modal, drawer, tooltip, command palette',
  'Data — table (sort, filter, selection, inline edit), pagination, tree',
  'Identity — avatar, avatar group',
  'Analytics — graph (line, bar, area, donut, gauge, heatmap, funnel, …)',
  'Activity — timeline',
];

export const LIBRARY_MISSING: readonly LibraryMissingItem[] = [
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
    priority: 'Medium',
    name: 'Holographic data panel',
    why: 'Glassmorphism KPI tiles and neon-accent dashboards for AI command centers.',
  },
  {
    priority: 'Medium',
    name: 'Neural network graph',
    why: 'Interactive node-link visualizations for ML pipelines and dependency maps.',
  },
  {
    priority: 'Lower',
    name: 'Rating / star input',
    why: 'Reviews, feedback forms, and preference pickers.',
  },
  {
    priority: 'Lower',
    name: 'Cyber status badge',
    why: 'Animated presence indicators and sci-fi role badges for futuristic admin UIs.',
  },
  {
    priority: 'Lower',
    name: 'Quantum stepper',
    why: 'Multi-phase workflow with glowing connectors for onboarding and AI setup wizards.',
  },
];

export const LIBRARY_ENTERPRISE_GAPS: readonly string[] = [
  'Formal design token package and multi-theme conformance',
  'Documented WCAG AA per component plus automated a11y CI',
  'Unified form-field pattern with consistent aria-describedby',
  'i18n and RTL across the system (not only date picker locale)',
  'Table virtualization, column pinning, and server-driven data APIs',
  'brightrail/testing harnesses and secondary APF entry points',
  'ng add / ng update schematics, semver, and deprecation policy',
  'Visual regression baselines (Playwright or Chromatic)',
];

export const LIBRARY_ROADMAP: readonly string[] = [
  'Tree-table and popover for dense admin UIs',
  'Futuristic catalog shells across all variation pages (glass, neon, cyber)',
  'Design token doc + theme contract',
  'Harnesses + axe CI + visual baselines',
  'Rich text editor for content workflows',
  'Holographic data panel and neural network graph components',
  'Table virtualization and server-driven data APIs',
  'ng add / ng update schematics and semver policy',
];
