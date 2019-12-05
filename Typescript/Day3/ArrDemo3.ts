var arr1=[10,20,30,40,50,60,70];

var temparr=arr1.slice(1,4);
console.log("Original Array "+arr1);
console.log("Copied  Array "+temparr);

var arr2:number[]=[1,2,3,4];

var temparr1= arr2.map((element)=>{
    return (element*element);
});

console.log(`
---------------------------
Original Array  ${arr2}`);
console.log("Element by Element Perform Operation "+temparr1.join("   "));
console.log("Print Array on Console Directly "+arr2.map((ele)=>{
    return (ele*ele)
}));


var temparr3=arr2.map((value,i)=>{
    if(i==2){
        return (value*value);
    }
});

console.log("Particular Index Wise Square--"+temparr3.join(" "));

function getsquare(value:number):number{
    return (value*value);
}

var temparr4=arr2.map(getsquare);
console.log(`
--------------------------
Using getSquare Method ${temparr4}
`);

//tuple
var arr3=[1,"Angular",true,10.5];

console.log("Using Tuple Array to Print "+arr3);
arr3.push("REACT JS");
console.log("Using Tuple Array to Print "+arr3);
console.log("Poped value is "+arr3.pop());

console.log(`
------------------------Splice Method Apply Before on Tuple-----
${arr3}
`);
arr3.splice(2,0,false);
console.log(`
------------------------Splice Method Apply After on Tuple-----
${arr3}
`);
arr3.splice(1,1,5);
console.log(`
------------------------Splice Method Apply After on Tuple-----
${arr3}
`);
var str:string='s';
arr3.splice(1,0,str.charCodeAt(0));
console.log(`
------------------------Asci Code  Splice Method Apply After on Tuple-----
${arr3}
`);

var arr4=[1,2,3,4,5,6];
var temparr5=arr4.slice(1,3).map((value)=>{
    return (value*value);
});

console.log(`
---------------------------------------
Using Slice Apply Map
${temparr5}
`)