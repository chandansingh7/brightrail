import { BrightrailHarness } from './brightrail-harness';

/** Types into the native input/textarea inside `brightrail-text-field`. */
export class BrightrailTextFieldHarness extends BrightrailHarness {
  nativeControl(): HTMLInputElement | HTMLTextAreaElement | null {
    return (
      this.query<HTMLInputElement>('brightrail-text-field input') ??
      this.query<HTMLTextAreaElement>('brightrail-text-field textarea')
    );
  }

  setValue(value: string): void {
    const control = this.nativeControl();
    if (!control) {
      throw new Error('BrightrailTextFieldHarness: no input/textarea found');
    }
    control.value = value;
    control.dispatchEvent(new Event('input', { bubbles: true }));
    this.detectChanges();
  }

  value(): string {
    return this.nativeControl()?.value ?? '';
  }
}
