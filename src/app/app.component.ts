import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from './ui/sidenav/sidenav.service';
import { HeaderComponent } from './ui/header/header.component';
import { MenuComponent } from './ui/menu/menu.component';
import { FooterComponent } from './ui/footer/footer.component';
import { RouteContainerDirective } from './ui/route-container.directive';

@Component({
  standalone: true,
  selector: 'body[root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SidenavService],
  imports: [
    CommonModule,
    HeaderComponent,
    MatSidenavModule,
    RouterOutlet,
    MenuComponent,
    FooterComponent,
    RouteContainerDirective,
  ],
})
export class AppComponent {
  constructor(public _menu: SidenavService) {}

  ngOnDestroy() {
    this._menu.ngOnDestroy();
  }
}
