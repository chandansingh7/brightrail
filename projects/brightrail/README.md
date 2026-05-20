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
import { provideBrightrailPlatform } from 'brightrail';

export const appConfig: ApplicationConfig = {
  providers: [provideBrightrailPlatform()],
};
```

You do **not** need to wire focus traps, ARIA roles, or listbox keyboard handlers yourself — use Brightrail components as documented.

## Build & publish

```bash
ng build brightrail
cd dist/brightrail && npm publish
```

## Tests

```bash
ng test brightrail
```

### CI quality gates

GitHub Actions runs library unit tests, consumer package verification (`verify:package`), **axe accessibility scans** on every Funfair `a11y-preview/:componentId` route, and **Playwright visual baselines** for each playground preview.

```bash
npm run e2e:a11y              # axe on isolated previews
npm run e2e:visual            # screenshot regression
npm run e2e:update-snapshots  # after intentional visual changes
```
