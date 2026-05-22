import { computed, signal, type Signal } from '@angular/core';
import type { BrightrailFuturisticAppearance } from 'brightrail';

import type { PlaygroundFxShellId } from '../playground-theme.service';

/** Per-preview override: inherit site shell or force a shell on the host. */
export type PlaygroundPreviewFxId = 'inherit' | BrightrailFuturisticAppearance;

export const PLAYGROUND_PREVIEW_FX_OPTIONS: { id: PlaygroundPreviewFxId; label: string }[] = [
  { id: 'inherit', label: 'Inherit site shell' },
  { id: 'cyber', label: 'Cyber (this preview)' },
  { id: 'neon', label: 'Neon (this preview)' },
  { id: 'holo', label: 'Holo (this preview)' },
  { id: 'glass', label: 'Glass (this preview)' },
];

export const PLAYGROUND_SITE_FX_OPTIONS: { id: PlaygroundFxShellId; label: string }[] = [
  { id: 'none', label: 'None (default)' },
  { id: 'cyber', label: 'Cyber site' },
  { id: 'neon', label: 'Neon site' },
  { id: 'holo', label: 'Holo site' },
  { id: 'glass', label: 'Glass site' },
];

/** `null` = use site `data-br-fx` only; otherwise binds `[fxShell]` on the preview host. */
export function resolvePlaygroundPreviewFxShell(
  previewFx: PlaygroundPreviewFxId,
): BrightrailFuturisticAppearance | null {
  return previewFx === 'inherit' ? null : previewFx;
}

export function createPlaygroundPreviewFx(): {
  previewFx: ReturnType<typeof signal<PlaygroundPreviewFxId>>;
  resolvedFxShell: Signal<BrightrailFuturisticAppearance | null>;
} {
  const previewFx = signal<PlaygroundPreviewFxId>('inherit');
  const resolvedFxShell = computed(() => resolvePlaygroundPreviewFxShell(previewFx()));
  return { previewFx, resolvedFxShell };
}

export function fxShellSnippetAttr(
  previewFx: PlaygroundPreviewFxId,
): string {
  return previewFx === 'inherit' ? '' : ` fxShell="${previewFx}"`;
}

/** Injects `fxShell="…"` on the first `brightrail-*` host in generated HTML. */
export function injectFxShellIntoHtmlSnippet(
  html: string,
  previewFx: PlaygroundPreviewFxId,
): string {
  const attr = fxShellSnippetAttr(previewFx);
  if (!attr) {
    return html;
  }
  return html.replace(/<brightrail-[a-z0-9-]+/, (tag) => tag + attr);
}

/** Appends site-wide setup when preview inherits the shell from the document. */
export function appendFxShellToTsSnippet(
  ts: string,
  previewFx: PlaygroundPreviewFxId,
  siteFx: PlaygroundFxShellId,
): string {
  if (previewFx !== 'inherit' || siteFx === 'none') {
    return ts;
  }
  return `${ts}${buildFxShellSiteTsBlock(siteFx)}`;
}

export function buildFxShellSiteTsBlock(siteFx: PlaygroundFxShellId): string {
  return [
    '',
    '// Site-wide futuristic shell (all Brightrail components)',
    "import { provideBrightrailFuturisticAppearance } from 'brightrail';",
    '',
    '// app.config.ts',
    'export const appConfig: ApplicationConfig = {',
    '  providers: [',
    `    provideBrightrailFuturisticAppearance('${siteFx}'),`,
    '    // ...other providers',
    '  ],',
    '};',
    '',
    `// Alternative: document.documentElement.setAttribute('data-br-fx', '${siteFx}');`,
  ].join('\n');
}

/** Shorthand for playground `buildHtml()` return values. */
export function playgroundFxHtml(html: string, previewFx: PlaygroundPreviewFxId): string {
  return injectFxShellIntoHtmlSnippet(html, previewFx);
}

/** Shorthand for playground `buildTs()` / `tsSnippet` values. */
export function playgroundFxTs(
  ts: string,
  previewFx: PlaygroundPreviewFxId,
  siteFx: PlaygroundFxShellId,
): string {
  return appendFxShellToTsSnippet(ts, previewFx, siteFx);
}
