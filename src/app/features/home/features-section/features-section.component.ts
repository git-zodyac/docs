import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'section[features]',
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss',
  imports: [MatButtonModule, MatIconModule],
})
export class FeaturesSectionComponent {}
