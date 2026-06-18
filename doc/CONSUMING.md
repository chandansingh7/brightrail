# Using Brightrail in any Angular project

Brightrail is a normal **npm package**. Your app must run **Angular 21.x** (peer dependencies `>=21.0.0 <22.0.0`).

**npm package (after publish):** [npmjs.com/package/brightrail](https://www.npmjs.com/package/brightrail)  
**Live demo:** [chandansingh7.github.io/brightrail](https://chandansingh7.github.io/brightrail/)

---

## Quick start (recommended)

```bash
# 1. Create or use an existing Angular 21 app
ng new my-app --standalone
cd my-app

# 2. Install Brightrail and required peers
npm install brightrail @angular/cdk @angular/aria

# 3. Run the ng-add schematic (wires providers + stylesheet)
ng add brightrail

# 4. Use components in any standalone component
```

**Example component:**

```ts
import { Component } from '@angular/core';
import { BrightrailButtonComponent, BrightrailCardComponent } from 'brightrail';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BrightrailButtonComponent, BrightrailCardComponent],
  template: `
    <brightrail-card>
      <h2 brightrail-card-header>Welcome</h2>
      <button brightrail-button variant="primary">Save</button>
    </brightrail-card>
  `,
})
export class DashboardComponent {}
```

Start the dev server:

```bash
ng serve
```

---

## What `ng add brightrail` does

The schematic (in the published package) tries to:

1. Add **`provideBrightrailPlatform()`** and **`provideBrightrailI18n()`** to `src/app/app.config.ts`
2. Import global styles in `src/styles.scss`:

   ```scss
   @import 'brightrail/styles/brightrail-root.scss';
   ```

If your app layout differs, apply the steps in **Manual setup** below.

---

## Manual setup

Use this if you skip `ng add` or need to wire things by hand.

### 1. Install dependencies

```bash
npm install brightrail @angular/cdk @angular/aria
```

Peers already satisfied by a typical Angular 21 app: `@angular/core`, `@angular/common`, `@angular/forms`, `rxjs`.

### 2. Global styles

In `src/styles.scss` (or `angular.json` → `styles` array):

```scss
@use 'brightrail/styles/brightrail-root.scss';
```

Optional futuristic theme layer:

```scss
@use 'brightrail/styles/brightrail-futuristic.scss';
```

Override design tokens on `:root` before or after the import:

```scss
:root {
  --br-color-primary: #1e6bdd;
}
```

### 3. Application providers

In `src/app/app.config.ts`:

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

`provideBrightrailPlatform()` registers CDK **LiveAnnouncer** and **FocusMonitor** (required for toasts, command palette, focus-visible behavior).

### 4. Import components

Brightrail components are **standalone**. Import only what you use:

```ts
import {
  BrightrailButtonComponent,
  BrightrailSelectComponent,
  BrightrailTableComponent,
} from 'brightrail';
```

### 5. Futuristic / cyber shell (optional)

```ts
import { BRIGHTRAIL_FX_SHELL_HOST, BrightrailFxShellDirective } from 'brightrail';

@Component({
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  // …
})
```

See the **Cyber** demo in this repo’s Midway app for a full example.

---

## Secondary entry points

| Import | Purpose |
|--------|---------|
| `brightrail` | Components, directives, platform & i18n providers |
| `brightrail/testing` | Test harnesses (`BrightrailButtonHarness`, …) |
| `brightrail/governance` | Adoption checklist & semver policy helpers |
| `brightrail/styles/brightrail-root.scss` | Design tokens, RTL, anchored panel globals |
| `brightrail/styles/brightrail-futuristic.scss` | Futuristic shell tokens |

**Unit test example:**

```ts
import { BrightrailButtonHarness } from 'brightrail/testing';
```

---

## Install options (before / without npm publish)

| Method | When to use | Command / config |
|--------|-------------|------------------|
| **npm registry** | Production apps | `npm install brightrail` |
| **Local tarball** | Test a build before publish | `npm run pack:lib` in this repo, then `npm install /path/to/brightrail-0.1.0.tgz` |
| **File dependency** | Monorepo / linked checkout | `"brightrail": "file:../brightrail/dist/brightrail"` in `package.json` |
| **Git dependency** | Private fork (advanced) | `"brightrail": "github:chandansingh7/brightrail#v0.1.0"` — you must build the library in `node_modules`; tarball is simpler |

After a **file:** install, rebuild the library when source changes:

```bash
cd ../brightrail && npm run build:lib
cd ../my-app && npm install
```

---

## Requirements checklist

- [ ] Angular **21.x** app (`@angular/core` `>=21.0.0 <22.0.0`)
- [ ] `@angular/cdk` and `@angular/aria` installed
- [ ] `brightrail/styles/brightrail-root.scss` imported once globally
- [ ] `provideBrightrailPlatform()` in `app.config.ts`
- [ ] Components imported in `imports: [...]` of standalone components (or NgModule)

---

## Maintainers: publishing & `NPM_TOKEN`

To publish to npm and enable GitHub Actions publish on tags, see **[PUBLISHING.md](./PUBLISHING.md)** — includes step-by-step:

1. Create an npm access token at [npmjs.com](https://www.npmjs.com/)
2. Add it as GitHub secret **`NPM_TOKEN`**
3. Push a tag `v0.1.0` to trigger `.github/workflows/publish.yml`

Local publish:

```bash
npm login
npm run publish:lib
```

---

## Verify (maintainers)

```bash
npm run verify:package   # build → npm install → compile Midway consumer app
npm run verify:claims    # exports, schematics, CI gates
node --test scripts/patch-package-manifest.spec.mjs
```
