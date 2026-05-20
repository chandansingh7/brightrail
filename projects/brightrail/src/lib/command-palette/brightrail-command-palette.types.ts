/** One actionable entry in {@link BrightrailCommandPaletteComponent}. */
export interface BrightrailCommandPaletteItem {
  id: string;
  label: string;
  group?: string;
  shortcut?: string;
  keywords?: string[];
  disabled?: boolean;
}
