export interface LibraryShowcasePillar {
  readonly title: string;
  readonly summary: string;
  readonly bullets: readonly string[];
}

export interface LibraryShowcaseStep {
  readonly title: string;
  readonly body: string;
  readonly code: string;
}

export interface LibraryShowcaseExploreLink {
  readonly label: string;
  readonly path: string;
  readonly description: string;
}

export const LIBRARY_SHOWCASE_VERSION = '0.0.1';

export const LIBRARY_SHOWCASE_TAGLINE =
  'Composable Angular 21 UI for admin apps — tokens, accessibility, and live playgrounds built in.';

export const LIBRARY_SHOWCASE_PILLARS: readonly LibraryShowcasePillar[] = [
  {
    title: 'What it is',
    summary: 'A publishable Angular library of production-oriented components, not one-off widgets.',
    bullets: [
      '93+ public exports across actions, forms, layout, feedback, overlays, and data surfaces',
      'Standalone components with OnPush change detection and CSS custom-property theming',
      'Shipped as an Angular package (APF) — consume from npm or file:dist in this monorepo',
    ],
  },
  {
    title: 'How it works',
    summary: 'Patterns are composed; the platform layer wires accessibility once at bootstrap.',
    bullets: [
      'Call provideBrightrailPlatform() so CDK LiveAnnouncer, FocusMonitor, and focus-visible styling work app-wide',
      'Modal, drawer, menu, tree, and form controls implement WAI-ARIA APG keyboard models internally',
      'Funfair (this site) is the living catalog — settings, preview, snippets, and variation shells per component',
    ],
  },
  {
    title: 'How you adopt it',
    summary: 'Install peers, bootstrap the platform provider, import only what you need.',
    bullets: [
      'Requires Angular 21.x and rxjs ^7.4 — see projects/brightrail/README.md for engines',
      'Import brightrail components in standalone routes; wrap fields with brightrail-form-field when needed',
      'Run npm run verify:package locally (or e2e:gates) before publishing — same checks as CI',
    ],
  },
];

export const LIBRARY_SHOWCASE_STEPS: readonly LibraryShowcaseStep[] = [
  {
    title: 'Install and link the package',
    body: 'Add brightrail to your Angular 21 app. In this monorepo, the workspace uses file:dist/brightrail after ng build brightrail.',
    code: `npm install brightrail
# monorepo dev:
npm run build:lib && npm install`,
  },
  {
    title: 'Bootstrap the platform layer',
    body: 'Register CDK accessibility services once. Required for toasts, command palette, and focus-visible rings.',
    code: `import { ApplicationConfig } from '@angular/core';
import { provideBrightrailPlatform } from 'brightrail';

export const appConfig: ApplicationConfig = {
  providers: [provideBrightrailPlatform()],
};`,
  },
  {
    title: 'Use a component',
    body: 'Import standalone brightrail components in your route or parent. Form controls implement ControlValueAccessor.',
    code: `import { BrightrailButtonComponent } from 'brightrail';

@Component({
  standalone: true,
  imports: [BrightrailButtonComponent],
  template: \`
    <brightrail-button variant="primary" (click)="save()">
      Save changes
    </brightrail-button>
  \`,
})
export class SettingsPageComponent {
  save(): void { /* … */ }
}`,
  },
  {
    title: 'Theme with tokens',
    body: 'Components read CSS variables from brightrail-root.scss. Override --br-* tokens or wrap with your design pack.',
    code: `:root {
  --br-color-primary: #2563eb;
  --br-radius-md: 0.5rem;
}`,
  },
];

export const LIBRARY_SHOWCASE_EXPLORE: readonly LibraryShowcaseExploreLink[] = [
  {
    label: 'Button playground',
    path: 'button',
    description: 'Live settings, preview, and copy-paste snippets',
  },
  {
    label: 'Library assessment',
    path: 'resources/library-assessment',
    description: 'Honest maturity snapshot, gaps, and roadmap',
  },
  {
    label: 'Variation catalogs',
    path: 'variations',
    description: 'Futuristic shells and density variants hub',
  },
  {
    label: 'Midway consumer app',
    path: '/midway',
    description: 'Proves the packaged build via node_modules (local dev)',
  },
];
