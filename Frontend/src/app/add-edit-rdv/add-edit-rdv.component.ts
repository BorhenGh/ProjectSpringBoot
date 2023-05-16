import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import * as alertifyjs from 'alertifyjs';
import { HttpClient, HttpParams,HttpResponse } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import {MatInputModule} from '@angular/material/input';
import { SharedserviceService } from '../services/sharedservice.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';

import { Inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-add-edit-rdv',
  templateUrl: './add-edit-rdv.component.html',
  styleUrls: ['./add-edit-rdv.component.css']
})
export class AddEditRdvComponent {
  editmode:boolean=false;
  editdata:any;
  ListDoct:any=[];
  ListPatients:any=[];
  respdata: any;
  constructor(private service: SharedserviceService, @Inject(MAT_DIALOG_DATA) public d: any, public dialogref: MatDialogRef<AddEditRdvComponent>) { }

  ngOnInit(): void {
    this.editmode = this.d.editmo;
    this.GetAllDoctors();
    this.GetAllPatients();
    if (this.d.idrendezvous != null && this.d.idrendezvous != ''){
      this.service.getRdvById(this.d.idrendezvous).subscribe(response=>{
        this.editdata = response;
        console.log(this.editdata)
        this.Reactiveform.setValue({
          idrendezvous: this.editdata.idrendezvous,
          dateRdv: this.editdata.dateRdv,
          remarque: this.editdata.remarque,
          medecin: this.editdata.medecin.idmedecin,
          
           
            patients: this.editdata.patients.idpatient,
          
        });
      });
    }
  }
Reactiveform = new FormGroup({
  idrendezvous: new FormControl({value:0,disabled:true}),
  dateRdv: new FormControl("", Validators.required),
  remarque: new FormControl("", Validators.required),
  medecin:new FormControl("", Validators.required),
  patients:new FormControl("", Validators.required),
});
 
  GetAllDoctors(){
    this.service.getAllmedecin().subscribe(reps=>{
this.ListDoct=reps
    })
  }
  GetAllPatients(){
    this.service.getAllpatient().subscribe(pre=>{
      this.ListPatients=pre
    })
  }
  getReservFormData() {
     if (this.Reactiveform.valid) {
    const editid = this.Reactiveform.getRawValue().idrendezvous;
    console.log(editid);
    if (editid != null && this.editmode) {
      this.updateRendezvous();
    }  else {
        this.addRendezvous();
      }
    }
   else {
    alertifyjs.error("Merci d'entrer des données valides pour Doctor");
  }
  }
  addRendezvous() {
    this.service.saveRdv(this.Reactiveform.getRawValue()).subscribe(result => {
      this.respdata = result;
      if (this.respdata) {
        this.dialogref.close()
        alertifyjs.success('Bravo! Les coordonnées de rendezvous sont enregistrées avec succès');
      }
      location.reload();
    });
  }
  updateRendezvous(){
    const editid= this.Reactiveform.getRawValue().idrendezvous;
      this.service.UpdateRendezVous(editid,this.Reactiveform.getRawValue()).subscribe(result => {
        this.respdata = result;
        if (this.respdata) {
          this.dialogref.close()
          alertifyjs.success('Bravo! Les coordonnées de Rendez-vous sont enregistrées avec succès');
        }
        location.reload();
      });
  }


}
