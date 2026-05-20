import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPlaygroundComponent } from './slider-playground.component';
import { PlaygroundThemeService } from '../playground-theme.service';

describe('SliderPlaygroundComponent', () => {
  let fixture: ComponentFixture<SliderPlaygroundComponent>;
  let component: SliderPlaygroundComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderPlaygroundComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(SliderPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('applies temperature recipe with custom range', () => {
    component.applyRecipe('temperature');
    expect(component.min()).toBe(16);
    expect(component.max()).toBe(30);
    expect(component.tone()).toBe('warning');
  });

  it('html snippet includes min, max, and step', () => {
    component.min.set(0);
    component.max.set(100);
    component.step.set(5);
    expect(component.buildHtml()).toContain('[min]="0"');
    expect(component.buildHtml()).toContain('[max]="100"');
    expect(component.buildHtml()).toContain('[step]="5"');
  });
});
