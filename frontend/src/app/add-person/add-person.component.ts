import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../people.service'
import { Person } from '../person'



@Component({
  selector: 'add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  people: Array<Person>;

  constructor(public fb: FormBuilder, public peopleService: PeopleService) {}
  
  public addPersonForm = this.fb.group({
    firstname: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
    lastname: ["", Validators.required],
    gender: ["", Validators.required],
    dob: ["", Validators.required],
    email: [""],
    mobile: [""]
  });

  createPerson(event) {
    this.peopleService.create(this.addPersonForm.value);
  }

}
