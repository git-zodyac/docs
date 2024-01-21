import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { TranslocoModule } from '@ngneat/transloco';
import { VersionSelect } from '../version-select/version-select.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  imports: [
    MatListModule,
    MatIconModule,
    MatDividerModule,
    TranslocoModule,
    RouterModule,
    VersionSelect,
  ],
})
export class MenuComponent {}
