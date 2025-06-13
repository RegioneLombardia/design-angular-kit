import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterIndexComponent } from './footer-index/footer-index.component';

const routes: Routes = [{ path: '', component: FooterIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterRoutingModule {}
