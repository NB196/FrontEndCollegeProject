import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http' ;
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { FormsModule } from '@angular/forms';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { UpdateDateComponent } from './update-date/update-date.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { CancelAppointmentComponent } from './cancel-appointment/cancel-appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    CreateAppointmentComponent,
    UpdateAppointmentComponent,
    UpdateDateComponent,
    BookAppointmentComponent,
    CancelAppointmentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
