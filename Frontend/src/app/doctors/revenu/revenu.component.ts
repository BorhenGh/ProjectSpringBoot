import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SharedserviceService } from 'src/app/services/sharedservice.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  selector: 'app-revenu',
  templateUrl: './revenu.component.html',
  styleUrls: ['./revenu.component.css']
})
export class RevenuComponent implements OnInit {

 
  form!: FormGroup;
  revenu!: number;

  constructor(
    private fb: FormBuilder,
 
    private dialogRef: MatDialogRef<RevenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      endDate: Date;
      startDate: Date;
      idmedecin: number 
    },
    private service: SharedserviceService
  ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   idMedecin = this.data.idmedecin;
   startDate = this.data.startDate;
   endDate = this.data.endDate;
  getRevenu(){
   
  
    this.service.getRevenuMedecin(this.idMedecin, this.startDate, this.endDate)
      .subscribe(revenu => this.revenu = revenu);
  }
    
}
