import {Shape} from './HireachicalInheritance';
export class Rectangle extends Shape{
    length:number;
    breadth:number;
    Area:number;

    constructor(l:number,b:number){
        super();
        this.length=l;
        this.breadth=b;
    }

    area(){
        this.Area=this.length*this.breadth;
    }

    display(){
        console.log(`
        -----------------------------------
        Recatangle of Area ${this.Area}
        `)
    }

}