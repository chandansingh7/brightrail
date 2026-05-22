import {
  HUB_PREVIEW_FALLBACK_ICONS,
  HUB_PREVIEW_TABLE_ROWS,
  hubPreviewFallbackIcon,
  hubPreviewUsesFallbackIcon,
} from './variation-catalog-hub-preview-data';

describe('variation-catalog-hub-preview-data', () => {
  it('exposes a compact table slice for hub tiles', () => {
    expect(HUB_PREVIEW_TABLE_ROWS.length).toBe(2);
  });

  it('maps overlay-heavy routes to fallback icons', () => {
    expect(HUB_PREVIEW_FALLBACK_ICONS['app-shell']).toBe('list');
    expect(hubPreviewUsesFallbackIcon('modal')).toBe(true);
    expect(hubPreviewUsesFallbackIcon('button')).toBe(false);
  });

  it('returns a default icon for unknown routes', () => {
    expect(hubPreviewFallbackIcon('unknown-route')).toBe('more');
  });
});
