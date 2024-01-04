import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'section[title]',
  templateUrl: './title-section.component.html',
  styleUrl: './title-section.component.scss',
  imports: [MatButtonModule, MatIconModule],
})
export class TitleSectionComponent {}
