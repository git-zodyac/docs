import { Component, ElementRef, HostListener, effect } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThemeToggleService } from './theme-toggle.service';

@Component({
  standalone: true,
  selector: 'theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  imports: [MatIconModule],
})
export class ThemeToggleComponent {
  constructor(
    public _theme: ThemeToggleService,
    private _el: ElementRef<HTMLDivElement>,
  ) {
    effect(() => {
      const theme = this._theme.theme();
      if (this._el?.nativeElement) {
        this._el.nativeElement.classList.remove('theme-light', 'theme-dark');
        if (theme) {
          this._el.nativeElement.classList.add(`theme-${theme}`);
        }
      }
    });
  }

  @HostListener('click')
  toggle(): void {
    this._theme.toggle();
  }
}
