/**
 * Semantic accessibility rules enforced in CI.
 * Color contrast is audited separately — many previews still fail WCAG AA contrast today.
 */
export const AXE_CI_TAGS = ['wcag2a', 'wcag21a', 'best-practice'] as const;

/** Tracked in `e2e/a11y-contrast.spec.ts` until token contrast is tightened library-wide. */
export const AXE_CI_DISABLED_RULES = ['color-contrast'] as const;
