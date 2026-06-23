# BrightRail component map

How components are organized in source, what you import from npm, and known limitations.

---

## How imports work

**Consumers always import from the package entry:**

```ts
import { BrightrailTableComponent, BrightrailSelectComponent } from 'brightrail';
```

The npm tarball ships:

| Path in npm | Purpose |
|-------------|---------|
| `fesm2022/brightrail.mjs` | Compiled runtime (all components bundled) |
| `types/brightrail.d.ts` | TypeScript definitions |
| `styles/` | Global SCSS |
| **`lib/`** | **Source folder tree** (reference only — browse structure, do not import) |

Browse source on GitHub: [`projects/brightrail/src/lib/`](https://github.com/chandansingh7/brightrail/tree/main/projects/brightrail/src/lib)

After `npm install brightrail`, open `node_modules/brightrail/lib/` for the same folder layout.

---

## Source folder structure

```
projects/brightrail/src/lib/
├── accordion/          brightrail-accordion, brightrail-accordion-item
├── alert/              brightrail-alert (+ actions, directives)
├── app-shell/          brightrail-app-shell, sidebar, top-bar, page-header
├── avatar/             brightrail-avatar, avatar-group
├── badge/              brightrail-badge
├── breadcrumb/         brightrail-breadcrumb
├── buttons/            button, icon-button, split-button, button-group, button-icon
├── card/               card shell, header, content, footer, media, actions
├── chip/               brightrail-chip
├── command-palette/    brightrail-command-palette
├── cyber-badge/        brightrail-cyber-badge (futuristic)
├── drawer/             brightrail-drawer (+ header/body/footer slots)
├── empty-state/        brightrail-empty-state
├── fields/
│   ├── text-field/     brightrail-text-field
│   ├── textarea/       brightrail-textarea
│   ├── select/         brightrail-select
│   ├── combobox/       brightrail-combobox
│   ├── date-picker/    brightrail-date-picker
│   ├── checkbox/       checkbox, checkbox-group
│   ├── radio/          radio, radio-group
│   ├── switch/         brightrail-switch
│   ├── slider/         brightrail-slider
│   ├── file-upload/    brightrail-file-upload
│   └── form-field/     brightrail-form-field (wrapper)
├── futuristic/         fx shell, appearance providers (cyber/neon/holo/glass)
├── graph/              SVG charts (line, bar, donut, gauge, …)
├── holographic-panel/  brightrail-holographic-panel
├── icons/              brightrail-icon
├── menu/               menu, menu-item, menu-trigger
├── modal/              modal shell + header/body/footer slots
├── neural-graph/       brightrail-neural-graph (futuristic)
├── pagination/         brightrail-pagination
├── platform/           a11y providers, focus trap, listbox keyboard utils
├── popover/            popover + trigger
├── progress/           linear/circular progress, stepper, file row
├── quantum-stepper/    brightrail-quantum-stepper (futuristic)
├── rating/             brightrail-rating
├── rich-text-editor/   brightrail-rich-text-editor
├── skeleton/           brightrail-skeleton
├── styles/             design tokens, breakpoints, global SCSS partials
├── table/              table, toolbar, bulk/single actions
├── tabs/               tabs, tab, tab-content
├── timeline/           timeline + items
├── toast/              toast, container, service
├── tooltip/            tooltip directive
├── tree/               brightrail-tree
├── tree-table/         brightrail-tree-table
├── validation-summary/ brightrail-validation-summary
├── i18n/               locale/direction providers
└── shell/              welcome / misc shell widgets
```

Secondary npm entry points: `brightrail/testing`, `brightrail/governance`.

---

## Limitations by area

### Table (`lib/table/`)

See also [CONSUMER-PATTERNS.md](./CONSUMER-PATTERNS.md).

- **Client-side by default** — filter, sort, and paginate run in the browser on whatever you pass in `[data]`. For large datasets, use `[serverMode]="true"` and handle `(sortChange)` / `(pageChange)` / `[(filterState)]` yourself.
- **Row actions** — not a built-in “Actions column” with preset buttons. Use `columnRole: 'actions'` + `cellTemplateKey` / `cellTemplates` for per-row cancel/revoke, **or** `rowSelection="single"` + `<brightrail-table-single-actions>` for a selection bar pattern.
- **Selection binding** — use `[(selectedIds)]` (two-way) **or** manual `[selectedIds]` + `(selectionChange)`. Both work.
- **Typed rows are loose** — `BrightrailTableRow = Record<string, unknown>`. Type safety is on you when mapping API → rows.
- **Badge tone** — auto-inferred from cell text (`CONFIRMED` → green-ish). Static `badgeTone` on the column applies to **every** row in that column.
- **No server fetch built in** — the table displays and manipulates `[data]`; loading from your API is always your code (computed + signal, etc.).
- **Column filters** — set `searchable` or `filterOptions` on the column; table-level `[columnSearch]` / `[columnFilters]` are optional bulk switches.

### Fields — select / combobox (`lib/fields/select`, `lib/fields/combobox`)

- **Content projection** — options are projected (`br-select-panel` / `br-select-option` buttons), not a simple `options="[]"` input (combobox supports `[options]`).
- **No native `<select>` replacement one-liner** — you wire `displayText`, `ngModel`, and option clicks (or use combobox for searchable lists).
- **Panels portal to `document.body`** — global styles from `brightrail-root.scss` required for portaled panels.

### Fields — date picker (`lib/fields/date-picker`)

- **Booking slots** — use `[enabledDates]="['YYYY-MM-DD', …]"` with `type="inline"` for allowlists; not a full booking scheduler UI.
- **Range / month modes** — separate from single-day inline; range uses draft + Apply unless `rangeCommitMode="instant"`.
- **`dateFilter` callback** — advanced disable logic; prefer `enabledDates`, `minDate`, `maxDate`, `disableWeekends` when possible.

### Fields — text-field, textarea, checkbox, radio, switch, slider, file-upload

- **Standalone or wrapped** — work with `brightrail-form-field` for labels/hints; you compose validation messages.
- **File upload** — client-side file picking UI; no direct S3/upload URL integration.
- **Slider / switch** — controlled via `ngModel` or signals; no built-in form group schema.

### Buttons (`lib/buttons/`)

- **Glass / futuristic themes** — disabled primary on glass surfaces uses muted tint; test contrast on your background.
- **Loading state** — `[loading]` disables interaction; does not auto-bind to HTTP observables.

### Card, modal, drawer (`lib/card/`, `lib/modal/`, `lib/drawer/`)

- **Slot / projection based** — header, body, footer via directives or child components; no single `title` prop on modal/drawer (page-header has `[title]` / `[subtitle]`).
- **KPI / dashboard tiles** — use `appearance="stats"` + `.br-card-stat-label` / `.br-card-stat-value` / `.br-card-stat-trend`; avoid header + content for a single metric.
- **Glass / fx theme** — nested `brightrail-card-header` + `brightrail-card-content` no longer stack separate frosted surfaces (one shell on the card host).
- **Drawer/modal open state** — you control `[isOpen]` / `(closed)`; no router integration built in.

### Alert (`lib/alert/`)

- **Plain text** — unmarked content projects into the message body (fallback `ng-content`); explicit `[brightrailAlertMessage]` / `[brightrailAlertTitle]` still recommended for structured title + body.
- **Setup guides** — for checklists, prefer a list inside `brightrail-card-content` over an info alert when no banner semantics are needed.

### App shell (`lib/app-shell/`)

- **Layout composition** — sidebar, top-bar, page-header are separate; breadcrumbs projected into page-header are not wired automatically.
- **Page header** — `[title]` / `[subtitle]` inputs **or** `[brightrailPageTitle]` projection.

### Graph, tree, tree-table (`lib/graph/`, `lib/tree/`, `lib/tree-table/`)

- **Graph** — SVG presentation layer; you supply series data and labels.
- **Tree / tree-table** — client-side expand/collapse and selection; no lazy-load fetch hooks.

### Toast (`lib/toast/`)

- **Imperative API** — `BrightrailToastService.show()`; not declarative-only.
- **Requires** `provideBrightrailPlatform()` and toast container in app template.

### Menu, popover, tooltip

- **Trigger directives** — attach to host elements; positioning uses CDK/portal patterns.
- **Tooltip content** — projected or bound text; not for complex interactive panels (use popover).

### Pagination (`lib/pagination/`)

- **Controlled** — you pass `[pageIndex]`, `[totalItems]`, `(pageChange)`; standalone from table when used alone.

### Progress, stepper (`lib/progress/`)

- **Display components** — step state driven by your app; no async workflow engine.

### Futuristic / cyber (`lib/futuristic/`, holographic-panel, neural-graph, cyber-badge, quantum-stepper)

- **Visual layer** — `provideBrightrailFuturistic()` or `fxShell` host directive; opt-in per app or host.
- **Not required** for enterprise/default styling.

### Platform & i18n (`lib/platform/`, `lib/i18n/`)

- **One-time bootstrap** — `provideBrightrailPlatform()`, `provideBrightrailI18n()` in `app.config.ts`.
- **RTL** — global class `brightrail-root--rtl` via i18n provider; component-level RTL is token-driven.

### Styles (`lib/styles/`)

- **Import once globally** — `brightrail/styles/brightrail-root.scss`; override `--br-*` tokens on `:root`.
- **Component SCSS is encapsulated** — portaled panels (select, tooltip) need global partials in root bundle.

---

## Related docs

- [CONSUMING.md](./CONSUMING.md) — install & setup
- [CONSUMER-PATTERNS.md](./CONSUMER-PATTERNS.md) — table, select, booking recipes
- [LIMITATIONS.md](./LIMITATIONS.md) — quick limitation index (table-focused summary)
