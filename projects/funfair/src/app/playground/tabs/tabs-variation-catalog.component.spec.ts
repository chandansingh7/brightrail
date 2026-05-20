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

  it('renders seven sections including futuristic designs', () => {
    const headings = Array.from(
      fixture.nativeElement.querySelectorAll('.tbvc-block__h') as NodeListOf<HTMLElement>,
    ).map((el) => el.textContent?.trim());
    expect(headings.length).toBe(7);
    expect(headings).toContain('7. Futuristic tabs designs');
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
