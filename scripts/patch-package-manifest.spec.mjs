import assert from 'node:assert/strict';
import test from 'node:test';

import { patchPackageManifest } from './patch-package-manifest.mjs';

test('patchPackageManifest adds style subpath exports', () => {
  const patched = patchPackageManifest({
    name: 'brightrail',
    version: '0.1.0',
    exports: {
      '.': { default: './fesm2022/brightrail.mjs', types: './types/brightrail.d.ts' },
      './testing': { default: './fesm2022/brightrail-testing.mjs' },
    },
  });

  assert.equal(patched.exports['./styles/brightrail-root.scss'], './styles/brightrail-root.scss');
  assert.equal(patched.exports['./styles/*'], './styles/*');
  assert.equal(patched.license, 'MIT');
  assert.equal(patched.publishConfig.access, 'public');
  assert.match(patched.repository.url, /github\.com\/chandansingh7\/brightrail/);
});

test('patchPackageManifest preserves existing metadata', () => {
  const patched = patchPackageManifest({
    name: 'brightrail',
    version: '1.0.0',
    license: 'Apache-2.0',
    keywords: ['custom'],
    exports: {},
  });

  assert.equal(patched.license, 'Apache-2.0');
  assert.deepEqual(patched.keywords, ['custom']);
});
