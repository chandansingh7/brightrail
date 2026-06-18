# Brightrail

Fun Angular component library for **Angular 21.x** apps.

**npm:** [npmjs.com/package/brightrail](https://www.npmjs.com/package/brightrail)  
**Repository:** [github.com/chandansingh7/brightrail](https://github.com/chandansingh7/brightrail)  
**Live playground:** [chandansingh7.github.io/brightrail](https://chandansingh7.github.io/brightrail/)

---

## Install

Requires an **Angular 21** app (`@angular/core` `>=21.0.0 <22.0.0`).

```bash
npm install brightrail @angular/cdk @angular/aria
ng add brightrail
```

`ng add brightrail` wires `provideBrightrailPlatform()`, `provideBrightrailI18n()`, and the global stylesheet when possible.

### Use a component

```ts
import { Component } from '@angular/core';
import { BrightrailButtonComponent } from 'brightrail';

@Component({
  standalone: true,
  imports: [BrightrailButtonComponent],
  template: `<button brightrail-button variant="primary">Save</button>`,
})
export class MyPageComponent {}
```

Full install guide (manual setup, styles, local tarball):  
[github.com/chandansingh7/brightrail/blob/main/doc/CONSUMING.md](https://github.com/chandansingh7/brightrail/blob/main/doc/CONSUMING.md)

---

## Requirements

**Angular 21.x only** — not compatible with Angular 20 or earlier.

Peer dependencies: `@angular/core`, `@angular/common`, `@angular/forms`, `@angular/cdk`, `@angular/aria`, `rxjs` ^7.4.0.

---

## Manual setup (if you skip `ng add`)

**Styles** — `src/styles.scss`:

```scss
@use 'brightrail/styles/brightrail-root.scss';
```

**Providers** — `src/app/app.config.ts`:

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

`provideBrightrailPlatform()` registers CDK LiveAnnouncer and FocusMonitor (required for toasts, command palette, focus-visible styling).

---

## Secondary entry points

| Import | Purpose |
|--------|---------|
| `brightrail` | Components, platform, i18n |
| `brightrail/testing` | Unit-test harnesses (`BrightrailButtonHarness`, …) |
| `brightrail/governance` | Adoption checklist & semver policy |
| `brightrail/styles/brightrail-root.scss` | Design tokens + RTL helpers |

---

## Accessibility

Brightrail ships CDK focus trap, live announcer, and WAI-ARIA keyboard patterns inside every component. Call **`provideBrightrailPlatform()` once** at bootstrap — you do not need to wire focus traps or listbox keyboard handlers yourself.

---

## Maintainers — releases

npm publish is **tag-driven** (pushing `main` alone does not publish).

```bash
# 1. Bump version in projects/brightrail/package.json + root package.json
git add projects/brightrail/package.json package.json
git commit -m "chore: release brightrail v0.1.1"
git push origin main

# 2. Tag triggers GitHub Actions → npm publish
git tag v0.1.1
git push origin v0.1.1
```

Details: [doc/PUBLISHING.md on GitHub](https://github.com/chandansingh7/brightrail/blob/main/doc/PUBLISHING.md)
