import { InjectionToken } from '@angular/core';

export type BrightrailDirection = 'ltr' | 'rtl';

export type BrightrailLocale = string;

export interface BrightrailI18nConfig {
  readonly locale?: BrightrailLocale;
  readonly direction?: BrightrailDirection;
}

export const BRIGHTRAIL_I18N = new InjectionToken<BrightrailI18nConfig>('BRIGHTRAIL_I18N', {
  factory: () => ({ locale: 'en', direction: 'ltr' }),
});

export const BRIGHTRAIL_I18N_DEFAULTS: Required<BrightrailI18nConfig> = {
  locale: 'en',
  direction: 'ltr',
};

export function resolveBrightrailI18n(
  config: BrightrailI18nConfig = {},
): Required<BrightrailI18nConfig> {
  return {
    locale: config.locale ?? BRIGHTRAIL_I18N_DEFAULTS.locale,
    direction: config.direction ?? BRIGHTRAIL_I18N_DEFAULTS.direction,
  };
}
