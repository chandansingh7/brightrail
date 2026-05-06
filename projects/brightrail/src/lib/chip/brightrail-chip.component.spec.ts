import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailChipComponent } from './brightrail-chip.component';

describe('BrightrailChipComponent', () => {
  let fixture: ComponentFixture<BrightrailChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailChipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailChipComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should apply appearance alias and critical color mapping', () => {
    fixture.componentRef.setInput('appearance', 'outlined');
    fixture.componentRef.setInput('color', 'critical');
    fixture.detectChanges();
    const chip = fixture.nativeElement.querySelector('.br-chip') as HTMLElement | null;
    expect(chip?.classList.contains('br-chip--outlined')).toBe(true);
    expect(chip?.classList.contains('br-chip--danger')).toBe(true);
  });

  it('should render removable control and emit remove event', () => {
    const onRemove = jasmine.createSpy('onRemove');
    fixture.componentInstance.remove.subscribe(onRemove);
    fixture.componentRef.setInput('removable', true);
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.br-chip__remove') as HTMLButtonElement | null;
    btn?.click();
    expect(onRemove).toHaveBeenCalled();
  });
});
