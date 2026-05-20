import {
  APP_SHELL_DOC_SECTION_COUNT,
  APP_SHELL_HTML_EXAMPLES,
  APP_SHELL_VARIATION_SNIPPETS,
} from './app-shell-variation-snippets';

describe('app-shell-variation-snippets', () => {
  it('exports copy-ready snippets for shell layout regions', () => {
    expect(APP_SHELL_VARIATION_SNIPPETS.coreFull).toContain('brightrail-app-shell');
    expect(APP_SHELL_VARIATION_SNIPPETS.coreFull).toContain('brightrailTopBarStart');
    expect(APP_SHELL_VARIATION_SNIPPETS.sidebarRight).toContain('sidebarPosition="right"');
    expect(APP_SHELL_VARIATION_SNIPPETS.noSidebar).toContain('[showSidebar]="false"');
  });

  it('uses div for page header actions slot', () => {
    expect(APP_SHELL_VARIATION_SNIPPETS.coreFull).toContain('<div brightrailPageHeaderActions>');
    expect(APP_SHELL_VARIATION_SNIPPETS.coreFull).not.toContain('<motion');
  });

  it('documents six reference sections', () => {
    expect(APP_SHELL_DOC_SECTION_COUNT).toBe(7);
    expect(APP_SHELL_VARIATION_SNIPPETS.futuristicGlass).toContain('ff-future-shell--glass');
  });

  it('includes footer HTML examples', () => {
    expect(APP_SHELL_HTML_EXAMPLES).toContain('brightrail-page-header');
    expect(APP_SHELL_HTML_EXAMPLES).toContain('brightrailPageTitle');
  });
});
