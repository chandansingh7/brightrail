import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

import { PLAYGROUND_A11Y_PREVIEW_IDS } from '../projects/funfair/src/app/playground/shared/playground-a11y-preview.ids';
import {
  A11Y_PREVIEW_READY_SELECTOR,
  A11Y_PREVIEW_SCAN_ROOT,
  buildA11yPreviewUrl,
  formatAxeViolationReport,
  summarizeAxeViolations,
} from '../projects/funfair/src/app/playground/shared/playground-a11y-preview.e2e.utils';
import { prepareA11yPreview } from './support/a11y-preview.setup';

/**
 * WCAG color-contrast audit — report-only for now.
 * Failures are visible in CI logs but do not block merges until contrast tokens are tightened.
 */
test.describe('color contrast audit (report-only)', () => {
  test.describe.configure({ mode: 'parallel' });

  for (const componentId of PLAYGROUND_A11Y_PREVIEW_IDS) {
    test(`contrast audit — ${componentId}`, async ({ page, baseURL }) => {
      const url = buildA11yPreviewUrl(baseURL ?? 'http://127.0.0.1:4321', componentId);
      await page.goto(url);
      await page.waitForSelector(A11Y_PREVIEW_READY_SELECTOR, { state: 'attached', timeout: 30_000 });
      await prepareA11yPreview(page, componentId);

      const results = await new AxeBuilder({ page })
        .include(A11Y_PREVIEW_SCAN_ROOT)
        .withRules(['color-contrast'])
        .analyze();

      const summaries = summarizeAxeViolations(results.violations);
      if (summaries.length > 0) {
        test.info().annotations.push({
          type: 'contrast-debt',
          description: formatAxeViolationReport(componentId, summaries),
        });
      }

      expect.soft(
        summaries,
        formatAxeViolationReport(componentId, summaries),
      ).toEqual([]);
    });
  }
});
