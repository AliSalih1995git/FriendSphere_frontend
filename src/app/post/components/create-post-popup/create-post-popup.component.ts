import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostServiceService } from '../../post-service.service';

@Component({
  selector: 'app-create-post-popup',
  templateUrl: './create-post-popup.component.html',
  styleUrls: ['./create-post-popup.component.css'],
})
export class CreatePostPopupComponent {
  @Input() user!: any;
  @Output() setVisible: EventEmitter<boolean> = new EventEmitter<boolean>();

  showAddPost: boolean = false;
  loading: boolean = false;
  error: string = '';
  isEmojiPickerVisible: boolean = false;
  public textArea: string = '';
  selectedImages: string[] = [];
  background: string = '';
  constructor(private postService: PostServiceService) {}

  addEmoji(event: any) {
    this.textArea = `${this.textArea}${event.emoji.native}`;
    this.isEmojiPickerVisible = false;
  }

  postSubmit() {
    this.loading = true;
    const payload = {
      type: null,
      background: this.background,
      text: this.textArea,
      images: this.selectedImages,
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

  closeHandler() {
    this.clearForm();
    this.setVisible.emit(false);
  }

  showPreview() {
    this.showAddPost = !this.showAddPost;
  }

  clearForm() {
    this.textArea = '';
    this.selectedImages = [];
    this.background = '';
  }

  handleDataChange(event: any) {
    this.textArea = event.textArea;
    this.background = event.selectedBackground;
  }

  handleImagesSelected(event: any) {
    this.textArea = event.textArea;
    this.selectedImages = event.images;
  }
}
