# BrightRail consumer patterns

Notes for apps integrating BrightRail (addressing common integration gaps).

## Select (`brightrail-select`)

BrightRail **does** ship a select component. Use it instead of native `<select>`:

```html
<brightrail-select
  label="Status"
  labelPosition="top"
  ariaLabel="Status"
  [displayText]="statusLabel()"
  [(ngModel)]="status"
>
  <div class="br-select-panel">
    <button type="button" class="br-select-option" (click)="status = 'active'">Active</button>
    <button type="button" class="br-select-option" (click)="status = 'paused'">Paused</button>
  </div>
</brightrail-select>
```

Import: `BrightrailSelectComponent` from `brightrail`.

---

## Booking calendar — enabled dates only

Use inline date picker with an ISO date allowlist:

```html
<brightrail-date-picker
  type="inline"
  [enabledDates]="availableSlotDates"
  [(ngModel)]="selectedDate"
/>
```

```ts
availableSlotDates = ['2026-06-10', '2026-06-12', '2026-06-15'];
```

Only dates in the array are selectable (plus `minDate` / `maxDate` / `disableWeekends` still apply).

---

## Table — inline row actions (no selection bar)

Use `columnRole: 'actions'` with a cell template — **no** `rowSelection` required:

```html
<ng-template #rowActions let-row>
  <button brightrail-button variant="ghost" size="sm" (click)="cancel(row)">Cancel</button>
</ng-template>

<brightrail-table
  [data]="rows"
  [columns]="columns"
  [cellTemplates]="{ actions: rowActions }"
/>
```

```ts
columns = [
  { id: 'guest', header: 'Guest', field: 'guest' },
  { id: 'actions', header: '', columnRole: 'actions', cellTemplateKey: 'actions' },
];
```

---

## Table — two-way selection

```html
<brightrail-table
  [rowSelection]="'multiple'"
  [(selectedIds)]="selectedRowIds"
  ...
/>
```

`(selectionChange)` still emits for backward compatibility.

---

## Table — server-driven data

Skip client filter/sort/paginate; handle events and refetch:

```html
<brightrail-table
  [serverMode]="true"
  [totalRowCount]="totalFromApi"
  [data]="pageRows"
  [pagination]="{ pageSize: 20, pageIndex: currentPage }"
  (pageChange)="onPage($event)"
  (sortChange)="onSort($event)"
  [(filterState)]="filters"
/>
```

Parent supplies already-filtered/sorted/paged rows via `[data]`.

---

## Table — column filters

Set **`searchable: true`** or **`filterOptions`** on the column — table-level `[columnSearch]` / `[columnFilters]` are optional (enable all columns at once).

```ts
{ id: 'status', header: 'Status', field: 'status', filterOptions: [
  { value: '', label: 'All statuses' },
  { value: 'active', label: 'Active' },
]}
```

---

## Table — known limitations

- **Client-side by default** — filter, sort, and paginate run in the browser on whatever you pass in `[data]`. For large datasets, use `[serverMode]="true"` and handle `(sortChange)` / `(pageChange)` / `[(filterState)]` yourself.
- **Row actions aren’t a simple “Actions column”** — cancel/revoke uses `rowSelection="single"` + `<brightrail-table-single-actions>`, or `columnRole: 'actions'` + `cellTemplateKey` for custom cells. No one-click per-row button column out of the box.
- **Selection binding** — use `[(selectedIds)]` (two-way) or manual `[selectedIds]` + `(selectionChange)`. Both work.
- **Typed rows are loose** — `BrightrailTableRow = Record<string, unknown>`. Type safety is on you when mapping API → rows.
- **Badge tone** — auto-inferred from cell text (`CONFIRMED` → green-ish). Static `badgeTone` on the column applies to every row in that column.
- **No server fetch built in** — the table displays and manipulates `[data]`; loading from your API is always your code (computed + signal).

Full component map & all limitations: [COMPONENTS.md](./COMPONENTS.md) · [LIMITATIONS.md](./LIMITATIONS.md)

---

## Alerts — plain text & setup guides

Plain text between tags now projects into the message body (Material-style fallback). You no longer need `[brightrailAlertMessage]` for a one-line info banner:

```html
<brightrail-alert appearance="soft" status="info">
  Verify email before confirming the slot.
</brightrail-alert>
```

For multi-step setup, a checklist inside the card is often clearer than an empty-looking alert:

```html
<brightrail-card>
  <brightrail-card-header>
    <h3 brightrailCardHeaderTitle>Guest booking checklist</h3>
  </brightrail-card-header>
  <brightrail-card-content>
    <ul>
      <li>Verify guest email</li>
      <li>Confirm payment method</li>
    </ul>
  </brightrail-card-content>
</brightrail-card>
```

Explicit slots remain best for title + body + actions:

```html
<brightrail-alert appearance="tonal" status="info">
  <div brightrailAlertTitle>Guest booking</div>
  <div brightrailAlertMessage>Complete the steps below before confirming.</div>
</brightrail-alert>
```

---

## Cards — KPI / stats tiles

Use `appearance="stats"` with `br-card-stat-*` helpers instead of stacking header + content for simple metrics:

```html
<brightrail-card appearance="stats" size="sm">
  <brightrail-card-content>
    <p class="br-card-stat-label">Organization</p>
    <p class="br-card-stat-value">Demo Organization</p>
  </brightrail-card-content>
</brightrail-card>
```

For org blocks with a subtitle, content-only projection avoids an extra header row:

```html
<brightrail-card appearance="basic">
  <brightrail-card-content>
    <p class="br-card-stat-label">Organization</p>
    <p><strong>Demo Organization</strong></p>
    <p>Slug: demo</p>
  </brightrail-card-content>
</brightrail-card>
```

---

## Glass theme — disabled primary buttons

Disabled primary buttons on glass surfaces use muted tint (not flat white). Apply site-wide glass via `provideBrightrailFuturistic({ appearance: 'glass' })` or `fxShell="glass"` on the card footer host.
