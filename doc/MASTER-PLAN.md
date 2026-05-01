# Master plan — Fun Angular Component Library (Brightrail)

**Start here.** This folder (`doc/`) holds all planning for **Fun Angular Component Library**: a publishable Angular library (`brightrail`), a static showcase app (**funfair**), and **Midway** (`projects/midway`) — used with **`verify:package`** to prove **npm-shaped** installs in one command.

---

## How to use these docs

1. **Day-to-day implementation** — Follow [PLAN.md](./PLAN.md) for workspace layout, scripts, publishing, and accessibility baseline; follow [COMPONENT-VARIATIONS-PLAN.md](./COMPONENT-VARIATIONS-PLAN.md) for funfair page structure, variants vs use cases, snippets, and a11y per page.
2. **Strategic / enterprise alignment** — Use [ENTERPRISE-RESEARCH-ALIGNMENT.md](./ENTERPRISE-RESEARCH-ALIGNMENT.md) to phase in design packs, conformance, CI, and platform maturity without doing everything at once.
3. **Deep background** — [deep-research-report.md](./deep-research-report.md) is the long-form enterprise Angular design-system survey (treat uncited placeholders as non-authoritative until replaced with real references; see alignment doc).

When you add new planning topics, either extend the closest doc or add a new file under `doc/` and link it in the [Document index](#document-index) below.

---

## Product decisions (fixed for this repo)

| Topic | Decision |
|--------|----------|
| Angular baseline | **21.x** ([support policy](https://angular.dev/reference/releases)) — workspace upgraded from 20 to 21 with `ng update` |
| Product name | **Fun Angular Component Library** |
| npm package name | **`brightrail`** (unscoped) |
| Library project | **`brightrail`** |
| Published import path | **`brightrail`** (`file:dist/brightrail` in this repo for Midway) |
| Showcase app | **`funfair`** (not named “demo”) |
| Consumer smoke app | **Midway** (`projects/midway`) + **`verify:package`** (see [PLAN.md](./PLAN.md)) |
| Public API entry | **`public-api.ts`** (library barrel; rename only if you change `ng-package.json` entryFile) |
| Accessibility target | **WCAG 2.x AA**; keyboard, screen reader, voice control; details in PLAN + variations plan |

---

## Execution roadmap (concise)

### Now — scaffold and first vertical slice

- [ ] Angular workspace: `projects/brightrail` + `projects/funfair` + **`projects/midway`**.
- [ ] Root script **`verify:package`**: `ng build brightrail && npm install && ng build midway`; path aliases for the library **only** on funfair; **`file:dist/brightrail`** for the smoke app (see [PLAN.md](./PLAN.md)).
- [ ] First component in `brightrail`; funfair route (variations, use cases, snippets, a11y per [COMPONENT-VARIATIONS-PLAN.md](./COMPONENT-VARIATIONS-PLAN.md)) + **Midway** root using the same export.
- [ ] npm scripts: `serve:funfair`, `build:lib`, `build:funfair`, **`verify:package`**, optional `build:all`.
- [ ] Document run/build in root **README** when the repo has code.

### Next — quality and tokens

- [ ] Semantic **CSS custom properties** / tokens; **focus-visible** in design tokens.
- [ ] Library tests (including ARIA/keyboard where relevant); optional automated a11y on key funfair routes.
- [ ] Optional `ACCESSIBILITY.md` or section in README for WCAG scope and manual test checklist.

### Later — enterprise-style scale (optional)

- [ ] Design-pack **manifests** + CI conformance; funfair **pack switcher**.
- [ ] Secondary APF entry points; test harnesses; Playwright/Chromatic-style visual baselines.
- [ ] Schematics (`ng add` / `ng update`) when APIs stabilize.

Detailed phased checklist: [ENTERPRISE-RESEARCH-ALIGNMENT.md § Phased plan](./ENTERPRISE-RESEARCH-ALIGNMENT.md#phased-plan-grades-of-maturity).

---

## Document index

| File | Role |
|------|------|
| [MASTER-PLAN.md](./MASTER-PLAN.md) | **This file** — entry point, roadmap, index. |
| [PLAN.md](./PLAN.md) | Workspace goals, layout, workflow, testing, publishing, a11y baseline, checklist. |
| [COMPONENT-VARIATIONS-PLAN.md](./COMPONENT-VARIATIONS-PLAN.md) | One component per funfair page; variants & use cases; snippets; a11y requirements; funfair UI patterns. |
| [ENTERPRISE-RESEARCH-ALIGNMENT.md](./ENTERPRISE-RESEARCH-ALIGNMENT.md) | Grades the research report; maps enterprise ideas to this library; phased adoption. |
| [deep-research-report.md](./deep-research-report.md) | Long enterprise reference (Angular Aria, APF, market comparison, inventory, governance). |

---

## Summary

Use **`doc/MASTER-PLAN.md`** as the single navigation hub. Implement **`brightrail` + `funfair` + Midway** (`projects/midway`), run **`verify:package`** before release and in CI, document every component in funfair with **preview + snippets + accessibility notes**, and grow toward **pack conformance** only when the team needs that rigor.
