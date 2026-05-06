import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailIconComponent } from './brightrail-icon.component';

describe('BrightrailIconComponent', () => {
  let fixture: ComponentFixture<BrightrailIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailIconComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render more_vert glyph', () => {
    fixture.componentRef.setInput('name', 'more_vert');
    fixture.detectChanges();
    const svg = (fixture.nativeElement as HTMLElement).querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg?.querySelectorAll('circle').length).toBe(3);
  });
});
