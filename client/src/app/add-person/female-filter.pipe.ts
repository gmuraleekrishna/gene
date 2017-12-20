import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../person';

@Pipe({
  name: 'femaleFilter'
})
export class FemaleFilterPipe implements PipeTransform {

  transform(value: Person[]): any {

    if(value) {
      return value.filter(person => person.gender === 'F');  
    } else {
      return value;
    }
  }

}
