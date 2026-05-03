import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailSplitButtonComponent } from './brightrail-split-button.component';

describe('BrightrailSplitButtonComponent', () => {
  let fixture: ComponentFixture<BrightrailSplitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailSplitButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailSplitButtonComponent);
    fixture.componentRef.setInput('menuButtonAriaLabel', 'More actions');
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render primary and caret buttons', () => {
    fixture.detectChanges();
    const inner = fixture.nativeElement.querySelectorAll('brightrail-button');
    expect(inner.length).toBe(2);
  });
});
