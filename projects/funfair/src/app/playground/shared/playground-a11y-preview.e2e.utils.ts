/** Selector set when an a11y preview playground finishes loading. */
export const A11Y_PREVIEW_READY_SELECTOR = '[data-brightrail-a11y-preview-ready="true"]';

/** DOM root for axe scans and screenshots — excludes hidden playground settings chrome. */
export const A11Y_PREVIEW_SCAN_ROOT = '.bp--a11y-preview-only .bp-panel--preview';

/** Builds the hash-routed Funfair URL for an isolated component a11y preview. */
export function buildA11yPreviewUrl(baseUrl: string, componentId: string): string {
  const normalized = baseUrl.replace(/\/$/, '');
  return `${normalized}/#/a11y-preview/${encodeURIComponent(componentId)}`;
}

export interface AxeViolationSummary {
  readonly id: string;
  readonly impact: string | null | undefined;
  readonly description: string;
  readonly nodes: number;
}

/** Normalizes axe violations into a compact, CI-friendly summary. */
export function summarizeAxeViolations(
  violations: ReadonlyArray<{
    id: string;
    impact?: string | null;
    description: string;
    nodes: ReadonlyArray<unknown>;
  }>,
): readonly AxeViolationSummary[] {
  return violations.map((violation) => ({
    id: violation.id,
    impact: violation.impact,
    description: violation.description,
    nodes: violation.nodes.length,
  }));
}

/** Formats axe summaries for assertion error output. */
export function formatAxeViolationReport(
  componentId: string,
  summaries: readonly AxeViolationSummary[],
): string {
  if (summaries.length === 0) {
    return '';
  }

  const lines = summaries.map(
    (item) =>
      `  • [${item.impact ?? 'unknown'}] ${item.id} (${item.nodes} node(s)): ${item.description}`,
  );
  return [`Accessibility violations on “${componentId}”:`, ...lines].join('\n');
}

/**
 * Documented axe rule ids that currently fail on a11y-preview routes.
 * CI fails on new violations or when fixed debt is not removed from this map.
 */
export const A11Y_KNOWN_DEBT: Readonly<Record<string, readonly string[]>> = {
  'app-shell': ['landmark-complementary-is-top-level', 'landmark-main-is-top-level'],
  'command-palette': ['aria-input-field-name'],
  drawer: ['aria-allowed-role', 'aria-dialog-name', 'label', 'select-name'],
  modal: ['aria-prohibited-attr', 'button-name'],
  'text-field': ['label'],
  timeline: ['list', 'listitem'],
};

export function filterUnexpectedViolations(
  componentId: string,
  summaries: readonly AxeViolationSummary[],
): readonly AxeViolationSummary[] {
  const known = new Set(A11Y_KNOWN_DEBT[componentId] ?? []);
  return summaries.filter((item) => !known.has(item.id));
}

export function findStaleDebt(
  componentId: string,
  summaries: readonly AxeViolationSummary[],
): readonly string[] {
  const known = A11Y_KNOWN_DEBT[componentId] ?? [];
  const current = new Set(summaries.map((item) => item.id));
  return known.filter((ruleId) => !current.has(ruleId));
}
