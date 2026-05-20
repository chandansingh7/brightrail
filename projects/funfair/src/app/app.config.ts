import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideBrightrailPlatform } from 'brightrail';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideBrightrailPlatform(),
    // Hash routing avoids GitHub Pages "deep path" 404s for client-side routes.
    provideRouter(routes, withHashLocation())
  ]
};
