import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailFileUploadComponent } from './brightrail-file-upload.component';

describe('BrightrailFileUploadComponent', () => {
  let fixture: ComponentFixture<BrightrailFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailFileUploadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightrailFileUploadComponent);
    fixture.detectChanges();
  });

  it('creates', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('formats file size in KB and MB', () => {
    const kbFile = new File([new Uint8Array(2048)], 'notes.txt');
    const mbFile = new File([new Uint8Array(3 * 1024 * 1024)], 'archive.zip');
    expect(fixture.componentInstance.formatSize(kbFile)).toBe('2.0 KB');
    expect(fixture.componentInstance.formatSize(mbFile)).toBe('3.0 MB');
  });

  it('applies maxFiles limit on selection', () => {
    fixture.componentRef.setInput('maxFiles', 1);
    fixture.detectChanges();

    const first = new File([new Uint8Array([1])], 'a.txt');
    const second = new File([new Uint8Array([2])], 'b.txt');
    fixture.componentInstance.onFileInputChange({
      target: { files: [first, second], value: '' },
    } as unknown as Event);

    expect((fixture.componentInstance as any).files().length).toBe(1);
    expect((fixture.componentInstance as any).files()[0].name).toBe('a.txt');
  });

  it('filters out files larger than maxFileSizeMb', () => {
    fixture.componentRef.setInput('maxFileSizeMb', 0.001);
    fixture.detectChanges();

    const small = new File([new Uint8Array(100)], 'small.txt');
    const large = new File([new Uint8Array(10_000)], 'large.txt');
    fixture.componentInstance.onFileInputChange({
      target: { files: [small, large], value: '' },
    } as unknown as Event);

    expect((fixture.componentInstance as any).files().length).toBe(1);
    expect((fixture.componentInstance as any).files()[0].name).toBe('small.txt');
  });

  it('maps default status to none', () => {
    fixture.componentRef.setInput('status', 'default');
    fixture.detectChanges();
    expect(fixture.componentInstance.resolvedStatus()).toBe('none');
  });

  it('builds max-size caption with normalized accepted types', () => {
    fixture.componentRef.setInput('accept', '.pdf,.png,.jpg');
    fixture.componentRef.setInput('maxFileSizeMb', 10);
    fixture.detectChanges();
    expect((fixture.componentInstance as any).maxSizeCaption()).toContain('PDF, PNG, JPG');
    expect((fixture.componentInstance as any).maxSizeCaption()).toContain('Max 10MB');
  });

  it('treats state disabled as effectively disabled', () => {
    fixture.componentRef.setInput('state', 'disabled');
    fixture.detectChanges();
    expect((fixture.componentInstance as any).effectiveDisabled()).toBeTrue();
  });

  it('applies variant and state classes to root container', () => {
    fixture.componentRef.setInput('variant', 'compact');
    fixture.componentRef.setInput('state', 'focused');
    fixture.detectChanges();
    const root = fixture.nativeElement.querySelector('.br-fu') as HTMLElement | null;
    expect(root?.classList.contains('br-fu--variant-compact')).toBeTrue();
    expect(root?.classList.contains('br-fu--state-focused')).toBeTrue();
  });

  it('renders provided fileItems with progress values', () => {
    fixture.componentRef.setInput('fileItems', [
      { id: 'a', name: 'design-system.sketch', sizeLabel: '1.5 MB', progress: 42, status: 'uploading' },
    ]);
    fixture.detectChanges();
    const progressText = fixture.nativeElement.querySelector('.br-fu__file-progress-value') as HTMLElement | null;
    expect(progressText?.textContent?.trim()).toBe('42%');
  });

  it('emits fileItemsChange when removing provided fileItems', () => {
    const emitSpy = spyOn(fixture.componentInstance.fileItemsChange, 'emit');
    fixture.componentRef.setInput('fileItems', [
      { id: 'a', name: 'a.txt' },
      { id: 'b', name: 'b.txt' },
    ]);
    fixture.detectChanges();
    fixture.componentInstance.removeFile(0);
    expect(emitSpy).toHaveBeenCalledWith([{ id: 'b', name: 'b.txt' }]);
  });

  it('supports drag-drop commit when enabled', () => {
    const emitSpy = spyOn(fixture.componentInstance.filesChange, 'emit');
    const dropped = new File([new Uint8Array([1, 2, 3])], 'drop.txt');
    fixture.componentRef.setInput('enableDragDrop', true);
    fixture.detectChanges();
    fixture.componentInstance.onDrop({
      preventDefault: () => undefined,
      dataTransfer: { files: [dropped] as unknown as FileList },
    } as unknown as DragEvent);
    expect(emitSpy).toHaveBeenCalled();
  });

  it('appends selected files to external fileItems', () => {
    const emitSpy = spyOn(fixture.componentInstance.fileItemsChange, 'emit');
    fixture.componentRef.setInput('fileItems', [{ id: 'a', name: 'existing.txt', sizeLabel: '1 KB' }]);
    fixture.detectChanges();
    const selected = new File([new Uint8Array([1])], 'new.txt');
    fixture.componentInstance.onFileInputChange({
      target: { files: [selected], value: '' },
    } as unknown as Event);
    expect(emitSpy).toHaveBeenCalled();
    const emitted = emitSpy.calls.mostRecent().args[0] as any[];
    expect(emitted.length).toBe(2);
    expect(emitted[1].name).toBe('new.txt');
  });

  it('renders enterprise metadata block when enterprise pattern is set', () => {
    fixture.componentRef.setInput('surface', 'enterprise');
    fixture.componentRef.setInput('enterprisePattern', 'document-submission');
    fixture.componentRef.setInput('enterpriseSecondaryText', 'NDA_Agreement.pdf');
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.br-fu__enterprise-title') as HTMLElement | null;
    const meta = fixture.nativeElement.querySelector('.br-fu__enterprise-meta') as HTMLElement | null;
    expect(title?.textContent).toContain('Document submission');
    expect(meta?.textContent).toContain('NDA_Agreement.pdf');
  });
});
