import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailMenuComponent } from './brightrail-menu.component';
import { BrightrailMenuItemComponent } from './brightrail-menu-item.component';
import { BrightrailMenuTriggerDirective } from './brightrail-menu-trigger.directive';

@Component({
  standalone: true,
  imports: [
    BrightrailMenuComponent,
    BrightrailMenuItemComponent,
    BrightrailMenuTriggerDirective,
  ],
  template: `
    <button type="button" [brightrailMenuTrigger]="menu">Actions</button>
    <brightrail-menu #menu>
      <brightrail-menu-item label="Edit" (activate)="onEdit()" />
      <brightrail-menu-item label="Delete" [disabled]="true" />
    </brightrail-menu>
  `,
})
class HostComponent {
  readonly edited = signal(false);

  onEdit(): void {
    this.edited.set(true);
  }
}

describe('BrightrailMenuComponent', () => {
  let menuFixture: ComponentFixture<BrightrailMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailMenuComponent, BrightrailMenuItemComponent],
    }).compileComponents();

    menuFixture = TestBed.createComponent(BrightrailMenuComponent);
    menuFixture.detectChanges();
  });

  it('should create', () => {
    expect(menuFixture.componentInstance).toBeTruthy();
  });

  it('should open and close', () => {
    const menu = menuFixture.componentInstance;
    expect(menu.isOpen()).toBe(false);
    menu.open();
    menuFixture.detectChanges();
    expect(menu.isOpen()).toBe(true);
    menu.close();
    expect(menu.isOpen()).toBe(false);
  });

  it('should toggle from trigger and activate item', () => {
    const hostFixture = TestBed.createComponent(HostComponent);
    hostFixture.detectChanges();

    const trigger = hostFixture.nativeElement.querySelector('button') as HTMLButtonElement;
    trigger.click();
    hostFixture.detectChanges();

    const panel = hostFixture.nativeElement.querySelector('.br-menu') as HTMLElement;
    expect(panel.hidden).toBe(false);

    const items = hostFixture.nativeElement.querySelectorAll('.br-menu-item');
    (items[0] as HTMLButtonElement).click();
    hostFixture.detectChanges();

    expect(hostFixture.componentInstance.edited()).toBe(true);
    expect(panel.hidden).toBe(true);
  });
});
