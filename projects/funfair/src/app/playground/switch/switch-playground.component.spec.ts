import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchPlaygroundComponent } from './switch-playground.component';
import { PlaygroundThemeService } from '../playground-theme.service';

describe('SwitchPlaygroundComponent', () => {
  let fixture: ComponentFixture<SwitchPlaygroundComponent>;
  let component: SwitchPlaygroundComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchPlaygroundComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('applies dark-mode recipe with neutral tone', () => {
    component.applyRecipe('dark-mode');
    expect(component.tone()).toBe('neutral');
    expect(component.label()).toBe('Dark mode');
  });

  it('html snippet includes checked and tone attributes', () => {
    component.checked.set(true);
    component.tone.set('success');
    expect(component.buildHtml()).toContain('[checked]="true"');
    expect(component.buildHtml()).toContain('tone="success"');
  });
});
