import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css'],
})
export class ImagePreviewComponent implements OnInit {
  @Input() text!: string;
  @Input() user: any;
  @Input() setError: any;
  @Output() setShowPrev: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() imagesSelected: EventEmitter<{
    textArea: string;
    images: string[];
  }> = new EventEmitter<{ textArea: string; images: string[] }>();

  @ViewChild('imageInput', { static: false })
  imageInputRef!: ElementRef<HTMLInputElement>;

  images: string[] = [];
  ngClassObj: any = {};

  constructor() {}

  ngOnInit(): void {}

  handleImages(event: Event) {
    const files: FileList | null = (event.target as HTMLInputElement).files;

    if (!files) {
      return;
    }

    const images: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const img = files[i];

      if (!img.type.includes('image/') || img.size > 1024 * 1024 * 5) {
        this.setError(
          `${img.name} format is unsupported or size is too large (max 5MB allowed)`
        );
        continue;
      }

      const reader = new FileReader();

      reader.onload = (readerEvent) => {
        const imageDataURL = readerEvent.target?.result as string;
        images.push(imageDataURL);

        if (images.length === files.length) {
          this.setImages(images);
          this.emitSelectedImages(images);
        }
      };

      reader.readAsDataURL(img);
    }
  }

  setImages(images: string[]) {
    this.images = images;
  }

  getPreviewClass(): string {
    const imageCount = this.images.length;

    if (imageCount === 1) return 'preview1';
    if (imageCount === 2) return 'preview2';
    if (imageCount === 3) return 'preview3';
    if (imageCount === 4) return 'preview4';
    if (imageCount === 5) return 'preview5';
    if (imageCount % 2 === 0) return 'preview6';
    return 'preview6 singular_grid';
  }

  addMoreImages() {
    if (this.imageInputRef) {
      this.imageInputRef.nativeElement.click();
    }
  }

  removeImages() {
    this.images = [];
  }

  showPreview(): void {
    this.setShowPrev.emit(true);
  }

  emitSelectedImages(images: string[]) {
    console.log(this.text, 'text data');

    this.imagesSelected.emit({ images: images, textArea: this.text });
  }
}
