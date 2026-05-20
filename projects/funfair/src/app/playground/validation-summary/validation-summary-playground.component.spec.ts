import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationSummaryPlaygroundComponent } from './validation-summary-playground.component';
import { PlaygroundThemeService } from '../playground-theme.service';

describe('ValidationSummaryPlaygroundComponent', () => {
  let fixture: ComponentFixture<ValidationSummaryPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationSummaryPlaygroundComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationSummaryPlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('field-errors recipe uses field-shaped errors', () => {
    fixture.componentInstance.onRecipeNgModelChange('field-errors');
    const first = fixture.componentInstance.errors()[0];
    expect(typeof first).toBe('object');
  });

  it('empty recipe clears errors', () => {
    fixture.componentInstance.onRecipeNgModelChange('empty');
    expect(fixture.componentInstance.errors()).toEqual([]);
  });
});
