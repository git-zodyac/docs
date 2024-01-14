import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/errors/not-found/not-found.component';
import { provideTranslocoScope } from '@ngneat/transloco';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    providers: [provideTranslocoScope('home')],
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
    providers: [provideTranslocoScope('errors')],
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
