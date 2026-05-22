import { BrightrailHarness } from './brightrail-harness';

/** Clicks the primary native button inside `brightrail-button`. */
export class BrightrailButtonHarness extends BrightrailHarness {
  nativeButton(): HTMLButtonElement | null {
    return this.query<HTMLButtonElement>('brightrail-button button');
  }

  clickButton(): void {
    const btn = this.nativeButton();
    if (!btn) {
      throw new Error('BrightrailButtonHarness: no <button> found under brightrail-button');
    }
    btn.click();
    this.detectChanges();
  }

  labelText(): string {
    return this.nativeButton()?.textContent?.trim() ?? '';
  }

  isDisabled(): boolean {
    return this.nativeButton()?.disabled ?? false;
  }
}
