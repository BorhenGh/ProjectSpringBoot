import { Component } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { MatNativeDateModule  } from '@angular/material/core';
import * as alertifyjs from 'alertifyjs';
import { HttpClient, HttpParams,HttpResponse } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import {MatInputModule} from '@angular/material/input';
import { SharedserviceService } from '../services/sharedservice.service';
import { AddEditPharmacienComponent } from './add-edit-pharmacien/add-edit-pharmacien.component';

@Component({
  selector: 'app-pharmacien',
  templateUrl: './pharmacien.component.html',
  styleUrls: ['./pharmacien.component.css']
})
export class PharmacienComponent {
  editmode:boolean=false;
  Listdoctors:any=[];
  constructor(private dialog:MatDialog,private service:SharedserviceService){}
  
  ngOnInit(): void {
    this.GetAllDoctors();
    }
  OpenDialog(enteranimation:any,exitanimation:any,id:any){
    this.dialog.open(AddEditPharmacienComponent,{
         enterAnimationDuration:enteranimation,
         exitAnimationDuration:exitanimation,
         width: '700px',
         data:{
           id:id,
           editmo:this.editmode,
   
         }
         
         
         
         
         
       })
   
     }
     supprimer(id:any){
      alertifyjs.confirm("Supprimer Le Pharmacien","Voulez vous supprimer le Pharmacien?",()=>{ this.service.supprimerPharmacien(id).subscribe(del=>{
        this.GetAllDoctors();
        alertifyjs.success('Le Pharmacien est supprimée avec succès');
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
      this.service.getAllPharmaciens().subscribe(reps=>{
this.Listdoctors=reps
      })
    }
}
