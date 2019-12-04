// add();

// function add(){
//     console.log("Addition Is "+(5+5));
// }

// function add1(a:number,b:number){
//     console.log("Addition of A+B "+(a+b));
// }

// add1(2,3);


// function add2(){
//     return (6+6);
// }

// var res1=add2();
// console.log("Function with return Type "+res1);

// console.log("Function with return "+add2());

// function add3(a:number,b:number){
//     return (a+b);
// }

// console.log("Function with parameter with return Type "+add3(8,4));

// function add4(a:number,b:number):number{
//     return (a+b);
// }

// console.log(`
// -------------------
//  Addition is ${add4(7,7)}
// `);

// function add5(a,b){
//     console.log("Value of a is "+a);
//     console.log("Value of b is "+b);
//     console.log("Addition of a+b is "+(a+b));
// }

// add5(5,"hsd");

// function add6(a,b):number{
//    // return (a+b);
//    return (b);
// }

// console.log(add6(2,"hdhfh"));
// console.log(add6("Aug Batch",2));
// console.log(add6(2,"hjdfvhjs"));

// var temp=function(){
//     console.log("Hello hsdf");
// }

// temp();
// var temp1=function(a:number,b:number){
//     console.log(`
//     ----------------
//     Multiplication ${a*b}
//     `);
// }

// temp1(12,2);

// var temp2=function(a:number,b:number){
//     return (a*b);
// }

// console.log("Func With Return "+temp2(10,4));

// //Fat Arrow Function

// var temp3=()=>{
//     console.log("Multiplicatio is "+(10*5));
// }
// temp3();

// var temp4=(a:number,b:number)=>{
//     console.log("Multiplication is "+(a*b));
// }

// temp4(4,5);

// var temp5=(a,b)=>{
//     return (a*b);
// }
// console.log("Multiplication Is "+temp5(2,3));

// var temp6=(a:number,b:number):number=>{
//     return (a*b);
// }

// console.log("Function with Return "+temp6(5,5));

//optional parameter function 

function Mult(a,b?){

    console.log("Value of A is "+a);
    console.log("Value of b is "+b);
    console.log("Multiplication  of A*B is "+(a*b));
}

// Mult(11,2);
// Mult(11);

console.log("--------------------------- ");
function Mukt1(a?,b?,c?,d?,e?){
    console.log("Value of A is "+a);
    console.log("Value of b is "+b);
    console.log("Value of c is "+c);
    console.log("Multiplication  of A*B*c is "+(a*b*c));

}

//Mukt1(1,2);

var temp7=(a?:number,b?:number,c?:number)=>{
    console.log("Value of A is "+a);
    console.log("Value of b is "+b);
    console.log("Value of c is "+c);
    console.log("Multiplication  of A*B*c is "+(a*b*c));
}

//temp7(1,2);

//default parameter Function
console.log("-------------------------------");
function multi(a:number,b:number=4,c?:number){
    console.log("Value of A is "+a);
    console.log("Value of b is "+b);
    console.log("Value of c is "+c);
    console.log("Multiplication  of A*B*c is "+(a*b*c));
}

//multi(2,3);
//multi(2,3,5);



function multi1(a:number,b:number,c:number=3){
    console.log("Value of A is "+a);
    console.log("Value of b is "+b);
    console.log("Value of c is "+c);
    console.log("Multiplication  of A*B*c is "+(a*b*c));
}

multi1(2,3,5);
multi1(2,3);

var temp8=(a:number,b:number,c:number=2)=>{
    console.log("Fat Arrow Function--- "+(a*b*c));
}

console.log(temp8(1,2));
temp8(1,2);

var temp9=(a:number,b:number,c:number=2)=>{
   // console.log("Fat Arrow Function--- "+(a*b*c));
    return (a*b*c);
}

console.log(temp9(1,5));

//Function Constructor

var fun=new Function("a1","b1","console.log(a1+b1)");

fun(70,70);

var fun1=new Function("a2","b2",`
    console.log(a2)
    console.log(a2*b2)
`)

fun1(10,20);
//Rest Parameter Function

