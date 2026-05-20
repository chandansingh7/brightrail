import type { Page } from '@playwright/test';

import { A11Y_PREVIEW_SCAN_ROOT } from '../../projects/funfair/src/app/playground/shared/playground-a11y-preview.e2e.utils';

/** Opens overlays or interactive states needed before scanning a preview. */
export async function prepareA11yPreview(page: Page, componentId: string): Promise<void> {
  switch (componentId) {
    case 'modal': {
      const open = page.getByRole('button', { name: /^open modal$/i });
      if (await open.isVisible().catch(() => false)) {
        await open.click();
        await page.getByRole('dialog').waitFor({ state: 'visible', timeout: 10_000 });
      }
      break;
    }
    case 'drawer': {
      const open = page.getByRole('button', { name: /^open drawer$/i });
      if (await open.isVisible().catch(() => false)) {
        await open.click();
      }
      break;
    }
    case 'command-palette': {
      // Default playground state keeps the palette open; only click when it is closed.
      const dialog = page.getByRole('dialog');
      if (!(await dialog.isVisible().catch(() => false))) {
        const open = page.getByRole('button', { name: /^open command palette$/i });
        if (await open.isVisible().catch(() => false)) {
          await open.click({ force: true });
        }
      }
      break;
    }
    case 'tooltip': {
      const trigger = page.locator('.bp--a11y-preview-only [brightrailTooltip], .bp--a11y-preview-only [data-brightrail-tooltip]').first();
      if (await trigger.count()) {
        await trigger.focus();
      }
      break;
    }
    default:
      break;
  }

  await page.locator(A11Y_PREVIEW_SCAN_ROOT).waitFor({ state: 'attached', timeout: 30_000 });
}
