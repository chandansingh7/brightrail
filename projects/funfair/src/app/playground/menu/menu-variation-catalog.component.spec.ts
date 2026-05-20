import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuVariationCatalogComponent } from './menu-variation-catalog.component';

describe('MenuVariationCatalogComponent', () => {
  let fixture: ComponentFixture<MenuVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [MenuVariationCatalogComponent] }).compileComponents();
    fixture = TestBed.createComponent(MenuVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders seven doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.mvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core action menus');
    expect(headings).toContain('6. Accessibility');
    expect(headings).toContain('7. Futuristic menu designs');
    expect(headings.length).toBe(7);
  });
});
