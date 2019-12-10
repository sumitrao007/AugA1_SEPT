import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
  mycolor:string='red';
  rating:number=5;
  mycolor1:string='red';
  mycolor2:string='green';
  rating1:number=-2;

  myobj={
    color:'green',
    fontStyle: "italic",
    fontFamily: "Courier New, Courier, monospace"
  };


  constructor() { }

  ngOnInit() {
  }

}
