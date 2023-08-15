import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByFolder',
})
export class CustomPipe implements PipeTransform {
  transform(photos: any[], folder: string): any[] {
    return photos.filter((photo) => photo.folder === folder);
  }
}
