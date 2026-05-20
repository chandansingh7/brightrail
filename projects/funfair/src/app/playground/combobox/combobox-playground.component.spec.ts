import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxPlaygroundComponent } from './combobox-playground.component';
import { PlaygroundThemeService } from '../playground-theme.service';

describe('ComboboxPlaygroundComponent', () => {
  let fixture: ComponentFixture<ComboboxPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxPlaygroundComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(ComboboxPlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('priority-static recipe disables filtering', () => {
    const cmp = fixture.componentInstance;
    cmp.applyRecipe('priority-static');
    expect(cmp.filterable()).toBe(false);
    expect(cmp.placeholder()).toBe('Priority');
  });

  it('html snippet includes combobox inputs', () => {
    const cmp = fixture.componentInstance;
    expect(cmp.activeSnippet()).toContain('brightrail-combobox');
    expect(cmp.activeSnippet()).toContain('[filterable]');
  });
});
