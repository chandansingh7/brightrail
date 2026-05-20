import { inject } from '@angular/core';

import { PlaygroundThemeService } from '../playground-theme.service';
import { PlaygroundA11yPreviewService } from './playground-a11y-preview.service';
import { PLAYGROUND_A11Y_PREVIEW_MODE } from './playground-a11y-preview.token';

export function injectPlaygroundA11yPreviewMode(): boolean {
  return inject(PLAYGROUND_A11Y_PREVIEW_MODE, { optional: true }) ?? false;
}

/** Restore theme + optional playground state when opened on the a11y preview route. */
export function initPlaygroundA11yPreview(
  componentId: string,
  previewOnly: boolean,
  restoreState?: (state: unknown) => void,
): void {
  if (!previewOnly) {
    return;
  }
  const preview = inject(PlaygroundA11yPreviewService);
  const theme = inject(PlaygroundThemeService);
  const payload = preview.consume(componentId);
  if (payload?.theme) {
    theme.setTheme(payload.theme);
  }
  if (payload?.state != null && restoreState) {
    restoreState(payload.state);
  }
}
