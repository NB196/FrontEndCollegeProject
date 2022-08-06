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
  private modifyTimeUrl ="http://localhost:8080/lastmin/modify/time";
  private bookAppUrl = "http://localhost:8080/lastmin/modify/book";
  private cancelAppUrl ="http://localhost:8080/lastmin/modify/cancel";

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

  updateTime(id: number, appointment: Appointment): Observable<Object>{
    return this.httpClient.put(`${this.modifyTimeUrl}/${id}`, appointment);
  }
  
  bookAppointment(id: number, appointment: Appointment): Observable<Object>{
    return this.httpClient.put(`${this.bookAppUrl}/${id}`, appointment);
  }
  
  cancelAppointment(id: number, appointment: Appointment): Observable<Object>{
    return this.httpClient.put(`${this.cancelAppUrl}/${id}`, appointment);
  }
}
