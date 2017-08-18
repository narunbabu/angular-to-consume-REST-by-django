import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinosaurComponent } from "./dinos/dinosaurs.component";
import { PeopleListComponent } from "./people-list/people-list.component";
import { PersonDetailsComponent } from "./person-details/person-details.component";
import {DinoDetailsComponent}from './dinos/dino.details.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'persons',
    component: PeopleListComponent,
  },
// map '/dinosaurs' to the DinosaurComponent
  {
    path: 'dinosaurs',
    component: DinosaurComponent,
  },
  // map '/persons/:id' to person details component
  {
    path: 'persons/:id', 
    component: PersonDetailsComponent 
  },
  // map '/dinosaurs/:id' to person details component
  {
    path: 'dinosaurs/:id', 
    component: DinoDetailsComponent 
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/dinosaurs',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
