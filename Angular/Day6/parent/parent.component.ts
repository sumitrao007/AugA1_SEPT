import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  myname:string="Hefshine PVT LTD";

  myObj={
    "fName":"Tejaswini",
    "lName":"Bhandare"
  }
  myArrObj=[
    {
      "fName":"Mahendra Singh",
      "lName":"Dhoni",
      "JRNumber":"7",
      "DOB":"7th july 1981"
    },
    {
      "fName":"virat",
      "lName":"kohli",
      "JRNumber":"18",
      "DOB":"5th november 1988"
    },
    {
      "fName":"Rohit",
      "lName":"Sharma",
      "JRNumber":"45",
      "DOB":"30th april 1987"
    },
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
