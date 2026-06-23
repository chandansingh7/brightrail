#!/usr/bin/env node
/**
 * Verifies Pro/Con marketing claims against the repo (platform registry, CI gates, secondary entries).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), 'utf8');
}

function exists(rel) {
  return fs.existsSync(path.join(ROOT, rel));
}

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

// Platform adoption registry — 100% ARIA adopted
const adoption = read('projects/brightrail/src/lib/platform/brightrail-platform-adoption.ts');
const adoptedEntries = (adoption.match(/angularAria: 'adopted'/g) ?? []).length;
const reExportOnly = (adoption.match(/angularAria: 're-export-only'/g) ?? []).length;
assert(adoptedEntries >= 40, `Expected >= 40 adopted surfaces, found ${adoptedEntries}`);
assert(reExportOnly === 0, `All surfaces must be adopted (found ${reExportOnly} re-export-only)`);
assert(adoption.includes('brightrailAllComponentsPlatformReady'), 'Missing platform readiness helper');

// a11y-preview routes cover every playground loader
const registry = read('projects/funfair/src/app/playground/shared/playground-a11y-preview.registry.ts');
const registryCount = (registry.match(/:\s*\(\)\s*=>/g) ?? []).length;
const idsFile = read('projects/funfair/src/app/playground/shared/playground-a11y-preview.ids.ts');
assert(idsFile.includes('PLAYGROUND_A11Y_PREVIEW_LOADERS'), 'a11y-preview ids must derive from registry');
assert(registryCount >= 36, `Expected >= 36 a11y-preview routes, found ${registryCount}`);
assert(exists('e2e/a11y.spec.ts'), 'Missing e2e/a11y.spec.ts');
assert(exists('e2e/visual.spec.ts'), 'Missing e2e/visual.spec.ts');

// CI gates wired
const pkg = JSON.parse(read('package.json'));
assert(pkg.scripts['e2e:a11y'], 'Missing npm run e2e:a11y');
assert(pkg.scripts['e2e:visual'], 'Missing npm run e2e:visual');
assert(pkg.scripts['e2e:gates'], 'Missing npm run e2e:gates');
const ci = read('.github/workflows/ci.yml');
assert(ci.includes('npm run e2e:a11y'), 'CI must run e2e:a11y');
assert(ci.includes('npm run e2e:visual'), 'CI must run e2e:visual');

// Secondary entry points + schematic + i18n
assert(exists('projects/brightrail/testing/ng-package.json'), 'Missing brightrail/testing entry');
assert(exists('projects/brightrail/governance/ng-package.json'), 'Missing brightrail/governance entry');
assert(exists('projects/brightrail/schematics/collection.json'), 'Missing schematics collection');
assert(adoption.includes('provideBrightrailPlatform') || read('projects/brightrail/src/lib/platform/brightrail-platform.providers.ts').includes('provideBrightrailPlatform'), 'Missing provideBrightrailPlatform');
assert(read('projects/brightrail/src/lib/i18n/brightrail-i18n.providers.ts').includes('provideBrightrailI18n'), 'Missing provideBrightrailI18n');
assert(read('projects/brightrail/src/lib/styles/_rtl.scss').includes('brightrail-root--rtl'), 'Missing RTL stylesheet');

// Publishable package manifest (style subpath exports)
const patchSource = read('scripts/patch-package-manifest.mjs');
assert(patchSource.includes('./styles/brightrail-root.scss'), 'patch-package-manifest must export style subpaths');
assert(exists('scripts/publish-lib.sh'), 'Missing scripts/publish-lib.sh');
assert(exists('doc/CONSUMING.md'), 'Missing doc/CONSUMING.md');
assert(exists('doc/PUBLISHING.md'), 'Missing doc/PUBLISHING.md');
assert(exists('CHANGELOG.md'), 'Missing CHANGELOG.md');
assert(exists('doc/COMPONENTS.md'), 'Missing doc/COMPONENTS.md');
assert(exists('doc/LIMITATIONS.md'), 'Missing doc/LIMITATIONS.md');
assert(exists('scripts/copy-lib-sources.mjs'), 'Missing scripts/copy-lib-sources.mjs');

if (exists('dist/brightrail/package.json')) {
  const distPkg = JSON.parse(read('dist/brightrail/package.json'));
  assert(
    distPkg.exports?.['./styles/brightrail-root.scss'],
    'dist/brightrail must export brightrail-root.scss (run npm run build:lib)',
  );
}

// Composable patterns (modal/drawer slots, table toolbar)
const api = read('projects/brightrail/src/public-api.ts');
assert(api.includes('./lib/modal/brightrail-modal.component'), 'Modal exports missing');
assert(api.includes('./lib/drawer/brightrail-drawer.component'), 'Drawer exports missing');
assert(api.includes('./lib/table/brightrail-table-toolbar.component'), 'Table toolbar exports missing');

if (errors.length) {
  console.error('verify:claims FAILED:\n' + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

console.log('verify:claims OK — platform 100%, CI gates, secondary entries, i18n/RTL, and composable exports verified.');
