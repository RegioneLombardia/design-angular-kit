import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';
import { HeaderMenuVerExampleComponent } from './header-menu-ver-example.component';

@NgModule({
  declarations: [HeaderMenuVerExampleComponent],
  exports: [HeaderMenuVerExampleComponent],
  imports: [DesignAngularKitModule, RouterModule],
})
export class HeaderMenuVerExampleModule {}
