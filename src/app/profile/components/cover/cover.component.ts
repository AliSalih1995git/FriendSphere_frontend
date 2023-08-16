import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MainServiceService } from 'src/app/service/main-service.service';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css'],
})
export class CoverComponent implements OnInit {
  @ViewChild('coverRef') coverRef!: ElementRef;
  @ViewChild('refInput') refInput!: ElementRef;
  @Input() visitor!: boolean;
  @Input() cover = '';
  @Input() user: any;
  @Input() photos: any = {};

  showCoverMenu = false;
  coverPicture: string = '';
  loading = false;
  show = false;
  error = '';

  constructor(
    private mainService: MainServiceService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.user = this.mainService.getUserData();
    console.log(this.cover, 'COVER');
    console.log(this.coverPicture, 'Selected image');
  }

  handleImage(event: any): void {
    const file = event.target.files[0];

    if (
      file.type !== 'image/jpeg' &&
      file.type !== 'image/png' &&
      file.type !== 'image/webp' &&
      file.type !== 'image/gif'
    ) {
      this.error = `${file.name} format is not supported.`;
      return;
    } else if (file.size > 1024 * 1024 * 5) {
      this.error = `${file.name} is too large, max 5mb allowed.`;
      return;
    }
    console.log(file, 'file');

    // this.coverPicture = event.target.result;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      this.coverPicture = event.target.result;
      console.log(this.coverPicture, 'this coverPicture');
    };
  }

  updateCoverPicture() {
    fetch(this.coverPicture)
      .then((response) => response.blob())
      .then((blob) => {
        const path = `${this.user.username}/cover_pictures`;
        const formData = new FormData();
        formData.append('file', blob);
        formData.append('path', path);

        this.profileService.uploadImage(formData).subscribe({
          next: (res: any) => {
            this.profileService.updateCover(res[0].url).subscribe({
              next: (updated_picture: any) => {
                if (updated_picture === 'ok') {
                  this.profileService
                    .createPost({
                      type: 'coverPicture',
                      background: null,
                      text: null,
                      images: [updated_picture.url],
                      user: this.user.id,
                    })
                    .subscribe({
                      next: (new_post: any) => {
                        console.log(new_post, 'new_post');

                        if (new_post === 'ok') {
                          this.loading = false;
                          this.coverPicture = '';
                          this.coverRef.nativeElement.style.backgroundImage = `url(${updated_picture.url})`;
                        } else {
                          this.loading = false;
                          this.error = new_post;
                        }
                      },
                      error: (error: any) => {
                        this.loading = false;
                        this.error =
                          error?.response?.data?.message || error.message;
                      },
                    });
                } else {
                  this.loading = false;
                  this.error = updated_picture;
                }
              },
              error: (error: any) => {
                this.loading = false;
                this.error = error?.response?.data?.message || error.message;
              },
            });
          },
          error: (error: any) => {
            this.loading = false;
            this.error = error?.response?.data?.message || error.message;
          },
        });
      })
      .catch((error) => {
        this.loading = false;
        this.error = error?.response?.data?.message || error.message;
      });
  }

  toggleShowCoverMenu(): void {
    this.showCoverMenu = !this.showCoverMenu;
  }

  navigateToShowOldCovers(): void {
    this.show = true;
  }
  setCoverPicture() {
    this.coverPicture = '';
  }
}
