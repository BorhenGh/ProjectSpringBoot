import { Component } from '@angular/core';
import { AddEditnursesComponent } from './add-editnurses/add-editnurses.component';
import {MatDialog} from '@angular/material/dialog';
import { MatNativeDateModule  } from '@angular/material/core';
import * as alertifyjs from 'alertifyjs';
import { HttpClient, HttpParams,HttpResponse } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import {MatInputModule} from '@angular/material/input';
import { SharedserviceService } from '../services/sharedservice.service';

@Component({
  selector: 'app-nurses',
  templateUrl: './nurses.component.html',
  styleUrls: ['./nurses.component.css']
})
export class NursesComponent {
  editmode:boolean=false;
  Listnurses:any=[];
  constructor(private dialog:MatDialog,private service:SharedserviceService){}
  ngOnInit(): void {
    this.GetAllNurses();
    }
      
  OpenDialog(enteranimation:any,exitanimation:any,id:any){
    this.dialog.open(AddEditnursesComponent,{
         enterAnimationDuration:enteranimation,
         exitAnimationDuration:exitanimation,
         width: '700px',
         data:{
           idnurse:id,
           editmo:this.editmode,
   
         }
         
         
         
         
         
       })
   
     }
     supprimer(id:any){
      alertifyjs.confirm("Supprimer L'infirmière","Voulez vous supprimer l'infirmière?",()=>{ this.service.supprimerNurses(id).subscribe(del=>{
        this.GetAllNurses();
        alertifyjs.success('Le medecin est supprimée avec succès');
      })
    
      },function(){
    
      })
     
    }
    update(id:any){
      this.editmode=true;
     this.OpenDialog('1000ms','600ms',id)
     this.GetAllNurses();
     
  
    }
    add(){
      this.editmode=false;
      this.OpenDialog('1000ms','600ms','')
     this.GetAllNurses();
      
    }
    GetAllNurses(){
      this.service.getAllnurses().subscribe(reps=>{
this.Listnurses=reps
      })
    }

}
