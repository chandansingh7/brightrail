/**
 * Static avatars from `projects/funfair/public/images/avatar/`.
 * Served at `/images/avatar/*` (see `angular.json` asset config).
 */
export const FF_AVATAR_PUBLIC = {
  a01: '/images/avatar/avatar-01.png',
  a02: '/images/avatar/avatar-02.png',
  a03: '/images/avatar/avatar-03.png',
  a04: '/images/avatar/avatar-04.png',
  a05: '/images/avatar/avatar-05.png',
  a06: '/images/avatar/avatar-06.png',
  a07: '/images/avatar/avatar-07.png',
  a08: '/images/avatar/avatar-08.png',
} as const;

export const FF_AVATAR_DEFAULT_SRC = FF_AVATAR_PUBLIC.a01;
export const FF_AVATAR_STACK_SRC = FF_AVATAR_PUBLIC.a02;
export const FF_AVATAR_PROFILE_ALT_SRC = FF_AVATAR_PUBLIC.a03;
