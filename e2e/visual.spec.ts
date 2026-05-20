import { expect, test } from '@playwright/test';

import { PLAYGROUND_A11Y_PREVIEW_IDS } from '../projects/funfair/src/app/playground/shared/playground-a11y-preview.ids';
import {
  A11Y_PREVIEW_READY_SELECTOR,
  A11Y_PREVIEW_SCAN_ROOT,
  buildA11yPreviewUrl,
} from '../projects/funfair/src/app/playground/shared/playground-a11y-preview.e2e.utils';
import { prepareA11yPreview } from './support/a11y-preview.setup';

for (const componentId of PLAYGROUND_A11Y_PREVIEW_IDS) {
  test(`visual baseline — ${componentId}`, async ({ page, baseURL }) => {
    const url = buildA11yPreviewUrl(baseURL ?? 'http://127.0.0.1:4321', componentId);
    await page.goto(url);
    await page.waitForSelector(A11Y_PREVIEW_READY_SELECTOR, { state: 'attached', timeout: 30_000 });
    await prepareA11yPreview(page, componentId);

    const preview = page.locator(A11Y_PREVIEW_SCAN_ROOT);
    await expect(preview).toBeAttached({ timeout: 30_000 });
    await expect(preview).toHaveScreenshot(`${componentId}.png`, {
      mask: [page.locator('.bp-preview-caption')],
    });
  });
}
