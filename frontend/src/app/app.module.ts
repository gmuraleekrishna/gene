import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PeopleService } from './people.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './/app-routing.module';

import {
  MatButtonModule,
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
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { MaleFilterPipe } from './add-person/male-filter.pipe';
import { FemaleFilterPipe } from './add-person/female-filter.pipe';
import { FamilyTreeComponent } from './family-tree/family-tree.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    PeopleListComponent,
    PersonalProfileComponent,
    MaleFilterPipe,
    FemaleFilterPipe,
    FamilyTreeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    AppRoutingModule,
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
