# Brightrail

Publishable Angular UI library from this workspace.

## Requirements

**Angular 21.x only.** Install into an application that already uses `@angular/core` and `@angular/common` in the **21** major range (not 20 or earlier). Patch/minor versions within 21 are fine; upgrade your app before adopting this package.

Peers: `rxjs` **^7.4.0** (aligned with Angular 21). **Node:** this package’s `engines.node` follows [Angular 21 supported versions](https://angular.dev/reference/versions) (`^20.19.0 || ^22.12.0 || >=24.0.0`). The Brightrail **workspace** standardizes on **Node 24 LTS** for builds (see repo root `.nvmrc`).

## Build & publish

```bash
ng build brightrail
cd dist/brightrail && npm publish
```

## Tests

```bash
ng test brightrail
```
