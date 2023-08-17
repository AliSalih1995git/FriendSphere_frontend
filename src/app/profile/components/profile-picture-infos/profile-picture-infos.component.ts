import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from '../../service/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-profile-picture-infos',
  templateUrl: './profile-picture-infos.component.html',
  styleUrls: ['./profile-picture-infos.component.css'],
})
export class ProfilePictureInfosComponent implements OnInit {
  @Input() visitor!: boolean;
  @Input() profile: any = {};
  @Input() othername!: string;
  @Input() photos: any = {};
  @Input() user: any;
  @Input() username: string = '';

  openPopup: boolean = false;
  profileData: any = {};

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private mainService: MainServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.mainService.getUserData();
    const paramsValue = this.route.snapshot.params['username'];
    this.username =
      paramsValue === undefined ? this.user.username : paramsValue;

    this.getProfile();
    // this.profileData = this.profile;

    // console.log(this.profileData, 'this.profileData');
  }

  getProfile() {
    this.profileService.getUserData(this.username).subscribe({
      next: (res) => {
        if (res.ok === false) {
          this.router.navigate(['/profile']);
        } else {
          this.profile = res;
          this.othername = res?.username;
        }
      },

      error: (error) => console.log(error),
    });
  }

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
