import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import * as alertifyjs from 'alertifyjs';
import { HttpClient, HttpParams,HttpResponse } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import {MatInputModule} from '@angular/material/input';
import { SharedserviceService } from '../services/sharedservice.service';
import { AddEditPatientComponent } from './add-edit-patient/add-edit-patient.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  editmode:boolean=false;
  Listpatient:any=[];
  ngOnInit(): void {
    this.GetAllPatient();
    }
  constructor(private dialog:MatDialog,private service:SharedserviceService){}
  supprimer(id:any){
    alertifyjs.confirm("Supprimer Le patient","Voulez vous supprimer le patient?",()=>{ this.service.supprimerPatient(id).subscribe(del=>{
     this.GetAllPatient();
      alertifyjs.success('Le patient est supprimée avec succès');
    })
  
    },function(){
  
    })
   
  }
  OpenDialog(enteranimation:any,exitanimation:any,id:any){
    this.dialog.open(AddEditPatientComponent,{
         enterAnimationDuration:enteranimation,
         exitAnimationDuration:exitanimation,
         width: '700px',
         data:{
          idpatient:id,
           editmo:this.editmode,
   
         }
         
         
         
         
         
       })
   
     }
     update(id:any){
      this.editmode=true;
     this.OpenDialog('1000ms','600ms',id)

     
  
    }
     add(){
      this.editmode=false;
      this.OpenDialog('1000ms','600ms','')

      
    }
    GetAllPatient(){
      this.service.getAllPatient().subscribe(reps=>{
this.Listpatient=reps
      })
    }
}
