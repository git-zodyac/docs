import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TitleSectionComponent } from './title-section/title-section.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { ConceptSectionComponent } from './concept-section/concept-section.component';
import { ArchitectureSectionComponent } from './architecture-section/architecture-section.component';

@Component({
  standalone: true,
  selector: 'article[home]',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    MatButtonModule,
    MatIconModule,
    TitleSectionComponent,
    FeaturesSectionComponent,
    ConceptSectionComponent,
    ArchitectureSectionComponent,
  ],
})
export class HomeComponent {}
