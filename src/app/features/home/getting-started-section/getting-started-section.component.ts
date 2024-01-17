import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  standalone: true,
  selector: 'section[getting-started]',
  templateUrl: './getting-started-section.component.html',
  styleUrl: './getting-started-section.component.scss',
  imports: [MatButtonModule, MatIconModule, TranslocoModule, MarkdownModule],
})
export class GettingStartedSectionComponent {
  install = '```console\nnpm install -g @zodyac/cli\n```';
  init = '```console\nzy init\n```';
  serve = '```console\nzy serve\n```';
}
