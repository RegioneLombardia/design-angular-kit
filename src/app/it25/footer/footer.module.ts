import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterIndexComponent } from './footer-index/footer-index.component';
import { SharedModule } from '../../shared/shared.module';
import { FooterExamplesComponent } from './footer-examples/footer-examples.component';
import { FooterMinimoExampleComponent } from './footer-minimo-example/footer-minimo-example.component';
import { FooterStandardExampleComponent } from './footer-standard-example/footer-standard-example.component';
import { FooterMultilogoExampleComponent } from './footer-multilogo-example/footer-multilogo-example.component';
import { FooterMultilinkExampleComponent } from './footer-multilink-example/footer-multilink-example.component';

@NgModule({
  declarations: [
    FooterIndexComponent,
    FooterExamplesComponent,
    FooterMinimoExampleComponent,
    FooterStandardExampleComponent,
    FooterMultilogoExampleComponent,
    FooterMultilinkExampleComponent,
  ],
  imports: [CommonModule, FooterRoutingModule, SharedModule],
})
export class It25FooterModule {}
