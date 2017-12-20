import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Person } from './person';
import { Observable } from "rxjs/Observable"

@Injectable()
export class PeopleService {
  response: string;
  people: Array<JSON>;
  constructor(public http: HttpClient) { }

  create(person: Person) {
    return this.http.post('http://localhost:3000/people', person.toApiObject())
  }

  edit(person: Person) {
    return this.http.put(`http://localhost:3000/people/${person.id}`, person.toApiObject());
  }

  addChild(id: string, person: Person) {
    return this.http.put(`http://localhost:3000/people/${id}/child`, person.toApiObject())
  }

  addSpouse(id: string, person: Person) {
    return this.http.put(`http://localhost:3000/people/${id}/spouse`, person.toApiObject())
  }

  getAll(): Observable<{}> {
    const getAllObservable = new Observable((observer) => {
      this.http.get<Person[]>('http://localhost:3000/people.json')
        .subscribe(data => {
          const people = data.map((person: Person) => new Person(person))
          observer.next(people)
          observer.complete()
        });
    });
    return getAllObservable;
  }

  get(id: string): Observable<{}> {
    const getObservable = new Observable((observer) => {
      return this.http.get<Person>(`http://localhost:3000/people/${id}.json`)
        .subscribe(data => {
          const personObject = new Person(data);
          observer.next(personObject)
          observer.complete()
        });
    });
    return getObservable;
  }

}
