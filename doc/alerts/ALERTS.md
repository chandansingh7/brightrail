# Alerts — design specification (Brightrail)

> Planning context: [COMPONENT-VARIATIONS-PLAN.md](../COMPONENT-VARIATIONS-PLAN.md), [PLAN.md](../PLAN.md).

This folder holds **reference mocks** for the funfair **Alerts** playground and the future **`brightrail-alert`** library component. Use this doc as the single source of truth for API naming and accessibility behavior before implementation.

## Reference visuals

| File | Intent |
|------|--------|
| [ChatGPT Image May 4, 2026, 05_05_29 PM.png](./ChatGPT%20Image%20May%204,%202026,%2005_05_29%20PM.png) | **Interactive playground**: Component settings + live preview + **Generated snippets** (HTML / TS / SCSS), aligned with other funfair playgrounds. |
| [ChatGPT Image May 4, 2026, 05_05_53 PM.png](./ChatGPT%20Image%20May%204,%202026,%2005_05_53%20PM.png) | **Variation catalog**: numbered sections for types, appearances, sizes, patterns, and accessibility notes (marketing-style overview page). |

Implementation can ship **playground-first** (mock 1) and add a **static variation grid** or secondary route later if you still want mock 2’s density on one scroll page.

---

## Role in the library

- **Alerts** communicate **persistent or semi-persistent feedback** (inline validation summary, policy banners, sync errors). They are **not** a full toast queue system by themselves; funfair may **compose** `brightrail-alert` inside toast-like shells as a **recipe**, without baking a global toast service into v1.
- Follow **Option A** from COMPONENT-VARIATIONS-PLAN: **one primary component** (`brightrail-alert`) plus **thin projection slots** (directives / small action strip), shared tokens from `lib/styles`.

---

## Canonical public API (single naming scheme)

The mocks mixed **`status`** vs **`type`** and different attribute casing. Standardize as follows.

### Selector & inputs

| Input | Type | Default | Notes |
|-------|------|---------|--------|
| `appearance` | `'filled' \| 'soft' \| 'outlined' \| 'tonal'` | `'soft'` | Maps to mock “Appearances” row. |
| `status` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Use **`status`** everywhere (not `type`) so it aligns mentally with **text field / tabs status** vocabulary. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | “Compact / Medium / Large” in mocks. |
| `corners` | `'rounded' \| 'square'` | `'rounded'` | Match card / tabs naming if reused. |
| `dismissible` | `boolean` | `false` | Shows dismiss control; emits `dismiss` when activated. |
| `showIcon` | `boolean` | `true` | Mock “With icon”; map template attribute `showIcon` / `[showIcon]="true"`. |
| `icon` | `BrightrailButtonIcon` or dedicated subset | status-derived default | Optional override when `showIcon` is true; default glyph per `status`. |

Optional later: `fullWidth`, `role` override for edge cases (prefer sensible defaults below).

### Outputs

| Output | When |
|--------|------|
| `dismiss` | User dismissed (click / keyboard on dismiss control). |

### Content projection

| Slot | Mechanism | Purpose |
|------|-----------|---------|
| Title | **`brightrailAlertTitle`** directive on an element | Short headline (“Changes saved”). Optional; omit for compact inline lines. |
| Body | Default `<ng-content>` | Primary message (supports inline markup sparingly). |
| Actions | **`brightrail-alert-actions`** (component or directive matching card patterns) | Links / buttons (“Retry”, “Learn more”). |

Example (canonical snippet shape):

```html
<brightrail-alert
  appearance="soft"
  status="success"
  size="md"
  [dismissible]="true"
  [showIcon]="true"
  (dismiss)="onDismiss()"
>
  <div brightrailAlertTitle>Changes saved</div>
  <p>Your settings have been updated successfully.</p>
  <brightrail-alert-actions>
    <brightrail-button variant="ghost">Undo</brightrail-button>
  </brightrail-alert-actions>
</brightrail-alert>
```

Directive selectors should follow existing card conventions — attribute directives such as **`[brightrailAlertTitle]`** (same pattern as **`[brightrailCardHeaderTitle]`**).

---

## Variations catalog → implementation phases

From mock 2, map sections to deliverables:

1. **Core types** — Four `status` values × default icons × token colors.
2. **Appearances** — Four `appearance` styles driven by tokens (no separate components).
3. **States** — `dismissible`, `showIcon`, multiline content (CSS), actions slot.
4. **Sizes** — `size` input + typography/spacing tokens.
5. **Recipes (funfair-only)** — Toast strip, banner, inline validation: composition + CSS wrappers, not new exported selectors unless justified.
6. **Enterprise patterns** — Same as recipes; document copy patterns only.
7. **Groups** — Layout patterns in funfair (stacked alerts = multiple hosts); optional `role="group"` + `aria-labelledby` documented.
8. **Usage tips & accessibility** — Funfair section + library tests (below).

---

## Accessibility (normative)

1. **Role**
   - Default **`role="alert"`** only when the message announces an **urgent interruption** or **error that must be noticed immediately** (see [MDN: ARIA alert role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)).
   - For **success / benign confirmation**, prefer **`role="status"`** with **`aria-live="polite"`** so assistive tech does not steal focus equivalent to an interrupting alert.
   - Expose **`[attr.role]`** override input **only if** documented; default should be smart mapping: e.g. `error` → `alert`, `success|info|warning` → `status` unless `appearance` or `priority` says otherwise.

2. **Live regions**
   - If content updates **after** first paint without moving focus, ensure **`aria-live`** behavior matches role (already implied by `alert` / `status`).

3. **Dismiss**
   - Dismiss control is a **real `button type="button"`** with visible focus and **`aria-label`** (“Dismiss”) if icon-only.

4. **Icons**
   - Status icons **`aria-hidden="true"`** when redundant with text.

5. **Actions**
   - Actions slot uses **native buttons/links** with visible labels (voice control friendly).

6. **Keyboard**
   - Focusable dismiss + actions participate in logical tab order; no keyboard trap inside the alert.

---

## Funfair playground (aligned with PLAN.md)

When **`alert-playground`** is added:

- **Route:** `/alerts` (kebab-case).
- **Shell:** Same three-zone playground as Button / Text field / Select: **Component settings** | **Live preview** | **Generated snippets** with HTML / TS / SCSS tabs + Copy.
- **Scenario group / scenario** dropdowns (e.g. Basics → Inline alert; Patterns → Banner; Patterns → Toast shell).
- Controls mirror library inputs: appearance, status, size, corners, dismissible, showIcon, actions preset (none / links / buttons).
- **Snippets** must stay in sync with signals (same convention as other playgrounds).

Navigation: add **Alerts** under COMPONENTS next to Tabs / Cards.

---

## Testing (library)

- One test file per directive/component: inputs → classes / `aria-*` / default role mapping.
- **`dismiss`** emits once per activation; dismiss button disabled state if ever added.
- Visual regression optional later.

---

## Open decisions

- **Toast / global announcements:** defer service-based toasts; document “recipe only” until patterns stabilize.
- **Icon API:** reuse **`BrightrailButtonIcon`** subset vs **`brightrail-icon`** names — pick one public enum for alerts.
- **Banner full-bleed:** funfair-only wrapper vs `fullWidth` input — decide when implementing card-adjacent layouts.

---

## Summary

**`brightrail-alert`** is a single variant-driven component with **`appearance`**, **`status`**, **`size`**, **`dismissible`**, **`showIcon`**, projection for **title / body / actions**, and accessibility-first **`role`** defaults. Funfair ships an **Alerts** playground matching the unified snippet dock; mock 2’s grid can inform scenarios and future static docs without forcing duplicate APIs.
