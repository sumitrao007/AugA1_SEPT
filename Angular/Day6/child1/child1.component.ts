import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Output() childEventstr=new EventEmitter();
  @Output() childEventObj=new EventEmitter();
  @Output() childEventArrObj=new EventEmitter();
   
  myObj1={
    "myName1":"Rohit",
    "myName2":"Sharma"
  }
   arrObj1=[
     {
       "id":1,
       "name":"XYZ"
    },
    {
      "id":2,
      "name":"ABC"
    },
    {
      "id":3,
      "name":"PQR"
    }

   ]
  constructor() { }

  ngOnInit() {
  }
  // onClickStr(){
  //   this.childEventstr.emit("Hefshine PVT LTD");
  // }
  // onClickObj(){
  //   this.childEventObj.emit(this.myObj1);
  // }
  onClickArrObj(){
    this.childEventArrObj.emit(this.arrObj1);
  }
}
