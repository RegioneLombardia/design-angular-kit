import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'it25-navbar-item',
  templateUrl: './navbar-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class It25NavBarItemComponent {}
