import { Component } from '@angular/core';

@Component({
  selector: 'it-header-example',
  templateUrl: './header-example.component.html',
  styleUrls: ['./header-example.component.scss'],
})
export class HeaderExampleComponent {
  search = false;
  login = 'none';
  menu = 'horizontal';
}
