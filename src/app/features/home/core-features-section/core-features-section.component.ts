import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'section[core-features]',
  templateUrl: './core-features-section.component.html',
  styleUrl: './core-features-section.component.scss',
  imports: [TranslocoModule],
})
export class CoreFeaturesSectionComponent {}
