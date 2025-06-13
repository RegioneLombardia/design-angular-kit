import { Component } from '@angular/core';
import Documentation from '../../../../assets/documentation.json';

@Component({
  selector: 'it-footer-index',
  templateUrl: './footer-index.component.html',
})
export class FooterIndexComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected footerComponent: any;

  constructor() {
    this.footerComponent = Documentation.components.find(component => component.name === 'It25FooterComponent');
  }
}
