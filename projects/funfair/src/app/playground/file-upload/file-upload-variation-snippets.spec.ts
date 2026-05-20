import {
  FILE_UPLOAD_DOC_SECTION_COUNT,
  FILE_UPLOAD_HTML_EXAMPLES,
  FILE_UPLOAD_VARIATION_SNIPPETS,
} from './file-upload-variation-snippets';

describe('file-upload-variation-snippets', () => {
  it('exports copy-ready snippets for all ten catalog sections', () => {
    expect(FILE_UPLOAD_VARIATION_SNIPPETS.coreCompact).toContain('variant="compact"');
    expect(FILE_UPLOAD_VARIATION_SNIPPETS.singleFile).toContain('[fileItems]="singleFileItems"');
    expect(FILE_UPLOAD_VARIATION_SNIPPETS.enterpriseDocument).toContain('enterprisePattern="document-submission"');
    expect(FILE_UPLOAD_VARIATION_SNIPPETS.futuristicGlass).toContain('fu-future');
  });

  it('documents ten reference sections', () => {
    expect(FILE_UPLOAD_DOC_SECTION_COUNT).toBe(10);
  });

  it('includes footer HTML examples', () => {
    expect(FILE_UPLOAD_HTML_EXAMPLES).toContain('brightrail-file-upload');
    expect(FILE_UPLOAD_HTML_EXAMPLES).toContain('[fileItems]');
  });
});
