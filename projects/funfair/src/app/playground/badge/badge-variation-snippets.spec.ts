import {
  BADGE_DOC_SECTION_COUNT,
  BADGE_HTML_EXAMPLES,
  BADGE_VARIATION_SNIPPETS,
} from './badge-variation-snippets';

describe('badge-variation-snippets', () => {
  it('exports copy-ready snippets for core and enterprise patterns', () => {
    expect(BADGE_VARIATION_SNIPPETS.coreSoftNew).toContain('brightrail-badge');
    expect(BADGE_VARIATION_SNIPPETS.notifBell).toContain('bco-pill');
    expect(BADGE_VARIATION_SNIPPETS.enterpriseAvatarsOverflow).toContain('bco-avatars');
    expect(BADGE_VARIATION_SNIPPETS.advancedGroupedCounts).toContain('label="+4"');
  });

  it('documents nine reference sections in the mock', () => {
    expect(BADGE_DOC_SECTION_COUNT).toBe(9);
  });

  it('includes footer HTML examples', () => {
    expect(BADGE_HTML_EXAMPLES).toContain('brightrail-badge');
    expect(BADGE_HTML_EXAMPLES).toContain('icon="check"');
  });
});
