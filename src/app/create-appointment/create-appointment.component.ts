import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  appointment: Appointment = new Appointment();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.appointment);
  }

}
