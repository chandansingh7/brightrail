import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  BrightrailPageHeaderActionsDirective,
  BrightrailPageSubtitleDirective,
  BrightrailPageTitleDirective,
} from './brightrail-app-shell.directives';
import { BrightrailPageHeaderComponent } from './brightrail-page-header.component';

@Component({
  standalone: true,
  imports: [
    BrightrailPageHeaderComponent,
    BrightrailPageTitleDirective,
    BrightrailPageSubtitleDirective,
    BrightrailPageHeaderActionsDirective,
  ],
  template: `
    <brightrail-page-header
      [title]="title"
      [subtitle]="subtitle"
      [bordered]="bordered"
    >
      <h1 brightrailPageTitle>Projected title</h1>
      <p brightrailPageSubtitle>Projected subtitle</p>
      <div brightrailPageHeaderActions>
        <button type="button">Save</button>
      </div>
    </brightrail-page-header>
  `,
})
class PageHeaderHostComponent {
  title: string | undefined;
  subtitle: string | undefined;
  bordered = true;
}

describe('BrightrailPageHeaderComponent', () => {
  let fixture: ComponentFixture<PageHeaderHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeaderHostComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PageHeaderHostComponent);
  });

  it('renders header with actions region', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('header.br-page-header')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('.br-page-header__actions')).not.toBeNull();
  });

  it('renders title and subtitle from inputs', () => {
    fixture.componentInstance.title = 'Billing';
    fixture.componentInstance.subtitle = 'Manage invoices and payouts';
    fixture.detectChanges();

    const title = fixture.nativeElement.querySelector('.br-page-header__title');
    const subtitle = fixture.nativeElement.querySelector('.br-page-header__subtitle');

    expect(title?.textContent?.trim()).toBe('Billing');
    expect(subtitle?.textContent?.trim()).toBe('Manage invoices and payouts');
    expect(fixture.nativeElement.textContent).not.toContain('Projected title');
  });

  it('falls back to projected title and subtitle when inputs are unset', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Projected title');
    expect(fixture.nativeElement.textContent).toContain('Projected subtitle');
    expect(fixture.nativeElement.querySelectorAll('.br-page-header__title').length).toBe(1);
  });

  it('applies bordered modifier from input', () => {
    fixture.componentInstance.bordered = false;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.br-page-header--bordered')).toBeNull();
  });
});
