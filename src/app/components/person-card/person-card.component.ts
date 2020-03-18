import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonCardComponent {
  @Input() birthDate: string;
  @Input() deathDate: string;
  @Input() country: string;
  @Input() gender: 'male' | 'female';
  @Input() lastName: string;
  @Input() name: string;
  @Input() id: number;
  @Input() spouseName?: string;
  @Input() isSelected?: boolean;

  constructor() {}

}
