import { Component } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { MatNativeDateModule  } from '@angular/material/core';
import * as alertifyjs from 'alertifyjs';
import { HttpClient, HttpParams,HttpResponse } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import {MatInputModule} from '@angular/material/input';
import { SharedserviceService } from '../services/sharedservice.service';

import { NumberAppointmentComponent } from '../number-appointment/number-appointment.component';
import { AddEditDoctPatientComponent } from '../docPatient/add-edit-doct-patient/add-edit-doct-patient.component';
import jsPDF from 'jspdf';
import * as jspdf from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-doc-patient',
  templateUrl: './doc-patient.component.html',
  styleUrls: ['./doc-patient.component.css']
})
export class DocPatientComponent {
  editmode:boolean=false;
  Listdoc:any=[];

  ngOnInit(): void {
    this.GetAllDoctors();
    } 
    
  

  constructor(private dialog:MatDialog,private service:SharedserviceService){}
  OpenDialog(enteranimation:any,exitanimation:any,id:any){
    this.dialog.open(AddEditDoctPatientComponent,{
         enterAnimationDuration:enteranimation,
         exitAnimationDuration:exitanimation,
         width: '700px',
         data:{
          idDocuments:id,
           editmo:this.editmode,
   
         }
         
         
         
         
         
       })
   
     }
     supprimer(id:any){
      alertifyjs.confirm("Supprimer Le document de patient","Voulez vous supprimer le document de patient?",()=>{ this.service.supprimerDoctP(id).subscribe(del=>{
        this.GetAllDoctors();
        alertifyjs.success('Le document de patient est supprimée avec succès');
      })
    
      },function(){
    
      })
     
    }
    update(id:any){
      this.editmode=true;
     this.OpenDialog('1000ms','600ms',id)
     this.GetAllDoctors();
     
  
    }

add(){
      this.editmode=false;
      this.OpenDialog('1000ms','600ms','')
     this.GetAllDoctors();
      
    }
    GetAllDoctors(){
      this.service.getAllDoctP().subscribe(reps=>{
this.Listdoc=reps
      })
    }

}
