import { Component } from '@angular/core';
import { AddEditDocteurComponent } from './add-edit-docteur/add-edit-docteur.component';
import {MatDialog} from '@angular/material/dialog';
import { MatNativeDateModule  } from '@angular/material/core';
import * as alertifyjs from 'alertifyjs';
import { HttpClient, HttpParams,HttpResponse } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import {MatInputModule} from '@angular/material/input';
import { SharedserviceService } from '../services/sharedservice.service';
import { RevenuComponent } from './revenu/revenu.component';
import { NumberAppointmentComponent } from '../number-appointment/number-appointment.component';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {
  editmode:boolean=false;
  Listdoctors:any=[];
 
  ngOnInit(): void {
this.GetAllDoctors();
} constructor(private dialog:MatDialog,private service:SharedserviceService){}
  OpenDialog(enteranimation:any,exitanimation:any,id:any){
    this.dialog.open(AddEditDocteurComponent,{
         enterAnimationDuration:enteranimation,
         exitAnimationDuration:exitanimation,
         width: '700px',
         data:{
           idmedecin:id,
           editmo:this.editmode,
   
         }
         
         
         
         
         
       })
   
     }
     OpenDialogRevenu(enteranimation:any,exitanimation:any,id:any){
      this.dialog.open(RevenuComponent,{
        enterAnimationDuration:enteranimation,
        exitAnimationDuration:exitanimation,
        width: '700px',
        data:{
          idmedecin:id,
          editmo:this.editmode,
        }
      });
    }
    OpenDialogCountAppointment(enteranimation:any,exitanimation:any,id:any){
      this.dialog.open(NumberAppointmentComponent,{
        enterAnimationDuration:enteranimation,
        exitAnimationDuration:exitanimation,
        width: '700px',
        data:{
          idmedecin:id,
          editmo:this.editmode,
        }
      });
    }
     
     supprimer(id:any){
      alertifyjs.confirm("Supprimer Le medecin","Voulez vous supprimer le medecin?",()=>{ this.service.supprimerDoct(id).subscribe(del=>{
        this.GetAllDoctors();
        alertifyjs.success('Le medecin est supprimée avec succès');
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
      this.service.getAllmedecin().subscribe(reps=>{
this.Listdoctors=reps
      })
    }
    getRevenu(idmedecin: number) {
      this.editmode = true;
      this.OpenDialogRevenu('1000ms', '600ms', idmedecin);
      this.GetAllDoctors();
    }
    getCountAppointment(idmedecin:number){
      this.editmode=true;
      this.OpenDialogCountAppointment('1000ms', '600ms', idmedecin);
      this.GetAllDoctors()
    }

   
}
