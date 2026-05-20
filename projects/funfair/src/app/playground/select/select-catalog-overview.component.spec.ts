import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SelectCatalogOverviewComponent } from './select-catalog-overview.component';

describe('SelectCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<SelectCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('embeds the variation catalog and HTML examples', () => {
    expect(fixture.nativeElement.querySelector('app-select-variation-catalog')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.sco-pre')).toBeTruthy();
  });
});
