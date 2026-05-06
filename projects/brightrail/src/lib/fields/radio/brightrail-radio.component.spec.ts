import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailRadioComponent } from './brightrail-radio.component';

describe('BrightrailRadioComponent', () => {
  let fixture: ComponentFixture<BrightrailRadioComponent>;
  let component: BrightrailRadioComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailRadioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits checkedChange on select', () => {
    let emitted = false;
    component.checkedChange.subscribe((v) => (emitted = v));
    const input = fixture.nativeElement.querySelector('.br-radio__input') as HTMLInputElement;
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    expect(emitted).toBeTrue();
  });

  it('applies tone and size classes', () => {
    fixture.componentRef.setInput('tone', 'success');
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();
    const host = fixture.nativeElement.querySelector('.br-radio') as HTMLElement;
    expect(host.className).toContain('br-radio--success');
    expect(host.className).toContain('br-radio--lg');
  });
});

