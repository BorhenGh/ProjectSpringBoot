import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import * as alertifyjs from 'alertifyjs';
import { HttpClient, HttpParams,HttpResponse } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import {MatInputModule} from '@angular/material/input';
import { SharedserviceService } from 'src/app/services/sharedservice.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';

import { Inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-add-edit-patient',
  templateUrl: './add-edit-patient.component.html',
  styleUrls: ['./add-edit-patient.component.css']
})
export class AddEditPatientComponent {
  editmode:boolean=false;
  editdata:any;
  ListRooms:any=[];
  ListPatients:any=[];
  respdata: any;
  ngOnInit(): void {
    this.editmode = this.d.editmo;
    this.GetAllRooms();
    this.GetAllPatients();
    if (this.d.idpatient != null && this.d.idpatient != ''){
      this.service.getPatientById(this.d.idpatient).subscribe(response=>{
        this.editdata = response;
        console.log(this.editdata)
        this.Reactiveform.setValue({
          idpatient: this.editdata.idpatient,
          nomPatient:this.editdata.nomPatient,
          telephone:this.editdata.telephone,
          numeroCarte:this.editdata.numeroCarte,
          numeroCnss:this.editdata.numeroCnss,
          dateNaissance:this.editdata.dateNaissance,
          lieu_naissance:this.editdata.lieu_naissance,
          chambre:this.editdata.chambre
      
          
        });
      });
    }
  }
  constructor(private service: SharedserviceService, @Inject(MAT_DIALOG_DATA) public d: any, public dialogref: MatDialogRef<AddEditPatientComponent>) { }
  Reactiveform = new FormGroup({
    idpatient: new FormControl({value:0,disabled:true}),
    nomPatient: new FormControl("", Validators.required),
    telephone: new FormControl("", Validators.required),
    numeroCarte: new FormControl("", Validators.required),
    numeroCnss: new FormControl("", Validators.required),
    dateNaissance: new FormControl(new Date()),
    lieu_naissance: new FormControl("", Validators.required),
    chambre:new FormControl("", Validators.required),
  
  });
  GetAllRooms(){
    this.service.getAllrooms().subscribe(rep=>{
      this.ListRooms=rep;

    })
  }
  GetAllPatients(){
    this.service.getAllpatient().subscribe(pre=>{
      this.ListPatients=pre
    })
  }
  getReservFormData() {
    if (this.Reactiveform.valid) {
   const editid = this.Reactiveform.getRawValue().idpatient;
   console.log(editid);
   if (editid != null && this.editmode) {
     this.updatePatient();
   }  else {
       this.addPatient();
     }
   }
  else {
   alertifyjs.error("Merci d'entrer des données valides pour Patient");
 }
 }
 addPatient() {
  this.service.savePatient(this.Reactiveform.getRawValue()).subscribe(result => {
    this.respdata = result;
    if (this.respdata) {
      this.dialogref.close()
      alertifyjs.success('Bravo! Les coordonnées de patient sont enregistrées avec succès');
    }
    location.reload();
  });
}
updatePatient(){
  const editid= this.Reactiveform.getRawValue().idpatient;
    this.service.UpdatePatient(editid,this.Reactiveform.getRawValue()).subscribe(result => {
      this.respdata = result;
      if (this.respdata) {
        this.dialogref.close()
        alertifyjs.success('Bravo! Les coordonnées de Rendez-vous sont enregistrées avec succès');
      }
      location.reload();
    });
}

}
