import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailEmptyStateComponent } from './brightrail-empty-state.component';

describe('BrightrailEmptyStateComponent', () => {
  let fixture: ComponentFixture<BrightrailEmptyStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailEmptyStateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailEmptyStateComponent);
    fixture.componentRef.setInput('title', 'No results');
    fixture.componentRef.setInput('description', 'Try adjusting your filters.');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders title and description', () => {
    expect(fixture.nativeElement.querySelector('.br-empty__title')?.textContent).toContain(
      'No results',
    );
    expect(fixture.nativeElement.querySelector('.br-empty__desc')?.textContent).toContain(
      'Try adjusting',
    );
  });

  it('applies compact class', () => {
    fixture.componentRef.setInput('compact', true);
    fixture.detectChanges();
    const shell = fixture.nativeElement.querySelector('.br-empty') as HTMLElement;
    expect(shell.classList.contains('br-empty--compact')).toBeTrue();
  });
});
