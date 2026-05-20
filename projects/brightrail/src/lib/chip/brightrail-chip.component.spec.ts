import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideBrightrailPlatform } from '../platform/brightrail-platform.providers';
import { BrightrailChipComponent } from './brightrail-chip.component';

describe('BrightrailChipComponent', () => {
  let fixture: ComponentFixture<BrightrailChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailChipComponent],
      providers: [provideBrightrailPlatform()],
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

  it('should render selectable chip as a toggle button with aria-pressed', () => {
    const onSelectedChange = jasmine.createSpy('selectedChange');
    fixture.componentInstance.selectedChange.subscribe(onSelectedChange);
    fixture.componentRef.setInput('selectable', true);
    fixture.componentRef.setInput('selected', false);
    fixture.detectChanges();

    const chip = fixture.nativeElement.querySelector('button.br-chip') as HTMLButtonElement;
    expect(chip).toBeTruthy();
    expect(chip.getAttribute('aria-pressed')).toBe('false');
    chip.click();
    expect(onSelectedChange).toHaveBeenCalledWith(true);
  });
});
