# facl-ui

**Fun Angular Component Library** — Angular workspace targeting **Angular 20.x** ([releases / LTS](https://angular.dev/reference/releases)).

| Script | Purpose |
|--------|---------|
| `npm install` | Install deps (`@facl/ui` uses `file:dist/facl`; run after first `npm run build:lib` if install warns) |
| `npm run serve:funfair` | Showcase — `@facl/ui` resolves to **library source** via `projects/funfair/tsconfig.app.json` |
| `npm run verify:package` | Build `facl` → `npm install` → build **Midway** (npm-shaped consumer proof) |
| `npm run build:all` | Build library + funfair + midway |
| `npm run test:facl` | Library unit tests (headless Chrome) |

Planning docs: **[doc/MASTER-PLAN.md](doc/MASTER-PLAN.md)**
