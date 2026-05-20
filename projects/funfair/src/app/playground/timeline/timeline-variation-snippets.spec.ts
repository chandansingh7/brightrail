import {
  TIMELINE_DOC_SECTION_COUNT,
  TIMELINE_HTML_EXAMPLES,
  TIMELINE_VARIATION_SNIPPETS,
} from './timeline-variation-snippets';

describe('timeline-variation-snippets', () => {
  it('exports copy-ready snippets for timeline items and statuses', () => {
    expect(TIMELINE_VARIATION_SNIPPETS.coreWorkflow).toContain('brightrail-timeline');
    expect(TIMELINE_VARIATION_SNIPPETS.coreWorkflow).toContain('status="completed"');
    expect(TIMELINE_VARIATION_SNIPPETS.statusError).toContain('status="error"');
    expect(TIMELINE_VARIATION_SNIPPETS.auditTrail).toContain('ariaLabel="Audit trail"');
  });

  it('documents seven reference sections', () => {
    expect(TIMELINE_DOC_SECTION_COUNT).toBe(7);
    expect(TIMELINE_VARIATION_SNIPPETS.futuristicCyber).toContain('ff-future-shell--cyber');
  });

  it('includes footer HTML examples', () => {
    expect(TIMELINE_HTML_EXAMPLES).toContain('brightrail-timeline-item');
    expect(TIMELINE_HTML_EXAMPLES).toContain('status="pending"');
  });
});
