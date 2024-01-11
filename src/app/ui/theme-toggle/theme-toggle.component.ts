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
      const device = this._theme.device();
      if (this._el?.nativeElement) {
        this._el.nativeElement.classList.remove('theme-light', 'theme-dark');
        if (theme) {
          this._el.nativeElement.classList.add(`theme-${theme}`);
        } else {
          this._el.nativeElement.classList.add(`theme-${device}`);
        }
      }
    });
  }

  @HostListener('click')
  toggle(): void {
    this._theme.toggle();
  }
}
