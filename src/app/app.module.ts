import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http' ;
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
