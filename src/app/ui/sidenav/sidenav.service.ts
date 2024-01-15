import { ViewportRuler } from '@angular/cdk/scrolling';
import { Injectable, effect, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

type SidebarMode = 'side' | 'push';

@Injectable()
export class SidenavService {
  public readonly state = signal(
    window.matchMedia('(min-width: 1024px)').matches,
  );
  mode: SidebarMode = 'push';

  private onResizeSubscription!: Subscription;

  constructor(
    private router: Router,
    private viewportRuler: ViewportRuler,
  ) {
    const { width } = this.viewportRuler.getViewportSize();
    if (width > 1024) this.mode = 'side';
    this.onResizeSubscription = this.viewportRuler.change().subscribe(() => {
      const { width } = this.viewportRuler.getViewportSize();
      this.mode = width > 1024 ? 'side' : 'push';
    });

    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        filter(() => this.mode != 'side'),
      )
      .subscribe(() => this.state.update(() => false));

    effect(() => {
      localStorage.setItem('app-sidebar-state', this.state() ? 'true' : '');
    });
  }

  toggle(): void {
    this.state.set(!this.state());
  }

  ngOnDestroy() {
    this.onResizeSubscription.unsubscribe();
  }
}
