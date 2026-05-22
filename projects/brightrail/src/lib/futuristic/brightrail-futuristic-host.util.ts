import { BrightrailFuturisticAppearance } from './brightrail-futuristic-appearance.types';

export function resolveFuturisticAppearance(
  explicit: BrightrailFuturisticAppearance | null | undefined,
  defaults: BrightrailFuturisticAppearance | null | undefined,
): BrightrailFuturisticAppearance | null {
  return explicit ?? defaults ?? null;
}

export function futuristicAppearanceHostClass(
  appearance: BrightrailFuturisticAppearance | null | undefined,
): string {
  return appearance ? `br-fx--${appearance}` : '';
}
