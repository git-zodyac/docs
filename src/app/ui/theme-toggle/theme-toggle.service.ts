import { Injectable, computed, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeToggleService {
  readonly chosen = signal<boolean | null>(
    (function () {
      const theme = localStorage.getItem('__theme');
      if (!theme) return null;
      return theme === 'dark';
    })(),
  );

  readonly setDark = computed<boolean>(() => {
    const chosen = this.chosen();
    if (chosen === null) return this.device();
    return chosen;
  });

  private isDefaultDark = window.matchMedia('(prefers-color-scheme: dark)');
  readonly device = signal<boolean>(this.isDefaultDark.matches);

  constructor() {
    this.isDefaultDark.addEventListener('change', (e) =>
      this.device.set(e.matches),
    );

    effect(() => {
      const theme = this.setDark();
      document.body.classList.toggle('theme-dark', theme);
    });
  }

  toggle(): void {
    const theme = this.setDark();
    let to_set: boolean;

    if (theme === null) to_set = !this.device();
    else to_set = !theme;

    localStorage.setItem('__theme', to_set ? 'dark' : 'light');
    this.chosen.set(to_set);
    return;
  }

  reset(): void {
    localStorage.removeItem('__theme');
    this.chosen.set(null);
  }
}
