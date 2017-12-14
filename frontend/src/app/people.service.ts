import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeopleService {
  response: string;
  people: Array<JSON>;
  constructor(public http: Http) {}

  create(person) {
    this.http.post('http://localhost:3000/people', person)
    .map(res => res.text())
    .subscribe(success => this.response = success);
  }

  getAll() {
    return this.http.get('http://localhost:3000/people')
    .map(res => JSON.parse(res.text()))
  }

}
