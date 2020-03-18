import { Component } from '@angular/core';
import { FamilyService } from '../../providers/family.service';
import {Person, Relationship} from '../../types';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent {
  loading: boolean;
  people: Array<Person>;
  relationships: Array<Relationship>;

  constructor(private familyService: FamilyService) {
    this.fetchFamily();
  }

  async fetchFamily() {
    this.handleLoading(true);
    const result = await Promise.all([this.familyService.fetchPeople(), this.familyService.fetchRelationships()]);
    this.people = result[0];
    this.relationships = result[1];
    this.handleLoading(false);
  }

  handleLoading(state: boolean) {
    this.loading = state;
  }

}
