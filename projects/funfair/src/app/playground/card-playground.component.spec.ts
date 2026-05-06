import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlaygroundComponent, CARD_PLAYGROUND_DEMO_IMAGES } from './card-playground.component';
import { PlaygroundThemeService } from './playground-theme.service';

describe('CardPlaygroundComponent', () => {
  let fixture: ComponentFixture<CardPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPlaygroundComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(CardPlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('html snippet should reflect appearance and titled header slots', () => {
    const html = fixture.componentInstance.htmlSnippet();
    expect(html).toContain('appearance="elevated"');
    expect(html).toContain('[withTitle]="true"');
    expect(html).toContain('brightrailCardHeaderTitle');
    expect(html).toContain('brightrail-icon-button');
    expect(html).toContain('more_vert');
  });

  it('should wire scenario group and scenario selects with native change handlers', () => {
    const selects = (fixture.nativeElement as HTMLElement).querySelectorAll(
      'select.bp-dropdown__select',
    );
    expect(selects.length).toBeGreaterThanOrEqual(4);
    const scenarioSelect = selects[2] as HTMLSelectElement;
    scenarioSelect.value = 'imageLead';
    scenarioSelect.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(fixture.componentInstance.previewRecipe()).toBe('imageLead');
  });

  it('disables header controls for fixed-layout scenarios', () => {
    fixture.componentInstance.onRecipeChange('imageLead');
    fixture.detectChanges();
    expect(fixture.componentInstance.cardHeaderLayoutEditable()).toBe(false);

    const row = (fixture.nativeElement as HTMLElement)
      .querySelector('#card-lbl-header')
      ?.closest('.bp-setting-row');
    const headerSelect = row?.querySelector('select') as HTMLSelectElement;
    expect(headerSelect.disabled).toBe(true);
  });

  it('horizontal scenario snippet omits card-media when Media is none', () => {
    fixture.componentInstance.onRecipeChange('horizontalBrief');
    fixture.componentInstance.mediaLeading.set('none');
    expect(fixture.componentInstance.htmlSnippet()).not.toContain('brightrail-card-media');
  });

  it('horizontal snippet embeds public thumbnail when media is chart', () => {
    fixture.componentInstance.onRecipeChange('horizontalBrief');
    fixture.componentInstance.mediaLeading.set('chart');
    expect(fixture.componentInstance.htmlSnippet()).toContain(CARD_PLAYGROUND_DEMO_IMAGES.horizontalThumb);
  });

  it('image lead snippet embeds public hero image', () => {
    fixture.componentInstance.onRecipeChange('imageLead');
    expect(fixture.componentInstance.htmlSnippet()).toContain(CARD_PLAYGROUND_DEMO_IMAGES.imageLeadHero);
  });

  it('horizontal scenario snippet includes card-media when Media is chart', () => {
    fixture.componentInstance.onRecipeChange('horizontalBrief');
    fixture.componentInstance.mediaLeading.set('chart');
    expect(fixture.componentInstance.htmlSnippet()).toContain('brightrail-card-media');
  });

  it('dismissible scenario snippet should include dismiss output', () => {
    fixture.componentInstance.onRecipeChange('dismissibleToast');
    const html = fixture.componentInstance.htmlSnippet();
    expect(html).toContain('[dismissible]="true"');
    expect(html).toContain('(dismiss)="onDismiss()"');
  });

  it('horizontal live preview hides leading media when Media is none', () => {
    fixture.componentInstance.onRecipeChange('horizontalBrief');
    fixture.componentInstance.mediaLeading.set('none');
    fixture.detectChanges();
    expect(
      (fixture.nativeElement as HTMLElement).querySelectorAll('brightrail-card-media').length,
    ).toBe(0);
  });

  it('horizontal live preview shows leading media when Media is chart', () => {
    fixture.componentInstance.onRecipeChange('horizontalBrief');
    fixture.componentInstance.mediaLeading.set('chart');
    fixture.detectChanges();
    expect(
      (fixture.nativeElement as HTMLElement).querySelectorAll('brightrail-card-media').length,
    ).toBe(1);
  });

  it('reset should restore elevated team defaults', () => {
    fixture.componentInstance.onRecipeChange('statsRevenue');
    fixture.componentInstance.resetToDefaults();
    expect(fixture.componentInstance.previewRecipe()).toBe('elevatedTeam');
    expect(fixture.componentInstance.appearance()).toBe('elevated');
  });
});
