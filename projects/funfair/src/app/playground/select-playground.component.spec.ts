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
});
