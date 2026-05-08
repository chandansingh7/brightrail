import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioPlaygroundComponent } from './radio-playground.component';

describe('RadioPlaygroundComponent', () => {
  let fixture: ComponentFixture<RadioPlaygroundComponent>;
  let component: RadioPlaygroundComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioPlaygroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates', () => {
    expect(component).toBeTruthy();
  });

  it('switches to group recipe', () => {
    component.onRecipeNgModelChange('group');
    expect(component.recipe()).toBe('group');
  });
});

