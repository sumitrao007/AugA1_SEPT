import { Component } from "@angular/core";

@Component({
    selector:'app-course',
    templateUrl:"./course.component.html",
    styleUrls:["./course.component.css"]
})
export class CourseComponent{

    name:string="Sumit Raokhande";

    imgurl:string="../assets/Desert.jpg"

    getname(){
        this.name="Hefshine PVT LTD";
        return this.name;
    }
    
}