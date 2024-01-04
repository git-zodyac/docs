import { Injectable, effect, signal } from '@angular/core';

type Theme = 'light' | 'dark' | undefined;

@Injectable({
  providedIn: 'root',
})
export class ThemeToggleService {
  theme = signal<Theme>(localStorage.getItem('__theme') as Theme);

  constructor() {
    effect(() => {
      const theme = this.theme();
      document.body.classList.remove('theme-light', 'theme-dark');

      if (!theme) {
        localStorage.removeItem('__theme');
        return;
      }

      document.body.classList.add(`theme-${theme}`);
      localStorage.setItem('__theme', theme);
    });

    const theme = localStorage.getItem('__theme') as Theme;
    if (!theme) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.theme.set('dark');
        return;
      }

      this.theme.set('light');
      return;
    }
  }

  toggle(): void {
    if (!this.theme()) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.theme.set('light');
        return;
      }

      this.theme.set('light');
      return;
    }

    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark');
  }

  reset(): void {
    this.theme.set(undefined);
  }
}
