import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import * as alertifyjs from 'alertifyjs';
import { HttpClient, HttpParams,HttpResponse } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import {MatInputModule} from '@angular/material/input';
import { SharedserviceService } from '../services/sharedservice.service';

import { AddEditChambreComponent } from './add-edit-chambre/add-edit-chambre.component';
@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent {
  editmode:boolean=false;
  ListRooms:any=[];
  constructor(private dialog:MatDialog,private service:SharedserviceService){}
  ngOnInit(): void {
    this.GetAllRoooms();
    }
  OpenDialog(enteranimation:any,exitanimation:any,id:any){
    this.dialog.open(AddEditChambreComponent,{
         enterAnimationDuration:enteranimation,
         exitAnimationDuration:exitanimation,
         width: '700px',
         data:{
          idchambre:id,
           editmo:this.editmode,
   
         }
         
         
         
         
         
       })
   
     }
     supprimer(id:any){
      alertifyjs.confirm("Supprimer La chambre","Voulez vous supprimer la chambre?",()=>{ this.service.supprimerRooms(id).subscribe(del=>{
        this.GetAllRoooms();
        alertifyjs.success('La chambreest supprimée avec succès');
      })
    
      },function(){
    
      })
     
    }
     update(id:any){
      this.editmode=true;
     this.OpenDialog('1000ms','600ms',id)
     this.GetAllRoooms();

     
  
    }
    add(){
      this.editmode=false;
      this.OpenDialog('1000ms','600ms','')
     this.GetAllRoooms();
 
      
    }
     GetAllRoooms(){
      this.service.getAllrooms().subscribe(reps=>{
this.ListRooms=reps
      })
    }
    
}
