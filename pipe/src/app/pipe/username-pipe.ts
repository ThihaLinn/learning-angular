import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"userName"
})

export class userNamePipe implements PipeTransform{
    transform(value: any,hasRole?:boolean) {

        if(hasRole){
            return `${value?.name}, ${value?.role}`
        }

        return value?.name || ""  
    }
    
}

