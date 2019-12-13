import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  myname:string="";
  myname1:string="";
  ishidden:boolean=true;
  myname2:string='';
  msg:string='';

  constructor() { }

  ngOnInit() {
  }
  OnShowMe(){
    this.ishidden=false;
  }

  onClick(){
    if(this.myname2===''){
      this.msg="Please Enter the Name";
    }else{
      this.msg=this.myname2;
    }
  }

}
