import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './docs.routes';
import { DocsComponent } from './features/docs.component';
import { TranslocoModule } from '@ngneat/transloco';
import { CodeSnippetPipe } from '../../utils/code-snippet.pipe';

@NgModule({
  declarations: [DocsComponent],
  providers: [provideRouter(routes)],
  imports: [CommonModule, TranslocoModule, CodeSnippetPipe, RouterModule],
})
export class DocsModule {}
