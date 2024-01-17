import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './toolbox.routes';
import { ToolboxComponent } from './features/toolbox.component';
import { TranslocoModule } from '@ngneat/transloco';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CodeSnippetPipe } from '../../utils/code-snippet.pipe';

@NgModule({
  declarations: [ToolboxComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    CodeSnippetPipe,
  ],
  providers: [provideRouter(routes)],
})
export class ToolboxModule {}
