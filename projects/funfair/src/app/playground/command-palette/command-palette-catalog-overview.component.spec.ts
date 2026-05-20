import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CommandPaletteCatalogOverviewComponent } from './command-palette-catalog-overview.component';

describe('CommandPaletteCatalogOverviewComponent', () => {
  let fixture: ComponentFixture<CommandPaletteCatalogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandPaletteCatalogOverviewComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(CommandPaletteCatalogOverviewComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('embeds the variation catalog', () => {
    expect(fixture.nativeElement.querySelector('app-command-palette-variation-catalog')).toBeTruthy();
  });
});
