import { provideBrightrailFuturisticAppearance, applyBrightrailFuturisticAppearance } from './brightrail-futuristic.providers';

describe('provideBrightrailFuturisticAppearance', () => {
  it('sets and clears the document attribute', () => {
    const doc = document.implementation.createHTMLDocument('test');
    applyBrightrailFuturisticAppearance(doc, 'cyber');
    expect(doc.documentElement.getAttribute('data-br-fx')).toBe('cyber');
    applyBrightrailFuturisticAppearance(doc, null);
    expect(doc.documentElement.hasAttribute('data-br-fx')).toBe(false);
  });

  it('returns provider array', () => {
    expect(provideBrightrailFuturisticAppearance('neon').length).toBe(2);
  });
});
