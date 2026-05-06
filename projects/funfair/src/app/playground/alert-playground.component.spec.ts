import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPlaygroundComponent } from './alert-playground.component';
import { PlaygroundThemeService } from './playground-theme.service';

describe('AlertPlaygroundComponent', () => {
  let fixture: ComponentFixture<AlertPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertPlaygroundComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertPlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('bindAppearance marks scenario as custom and updates appearance', () => {
    const cmp = fixture.componentInstance;
    expect(cmp.previewRecipe()).toBe('inlineSuccess');
    cmp.bindAppearance('filled');
    expect(cmp.previewRecipe()).toBe('custom');
    expect(cmp.appearance()).toBe('filled');
  });

  it('onRecipeNgModelChange applies preset recipes', () => {
    const cmp = fixture.componentInstance;
    cmp.onRecipeNgModelChange('inlineInfoBanner');
    expect(cmp.previewRecipe()).toBe('inlineInfoBanner');
    expect(cmp.appearance()).toBe('filled');
    expect(cmp.status()).toBe('info');
    expect(cmp.fullWidth()).toBe(true);
  });

  it('custom scenario leaves signals untouched', () => {
    const cmp = fixture.componentInstance;
    cmp.bindAppearance('tonal');
    cmp.bindStatus('warning');
    cmp.onRecipeNgModelChange('custom');
    expect(cmp.previewRecipe()).toBe('custom');
    expect(cmp.appearance()).toBe('tonal');
    expect(cmp.status()).toBe('warning');
  });

  it('selects first Catalog recipe when Scenario group is Catalog', () => {
    const cmp = fixture.componentInstance;
    cmp.onRecipeGroupNgModelChange('Catalog');
    expect(cmp.previewRecipe()).toBe('catCoreInfo');
    expect(cmp.status()).toBe('info');
    cmp.onRecipeGroupNgModelChange('Basics');
    expect(cmp.previewRecipe()).toBe('inlineSuccess');
  });

  it('bindTheme does not force custom scenario', () => {
    const cmp = fixture.componentInstance;
    expect(cmp.previewRecipe()).toBe('inlineSuccess');
    cmp.bindTheme('dark');
    expect(cmp.previewRecipe()).toBe('inlineSuccess');
    expect(TestBed.inject(PlaygroundThemeService).theme()).toBe('dark');
  });

  it('bottomSnack scenario enables bottom placement', () => {
    const cmp = fixture.componentInstance;
    cmp.onRecipeNgModelChange('bottomSnack');
    expect(cmp.previewRecipe()).toBe('bottomSnack');
    expect(cmp.placement()).toBe('bottom');
    expect(cmp.inverse()).toBe(true);
    expect(cmp.status()).toBe('success');
  });

  it('Catalog scenario list includes Custom so ngModel stays valid after manual tweaks', () => {
    const cmp = fixture.componentInstance;
    cmp.selectedRecipeGroup.set('Catalog');
    cmp.previewRecipe.set('custom');
    const opts = cmp.recipesInGroup('Catalog').map((o) => o.value);
    expect(opts).toContain('custom');
    cmp.onRecipeNgModelChange('catAppToast');
    expect(cmp.inverse()).toBe(true);
    expect(cmp.status()).toBe('info');
  });

  it('active snippet reflects bound controls', () => {
    const cmp = fixture.componentInstance;
    cmp.bindAppearance('soft');
    cmp.bindStatus('error');
    fixture.detectChanges();
    expect(cmp.activeSnippet()).toContain('appearance="soft"');
    expect(cmp.activeSnippet()).toContain('status="error"');
  });

  it('bindPlacement marks scenario custom and emits placement in snippet when bottom', () => {
    const cmp = fixture.componentInstance;
    cmp.bindPlacement('bottom');
    expect(cmp.previewRecipe()).toBe('custom');
    expect(cmp.activeSnippet()).toContain('placement="bottom"');
  });
});
