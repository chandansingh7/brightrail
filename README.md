# brightrail

**Fun Angular Component Library** — Angular workspace targeting **Angular 21.x** ([releases / support](https://angular.dev/reference/releases)). The **`brightrail` npm package** declares peers **`>=21.0.0 <22.0.0`** for `@angular/core` / `@angular/common`; consumer apps must be on Angular 21.

**Node:** This repo is developed on **Node 24.x** ([Active LTS “Krypton”](https://nodejs.org/en/about/releases)). Use **`.nvmrc`** (`nvm use`) or install Node 24 locally. The published library’s `engines.node` matches [Angular 21’s supported Node range](https://angular.dev/reference/versions) so apps on those versions can still install it.

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
| `npm run test:brightrail` | Library unit tests (headless Chrome) |
| `npm run e2e:a11y` | axe accessibility gate on Funfair a11y-preview routes (Playwright) |
| `npm run e2e:visual` | Visual regression baselines for every playground preview (Playwright) |
| `npm run e2e:update-snapshots` | Refresh Playwright screenshot baselines after intentional UI changes |

Planning docs: **[doc/MASTER-PLAN.md](doc/MASTER-PLAN.md)**
