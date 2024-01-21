import { Component, ViewChild } from '@angular/core';
import { MarkdownComponent, MarkdownModule } from 'ngx-markdown';
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
  public readonly doc: string;

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

  @ViewChild(MarkdownComponent, { static: true })
  markdown!: MarkdownComponent;

  ngAfterViewInit() {
    setTimeout(() => {
      const links = this.markdown.element.nativeElement.querySelectorAll('a');
      links.forEach((link) => {
        if (link.host !== window.location.host) link.target = '_blank';
        else {
          link.addEventListener('click', (e: MouseEvent) => {
            e.preventDefault();
            this.router.navigateByUrl(link.pathname);
          });
        }
      });
    });
  }
}
