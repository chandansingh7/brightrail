import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailIconButtonComponent } from './brightrail-icon-button.component';
import { BrightrailIconComponent } from '../icons/brightrail-icon.component';

describe('BrightrailIconButtonComponent', () => {
  let fixture: ComponentFixture<BrightrailIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailIconButtonComponent, BrightrailIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailIconButtonComponent);
    fixture.componentRef.setInput('ariaLabel', 'More');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should forward aria-label to inner button', () => {
    const btn = (fixture.nativeElement as HTMLElement).querySelector('button');
    expect(btn?.getAttribute('aria-label')).toBe('More');
  });
});
