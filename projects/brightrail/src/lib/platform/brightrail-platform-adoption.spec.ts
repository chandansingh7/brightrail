import {
  BRIGHTRAIL_PLATFORM_ADOPTION,
  brightrailAllComponentsPlatformReady,
  brightrailPlatformAdoptionSummary,
} from './brightrail-platform-adoption';

describe('brightrail-platform-adoption', () => {
  it('lists platform adoption for every shipped component family', () => {
    const components = BRIGHTRAIL_PLATFORM_ADOPTION.map((e) => e.component);
    expect(components).toContain('modal');
    expect(components).toContain('accordion');
    expect(components).toContain('button');
    expect(components).toContain('select');
    expect(components).toContain('table');
    expect(BRIGHTRAIL_PLATFORM_ADOPTION.length).toBeGreaterThanOrEqual(40);
  });

  it('reports full platform coverage', () => {
    const summary = brightrailPlatformAdoptionSummary();
    expect(summary.cdkSurfaces).toBeGreaterThan(0);
    expect(summary.angularAriaAdopted).toBe(summary.total);
    expect(summary.coveragePercent).toBe(100);
    expect(brightrailAllComponentsPlatformReady()).toBeTrue();
  });
});
