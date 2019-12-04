var a=[1,2,3,4];
var a1=[];
var a2=["Angular","React Js","MEAN Stack"];
var a4:number[]=[];
var a4:number[]=[1,2,3];

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);    
}

a.forEach(value => {
    console.log("Value of "+value)
});

a.forEach((value,i) => {
    console.log(`
            a[${i}]= ${value}
    `);
});

a.forEach((value,i,a) => {
    console.log(`
            a[${i}]= ${value}
            Array is ${a[i]}
    `);
});