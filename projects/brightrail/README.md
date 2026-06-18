# Brightrail

Publishable Angular UI library from this workspace.

**Repository:** [github.com/chandansingh7/brightrail](https://github.com/chandansingh7/brightrail)  
**Live playground:** [chandansingh7.github.io/brightrail](https://chandansingh7.github.io/brightrail/)

## Requirements

**Angular 21.x only.** Install into an application that already uses `@angular/core` and `@angular/common` in the **21** major range (not 20 or earlier). Patch/minor versions within 21 are fine; upgrade your app before adopting this package.

Peers: `rxjs` **^7.4.0** (aligned with Angular 21). **Node:** this package’s `engines.node` follows [Angular 21 supported versions](https://angular.dev/reference/versions) (`^20.19.0 || ^22.12.0 || >=24.0.0`). The Brightrail **workspace** standardizes on **Node 24 LTS** for builds (see repo root `.nvmrc`).

## Accessibility platform

Brightrail ships CDK focus trap, live announcer, and WAI-ARIA keyboard patterns inside every component. **Call `provideBrightrailPlatform()` once** in your application bootstrap so CDK `LiveAnnouncer` and `FocusMonitor` are available (required for toasts, command palette, and focus-visible styling):

```ts
import { ApplicationConfig } from '@angular/core';
import { provideBrightrailI18n, provideBrightrailPlatform } from 'brightrail';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrightrailPlatform(),
    provideBrightrailI18n({ locale: 'en', direction: 'ltr' }),
  ],
};
```

You do **not** need to wire focus traps, ARIA roles, or listbox keyboard handlers yourself — use Brightrail components as documented.

## Secondary entry points

| Import | Purpose |
|--------|---------|
| `brightrail` | Components, platform, i18n |
| `brightrail/testing` | Unit-test harnesses (`BrightrailButtonHarness`, …) |
| `brightrail/governance` | Adoption checklist, semver policy, operational CI gates |
| `brightrail/styles/brightrail-root.scss` | Global tokens + RTL helpers |

## ng-add schematic

```bash
ng add brightrail
```

Wires `provideBrightrailPlatform()` and `provideBrightrailI18n()` into `app.config.ts` when possible and documents the stylesheet import.

## Install in any Angular 21 app

```bash
npm install brightrail @angular/cdk @angular/aria
ng add brightrail
```

**Guides:**

| Doc | Contents |
|-----|----------|
| **[doc/CONSUMING.md](../../doc/CONSUMING.md)** | Full install guide — `ng add`, manual providers/styles, component imports, local tarball |
| **[doc/PUBLISHING.md](../../doc/PUBLISHING.md)** | Publish to npm, create **`NPM_TOKEN`**, GitHub Actions releases |

### Minimal manual wiring

**Styles** (`src/styles.scss`):

```scss
@use 'brightrail/styles/brightrail-root.scss';
```

**Providers** (`src/app/app.config.ts`):

```ts
import { provideBrightrailI18n, provideBrightrailPlatform } from 'brightrail';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrightrailPlatform(),
    provideBrightrailI18n({ locale: 'en', direction: 'ltr' }),
  ],
};
```

**Component:**

```ts
import { BrightrailButtonComponent } from 'brightrail';
// add to standalone imports: [BrightrailButtonComponent]
```

## Build & publish

```bash
npm run build:lib      # outputs dist/brightrail with patched exports
npm run pack:lib       # create .tgz for local testing
npm run publish:lib    # publish to npm (requires npm login or NPM_TOKEN)
```

Recommended registry: **[npmjs.com](https://www.npmjs.com/)** as unscoped `brightrail`.

**CI publish:** push a version tag (e.g. `v0.1.0`). GitHub Actions needs an npm access token stored as repository secret **`NPM_TOKEN`**. Step-by-step: **[doc/PUBLISHING.md](../../doc/PUBLISHING.md)**.

## Tests

```bash
ng test brightrail
```

### CI quality gates

GitHub Actions runs library unit tests, consumer package verification (`verify:package`), claims verification (`verify:claims`), **axe accessibility scans** on every Funfair `a11y-preview/:componentId` route, and **Playwright visual baselines** for each playground preview.

```bash
npm run verify:claims         # platform registry, CI wiring, secondary entries
npm run e2e:gates             # all gates (same as CI)
./scripts/e2e-gates.sh --a11y # semantic axe only
npm run e2e:update-snapshots  # after intentional visual changes
```
