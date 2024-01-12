import { Component } from '@angular/core';
import { provideTranslocoScope } from '@ngneat/transloco';

@Component({
  selector: 'article[getting-started]',
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss',
  providers: [provideTranslocoScope('getstarted')],
})
export class GettingStartedComponent {}
