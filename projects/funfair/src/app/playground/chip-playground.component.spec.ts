import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipPlaygroundComponent } from './chip-playground.component';
import { PlaygroundThemeService } from './playground-theme.service';

describe('ChipPlaygroundComponent', () => {
  let fixture: ComponentFixture<ChipPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipPlaygroundComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipPlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('workflow recipe should set critical color and context', () => {
    const cmp = fixture.componentInstance;
    cmp.applyRecipe('enterprise-workflow');
    expect(cmp.color()).toBe('critical');
    expect(cmp.adjacentText()).toBe('Workflow');
  });

  it('html snippet includes removable/selectable flags', () => {
    const cmp = fixture.componentInstance;
    cmp.removable.set(true);
    cmp.selectable.set(true);
    expect(cmp.activeSnippet()).toContain('[removable]="true"');
    expect(cmp.activeSnippet()).toContain('[selectable]="true"');
  });
});
