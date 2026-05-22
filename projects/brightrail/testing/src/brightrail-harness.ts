import { ComponentFixture } from '@angular/core/testing';

/** Base fixture helper for Brightrail component tests in consuming apps. */
export class BrightrailHarness {
  constructor(protected readonly fixture: ComponentFixture<unknown>) {}

  host(): HTMLElement {
    return this.fixture.nativeElement as HTMLElement;
  }

  query<T extends HTMLElement = HTMLElement>(selector: string): T | null {
    return this.host().querySelector<T>(selector);
  }

  queryAll<T extends HTMLElement = HTMLElement>(selector: string): T[] {
    return Array.from(this.host().querySelectorAll<T>(selector));
  }

  detectChanges(): void {
    this.fixture.detectChanges();
  }

  click(selector: string): void {
    const target = this.query(selector);
    if (!target) {
      throw new Error(`BrightrailHarness: no element matched "${selector}"`);
    }
    target.click();
    this.detectChanges();
  }

  textContent(selector: string): string {
    return this.query(selector)?.textContent?.trim() ?? '';
  }
}
