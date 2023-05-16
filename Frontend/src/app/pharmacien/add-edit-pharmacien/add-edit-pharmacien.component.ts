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
  selector: 'app-add-edit-pharmacien',
  templateUrl: './add-edit-pharmacien.component.html',
  styleUrls: ['./add-edit-pharmacien.component.css']
})
export class AddEditPharmacienComponent {
  editdata: any;
  respdata:any;
  editmode:boolean=false;
  listclients:any=[];
  constructor(private service: SharedserviceService, @Inject(MAT_DIALOG_DATA) public d: any, public dialogref: MatDialogRef<AddEditPharmacienComponent>) { }
  ngOnInit(): void {
    this.editmode=this.d.editmo;
    this.alldoctors()
    console.log(this.editmode);

    if (this.d.id != null && this.d.id != '') {


    this.service.getPharmById(this.d.id).subscribe(respponse=>{
this.editdata=respponse;
this.Reactiveform.setValue({
  id: this.editdata.id,
  nomPh:this.editdata.nomPh,
  age: this.editdata.age,
  telephone: this.editdata.telephone,
  dateRecrutement: this.editdata.dateRecrutement,
  salaire: this.editdata.salaire,
  nomUniversite: this.editdata.nomUniversite
});


    })

    } 

  } 
  Reactiveform = new FormGroup({
    id:new FormControl({value:0,disabled:true}),
    nomPh:new FormControl("",Validators.required),
    age:new FormControl("",Validators.required),
    telephone:new FormControl("",Validators.required),
    dateRecrutement: new FormControl(new Date()),
     
    salaire: new FormControl("", Validators.required),
    nomUniversite: new FormControl("", Validators.required),
   
   
    }) 
    getReservFormData() {
      if (this.Reactiveform.valid) {
        const editid = this.Reactiveform.getRawValue().id;
        console.log(editid);
        if (editid != null && this.editmode) {
          this.updateDoctor();
        } else {
          this.addDoctor();
        }
      } else {
        alertifyjs.error("Merci d'entrer des données valides pour Pharmacien");
      }
    }
    addDoctor() {
      this.service.savePharmacien(this.Reactiveform.getRawValue()).subscribe(result => {
        this.respdata = result;
        if (this.respdata) {
          this.dialogref.close()
          alertifyjs.success('Bravo! Les coordonnées de Pharmacien sont enregistrées avec succès');
        }
      });
    }
    updateDoctor() {
      const editid= this.Reactiveform.getRawValue().id;
      this.service.UpdatePharmacien(editid,this.Reactiveform.getRawValue()).subscribe(result => {
        this.respdata = result;
        if (this.respdata) {
          this.dialogref.close()
          alertifyjs.success('Bravo! Les coordonnées de Pharmacien sont enregistrées avec succès');
        }
      });
    }
    alldoctors() {
      this.service.getAllPharmaciens().subscribe(data => {
        this.listclients = data;
      })
    }
   
}
