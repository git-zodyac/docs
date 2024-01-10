import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'section[concept]',
  templateUrl: './concept-section.component.html',
  styleUrl: './concept-section.component.scss',
  imports: [TranslocoModule],
})
export class ConceptSectionComponent {}
