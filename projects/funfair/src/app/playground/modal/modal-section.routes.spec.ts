import { MODAL_SECTION_CHILD_ROUTES } from './modal-section.routes';

describe('modal-section.routes', () => {
  it('defines playground and catalog child routes', () => {
    expect(MODAL_SECTION_CHILD_ROUTES.length).toBe(2);
    expect(MODAL_SECTION_CHILD_ROUTES[0]?.path).toBe('');
    expect(MODAL_SECTION_CHILD_ROUTES[1]?.path).toBe('catalog');
  });
});
