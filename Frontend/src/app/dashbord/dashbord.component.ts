import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../services/sharedservice.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  constructor(private service :SharedserviceService){}
  nombreDoctor?:number;
  nombreRoom?:number;
  nombreRendezvous?:number;
  nombrePatients?:number;
  nombrepharm?:number;
  nombreNurses?:number;
  ngOnInit(): void {
   this.GetNombreDoct();
   this.GetnNombreRoom();
   this.GetnNombreNurses();
   this.GetnNombrePatients();
   this.GetnNombrePharm();
   this.GetnNombreRendezvous();
  }
  GetNombreDoct(){
    this.service.getNombreMedecin().subscribe(res=>{
      this.nombreDoctor=res;
    })
  }
  GetnNombreRoom(){
    this.service.getNombreRooms().subscribe(res=>{
this.nombreRoom=res;
    })
  }
  GetnNombreNurses(){
    this.service.getNombreNurses().subscribe(res=>{
this.nombreNurses=res;
    })
  }
  GetnNombreRendezvous(){
    this.service.getNombreAppointment().subscribe(res=>{
this.nombreRendezvous=res;
    })
  }
  GetnNombrePharm(){
    this.service.getNombrePharm().subscribe(res=>{
this.nombrepharm=res;
    })
  }

  GetnNombrePatients(){
    this.service.getNombrePatients().subscribe(res=>{
this.nombrePatients=res;
    })
  }

}
