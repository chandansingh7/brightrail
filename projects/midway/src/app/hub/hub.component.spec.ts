import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HubComponent } from './hub.component';

describe('HubComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HubComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('lists all six demo sites as clickable tiles', () => {
    const fixture = TestBed.createComponent(HubComponent);
    fixture.detectChanges();
    const tiles = fixture.nativeElement.querySelectorAll('.hub__tile');
    expect(tiles.length).toBe(6);
    expect(fixture.nativeElement.querySelectorAll('brightrail-card').length).toBe(0);
  });
});
