import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  name:string="Hefshine PVT LTD";
  ishidden:boolean=true;

  mycolor:string='black';
  mycolor1:string='black';

  constructor() { }

  ngOnInit() {
  }

  OnShowMe(){
    this.ishidden=false;
  }


  onRed(){
    this.mycolor='red';
  }
  onGreen(){
    this.mycolor='green';

  }

  onBlue(){
    this.mycolor='blue';
  }


  onColor(value){
    this.mycolor1=value;
  }



}
