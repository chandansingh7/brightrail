import { EnvironmentProviders, importProvidersFrom, makeEnvironmentProviders } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';

/**
 * One-line bootstrap for Brightrail's shared accessibility platform.
 *
 * Registers CDK {@link LiveAnnouncer}, {@link FocusMonitor}, and focus-trap
 * factories so every Brightrail component can rely on them without extra setup.
 *
 * @example
 * ```ts
 * export const appConfig: ApplicationConfig = {
 *   providers: [provideBrightrailPlatform(), ...],
 * };
 * ```
 */
export function provideBrightrailPlatform(): EnvironmentProviders {
  return makeEnvironmentProviders([importProvidersFrom(A11yModule)]);
}
