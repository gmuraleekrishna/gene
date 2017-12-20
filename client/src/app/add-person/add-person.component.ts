import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PeopleService } from '../people.service'
import { Person } from '../person'

@Component({
  selector: 'add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  personType: string = "";
  married:boolean = false;
  constructor(public fb: FormBuilder, private peopleService: PeopleService, private router : Router, private acRoute: ActivatedRoute) {}
  subject: Person;

  public person = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    birth: ['', Validators.required],
    email: [''],
    mobile: [''],
  });

  ngOnInit() {
    const id = this.acRoute.snapshot.paramMap.get('id')
    if (id) {
      this.peopleService
        .get(id)
        .subscribe((person: Person) => {
          this.subject = person;
          if(this.acRoute.snapshot.routeConfig.path.indexOf('/child') > -1) {
            this.personType = 'child';
          } else if(this.acRoute.snapshot.routeConfig.path.indexOf('/spouse') > -1) {
            this.personType = 'spouse';
          }
        });
    }
  }

  showFamilyTree() {
    this.router.navigate(['/people-list']);
  }

  createPerson({value, valid}: { value: Person, valid: boolean }) {
    const person = new Person(value);
    if(this.personType === 'child') {
      this.peopleService.addChild(this.subject.id, person).subscribe(() => this.showFamilyTree());
    } else if (this.personType === 'spouse') {
      this.peopleService.addSpouse(this.subject.id, person).subscribe(() => this.showFamilyTree());
    } else {
      this.peopleService.create(person).subscribe(() => this.showFamilyTree());
    }
  }
}


