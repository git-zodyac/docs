import { Routes } from '@angular/router';
import { DocsComponent } from './features/docs.component';
import { provideTranslocoScope } from '@ngneat/transloco';
import { MarkdownView } from '../../markdown-view/markdown-view.component';
import { PageResolver } from '../../utils/page.resolver';

export const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    title: 'Documentation | Zodyac',
    providers: [provideTranslocoScope('docs')],
  },
  {
    path: ':page',
    component: MarkdownView,
    resolve: {
      doc: PageResolver,
    },
    providers: [provideTranslocoScope('getstarted')],
  },
];
