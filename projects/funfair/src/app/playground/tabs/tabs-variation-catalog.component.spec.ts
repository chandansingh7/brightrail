import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsVariationCatalogComponent } from './tabs-variation-catalog.component';

describe('TabsVariationCatalogComponent', () => {
  let fixture: ComponentFixture<TabsVariationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsVariationCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsVariationCatalogComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders six doc-mirror sections', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.tbvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings).toContain('1. Appearances');
    expect(headings).toContain('6. Scrollable & vertical');
    expect(headings.length).toBe(6);
  });

  it('removes closable tabs when close is emitted', () => {
    const comp = fixture.componentInstance;
    expect(comp.closableTabs().length).toBe(3);
    comp.onClosableClose('Details');
    fixture.detectChanges();
    expect(comp.closableTabs().length).toBe(2);
    expect(comp.closableTabs().some((t) => t.label === 'Details')).toBe(false);
  });
});
