import { MIDWAY_DEV_PORT } from './midway-dev-port';
import { midwayDevUrl } from './midway-dev-url';

describe('midwayDevUrl', () => {
  it('uses current host and Midway dev port', () => {
    const url = midwayDevUrl();
    expect(url).toContain(`:${MIDWAY_DEV_PORT}/`);
    expect(url.startsWith(`${globalThis.location.protocol}//${globalThis.location.hostname}:`)).toBe(
      true,
    );
  });
});
