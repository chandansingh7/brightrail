import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandPaletteVariationCatalogComponent } from './command-palette-variation-catalog.component';

describe('CommandPaletteVariationCatalogComponent', () => {
  let fixture: ComponentFixture<CommandPaletteVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [CommandPaletteVariationCatalogComponent] }).compileComponents();
    fixture = TestBed.createComponent(CommandPaletteVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders six doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.cpvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings?.length).toBe(6);
    expect(headings?.[0]).toContain('1.');
    expect(headings?.[5]).toContain('6.');
  });
});
