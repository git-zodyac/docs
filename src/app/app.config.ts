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
import { PageSkeleton } from './ui/page-skeleton/page-skeleton.component';
import { provideMarkdown } from 'ngx-markdown';
import {
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule,
} from 'ngx-google-analytics';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(NgxGoogleAnalyticsModule.forRoot('G-4FT4VBVSJF')),
    importProvidersFrom(NgxGoogleAnalyticsRouterModule),
    provideTranslocoLoadingTpl(PageSkeleton),
    provideHttpClient(),
    provideMarkdown(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'ru'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
