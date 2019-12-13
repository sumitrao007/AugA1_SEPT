import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {
  
  course:string[]=["Angular 2+","React Js","Vue JS","MEAN Stack","Express JS"];

  product=[
    {
      prod_name:"Shahi Utane",
      qutantity:5,
      weight:"30gm",
      price:30
    },
    {
      prod_name:"Gulab Utane",
      qutantity:5,
      weight:"30gm",
      price:30
    },
    {
      prod_name:"Perfume",
      qutantity:5,
      weight:"30ml",
      price:85
    },
    {
      prod_name:"Royal Mirrage",
      qutantity:1,
      weight:"30ml",
      price:85
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
