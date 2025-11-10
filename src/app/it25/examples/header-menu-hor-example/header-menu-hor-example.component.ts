import { Component } from '@angular/core';

@Component({
  selector: 'it-header-menu-hor-example',
  templateUrl: './header-menu-hor-example.component.html',
  standalone: false,
})
export class HeaderMenuHorExampleComponent {
  search = false;
  login = 'none';
  menu = 'horizontal';
}
