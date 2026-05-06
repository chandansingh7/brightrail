import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPlaygroundComponent } from './accordion-playground.component';

describe('AccordionPlaygroundComponent', () => {
  let fixture: ComponentFixture<AccordionPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AccordionPlaygroundComponent] }).compileComponents();
    fixture = TestBed.createComponent(AccordionPlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('updates snippet for nested recipe', () => {
    fixture.componentInstance.onRecipeNgModelChange('adv-nested');
    fixture.detectChanges();
    expect(fixture.componentInstance.buildHtml()).toContain('Recipe: adv-nested');
    expect(fixture.componentInstance.buildHtml()).toContain('brightrail-accordion-item');
  });
});
