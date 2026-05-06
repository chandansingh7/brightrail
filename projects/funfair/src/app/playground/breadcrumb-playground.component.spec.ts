import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbPlaygroundComponent } from './breadcrumb-playground.component';

describe('BreadcrumbPlaygroundComponent', () => {
  let fixture: ComponentFixture<BreadcrumbPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbPlaygroundComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BreadcrumbPlaygroundComponent);
    fixture.detectChanges();
  });

  it('creates', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
