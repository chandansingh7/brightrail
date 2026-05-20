import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { VariationsHubComponent } from './variations-hub.component';

describe('VariationsHubComponent', () => {
  let fixture: ComponentFixture<VariationsHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariationsHubComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(VariationsHubComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('lists catalog entries with playground links', () => {
    const cards = fixture.nativeElement.querySelectorAll('.vh-card');
    expect(cards.length).toBe(fixture.componentInstance.entries.length);
    expect(fixture.nativeElement.textContent).toContain('brightrail-alert');
  });

  it('builds multi-segment catalog router links', () => {
    expect(fixture.componentInstance.catalogRouteSegments('button/catalog')).toEqual([
      '/',
      'button',
      'catalog',
    ]);
  });
});
