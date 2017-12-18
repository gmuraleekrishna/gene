import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { PeopleService } from '../people.service'
import { Person } from '../person'

@Component({
  selector: 'family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.css']
})
export class FamilyTreeComponent implements OnInit {
  public people: Person[];

  constructor(private peopleService: PeopleService, private router : Router) { }

  ngOnInit() {
    this.peopleService.getAll().subscribe((people: Person[]) => this.people = people)
  }

  addChild(person) {
    const primaryParent = person.isPrimary ? person : person.spouse;
    this.router.navigate([`people/${primaryParent.id}/child`]);
  }

  addSpouse(person) {
    this.router.navigate([`people/${person.id}/spouse`]);
  }
}

// routerLink="/person/{{person.id}}"