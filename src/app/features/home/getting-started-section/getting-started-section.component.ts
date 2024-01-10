import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'section[getting-started]',
  templateUrl: './getting-started-section.component.html',
  styleUrl: './getting-started-section.component.scss',
  imports: [MatButtonModule, MatIconModule, TranslocoModule],
})
export class GettingStartedSectionComponent {}
