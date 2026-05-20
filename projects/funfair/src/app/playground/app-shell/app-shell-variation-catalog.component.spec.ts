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

  it('renders seven sections including futuristic designs', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.asvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings?.length).toBe(7);
    expect(headings).toContain('7. Futuristic app shell designs');
  });
});
