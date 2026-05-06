import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailProgressFileRowComponent } from './brightrail-progress-file-row.component';

describe('BrightrailProgressFileRowComponent', () => {
  let fixture: ComponentFixture<BrightrailProgressFileRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailProgressFileRowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailProgressFileRowComponent);
    fixture.componentRef.setInput('fileName', 'doc.pdf');
    fixture.componentRef.setInput('fileSizeLabel', '1 MB');
    fixture.componentRef.setInput('value', 40);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show queued state without progress bar', () => {
    fixture.componentRef.setInput('state', 'queued');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.br-prog-file__queued')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('brightrail-progress')).toBeNull();
  });
});
