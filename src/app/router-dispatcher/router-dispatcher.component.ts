import { Component } from '@angular/core';
const { version: appVersion } = require('../../../package.json');
import TableOfContent from '../../assets/table-of-content.json';

@Component({
  selector: 'it-router-dispatcher',
  templateUrl: './router-dispatcher.component.html',
  styleUrls: ['./router-dispatcher.component.scss'],
})
export class RouterDispatcherComponent {
  tableOfContent = (<any>TableOfContent).tableOfContent;
  version = appVersion;
  constructor() {}
}
