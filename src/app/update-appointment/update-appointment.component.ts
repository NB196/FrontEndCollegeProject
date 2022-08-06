import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {
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

  onSubmit(){
  }


}
