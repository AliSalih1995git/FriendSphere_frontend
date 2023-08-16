import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-update-profile-picture',
  templateUrl: './update-profile-picture.component.html',
  styleUrls: ['./update-profile-picture.component.css'],
})
export class UpdateProfilePictureComponent implements OnInit {
  // @Input() setImage: any;
  @Input() image: string = '';
  // @Input() setShow: any;
  @Input() user: any;
  @Output() setImage: EventEmitter<any> = new EventEmitter<any>();

  description: string = '';
  error: string = '';

  loading: boolean = false;
  imageResponse: any;
  postResponse: any;
  picture: any;

  constructor(private prfileService: ProfileService) {}
  ngOnInit(): void {
    console.log(this.image, 'this.image');
  }

  // async updateProfilePicture() {
  //   const path = `${this.user.username}/profile_picture`;
  //   let blob = await fetch(this.image).then((b) => b.blob());
  //   try {
  //     const formData = new FormData();
  //     formData.append('file', blob);
  //     formData.append('path', path);
  //     this.prfileService.uploadImage(formData).subscribe({
  //       next: (res) => {
  //         this.imageResponse = res;
  //         console.log(this.imageResponse, 'this.imageResponse.url');
  //         console.log(this.user.id, 'this.user.id');
  //       },
  //       error: (err) => console.log(err),
  //     });

  //     // Create post
  //     const postData = {
  //       type: 'profilePicture',
  //       text: this.description,
  //       images: [this.imageResponse.url],
  //       user: this.user.id,
  //     };
  //     console.log(postData, 'PostData');

  //     this.prfileService.createPost(postData).subscribe({
  //       next: (res) => {
  //         console.log(res, 'Posted success responce');

  //         this.postResponse = res;
  //       },
  //       error: (err) => console.log(err),
  //     });

  //     if (this.postResponse.status === 'ok') {
  //       this.loading = false;
  //       this.setImage.emit();
  //       console.log(this.imageResponse.url, 'this.imageResponse.url');

  //       this.image = this.imageResponse.url;
  //     } else {
  //       this.error = this.postResponse.message;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  async updateProfilePicture() {
    console.log('updateProfilePicture');

    try {
      const path = `${this.user.username}/profile_picture`;
      const blob = await fetch(this.image).then((response) => response.blob());

      // Upload Image
      const formData = new FormData();
      formData.append('file', blob);
      formData.append('path', path);

      this.prfileService.uploadImage(formData).subscribe({
        next: (res) => {
          console.log(res, 'uploadImage');

          this.prfileService.updateProfilePicture(res[0].url).subscribe({
            next: (res) => {
              if (res === 'ok') {
                this.imageResponse = res;
                console.log(this.imageResponse, 'this.imageResponse.url');
                this.createProfilePicturePost();
                // this.updateLocalstorage();
              }
            },
            error: (err) => console.log(err),
          });
        },
        error: (err) => console.log(err),
      });
    } catch (error) {
      console.log(error);
    }
  }

  private createProfilePicturePost() {
    const postData = {
      type: 'profilePicture',
      background: null,
      text: this.description,
      images: [this.imageResponse],
      user: this.user.id,
    };

    console.log(postData, 'postData');

    this.prfileService.createPost(postData).subscribe({
      next: (res) => {
        console.log('Posted success response', res);
        this.handlePostResponse(res);
      },
      error: (err) => console.log(err),
    });
  }

  private handlePostResponse(response: any) {
    if (response.status === 'ok') {
      this.loading = false;
      this.setImage.emit();
      console.log(this.imageResponse.url);
      this.image = this.imageResponse.url;
      this.setImage.emit();
    } else {
      this.error = response.message;
    }
  }

  private updateLocalstorage() {
    const existingData = JSON.parse(localStorage.getItem('user') || '{}');
    existingData.picture = this.imageResponse;
    localStorage.setItem('user', JSON.stringify(existingData));
  }
  cancelHandle() {
    this.setImage.emit();
  }
}
