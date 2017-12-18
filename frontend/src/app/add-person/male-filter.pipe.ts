import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../person';

@Pipe({
  name: 'maleFilter'
})
export class MaleFilterPipe implements PipeTransform {

  transform(value: Person[]): any {
    if(value) {
      return value.filter(person => person.gender === 'M');  
    } else {
      return value;
    }
  }

}


