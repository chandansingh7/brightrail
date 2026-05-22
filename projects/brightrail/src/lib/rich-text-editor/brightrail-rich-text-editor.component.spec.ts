import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailRichTextEditorComponent } from './brightrail-rich-text-editor.component';

describe('BrightrailRichTextEditorComponent', () => {
  let fixture: ComponentFixture<BrightrailRichTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [BrightrailRichTextEditorComponent] }).compileComponents();
    fixture = TestBed.createComponent(BrightrailRichTextEditorComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('emits html on input', () => {
    let html = '';
    fixture.componentInstance.htmlChange.subscribe((v) => (html = v));
    const surface = fixture.nativeElement.querySelector('.br-rte__surface') as HTMLElement;
    surface.innerHTML = '<p>Hello</p>';
    surface.dispatchEvent(new Event('input'));
    expect(html).toContain('Hello');
  });
});
