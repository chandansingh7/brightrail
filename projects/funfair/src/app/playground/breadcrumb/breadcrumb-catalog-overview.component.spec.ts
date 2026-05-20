import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { BreadcrumbCatalogOverviewComponent } from './breadcrumb-catalog-overview.component';

describe('BreadcrumbCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<BreadcrumbCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('embeds the variation catalog', () => {
    expect(fixture.nativeElement.querySelector('app-breadcrumb-variation-catalog')).toBeTruthy();
  });
});
