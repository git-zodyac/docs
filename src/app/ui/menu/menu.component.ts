import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { TranslocoModule, provideTranslocoLoadingTpl } from '@ngneat/transloco';
import { RouterSpinnerComponent } from '../router-spinner/router-spinner.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  providers: [provideTranslocoLoadingTpl(RouterSpinnerComponent)],
  imports: [
    MatListModule,
    MatIconModule,
    MatDividerModule,
    TranslocoModule,
    RouterModule,
  ],
})
export class MenuComponent {}
