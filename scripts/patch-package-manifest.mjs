#!/usr/bin/env node
/**
 * Patches dist/brightrail/package.json after ng-packagr so consumers can import
 * styles and npm has full publish metadata (exports, repository, license, …).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MANIFEST_PATH = path.join(ROOT, 'dist/brightrail/package.json');

/** @typedef {Record<string, unknown>} PackageManifest */

/**
 * @param {PackageManifest} manifest
 * @returns {PackageManifest}
 */
export function patchPackageManifest(manifest) {
  const exportsField = /** @type {Record<string, unknown>} */ (manifest.exports ?? {});

  const patchedExports = {
    ...exportsField,
    './styles/brightrail-root.scss': './styles/brightrail-root.scss',
    './styles/brightrail-futuristic.scss': './styles/brightrail-futuristic.scss',
    './styles/*': './styles/*',
  };

  return {
    ...manifest,
    license: manifest.license ?? 'MIT',
    author: manifest.author ?? 'Chandan Singh <chandan.singh558@gmail.com>',
    homepage: manifest.homepage ?? 'https://chandansingh7.github.io/brightrail/',
    repository: manifest.repository ?? {
      type: 'git',
      url: 'git+https://github.com/chandansingh7/brightrail.git',
    },
    bugs: manifest.bugs ?? {
      url: 'https://github.com/chandansingh7/brightrail/issues',
    },
    keywords: manifest.keywords ?? [
      'angular',
      'angular21',
      'components',
      'ui',
      'design-system',
      'accessibility',
      'aria',
    ],
    publishConfig: manifest.publishConfig ?? {
      access: 'public',
      registry: 'https://registry.npmjs.org/',
    },
    exports: patchedExports,
  };
}

/**
 * @param {string} [manifestPath]
 */
export function patchPackageManifestFile(manifestPath = MANIFEST_PATH) {
  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Package manifest not found: ${manifestPath}. Run npm run build:lib first.`);
  }

  const raw = fs.readFileSync(manifestPath, 'utf8');
  const manifest = /** @type {PackageManifest} */ (JSON.parse(raw));
  const patched = patchPackageManifest(manifest);
  fs.writeFileSync(manifestPath, `${JSON.stringify(patched, null, 2)}\n`, 'utf8');
  return patched;
}

const isMain =
  process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));

if (isMain) {
  patchPackageManifestFile();
  console.log(`Patched ${MANIFEST_PATH}`);
}
