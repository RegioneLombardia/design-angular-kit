import { Component } from '@angular/core';

@Component({
  selector: 'it-header-menu-ver-example',
  templateUrl: './header-menu-ver-example.component.html',
  standalone: false,
})
export class HeaderMenuVerExampleComponent {
  search = false;
  login = 'logged';
  menu = 'vertical';
}
