import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FormsModule } from '@angular/forms';
import { CreatePostPopupComponent } from './components/create-post-popup/create-post-popup.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { AddToYourPostComponent } from './components/add-to-your-post/add-to-your-post.component';
import { EmojiPickerComponent } from './components/emoji-picker/emoji-picker.component';

@NgModule({
  declarations: [PostComponent, CreatePostComponent, CreatePostPopupComponent, ImagePreviewComponent, AddToYourPostComponent, EmojiPickerComponent],
  imports: [CommonModule, PostRoutingModule, FormsModule, PickerModule],
  exports: [PostComponent],
})
export class PostModule {}
