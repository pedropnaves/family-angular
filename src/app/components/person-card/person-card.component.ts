import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Person } from '../../types';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonCardComponent {
  @Input() person: Person;
  @Input() spouseName?: string;
  @Input() isSelected?: boolean;

  constructor() {}

}
