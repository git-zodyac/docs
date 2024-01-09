import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'section[architecture]',
  templateUrl: './architecture-section.component.html',
  styleUrl: './architecture-section.component.scss',
  imports: [MatButtonModule, MatIconModule],
})
export class ArchitectureSectionComponent {}
