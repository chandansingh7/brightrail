import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CardCatalogOverviewComponent } from './card-catalog-overview.component';

describe('CardCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<CardCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CardCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render card examples', () => {
    expect(fixture.nativeElement.querySelectorAll('brightrail-card').length).toBeGreaterThan(10);
  });

  it('should expose footer HTML examples', () => {
    expect(fixture.componentInstance.htmlExamples).toContain('brightrail-card');
  });
});
