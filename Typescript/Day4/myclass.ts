export class Myclass{

     firstname:string;
   private lastname:string; 
   id:number;  
   
//    constructor(){
//        this.firstname="XYZ";
//        this.lastname="TTTT";
//    }

   constructor(fname:string,lname:string,id:number){
        this.firstname=fname;
        this.lastname=lname;
        this.id=id;
   }


   display(){
       console.log(`
       ------------------------------
       First name Is ${this.firstname}
       Last name is ${this.lastname}
       Id IS        ${this.id}
       `);
   }

   public setFirstname(fname:string){
       this.firstname=fname;
   }

   public getFirstname():string{
       return this.firstname;
   }

   setLastname(lname:string):void{
       this.lastname=lname;
   }

   getLastname():string{
       return (this.lastname);
   }

}

// var myobj=new Myclass("Hefshine","PVT LTD",1);
// myobj.display();

// console.log("--------------------------");
// myobj.setFirstname("Pandurang");
// myobj.setLastname("Kokare");
// myobj.display();

export const pi=3.14;
export function add(a:number,b:number){
    console.log(`
    -----------------------------
    Addition is ${(a+b)}
    `);
}