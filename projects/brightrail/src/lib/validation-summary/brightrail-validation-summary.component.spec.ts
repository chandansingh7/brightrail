import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailValidationSummaryComponent } from './brightrail-validation-summary.component';

describe('BrightrailValidationSummaryComponent', () => {
  let fixture: ComponentFixture<BrightrailValidationSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailValidationSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailValidationSummaryComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders nothing when errors are empty', () => {
    expect(fixture.nativeElement.querySelector('.br-val-sum')).toBeNull();
  });

  it('renders string errors as a list', () => {
    fixture.componentRef.setInput('errors', ['Email is required', 'Password is too short']);
    fixture.detectChanges();
    const items = fixture.nativeElement.querySelectorAll('.br-val-sum__item');
    expect(items.length).toBe(2);
    expect(items[0].textContent).toContain('Email is required');
  });

  it('renders field labels for object errors', () => {
    fixture.componentRef.setInput('errors', [{ field: 'Email', message: 'Invalid format' }]);
    fixture.detectChanges();
    const field = fixture.nativeElement.querySelector('.br-val-sum__field');
    expect(field?.textContent).toContain('Email');
    expect(fixture.nativeElement.querySelector('.br-val-sum')?.getAttribute('role')).toBe('alert');
  });
});
