import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShellVariationCatalogComponent } from './app-shell-variation-catalog.component';

describe('AppShellVariationCatalogComponent', () => {
  let fixture: ComponentFixture<AppShellVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppShellVariationCatalogComponent] }).compileComponents();
    fixture = TestBed.createComponent(AppShellVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders six doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.asvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core layout');
    expect(headings).toContain('6. Compact shell');
    expect(headings?.length).toBe(6);
  });
});
