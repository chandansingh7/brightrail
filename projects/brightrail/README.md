# Brightrail

Fun Angular component library for **Angular 21.x** apps.

**npm:** [npmjs.com/package/brightrail](https://www.npmjs.com/package/brightrail) (published: **v0.1.1**)  
**Next release:** [CHANGELOG.md — v0.1.2](https://github.com/chandansingh7/brightrail/blob/main/CHANGELOG.md#012--unreleased-on-npm) (alert fallback, glass card fix, table server mode, `lib/` folder, docs)
**Repository:** [github.com/chandansingh7/brightrail](https://github.com/chandansingh7/brightrail)  
**Live playground:** [chandansingh7.github.io/brightrail](https://chandansingh7.github.io/brightrail/)

---

## Install

Requires an **Angular 21** app (`@angular/core` `>=21.0.0 <22.0.0`).

```bash
npm install brightrail @angular/cdk @angular/aria
ng add brightrail
```

Import components from the package entry (not from subpaths):

```ts
import { BrightrailButtonComponent, BrightrailTableComponent } from 'brightrail';
```

---

## Component folder structure

Source lives under **`projects/brightrail/src/lib/`** (accordion, buttons, fields, table, …).

The npm package includes the same tree at **`node_modules/brightrail/lib/`** for browsing. Runtime code is compiled in `fesm2022/brightrail.mjs`.

Full map: [COMPONENTS.md on GitHub](https://github.com/chandansingh7/brightrail/blob/main/doc/COMPONENTS.md)

```
lib/
├── buttons/       button, icon-button, split-button, …
├── fields/        select, combobox, date-picker, text-field, …
├── table/         data table, toolbar, bulk/single actions
├── app-shell/     sidebar, top-bar, page-header
├── modal/ drawer/ card/ toast/ menu/ …
└── styles/        design tokens (also brightrail/styles/*.scss)
```

---

## Known limitations

### Table

- **Client-side by default** — filter, sort, paginate on `[data]` in the browser. Use `[serverMode]="true"` + `(sortChange)` / `(pageChange)` / `[(filterState)]` for remote data.
- **Row actions** — use `columnRole: 'actions'` + `cellTemplateKey`, or `rowSelection="single"` + `<brightrail-table-single-actions>`; no preset actions column.
- **Selection** — `[(selectedIds)]` or `[selectedIds]` + `(selectionChange)`.
- **Rows** — `BrightrailTableRow = Record<string, unknown>`; you type API mappings.
- **Badge tone** — column-level static tone or auto-inference from cell text.
- **No HTTP** — you fetch and pass `[data]`.

### Other components

| Area | Note |
|------|------|
| Select | Projected `br-select-option` buttons; combobox has `[options]` |
| Date picker | `[enabledDates]` for booking slots; not a full scheduler |
| Toast | Service + container; needs `provideBrightrailPlatform()` |
| Graph / tree | You supply data; no built-in fetch |

Full list: [LIMITATIONS.md](https://github.com/chandansingh7/brightrail/blob/main/doc/LIMITATIONS.md) · Patterns: [CONSUMER-PATTERNS.md](https://github.com/chandansingh7/brightrail/blob/main/doc/CONSUMER-PATTERNS.md)

---

## Manual setup

**Styles** — `src/styles.scss`:

```scss
@use 'brightrail/styles/brightrail-root.scss';
```

**Providers** — `src/app/app.config.ts`:

```ts
import { provideBrightrailI18n, provideBrightrailPlatform } from 'brightrail';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrightrailPlatform(),
    provideBrightrailI18n({ locale: 'en', direction: 'ltr' }),
  ],
};
```

---

## Secondary entry points

| Import | Purpose |
|--------|---------|
| `brightrail` | Components, platform, i18n |
| `brightrail/testing` | Test harnesses |
| `brightrail/governance` | Adoption checklist |
| `brightrail/styles/brightrail-root.scss` | Global tokens |

---

## Docs on GitHub

- [CHANGELOG.md](https://github.com/chandansingh7/brightrail/blob/main/CHANGELOG.md) — release notes  
- [CONSUMING.md](https://github.com/chandansingh7/brightrail/blob/main/doc/CONSUMING.md) — install & setup  
- [COMPONENTS.md](https://github.com/chandansingh7/brightrail/blob/main/doc/COMPONENTS.md) — folder map  
- [LIMITATIONS.md](https://github.com/chandansingh7/brightrail/blob/main/doc/LIMITATIONS.md) — constraints  
- [PUBLISHING.md](https://github.com/chandansingh7/brightrail/blob/main/doc/PUBLISHING.md) — npm releases  
