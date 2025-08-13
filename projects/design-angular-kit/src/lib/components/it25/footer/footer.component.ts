import { Component, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'it25-footer',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './footer.component.html',
})
export class It25FooterComponent {
  /** Acronimo dell'applicativo */
  @Input() public acronym?: string;
  /** Nome dell'applicativo */
  @Input() public applicationName: string | undefined;
}
