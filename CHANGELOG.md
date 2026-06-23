# Changelog

All notable changes to the **`brightrail`** npm package are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [0.1.2] — 2026-06-23

> Published to npm as **`brightrail@0.1.2`** (tag `v0.1.2`).

### Added

- **Table:** `[serverMode]="true"` with `[totalRowCount]` — skip client filter/sort/paginate; handle `(sortChange)` / `(pageChange)` / `[(filterState)]` in your app.
- **Table:** `[(selectedIds)]` two-way binding via `model()` (manual `[selectedIds]` + `(selectionChange)` still works).
- **Table:** Column-level `searchable` / `filterOptions` without requiring table-level filter flags.
- **Table:** `columnRole: 'actions'` + `cellTemplateKey` for per-row action cells.
- **Date picker:** `[enabledDates]` ISO allowlist for booking-style inline calendars.
- **Page header:** `[title]` / `[subtitle]` inputs (alternative to projection).
- **Alert:** Default content projection — plain text between tags renders in the message body.
- **npm package:** `lib/` source folder tree (browse component folders under `node_modules/brightrail/lib/`; import only from `'brightrail'`).
- **Docs:** `doc/COMPONENTS.md`, `doc/LIMITATIONS.md`, `doc/CONSUMER-PATTERNS.md`.

### Fixed

- **Cards (glass / fx):** Nested `brightrail-card-header` + `brightrail-card-content` no longer stack separate frosted surfaces (double white panels on KPI cards).
- **Glass theme:** Disabled primary buttons use muted tint on glass surfaces (not flat white).

### Changed

- **Build:** `npm run build:lib` copies `projects/brightrail/src/lib/` → `dist/brightrail/lib/` for npm browsing.

---

## [0.1.1] — 2026-05-21

### Fixed

- npm package README links and consumer-facing install docs.

---

## [0.1.0] — 2026-05-21

### Added

- Initial public npm publish: Angular 21 component library, `ng add brightrail` schematic, global styles, platform/i18n providers.
- Secondary entries: `brightrail/testing`, `brightrail/governance`, style bundles.
