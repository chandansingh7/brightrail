import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailCardActionsComponent } from './brightrail-card-actions.component';

describe('BrightrailCardActionsComponent', () => {
  let fixture: ComponentFixture<BrightrailCardActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailCardActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailCardActionsComponent);
    fixture.detectChanges();
  });

  it('should apply align modifier class', () => {
    fixture.componentRef.setInput('align', 'between');
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.classList.contains('br-card-actions--between')).toBe(true);
  });
});
