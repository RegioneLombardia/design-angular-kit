import { Component } from '@angular/core';

@Component({
  selector: 'it-header-menu-side-example',
  templateUrl: './header-menu-side-example.component.html',
  standalone: false,
})
export class HeaderMenuSideExampleComponent {
  search = false;
  login = 'default';
  menu = 'sidebar';
  color = 'important';
  label = 'Importante';
}
