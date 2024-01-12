import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/errors/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'docs',
    loadChildren: () =>
      import('./features/docs/docs.module').then((m) => m.DocsModule),
  },
  {
    path: 'toolbox',
    loadChildren: () =>
      import('./features/toolbox/toolbox.module').then((m) => m.ToolboxModule),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
