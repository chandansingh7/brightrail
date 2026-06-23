#!/usr/bin/env node
/**
 * Copies `projects/brightrail/src/lib` into `dist/brightrail/lib` for npm browsing.
 * Runtime imports still use `import { … } from 'brightrail'` — not these paths.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'projects/brightrail/src/lib');
const DEST = path.join(ROOT, 'dist/brightrail/lib');

function shouldCopy(relPath) {
  return !relPath.endsWith('.spec.ts') && !relPath.endsWith('.spec.ts.snap');
}

function copyDir(from, to, base = from) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const srcPath = path.join(from, entry.name);
    const destPath = path.join(to, entry.name);
    const rel = path.relative(base, srcPath);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath, base);
    } else if (shouldCopy(rel)) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

export { shouldCopy, copyDir };

const isMain =
  process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));

if (isMain) {
  if (!fs.existsSync(SRC)) {
    throw new Error(`Library source not found: ${SRC}. Run ng build brightrail first.`);
  }

  fs.rmSync(DEST, { recursive: true, force: true });
  copyDir(SRC, DEST);
  console.log(`Copied library sources to ${DEST}`);
}
