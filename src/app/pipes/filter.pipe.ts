import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'lodash'
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterValue:any): string {
    console.log(arguments);
    let newArray = filter (value,function(el){
      return name ===filterValue;
    })
    
    return value;
  }

}
