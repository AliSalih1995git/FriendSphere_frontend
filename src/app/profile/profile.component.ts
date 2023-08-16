import { Component, Input, OnInit } from '@angular/core';
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
  @Input() username: string = '';
  @Input() user: any;
  @Input() photos: any = {};
  @Input() othername!: string;
  @Input() visitor: boolean = true;
  @Input() profile: any = {};

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

    this.getProfile();
    this.visitor = this.username === this.user.username ? false : true;
  }
  getProfile() {
    this.profileService.getUserData(this.username).subscribe({
      next: (res) => {
        if (res.ok === false) {
          this.router.navigate(['/profile']);
        } else {
          this.profile = res;
          this.othername = res?.username;

          this.listImage();
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
