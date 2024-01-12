import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeCopyComponent } from '../../../ui/code-copy/code-copy.component';

@Component({
  standalone: true,
  selector: 'section[getting-started]',
  templateUrl: './getting-started-section.component.html',
  styleUrl: './getting-started-section.component.scss',
  imports: [
    MatButtonModule,
    MatIconModule,
    TranslocoModule,
    HighlightModule,
    CodeCopyComponent,
  ],
})
export class GettingStartedSectionComponent {}
