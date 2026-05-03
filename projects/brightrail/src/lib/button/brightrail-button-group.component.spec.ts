import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailButtonGroupComponent } from './brightrail-button-group.component';

describe('BrightrailButtonGroupComponent', () => {
  let fixture: ComponentFixture<BrightrailButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailButtonGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailButtonGroupComponent);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should set segmented mode class by default', () => {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('.br-group--segmented');
    expect(el).toBeTruthy();
  });

  it('should set pill mode when input is pill', () => {
    fixture.componentRef.setInput('mode', 'pill');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.br-group--pill')).toBeTruthy();
  });
});
