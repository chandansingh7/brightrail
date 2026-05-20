import {
  BRIGHTRAIL_BREAKPOINTS,
  BRIGHTRAIL_BREAKPOINT_ORDER,
  brightrailBreakpointsAreOrdered,
} from './brightrail-breakpoints.constants';

describe('brightrail-breakpoints.constants', () => {
  it('defines standard viewport tiers from phone through TV', () => {
    expect(BRIGHTRAIL_BREAKPOINTS.xs).toBe(520);
    expect(BRIGHTRAIL_BREAKPOINTS.sm).toBe(720);
    expect(BRIGHTRAIL_BREAKPOINTS.md).toBe(960);
    expect(BRIGHTRAIL_BREAKPOINTS.lg).toBe(1280);
    expect(BRIGHTRAIL_BREAKPOINTS.xl).toBe(1920);
  });

  it('lists breakpoints in ascending order', () => {
    expect(BRIGHTRAIL_BREAKPOINT_ORDER).toEqual(['xs', 'sm', 'md', 'lg', 'xl']);
    expect(brightrailBreakpointsAreOrdered()).toBeTrue();
  });
});
