import {
  STEPPER_DOC_SECTION_COUNT,
  STEPPER_HTML_EXAMPLES,
  STEPPER_VARIATION_SNIPPETS,
} from './stepper-variation-snippets';

describe('stepper-variation-snippets', () => {
  it('exports copy-ready snippets for core and workflow patterns', () => {
    expect(STEPPER_VARIATION_SNIPPETS.coreLinear).toContain('brightrail-stepper');
    expect(STEPPER_VARIATION_SNIPPETS.workflowCheckout).toContain('stepStyle="progress"');
    expect(STEPPER_VARIATION_SNIPPETS.futuristicMinimalLine).toContain('connectorGap="0"');
  });

  it('documents nine reference sections', () => {
    expect(STEPPER_DOC_SECTION_COUNT).toBe(9);
  });

  it('includes footer HTML examples', () => {
    expect(STEPPER_HTML_EXAMPLES).toContain('brightrail-stepper');
    expect(STEPPER_HTML_EXAMPLES).toContain('ariaLabel="Checkout"');
  });
});
