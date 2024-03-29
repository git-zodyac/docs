import { Component } from '@angular/core';
import { PlaceholderPipe } from './placeholder.pipe';

@Component({
  standalone: true,
  selector: 'article[skeleton]',
  templateUrl: './page-skeleton.component.html',
  styleUrls: ['../../features/common.scss', './page-skeleton.component.scss'],
  imports: [PlaceholderPipe],
})
export class PageSkeleton {}
