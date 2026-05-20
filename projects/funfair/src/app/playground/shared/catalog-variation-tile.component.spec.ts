import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogVariationTileComponent } from './catalog-variation-tile.component';

describe('CatalogVariationTileComponent', () => {
  let fixture: ComponentFixture<CatalogVariationTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogVariationTileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogVariationTileComponent);
    fixture.componentRef.setInput('label', 'Primary');
    fixture.componentRef.setInput('snippet', '<brightrail-badge label="New" />');
    fixture.detectChanges();
  });

  it('toggles expanded state on preview click', () => {
    expect(fixture.componentInstance.expanded()).toBe(false);
    fixture.nativeElement.querySelector('.cvt__preview').click();
    fixture.detectChanges();
    expect(fixture.componentInstance.expanded()).toBe(true);
    expect(fixture.nativeElement.querySelector('.cvt__pre')).toBeTruthy();
  });

  it('copies snippet when copy is clicked', async () => {
    const writeText = jasmine.createSpy('writeText').and.resolveTo(undefined);
    Object.defineProperty(globalThis.navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });

    fixture.componentInstance.expanded.set(true);
    fixture.detectChanges();
    await fixture.componentInstance.copySnippet();
    expect(writeText).toHaveBeenCalledWith('<brightrail-badge label="New" />');
    expect(fixture.componentInstance.copyState()).toBe('copied');
  });
});
