import {
  LIBRARY_ASSESSMENT_STATS,
  LIBRARY_CON,
  LIBRARY_MATURITY_HIGHLIGHTS,
  LIBRARY_RESOLVED_GAPS,
  LIBRARY_MISSING,
  LIBRARY_CONCEPT_SHIPPED,
  LIBRARY_MISSING_CONCEPT,
  LIBRARY_MISSING_PRODUCTION,
  LIBRARY_PRODUCTION_SHIPPED,
  LIBRARY_PRO,
  LIBRARY_RATINGS,
  LIBRARY_ROADMAP,
  LIBRARY_SHIPPED_AREAS,
} from './library-assessment.content';

describe('library-assessment.content', () => {
  it('defines ratings, pro, and resolved gaps', () => {
    expect(LIBRARY_RATINGS.length).toBeGreaterThanOrEqual(2);
    expect(LIBRARY_PRO.title.length).toBeGreaterThan(0);
    expect(LIBRARY_PRO.items.length).toBeGreaterThanOrEqual(10);
    expect(LIBRARY_CON.items.length).toBe(0);
    expect(LIBRARY_RESOLVED_GAPS.length).toBeGreaterThanOrEqual(4);
    expect(LIBRARY_ASSESSMENT_STATS.platformCoveragePercent).toBe(100);
    expect(LIBRARY_ASSESSMENT_STATS.ciGatesPercent).toBe(100);
  });

  it('lists shipped areas with playground links', () => {
    expect(LIBRARY_SHIPPED_AREAS.some((s) => s.category === 'Actions')).toBe(true);
    expect(LIBRARY_SHIPPED_AREAS.some((s) => s.links.some((l) => l.path === 'menu'))).toBe(true);
    expect(LIBRARY_SHIPPED_AREAS.some((s) => s.links.some((l) => l.path === 'tree'))).toBe(true);
    expect(LIBRARY_SHIPPED_AREAS.some((s) => s.category === 'Overlays' && s.links.some((l) => l.path === 'popover'))).toBe(
      true,
    );
  });

  it('defines maturity highlights for the scorecard', () => {
    expect(LIBRARY_MATURITY_HIGHLIGHTS.length).toBe(5);
    expect(LIBRARY_MATURITY_HIGHLIGHTS.some((h) => h.label.includes('Production'))).toBe(true);
    expect(LIBRARY_MATURITY_HIGHLIGHTS.some((h) => h.label.includes('Concept'))).toBe(true);
  });

  it('ships all production workflow components', () => {
    expect(LIBRARY_MISSING_PRODUCTION.length).toBe(0);
    expect(LIBRARY_PRODUCTION_SHIPPED.length).toBe(4);
    expect(LIBRARY_PRODUCTION_SHIPPED.every((m) => m.showcaseRoute)).toBe(true);
    expect(LIBRARY_ASSESSMENT_STATS.productionGapsPercent).toBe(100);
  });

  it('ships all concept showcase components', () => {
    expect(LIBRARY_MISSING_CONCEPT.length).toBe(0);
    expect(LIBRARY_CONCEPT_SHIPPED.length).toBe(4);
    expect(LIBRARY_CONCEPT_SHIPPED.every((m) => m.showcaseRoute)).toBe(true);
    expect(LIBRARY_ASSESSMENT_STATS.conceptGapsPercent).toBe(100);
    expect(LIBRARY_SHIPPED_AREAS.some((s) => s.category === 'Futuristic / concept')).toBe(true);
  });

  it('splits production gaps from concept showcases', () => {
    expect(LIBRARY_MISSING_PRODUCTION.some((m) => m.name.includes('Rich text'))).toBe(false);
    expect(LIBRARY_MISSING.length).toBe(0);
  });

  it('includes stats and a roadmap with completed items', () => {
    expect(LIBRARY_ASSESSMENT_STATS.exportCount).toBeGreaterThan(0);
    expect(LIBRARY_ASSESSMENT_STATS.playgroundCount).toBeGreaterThanOrEqual(30);
    expect(LIBRARY_ASSESSMENT_STATS.variationCatalogCount).toBe(46);
    expect(LIBRARY_ROADMAP.some((step) => step.status === 'done')).toBe(true);
    expect(
      LIBRARY_ROADMAP.some((step) => step.label.includes('Production workflow') && step.status === 'done'),
    ).toBe(true);
    expect(
      LIBRARY_ROADMAP.some((step) => step.label.includes('Concept showcase') && step.status === 'done'),
    ).toBe(true);
    expect(LIBRARY_ROADMAP.some((step) => step.label.includes('Rich text editor') && step.status === 'planned')).toBe(
      false,
    );
  });
});
