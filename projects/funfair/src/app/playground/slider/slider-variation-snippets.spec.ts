import {
  SLIDER_DOC_SECTION_COUNT,
  SLIDER_HTML_EXAMPLES,
  SLIDER_VARIATION_SNIPPETS,
} from './slider-variation-snippets';

describe('slider-variation-snippets', () => {
  it('exports copy-ready snippets for core types and ranges', () => {
    expect(SLIDER_VARIATION_SNIPPETS.coreWithValue).toContain('[showValue]="true"');
    expect(SLIDER_VARIATION_SNIPPETS.rangeTemperature).toContain('[min]="16"');
    expect(SLIDER_VARIATION_SNIPPETS.formNgModel).toContain('[(ngModel)]');
  });

  it('exports futuristic shell snippets', () => {
    expect(SLIDER_VARIATION_SNIPPETS.futuristicNeon).toContain('ff-future-shell--neon');
    expect(SLIDER_VARIATION_SNIPPETS.futuristicHolo).toContain('tone="success"');
  });

  it('documents seven reference sections', () => {
    expect(SLIDER_DOC_SECTION_COUNT).toBe(7);
  });

  it('includes footer HTML examples', () => {
    expect(SLIDER_HTML_EXAMPLES).toContain('brightrail-slider');
    expect(SLIDER_HTML_EXAMPLES).toContain('[showValue]="true"');
    expect(SLIDER_HTML_EXAMPLES).toContain('[disabled]="true"');
  });
});
