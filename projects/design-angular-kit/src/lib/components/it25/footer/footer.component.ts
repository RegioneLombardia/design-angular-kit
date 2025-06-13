import { Component, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../utils/coercion';

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
  @Input() public applicationName: string;
  /**
   * Area per logo multipli
   * @default false
   */
  @Input({ transform: inputToBoolean }) logos?: boolean;
  /**
   * Area multilink
   * @default false
   */
  @Input({ transform: inputToBoolean }) multilink?: boolean;
}
