import { Routes } from '@angular/router';
import { DocsComponent } from './features/docs/docs.component';
import { GettingStartedComponent } from './features/getting-started/getting-started.component';
import { CoreConceptsComponent } from './features/core-concepts/core-concepts.component';
import { ApiEnginesComponent } from './features/api-engines/api-engines.component';
import { ProvidersComponent } from './features/providers/providers.component';
import { LifecycleComponent } from './features/lifecycle/lifecycle.component';

export const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
  },
  {
    path: 'getting-started',
    component: GettingStartedComponent,
  },
  {
    path: 'core-concepts',
    component: CoreConceptsComponent,
  },
  {
    path: 'api-engines',
    component: ApiEnginesComponent,
  },
  {
    path: 'lifecycle',
    component: LifecycleComponent,
  },
  {
    path: 'providers',
    component: ProvidersComponent,
  },
];
