import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailModalComponent } from './brightrail-modal.component';

@Component({
  standalone: true,
  imports: [BrightrailModalComponent],
  template: `
    <brightrail-modal
      [isOpen]="open"
      size="md"
      [backdropDismissDisabled]="backdropLock"
      (backdropDismiss)="onBackdrop()"
      (closed)="onClosed()"
    >
      <div id="modal-demo-title">Title</div>
    </brightrail-modal>
  `,
})
class HostComponent {
  open = true;
  backdropLock = false;
  backdropCount = 0;
  closedCount = 0;

  onBackdrop(): void {
    this.backdropCount++;
  }

  onClosed(): void {
    this.closedCount++;
  }
}

@Component({
  standalone: true,
  imports: [BrightrailModalComponent],
  template: `
    <brightrail-modal [isOpen]="true" size="md" [scrollBody]="scrollBodyEnabled">
      <div id="modal-demo-title">Title</div>
    </brightrail-modal>
  `,
})
class ScrollBodyHostComponent {
  scrollBodyEnabled = false;
}

describe('BrightrailModalComponent', () => {
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
    expect(fixture.nativeElement.querySelector('.br-modal__backdrop')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[brightrailFocusTrap]')).toBeTruthy();
  });

  it('emits backdropDismiss when backdrop clicked and dismiss allowed', () => {
    const backdrop = fixture.nativeElement.querySelector('.br-modal__backdrop') as HTMLButtonElement;
    backdrop.click();
    expect(fixture.componentInstance.backdropCount).toBe(1);
  });

  it('does not emit backdropDismiss when backdrop dismiss disabled', () => {
    fixture.componentInstance.backdropLock = true;
    fixture.detectChanges();
    const backdrop = fixture.nativeElement.querySelector('.br-modal__backdrop') as HTMLButtonElement;
    backdrop.click();
    expect(fixture.componentInstance.backdropCount).toBe(0);
  });

  it('renders nothing when isOpen is false', () => {
    fixture.componentInstance.open = false;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[role="dialog"]')).toBeNull();
  });
});

describe('BrightrailModalComponent scrollBody layout', () => {
  it('adds scroll-body panel class when scrollBody is true', async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollBodyHostComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(ScrollBodyHostComponent);
    fixture.componentInstance.scrollBodyEnabled = true;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.br-modal__panel--scroll-body')).toBeTruthy();
  });

  it('omits scroll-body panel class when scrollBody is false', async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollBodyHostComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(ScrollBodyHostComponent);
    fixture.componentInstance.scrollBodyEnabled = false;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.br-modal__panel--scroll-body')).toBeNull();
  });
});
