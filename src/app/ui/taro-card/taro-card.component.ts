import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'taro-card',
  templateUrl: './taro-card.component.html',
  styleUrl: './taro-card.component.scss',
  imports: [MatButtonModule, MatIconModule, RouterModule],
})
export class TaroCardComponent {
  @Input({ required: true }) src!: string;

  constructor(private _el: ElementRef<HTMLDivElement>) {}

  readonly native = this._el.nativeElement;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const { clientX, clientY } = event;
    const { left, top, width, height } = this.native.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    const yDeg = (-deltaY / height) * 20; // 20 is a factor that determines the tilt intensity
    const xDeg = (deltaX / width) * 20;

    const xLimit = 40;
    const yLimit = 40;

    const xLimited = Math.min(Math.max(xDeg, -xLimit), xLimit);
    const yLimited = Math.min(Math.max(yDeg, -yLimit), yLimit);
    this.native.style.transform = `perspective(1000px) rotateX(${yLimited}deg) rotateY(${xLimited}deg)`;
  }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    const { clientX, clientY } = event.touches[0];
    const { left, top, width, height } = this.native.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    const yDeg = (-deltaY / height) * 20; // 20 is a factor that determines the tilt intensity
    const xDeg = (deltaX / width) * 20;

    const xLimit = 40;
    const yLimit = 40;

    const xLimited = Math.min(Math.max(xDeg, -xLimit), xLimit);
    const yLimited = Math.min(Math.max(yDeg, -yLimit), yLimit);
    this.native.style.transform = `perspective(1000px) rotateX(${yLimited}deg) rotateY(${xLimited}deg)`;
  }
}
