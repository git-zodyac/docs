import { Injectable, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterSpinnerService {
  public readonly showSpinner = signal(false);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showSpinner.set(true);
      } else if (event instanceof NavigationEnd) {
        this.showSpinner.set(false);
      }
    });
  }
}
