import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailDrawerComponent } from './brightrail-drawer.component';
import { BrightrailDrawerBodyComponent } from './brightrail-drawer-body.component';
import { BrightrailDrawerFooterComponent } from './brightrail-drawer-footer.component';
import { BrightrailDrawerHeaderComponent } from './brightrail-drawer-header.component';
import { BrightrailDrawerTitleDirective } from './brightrail-drawer.directives';

@Component({
  standalone: true,
  imports: [
    BrightrailDrawerComponent,
    BrightrailDrawerHeaderComponent,
    BrightrailDrawerBodyComponent,
    BrightrailDrawerFooterComponent,
    BrightrailDrawerTitleDirective,
  ],
  template: `
    <brightrail-drawer
      [isOpen]="open"
      [mode]="mode"
      [backdropDismissDisabled]="backdropLock"
      (backdropDismiss)="onBackdropDismiss()"
      (closed)="onClosed()"
      (openChange)="onOpenChange($event)"
    >
      <brightrail-drawer-header>
        <h3 brightrailDrawerTitle>Edit project details</h3>
      </brightrail-drawer-header>
      <brightrail-drawer-body>Body content</brightrail-drawer-body>
      <brightrail-drawer-footer>Footer actions</brightrail-drawer-footer>
    </brightrail-drawer>
  `,
})
class HostComponent {
  open = true;
  mode: 'modal' | 'dismissible' | 'persistent' = 'modal';
  backdropLock = false;
  closedCount = 0;
  dismissCount = 0;
  openChangeValues: boolean[] = [];

  onClosed(): void {
    this.closedCount++;
  }

  onBackdropDismiss(): void {
    this.dismissCount++;
  }

  onOpenChange(next: boolean): void {
    this.openChangeValues.push(next);
  }
}

describe('BrightrailDrawerComponent', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  it('renders dialog panel while open', () => {
    expect(fixture.nativeElement.querySelector('[role="dialog"]')).toBeTruthy();
  });

  it('hides panel when closed', () => {
    fixture.componentInstance.open = false;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[role="dialog"]')).toBeNull();
  });

  it('emits backdropDismiss and openChange on backdrop click when dismissible', () => {
    const backdrop = fixture.nativeElement.querySelector('.br-drawer__backdrop') as HTMLButtonElement;
    backdrop.click();
    expect(fixture.componentInstance.dismissCount).toBe(1);
    expect(fixture.componentInstance.openChangeValues).toEqual([false]);
  });

  it('does not dismiss on backdrop click when backdrop dismiss is disabled', () => {
    fixture.componentInstance.backdropLock = true;
    fixture.detectChanges();
    const backdrop = fixture.nativeElement.querySelector('.br-drawer__backdrop') as HTMLButtonElement;
    backdrop.click();
    expect(fixture.componentInstance.dismissCount).toBe(0);
    expect(fixture.componentInstance.openChangeValues).toEqual([]);
  });

  it('does not dismiss in persistent mode', () => {
    fixture.componentInstance.mode = 'persistent';
    fixture.detectChanges();
    const backdrop = fixture.nativeElement.querySelector('.br-drawer__backdrop') as HTMLButtonElement | null;
    expect(backdrop).toBeNull();
    expect(fixture.componentInstance.dismissCount).toBe(0);
    expect(fixture.componentInstance.openChangeValues).toEqual([]);
  });
});
