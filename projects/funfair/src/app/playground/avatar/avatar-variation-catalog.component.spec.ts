import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarVariationCatalogComponent } from './avatar-variation-catalog.component';

describe('AvatarVariationCatalogComponent', () => {
  let fixture: ComponentFixture<AvatarVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders nine doc-mirror sections plus extended API', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.avc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Core avatar types');
    expect(headings).toContain('7. Profile card patterns');
    expect(headings).toContain('9. Futuristic avatar designs');
    expect(headings).toContain('Extended library API');
  });

  it('includes click-to-copy tiles for profile cards and group stacks', () => {
    const labels = Array.from(
      fixture.nativeElement.querySelectorAll('.cvt__label') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(labels).toContain('Horizontal card + actions');
    expect(labels).toContain('Photo stack · +2');
    expect(labels).toContain('Initials stack · +5');
  });
});
