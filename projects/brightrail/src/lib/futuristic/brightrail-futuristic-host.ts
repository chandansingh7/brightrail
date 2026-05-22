import { BrightrailFxShellDirective } from './brightrail-fx-shell.directive';

/** Static host-directive config for Angular `hostDirectives` (must be compile-time constant). */
export const BRIGHTRAIL_FX_SHELL_HOST = {
  directive: BrightrailFxShellDirective,
  inputs: ['fxShell'],
};

/** @deprecated Use {@link BRIGHTRAIL_FX_SHELL_HOST} in `hostDirectives`. */
export const withBrightrailFxShell = (): typeof BRIGHTRAIL_FX_SHELL_HOST => BRIGHTRAIL_FX_SHELL_HOST;
