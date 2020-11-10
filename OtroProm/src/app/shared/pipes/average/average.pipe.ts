import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform(list: number[]): number {
    return (list.reduce((previous, current) => current += previous) / list.length);
  }

}
