import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreePlaygroundComponent } from './tree-playground.component';
import { PlaygroundThemeService } from '../playground-theme.service';

describe('TreePlaygroundComponent', () => {
  let fixture: ComponentFixture<TreePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreePlaygroundComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(TreePlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('single selection recipe sets selection mode', () => {
    fixture.componentInstance.onRecipeNgModelChange('select-single');
    expect(fixture.componentInstance.selectionMode()).toBe('single');
    expect(fixture.componentInstance.buildHtml()).toContain('brightrail-tree');
  });

  it('dual tree recipe enables showDual', () => {
    fixture.componentInstance.onRecipeNgModelChange('adv-dual');
    expect(fixture.componentInstance.showDual()).toBe(true);
  });
});
