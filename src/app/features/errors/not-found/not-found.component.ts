import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'not-found[article]',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  imports: [MatButtonModule, MatIconModule, RouterModule],
})
export class NotFoundComponent {}
