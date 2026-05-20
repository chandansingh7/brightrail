import {
  AVATAR_DOC_SECTION_COUNT,
  AVATAR_HTML_EXAMPLES,
  AVATAR_VARIATION_SNIPPETS,
} from './avatar-variation-snippets';

describe('avatar-variation-snippets', () => {
  it('exports copy-ready snippets for every doc section category', () => {
    expect(AVATAR_VARIATION_SNIPPETS.imageCore).toContain('brightrail-avatar');
    expect(AVATAR_VARIATION_SNIPPETS.groupPhotosOverflow2).toContain('brightrail-avatar-group');
    expect(AVATAR_VARIATION_SNIPPETS.profileCardHorizontal).toContain('Olivia Rhye');
    expect(AVATAR_VARIATION_SNIPPETS.profileCardCentered).toContain('[showProfileMeta]="true"');
    expect(AVATAR_VARIATION_SNIPPETS.variantNeon).toContain('variant="neon"');
  });

  it('documents nine reference sections in the mock', () => {
    expect(AVATAR_DOC_SECTION_COUNT).toBe(9);
  });

  it('includes footer HTML examples from the reference mock', () => {
    expect(AVATAR_HTML_EXAMPLES).toContain('brightrail-avatar');
    expect(AVATAR_HTML_EXAMPLES).toContain('brightrail-avatar-group');
    expect(AVATAR_HTML_EXAMPLES).toContain('maxVisible="3"');
  });
});
