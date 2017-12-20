import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { PeopleService } from '../people.service'
import { Person } from '../person'

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  public people: Person[];

  constructor(private peopleService: PeopleService, private router : Router) { }

  ngOnInit() {
    this.peopleService.getAll().subscribe((people: Person[]) => this.people = people)
  }

  edit(person) {
    this.router.navigateByUrl(`/people/${person.id}/edit`);
  }

  addChild(person) {
    const primaryParent = person.isPrimary ? person : person.spouse;
    this.router.navigate([`people/${primaryParent.id}/child`]);
  }

  addSpouse(person) {
    this.router.navigate([`people/${person.id}/spouse`]);
  }
}