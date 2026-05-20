/**
 * Viewport breakpoint tiers — keep in sync with `_breakpoints.scss`.
 * Used for runtime checks, tests, and documentation.
 */
export const BRIGHTRAIL_BREAKPOINTS = {
  /** Phone portrait */
  xs: 520,
  /** Phone landscape / small tablet */
  sm: 720,
  /** Tablet / small laptop */
  md: 960,
  /** Desktop */
  lg: 1280,
  /** Large desktop / TV */
  xl: 1920,
} as const;

export type BrightrailBreakpointName = keyof typeof BRIGHTRAIL_BREAKPOINTS;

/** Ordered breakpoint names from smallest to largest. */
export const BRIGHTRAIL_BREAKPOINT_ORDER: readonly BrightrailBreakpointName[] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
];

/** Returns true when breakpoints are strictly ascending (sanity check for drift). */
export function brightrailBreakpointsAreOrdered(): boolean {
  for (let i = 1; i < BRIGHTRAIL_BREAKPOINT_ORDER.length; i++) {
    const prev = BRIGHTRAIL_BREAKPOINTS[BRIGHTRAIL_BREAKPOINT_ORDER[i - 1]!];
    const curr = BRIGHTRAIL_BREAKPOINTS[BRIGHTRAIL_BREAKPOINT_ORDER[i]!];
    if (curr <= prev) {
      return false;
    }
  }
  return true;
}
