import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css']
})
export class SwitchdemoComponent implements OnInit {

  mycolor:string='blackfgse';
  mycolor1:string='';
  ishidden:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.ishidden=false;
  }

}
