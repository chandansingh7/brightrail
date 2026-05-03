import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';

import { TextFieldInsetLabelGuideComponent } from './text-field-inset-label-guide.component';

describe('TextFieldInsetLabelGuideComponent', () => {
  let fixture: ComponentFixture<TextFieldInsetLabelGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFieldInsetLabelGuideComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TextFieldInsetLabelGuideComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render live inset demo and documentation sections', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.ig-title')?.textContent).toContain('Inset label');
    expect(el.querySelector('.ig-demo-field')).toBeTruthy();
    expect(el.querySelector('brightrail-text-field')).toBeTruthy();
    expect(fixture.componentInstance.exampleHtml).toContain('labelPosition="inset"');
  });
});
