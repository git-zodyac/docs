import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'article[markdown-view]',
  templateUrl: './markdown-view.component.html',
  styleUrl: './markdown-view.component.scss',
  imports: [CommonModule, MarkdownModule],
})
export class MarkdownView {
  doc: string;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    const res = this.route.snapshot.data['doc'];
    this.doc = res.content;
    this.title.setTitle(res.title + ' | Zodyac');
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}
