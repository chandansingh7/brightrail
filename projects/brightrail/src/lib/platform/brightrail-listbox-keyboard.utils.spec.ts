import {
  activateListboxOption,
  clampListboxIndex,
  ensureListboxOptionIds,
  queryEnabledListboxOptions,
  resolveListboxKeyAction,
  stepListboxIndex,
} from './brightrail-listbox-keyboard.utils';

describe('brightrail-listbox-keyboard.utils', () => {
  it('maps arrow and selection keys to listbox actions', () => {
    expect(resolveListboxKeyAction('ArrowDown')).toBe('next');
    expect(resolveListboxKeyAction('ArrowUp')).toBe('prev');
    expect(resolveListboxKeyAction('Home')).toBe('first');
    expect(resolveListboxKeyAction('End')).toBe('last');
    expect(resolveListboxKeyAction('Enter')).toBe('select');
    expect(resolveListboxKeyAction(' ')).toBe('select');
    expect(resolveListboxKeyAction('Escape')).toBe('close');
    expect(resolveListboxKeyAction('x')).toBe('none');
  });

  it('queries enabled listbox options', () => {
    const listbox = document.createElement('div');
    listbox.innerHTML = `
      <button type="button" class="br-select-option">A</button>
      <button type="button" class="br-select-option" disabled>B</button>
      <button type="button" class="br-combobox__option">C</button>
    `;
    const options = queryEnabledListboxOptions(listbox);
    expect(options.length).toBe(2);
    expect(options[0]?.textContent).toBe('A');
    expect(options[1]?.textContent).toBe('C');
  });

  it('assigns ids and roles to options', () => {
    const a = document.createElement('button');
    const b = document.createElement('button');
    ensureListboxOptionIds([a, b], 'br-test');
    expect(a.id).toBe('br-test-opt-0');
    expect(b.id).toBe('br-test-opt-1');
    expect(a.getAttribute('role')).toBe('option');
    expect(a.tabIndex).toBe(-1);
  });

  it('steps and clamps listbox indices', () => {
    expect(stepListboxIndex(0, 1, 3)).toBe(1);
    expect(stepListboxIndex(2, 1, 3)).toBe(0);
    expect(stepListboxIndex(-1, 1, 3)).toBe(0);
    expect(clampListboxIndex(5, 3)).toBe(2);
    expect(clampListboxIndex(-2, 3)).toBe(0);
  });

  it('activates an option with click', () => {
    const option = document.createElement('button');
    let clicked = false;
    option.addEventListener('click', () => {
      clicked = true;
    });
    activateListboxOption(option);
    expect(clicked).toBeTrue();
  });
});
