import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuildpipe',
  templateUrl: './inbuildpipe.component.html',
  styleUrls: ['./inbuildpipe.component.css']
})
export class InbuildpipeComponent implements OnInit {


  strdetails:string="Lorem ipsum Dolor sit Amet consectetur adipisicing elit.";

  myobj={
    fname:"Hefshine",
    lname:"PVT LTD"
  }

  mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
