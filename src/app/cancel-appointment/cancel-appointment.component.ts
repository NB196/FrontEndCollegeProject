import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-cancel-appointment',
  templateUrl: './cancel-appointment.component.html',
  styleUrls: ['./cancel-appointment.component.css']
})
export class CancelAppointmentComponent implements OnInit {

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
     
      cancelAppointment(){
        this.appointmentService.cancelAppointment(this.id, this.Appointment)
        .subscribe(data =>{ 
          console.log(data);
          this.Appointment = new Appointment();
        }, error => console.log(error));
      }

      onSubmit(){
        this.appointmentService.cancelAppointment(this.id, this.Appointment).subscribe(data =>{
         this.goToAppointmentList();
        }, error => console.log(error));
      }
      goToAppointmentList(){
        this.router.navigate(['/appointments']);
      }


}
