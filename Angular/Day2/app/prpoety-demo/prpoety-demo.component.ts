import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prpoety-demo',
  templateUrl: './prpoety-demo.component.html',
  styleUrls: ['./prpoety-demo.component.css']
})
export class PrpoetyDemoComponent implements OnInit {

  name:string="Angular Lecture!!!";
  ishidden:boolean=false;
  ishidden1:boolean=false;
  imgurl:string='../../assets/Desert.jpg';
  isdissable:boolean=false;
  ishidden2:boolean=false;


  constructor() { }

  ngOnInit() {
  }

}
