import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './toolbox.routes';
import { ToolboxComponent } from './features/toolbox/toolbox.component';
import { TranslocoModule } from '@ngneat/transloco';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CodeSnippetPipe } from '../../utils/code-snippet.pipe';
import { ZodEnvComponent } from './features/zod-env/zod-env.component';
import { ZodExpressComponent } from './features/zod-express/zod-express.component';
import { ZodMongooseComponent } from './features/zod-mongoose/zod-mongoose.component';
import { CodeCopyComponent } from '../../ui/code-copy/code-copy.component';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    ToolboxComponent,
    ZodEnvComponent,
    ZodExpressComponent,
    ZodMongooseComponent,
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    CodeSnippetPipe,
    CodeCopyComponent,
    HighlightModule,
  ],
  providers: [provideRouter(routes)],
})
export class ToolboxModule {}
