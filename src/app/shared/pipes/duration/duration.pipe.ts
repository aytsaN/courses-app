import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationCustom'
})
export class DurationCustomPipe implements PipeTransform {

  transform(value: number): string | null {
    const m = value % 60;
    const h = (value - m) / 60;

    return `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}`;
  }

}
