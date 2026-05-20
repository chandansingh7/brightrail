import {
  BRIGHTRAIL_RESPONSIVE_ADOPTION,
  brightrailAllComponentsResponsive,
  brightrailResponsiveAdoptionSummary,
} from './brightrail-responsive-adoption';

describe('brightrail-responsive-adoption', () => {
  it('lists responsive coverage for every shipped component stylesheet', () => {
    expect(BRIGHTRAIL_RESPONSIVE_ADOPTION.length).toBe(61);
    expect(BRIGHTRAIL_RESPONSIVE_ADOPTION.map((e) => e.component)).toContain('table');
    expect(BRIGHTRAIL_RESPONSIVE_ADOPTION.map((e) => e.component)).toContain('pagination');
    expect(BRIGHTRAIL_RESPONSIVE_ADOPTION.map((e) => e.component)).toContain('tooltip-portal');
  });

  it('reports full responsive coverage across breakpoint, fluid, and container strategies', () => {
    const summary = brightrailResponsiveAdoptionSummary();
    expect(summary.total).toBe(61);
    expect(summary.breakpoint).toBeGreaterThan(20);
    expect(summary.fluid).toBeGreaterThan(20);
    expect(summary.container).toBe(1);
    expect(summary.coveragePercent).toBe(100);
    expect(brightrailAllComponentsResponsive()).toBeTrue();
  });
});
