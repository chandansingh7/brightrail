/** Site-wide futuristic chrome — cyber, neon, holo, or glass. */
export type BrightrailFuturisticAppearance = 'cyber' | 'neon' | 'holo' | 'glass';

export const BRIGHTRAIL_FUTURISTIC_APPEARANCES: readonly BrightrailFuturisticAppearance[] = [
  'cyber',
  'neon',
  'holo',
  'glass',
] as const;

export const BRIGHTRAIL_FUTURISTIC_APPEARANCE_LABELS: Record<BrightrailFuturisticAppearance, string> = {
  cyber: 'Cyber',
  neon: 'Neon',
  holo: 'Holo',
  glass: 'Glass',
};
