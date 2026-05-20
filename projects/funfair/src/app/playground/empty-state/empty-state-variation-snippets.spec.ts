import {
  EMPTY_STATE_DOC_SECTION_COUNT,
  EMPTY_STATE_HTML_EXAMPLES,
  EMPTY_STATE_VARIATION_SNIPPETS,
} from './empty-state-variation-snippets';

describe('empty-state-variation-snippets', () => {
  it('exports copy-ready snippets for slots and patterns', () => {
    expect(EMPTY_STATE_VARIATION_SNIPPETS.coreDefault).toContain('brightrail-empty-state');
    expect(EMPTY_STATE_VARIATION_SNIPPETS.iconInbox).toContain('brightrailEmptyStateIcon');
    expect(EMPTY_STATE_VARIATION_SNIPPETS.actionPrimary).toContain('brightrailEmptyStateAction');
    expect(EMPTY_STATE_VARIATION_SNIPPETS.fullSearch).toContain('Clear filters');
  });

  it('documents seven reference sections in the mock', () => {
    expect(EMPTY_STATE_DOC_SECTION_COUNT).toBe(7);
    expect(EMPTY_STATE_VARIATION_SNIPPETS.futuristicCyber).toContain('ff-future-shell--cyber');
  });

  it('includes footer HTML examples', () => {
    expect(EMPTY_STATE_HTML_EXAMPLES).toContain('brightrail-empty-state');
    expect(EMPTY_STATE_HTML_EXAMPLES).toContain('brightrailEmptyStateAction');
  });
});
