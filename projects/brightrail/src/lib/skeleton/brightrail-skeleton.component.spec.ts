import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailSkeletonComponent } from './brightrail-skeleton.component';

describe('BrightrailSkeletonComponent', () => {
  let fixture: ComponentFixture<BrightrailSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailSkeletonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailSkeletonComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('applies variant and animation host classes', () => {
    fixture.componentRef.setInput('variant', 'circular');
    fixture.componentRef.setInput('animation', 'pulse');
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.className).toContain('br-skel--circular');
    expect(host.className).toContain('br-skel--anim-pulse');
  });

  it('renders multiple lines for text variant', () => {
    fixture.componentRef.setInput('variant', 'text');
    fixture.componentRef.setInput('lines', 3);
    fixture.detectChanges();
    const blocks = fixture.nativeElement.querySelectorAll('.br-skel__block');
    expect(blocks.length).toBe(3);
    expect(fixture.nativeElement.querySelector('.br-skel__stack')).toBeTruthy();
  });

  it('sets width and height CSS variables from inputs', () => {
    fixture.componentRef.setInput('width', '8rem');
    fixture.componentRef.setInput('height', '1rem');
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.style.getPropertyValue('--br-skel-width')).toBe('8rem');
    expect(host.style.getPropertyValue('--br-skel-height')).toBe('1rem');
  });
});
