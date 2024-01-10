import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'section[features]',
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss',
  imports: [MatButtonModule, MatIconModule, TranslocoModule],
})
export class FeaturesSectionComponent {}
