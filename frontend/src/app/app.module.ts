import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PeopleService } from './people.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatInput,
        MatCardModule,
        MatIconModule,
        MatListModule,
      } from '@angular/material';



import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    FamilyTreeComponent,
    PersonalProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot([
      {
        path: 'person/add',
        component: AddPersonComponent
      },
      {
        path: 'family-tree',
        component: FamilyTreeComponent
      },
      {
        path: 'person/:id',
        component: PersonalProfileComponent
      },
    ],
    {
      useHash: true
    })
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
