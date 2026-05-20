import {
  buildA11yPreviewUrl,
  formatAxeViolationReport,
  summarizeAxeViolations,
} from './playground-a11y-preview.e2e.utils';

describe('playground-a11y-preview.e2e.utils', () => {
  it('buildA11yPreviewUrl normalizes base and encodes component id', () => {
    expect(buildA11yPreviewUrl('http://localhost:4321/', 'button')).toBe(
      'http://localhost:4321/#/a11y-preview/button',
    );
    expect(buildA11yPreviewUrl('http://localhost:4321', 'date-picker')).toBe(
      'http://localhost:4321/#/a11y-preview/date-picker',
    );
  });

  it('summarizeAxeViolations counts nodes per rule', () => {
    const summaries = summarizeAxeViolations([
      {
        id: 'button-name',
        impact: 'critical',
        description: 'Buttons must have discernible text',
        nodes: [{}, {}],
      },
    ]);
    expect(summaries).toEqual([
      {
        id: 'button-name',
        impact: 'critical',
        description: 'Buttons must have discernible text',
        nodes: 2,
      },
    ]);
  });

  it('formatAxeViolationReport renders a readable multi-line message', () => {
    const report = formatAxeViolationReport('button', [
      {
        id: 'button-name',
        impact: 'critical',
        description: 'Buttons must have discernible text',
        nodes: 1,
      },
    ]);
    expect(report).toContain('Accessibility violations on “button”');
    expect(report).toContain('button-name');
  });

  it('formatAxeViolationReport returns empty string when clean', () => {
    expect(formatAxeViolationReport('button', [])).toBe('');
  });
});
