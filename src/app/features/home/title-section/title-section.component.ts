import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'section[title]',
  templateUrl: './title-section.component.html',
  styleUrl: './title-section.component.scss',
  imports: [MatButtonModule, MatIconModule, TranslocoModule],
})
export class TitleSectionComponent {}
