import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdirective',
  templateUrl: './ifdirective.component.html',
  styleUrls: ['./ifdirective.component.css']
})
export class IfdirectiveComponent implements OnInit {

  rating:number=2;
  rating1:number=12;
  rating2:number=2;

  constructor() { }

  ngOnInit() {
  }

}
