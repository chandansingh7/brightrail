import { TABLE_DOC_SECTION_COUNT, TABLE_VARIATION_SNIPPETS } from './table-variation-snippets';

describe('table-variation-snippets', () => {
  it('exports futuristic table snippets with shared shells', () => {
    expect(TABLE_VARIATION_SNIPPETS.futuristicGlass).toContain('brightrail-table');
    expect(TABLE_VARIATION_SNIPPETS.futuristicGlass).toContain('ff-future-shell--glass');
    expect(TABLE_VARIATION_SNIPPETS.futuristicNeon).toContain('ff-future-shell--neon');
    expect(TABLE_VARIATION_SNIPPETS.futuristicCyber).toContain('ff-future-shell--cyber');
    expect(TABLE_VARIATION_SNIPPETS.futuristicHolo).toContain('ff-future-shell--holo');
  });

  it('documents nine reference sections', () => {
    expect(TABLE_DOC_SECTION_COUNT).toBe(9);
  });
});
