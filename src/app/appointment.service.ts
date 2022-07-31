import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = "http://localhost:8080/appointments/all" ;
  constructor(private httpClient: HttpClient) { }

  getAppointmentsList(): Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);

  }
}
