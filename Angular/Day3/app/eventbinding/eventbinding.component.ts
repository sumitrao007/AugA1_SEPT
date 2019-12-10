import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  name:string="Hi Hello";
  ishidden:boolean=true;
  name1:string="Sumit Raokhande";
  count:number=0;
  name2:string="";
  myname:string="";
    constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("Event Occur!!!!!");
  }

  onClickMe(){
    this.name="Click Eevent !!!!!!";
  }
  onShowMe(){
    this.ishidden=false;
  }

  onCount(){
    if(this.count===0){
      console.log("Count is Initialliy Zero!!!");
      this.count=this.count+1;
    }
  }


  onEventInfo(myevent){
    console.log(myevent);
    console.log("Value is "+myevent.target.value);
  }

  OnShowINfo(){
    this.name2="Mazhar"
  }
  OnPropertyBind(){
    this.myname="Hi Mazhar"
  }


}
