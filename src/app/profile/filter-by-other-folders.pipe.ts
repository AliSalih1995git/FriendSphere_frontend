import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByOtherFolders',
})
export class FilterByOtherFoldersPipe implements PipeTransform {
  transform(photos: any[], folder: string): any[] {
    let filteredResult = photos.filter((photo) => photo.folder !== folder);
    return filteredResult.slice(0, 12);
  }
}
