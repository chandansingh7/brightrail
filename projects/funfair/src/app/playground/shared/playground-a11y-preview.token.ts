import { InjectionToken } from '@angular/core';

/** When true, the playground renders only the live preview canvas (a11y testing route). */
export const PLAYGROUND_A11Y_PREVIEW_MODE = new InjectionToken<boolean>('PLAYGROUND_A11Y_PREVIEW_MODE');
