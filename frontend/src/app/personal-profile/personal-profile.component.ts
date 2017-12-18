import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { PeopleService } from '../people.service';


@Component({
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {
  public person: Person;

  constructor(private peopleService: PeopleService, private acRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.acRoute.snapshot.paramMap.get('id')
    if (id) {
      this.peopleService
        .get(id)
        .subscribe((data: Person) => {
          this.person = data;
        });
    }
  }
}
