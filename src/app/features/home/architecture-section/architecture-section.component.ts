import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'section[architecture]',
  templateUrl: './architecture-section.component.html',
  styleUrl: './architecture-section.component.scss',
  imports: [MatButtonModule, MatIconModule, TranslocoModule, NgOptimizedImage],
})
export class ArchitectureSectionComponent {}
