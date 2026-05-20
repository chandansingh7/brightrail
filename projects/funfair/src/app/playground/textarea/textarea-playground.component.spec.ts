import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaPlaygroundComponent } from './textarea-playground.component';
import { PlaygroundThemeService } from '../playground-theme.service';

describe('TextareaPlaygroundComponent', () => {
  let fixture: ComponentFixture<TextareaPlaygroundComponent>;
  let component: TextareaPlaygroundComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaPlaygroundComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(TextareaPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('applies error-state recipe with error status', () => {
    component.applyRecipe('error-state');
    expect(component.status()).toBe('error');
    expect(component.helperText()).toContain('required');
  });

  it('html snippet includes appearance and rows', () => {
    component.appearance.set('filled');
    component.rows.set(5);
    expect(component.buildHtml()).toContain('appearance="filled"');
    expect(component.buildHtml()).toContain('[rows]="5"');
  });
});
