import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { It25NavBarModule } from '../navbar/navbar.module';
import { It25NavBarComponent } from '../navbar/navbar/navbar.component';

import { ItButtonDirective } from '../../core/button/button.directive';
import { inputToBoolean } from '../../../utils/coercion';
// import { HeaderSticky } from 'bootstrap-lombardia';

@Component({
  standalone: true,
  selector: 'it25-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, ItIconComponent, ItButtonDirective, It25NavBarModule],
})
export class It25HeaderComponent implements AfterViewInit {
  //   @Input({ transform: inputToBoolean }) sticky?: boolean;

  @Input({ transform: inputToBoolean }) showSlim?: boolean = true;

  @Input({ transform: inputToBoolean }) smallHeader?: boolean = true;

  @Input({ transform: inputToBoolean }) showSearch?: boolean = true;

  //   @Input() slimTitle: string | undefined;
  //   @Input() slimTitleLink: string | undefined = '#';

  @Input() loginStyle: 'none' | 'default' | 'Logged' = 'none';
  @Input() menuStyle: 'none' | 'horizontal' | 'vertical' | 'sidebar' = 'horizontal';

  @Output() loginClick: EventEmitter<Event>;
  @Output() menuClick: EventEmitter<Event>;

  @Output() searchClick: EventEmitter<Event>;

  @ViewChild('headerWrapper') private headerWrapper?: ElementRef<HTMLButtonElement>;

  @ViewChild(It25NavBarComponent) private it25NavBarComponent?: It25NavBarComponent;

  @Input({ transform: inputToBoolean }) megamenu?: boolean;
  @Input({ transform: inputToBoolean }) expand?: boolean = true;

  //   private stickyHeader?: HeaderSticky;

  constructor() {
    this.loginClick = new EventEmitter<Event>();
    this.menuClick = new EventEmitter<Event>();
    this.searchClick = new EventEmitter<Event>();
  }

  ngAfterViewInit() {
    this.updateListeners();
  }

  updateListeners() {
    //     if (!this.stickyHeader && this.headerWrapper && this.sticky) {
    //       this.stickyHeader = new HeaderSticky(this.headerWrapper.nativeElement);
    //     }
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
}
