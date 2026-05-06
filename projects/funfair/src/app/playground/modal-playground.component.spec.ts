import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPlaygroundComponent } from './modal-playground.component';
import { PlaygroundThemeService } from './playground-theme.service';

describe('ModalPlaygroundComponent', () => {
  let fixture: ComponentFixture<ModalPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPlaygroundComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('confirmDelete scenario applies destructive-friendly defaults', () => {
    const cmp = fixture.componentInstance;
    cmp.applyRecipe('confirmDelete');
    expect(cmp.appearance()).toBe('danger');
    expect(cmp.footerPreset()).toBe('primarySecondary');
  });

  it('dismissModal closes preview shell', () => {
    const cmp = fixture.componentInstance;
    cmp.modalOpen.set(true);
    cmp.dismissModal();
    expect(cmp.modalOpen()).toBe(false);
  });

  it('formInputSubmit scenario applies defaults', () => {
    const cmp = fixture.componentInstance;
    cmp.applyRecipe('formInputSubmit');
    expect(cmp.appearance()).toBe('default');
    expect(cmp.footerPreset()).toBe('primarySecondary');
    expect(cmp.titleIcon()).toBe('edit');
  });

  it('onDemoFormSubmit prevents default and closes modal', () => {
    const cmp = fixture.componentInstance;
    cmp.modalOpen.set(true);
    const ev = new Event('submit', { cancelable: true });
    cmp.onDemoFormSubmit(ev);
    expect(ev.defaultPrevented).toBe(true);
    expect(cmp.modalOpen()).toBe(false);
  });

  it('HTML snippet projects footer buttons like the live preview (not an empty placeholder)', () => {
    const cmp = fixture.componentInstance;
    cmp.activeTab.set('html');
    cmp.applyRecipe('confirmDelete');
    const snippet = cmp.activeSnippet();
    expect(snippet).toContain('<brightrail-modal-footer>');
    expect(snippet).toContain('<brightrail-button');
    expect(snippet).toContain('variant="danger"');
    expect(snippet).not.toContain('Footer actions');
  });

  it('form scenario snippet uses native submit button inside footer', () => {
    const cmp = fixture.componentInstance;
    cmp.activeTab.set('html');
    cmp.applyRecipe('formInputSubmit');
    expect(cmp.activeSnippet()).toContain('type="submit"');
    expect(cmp.activeSnippet()).toContain('<brightrail-modal-footer>');
  });

  it('wizardFlow resets internal step index when applied', () => {
    const cmp = fixture.componentInstance;
    cmp.applyRecipe('wizardFlow');
    cmp.wizardStep.set(3);
    cmp.applyRecipe('wizardFlow');
    expect(cmp.wizardStep()).toBe(1);
  });

  it('stickyLongForm enables scrollBody for pinned footer layout', () => {
    const cmp = fixture.componentInstance;
    cmp.applyRecipe('stickyLongForm');
    expect(cmp.scrollBody()).toBe(true);
    cmp.activeTab.set('html');
    expect(cmp.activeSnippet()).toContain('[scrollBody]="true"');
  });

  it('wizardOwnerLabel reflects owner selection', () => {
    const cmp = fixture.componentInstance;
    cmp.wizardOwner.set('team');
    expect(cmp.wizardOwnerLabel()).toBe('Platform team');
  });
});
