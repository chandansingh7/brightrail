import { PLAYGROUND_A11Y_PREVIEW_LOADERS } from './playground-a11y-preview.registry';
import { PLAYGROUND_A11Y_PREVIEW_IDS } from './playground-a11y-preview.ids';

describe('playground-a11y-preview.ids', () => {
  it('lists every registered a11y preview loader', () => {
    const registryIds = Object.keys(PLAYGROUND_A11Y_PREVIEW_LOADERS).sort();
    expect([...PLAYGROUND_A11Y_PREVIEW_IDS]).toEqual(registryIds);
  });

  it('includes core interactive components used in CI gates', () => {
    expect(PLAYGROUND_A11Y_PREVIEW_IDS).toContain('button');
    expect(PLAYGROUND_A11Y_PREVIEW_IDS).toContain('modal');
    expect(PLAYGROUND_A11Y_PREVIEW_IDS).toContain('select');
  });
});
