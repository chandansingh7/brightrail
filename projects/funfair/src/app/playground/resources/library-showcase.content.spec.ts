import {
  LIBRARY_SHOWCASE_EXPLORE,
  LIBRARY_SHOWCASE_PILLARS,
  LIBRARY_SHOWCASE_STEPS,
} from './library-showcase.content';

describe('library-showcase.content', () => {
  it('defines pillars, steps, and explore links', () => {
    expect(LIBRARY_SHOWCASE_PILLARS.length).toBe(3);
    expect(LIBRARY_SHOWCASE_STEPS.length).toBeGreaterThanOrEqual(4);
    expect(LIBRARY_SHOWCASE_EXPLORE.some((link) => link.path === 'button')).toBe(true);
    expect(LIBRARY_SHOWCASE_EXPLORE.some((link) => link.path.includes('library-assessment'))).toBe(true);
  });
});
