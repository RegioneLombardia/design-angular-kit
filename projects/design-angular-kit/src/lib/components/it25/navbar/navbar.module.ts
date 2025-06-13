import { NgModule } from '@angular/core';
import { It25NavBarComponent } from './navbar/navbar.component';
import { It25NavBarItemComponent } from './navbar-item/navbar-item.component';

const navbarComponents = [It25NavBarComponent, It25NavBarItemComponent];

@NgModule({
  imports: navbarComponents,
  exports: navbarComponents,
})
export class It25NavBarModule {}
