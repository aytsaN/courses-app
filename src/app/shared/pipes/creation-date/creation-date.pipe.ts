import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'creationDate'
})
export class CreationDatePipe implements PipeTransform {

  transform(value: string): string | null {
    return new DatePipe('en-us').transform(value, 'dd.MM.yyyy');
  }

}
