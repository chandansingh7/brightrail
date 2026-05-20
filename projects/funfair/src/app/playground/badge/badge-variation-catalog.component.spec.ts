import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeVariationCatalogComponent } from './badge-variation-catalog.component';

describe('BadgeVariationCatalogComponent', () => {
  let fixture: ComponentFixture<BadgeVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders ten doc-mirror sections including futuristic designs', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.bvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core badge types');
    expect(headings).toContain('8. Enterprise patterns');
    expect(headings).toContain('9. Advanced patterns');
    expect(headings).toContain('10. Futuristic badge designs');
    expect(headings.length).toBe(10);
  });

  it('includes click-to-copy tiles with enterprise pill wrappers', () => {
    const labels = Array.from(
      fixture.nativeElement.querySelectorAll('.cvt__label') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(labels).toContain('Avatar stack · +5');
    expect(labels).toContain('Bell · 12');
    expect(fixture.nativeElement.querySelector('.bco-pill--avatars')).toBeTruthy();
  });
});
