import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';
import { HeaderMenuHorExampleComponent } from './header-menu-hor-example.component';

@NgModule({
  declarations: [HeaderMenuHorExampleComponent],
  exports: [HeaderMenuHorExampleComponent],
  imports: [DesignAngularKitModule, RouterModule],
})
export class HeaderMenuHorExampleModule {}
