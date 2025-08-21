import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { It25NavBarModule } from '../navbar/navbar.module';
import { It25NavBarComponent } from '../navbar/navbar/navbar.component';

import { ItButtonDirective } from '../../core/button/button.directive';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it25-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, ItIconComponent, ItButtonDirective, It25NavBarModule],
})
export class It25HeaderComponent {
  @Input({ transform: inputToBoolean }) showSearch?: boolean = true;

  @Input() loginStyle: 'none' | 'default' | 'logged' = 'none';
  @Input() menuStyle: 'none' | 'horizontal' | 'vertical' | 'sidebar' = 'horizontal';

  @Output() loginClick: EventEmitter<Event>;
  @Output() menuClick: EventEmitter<Event>;

  @Output() searchClick: EventEmitter<Event>;

  @ViewChild('headerWrapper') private headerWrapper?: ElementRef<HTMLButtonElement>;

  @ViewChild(It25NavBarComponent) private it25NavBarComponent?: It25NavBarComponent;

  @Input({ transform: inputToBoolean }) megamenu?: boolean;
  @Input({ transform: inputToBoolean }) expand?: boolean = true;

  constructor() {
    this.loginClick = new EventEmitter<Event>();
    this.menuClick = new EventEmitter<Event>();
    this.searchClick = new EventEmitter<Event>();
  }

  protected emitLoginClick(event: Event): void {
    event.preventDefault();
    this.loginClick.emit(event);
  }

  protected emitMenuClick(event: Event): void {
    event.preventDefault();
    this.menuClick.emit(event);
  }

  protected emitSearchClick(event: Event): void {
    event.preventDefault();
    this.searchClick.emit(event);
  }

  toggleCollapse() {
    this.it25NavBarComponent?.toggleCollapse();
  }

  toggleVertMenu() {
    const vMenu = document.getElementById('it25-menu-vert');
    const closeIcon = document.getElementById('menu-ver-icon-close');
    const burgerIcon = document.getElementById('menu-ver-icon-open');
    if (vMenu && closeIcon && burgerIcon) {
      if (vMenu.style.display == 'block') {
        vMenu.style.display = 'none';
        burgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      } else {
        vMenu.style.display = 'block';
        burgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      }
    }
  }
}
