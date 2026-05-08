import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxPlaygroundComponent } from './checkbox-playground.component';

describe('CheckboxPlaygroundComponent', () => {
  let fixture: ComponentFixture<CheckboxPlaygroundComponent>;
  let component: CheckboxPlaygroundComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxPlaygroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates', () => {
    expect(component).toBeTruthy();
  });

  it('applies indeterminate recipe', () => {
    component.onRecipeNgModelChange('indeterminate');
    expect(component.indeterminate()).toBeTrue();
    expect(component.label()).toContain('Select all');
  });
});

