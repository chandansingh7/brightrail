# BrightRail limitations (quick reference)

Honest constraints to plan around when building apps on BrightRail.

---

## Table

- **Client-side by default** — filter, sort, and paginate run in the browser on whatever you pass in `[data]`. For large datasets, use `[serverMode]="true"` and handle `(sortChange)` / `(pageChange)` / `[(filterState)]` yourself.
- **Row actions aren’t a simple “Actions column”** — cancel/revoke uses `rowSelection="single"` + `<brightrail-table-single-actions>`, or `columnRole: 'actions'` + `cellTemplateKey` for custom per-row buttons. There is no one-click preset actions column.
- **Selection binding** — use `[(selectedIds)]` (two-way) or manual `[selectedIds]` + `(selectionChange)`. Both work.
- **Typed rows are loose** — `BrightrailTableRow = Record<string, unknown>`. Type safety is on you when mapping API → rows.
- **Badge tone** — auto-inferred from cell text (`CONFIRMED` → green-ish). Static `badgeTone` on the column applies to every row in that column.
- **No server fetch built in** — the table displays and manipulates `[data]`; loading from your API is always your code (computed + signal, etc.).

Full table recipes: [CONSUMER-PATTERNS.md](./CONSUMER-PATTERNS.md)

---

## All components (summary)

| Area | Main limitation |
|------|-----------------|
| **npm layout** | Runtime is one bundle (`fesm2022/brightrail.mjs`); source folders live under `lib/` for reference only |
| **Imports** | Always `from 'brightrail'` — not `from 'brightrail/lib/table/...'` |
| **Select** | Projected options (`br-select-option`); use combobox for `[options]` arrays |
| **Date picker** | `[enabledDates]` for booking allowlists; not a full scheduler |
| **Forms** | You wire validation; `validation-summary` lists errors you pass |
| **Toast** | Service-driven; needs platform provider + container |
| **Graph / tree** | Presentational; you own data fetching and updates |
| **Modal / drawer** | You control open state; slot-based content |
| **Alerts** | Plain text between tags works (fallback projection); `[brightrailAlertMessage]` still recommended for a11y structure |
| **Cards (glass / fx)** | Nested header + content no longer stack separate fx surfaces; use `appearance="stats"` for KPI tiles |
| **Glass theme** | Test disabled primary contrast on frosted backgrounds |
| **Server data** | No HTTP client in the library — your services + signals |

Full per-folder detail: [COMPONENTS.md](./COMPONENTS.md)

---

## Alerts (historical gap — fixed)

**Before:** Only `[brightrailAlertMessage]` / `[brightrailAlertTitle]` projected — plain text rendered an empty shell (icon + border, no copy).

**Now:** Unmarked content falls back into the message body. Explicit directives are still preferred for title vs body separation.

```html
<brightrail-alert status="info">Setup complete — you can invite guests.</brightrail-alert>
```

For setup guides and checklists, a plain `<ul>` inside `brightrail-card-content` is often clearer than an info alert.

---

## Cards — KPI / dashboard tiles

Avoid header + content slots when you only need a label and value. Use **`appearance="stats"`** and helper classes:

```html
<brightrail-card appearance="stats">
  <brightrail-card-content>
    <p class="br-card-stat-label">Active bookings</p>
    <p class="br-card-stat-value">128</p>
    <span class="br-card-stat-trend">↑ 12% vs last week</span>
  </brightrail-card-content>
</brightrail-card>
```

Or project content only (no `brightrail-card-header`) for simple org/profile blocks.

---

## Cards — glass / futuristic theme

With `provideBrightrailFuturistic({ appearance: 'glass' })`, each card region used to pick up its own frosted surface (double white panels on KPI cards). **Nested slot flattening** now keeps one surface on the card host; header/content/footer/actions are transparent inside `.br-card__main`.

