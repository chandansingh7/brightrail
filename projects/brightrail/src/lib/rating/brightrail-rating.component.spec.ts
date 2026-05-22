import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { BrightrailRatingComponent } from './brightrail-rating.component';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, BrightrailRatingComponent],
  template: `<brightrail-rating [formControl]="control" label="Score" />`,
})
class CvaHostComponent {
  readonly control = new FormControl(3, { nonNullable: true });
}

describe('BrightrailRatingComponent', () => {
  let fixture: ComponentFixture<BrightrailRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [BrightrailRatingComponent] }).compileComponents();
    fixture = TestBed.createComponent(BrightrailRatingComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('sets value when a star is clicked', () => {
    let value = 0;
    fixture.componentInstance.valueChange.subscribe((v) => (value = v));
    const buttons = fixture.nativeElement.querySelectorAll('.br-rating__star');
    (buttons[4] as HTMLButtonElement).click();
    expect(value).toBe(5);
  });

  it('integrates with ControlValueAccessor', () => {
    const hostFixture = TestBed.createComponent(CvaHostComponent);
    hostFixture.detectChanges();
    expect(hostFixture.componentInstance.control.value).toBe(3);
  });
});
