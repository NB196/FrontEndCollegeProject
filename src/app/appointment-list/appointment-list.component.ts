import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments!: Appointment[];

  constructor(private appointmentService: AppointmentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAppointments();

  }
  private getAppointments(){
    this.appointmentService.getAppointmentsList().subscribe(data => {
      this.appointments = data;
    })
  }

  updateAppointment(id : number){
    this.router.navigate(['update-appointment', id]);
  }

  updateDate(id : number){
    this.router.navigate(['update-date', id]);
  }

  bookAppointment(id : number){
    this.router.navigate(['book-appointment', id]);
  }
  cancelAppointment(id : number){
    this.router.navigate(['cancel-appointment', id]);
  }
}
