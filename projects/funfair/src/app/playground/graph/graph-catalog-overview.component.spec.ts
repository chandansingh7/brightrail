import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCatalogOverviewComponent } from './graph-catalog-overview.component';

describe('GraphCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<GraphCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphCatalogOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GraphCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('renders variation catalog', () => {
    expect(fixture.nativeElement.querySelector('app-graph-variation-catalog')).toBeTruthy();
  });
});
