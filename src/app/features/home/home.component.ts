import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TitleSectionComponent } from './title-section/title-section.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { ConceptSectionComponent } from './concept-section/concept-section.component';
import { ArchitectureSectionComponent } from './architecture-section/architecture-section.component';
import { CoreFeaturesSectionComponent } from './core-features-section/core-features-section.component';
import { GettingStartedSectionComponent } from './getting-started-section/getting-started-section.component';

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
    CoreFeaturesSectionComponent,
    ArchitectureSectionComponent,
    GettingStartedSectionComponent,
  ],
})
export class HomeComponent {}
