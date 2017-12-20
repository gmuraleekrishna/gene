import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms';


import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css'],
})
export class EditPersonComponent implements OnInit {
  subject: Person

  constructor(private route: ActivatedRoute, private router: Router, private peopleService: PeopleService, public fb: FormBuilder) { }

  public person = this.fb.group({
    id: [''],
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    birth: ['', Validators.required],
    email: [''],
    mobile: [''],
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.peopleService
        .get(id)
        .subscribe((person: Person) => {
          this.subject = person;
          this.person.patchValue(person);
        });
    }
  }

  back($event) {
    this.router.navigate(['/people-list']);
  }


  editPerson({ value, valid }: { value: Person, valid: boolean }) {
    const person = new Person(value);
    this.peopleService.edit(person).subscribe(() => this.router.navigate(['/people-list']));
  }
}

    
