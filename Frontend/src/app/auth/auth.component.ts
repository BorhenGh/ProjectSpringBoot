import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  constructor() { }

  selectedIndex:number = 0

  ngOnInit(): void {

  }

  accountDidCreated()
  {
    console.log("qdsdsddsds")
this.selectedIndex = 0
  }

}