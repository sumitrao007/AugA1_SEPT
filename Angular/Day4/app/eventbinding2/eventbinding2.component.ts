import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {

  backcolor:string='white';
  result:string="";

  constructor() { }

  ngOnInit() {
  }

  onChange(){
    console.log("Change Event Occur!!!!!");
  }

  onChange1(){
    console.log("Event Occur!!!!!");
    this.backcolor='green';
  }

  onkeyup(){
    console.log("KeyUP Event Occur!!");
  }

  onkeyDown(){
    console.log("Key Down Event Occur!!!! ");
  }
  
  onClick(value){
    console.log("User Enterted value is "+value);
    let temp=(<string> value);
        console.log("Length is "+temp.length);

  }

  onClick1(kuchbhi){
    console.log(kuchbhi);
   
    console.log("value Of Input Box "+kuchbhi.value);

    kuchbhi.style.background='red';
  }

  onAddition(num1:number,num2:number){
    //console.log(num1+num2);

 //    this.result=""+((+num1) + (+num2) ); 
       //console.log(num1+num2);
   // this.result=num1+num2;

   this.result=""+(Number(num1)+Number(num2));

  }

 


}
