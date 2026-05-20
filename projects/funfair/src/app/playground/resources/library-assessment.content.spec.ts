import {
  LIBRARY_CON,
  LIBRARY_MISSING,
  LIBRARY_PRO,
  LIBRARY_RATINGS,
  LIBRARY_ROADMAP,
  LIBRARY_SHIPPED_AREAS,
} from './library-assessment.content';

describe('library-assessment.content', () => {
  it('defines ratings, pro, and con', () => {
    expect(LIBRARY_RATINGS.length).toBeGreaterThanOrEqual(2);
    expect(LIBRARY_PRO.title.length).toBeGreaterThan(0);
    expect(LIBRARY_CON.title.length).toBeGreaterThan(0);
  });

  it('lists shipped areas and components still on the roadmap', () => {
    expect(LIBRARY_SHIPPED_AREAS.some((s) => s.toLowerCase().includes('menu'))).toBe(true);
    expect(LIBRARY_SHIPPED_AREAS.some((s) => s.toLowerCase().includes('tree'))).toBe(true);
    expect(LIBRARY_MISSING.some((m) => m.name.includes('Rich text'))).toBe(true);
    expect(LIBRARY_MISSING.some((m) => m.name.includes('Skeleton'))).toBe(false);
    expect(LIBRARY_MISSING.some((m) => m.name.includes('Holographic'))).toBe(true);
    expect(LIBRARY_MISSING.some((m) => m.name.includes('Neural network'))).toBe(true);
  });

  it('includes a practical roadmap', () => {
    expect(LIBRARY_ROADMAP.length).toBeGreaterThanOrEqual(4);
    expect(LIBRARY_ROADMAP[0]).toContain('Tree-table');
  });
});
