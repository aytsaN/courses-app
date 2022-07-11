import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationCustom'
})
export class DurationCustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
