import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Person, Relationship} from '../../types';
import { findPersonById, findChildrenAndSpouseByPersonId } from '../../utils/find';

@Component({
  selector: 'app-siblings',
  templateUrl: './siblings.component.html',
  styleUrls: ['./siblings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SiblingsComponent implements OnInit {
  @Input() peopleIds: Array<number>;
  @Input() people: Array<Person>;
  @Input() relationships: Array<Relationship>;
  person: any;
  children: any;

  constructor() {}

  ngOnInit() {
    this.person = this.people[0];
    this.children = [this.people[1], this.people[2], this.people[3]];
  }

}
