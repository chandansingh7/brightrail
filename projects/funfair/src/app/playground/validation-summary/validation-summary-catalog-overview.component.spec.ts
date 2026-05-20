import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ValidationSummaryCatalogOverviewComponent } from './validation-summary-catalog-overview.component';

describe('ValidationSummaryCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<ValidationSummaryCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationSummaryCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(ValidationSummaryCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('embeds the variation catalog', () => {
    expect(fixture.nativeElement.querySelector('app-validation-summary-variation-catalog')).toBeTruthy();
  });
});
