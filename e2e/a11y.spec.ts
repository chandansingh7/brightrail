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
import { AXE_CI_DISABLED_RULES, AXE_CI_TAGS } from './support/axe-gate.config';

for (const componentId of PLAYGROUND_A11Y_PREVIEW_IDS) {
  test(`a11y preview passes axe (semantic) — ${componentId}`, async ({ page, baseURL }) => {
    const url = buildA11yPreviewUrl(baseURL ?? 'http://127.0.0.1:4321', componentId);
    await page.goto(url);
    await page.waitForSelector(A11Y_PREVIEW_READY_SELECTOR, { state: 'attached', timeout: 30_000 });
    await prepareA11yPreview(page, componentId);

    const results = await new AxeBuilder({ page })
      .include(A11Y_PREVIEW_SCAN_ROOT)
      .withTags([...AXE_CI_TAGS])
      .disableRules([...AXE_CI_DISABLED_RULES])
      .analyze();

    const summaries = summarizeAxeViolations(results.violations);
    expect(
      summaries,
      formatAxeViolationReport(componentId, summaries),
    ).toEqual([]);
  });
}
