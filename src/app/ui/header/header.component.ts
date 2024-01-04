import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { SidenavService } from '../sidenav/sidenav.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [MatButtonModule, MatIconModule, ThemeToggleComponent],
})
export class HeaderComponent {
  constructor(
    public _menu: SidenavService,
    registry: MatIconRegistry,
    sanitizer: DomSanitizer,
  ) {
    registry.addSvgIcon(
      'zodyac',
      sanitizer.bypassSecurityTrustResourceUrl('assets/zodyac.svg'),
    );
    registry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('assets/github.svg'),
    );
    registry.addSvgIcon(
      'npm',
      sanitizer.bypassSecurityTrustResourceUrl('assets/npm.svg'),
    );
  }
}
