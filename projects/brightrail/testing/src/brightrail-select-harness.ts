import { BrightrailHarness } from './brightrail-harness';

/** Opens and interacts with `brightrail-select` listbox trigger. */
export class BrightrailSelectHarness extends BrightrailHarness {
  trigger(): HTMLButtonElement | null {
    return this.query<HTMLButtonElement>('brightrail-select button');
  }

  open(): void {
    const trigger = this.trigger();
    if (!trigger) {
      throw new Error('BrightrailSelectHarness: no trigger button found');
    }
    trigger.click();
    this.detectChanges();
  }

  isOpen(): boolean {
    return this.trigger()?.getAttribute('aria-expanded') === 'true';
  }

  triggerLabel(): string {
    return this.query('.br-select__value')?.textContent?.trim() ?? '';
  }
}
