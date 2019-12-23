import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-demo',
  templateUrl: './bootstrap-demo.component.html',
  styleUrls: ['./bootstrap-demo.component.css']
})
export class BootstrapDemoComponent implements OnInit {

productarr=[
  {
    Fname:"Sumit",
    Lname:"Raokhande",
    id:1
  },
  {
    Fname:"Kiran",
    Lname:"Raokhande",
    id:2
  },
  {
    Fname:"Spruha",
    Lname:"Raokhande",
    id:3
  }
];

  constructor() { }

  ngOnInit() {
  }

}
