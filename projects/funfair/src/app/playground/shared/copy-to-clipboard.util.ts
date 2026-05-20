/** Copy text via Clipboard API when available. */
export async function copyTextToClipboard(text: string): Promise<boolean> {
  if (!text || typeof navigator === 'undefined') {
    return false;
  }
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    return false;
  }
  return false;
}
