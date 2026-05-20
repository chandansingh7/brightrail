import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailTopBarComponent } from './brightrail-top-bar.component';

describe('BrightrailTopBarComponent', () => {
  let fixture: ComponentFixture<BrightrailTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailTopBarComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BrightrailTopBarComponent);
    fixture.detectChanges();
  });

  it('renders start, center, and end regions', () => {
    expect(fixture.nativeElement.querySelector('.br-top-bar__start')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('.br-top-bar__center')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('.br-top-bar__end')).not.toBeNull();
  });
});
