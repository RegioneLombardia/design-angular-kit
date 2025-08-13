import { Component } from '@angular/core';
const { version: appVersion } = require('../../../package.json');

@Component({
  selector: 'it-router-dispatcher',
  templateUrl: './router-dispatcher.component.html',
  styleUrls: ['./router-dispatcher.component.scss'],
})
export class RouterDispatcherComponent {
  version = appVersion;
  constructor() {}
}
