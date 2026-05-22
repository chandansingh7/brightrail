import {
  appendFxShellToTsSnippet,
  fxShellSnippetAttr,
  injectFxShellIntoHtmlSnippet,
  resolvePlaygroundPreviewFxShell,
} from './playground-fx.util';

describe('playground-fx.util', () => {
  it('resolvePlaygroundPreviewFxShell returns null for inherit', () => {
    expect(resolvePlaygroundPreviewFxShell('inherit')).toBeNull();
  });

  it('resolvePlaygroundPreviewFxShell returns appearance for explicit shell', () => {
    expect(resolvePlaygroundPreviewFxShell('neon')).toBe('neon');
  });

  it('fxShellSnippetAttr omits attribute when inheriting', () => {
    expect(fxShellSnippetAttr('inherit')).toBe('');
  });

  it('fxShellSnippetAttr includes fxShell when set', () => {
    expect(fxShellSnippetAttr('glass')).toBe(' fxShell="glass"');
  });

  it('injectFxShellIntoHtmlSnippet adds attr on host tag', () => {
    const html = '<brightrail-button variant="primary">Save</brightrail-button>';
    expect(injectFxShellIntoHtmlSnippet(html, 'neon')).toContain(
      '<brightrail-button fxShell="neon"',
    );
  });

  it('appendFxShellToTsSnippet adds site provider when inheriting site shell', () => {
    const ts = 'export class Demo {}';
    const out = appendFxShellToTsSnippet(ts, 'inherit', 'cyber');
    expect(out).toContain("provideBrightrailFuturisticAppearance('cyber')");
  });

  it('appendFxShellToTsSnippet skips when preview sets fxShell on host', () => {
    const ts = 'export class Demo {}';
    expect(appendFxShellToTsSnippet(ts, 'holo', 'cyber')).toBe(ts);
  });
});
