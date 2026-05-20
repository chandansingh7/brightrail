import {
  CARD_DOC_SECTION_COUNT,
  CARD_HTML_EXAMPLES,
  CARD_VARIATION_SNIPPETS,
} from './card-variation-snippets';
import { CARD_PLAYGROUND_DEMO_IMAGES } from './card-playground.component';

describe('card-variation-snippets', () => {
  it('exports copy-ready snippets for core appearances and layouts', () => {
    expect(CARD_VARIATION_SNIPPETS.coreBasic).toContain('brightrail-card');
    expect(CARD_VARIATION_SNIPPETS.coreElevated).toContain('appearance="elevated"');
    expect(CARD_VARIATION_SNIPPETS.layoutHorizontal).toContain(CARD_PLAYGROUND_DEMO_IMAGES.horizontalThumb);
    expect(CARD_VARIATION_SNIPPETS.layoutImage).toContain(CARD_PLAYGROUND_DEMO_IMAGES.imageLeadHero);
    expect(CARD_VARIATION_SNIPPETS.layoutStats).toContain('br-card-stat-value');
  });

  it('documents six reference sections', () => {
    expect(CARD_DOC_SECTION_COUNT).toBe(6);
  });

  it('includes footer HTML examples', () => {
    expect(CARD_HTML_EXAMPLES).toContain('brightrail-card');
    expect(CARD_HTML_EXAMPLES).toContain('brightrailCardHeaderTitle');
    expect(CARD_HTML_EXAMPLES).toContain(CARD_PLAYGROUND_DEMO_IMAGES.horizontalThumb);
  });
});
