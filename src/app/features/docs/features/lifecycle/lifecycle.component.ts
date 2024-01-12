import { Component } from '@angular/core';
import { provideTranslocoScope } from '@ngneat/transloco';

@Component({
  selector: 'article[lifecycle]',
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss',
  providers: [provideTranslocoScope('lifecycle')],
})
export class LifecycleComponent {}
