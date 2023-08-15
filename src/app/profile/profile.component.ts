import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from './service/profile.service';
import { MainServiceService } from '../service/main-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  visible: boolean = false;
  username: string = '';
  user: any;
  photos: any = {};
  othername!: string;
  visitor: boolean = true;
  profile: any = {};

  constructor(
    private profileService: ProfileService,
    private mainService: MainServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.mainService.getUserData();
    const paramsValue = this.route.snapshot.params['username'];
    this.username =
      paramsValue === undefined ? this.user.username : paramsValue;
    console.log(paramsValue, 'Paramsvalue');

    this.getProfile();
    this.visitor = this.username === this.user.username ? false : true;
  }
  getProfile() {
    this.profileService.getUserData(this.username).subscribe({
      next: (res) => {
        if (res.ok === false) {
          this.router.navigate(['/profile']);
        } else {
          this.listImage();

          console.log(res, 'PROFILE');
          this.profile = res;
          this.othername = res?.otherName;
        }
      },

      error: (error) => console.log(error),
    });
  }
  listImage() {
    this.profileService
      .listImages({
        path: `${this.username}/*`,
        sort: 'desc',
        max: 30,
      })
      .subscribe({
        next: (res) => {
          this.photos = res;
          console.log(res, 'ListImages');
        },
        error: (error) => console.log(error),
      });
  }

  toggleVisible(): void {
    this.visible = !this.visible;
  }

  navigateToProfile(): void {
    this.router.navigate(['/profile']);
  }
}
