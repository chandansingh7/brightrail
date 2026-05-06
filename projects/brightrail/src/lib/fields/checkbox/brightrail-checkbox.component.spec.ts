import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailCheckboxComponent } from './brightrail-checkbox.component';

describe('BrightrailCheckboxComponent', () => {
  let fixture: ComponentFixture<BrightrailCheckboxComponent>;
  let component: BrightrailCheckboxComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailCheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits checkedChange when toggled', () => {
    let emitted = false;
    component.checkedChange.subscribe((v) => (emitted = v));
    const input = fixture.nativeElement.querySelector('.br-cb__input') as HTMLInputElement;
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    expect(emitted).toBeTrue();
  });

  it('applies tone and size classes', () => {
    fixture.componentRef.setInput('tone', 'warning');
    fixture.componentRef.setInput('size', 'lg');
    fixture.componentRef.setInput('variant', 'outlined');
    fixture.componentRef.setInput('status', 'error');
    fixture.detectChanges();
    const host = fixture.nativeElement.querySelector('.br-cb') as HTMLElement;
    expect(host.className).toContain('br-cb--warning');
    expect(host.className).toContain('br-cb--lg');
    expect(host.className).toContain('br-cb--outlined');
    expect(host.className).toContain('br-cb--error');
  });

  it('supports left label position', () => {
    fixture.componentRef.setInput('labelPosition', 'left');
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('.br-cb') as HTMLElement;
    expect(label.textContent).toContain('Checkbox label');
  });
});

