import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './docs.routes';
import { DocsComponent } from './features/docs/docs.component';
import { GettingStartedComponent } from './features/getting-started/getting-started.component';
import { CoreConceptsComponent } from './features/core-concepts/core-concepts.component';
import { ApiEnginesComponent } from './features/api-engines/api-engines.component';
import { TranslocoModule } from '@ngneat/transloco';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeCopyComponent } from '../../ui/code-copy/code-copy.component';
import { ProvidersComponent } from './features/providers/providers.component';
import { CodeSnippetPipe } from '../../utils/code-snippet.pipe';
import { LifecycleComponent } from './features/lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    DocsComponent,
    GettingStartedComponent,
    CoreConceptsComponent,
    ApiEnginesComponent,
    LifecycleComponent,
    ProvidersComponent,
  ],
  providers: [provideRouter(routes)],
  imports: [
    CommonModule,
    TranslocoModule,
    HighlightModule,
    CodeCopyComponent,
    CodeSnippetPipe,
    RouterModule,
  ],
})
export class DocsModule {}
