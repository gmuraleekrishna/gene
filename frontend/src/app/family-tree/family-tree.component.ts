import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service'

@Component({
  selector: 'family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.css']
})
export class FamilyTreeComponent implements OnInit {
  public people: Array<any>;

  constructor(public peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getAll().subscribe(people => this.people = people)
  }

}
