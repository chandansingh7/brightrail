import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LibraryShowcaseComponent } from './library-showcase.component';

describe('LibraryShowcaseComponent', () => {
  let fixture: ComponentFixture<LibraryShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryShowcaseComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryShowcaseComponent);
    fixture.detectChanges();
  });

  it('renders showcase sections and explore links', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('brightrail-breadcrumb')).toBeTruthy();
    expect(el.textContent).toContain('Implementation guide');
    expect(el.textContent).toContain('provideBrightrailPlatform');
    expect(el.querySelectorAll('.res-page__pill').length).toBeGreaterThan(0);
  });
});
