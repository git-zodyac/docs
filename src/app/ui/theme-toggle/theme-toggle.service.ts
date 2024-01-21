import { Injectable, effect, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

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

      const theme = e.matches ? 'dark' : 'light';

      this.device.set(theme);
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
    } else {
      target = theme === 'dark' ? 'light' : 'dark';
    }

    localStorage.setItem('__theme', target);
    this.theme.set(target);
    return;
  }

  reset(): void {
    localStorage.removeItem('__theme');
    this.theme.set(null);
  }
}
