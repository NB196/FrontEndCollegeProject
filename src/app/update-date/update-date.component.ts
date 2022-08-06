import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-update-date',
  templateUrl: './update-date.component.html',
  styleUrls: ['./update-date.component.css']
})
export class UpdateDateComponent implements OnInit {

   id!: number;
  Appointment = new Appointment();
  constructor(private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.Appointment = new Appointment();
    this.id =this.route.snapshot.params['id'];

    this.appointmentService.getAppointmentById(this.id).subscribe(data =>{
      this.Appointment = data;
    }, error => console.log(error));
   
  }

  updateDate(){
    this.appointmentService.updateDate(this.id, this.Appointment)
    .subscribe(data =>{ 
      console.log(data);
      this.Appointment = new Appointment();
    }, error => console.log(error));
  }

  onSubmit(){
    this.updateDate();
  }

}
