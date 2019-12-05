var arr:number[]=[];
console.log("Array Length "+arr.length);
//Principle LIFO=Last in First Out
arr.push(10);
arr.push(20);
arr.push(30);

// console.log("Array Value is "+arr);
// console.log("Using In Build Method "+arr.join(" "));
// console.log("Using In Build Method "+arr.join("@ "));
// console.log("Using In Build Method single qoute "+arr.join('@ '));
// console.log("Using In Build Method Optional Parameter "+arr.join());

var temp=arr.pop();
// console.log("Poped value is "+temp);
// console.log("Array value is "+arr);
// console.log("--------------------------------");
// console.log("Valuse is Pushed in Array "+arr.push(40));
// console.log("Array value is "+arr);

var arr1:number[]=[1,2,3,4];
// console.log("---------------------------");
// console.log("Array is arr1 "+arr1);

// arr1.splice(2,1);
// console.log("Delete 1 Element from Array "+arr1);

// arr1.splice(2,0,40);
// console.log("Insert value  1 Element Into Array "+arr1);
// arr1.splice(2,0,50);
// console.log("Print Array By Shravan bal "+arr1);
// console.log("------Delete the one form array "+arr1.splice(2,1));
// console.log("----- Array Length is "+arr1.length);


var arr2:number[]=[10,20,30,40];
console.log(`
------------------------------
Array Value is ${arr2}
`);
arr2.splice(2,0,11,12,13);
console.log("Array Added Value is "+arr2.join("  "));

arr2.splice(arr2.length,0,14,15,16);
console.log("Array Added Value is "+arr2.join("  "));

console.log("Deleted Multiple value "+arr2.splice(4,3));
console.log("After Deleted Multiple value "+arr2);

console.log("Print Array ---- "+arr2);
arr2.splice(2,1,88,99);

console.log("Deleted & Added ---- "+arr2);
arr2.splice(10,0,45,56,78);
console.log("---------------------");
console.log("Array Print ---- "+arr2);
console.log("Array Length ---- "+arr2.length);

var temparr=arr2.splice(3,4);
console.log("Collect Deleted Element is in TempArr "+temparr);

arr2.splice(2,arr2.length-2);
console.log("--------Print Array "+arr2);

console.log("-------Particular Index "+arr2[50]);