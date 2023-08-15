import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  @Input() photos: any = {};
  showAllPhotos: boolean = false;
  constructor() {}

  ngOnInit(): void {
    console.log(this.photos, 'Photos');
  }

  trackByPhotoId(index: number, photo: any): string {
    return photo.public_id;
  }
  AllPhotoVisible() {
    this.showAllPhotos = !this.showAllPhotos;
  }
  get visiblePhotos(): any[] {
    return this.showAllPhotos ? this.photos : this.photos?.slice(0, 9);
  }
}
