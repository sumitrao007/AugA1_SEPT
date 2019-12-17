import { Component, OnInit } from '@angular/core';
import { MyServcie } from '../MyCourse.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  arrcourse=[];
  myarrobj=[];
  selected:string='';
  constructor(private service:MyServcie) { 
  // let service=new MyServcie();
    //this.arrcourse=service.getcourse();
  }

  ngOnInit() {
    this.arrcourse=this.service.getcourse();
    this.myarrobj=this.service.getArrCourse();

  }

  onMouseHover(item){
    this.selected=item.fname;
  }

  onMouseout(){
    this.selected='';
  }

}
