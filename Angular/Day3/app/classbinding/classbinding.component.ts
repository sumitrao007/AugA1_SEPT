import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  mysucess:string='success';
  mywarning:string='warning';
  iserror:boolean=true;
  rating:number=12;
  iserror1:boolean=true;
  isspecial:boolean=true;

  myobj={
    "success":!this.iserror1,
    "danger" :this.iserror1,
    "special" : this.isspecial
  };

  constructor() { }

  ngOnInit() {
  }

}
