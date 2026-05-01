# Plan: Fun Angular Component Library + funfair showcase

> Planning hub: [MASTER-PLAN.md](./MASTER-PLAN.md)

**Fun Angular Component Library** is an Angular workspace with a **publishable UI library** (`brightrail` on npm) and a **funfair** app: a lightweight, static showcase where you try components in the browser (not named “demo” on purpose—it’s the fun fairgrounds for the library).

This document describes the intended setup: you **author components in the library**, exercise them in **funfair** (rich showcase), and prove **installable packaging** with **Midway** + **`verify:package`** in one command.

---

## When and how the installable npm package is created

The **installable artifact** is not the `projects/brightrail` source folder; it is whatever **`ng build brightrail`** writes under **`dist/brightrail/`** (Angular Package Format via **ng-packagr** and your library’s `ng-package.json`).

| Question | Answer |
|----------|--------|
| **When is it created?** | Whenever you run **`ng build brightrail`** — locally before publish, as the **first step** of **`npm run verify:package`**, and in **CI** on every change you care about. |
| **How is it created?** | The CLI compiles **`projects/brightrail`** (from `public-api.ts` / `src/lib/`) into **`dist/brightrail/`**: a folder with **`package.json`**, compiled JS bundles (e.g. FESM), **`.d.ts`**, and Angular metadata — the **same layout** that ends up on the registry after publish (exact file list follows your Angular/ng-packagr version). |
| **When do people `npm install` it?** | **Externally:** after you **`npm publish`** (from `dist/brightrail` or your publish step). **In this repo:** **`Midway`** does not pull from the registry; root **`package.json`** uses **`"brightrail": "file:dist/brightrail"`**, then **`npm install`** links that folder into **`node_modules`** so **`Midway`** behaves like a real consumer. |

So: **build = package appears in `dist/brightrail`**; **`verify:package`** builds, reinstalls, then **builds `Midway`** to prove that artifact works.

### Midway — the “consumer smoke” tent at the fair

**Midway** is the funfair-themed name for the tiny **`projects/midway`** app: the place you **ride-test the packaged library** the way npm would, without publishing. **Funfair** is the big showcase; **Midway** is the one-ride check that the **built box** actually works.

---

## Goals

1. **Library** — Publishable Angular package (or consumable within the same repo) containing shared UI components, directives, pipes, and design tokens as you need.
2. **Funfair** — A thin “shell” showcase that imports the library and renders examples (routes, layouts, fake data) so you can **see and manually test** components without publishing first.
3. **Midway** — A **minimal Angular app** (`projects/midway`) in the same repo that depends on the **built** library under `dist/brightrail` via **`file:`** (or `npm pack` + install). It must **not** use TypeScript `paths` to `projects/brightrail/src`, so resolution matches a real **`npm install`**.
4. **Static output** — The funfair app is deployed as a **static site** (no backend you run). The library itself is consumed via **npm** (or path mapping during development).
5. **Public visibility (optional)** — Open repository plus optional hosted funfair (e.g. GitHub Pages, Netlify, Vercel) so others can try the UI in a browser.
6. **Accessibility** — Components work for **keyboard-only** users, **assistive technologies** (including screen readers that **speak** the UI), and **voice-control / speech-input** tools, within a defined baseline (see below).

### Accessibility baseline (non-negotiable for published components)

Design **brightrail** so people are not blocked by relying on a mouse or precise pointing alone:

| Audience | What brightrail must provide |
|----------|-------------------------|
| **Keyboard / switch users** | Full operation without a pointer: logical **focus order**, visible **focus indicators**, correct **Tab** / **Shift+Tab**, and **WAI-ARIA APG** patterns where applicable (e.g. arrow keys in menus, **roving `tabindex`** in toolbars, **Escape** to dismiss overlays). |
| **Screen-reader users (speech output)** | Correct **roles**, **states**, and **names** (`aria-*`, labels tied to controls, descriptions for errors); **live regions** where status must be announced; no critical information conveyed by color alone. |
| **Voice-control users (speech input)** | Controls have **clear, stable accessible names** that align with visible text where possible (so commands like “Click Submit” match); interactive elements are real **buttons/links/inputs** or properly exposed custom widgets. |
| **Motor / physical access** | Adequate **hit targets** and spacing where the design system defines them; **no forced hover-only** actions for essential tasks. |

Target **WCAG 2.2** (or 2.1) **AA** as the library’s documented goal; funfair should **demonstrate** the same patterns consumers should follow.

---

## Repository layout (target)

The clone folder on disk can be anything (for example `brightrail`); the **product name** is Fun Angular Component Library.

This tree is the **workspace layout you create with the Angular CLI** (`ng new`, `ng generate library`, `ng generate application`)—what people often call **scaffolding**. It is not a runtime framework; it is the **folders and generated boilerplate** for the library plus the showcase app.

```text
fun-angular-component-library/   # or your local folder name
├── projects/
│   ├── brightrail/             # Angular library project (Fun Angular Component Library)
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   └── public-api.ts # Public exports only
│   │   └── ng-package.json
│   ├── funfair/              # Showcase — path-mapped to brightrail source for fast dev
│   │   └── src/
│   │       ├── app/
│   │       └── index.html
│   └── midway/               # Midway — ride-test the built npm package (consumer smoke)
│       └── src/
│           ├── app/
│           └── index.html
├── angular.json              # Build targets: brightrail + funfair + midway
├── package.json              # Workspace scripts (includes verify:package)
├── tsconfig.json             # Root TS config; see note on path mappings
└── doc/                      # Planning docs — start at MASTER-PLAN.md
```

**Path mappings (important):** After scaffolding, configure TypeScript **`paths`** for **`brightrail`** **only** under **`funfair`** (e.g. `projects/funfair/tsconfig.*`), **not** in the workspace root. **Midway** should have **no** path override so imports resolve through **`node_modules`** → **`file:dist/brightrail`**, matching what publishers get after `npm install`.

**Naming:** The in-repo library project is **`brightrail`** (`ng build brightrail`). The showcase is **`funfair`**. The consumer-smoke app is **`midway`** (project folder `projects/midway`, display name **Midway**). The published npm package for this repo is **`brightrail`**; align `package.json` / `public-api.ts` imports with that choice.

### How funfair wires to `brightrail` (same repo — not `npm install` of your own package)

In a single Angular **workspace**, **funfair** does **not** need to run `npm install brightrail` from the registry to use the library you are building next door. The CLI sets up **TypeScript path mappings** (and workspace dependencies, depending on version) so funfair imports the library **by its package name** (e.g. `brightrail`) and the tooling resolves that to **`projects/brightrail`** (or the built output under `dist/`) during **`ng serve funfair`** and local builds.

- **Inside this repo:** one root `npm install` for third-party deps; develop `brightrail` and consume it from funfair **without** publishing first.
- **Outside this repo:** other applications add your library with **`npm install brightrail`** (or yarn/pnpm) **after** you publish to a registry (or a private feed).

So: **`projects/brightrail`** is what you **build and publish**; **`projects/funfair`** is the app that **imports** it like a consumer — locally via the workspace link, and for the rest of the world via **npm** after release.

### Consumer verification in one command (Midway + `verify:package`)

**Midway** is a minimal Angular application whose only job is to **import `brightrail` from the built output** (same as after `npm install`).

**Root `package.json` (pattern):**

- Add a dependency: `"brightrail": "file:dist/brightrail"` (this repo uses the unscoped name `brightrail`).
- Add a script, e.g.  
  `"verify:package": "ng build brightrail && npm install && ng build midway"`  

**What one run does:**

1. **`ng build brightrail`** — Produces / refreshes `dist/brightrail` with the package shape you publish.
2. **`npm install`** — Links `node_modules/brightrail` to that folder (consumer layout).
3. **`ng build midway`** — Compiles the tiny app using **only** the packaged library (no `projects/brightrail/src` path hack, if you scoped `paths` to funfair only).

Use **`verify:package`** locally before release and as a **required CI job** so packaging regressions fail in one step alongside funfair dev.

**Midway app content:** One route (or root template) that renders a **representative import** from `public-api.ts` (e.g. your main button/card). Expand with more imports as the API grows.

### Assuring the published package really works (workspace ≠ npm)

Funfair importing `brightrail` via **path-mapped** dev is fast, but it does not prove the **tarball / `dist` layout** by itself. The **`verify:package`** flow above is the **primary** in-repo guarantee; the list below is for extra confidence or CI variants.

1. **Always ship from a clean library build** — `ng build brightrail`, publish what ng-packagr outputs (`dist/brightrail` or your configured path). CI should run **`verify:package`** (or at least `ng build brightrail`) on every main-branch change.
2. **Optional:** Build funfair with overrides so it resolves **only** `dist/brightrail` (redundant if **Midway** exists, but still valid).
3. **Optional:** `npm pack` on `dist/brightrail`, install the `.tgz` in a **throwaway** app outside the repo for a fully external smoke test.
4. **Peer dependencies** — Document required Angular (and CDK, etc.) versions in the library’s **`package.json` `peerDependencies`** so consumers get install warnings instead of runtime surprises.

Funfair proves **API usage** and docs UX; **`verify:package`** proves **installable packaging** in one go.

---

## Responsibilities

| Piece | Responsibility |
|--------|-----------------|
| **Library** | Stable API (`public-api.ts`), theming/tokens, **accessible behavior and semantics**, unit tests (including checks for names/roles/states where feasible), changelog/versioning. |
| **Funfair** | Routes per component, sample content, edge cases; **document keyboard and AT behavior** on each page; keep showcase itself keyboard-reachable (skip link, landmarks, focus-safe previews). |
| **Midway** | Minimal app: depends on **`file:dist/brightrail`**, no path mapping to source; ride-tests **`verify:package`**. |

Keep **business logic and app-specific wiring** out of the library; funfair may use fake services to mimic real apps.

---

## Local development workflow

1. **Install dependencies** once at workspace root (`npm install`).
2. **Develop the library** under `projects/brightrail/src/lib/`.
3. **Run the showcase** with `ng serve funfair` (or `npm run serve:funfair`).
4. **Prove the package in one go** with `npm run verify:package` (builds `brightrail`, runs `npm install`, builds **Midway**) — use before publish and in CI.
5. **Build the library** alone with `ng build brightrail` when you need `dist/` for publishing.
6. **Build funfair** with `ng build funfair --configuration=production` for the static showcase.

Optional: `build:all` can chain `funfair` + tests; CI should always include **`verify:package`** (or equivalent).

---

## Testing strategy

- **Library:** Component specs (e.g. Vitest/Jest/Karma per your CLI setup), plus tests for **ARIA attributes** and **keyboard handlers** where components implement custom widgets.
- **Accessibility:** Manual passes with **keyboard only** and at least one **screen reader** (e.g. VoiceOver or NVDA) for new composite patterns; optional **automated checks** (e.g. axe, Playwright accessibility assertions) in CI as you mature.
- **Funfair:** Manual and visual regression; optional e2e smoke per route including **tab-through** critical previews.
- **Consumer-shaped checks:** Default: **`npm run verify:package`** (see **Consumer verification in one command**). Optional extra: `npm pack` in a throwaway repo.

---

## Publishing and hosting

### Library (for consumers)

- Build: `ng build brightrail`.
- Publish: `npm publish` (public or private registry) from the built output or via `ng-packagr` as configured by the CLI.
- Consumers add the package to their `package.json` and import from the published name.
- **`funfair` is not part of that install.** `npm install brightrail` delivers only the **library** package. The showcase app stays in **your Git repository** and/or a **separately deployed** static site—not inside node_modules for consumers.

### Funfair (live site)

- Build funfair for production (static browser bundle).
- Deploy the output directory to **GitHub Pages**, **Netlify**, **Vercel**, or similar—**build command** + **publish directory** only; no long-running server required.

---

## Optional extensions (later)

- **Storybook** for isolated stories if funfair grows too large.
- **Secondary entry points** (e.g. `brightrail/button`) if the package grows and you want tree-shakable subpaths.
- **CI:** Lint, test library, run **`verify:package`**, build funfair on every push; deploy funfair from `main` only; optional **accessibility** checks (e.g. axe, Playwright) on key routes.
- **Versioning:** Semantic versioning for the library; funfair can track `main` without strict semver.

---

## Implementation checklist (when you scaffold)

- [ ] Create Angular workspace with **`brightrail`**, **`funfair`**, and **`midway`** (minimal app).
- [ ] Export at least one component from `public-api.ts`; use it in **funfair** and in **midway** so **`verify:package`** exercises a real import.
- [ ] Scope **`paths`** for `brightrail` to **funfair only**; keep **Midway** on **`file:dist/brightrail`** + `node_modules` resolution.
- [ ] Add npm scripts: `serve:funfair`, `build:lib`, `build:funfair`, **`verify:package`**, `build:all` (optional umbrella).
- [ ] CI: run **`verify:package`** on every PR / `main`.
- [ ] Document in the root `README` how to run funfair and how to link the library in another app.
- [ ] (Optional) Configure static hosting for funfair and document the publish directory.
- [ ] Add an **ACCESSIBILITY.md** (or equivalent) in the repo stating WCAG target, keyboard/AT expectations, and how to test voice-control naming.
- [ ] Wire **focus-visible** styles into tokens so keyboard focus is always visible across packs.

---

## Summary

**Fun Angular Component Library** is maintained as **one codebase** with **three coordinated targets**: the **library** (`brightrail`), the **funfair** showcase (path-mapped dev), and **Midway** (`projects/midway` — one-command **npm-shaped** proof via **`verify:package`**). You ship `brightrail` to npm; funfair and Midway stay in-repo for validation and docs.
