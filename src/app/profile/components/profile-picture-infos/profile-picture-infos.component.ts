import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-picture-infos',
  templateUrl: './profile-picture-infos.component.html',
  styleUrls: ['./profile-picture-infos.component.css'],
})
export class ProfilePictureInfosComponent implements OnInit {
  @Input() visitor!: boolean;
  @Input() profile: any;
  @Input() othername!: string;
  @Input() photos: any = {};
  @Input() user: any;

  openPopup: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  trackByFriendId(index: number, friend: any): string {
    return friend._id;
  }
  showProfilePicture(): void {
    this.openPopup = true;
  }
  onClosePopup() {
    this.openPopup = false;
  }
}
