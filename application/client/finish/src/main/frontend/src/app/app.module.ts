import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appRoutingModule } from './app.routing';
import { QueryallcarsComponent } from './queryallcars/queryallcars.component';
import { ServicesComponent } from './services/services.component';
import { QueryaspecificcarComponent } from './queryaspecificcar/queryaspecificcar.component';
import { AddcarComponent } from './addcar/addcar.component';
import { UpdatecarComponent } from './updatecar/updatecar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QueryallcarsComponent,
    ServicesComponent,
    QueryaspecificcarComponent,
    AddcarComponent,
    UpdatecarComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
