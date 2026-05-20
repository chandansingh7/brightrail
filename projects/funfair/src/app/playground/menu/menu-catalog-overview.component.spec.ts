import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MenuCatalogOverviewComponent } from './menu-catalog-overview.component';

describe('MenuCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<MenuCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(MenuCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders variation catalog and HTML examples', () => {
    expect(fixture.nativeElement.querySelector('app-menu-variation-catalog')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.mco-pre')?.textContent).toContain('brightrail-menu');
  });
});
