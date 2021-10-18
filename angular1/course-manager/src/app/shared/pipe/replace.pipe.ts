import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})

export class ReplacePipe implements PipeTransform{
    transform(value: String, char: string, valueToReplace: string){
        return value.replace(char, valueToReplace);
    }
}