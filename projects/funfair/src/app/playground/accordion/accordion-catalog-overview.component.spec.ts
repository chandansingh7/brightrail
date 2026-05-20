import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AccordionCatalogOverviewComponent } from './accordion-catalog-overview.component';

describe('AccordionCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<AccordionCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('embeds the variation catalog', () => {
    expect(fixture.nativeElement.querySelector('app-accordion-variation-catalog')).toBeTruthy();
  });
});
