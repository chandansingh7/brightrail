import {
  futuristicAppearanceHostClass,
  resolveFuturisticAppearance,
} from './brightrail-futuristic-host.util';

describe('brightrail futuristic host utils', () => {
  it('resolves explicit over defaults', () => {
    expect(resolveFuturisticAppearance('neon', 'cyber')).toBe('neon');
    expect(resolveFuturisticAppearance(null, 'glass')).toBe('glass');
    expect(resolveFuturisticAppearance(undefined, null)).toBeNull();
  });

  it('builds host class names', () => {
    expect(futuristicAppearanceHostClass('holo')).toBe('br-fx--holo');
    expect(futuristicAppearanceHostClass(null)).toBe('');
  });
});
