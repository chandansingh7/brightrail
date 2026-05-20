import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandPalettePlaygroundComponent } from './command-palette-playground.component';
import { PlaygroundThemeService } from '../playground-theme.service';

describe('CommandPalettePlaygroundComponent', () => {
  let fixture: ComponentFixture<CommandPalettePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandPalettePlaygroundComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(CommandPalettePlaygroundComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('empty recipe clears commands', () => {
    fixture.componentInstance.onRecipeNgModelChange('empty');
    expect(fixture.componentInstance.commands()).toEqual([]);
  });

  it('openPalette sets isOpen true', () => {
    fixture.componentInstance.isOpen.set(false);
    fixture.componentInstance.openPalette();
    expect(fixture.componentInstance.isOpen()).toBe(true);
  });
});
