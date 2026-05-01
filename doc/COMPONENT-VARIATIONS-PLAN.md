# Plan: Component variations + funfair (one component per page)

> Planning hub: [MASTER-PLAN.md](./MASTER-PLAN.md)

This document builds on the main workspace plan (**Fun Angular Component Library** + **funfair**). Here the focus is: **multiple variations of each component**, and a **showcase app** where **each component gets its own page**, with **clear separation of variations** and **realistic use cases**.

---

## Goals

1. **Library** — Ship components that support **intentional variants** (visual states, sizes, densities, semantic roles) without duplicating unrelated code. Variations should be **documented and testable**.
2. **Funfair** — One **top-level page per library component** (e.g. `/button`, `/card`). On each page, present **variation sections** and **use-case sections** so visitors and you can compare behavior side by side, each paired with **readable code snippets** (how to use the component, and optionally how it is implemented).
3. **Consistency** — Same information architecture for every component page so the showcase stays easy to navigate and maintain.
4. **Accessibility** — Every documented **variation** and **use case** must remain operable with **keyboard** alone and understandable with **assistive tech** (screen readers / speech output) and **voice control**, within the library baseline (see [Accessibility requirements](#accessibility-requirements)).

---

## Accessibility requirements

People with **physical disabilities** and **motor limitations** often rely on **keyboard** or **switch** access instead of a mouse. People who are **blind** or have **low vision** often use **screen readers**—software that **speaks** the interface. People who use **voice control** or **speech input** (Dragon, Voice Access, etc.) need controls to have **recognizable names** that match what they can say aloud. FACL components and funfair examples should support all of these modes where the pattern allows.

### Library (`facl`) rules

1. **Prefer native interactive elements** (`button`, `a` with `href`, `input`, `select`) when behavior matches; add ARIA and keyboard support only when building a true custom widget.
2. **Keyboard** — Every interactive control must be **focusable** (or reachably wired via a documented composite pattern). Implement **APG** guidance for composites: e.g. `aria-activedescendant` / roving tabindex for listbox, menu, grid, toolbar as needed.
3. **Focus visibility** — Do not remove `:focus-visible` outlines without a **visible** replacement; bake focus ring tokens into design packs.
4. **Names and roles** — Expose an **accessible name** (visible label, `aria-label` only when no visible text, or `aria-labelledby`). Use correct **roles** and **states** (`aria-expanded`, `aria-selected`, `aria-disabled`, `aria-busy`, etc.).
5. **Speech output (screen readers)** — Use **live regions** (`aria-live`) for toasts and async status; associate errors with fields (`aria-describedby`, `aria-invalid`).
6. **Voice / speech input** — Prefer **visible text** inside buttons and links; avoid relying on `aria-label` alone when the control shows different visible text than the spoken name users will try to invoke.
7. **Motion** — Respect **`prefers-reduced-motion`** for non-essential animation.

### Funfair rules

- Every component page includes an **Accessibility** block (see page template below): **keyboard**, **screen reader**, and **voice-control** notes where relevant.
- Funfair chrome itself must be usable: **skip to main content**, **landmarks**, **tab order** that does not trap users in snippet widgets, **accessible** “Copy” and tab controls.
- Interactive demos must not be **pointer-only** (no essential hover-only actions).

### References (for implementers)

- [WAI-ARIA Authoring Practices (APG)](https://www.w3.org/WAI/ARIA/apg/) — keyboard models for composite widgets.
- [WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/) — document your conformance target (typically AA).
- Angular docs on [accessibility](https://angular.dev/best-practices/accessibility) — focus management, `LiveAnnouncer`, `AriaDescriber`, etc., as available in your version.

---

## What counts as a “variation” vs a “use case”

| Concept | Meaning | Examples |
|--------|---------|----------|
| **Variation** | Controlled differences built into the component API (inputs, content projection slots, appearance tokens). | `variant="primary \| outline \| ghost"`, `size="sm \| md \| lg"`, `disabled`, `loading`. |
| **Use case** | A **composition** or **context** that shows how the component behaves in a realistic scenario—not a new API surface, but a story. | “Submitting a form”, “Empty state + call to action”, “Toolbar with overflow”, “Error banner next to field”. |

Variations belong in the **library** (inputs, design tokens). Use cases belong mainly in **funfair** (sample markup, fake services, routes)—though you may add small **pattern** or **recipe** snippets in docs if helpful.

---

## Library structure (multiple variations)

Pick **one primary strategy** per component family so the API stays predictable.

### Option A — **Single component + variant inputs** (good for buttons, badges, alerts)

- One selector (e.g. `facl-button`) with `@Input() variant`, `size`, `disabled`, etc.
- Styles use BEM-like classes or host bindings driven by inputs.
- **Pros:** One place to maintain; easy to show all variations on one funfair page.  
- **Cons:** Can grow large; guard against “god components” with too many inputs.

### Option B — **Thin wrappers or specialized components** (good when markup differs a lot)

- e.g. `facl-button`, `facl-icon-button` or `facl-card`, `facl-card-media`.
- Shared logic in a base class or composition (directives, shared styles).
- **Pros:** Clear semantics; tree-shaking friendly if entry points are clean.  
- **Cons:** More files; funfair needs a subsection per exported type if they’re separate.

### Option C — **Design tokens + CSS** (cross-cutting)

- Variations often share structure but differ by **token** (color, radius, spacing).
- Library ships tokens; components consume them; optional **themes** swap token sets.

You can mix **A + C** for most UI kits.

---

## Funfair structure: one component per page

### Routing

- **One route per library component** (or per **family** if you grouped them, e.g. `/inputs/button`).
- Example map:

```text
/                  → home (index of all components + links)
/button            → Button component page
/card              → Card component page
/...               → one segment per exported showcase target
```

Use lazy-loaded feature routes per area if the list grows (`/components/button`, `/components/card`).

### Page layout (repeat for every component)

Each component page should follow the **same scaffold**:

1. **Title + short description** — What the component is for; link to source or package export if public.
2. **Variations** — Subsections or a grid: one block per variant (labeled). Each block should pair **live preview** with a **usage snippet** (template/HTML consumers would write) so the page stays copy-paste friendly.
3. **Use cases** — 2–6 scenarios with realistic copy and layout (form, list, dialog trigger, etc.), each with the same **preview + snippet** pattern when helpful.
4. **Accessibility** — For this component, document **keyboard** (Tab order, arrows, Escape, Enter/Space), **screen reader** (role, name, state changes, live regions if any), and **voice control** (recommended speakable control names / visible labels). Link the relevant **APG** pattern when the widget is composite (listbox, menu, dialog, tabs, etc.).
5. **Implementation reference (optional)** — A dedicated area for **library-side** snippets (component class, notable template, styles) or a prominent link to the file on GitHub—see [Showing implementation snippets](#showing-implementation-snippets) below.
6. **States / edge cases (optional)** — Loading, error, long text, RTL, narrow viewport, **zoom**, **high contrast**—whatever your library promises (again: preview + snippet where useful; verify **keyboard** still works).

This keeps **one component per page** while still showing **many** variation and use-case blocks **on that page**.

### Showing implementation snippets

Visitors (and future you) should see **code next to the demo**, not only the rendered UI.

#### What to show

| Kind | Purpose | Typical content |
|------|---------|-----------------|
| **Usage snippet** | What consumers type in their apps | Angular template using your selector and `@Input()`s, e.g. `<facl-button variant="outline">Cancel</facl-button>`. Add a minimal TS snippet when bindings or `ControlValueAccessor` matter. |
| **Implementation snippet** | How the library implements the component | Excerpt from the component `.ts` (class, key `@Input`s), template fragment, or SCSS—**short** and focused, not the entire file unless tiny. |

Lead with **usage** on every variation and use case; add **implementation** in an expandable section or a lower “Implementation” block so experts can dive in without overwhelming beginners.

#### UI patterns in funfair

- **Preview + code** — Stack vertically or use tabs (“Preview” / “Code”) per example; use **roving `tabindex` or tab panels per WAI-ARIA** so keyboard users can switch panels without getting stuck; ensure **visible focus** on the active tab.
- **Copy button** — Real `<button type="button">` with an **accessible name** (e.g. “Copy example code”); do not rely on icon-only buttons without `aria-label`.
- **Syntax highlighting** — Use a small highlighter (e.g. Prism, Highlight.js) or an Angular-friendly wrapper; theme it to match funfair light/dark if you add themes.
- **Collapsible blocks** — “Show implementation” uses a **button** that toggles `aria-expanded` and keeps **keyboard** access to disclosed content.

#### Where the text lives

Pick one approach and stick to it repo-wide:

- **Strings in the page component** — e.g. `readonly primaryExample = \`<ng-template>...\`;` next to the preview. Simplest; easy to drift from real preview unless you duplicate carefully.
- **Sidecar files** — e.g. `button.examples.ts` exporting `Record<string, string>` or one file per snippet; imported into the showcase component. Easier review in PRs.
- **Raw imports** (if your bundler supports `?raw` or similar) — Pull a `.html` / `.ts` fragment from disk so one file is both **included** in the build and **displayed** as text (advanced; validate with your Angular version).

Whatever you choose, **update the snippet in the same change** as the live preview when the API or example changes.

#### Library implementation and drift

- Showing the **real** `.ts` / template from `projects/facl` is ideal for truthfulness; copying by hand **will** drift unless you enforce it in review or automation.
- Mitigations: link to **GitHub** with line anchors; or maintain one short **“implementation”** excerpt per component page and treat it like documentation; or later add a small codegen/docs pipeline—only if the manual cost hurts.

### Data and fakery

- Use **static** strings and small in-page components for most demos.
- When a use case needs async behavior, use a **fake service** in funfair only (never bake demo-only services into `facl`).

---

## Naming and discovery

- **Route path** — Prefer kebab-case matching the component name (`button` for `FaclButton`).
- **Page module/component** — e.g. `ButtonShowcaseComponent` or `ButtonFunfairPageComponent` in `projects/funfair/src/app/pages/button/`.
- **Sidebar / index** — Generate or maintain a **registry** (array of `{ path, label, icon? }`) so the home page and navigation stay in sync when you add components.

---

## Testing strategy

| Layer | Responsibility |
|--------|----------------|
| **Library** | Unit tests per component for inputs → DOM/classes/**ARIA**; tests for **keyboard** handlers on custom widgets; tests for each **documented variant** including **disabled/loading** semantics. |
| **Funfair** | Manual **keyboard-only** pass per new page; spot-check with a **screen reader**; optional **smoke e2e** (route loads, tab into main preview without errors); optional **axe** or Playwright **accessibility** assertions in CI. |

Avoid relying on funfair for **library** correctness—keep assertions in `facl`.

---

## Documentation alignment

- Each component’s **public API** (inputs, outputs, slots) should match what funfair demonstrates **and** what the **usage snippets** show.
- When you add a new variant in code, add a **variation block** plus **usage snippet** on that component’s funfair page in the same PR; update **implementation** excerpts or links if the internals changed in a way you document.
- When behavior affects **keyboard or AT**, update the page’s **Accessibility** section and add or adjust **tests** in `facl` in the same PR.

---

## Implementation checklist

- [ ] Define variant strategy (A/B/C above) and document it in the library README or contributors guide.
- [ ] Set up funfair routes: home + one route per component.
- [ ] Create a **shared page shell** (title area, section headings, spacing) so all pages look consistent.
- [ ] Add first component to the library with **at least two variants** and **at least two use cases** on its funfair page, each with **usage snippets** (and optional **implementation** section).
- [ ] Add a small **code presentation** building block in funfair (e.g. `facl-showcase-code` or styled `pre` + copy button + highlighter).
- [ ] Add navigation registry (or generate routes from it) so new components are discoverable.
- [ ] Add library tests covering variant inputs and **accessibility-relevant** outputs (roles, `aria-*`, focus behavior where testable); optional funfair smoke e2e and **automated a11y** scan.
- [ ] Add **Accessibility** section template to the shared page shell so every new component page includes keyboard / screen reader / voice notes.

---

## Summary

**Multiple variations** live in the **library** (inputs, tokens, maybe sibling components). **Different use cases** are composed in **funfair** on a **dedicated page per component**, using a **fixed page template**: variations and scenarios each pair **live preview** with **usage snippets**; each page documents **keyboard, screen-reader, and voice-access** behavior; optionally add **implementation** snippets or source links. That gives you a scalable, browsable, inclusive showcase without mixing unrelated components on the same route.

For workspace-level setup (library project `facl`, app project `funfair`, builds, hosting), see [PLAN.md](./PLAN.md).
