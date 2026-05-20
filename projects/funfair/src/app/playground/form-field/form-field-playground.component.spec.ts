import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldPlaygroundComponent } from './form-field-playground.component';
import { PlaygroundThemeService } from '../playground-theme.service';

describe('FormFieldPlaygroundComponent', () => {
  let fixture: ComponentFixture<FormFieldPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldPlaygroundComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldPlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('switch-terms recipe uses switch slot and invalid state', () => {
    const cmp = fixture.componentInstance;
    cmp.applyRecipe('switch-terms');
    expect(cmp.controlSlot()).toBe('switch');
    expect(cmp.invalid()).toBe(true);
    expect(cmp.required()).toBe(true);
  });

  it('html snippet wraps brightrail-form-field', () => {
    expect(fixture.componentInstance.activeSnippet()).toContain('brightrail-form-field');
  });
});
