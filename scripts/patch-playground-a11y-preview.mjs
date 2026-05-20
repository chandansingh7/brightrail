#!/usr/bin/env node
/**
 * Patches funfair playground components for isolated a11y preview support.
 * Run: node scripts/patch-playground-a11y-preview.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const playgroundRoot = path.join(root, 'projects/funfair/src/app/playground');

const COMPONENT_IDS = {
  'accordion-playground.component': 'accordion',
  'alert-playground.component': 'alerts',
  'app-shell-playground.component': 'app-shell',
  'avatar-playground.component': 'avatar',
  'badge-playground.component': 'badge',
  'breadcrumb-playground.component': 'breadcrumb',
  'button-playground.component': 'button',
  'card-playground.component': 'card',
  'checkbox-playground.component': 'checkbox',
  'chip-playground.component': 'chip',
  'combobox-playground.component': 'combobox',
  'command-palette-playground.component': 'command-palette',
  'date-picker-playground.component': 'date-picker',
  'drawer-playground.component': 'drawer',
  'empty-state-playground.component': 'empty-state',
  'file-upload-playground.component': 'file-upload',
  'form-field-playground.component': 'form-field',
  'graph-playground.component': 'graph',
  'menu-playground.component': 'menu',
  'modal-playground.component': 'modal',
  'pagination-playground.component': 'pagination',
  'progress-playground.component': 'progress',
  'radio-playground.component': 'radio',
  'select-playground.component': 'select',
  'skeleton-playground.component': 'skeleton',
  'slider-playground.component': 'slider',
  'stepper-playground.component': 'stepper',
  'switch-playground.component': 'switch',
  'table-playground.component': 'table',
  'tabs-playground.component': 'tabs',
  'text-field-playground.component': 'text-field',
  'textarea-playground.component': 'textarea',
  'timeline-playground.component': 'timeline',
  'toast-playground.component': 'toast',
  'tooltip-playground.component': 'tooltip',
  'tree-playground.component': 'tree',
  'validation-summary-playground.component': 'validation-summary',
};

const PREVIEW_HEADER_RE =
  /<h2 id="([^"]+)" class="bp-panel__title bp-panel__title--live">\s*<span class="bp-live-dot" aria-hidden="true"><\/span>\s*Live preview\s*<\/h2>/g;

function patchHtml(filePath, componentId) {
  let html = fs.readFileSync(filePath, 'utf8');
  if (html.includes('app-playground-preview-header')) {
    return false;
  }
  if (!html.includes('class="bp"')) {
    return false;
  }
  html = html.replace('<div class="bp">', '<div class="bp" [class.bp--a11y-preview-only]="previewOnly">');
  html = html.replace(
    PREVIEW_HEADER_RE,
    `<app-playground-preview-header titleId="$1" componentId="${componentId}" [state]="a11yPreviewState()" />`,
  );
  fs.writeFileSync(filePath, html);
  return true;
}

function patchTs(filePath, componentId) {
  let ts = fs.readFileSync(filePath, 'utf8');
  if (ts.includes('injectPlaygroundA11yPreviewMode')) {
    return false;
  }

  if (!ts.includes('@Component({')) {
    return false;
  }

  if (!ts.includes("from '@angular/core'")) {
    return false;
  }

  ts = ts.replace(
    /from '@angular\/core';/,
    `from '@angular/core';\n\nimport { PlaygroundPreviewHeaderComponent } from '../shared/playground-preview-header.component';\nimport {\n  injectPlaygroundA11yPreviewMode,\n  initPlaygroundA11yPreview,\n} from '../shared/playground-a11y-preview.utils';`,
  );

  if (!ts.includes('computed')) {
    ts = ts.replace(
      /import \{([^}]+)\} from '@angular\/core';/,
      (match, inner) => {
        if (inner.includes('computed')) return match;
        return `import {${inner}, computed } from '@angular/core';`;
      },
    );
  }

  ts = ts.replace(
    /imports:\s*\[/,
    'imports: [\n    PlaygroundPreviewHeaderComponent,',
  );

  ts = ts.replace(
    /export class (\w+) \{/,
    `export class $1 {\n  readonly previewOnly = injectPlaygroundA11yPreviewMode();\n  readonly a11yPreviewState = computed(() => ({} as Record<string, unknown>));\n\n  constructor() {\n    initPlaygroundA11yPreview('${componentId}', this.previewOnly);\n  }\n`,
  );

  fs.writeFileSync(filePath, ts);
  return true;
}

let htmlCount = 0;
let tsCount = 0;

for (const [fileName, componentId] of Object.entries(COMPONENT_IDS)) {
  const dir = fileName.replace('-playground.component', '');
  const folder = dir === 'alert' ? 'alerts' : dir;
  const htmlPath = path.join(playgroundRoot, folder, fileName.replace(/\.component$/, '.component.html'));
  const tsPath = path.join(playgroundRoot, folder, fileName.replace(/\.component$/, '.component.ts'));
  if (fs.existsSync(htmlPath) && patchHtml(htmlPath, componentId)) htmlCount++;
  if (fs.existsSync(tsPath) && patchTs(tsPath, componentId)) tsCount++;
}

console.log(`Patched ${htmlCount} HTML and ${tsCount} TS playground files.`);
