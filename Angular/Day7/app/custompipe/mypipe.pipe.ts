import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"summary"
})
export class MyPipe implements PipeTransform
{
    transform(value: any, lowerlimit?:number,higherlimit?:number) {

        if(!value)
        {
            return null;
        }
        let temp=(<string> value );

        let actuallowerlimit=(lowerlimit)?lowerlimit:0;
        let actualhigherlimit=(higherlimit)?higherlimit:10;

        return (temp.substr(actuallowerlimit,actualhigherlimit)+"...");


        
    }



}