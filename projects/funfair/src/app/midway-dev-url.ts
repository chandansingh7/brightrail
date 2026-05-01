import { MIDWAY_DEV_PORT } from './midway-dev-port';

/** Same hostname as Funfair, Midway port — works for localhost and LAN IPs. */
export function midwayDevUrl(): string {
  const { protocol, hostname } = globalThis.location;
  return `${protocol}//${hostname}:${MIDWAY_DEV_PORT}/`;
}
