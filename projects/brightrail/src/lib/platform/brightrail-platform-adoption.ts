/** How a Brightrail surface integrates with the shared platform layer. */
export type BrightrailPlatformAngularAriaStatus = 'adopted' | 're-export-only';

export interface BrightrailPlatformAdoptionEntry {
  readonly area: string;
  readonly component: string;
  readonly cdk: readonly string[];
  readonly angularAria: BrightrailPlatformAngularAriaStatus;
  readonly notes?: string;
}

const nativeForm = 'Native form semantics with aria-* on controls; form-field wires aria-describedby.';
const nativeInteractive = 'Native HTML semantics with Brightrail aria-* attributes and :focus-visible styling.';
const apgKeyboard = 'WAI-ARIA APG keyboard model (roving tabindex, arrows, Home/End) on native Brightrail markup.';
const presentational = 'Presentational surface; no interaction required beyond semantic structure.';
const focusTrapNote = 'Focus trap wired via BrightrailFocusTrapDirective.';

/** Source-of-truth map for CDK / Angular Aria adoption across Brightrail. */
export const BRIGHTRAIL_PLATFORM_ADOPTION: readonly BrightrailPlatformAdoptionEntry[] = [
  // — Actions —
  {
    area: 'Actions',
    component: 'button',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: nativeInteractive,
  },
  {
    area: 'Actions',
    component: 'icon-button',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: nativeInteractive,
  },
  {
    area: 'Actions',
    component: 'split-button',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: nativeInteractive,
  },
  {
    area: 'Actions',
    component: 'button-group',
    cdk: [],
    angularAria: 'adopted',
    notes: 'Layout wrapper for button clusters; delegates interaction to child buttons.',
  },
  {
    area: 'Actions',
    component: 'chip',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: nativeInteractive,
  },
  {
    area: 'Actions',
    component: 'menu',
    cdk: ['ListKeyManager patterns'],
    angularAria: 'adopted',
    notes: apgKeyboard,
  },
  {
    area: 'Actions',
    component: 'menu-item',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: 'role="menuitem" with roving tabindex managed by brightrail-menu.',
  },
  {
    area: 'Actions',
    component: 'menu-trigger',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: 'aria-haspopup / aria-expanded wired to brightrail-menu.',
  },

  // — Forms —
  {
    area: 'Forms',
    component: 'text-field',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: nativeForm,
  },
  {
    area: 'Forms',
    component: 'form-field',
    cdk: [],
    angularAria: 'adopted',
    notes: 'Associates label, hint, and error text via aria-describedby on slotted controls.',
  },
  {
    area: 'Forms',
    component: 'textarea',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: nativeForm,
  },
  {
    area: 'Forms',
    component: 'checkbox',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: nativeForm,
  },
  {
    area: 'Forms',
    component: 'checkbox-group',
    cdk: [],
    angularAria: 'adopted',
    notes: 'fieldset / group semantics with labelled checkbox children.',
  },
  {
    area: 'Forms',
    component: 'radio',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: nativeForm,
  },
  {
    area: 'Forms',
    component: 'radio-group',
    cdk: [],
    angularAria: 'adopted',
    notes: 'radiogroup role with arrow-key navigation between options.',
  },
  {
    area: 'Forms',
    component: 'switch',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: 'role="switch" with aria-checked on native input.',
  },
  {
    area: 'Forms',
    component: 'slider',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: 'range input with aria-valuemin / aria-valuemax / aria-valuenow.',
  },
  {
    area: 'Forms',
    component: 'select',
    cdk: ['ListKeyManager patterns', 'FocusMonitor'],
    angularAria: 'adopted',
    notes: 'Listbox APG (aria-haspopup, aria-expanded, aria-activedescendant) on native brightrail-select.',
  },
  {
    area: 'Forms',
    component: 'combobox',
    cdk: ['ListKeyManager patterns', 'FocusMonitor'],
    angularAria: 'adopted',
    notes: 'Combobox APG with filterable listbox popup on native brightrail-combobox.',
  },
  {
    area: 'Forms',
    component: 'date-picker',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: 'Calendar grid with roving tabindex on day cells and aria-selected states.',
  },
  {
    area: 'Forms',
    component: 'file-upload',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: 'Native file input with drag-drop region and status announcements.',
  },

  // — Layout —
  {
    area: 'Layout',
    component: 'card',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: 'Optional interactive card with dismiss button and keyboard focus ring.',
  },
  {
    area: 'Layout',
    component: 'tabs',
    cdk: ['ListKeyManager patterns'],
    angularAria: 'adopted',
    notes: apgKeyboard,
  },
  {
    area: 'Layout',
    component: 'accordion',
    cdk: ['ListKeyManager patterns'],
    angularAria: 'adopted',
    notes: apgKeyboard,
  },
  {
    area: 'Layout',
    component: 'breadcrumb',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: 'nav landmark with aria-current on active crumb.',
  },
  {
    area: 'Layout',
    component: 'app-shell',
    cdk: [],
    angularAria: 'adopted',
    notes: 'Landmark layout shell; delegates nav semantics to sidebar and top bar slots.',
  },
  {
    area: 'Layout',
    component: 'sidebar',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: 'nav landmark with keyboard-focusable nav links and buttons.',
  },
  {
    area: 'Layout',
    component: 'top-bar',
    cdk: [],
    angularAria: 'adopted',
    notes: 'header landmark; interactive children use native button/link semantics.',
  },
  {
    area: 'Layout',
    component: 'page-header',
    cdk: [],
    angularAria: 'adopted',
    notes: presentational,
  },

  // — Feedback —
  {
    area: 'Feedback',
    component: 'alert',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: 'role="alert" / role="status" with optional dismiss control.',
  },
  {
    area: 'Feedback',
    component: 'badge',
    cdk: [],
    angularAria: 'adopted',
    notes: presentational,
  },
  {
    area: 'Feedback',
    component: 'toast',
    cdk: ['LiveAnnouncer'],
    angularAria: 'adopted',
    notes: 'aria-live region; toast service uses BrightrailLiveAnnouncerService for async status.',
  },
  {
    area: 'Feedback',
    component: 'skeleton',
    cdk: [],
    angularAria: 'adopted',
    notes: 'aria-busy / aria-hidden loading placeholders.',
  },
  {
    area: 'Feedback',
    component: 'empty-state',
    cdk: [],
    angularAria: 'adopted',
    notes: presentational,
  },
  {
    area: 'Feedback',
    component: 'validation-summary',
    cdk: [],
    angularAria: 'adopted',
    notes: 'aria-live error list linked to invalid form fields.',
  },
  {
    area: 'Feedback',
    component: 'progress',
    cdk: [],
    angularAria: 'adopted',
    notes: 'role="progressbar" with aria-valuenow / aria-valuemin / aria-valuemax.',
  },
  {
    area: 'Feedback',
    component: 'stepper',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: 'Step indicators with aria-current on active step.',
  },

  // — Overlays —
  {
    area: 'Overlays',
    component: 'modal',
    cdk: ['FocusTrap'],
    angularAria: 'adopted',
    notes: focusTrapNote,
  },
  {
    area: 'Overlays',
    component: 'drawer',
    cdk: ['FocusTrap'],
    angularAria: 'adopted',
    notes: focusTrapNote,
  },
  {
    area: 'Overlays',
    component: 'tooltip',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: 'Described-by tooltip on hover, focus, and click triggers.',
  },
  {
    area: 'Overlays',
    component: 'command-palette',
    cdk: ['FocusTrap', 'LiveAnnouncer'],
    angularAria: 'adopted',
    notes: `${focusTrapNote} Filter results announced via BrightrailLiveAnnouncerService.`,
  },

  // — Data —
  {
    area: 'Data',
    component: 'table',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: 'Sortable headers, row selection, and inline edit with keyboard support.',
  },
  {
    area: 'Data',
    component: 'pagination',
    cdk: ['FocusMonitor'],
    angularAria: 'adopted',
    notes: 'nav landmark with aria-current on active page.',
  },
  {
    area: 'Data',
    component: 'tree',
    cdk: ['ListKeyManager patterns', 'FocusMonitor'],
    angularAria: 'adopted',
    notes: 'Tree APG with expand/collapse toggles and roving tabindex.',
  },
  {
    area: 'Data',
    component: 'graph',
    cdk: [],
    angularAria: 'adopted',
    notes: 'SVG charts with role="img" and aria-label; interactive legend uses native buttons.',
  },
  {
    area: 'Data',
    component: 'timeline',
    cdk: [],
    angularAria: 'adopted',
    notes: presentational,
  },

  // — Identity —
  {
    area: 'Identity',
    component: 'avatar',
    cdk: [],
    angularAria: 'adopted',
    notes: 'Decorative or labelled image with optional status badge.',
  },
  {
    area: 'Identity',
    component: 'avatar-group',
    cdk: [],
    angularAria: 'adopted',
    notes: 'Stacked avatars with overflow count label.',
  },

  // — Misc —
  {
    area: 'Misc',
    component: 'icon',
    cdk: [],
    angularAria: 'adopted',
    notes: 'aria-hidden decorative glyph unless given an accessible name.',
  },
  {
    area: 'Misc',
    component: 'welcome',
    cdk: [],
    angularAria: 'adopted',
    notes: presentational,
  },
];

export function brightrailPlatformAdoptionSummary(): {
  readonly total: number;
  readonly cdkSurfaces: number;
  readonly angularAriaAdopted: number;
  readonly coveragePercent: number;
} {
  const total = BRIGHTRAIL_PLATFORM_ADOPTION.length;
  const cdkSurfaces = BRIGHTRAIL_PLATFORM_ADOPTION.filter((e) => e.cdk.length > 0).length;
  const angularAriaAdopted = BRIGHTRAIL_PLATFORM_ADOPTION.filter(
    (e) => e.angularAria === 'adopted',
  ).length;
  const coveragePercent = total === 0 ? 100 : Math.round((angularAriaAdopted / total) * 100);
  return { total, cdkSurfaces, angularAriaAdopted, coveragePercent };
}

/** True when every registered Brightrail surface reports platform adoption. */
export function brightrailAllComponentsPlatformReady(): boolean {
  return BRIGHTRAIL_PLATFORM_ADOPTION.every((e) => e.angularAria === 'adopted');
}
