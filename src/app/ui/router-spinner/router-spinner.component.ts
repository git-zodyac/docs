import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterSpinnerService } from '../router-spinner.service';

@Component({
  standalone: true,
  selector: 'router-spinner',
  templateUrl: './router-spinner.component.html',
  styleUrl: './router-spinner.component.scss',
  imports: [MatProgressSpinnerModule],
})
export class RouterSpinnerComponent {
  constructor(public readonly _state: RouterSpinnerService) {}
}
