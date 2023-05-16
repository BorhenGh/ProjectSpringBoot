import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SharedserviceService } from 'src/app/services/sharedservice.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-number-appointment',
  templateUrl: './number-appointment.component.html',
  styleUrls: ['./number-appointment.component.css']
})
export class NumberAppointmentComponent implements OnInit {
  listclients:any=[];
  nombreR!:number;
  constructor(
    private fb: FormBuilder,
 
    public dialogRef: MatDialogRef<NumberAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      
      idmedecin: number 
    },
    private service: SharedserviceService
  ){}
  ngOnInit(): void {
    this.getDoctor();
  }
  idMedecin = this.data.idmedecin;
  getDoctor(){
    this.service.getDoctorById(this.idMedecin).subscribe(res=>{
      console.log(res);
      this.listclients=res;
    })
  }
  getCountAppointment(){
this.service.getNombreRdvByDoc(this.idMedecin).subscribe(res=>{
this.nombreR=res;
})
  }
}
