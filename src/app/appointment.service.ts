import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = "http://localhost:8080/lastmin/appointment" ;
  private createUrl ="http://localhost:8080/lastmin/apps";
  private getAppByIdUrl = "http://localhost:8080/lastmin/filter" ;
  private modifyDateUrl ="http://localhost:8080/lastmin/modify/date";

  constructor(private httpClient: HttpClient) { }

  getAppointmentsList(): Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);

  }

  createAppointment(appointment: Appointment): Observable<Object>{
    return this.httpClient.post(`${this.createUrl}`, appointment);
   // return this.httpClient.post(this.baseUrl+ '/apps', FormData)
  }

  getAppointmentById(id: number): Observable<Appointment>{
    return this.httpClient.get<Appointment>(`${this.getAppByIdUrl}/${id}`);
  }

  updateDate(id: number, appointment: Appointment): Observable<Object>{
    return this.httpClient.put(`${this.modifyDateUrl}/${id}`, appointment);
  }
}
