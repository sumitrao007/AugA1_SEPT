import {Shape} from './HireachicalInheritance';
export class Circle extends Shape {

    radius:number;
    Area:number;

    constructor(radius:number){
        super();
        this.radius=radius;
    }
    
    area(){
        this.Area=this.radius*this.radius*3.14;
    }

    display(){
        console.log(`
        ------------------------------------------
        Radius of Circle is ${this.radius}
        Area of Circle is ${this.Area}
        `);
    }

}