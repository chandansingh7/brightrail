import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { copyDir, shouldCopy } from './copy-lib-sources.mjs';

test('shouldCopy skips spec files only', () => {
  assert.equal(shouldCopy('table/brightrail-table.component.ts'), true);
  assert.equal(shouldCopy('table/brightrail-table.component.spec.ts'), false);
});

test('copyDir copies nested sources without spec files', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'br-copy-'));
  const src = path.join(tmp, 'src');
  const dest = path.join(tmp, 'dest');
  fs.mkdirSync(path.join(src, 'buttons'), { recursive: true });
  fs.writeFileSync(path.join(src, 'buttons', 'button.ts'), 'export {};');
  fs.writeFileSync(path.join(src, 'buttons', 'button.spec.ts'), 'it();');

  copyDir(src, dest);

  assert.equal(fs.existsSync(path.join(dest, 'buttons', 'button.ts')), true);
  assert.equal(fs.existsSync(path.join(dest, 'buttons', 'button.spec.ts')), false);
  fs.rmSync(tmp, { recursive: true, force: true });
});
