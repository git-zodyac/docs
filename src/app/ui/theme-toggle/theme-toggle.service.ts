import { Injectable, effect, signal } from '@angular/core';

type Theme = 'light' | 'dark' | undefined;

@Injectable({
  providedIn: 'root',
})
export class ThemeToggleService {
  readonly theme = signal<Theme | null>(
    localStorage.getItem('__theme') as Theme | null,
  );

  private isDefaultDark = window.matchMedia('(prefers-color-scheme: dark)');
  readonly device = signal<Theme>(
    this.isDefaultDark.matches ? 'dark' : 'light',
  );

  constructor() {
    this.isDefaultDark.addEventListener('change', (e) => {
      if (this.theme()) return;
      this.device.set(e.matches ? 'dark' : 'light');
    });

    effect(() => {
      const theme = this.theme();
      document.body.classList.remove('theme-light', 'theme-dark');

      if (!theme) return;

      document.body.classList.add(`theme-${theme}`);
    });
  }

  toggle(): void {
    const theme = this.theme();

    let target: Theme;

    if (!theme) {
      target = this.device() === 'dark' ? 'light' : 'dark';
      localStorage.setItem('__theme', target);
    } else {
      target = theme === 'dark' ? 'light' : 'dark';
    }

    this.theme.set(target);
    return;
  }

  reset(): void {
    this.theme.set(undefined);
  }
}
