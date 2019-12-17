
export class MyServcie{

    getcourse(){
        let course=['Angular 7','React Js','Vue Js','MEAN Stack Development','Full Stack Development'];
        return course;
    }

    getArrCourse(){
        let arrobj=[
            {
                fname:"Sumit",
                lname:"Raokhande",
                fullname:(fname,lname)=>{
                    return (fname+" "+lname);
                }
            },
            {
                fname:"Kiran",
                lname:"Raokhande",
                fullname:(fname,lname)=>{
                    return (fname+" "+lname);
                }
            },
            {
                fname:"Spruha",
                lname:"Raokhande",
                fullname:(fname,lname)=>{
                    return (fname+" "+lname);
                }
            }
        ];

        return arrobj;

    }

}