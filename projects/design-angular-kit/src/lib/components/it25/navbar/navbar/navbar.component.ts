import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { ItButtonDirective } from '../../../core/button/button.directive';
import { inputToBoolean } from '../../../../utils/coercion';
import { NavBarCollapsible } from 'bootstrap-lombardia';

@Component({
  standalone: true,
  selector: 'it25-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, ItIconComponent, ItButtonDirective],
})
export class It25NavBarComponent implements AfterViewInit {
  /**
   * Is a vertical menu
   * @default false
   */
  @Input({ transform: inputToBoolean }) vertical?: boolean;
  /**
   * Is a horizontal menu
   * @default false
   */
  @Input({ transform: inputToBoolean }) horizontal?: boolean;

  @Input({ transform: inputToBoolean }) megamenu?: boolean;
  @Input({ transform: inputToBoolean }) expand?: boolean = true;

  @ViewChild('collapseButton') private collapseButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('collapseView') private collapseView?: ElementRef<HTMLButtonElement>;

  private navbar?: NavBarCollapsible;

  ngAfterViewInit() {
    if (this.collapseButton && this.collapseView) {
      this.navbar = NavBarCollapsible.getOrCreateInstance(this.collapseView.nativeElement);
    }
  }

  toggleCollapse() {
    this.navbar?.toggle(this.collapseButton?.nativeElement);
  }
}
