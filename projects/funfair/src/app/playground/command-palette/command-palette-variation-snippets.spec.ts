import {
  COMMAND_PALETTE_DEMO_COMMANDS,
  COMMAND_PALETTE_DOC_SECTION_COUNT,
  COMMAND_PALETTE_HTML_EXAMPLES,
  COMMAND_PALETTE_VARIATION_SNIPPETS,
} from './command-palette-variation-snippets';

describe('command-palette-variation-snippets', () => {
  it('exports copy-ready snippets for open and grouped palettes', () => {
    expect(COMMAND_PALETTE_VARIATION_SNIPPETS.coreOpen).toContain('brightrail-command-palette');
    expect(COMMAND_PALETTE_VARIATION_SNIPPETS.coreOpen).toContain('[isOpen]');
    expect(COMMAND_PALETTE_VARIATION_SNIPPETS.groupedCommands).toContain('groupedCommands');
    expect(COMMAND_PALETTE_VARIATION_SNIPPETS.disabledItems).toContain('commandsWithDisabled');
  });

  it('provides demo commands with ids and labels', () => {
    expect(COMMAND_PALETTE_DEMO_COMMANDS.length).toBeGreaterThan(0);
    expect(COMMAND_PALETTE_DEMO_COMMANDS[0]?.id).toBeTruthy();
  });

  it('documents six reference sections', () => {
    expect(COMMAND_PALETTE_DOC_SECTION_COUNT).toBe(6);
  });

  it('includes footer HTML examples', () => {
    expect(COMMAND_PALETTE_HTML_EXAMPLES).toContain('commandSelect');
    expect(COMMAND_PALETTE_HTML_EXAMPLES).toContain('BrightrailCommandPaletteItem');
  });
});
