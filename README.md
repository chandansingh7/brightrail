# brightrail

**Fun Angular Component Library** — Angular workspace targeting **Angular 21.x** ([releases / support](https://angular.dev/reference/releases)). The **`brightrail` npm package** declares peers **`>=21.0.0 <22.0.0`** for `@angular/core` / `@angular/common`; consumer apps must be on Angular 21.

**Node:** This repo is developed on **Node 24.x** ([Active LTS “Krypton”](https://nodejs.org/en/about/releases)). Use **`.nvmrc`** (`nvm use`) or install Node 24 locally. The published library’s `engines.node` matches [Angular 21’s supported Node range](https://angular.dev/reference/versions) so apps on those versions can still install it.

---

## Install in any Angular 21 app

**npm package:** [npmjs.com/package/brightrail](https://www.npmjs.com/package/brightrail) (published: **v0.1.1** · next: **[v0.1.2](./CHANGELOG.md#012--unreleased-on-npm)**)

### Upcoming in v0.1.2 (on `main`, not on npm yet)

| Area | Change |
|------|--------|
| **Alert** | Plain text between tags works (fallback projection) |
| **Cards** | No double glass/fx panels on nested header + content |
| **Table** | `[serverMode]`, `[(selectedIds)]`, column filters, actions via `cellTemplateKey` |
| **Date picker** | `[enabledDates]` allowlist for booking slots |
| **Page header** | `[title]` / `[subtitle]` inputs |
| **npm package** | `lib/` source folder for browsing |
| **Docs** | `COMPONENTS.md`, `LIMITATIONS.md`, `CONSUMER-PATTERNS.md` |

Full notes: **[CHANGELOG.md](./CHANGELOG.md)** · Consumer recipes: **[doc/CONSUMER-PATTERNS.md](doc/CONSUMER-PATTERNS.md)**

To publish v0.1.2 to npm: commit to `main`, then `git tag v0.1.2 && git push origin v0.1.2`.

In a new or existing **Angular 21** project:

```bash
npm install brightrail @angular/cdk @angular/aria
ng add brightrail
```

`ng add brightrail` wires platform providers and the global stylesheet when possible. Then use components in standalone components:

```ts
import { BrightrailButtonComponent } from 'brightrail';

@Component({
  standalone: true,
  imports: [BrightrailButtonComponent],
  template: `<button brightrail-button variant="primary">Save</button>`,
})
export class MyPageComponent {}
```

More detail (manual setup, styles, local tarball): **[doc/CONSUMING.md](doc/CONSUMING.md)**

**Component folders, imports, and limitations:** **[doc/COMPONENTS.md](doc/COMPONENTS.md)** · **[doc/LIMITATIONS.md](doc/LIMITATIONS.md)** · **[doc/CONSUMER-PATTERNS.md](doc/CONSUMER-PATTERNS.md)**

---

## Known limitations (summary)

### Table

- **Client-side by default** — filter, sort, and paginate run in the browser on `[data]`. Use `[serverMode]="true"` and handle `(sortChange)` / `(pageChange)` / `[(filterState)]` for large or remote datasets.
- **Row actions** — no preset “Actions column”; use `columnRole: 'actions'` + `cellTemplateKey`, or `rowSelection="single"` + `<brightrail-table-single-actions>`.
- **Selection** — `[(selectedIds)]` or `[selectedIds]` + `(selectionChange)`.
- **Rows** — `BrightrailTableRow = Record<string, unknown>`; map API types yourself.
- **Badge tone** — per-column static tone, or auto-inferred from cell text.
- **No built-in fetch** — you load `[data]` from your API.

### Alert

- **Plain text** — works via fallback projection (unmarked content → message body). Use `[brightrailAlertMessage]` for explicit structure.
- **Setup checklists** — prefer lists inside `brightrail-card-content` over info alerts when you don't need banner semantics.

### Package layout

- **npm ships compiled JS** in `fesm2022/` plus a **`lib/` source tree** (folder structure for browsing — import only from `'brightrail'`).
- See **[doc/COMPONENTS.md](doc/COMPONENTS.md)** for every folder under `projects/brightrail/src/lib/` and limitations for fields, toast, graph, etc.

---

## Future releases (maintainers)

Publishing to npm is **tag-driven**. Pushing to `main` updates the repo and runs CI tests, but **does not** publish. You must push a version tag matching `v*.*.*` (see `.github/workflows/publish.yml`).

### Step-by-step

**1. Bump the version** in both files (keep them in sync):

- `projects/brightrail/package.json` → `"version"`
- `package.json` (repo root) → `"version"`

Example: `0.1.0` → `0.1.1`

**2. Commit and push to `main`:**

```bash
git add projects/brightrail/package.json package.json
git commit -m "chore: release brightrail v0.1.1"
git push origin main
```

**3. Tag and push the tag** (this triggers npm publish via GitHub Actions):

```bash
git tag v0.1.1
git push origin v0.1.1
```

The **Publish npm package** workflow will build, test, and run `npm publish`. Requires GitHub secret **`NPM_TOKEN`** (see **[doc/PUBLISHING.md](doc/PUBLISHING.md)**).

**4. Verify on npm:**

```bash
npm view brightrail version
```

Or open [npmjs.com/package/brightrail](https://www.npmjs.com/package/brightrail).

### Publish manually (optional)

Skip CI and publish from your machine:

```bash
npm login
npm run publish:lib
```

### Quick reference

| Goal | Command |
|------|---------|
| Update code only | `git push origin main` |
| Publish new npm version | `git tag vX.Y.Z && git push origin vX.Y.Z` |
| Local publish test | `PACK_DRY_RUN=1 npm run publish:lib` |

---

## New Angular project (from scratch)

```bash
ng new my-app --standalone
cd my-app
npm install brightrail @angular/cdk @angular/aria
ng add brightrail
```

| Doc | Audience |
|-----|----------|
| **[doc/CONSUMING.md](doc/CONSUMING.md)** | App developers — install, manual setup, styles, providers, examples |
| **[doc/PUBLISHING.md](doc/PUBLISHING.md)** | Maintainers — npm publish, **`NPM_TOKEN`**, tagging releases |

---

### Repository & live demo

| | URL |
|---|-----|
| **Repository** | [github.com/chandansingh7/brightrail](https://github.com/chandansingh7/brightrail) |
| **Live playground (GitHub Pages)** | [chandansingh7.github.io/brightrail](https://chandansingh7.github.io/brightrail/) |

The hosted site is the **Funfair** showcase — browse component playgrounds, variation catalogs, and library assessment without a local install.

### Access locally (ports)

| App | Default URL | Role |
|-----|-------------|------|
| **Funfair** | [http://localhost:4200](http://localhost:4200) | Dev playground — library via **source** path mapping |
| **Midway** | [http://localhost:4201](http://localhost:4201) | Consumer smoke — library via **`node_modules`** (`file:dist/brightrail`) |

**Port alignment:** Defaults are **4200** (Funfair) and **4201** (Midway). The same values are used in **`scripts/build-and-run.sh`** (`FUNFAIR_PORT` / `MIDWAY_PORT`) and in **`projects/funfair/src/app/midway-dev-port.ts`** (Midway **4201**), so the “Open Midway” link in Funfair matches the script. If you change Midway’s port, update **both** the script default (or env var) and **`midway-dev-port.ts`**.

Run both servers after a full build:

```bash
npm run dev:all
# or: ./scripts/build-and-run.sh
```

You can override ports for the script only: `FUNFAIR_PORT=4300 MIDWAY_PORT=4301 npm run dev:all` — then update `midway-dev-port.ts` to match Midway’s port so the link stays correct.

| Script | Purpose |
|--------|---------|
| `npm install` | Install deps (`brightrail` uses `file:dist/brightrail`; run after first `npm run build:lib` if install warns) |
| `npm run serve:funfair` | Funfair only — [http://localhost:4200](http://localhost:4200) by default (`ng serve funfair`) |
| `npm run dev:all` | Build lib + apps, then serve Funfair (**4200**) and Midway (**4201**) together ([`scripts/build-and-run.sh`](scripts/build-and-run.sh)) |
| `npm run verify:package` | Build `brightrail` → `npm install` → **Midway** app (npm-shaped consumer proof) |
| `npm run build:all` | Build library + funfair + midway |
| `npm run deploy:pages` | Build Funfair and publish to [GitHub Pages](https://chandansingh7.github.io/brightrail/) (`gh-pages` branch) |
| `npm run build:lib` | Build publishable npm package → `dist/brightrail` |
| `npm run pack:lib` | Create installable `.tgz` tarball for local consumer testing |
| `npm run publish:lib` | Build and publish `brightrail` to [npm](https://www.npmjs.com/) — see [doc/PUBLISHING.md](doc/PUBLISHING.md) for **`NPM_TOKEN`** setup |
| `npm run test:brightrail` | Library unit tests (headless Chrome) |
| `npm run e2e:gates` | Run all CI gates locally (a11y + contrast report + visual) — [`scripts/e2e-gates.sh`](scripts/e2e-gates.sh) |
| `npm run e2e:a11y` | axe accessibility gate on Funfair a11y-preview routes (Playwright) |
| `npm run e2e:visual` | Visual regression baselines for every playground preview (Playwright) |
| `npm run e2e:update-snapshots` | Refresh Playwright screenshot baselines after intentional UI changes |

Planning docs: **[doc/MASTER-PLAN.md](doc/MASTER-PLAN.md)** · **[CHANGELOG.md](CHANGELOG.md)** · **[doc/COMPONENTS.md](doc/COMPONENTS.md)** · **[doc/LIMITATIONS.md](doc/LIMITATIONS.md)** · **[doc/CONSUMING.md](doc/CONSUMING.md)** · **[doc/PUBLISHING.md](doc/PUBLISHING.md)**
