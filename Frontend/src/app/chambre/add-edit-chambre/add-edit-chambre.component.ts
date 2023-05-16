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
  selector: 'app-add-edit-chambre',
  templateUrl: './add-edit-chambre.component.html',
  styleUrls: ['./add-edit-chambre.component.css']
})
export class AddEditChambreComponent {
  editmode:boolean=false;
  editdata:any;
  respdata: any;
  ListRooms:any=[];
  constructor(private service: SharedserviceService, @Inject(MAT_DIALOG_DATA) public d: any, public dialogref: MatDialogRef<AddEditChambreComponent>) { }
  ngOnInit(): void {
    this.editmode = this.d.editmo;
    this.GetAllRooms();

    if (this.d.idchambre != null && this.d.idchambre != ''){
      this.service.getRoomById(this.d.idchambre).subscribe(response=>{
        this.editdata = response;
        console.log(this.editdata)
        this.Reactiveform.setValue({
          idchambre: this.editdata.idchambre,
          nombreDelit: this.editdata.nombreDelit,
        
          
        });
      });
    }
  }
  Reactiveform = new FormGroup({
    idchambre: new FormControl({value:0,disabled:true}),
    nombreDelit: new FormControl("", Validators.required),
    
  });
  GetAllRooms(){
    this.service.getAllrooms().subscribe(reps=>{
this.ListRooms=reps
    })
  }
  getReservFormData() {
    if (this.Reactiveform.valid) {
   const editid = this.Reactiveform.getRawValue().idchambre;
   console.log(editid);
   if (editid != null && this.editmode) {
     this.updateRoom();
   }  else {
       this.addRoom();
     }
   }
  else {
   alertifyjs.error("Merci d'entrer des données valides pour chambre");
 }
 }
 addRoom() {
  this.service.savechambre(this.Reactiveform.getRawValue()).subscribe(result => {
    this.respdata = result;
    if (this.respdata) {
      this.dialogref.close()
      alertifyjs.success('Bravo! Les coordonnées de rendezvous sont enregistrées avec succès');
    }
    location.reload();
  });
}
updateRoom(){
  const editid= this.Reactiveform.getRawValue().idchambre;
    this.service.UpdateRoom(editid,this.Reactiveform.getRawValue()).subscribe(result => {
      this.respdata = result;
      if (this.respdata) {
        this.dialogref.close()
        alertifyjs.success('Bravo! Les coordonnées de chambre-vous sont modifiées avec succès');
      }
      location.reload();
    });
}

}
