import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightrailCommandPaletteComponent } from './brightrail-command-palette.component';

describe('BrightrailCommandPaletteComponent', () => {
  let fixture: ComponentFixture<BrightrailCommandPaletteComponent>;
  let host: BrightrailCommandPaletteComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrightrailCommandPaletteComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BrightrailCommandPaletteComponent);
    host = fixture.componentInstance;
  });

  it('filters commands from the query input', () => {
    fixture.componentRef.setInput('isOpen', true);
    fixture.componentRef.setInput('commands', [
      { id: 'one', label: 'Alpha' },
      { id: 'two', label: 'Beta' },
    ]);
    fixture.detectChanges();

    host.onQueryInput({ target: { value: 'bet' } } as unknown as Event);
    fixture.detectChanges();

    expect(host.filteredItems().map((i) => i.id)).toEqual(['two']);
  });

  it('moves active item with arrow keys and selects on Enter', () => {
    const selected: string[] = [];
    fixture.componentRef.setInput('isOpen', true);
    fixture.componentRef.setInput('commands', [
      { id: 'one', label: 'Alpha' },
      { id: 'two', label: 'Beta' },
    ]);
    host.commandSelect.subscribe((item) => selected.push(item.id));
    fixture.detectChanges();

    host.onDialogKeydown(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
    host.onDialogKeydown(new KeyboardEvent('keydown', { key: 'Enter' }));
    expect(selected).toEqual(['two']);
  });

  it('emits closed on backdrop click when enabled', () => {
    const closed: number[] = [];
    fixture.componentRef.setInput('isOpen', true);
    fixture.componentRef.setInput('commands', [{ id: 'one', label: 'Alpha' }]);
    host.closed.subscribe(() => closed.push(1));
    fixture.detectChanges();

    host.onBackdropClick();
    expect(closed).toEqual([1]);
  });
});
