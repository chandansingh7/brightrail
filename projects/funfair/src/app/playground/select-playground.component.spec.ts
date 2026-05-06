import { TestBed } from '@angular/core/testing';
import { SelectPlaygroundComponent } from './select-playground.component';

describe('SelectPlaygroundComponent', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPlaygroundComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(SelectPlaygroundComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('disables field chrome for layout-only recipes', () => {
    TestBed.configureTestingModule({ imports: [SelectPlaygroundComponent] });
    const fixture = TestBed.createComponent(SelectPlaygroundComponent);
    const c = fixture.componentInstance;
    c.previewRecipe.set('segmented');
    fixture.detectChanges();
    expect(c.selectFullFieldChromeEditable()).toBe(false);
    expect(c.selectAppearanceStatusEditable()).toBe(false);

    const row = (fixture.nativeElement as HTMLElement)
      .querySelector('#sel-lbl-appearance')
      ?.closest('.bp-setting-row');
    const appearanceSelect = row?.querySelector('select') as HTMLSelectElement;
    expect(appearanceSelect.disabled).toBe(true);
  });

  it('allows appearance on cascade while full chrome controls stay locked', () => {
    TestBed.configureTestingModule({ imports: [SelectPlaygroundComponent] });
    const fixture = TestBed.createComponent(SelectPlaygroundComponent);
    const c = fixture.componentInstance;
    c.previewRecipe.set('cascade');
    fixture.detectChanges();
    expect(c.selectAppearanceStatusEditable()).toBe(true);
    expect(c.selectFullFieldChromeEditable()).toBe(false);

    const sizeRow = (fixture.nativeElement as HTMLElement)
      .querySelector('#sel-lbl-size')
      ?.closest('.bp-setting-row');
    const sizeSelect = sizeRow?.querySelector('select') as HTMLSelectElement;
    expect(sizeSelect.disabled).toBe(true);
  });

  it('should generate HTML that mirrors live props and ngModelOptions', () => {
    TestBed.configureTestingModule({ imports: [SelectPlaygroundComponent] });
    const fixture = TestBed.createComponent(SelectPlaygroundComponent);
    fixture.detectChanges();
    const c = fixture.componentInstance;

    const html = c.htmlSnippet();
    expect(html).toContain('[ngModelOptions]="ngModelStandalone"');
    expect(html).toContain('appearance="outlined"');
    expect(html).toContain('[(ngModel)]="countryCode"');
    expect(html).toContain('selectCountry(');
    expect(html).toContain('United States');

    c.appearance.set('filled');
    c.status.set('error');
    fixture.detectChanges();
    expect(c.htmlSnippet()).toContain('appearance="filled"');
    expect(c.htmlSnippet()).toContain('status="error"');
  });

  it('should generate a TS stub that lists the recipe and required imports', () => {
    TestBed.configureTestingModule({ imports: [SelectPlaygroundComponent] });
    const fixture = TestBed.createComponent(SelectPlaygroundComponent);
    fixture.detectChanges();
    const ts = fixture.componentInstance.tsSnippet();
    expect(ts).toContain('BrightrailSelectComponent');
    expect(ts).toContain("Recipe: \"standard\"");
    expect(ts).toContain('FormsModule');
    expect(ts).toContain('ngModelOptions');
    expect(ts).not.toContain('BrightrailButtonIconComponent');
  });

  it('should include BrightrailButtonIconComponent in TS when icons appear in the markup', () => {
    TestBed.configureTestingModule({ imports: [SelectPlaygroundComponent] });
    const fixture = TestBed.createComponent(SelectPlaygroundComponent);
    const c = fixture.componentInstance;
    c.previewRecipe.set('utilityFilter');
    fixture.detectChanges();
    expect(c.tsSnippet()).toContain('BrightrailButtonIconComponent');
  });

  it('should reflect icon options in generated HTML', () => {
    TestBed.configureTestingModule({ imports: [SelectPlaygroundComponent] });
    const fixture = TestBed.createComponent(SelectPlaygroundComponent);
    const c = fixture.componentInstance;
    c.iconKind.set('user');
    c.iconSide.set('left');
    fixture.detectChanges();
    expect(c.htmlSnippet()).toContain('brightrail-button-icon');
    expect(c.htmlSnippet()).toContain('name="user"');
  });

  it('should use category status dot when recipe is category and no playground icon', () => {
    TestBed.configureTestingModule({ imports: [SelectPlaygroundComponent] });
    const fixture = TestBed.createComponent(SelectPlaygroundComponent);
    const c = fixture.componentInstance;
    c.previewRecipe.set('category');
    fixture.detectChanges();
    expect(c.htmlSnippet()).toContain('sel-cat-dot');
  });

  it('should generate tag multi markup with br-select-value-slot', () => {
    TestBed.configureTestingModule({ imports: [SelectPlaygroundComponent] });
    const fixture = TestBed.createComponent(SelectPlaygroundComponent);
    const c = fixture.componentInstance;
    c.previewRecipe.set('tagMulti');
    c.selectedRecipeGroup.set('Popular app');
    fixture.detectChanges();
    expect(c.htmlSnippet()).toContain('br-select-value-slot');
    expect(c.htmlSnippet()).toContain('sel-tag-pill');
  });

  it('should generate option editor snippet for save/delete variation', () => {
    TestBed.configureTestingModule({ imports: [SelectPlaygroundComponent] });
    const fixture = TestBed.createComponent(SelectPlaygroundComponent);
    const c = fixture.componentInstance;
    c.previewRecipe.set('optionEditSave');
    fixture.detectChanges();
    expect(c.htmlSnippet()).toContain('Option editor');
    expect(c.htmlSnippet()).toContain('Save');
    expect(c.htmlSnippet()).toContain('Delete');
  });

  it('inline edit actions should support N action buttons', () => {
    TestBed.configureTestingModule({ imports: [SelectPlaygroundComponent] });
    const fixture = TestBed.createComponent(SelectPlaygroundComponent);
    const c = fixture.componentInstance;
    c.actionButtonCount.set(4);
    expect(c.inlineActionLabels().length).toBe(4);
  });

  it('should generate TS snippet with edit/save/delete handlers for editable dropdown', () => {
    TestBed.configureTestingModule({ imports: [SelectPlaygroundComponent] });
    const fixture = TestBed.createComponent(SelectPlaygroundComponent);
    const c = fixture.componentInstance;
    c.previewRecipe.set('optionEditSave');
    fixture.detectChanges();
    expect(c.tsSnippet()).toContain('beginEditOption');
    expect(c.tsSnippet()).toContain('saveOptionLabel');
    expect(c.tsSnippet()).toContain('deleteOption');
  });
});
