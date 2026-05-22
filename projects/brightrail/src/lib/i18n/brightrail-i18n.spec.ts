import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { BRIGHTRAIL_I18N, resolveBrightrailI18n } from './brightrail-i18n';
import { provideBrightrailI18n } from './brightrail-i18n.providers';

describe('provideBrightrailI18n', () => {
  it('resolves defaults', () => {
    expect(resolveBrightrailI18n()).toEqual({ locale: 'en', direction: 'ltr' });
    expect(resolveBrightrailI18n({ locale: 'ar', direction: 'rtl' })).toEqual({
      locale: 'ar',
      direction: 'rtl',
    });
  });

  it('applies lang, dir, and rtl body class at bootstrap', () => {
    TestBed.configureTestingModule({
      providers: [provideBrightrailI18n({ locale: 'ar', direction: 'rtl' })],
    });
    TestBed.inject(BRIGHTRAIL_I18N);
    const doc = TestBed.inject(DOCUMENT);
    expect(doc.documentElement.lang).toBe('ar');
    expect(doc.documentElement.dir).toBe('rtl');
    expect(doc.body.classList.contains('brightrail-root--rtl')).toBe(true);
  });
});
