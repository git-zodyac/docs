import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/errors/not-found/not-found.component';
import { provideTranslocoScope } from '@ngneat/transloco';
import { MarkdownView } from './markdown-view/markdown-view.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Zodyac – A Zod-based framework for Node.js',
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
    title: 'Page not found | Zodyac',
    component: NotFoundComponent,
    providers: [provideTranslocoScope('errors')],
  },
  {
    path: 'experimental-md',
    component: MarkdownView,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
