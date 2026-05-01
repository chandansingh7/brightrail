# Research report review and alignment plan

> Planning hub: [MASTER-PLAN.md](./MASTER-PLAN.md)

This document **grades** [deep-research-report.md](./deep-research-report.md) and **maps** its recommendations to **Fun Angular Component Library** (`facl`) and **funfair** (see [PLAN.md](./PLAN.md) and [COMPONENT-VARIATIONS-PLAN.md](./COMPONENT-VARIATIONS-PLAN.md)).

---

## Grade summary

| Dimension | Score | Notes |
|-----------|-------|--------|
| **Architecture & clarity** | **A** | Coherent stack: owned API, design packs, tokens, Aria/CDK, APF, CI gates. Matches how serious enterprises reduce drift across brands. |
| **Scope & inventory** | **A-** | Canonical component matrix and variation axes are practical; rightly flags tables, overlays, and migration as high risk. |
| **Actionability** | **B+** | Strong patterns (manifest snippet, token bridge, `button[uiButton]`). Folder layout and CI list are usable; effort is another full program of work. |
| **Evidence & citations** | **D** | Placeholders like `cite turn33view1` are not verifiable references. Treat claims (versions, release dates, package sizes) as **hypotheses** until you confirm on official docs/npm. |
| **Fit for your current project** | **B** | The report targets **enterprise platform** scale. Your repo plan is **library + funfair** first—same ideas apply **in phases** without adopting every gate on day one. |

**Overall:** **B+ / A- as ideation**, **not** audit-ready documentation until citations are replaced with real links and your team validates version/support claims for YOUR timeline.

---

## What to keep from the report

1. **Design completeness rule** — A visual “pack” or theme is valid only if it covers the agreed component set and variants (matches your “variations per page” idea at platform scale).
2. **Separate semantics from chrome** — Stable component names and variant enums; tokens (CSS custom properties) for look; behavior via native elements + CDK + (where you adopt it) Angular Aria.
3. **APF-style packaging** — Secondary entry points (e.g. `@scope/facl/button`) when the library grows; `testing` entry for harnesses later.
4. **Conformance over time** — Even a small team can start with a **JSON manifest** per theme/pack and a single CI test that fails if a required export is missing.
5. **Adapters for hard domains** — Charts and rich text as wrappers, not from-scratch engines.
6. **Layered quality** — Unit/component tests → a11y checks → visual regression when you have budget for baselines.

---

## What to adapt or defer

| Report suggestion | For facl / funfair now |
|-------------------|-------------------------|
| Full monorepo (`apps/docs-site`, `storybook-host`, many packages) | Start with **`projects/facl` + `projects/funfair`**; add Storybook or a docs app only when pain justifies it. |
| Storybook as *primary* catalog | Your plan uses **funfair** (one component per page + snippets). You can add Storybook later for Chromatic/isolated stories, or keep funfair as the public face. |
| Angular 20/21 baseline | Pick **one** supported Angular version you actually use; confirm LTS/active dates on [angular.dev](https://angular.dev) at implementation time—do not rely on the report’s April 2026 snapshot alone. |
| Vitest default | Align with **your** `ng new` / workspace test runner; upgrade when the CLI you use recommends it. |
| Full governance council + RFC | Optional until multiple teams depend on the library; a short **CONTRIBUTING.md** + design checklist can suffice early. |
| Entire enterprise inventory on day one | Use the report’s table as a **roadmap**, not the first milestone. |

---

## Phased plan (grades of maturity)

Use this to grow from “fun library + showcase” toward “enterprise-grade” without boiling the ocean.

### Phase 0 — Align foundations (1–2 weeks of decisions)

- [ ] Replace citation placeholders in the research doc with **real URLs** or move uncited bullets to an “unsupported opinion” section.
- [ ] Choose **Angular major** and document support window.
- [ ] Decide: **funfair-only** docs vs **Storybook** vs both (and when).
- [ ] Rename alignment: report uses `Ui*` / `uiButton`; your plan uses `facl-*`. Pick **one** public naming convention and document it.

### Phase 1 — “Publication-grade” facl (matches your existing MD plans)

- [ ] Workspace: `facl` library + `funfair` app; routes **one component per page**; **variants + use cases + usage snippets** (see [COMPONENT-VARIATIONS-PLAN.md](./COMPONENT-VARIATIONS-PLAN.md)).
- [ ] **Accessibility:** WCAG **AA** target documented; **keyboard** and **focus-visible** tokens; **APG-aligned** composites; funfair **Accessibility** block per page; manual screen-reader spot checks for new widgets; **voice-friendly** naming (visible labels aligned with accessible names).
- [ ] Tokens: introduce **semantic CSS custom properties** for at least one pack (even if only “default”).
- [ ] API rules from report: **semantic names**, **variant unions** (not free-form classes), **OnPush**, prefer **native control + directive** where it fits.
- [ ] Tests: unit tests for components you ship; optional funfair smoke route.

### Phase 2 — Multi-pack / conformance (research “design pack” core)

- [ ] Define `UiDesignPackManifest` (or `FaclDesignPackManifest`) for each approved pack; extend as inventory grows.
- [ ] CI: script or test that **fails if manifest claims a variant the code does not implement** (or inverse: generated manifest from source—pick one direction).
- [ ] funfair: **pack switcher** (e.g. `data-ui-pack`) so the same pages render under each approved pack.

### Phase 3 — Platform operations (enterprise grade)

- [ ] Secondary entry points and `testing` package path per APF.
- [ ] Harnesses for major widgets; Playwright a11y/keyboard smoke; visual baselines (Playwright screenshots or Chromatic).
- [ ] Schematics: `ng add`, `ng update` migrations when breaking changes appear.
- [ ] Governance: owners per component, deprecation policy, RFC for breaking API.

---

## Traceability matrix (report → your artifacts)

| Research section | Your repo |
|------------------|-----------|
| Multi-project workspace | [PLAN.md](./PLAN.md) — `facl` + `funfair` |
| Variation axes + one component per page | [COMPONENT-VARIATIONS-PLAN.md](./COMPONENT-VARIATIONS-PLAN.md) (includes **Accessibility** section per page) |
| WCAG / keyboard / AT / voice | [PLAN.md](./PLAN.md) baseline + [COMPONENT-VARIATIONS-PLAN.md](./COMPONENT-VARIATIONS-PLAN.md) § Accessibility |
| Design-pack manifest + CI | Add under `tools/` or `projects/facl` when you reach Phase 2 |
| Token bridge (CSS variables) | Document in library `tokens/` or global styles; funfair imports packs |
| Storybook as catalog | Optional; funfair fills similar need for public demo |
| Roadmap / Gantt | Use as **relative** sequencing only; re-estimate for your team size |

---

## Summary

The deep research report is **strong systems thinking** and a credible **north star** for an enterprise Angular design system. Its **weak spot** is **non-human citations**—grade it as **internal strategy**, not referenced audit material, until fixed. For **Fun Angular Component Library**, **adopt the architecture in phases**: ship **facl + funfair + tokens + tests** first, then **manifests and CI conformance**, then **harnesses, visual/a11y gates, and schematics** as adoption grows.
