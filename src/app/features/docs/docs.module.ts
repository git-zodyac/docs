import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';
import { routes } from './docs.routes';
import { DocsComponent } from './features/docs/docs.component';
import { GettingStartedComponent } from './features/getting-started/getting-started.component';
import { InstallationComponent } from './features/installation/installation.component';
import { CoreConceptsComponent } from './features/core-concepts/core-concepts.component';
import { ApiEnginesComponent } from './features/api-engines/api-engines.component';
import { TranslocoModule } from '@ngneat/transloco';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeCopyComponent } from '../../ui/code-copy/code-copy.component';
import { ProvidersComponent } from './features/providers/providers.component';

@NgModule({
  declarations: [
    DocsComponent,
    GettingStartedComponent,
    InstallationComponent,
    CoreConceptsComponent,
    ApiEnginesComponent,
    ProvidersComponent,
  ],
  imports: [CommonModule, TranslocoModule, HighlightModule, CodeCopyComponent],
  providers: [provideRouter(routes)],
})
export class DocsModule {}
