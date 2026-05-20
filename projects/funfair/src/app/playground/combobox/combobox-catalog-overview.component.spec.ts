import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ComboboxCatalogOverviewComponent } from './combobox-catalog-overview.component';

describe('ComboboxCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<ComboboxCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(ComboboxCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders variation catalog', () => {
    expect(fixture.nativeElement.querySelector('app-combobox-variation-catalog')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.cbco-pre')?.textContent).toContain('brightrail-combobox');
  });
});
