import { Component, ElementRef, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { timer } from 'rxjs';

type CopyState = 'idle' | 'copied' | 'error';

@Component({
  standalone: true,
  selector: 'pre[copy]',
  templateUrl: './code-copy.component.html',
  styleUrl: './code-copy.component.scss',
  imports: [MatButtonModule, MatIconModule, ClipboardModule],
})
export class CodeCopyComponent {
  private source!: HTMLElement;
  public state = signal<CopyState>('idle');
  public icon = computed(() => {
    switch (this.state()) {
      case 'copied':
        return 'check';
      case 'error':
        return 'error';
      default:
        return 'content_copy';
    }
  });

  constructor(
    private _el: ElementRef<HTMLDivElement>,
    private _clipboard: Clipboard,
  ) {}

  ngAfterViewInit() {
    this.source = this._el.nativeElement.querySelector('code')!;
  }

  copy(): void {
    const text = this.source.innerText;
    const result = this._clipboard.copy(text);
    this.state.set(result ? 'copied' : 'error');
    timer(result ? 1000 : 2000).subscribe(() => this.state.set('idle'));
  }
}
