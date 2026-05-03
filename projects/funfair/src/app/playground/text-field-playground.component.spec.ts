import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldPlaygroundComponent } from './text-field-playground.component';

describe('TextFieldPlaygroundComponent', () => {
  let fixture: ComponentFixture<TextFieldPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFieldPlaygroundComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TextFieldPlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render settings and live preview layout', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.bp-settings-head__title')?.textContent).toContain('Component settings');
    expect(el.querySelector('.bp-panel__title--live')?.textContent).toContain('Live preview');
    expect(el.querySelector('brightrail-text-field')).toBeTruthy();
  });

  it('should start with empty preview value and omit placeholder from snippet when default is empty', () => {
    expect(fixture.componentInstance.previewValue()).toBe('');
    const html = fixture.componentInstance.htmlSnippet();
    expect(html).not.toContain('placeholder=');
  });

  it('should include shape in snippet when not default', () => {
    fixture.componentInstance.shape.set('pill');
    fixture.detectChanges();
    expect(fixture.componentInstance.htmlSnippet()).toContain('shape="pill"');
  });

  it('should omit shape from snippet when default', () => {
    const html = fixture.componentInstance.htmlSnippet();
    expect(html).not.toContain('shape=');
  });

  it('should use fixed label text in generated snippet', () => {
    const html = fixture.componentInstance.htmlSnippet();
    expect(html).toContain('label="Label"');
    expect(html).not.toContain('suffix="kg"');
    expect(html).toContain('[(ngModel)]="fieldValue"');
    expect(html).toContain('</brightrail-text-field>');
  });

  it('should include suffix and suffixPosition in snippet when placement is Right', () => {
    fixture.componentInstance.suffixPlacement.set('right');
    fixture.detectChanges();
    const html = fixture.componentInstance.htmlSnippet();
    expect(html).toContain('suffix="kg"');
    expect(html).toContain('suffixPosition="right"');
  });

  it('should omit suffix from snippet when suffix position is None', () => {
    fixture.componentInstance.suffixPlacement.set('none');
    fixture.detectChanges();
    const html = fixture.componentInstance.htmlSnippet();
    expect(html).not.toContain('suffix=');
  });

  it('should include suffixPosition left in snippet when placement is Left', () => {
    fixture.componentInstance.suffixPlacement.set('left');
    fixture.detectChanges();
    expect(fixture.componentInstance.htmlSnippet()).toContain('suffixPosition="left"');
  });

  it('should emit showPasswordToggle in snippet for password input type', () => {
    fixture.componentInstance.inputType.set('password');
    fixture.detectChanges();
    expect(fixture.componentInstance.htmlSnippet()).toContain('[showPasswordToggle]="true"');
  });

  it('should map icon side to iconLeft/iconRight in snippet', () => {
    fixture.componentInstance.iconKind.set('search');
    fixture.componentInstance.iconSide.set('left');
    fixture.detectChanges();
    expect(fixture.componentInstance.htmlSnippet()).toContain('iconLeft="search"');

    fixture.componentInstance.iconSide.set('right');
    fixture.detectChanges();
    expect(fixture.componentInstance.htmlSnippet()).toContain('iconRight="search"');
  });

  it('should emit loading independently of icon in snippet', () => {
    fixture.componentInstance.iconKind.set('search');
    fixture.componentInstance.iconSide.set('left');
    fixture.componentInstance.fieldLoading.set(true);
    fixture.detectChanges();
    const html = fixture.componentInstance.htmlSnippet();
    expect(html).toContain('[loading]="true"');
    expect(html).toContain('iconLeft="search"');
  });
});
