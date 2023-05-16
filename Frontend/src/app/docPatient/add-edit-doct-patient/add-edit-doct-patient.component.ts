import { Component } from '@angular/core';
import { SharedserviceService } from 'src/app/services/sharedservice.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import {MatDialog} from '@angular/material/dialog';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';
import * as alertifyjs from 'alertifyjs';
import { Inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-add-edit-doct-patient',
  templateUrl: './add-edit-doct-patient.component.html',
  styleUrls: ['./add-edit-doct-patient.component.css']
})
export class AddEditDoctPatientComponent {
  editdata: any;
  respdata:any;
  editmode:boolean=false;
  datePicker = new FormControl();
  listdocuments:any=[];
  listMedecin:any=[];
  listRendezvous:any=[];
  listPatients:any=[];
  constructor(private service: SharedserviceService, @Inject(MAT_DIALOG_DATA) public d: any, public dialogref: MatDialogRef<AddEditDoctPatientComponent>) { }
  ngOnInit(): void {
    this.editmode = this.d.editmo;
    this.addDoc();
    this.allPatients();
    this.allRendezvous();
    this.allDoctor();
    if (this.d.idDocuments != null && this.d.idDocuments != ''){
      this.service.getDoctPById(this.d.idDocuments).subscribe(response=>{
        this.editdata = response;
        console.log(this.editdata)
        this.Reactiveform.setValue({
          idDocuments: this.editdata.idDocuments,
          type_maladie: this.editdata.type_maladie,
          startdate: this.editdata.startdate,
          etat_maladie: this.editdata.etat_maladie,
          
           
            patients: this.editdata.patients.idpatient,
            rendezVous:this.editdata.rendezVous.idrendezvous,
            medecin:this.editdata.medecin.idmedecin,
          
        });
      });
    }
  }
  alldoc() {
    this.service.getAllDoctP().subscribe(data => {
      this.listdocuments = data;
    })
  }
  allPatients() {
    this.service.getAllPatient().subscribe(data => {
      this.listPatients = data;
    })
  }
  allRendezvous() {
    this.service.getAllrdv().subscribe(data => {
      this.listRendezvous = data;
    })
  }
  allDoctor() {
    this.service.getAllmedecin().subscribe(data => {
      this.listMedecin = data;
    })
  }
  Reactiveform = new FormGroup({
    idDocuments:new FormControl({value:0,disabled:true}),
    type_maladie:new FormControl("",Validators.required),
    startdate: new FormControl("",Validators.required),
     
    etat_maladie: new FormControl("", Validators.required),
    patients: new FormControl("", Validators.required),
   
    rendezVous: new FormControl("", Validators.required),
    medecin: new FormControl("", Validators.required),
    }) ;
    getReservFormData() {
      if (this.Reactiveform.valid) {
        const editid = this.Reactiveform.getRawValue().idDocuments;
        console.log(editid);
        if (editid != null && this.editmode) {
          this.updateDoc();
        } else {
          this.addDoc();
        }
      } else {
        alertifyjs.error("Merci d'entrer des données valides pour Documents patient");
      }
    }
    addDoc() {
      console.log(this.Reactiveform.getRawValue());
      this.service.saveDoctP(this.Reactiveform.getRawValue()).subscribe(result => {
       
        this.respdata = result;
        if (this.respdata) {
          this.dialogref.close()
          alertifyjs.success('Bravo! Les coordonnées de Document patient sont enregistrées avec succès');
        }
        location.reload();
      });
    }
    updateDoc() {
      const editid= this.Reactiveform.getRawValue().idDocuments;
      this.service.UpdateDocP(editid,this.Reactiveform.getRawValue()).subscribe(result => {
        this.respdata = result;
        if (this.respdata) {
          this.dialogref.close()
          alertifyjs.success('Bravo! Les coordonnées de Document patient sont enregistrées avec succès');
        }
        location.reload();
      });
    }
   
}
