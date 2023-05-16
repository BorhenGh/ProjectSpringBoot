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
  selector: 'app-add-editnurses',
  templateUrl: './add-editnurses.component.html',
  styleUrls: ['./add-editnurses.component.css']
})
export class AddEditnursesComponent {
  editdata: any;
  respdata:any;
  editmode:boolean=false;
  listclients:any=[];
  constructor(private service: SharedserviceService, @Inject(MAT_DIALOG_DATA) public d: any, public dialogref: MatDialogRef<AddEditnursesComponent>) { }
  ngOnInit(): void {
    this.editmode=this.d.editmo;
    this.allnurse()
    console.log(this.editmode);

    if (this.d.idnurse != null && this.d.idnurse != '') {


    this.service.getNursesById(this.d.idnurse).subscribe(respponse=>{
this.editdata=respponse;
this.Reactiveform.setValue({
  idnurse: this.editdata.idnurse,
  nomNurse:this.editdata.nomNurse,
  age: this.editdata.age,
  telephone: this.editdata.telephone,
  dateRecrutement: this.editdata.dateRecrutement,
  salaire: this.editdata.salaire,
  nomUniversite: this.editdata.nomUniversite,
  nurseGrade:this.editdata.nurseGrade
});


    })

    } 

  } 
  Reactiveform = new FormGroup({
    idnurse:new FormControl({value:0,disabled:true}),
    nomNurse:new FormControl("",Validators.required),
   
    age:new FormControl("",Validators.required),
    telephone:new FormControl("",Validators.required),
    dateRecrutement: new FormControl(new Date()),
     
    salaire: new FormControl("", Validators.required),
    nomUniversite: new FormControl("", Validators.required),
   
   
    nurseGrade: new FormControl("", Validators.required),
    }) 
    getReservFormData() {
      if (this.Reactiveform.valid) {
        const editid = this.Reactiveform.getRawValue().idnurse;
        console.log(editid);
        if (editid != null && this.editmode) {
          this.updateNurse();
        } else {
          this.addNurse();
        }
      } else {
        alertifyjs.error("Merci d'entrer des données valides pour Nurse");
      }
    }
    addNurse() {
      this.service.saveNurses(this.Reactiveform.getRawValue()).subscribe(result => {
        this.respdata = result;
        if (this.respdata) {
          this.dialogref.close()
          alertifyjs.success('Bravo! Les coordonnées de Nurse sont enregistrées avec succès');
        }
      });
    }
    updateNurse() {
      const editid= this.Reactiveform.getRawValue().idnurse;
      this.service.UpdateNurses(editid,this.Reactiveform.getRawValue()).subscribe(result => {
        this.respdata = result;
        if (this.respdata) {
          this.dialogref.close()
          alertifyjs.success('Bravo! Les coordonnées de Nurse sont enregistrées avec succès');
        }
      });
    } allnurse() {
      this.service.getAllnurses().subscribe(data => {
        this.listclients = data;
      })
    }
}
