import {
  Component,
  ElementRef,
  HostListener,
  effect,
  signal,
} from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ThemeToggleService } from './theme-toggle.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  imports: [
    MatIconModule,
    MatSnackBarModule,
    TranslocoModule,
    MatTooltipModule,
  ],
})
export class ThemeToggleComponent {
  readonly isReset = signal(false);

  constructor(
    public _theme: ThemeToggleService,
    private _el: ElementRef<HTMLDivElement>,
    private _snack: MatSnackBar,
  ) {
    effect(() => {
      const setDark = this._theme.setDark();
      if (this._el?.nativeElement) {
        this._el.nativeElement.classList.toggle('theme-dark', setDark);
      }
    });

    effect(() => {
      const onShift = this.isReset();
      this._el?.nativeElement.classList.toggle('theme-reset', onShift);
    });
  }

  @HostListener('click')
  toggle(): void {
    if (this.isReset()) {
      this._theme.reset();

      this._snack.open('Theme is reset to default', 'Close', {
        duration: 3000,
      });
      return;
    }
    this._theme.toggle();
  }

  @HostListener('window:keydown.shift')
  setReset(): void {
    this.isReset.set(true);
  }

  @HostListener('window:keyup.shift')
  usetReset(): void {
    this.isReset.set(false);
  }

  get toSet() {
    return this._theme.setDark() ? 'light' : 'dark';
  }
}
