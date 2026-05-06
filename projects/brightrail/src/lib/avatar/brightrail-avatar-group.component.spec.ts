import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailAvatarComponent } from './brightrail-avatar.component';
import { BrightrailAvatarGroupComponent } from './brightrail-avatar-group.component';

@Component({
  standalone: true,
  imports: [BrightrailAvatarGroupComponent, BrightrailAvatarComponent],
  template: `
    <brightrail-avatar-group [maxVisible]="2" ariaLabel="Team">
      <brightrail-avatar kind="initials" initials="A" />
      <brightrail-avatar kind="initials" initials="B" />
      <brightrail-avatar kind="initials" initials="C" />
    </brightrail-avatar-group>
  `,
})
class AvatarGroupHarnessComponent {}

describe('BrightrailAvatarGroupComponent', () => {
  let fixture: ComponentFixture<AvatarGroupHarnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarGroupHarnessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarGroupHarnessComponent);
    fixture.detectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.nativeElement.querySelector('.br-avatar-group')).toBeTruthy();
  });

  it('should show overflow count when maxVisible is exceeded', () => {
    const more = fixture.nativeElement.querySelector('.br-avatar-group__more');
    expect(more?.textContent?.trim()).toBe('+1');
  });
});
