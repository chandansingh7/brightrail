import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Router } from '@angular/router';

import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
  });

  it('should create the app', async () => {
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/button');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render playground shell after navigation', async () => {
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/button');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.pf-header__title')?.textContent).toContain(
      'Angular component playground',
    );
  });
});
