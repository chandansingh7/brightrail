import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundThemeService } from '../playground-theme.service';
import { PlaygroundFxSettingsComponent } from './playground-fx-settings.component';

describe('PlaygroundFxSettingsComponent', () => {
  let fixture: ComponentFixture<PlaygroundFxSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaygroundFxSettingsComponent],
      providers: [PlaygroundThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaygroundFxSettingsComponent);
    fixture.detectChanges();
  });

  it('renders site and preview shell selects', () => {
    const selects = fixture.nativeElement.querySelectorAll('select');
    expect(selects.length).toBe(2);
  });

  it('updates previewFx model when preview select changes', () => {
    const previewSelect = fixture.nativeElement.querySelectorAll('select')[1] as HTMLSelectElement;
    previewSelect.value = 'cyber';
    previewSelect.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(fixture.componentInstance.previewFx()).toBe('cyber');
  });
});
