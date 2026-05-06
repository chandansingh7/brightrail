import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrightrailWelcomeComponent } from './brightrail-welcome.component';

describe('BrightrailWelcomeComponent', () => {
  let fixture: ComponentFixture<BrightrailWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailWelcomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailWelcomeComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render library label', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Fun Angular Component Library');
  });
});
