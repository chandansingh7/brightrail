import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PaginationCatalogOverviewComponent } from './pagination-catalog-overview.component';

describe('PaginationCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<PaginationCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the variation catalog with copy tiles', () => {
    expect(fixture.nativeElement.querySelector('app-pagination-variation-catalog')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-catalog-variation-tile')).toBeTruthy();
  });

  it('shows HTML examples footer', () => {
    expect(fixture.nativeElement.querySelector('#pco-html-examples')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.pco-pre')?.textContent).toContain('brightrail-pagination');
  });
});
