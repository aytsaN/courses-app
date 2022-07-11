import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creationDate'
})
export class CreationDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
