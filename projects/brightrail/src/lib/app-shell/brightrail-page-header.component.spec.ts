import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailPageHeaderComponent } from './brightrail-page-header.component';

describe('BrightrailPageHeaderComponent', () => {
  let fixture: ComponentFixture<BrightrailPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailPageHeaderComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BrightrailPageHeaderComponent);
    fixture.detectChanges();
  });

  it('renders header with actions region', () => {
    expect(fixture.nativeElement.querySelector('header.br-page-header')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('.br-page-header__actions')).not.toBeNull();
  });
});
