import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByDate',
})
export class OrderByDatePipe implements PipeTransform {
  transform(array: any[]): any[] {
    if (!Array.isArray(array) || array.length === 0) {
      return array;
    }

    return array
      .slice()
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }
}
