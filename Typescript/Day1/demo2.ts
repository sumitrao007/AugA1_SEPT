var str:any;

//Type Assertion

//1 Angle Bracket
// 2 as syntax

//(<string> str).

// (str as string).

//Airthematic,logical,relational,assignment,bitwise,ternary/conditional

var a:number=10;
var b:number=2;

console.log(`
Addition is ${a+b}
`);
a+=10;
console.log("Value of A IS "+a);
var temp =a>b?a:b;

console.log("Conditional Operator "+temp);
b=21;
var temp1=(a>b && a>0)?a>10?"A is Grater than 10":"A is less than 10":b<0?"Bis LEss than 0":"B is Grater than 0";

console.log("Nestated Conditional Operator is "+temp1);

var temp3:boolean=true;

if(temp3){
    console.log("U R In If Loop");
}

var temp4=5;
var temp5=10;

// if(temp5>temp4 && temp5>0){
//     console.log("U R In If Condition true");
// }else{
//     console.log("U R In else part true");
// }

// var count=0;

// for(let i=0;i<4;i++){
//     count=count+1;
//     console.log("value of i is "+i);
// }
// //console.log("value of i is "+i);
// console.log("Value of Count "+count+typeof count);

// //count="jfljsdf";

// const temp6:number=3.14;
//    // temp6=53;
    
// for (let index = 0; index < 4; index++) {
//     const element = index+1;
//     console.log("In For Loop Element is"+element);
//    // const temp6:number=element;
// }

// // while(temp6!=0){
// //     console.log("In While Loop");

// // }
// var temp8=5;
// while (temp8!=0) {
//     temp8=temp8-1;
//     console.log("In While Loop"+temp8);
// }

// var a1=16.5;
// console.log("Use Math Function a1"+Math.floor(a1));
// var a2=16.4;
// console.log("Use Math Function a2 "+Math.floor(a2));

// var a3=0.9;
// console.log("Use Math Function a3 "+Math.floor(a3));

// var a4=-16.5;
// console.log("Use Math Function a4 "+Math.floor(a4));
// var a5=-0.9;
// console.log("Use Math Function a5 "+Math.floor(a5));

// var b1=16.5;
// console.log("Use math Function is Ceil"+Math.ceil(b1));

// var b2=16.4;
// console.log("Use math Function is Ceil "+Math.ceil(b2));

// var b3=16.001;
// console.log("Use math Function is Ceil "+Math.ceil(b3));

// var b4=-16.5;
// console.log("Use math Function is Ceil b4 "+Math.ceil(b4));

//Special Operator misec


var c1=12;
var c2=10;

console.log(`
    Addition is ${c1+c2}
`);

var c4="Sumit";
var c5="Raokhande";
console.log("Concat the String "+c4+" "+c5);

var c6='2';
var c7='3';

console.log("Before Conversion Result is "+c6+c7);
var c8=+c6;
var c9=+c7;
console.log("After Conversion Result is "+(c8+c9));

var d1='2';
var d2='8';

console.log("Using Number Conversion :: "+(Number(d1)+ Number(d2)));




