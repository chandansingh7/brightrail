#!/usr/bin/env node
/** Merges duplicate constructors introduced by patch-playground-a11y-preview.mjs */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const playgroundRoot = path.join(__dirname, '../projects/funfair/src/app/playground');

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith('-playground.component.ts')) out.push(full);
  }
  return out;
}

let fixed = 0;

for (const file of walk(playgroundRoot)) {
  let ts = fs.readFileSync(file, 'utf8');
  const marker = 'initPlaygroundA11yPreview(';
  if (!ts.includes(marker)) continue;

  const ctorMatches = [...ts.matchAll(/\n  constructor\(\) \{/g)];
  if (ctorMatches.length < 2) continue;

  // Remove the short a11y-only constructor block.
  ts = ts.replace(
    /\n  constructor\(\) \{\n    initPlaygroundA11yPreview\([^)]+\);\n  \}\n/,
    '\n',
  );

  // Inject init call at start of remaining constructor.
  if (!ts.includes(marker)) {
    ts = ts.replace(/(\n  constructor\(\) \{\n)/, `$1    initPlaygroundA11yPreview('PLACEHOLDER', this.previewOnly);\n`);
    const idMatch = ts.match(/initPlaygroundA11yPreview\('([^']+)'/);
    if (idMatch) {
      // already has correct id from removed block - need component id from file path
      const slug = path.basename(file).replace('-playground.component.ts', '');
      const id = slug === 'alert' ? 'alerts' : slug;
      ts = ts.replace(/initPlaygroundA11yPreview\('PLACEHOLDER'/, `initPlaygroundA11yPreview('${id}'`);
    }
  } else {
    ts = ts.replace(
      /(\n  constructor\(\) \{\n)(?!    initPlaygroundA11yPreview)/,
      `$1    initPlaygroundA11yPreview('${path.basename(file).replace('-playground.component.ts', '').replace(/^alert$/, 'alerts')}', this.previewOnly);\n`,
    );
  }

  fs.writeFileSync(file, ts);
  fixed++;
}

console.log(`Merged duplicate constructors in ${fixed} files.`);
