import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';
import { HeaderMenuSideExampleComponent } from './header-menu-side-example.component';

@NgModule({
  declarations: [HeaderMenuSideExampleComponent],
  exports: [HeaderMenuSideExampleComponent],
  imports: [DesignAngularKitModule, RouterModule],
})
export class HeaderMenuSideExampleModule {}
