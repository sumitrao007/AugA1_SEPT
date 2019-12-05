//Rest parameter Function
function add(...num:number[]){
    for(let i=0;i<num.length;i++){
        console.log("Square of Element is "+(num[i]*num[i]));
    }
}

//add(1,2);
// console.log("-------------------------------");
// add(1,2,3,4,5);

//key & value Format
var myobj={
    firstname:"Shrvan",
    lastname:"Bala"
};
// console.log("First name is "+myobj.firstname);
// console.log("last name is "+myobj.lastname);

var myobj1={
    fname:"Sumit",
    lname:"Raokhande",
    id:1,
    Fullnmae:(firstname:string,lastname:string)=>{
        return (firstname+" "+lastname);
    }
};

// console.log("Full name of Emp "+myobj1.Fullnmae(myobj1.fname,myobj1.lname));
// console.log("Full name of Emp "+myobj1.Fullnmae("Shreya","Bhujbal"));
// console.log("Full name of Emp "+myobj1.Fullnmae(myobj.firstname,myobj.lastname));

//Array Of Object

var arrobj=[
    {
        firstname:"Manish",
        lastname:"Sinha",
        id:1,
        company:"Google",
        salary:100000
    },
    {
        firstname:"Kaustubh",
        lastname:"Ugale",
        id:2,
        
    },
    {
        firstname:"Sumit",
        lastname:"Raokhande",
        id:3,
        company:"Renuka Group",
        salary:100000
    }
];

// for (let i = 0; i < arrobj.length; i++) {
//     console.log("First Name "+arrobj[i].firstname);
//     console.log("First Name "+arrobj[i].salary);
//     console.log("First Name "+arrobj[i].company);
//     console.log("------------------------------------");

    
// }

// console.log("First name is "+arrobj[0].lastname);
// console.log("Object is "+arrobj);

var jsonindustry={
    status:"success",
    data:[
        {
            company:"Google",
            rank:1
        },
        {
            company:"IBM",
            rank:2
        },
        {
            company:"Infosys",
            rank:3
        }
    ],
    error:"Error"    
};

// console.log("My Status is "+jsonindustry.status);
// console.log("My erroe is "+jsonindustry.error);

// for (let i = 0; i < jsonindustry.data.length; i++) {
//     console.log(`
//     ----------------------------------------------------
//     Comapny is ${jsonindustry.data[i].company}
//     Rank is ${jsonindustry.data[i].rank}
//     `)
    
// }

var examobj=[
    {
        name:"XYZ",
        month:["Jan","Feb","March"],
        marks:[25,50,65]
    },
    {
        name:"XYZ1",
        month:["Jan","Feb","March"],
        marks:[5,50,55]
    },
    {
        name:"XYZ2",
        month:["Jan","Feb","March"],
        marks:[53,27,85]
    }
];

for (let i = 0; i < examobj.length; i++) {
   console.log("First Name Is "+examobj[i].name);
    for (let j = 0; j < examobj[i].month.length; j++) {
        
        console.log(`
        --------------------------
        First Object data is ${i} ${examobj[i].month[j]}

        Marks is ${examobj[i].marks[j]}
        `);
    }
}


