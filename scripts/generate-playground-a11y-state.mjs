#!/usr/bin/env node
/**
 * Wires snapshot/restore for playgrounds that still use empty a11yPreviewState.
 * Run: node scripts/generate-playground-a11y-state.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const playgroundRoot = path.join(path.resolve(__dirname, '..'), 'projects/funfair/src/app/playground');

const SKIP_FILES = new Set([
  'button-playground.component.ts',
  'avatar-playground.component.ts',
  'accordion-playground.component.ts',
]);

const EXCLUDE_SIGNALS = new Set([
  'activeTab',
  'activeSnippet',
  'selectedRecipeGroup',
  'previewOnly',
  'open',
  'modalOpen',
  'drawerOpen',
  'paletteOpen',
  'showModal',
  'isOpen',
]);

function findPlaygroundTsFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'shared' && entry.name !== 'resources') {
      out.push(...findPlaygroundTsFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('-playground.component.ts')) {
      out.push(full);
    }
  }
  return out;
}

function extractSignals(ts) {
  const classStart = ts.indexOf('export class');
  const methodsStart = ts.search(/\n  (?:readonly themeService|recipesInGroup|applyRecipe|buildHtml)\(/);
  const scanEnd = methodsStart > classStart ? methodsStart : ts.length;
  const classHead = ts.slice(classStart, scanEnd);

  const signals = [];
  const seen = new Set();
  const re = /readonly\s+(\w+)\s*=\s*signal(?:<[^>]*>)?\(/g;
  let m;
  while ((m = re.exec(classHead)) !== null) {
    const name = m[1];
    if (!EXCLUDE_SIGNALS.has(name) && !seen.has(name)) {
      seen.add(name);
      signals.push(name);
    }
  }
  return signals;
}

function hasApplyRecipe(ts) {
  return /\bapplyRecipe\s*\(/.test(ts);
}

function patchFile(filePath) {
  const fileName = path.basename(filePath);
  if (SKIP_FILES.has(fileName)) {
    return false;
  }

  let ts = fs.readFileSync(filePath, 'utf8');
  if (!ts.includes('readonly a11yPreviewState = computed(() => ({}')) {
    return false;
  }

  const signals = extractSignals(ts);
  if (signals.length === 0) {
    return false;
  }

  const recipeTypeMatch = ts.match(/type\s+(\w+Recipe)\s*=/);
  const recipeType = recipeTypeMatch?.[1] ?? 'string';
  const useRecipe = signals.includes('previewRecipe') && hasApplyRecipe(ts);

  if (!ts.includes('playground-a11y-state.utils')) {
    ts = ts.replace(
      "} from '../shared/playground-a11y-preview.utils';",
      "} from '../shared/playground-a11y-preview.utils';\nimport {\n  restorePlaygroundState,\n  snapshotPlaygroundState,\n} from '../shared/playground-a11y-state.utils';",
    );
  }

  if (!ts.includes('WritableSignal')) {
    ts = ts.replace(
      /from '@angular\/core';/,
      "from '@angular/core';\nimport type { WritableSignal } from '@angular/core';",
    );
  }

  const snapshotEntries = signals.map((s) => `      ${s}: () => this.${s}(),`).join('\n');
  const restoreEntries = signals
    .map((s) => `      ${s}: this.${s} as WritableSignal<unknown>,`)
    .join('\n');

  const snapshotBlock = `readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
${snapshotEntries}
    }),
  );`;

  ts = ts.replace(
    /readonly a11yPreviewState = computed\(\(\) => \(\{\} as Record<string, unknown>\)\);/,
    snapshotBlock,
  );

  const restoreMethod = `
  private restoreA11yPreviewState(state: unknown): void {
    if (!state || typeof state !== 'object') {
      return;
    }
    const snapshot = state as Record<string, unknown>;
    ${
      useRecipe
        ? `if (typeof snapshot['previewRecipe'] === 'string') {
      this.applyRecipe(snapshot['previewRecipe'] as ${recipeType});
      return;
    }`
        : ''
    }
    restorePlaygroundState(state, {
${restoreEntries}
    });
  }`;

  if (!ts.includes('restoreA11yPreviewState')) {
    ts = ts.replace(
      /constructor\(\) \{\n    initPlaygroundA11yPreview\('([^']+)', this\.previewOnly\);\n  \}/,
      `constructor() {\n    initPlaygroundA11yPreview('$1', this.previewOnly, (state) =>\n      this.restoreA11yPreviewState(state),\n    );\n  }${restoreMethod}`,
    );
  }

  fs.writeFileSync(filePath, ts);
  return true;
}

let count = 0;
for (const file of findPlaygroundTsFiles(playgroundRoot)) {
  if (patchFile(file)) {
    count++;
    console.log('patched', path.relative(playgroundRoot, file));
  }
}
console.log(`Updated ${count} playground files.`);
