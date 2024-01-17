import { Directive, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Directive({
  selector: '[nav-container]',
  standalone: true,
})
export class RouteContainerDirective {
  constructor(
    private _el: ElementRef,
    private router: Router,
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this._el.nativeElement.scrollTo(0, 0);
      }
    });
  }
}
