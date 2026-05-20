import {
  LIBRARY_ASSESSMENT_STATS,
  LIBRARY_CON,
  LIBRARY_MISSING,
  LIBRARY_MISSING_CONCEPT,
  LIBRARY_MISSING_PRODUCTION,
  LIBRARY_PRO,
  LIBRARY_RATINGS,
  LIBRARY_ROADMAP,
  LIBRARY_SHIPPED_AREAS,
} from './library-assessment.content';

describe('library-assessment.content', () => {
  it('defines ratings, pro, and con', () => {
    expect(LIBRARY_RATINGS.length).toBeGreaterThanOrEqual(2);
    expect(LIBRARY_PRO.title.length).toBeGreaterThan(0);
    expect(LIBRARY_PRO.items.length).toBeGreaterThan(0);
    expect(LIBRARY_CON.title).toContain('Platform tooling and governance');
    expect(LIBRARY_CON.items.length).toBeGreaterThan(0);
  });

  it('lists shipped areas with playground links', () => {
    expect(LIBRARY_SHIPPED_AREAS.some((s) => s.category === 'Actions')).toBe(true);
    expect(LIBRARY_SHIPPED_AREAS.some((s) => s.links.some((l) => l.path === 'menu'))).toBe(true);
    expect(LIBRARY_SHIPPED_AREAS.some((s) => s.links.some((l) => l.path === 'tree'))).toBe(true);
  });

  it('splits production gaps from concept showcases', () => {
    expect(LIBRARY_MISSING_PRODUCTION.some((m) => m.name.includes('Rich text'))).toBe(true);
    expect(LIBRARY_MISSING_PRODUCTION.some((m) => m.name.includes('Skeleton'))).toBe(false);
    expect(LIBRARY_MISSING_CONCEPT.some((m) => m.name.includes('Holographic'))).toBe(true);
    expect(LIBRARY_MISSING_CONCEPT.some((m) => m.name.includes('Neural network'))).toBe(true);
    expect(LIBRARY_MISSING_CONCEPT.every((m) => m.showcaseRoute)).toBe(true);
    expect(LIBRARY_MISSING.length).toBe(LIBRARY_MISSING_PRODUCTION.length + LIBRARY_MISSING_CONCEPT.length);
  });

  it('includes stats and a roadmap with completed items', () => {
    expect(LIBRARY_ASSESSMENT_STATS.exportCount).toBeGreaterThan(0);
    expect(LIBRARY_ASSESSMENT_STATS.playgroundCount).toBeGreaterThanOrEqual(30);
    expect(LIBRARY_ROADMAP.some((step) => step.status === 'done')).toBe(true);
    expect(LIBRARY_ROADMAP.some((step) => step.label.includes('Tree-table') && step.status === 'planned')).toBe(
      true,
    );
  });
});
