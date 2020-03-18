import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Person, Relationship} from '../types';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor() {
  }

  async fetchPeople() {
    const response = await fetch( `${environment.baseUrl} ${environment.peopleUrl}`)
    return (await response.json()) as Array<Person>;
  }

  async fetchRelationships() {
    const response = await fetch(( `${environment.baseUrl} ${environment.relationshipsUrl}`))
    return (await response.json()) as Array<Relationship>;
  }
}
