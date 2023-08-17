import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostServiceService } from '../../post-service.service';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-create-post-popup',
  templateUrl: './create-post-popup.component.html',
  styleUrls: ['./create-post-popup.component.css'],
})
export class CreatePostPopupComponent implements OnInit {
  @Input() visitor!: boolean;
  @Input() user!: any;
  @Output() setVisible: EventEmitter<boolean> = new EventEmitter<boolean>();

  showAddPost: boolean = false;
  loading: boolean = false;
  error: string = '';
  isEmojiPickerVisible: boolean = false;
  textArea: string = '';
  selectedImages: string[] = [];
  background: string = '';

  constructor(
    private postService: PostServiceService,
    private mainService: MainServiceService
  ) {}

  ngOnInit(): void {
    if (this.visitor == undefined) {
      this.visitor = true;
    }
  }

  addEmoji(event: any) {
    this.textArea = `${this.textArea}${event.emoji.native}`;
    this.isEmojiPickerVisible = false;
  }

  postSubmit() {
    this.loading = true;
    if (this.background) {
      this.createPostWithbackground();
    } else if (this.selectedImages) {
      this.uploadImagesAndCreatePost();
    } else {
      this.createTextPost();
    }
  }

  createPostWithbackground() {
    const payload = {
      type: null,
      background: this.background,
      text: this.textArea,
      images: null,
      user: this.user.id,
    };

    this.postService.createPost(payload).subscribe({
      next: (response: any) => {
        if (response) {
          this.clearForm();
          this.setVisible.emit(false);
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = 'An error occurred while creating the post.';
        this.loading = false;
      },
    });
  }

  uploadImagesAndCreatePost() {
    const postImages = this.selectedImages.map((img) =>
      this.mainService.dataURItoBlob(img)
    );

    const path = `${this.user.username}/post_images`;
    const formData = new FormData();
    formData.append('path', path);
    postImages.forEach((image) => {
      formData.append('file', image);
    });

    this.postService.uploadImages(formData).subscribe({
      next: (response: any) => {
        if (response) {
          this.createPostWithImages(response);
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = 'An error occurred while uploading images.';
        this.loading = false;
      },
    });
  }

  createPostWithImages(imagesResponse: any) {
    const payload = {
      type: null,
      background: null,
      text: this.textArea,
      images: imagesResponse,
      user: this.user.id,
    };

    this.postService.createPost(payload).subscribe({
      next: (response: any) => {
        if (response) {
          this.clearForm();
          this.setVisible.emit(false);
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = 'An error occurred while creating the post.';
        this.loading = false;
      },
    });
  }

  createTextPost() {
    const payload = {
      type: null,
      background: null,
      text: this.textArea,
      images: null,
      user: this.user.id,
    };

    this.postService.createPost(payload).subscribe({
      next: (response: any) => {
        if (response) {
          this.clearForm();
          this.setVisible.emit(false);
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = 'An error occurred while creating the post.';
        this.loading = false;
      },
    });
  }

  clearForm() {
    this.textArea = '';
    this.selectedImages = [];
    this.background = '';
  }
  closeHandler() {
    this.clearForm();
    this.setVisible.emit(false);
  }
  handleDataChange(event: any) {
    this.textArea = event.textArea;
    this.background = event.selectedBackground;
  }

  handleImagesSelected(event: any) {
    this.textArea = event.textArea;
    this.selectedImages = event.images;
  }
  showPreview() {
    this.showAddPost = !this.showAddPost;
  }
}
