import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input() parentToChild;
  // @Input() parentToChildObj={}
  // @Input() parentToChildArrObj=[];
  // constructor() { }

  // ngOnInit() {
  //   console.log("data in child componenent:" +this.parentToChild);

  //   console.log("firstname in child" +" " +this.parentToChildObj.fName);

  //   console.log("lastname in child" +"  "+this.parentToChildObj.lName);
  // }
  ngOnInit(){
    
  }
}
