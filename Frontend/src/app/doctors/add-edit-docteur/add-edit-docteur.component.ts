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
  selector: 'app-add-edit-docteur',
  templateUrl: './add-edit-docteur.component.html',
  styleUrls: ['./add-edit-docteur.component.css']
})

export class AddEditDocteurComponent {
  editdata: any;
  respdata:any;
  editmode:boolean=false;
  datePicker = new FormControl();
  listclients:any=[];
  constructor(private service: SharedserviceService, @Inject(MAT_DIALOG_DATA) public d: any, public dialogref: MatDialogRef<AddEditDocteurComponent>) { }
 
  ngOnInit(): void {
    this.editmode=this.d.editmo;

    console.log(this.editmode);

    if (this.d.idmedecin != null && this.d.idmedecin != '') {


    this.service.getDoctorById(this.d.idmedecin).subscribe(respponse=>{
this.editdata=respponse;
this.Reactiveform.setValue({
  idmedecin: this.editdata.idmedecin,
  nom:this.editdata.nom,
  date_embauche: this.editdata.date_embauche,
  prixconsultation: this.editdata.prixconsultation,
  specialite: this.editdata.specialite,
  gradeMedecin: this.editdata.gradeMedecin,
  nomUniversite: this.editdata.nomUniversite
});


    })

    } 

  } 
  Reactiveform = new FormGroup({
    idmedecin:new FormControl({value:0,disabled:true}),
    nom:new FormControl("",Validators.required),
    date_embauche: new FormControl(new Date()),
     
    prixconsultation: new FormControl("", Validators.required),
    specialite: new FormControl("", Validators.required),
   
    gradeMedecin: new FormControl("", Validators.required),
    nomUniversite: new FormControl("", Validators.required),
    }) 
   
    getReservFormData() {
      if (this.Reactiveform.valid) {
        const editid = this.Reactiveform.getRawValue().idmedecin;
        console.log(editid);
        if (editid != null && this.editmode) {
          this.updateDoctor();
        } else {
          this.addDoctor();
        }
      } else {
        alertifyjs.error("Merci d'entrer des données valides pour Doctor");
      }
    }
    addDoctor() {
      this.service.saveDoctor(this.Reactiveform.getRawValue()).subscribe(result => {
        this.respdata = result;
        if (this.respdata) {
          this.dialogref.close()
          alertifyjs.success('Bravo! Les coordonnées de Doctor sont enregistrées avec succès');
        }
        location.reload();
      });
    }
    updateDoctor() {
      const editid= this.Reactiveform.getRawValue().idmedecin;
      this.service.UpdateDoctor(editid,this.Reactiveform.getRawValue()).subscribe(result => {
        this.respdata = result;
        if (this.respdata) {
          this.dialogref.close()
          alertifyjs.success('Bravo! Les coordonnées de Doctor sont enregistrées avec succès');
        }
        location.reload();
      });
    } alldoctors() {
      this.service.getAllmedecin().subscribe(data => {
        this.listclients = data;
      })
    }}
