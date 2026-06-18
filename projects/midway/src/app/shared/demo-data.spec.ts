import { tablePagination } from './demo-data';

describe('demo-data', () => {
  it('builds pagination config with defaults', () => {
    expect(tablePagination()).toEqual({ pageSize: 5, pageSizeOptions: [5, 10, 25] });
  });

  it('accepts custom page size', () => {
    expect(tablePagination(10).pageSize).toBe(10);
  });
});
