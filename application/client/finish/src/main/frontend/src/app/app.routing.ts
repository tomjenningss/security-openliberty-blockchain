import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QueryaspecificcarComponent } from './queryaspecificcar/queryaspecificcar.component';
import { UpdatecarComponent } from './updatecar/updatecar.component';
import { AddcarComponent } from './addcar/addcar.component';


import { HomeComponent } from './home/home.component';
import { QueryallcarsComponent } from './queryallcars/queryallcars.component';

const routes: Routes = [
  
    { path: '', component: HomeComponent },
   // {path: 'home', component: HomeComponent},
    { path: 'queryallcars', component: QueryallcarsComponent },
    { path: 'queryaspecificcar', component: QueryaspecificcarComponent},
    { path: 'updatecar', component: UpdatecarComponent},
    { path: 'addcar', component: AddcarComponent},
    { path: '**', redirectTo: '' }
];

@NgModule({
    declarations: [],
    imports: [
      CommonModule
    ]
  })
  export class AppRoutingModule { }
  export const appRoutingModule = RouterModule.forRoot(routes);
  