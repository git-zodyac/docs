import { Routes } from '@angular/router';
import { DocsComponent } from './features/docs/docs.component';
import { GettingStartedComponent } from './features/getting-started/getting-started.component';
import { CoreConceptsComponent } from './features/core-concepts/core-concepts.component';
import { ApiEnginesComponent } from './features/api-engines/api-engines.component';
import { ProvidersComponent } from './features/providers/providers.component';
import { LifecycleComponent } from './features/lifecycle/lifecycle.component';
import { provideTranslocoScope } from '@ngneat/transloco';

export const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    title: 'Documentation | Zodyac',
    providers: [provideTranslocoScope('docs')],
  },
  {
    path: 'getting-started',
    component: GettingStartedComponent,
    title: 'Getting started | Zodyac',
    providers: [provideTranslocoScope('getstarted')],
  },
  {
    path: 'core-concepts',
    title: 'Core concepts | Zodyac',
    component: CoreConceptsComponent,
    providers: [provideTranslocoScope('coreconcepts')],
  },
  {
    path: 'api-engines',
    title: 'API Engines | Zodyac',
    component: ApiEnginesComponent,
  },
  {
    path: 'lifecycle',
    title: 'Module lifecycle | Zodyac',
    component: LifecycleComponent,
    providers: [provideTranslocoScope('lifecycle')],
  },
  {
    path: 'providers',
    title: 'Module providers | Zodyac',
    component: ProvidersComponent,
    providers: [provideTranslocoScope('providers')],
  },
];
