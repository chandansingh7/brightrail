import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationPlaygroundComponent } from './pagination-playground.component';

describe('PaginationPlaygroundComponent', () => {
  let fixture: ComponentFixture<PaginationPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [PaginationPlaygroundComponent] }).compileComponents();
    fixture = TestBed.createComponent(PaginationPlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('reflects recipe in HTML snippet', () => {
    fixture.componentInstance.onRecipeNgModelChange('mobile-stack');
    fixture.detectChanges();
    expect(fixture.componentInstance.buildHtml()).toContain(`'mobile'`);
  });

  it('reflects mobile-sheet recipe', () => {
    fixture.componentInstance.onRecipeNgModelChange('mobile-sheet-ui');
    fixture.detectChanges();
    expect(fixture.componentInstance.buildHtml()).toContain(`'mobile-sheet'`);
  });
});
