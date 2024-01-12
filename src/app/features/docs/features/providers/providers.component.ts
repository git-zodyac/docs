import { Component } from '@angular/core';
import { provideTranslocoScope } from '@ngneat/transloco';

@Component({
  selector: 'article[providers]',
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.scss',
  providers: [provideTranslocoScope('providers')],
})
export class ProvidersComponent {}
