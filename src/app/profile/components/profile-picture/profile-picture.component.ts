import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css'],
})
export class ProfilePictureComponent implements OnInit {
  @Input() openPopup!: boolean;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input() photos: any = {};
  @Input() user: any;

  @ViewChild('fileInput') fileInput: any;

  showUpload: boolean = false;

  image: string | null = null;
  error: string | null = null;

  constructor() {}

  ngOnInit(): void {
    console.log(this.image, 'First img');
  }

  handleImage(event: any): void {
    const file = event.target.files[0];
    console.log(file, 'selected img');

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

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.image = reader.result as string;
    };
  }

  selectImage(photoUrl: string): void {
    this.image = photoUrl;
    console.log(this.image, 'selected img');
  }

  clearError(): void {
    this.error = null;
  }
  closeToggle() {
    this.close.emit();
  }
  openUpload() {
    this.showUpload = !this.showUpload;
    this.fileInput.nativeElement.click();
  }
  setProfileImg(event: any) {
    this.image = '';
    this.close.emit();
  }
}
