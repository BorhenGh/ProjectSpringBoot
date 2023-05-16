import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import * as alertifyjs from 'alertifyjs';
import { HttpClient, HttpParams,HttpResponse } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import {MatInputModule} from '@angular/material/input';
import { SharedserviceService } from '../services/sharedservice.service';
import { AddEditRdvComponent } from '../add-edit-rdv/add-edit-rdv.component';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  editmode:boolean=false;
  Listappointment:any=[];
  ngOnInit(): void {
    this.GetAllRdv();
    }
  constructor(private dialog:MatDialog,private service:SharedserviceService){}
  supprimer(id:any){
    alertifyjs.confirm("Supprimer Le rendez vous","Voulez vous supprimer le rendez vous?",()=>{ this.service.supprimerRdv(id).subscribe(del=>{
      this.GetAllRdv();
      alertifyjs.success('Le rendez vous est supprimée avec succès');
    })
  
    },function(){
  
    })
   
  }
  OpenDialog(enteranimation:any,exitanimation:any,id:any){
    this.dialog.open(AddEditRdvComponent,{
         enterAnimationDuration:enteranimation,
         exitAnimationDuration:exitanimation,
         width: '700px',
         data:{
          idrendezvous:id,
           editmo:this.editmode,
   
         }
         
         
         
         
         
       })
   
     }
     update(id:any){
      this.editmode=true;
     this.OpenDialog('1000ms','600ms',id)
     this.GetAllRdv();
     
  
    }
     add(){
      this.editmode=false;
      this.OpenDialog('1000ms','600ms','')
     this.GetAllRdv();
      
    }

  GetAllRdv(){
      this.service.getAllrdv().subscribe(reps=>{
this.Listappointment=reps
      })
    }
    getRevenu(id:any){

    }

}
