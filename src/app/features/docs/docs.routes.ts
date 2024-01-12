import { Routes } from '@angular/router';
import { DocsComponent } from './features/docs/docs.component';
import { GettingStartedComponent } from './features/getting-started/getting-started.component';
import { InstallationComponent } from './features/installation/installation.component';
import { CoreConceptsComponent } from './features/core-concepts/core-concepts.component';
import { ApiEnginesComponent } from './features/api-engines/api-engines.component';
import { ProvidersComponent } from './features/providers/providers.component';

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
    path: 'installation',
    component: InstallationComponent,
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
    path: 'providers',
    component: ProvidersComponent,
  },
];
