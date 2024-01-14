import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import {
  provideTransloco,
  provideTranslocoLoadingTpl,
} from '@ngneat/transloco';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { PageSkeleton } from './ui/page-skeleton/page-skeleton.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(HttpClientModule),
    provideTranslocoLoadingTpl(PageSkeleton),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'ru'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
  ],
};
