import {Employee} from './Empolyee';
import {Department} from './Department'
export class EMPDetails implements Employee {
    firstname: string;    
    lastname: string;
    company: string;
    salary:number; 
    dept:Department;
    
    constructor(fname:string,lnmae:string,comapny:string,salary:number,dept:string){

        this.firstname=fname;
        this.lastname=lnmae;
        this.company=comapny;
        this.salary=salary;
        this.dept=new Department(dept);

    }


    display() {
        
        console.log(`
        ---------------EMP Details--------------------
        Empolyee First Name Is ${this.firstname}
        Empolyee Last Name Is ${this.lastname}
        Empolyee Company Is ${this.company}
        Empolyee Salary Is ${this.salary}
        Empolyee Department  Is ${this.dept.getDept()}
        `);

    }


}
