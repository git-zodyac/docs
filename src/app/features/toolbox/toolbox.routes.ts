import { Routes } from '@angular/router';
import { ToolboxComponent } from './features/toolbox.component';
import { MarkdownView } from '../../markdown-view/markdown-view.component';
import { ToolboxResolver } from '../../utils/toolbox.resolver';
import { provideTranslocoScope } from '@ngneat/transloco';

export const routes: Routes = [
  {
    path: '',
    title: 'Toolbox | Zodyac',
    providers: [provideTranslocoScope('toolbox')],
    component: ToolboxComponent,
  },
  {
    path: ':page',
    component: MarkdownView,
    resolve: {
      doc: ToolboxResolver,
    },
  },
];
