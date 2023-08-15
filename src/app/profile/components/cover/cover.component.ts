import { Component, Input, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css'],
})
export class CoverComponent implements OnInit {
  @Input() visitor!: boolean;
  @Input() cover = '';
  @Input() photos: any = {};
  showCoverMenu = false;
  coverPicture = '';
  loading = false;
  show = false;
  error = '';
  user: any; // Update the type accordingly
  width: number | undefined;
  croppedAreaPixels: any; // Update the type accordingly

  constructor(private mainService: MainServiceService) {}

  ngOnInit(): void {
    this.user = this.mainService.getUserData();
    console.log(this.cover, 'COVER');
    console.log(this.visitor, 'Vicitor');
  }

  handleImage(event: any): void {
    // const file: File = event.target.files[0];
  }

  onCropComplete(croppedArea: any, croppedAreaPixels: any): void {
    this.croppedAreaPixels = croppedAreaPixels;
  }

  getCroppedImage(show: boolean): void {}

  updateCoverPicture(): void {}

  toggleShowCoverMenu(): void {
    this.showCoverMenu = !this.showCoverMenu;
  }

  navigateToShowOldCovers(): void {
    this.show = true;
  }
  setCoverPicture() {}
}
