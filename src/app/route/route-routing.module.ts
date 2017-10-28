import { CreateAutoComponent } from './../create-auto/create-auto.component';
import { ReadAutoComponent } from './../read-auto/read-auto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutosComponent } from './../autos/autos.component';



const routes: Routes = [
  {path: '', component: AutosComponent},
  {path: 'autos/:id/details', component: ReadAutoComponent},
  {path: 'create', component: CreateAutoComponent},
  {path: '**', component: AutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
