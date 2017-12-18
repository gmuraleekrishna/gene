import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPersonComponent } from './add-person/add-person.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/people-list',
    pathMatch: 'full'
  },
  {
    path: 'people/add',
    component: AddPersonComponent
  },
  {
    path: 'people-list',
    component: PeopleListComponent
  },
  {
    path: 'people/:id',
    component: PersonalProfileComponent
  },
  {
    path: 'people/:id/child',
    component: AddPersonComponent
  },
  {
    path: 'people/:id/spouse',
    component: AddPersonComponent
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule { }
