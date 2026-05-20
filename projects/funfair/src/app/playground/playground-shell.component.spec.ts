import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PlaygroundShellComponent } from './playground-shell.component';
import { PlaygroundThemeService } from './playground-theme.service';

describe('PlaygroundShellComponent', () => {
  let fixture: ComponentFixture<PlaygroundShellComponent>;
  let component: PlaygroundShellComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaygroundShellComponent],
      providers: [
        provideRouter([]),
        {
          provide: PlaygroundThemeService,
          useValue: { theme: () => 'light', setTheme: jasmine.createSpy('setTheme') },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaygroundShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('starts with mobile navigation closed', () => {
    expect(component.navOpen()).toBeFalse();
  });

  it('toggles mobile navigation', () => {
    component.toggleNav();
    expect(component.navOpen()).toBeTrue();
    component.toggleNav();
    expect(component.navOpen()).toBeFalse();
  });

  it('closes mobile navigation explicitly', () => {
    component.toggleNav();
    component.closeNav();
    expect(component.navOpen()).toBeFalse();
  });
});
