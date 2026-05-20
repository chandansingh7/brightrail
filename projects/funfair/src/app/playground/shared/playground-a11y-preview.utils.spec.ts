import { TestBed } from '@angular/core/testing';

import { PlaygroundThemeService } from '../playground-theme.service';
import { PlaygroundA11yPreviewService } from './playground-a11y-preview.service';
import { PLAYGROUND_A11Y_PREVIEW_MODE } from './playground-a11y-preview.token';
import { initPlaygroundA11yPreview } from './playground-a11y-preview.utils';

describe('playground-a11y-preview.utils', () => {
  it('restores theme and state in preview mode', () => {
    TestBed.configureTestingModule({
      providers: [{ provide: PLAYGROUND_A11Y_PREVIEW_MODE, useValue: true }],
    });

    TestBed.runInInjectionContext(() => {
      const preview = TestBed.inject(PlaygroundA11yPreviewService);
      const theme = TestBed.inject(PlaygroundThemeService);
      preview.open('button', 'dark', { label: 'Save' });

      let restored: unknown;
      initPlaygroundA11yPreview('button', true, (state) => {
        restored = state;
      });

      expect(theme.theme()).toBe('dark');
      expect(restored).toEqual({ label: 'Save' });
    });
  });
});
