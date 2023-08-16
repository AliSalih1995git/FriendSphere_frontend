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
import { DisplayPostComponent } from './components/display-post/display-post.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { DisplayCommentComponent } from './components/display-comment/display-comment.component';

@NgModule({
  declarations: [
    PostComponent,
    CreatePostComponent,
    CreatePostPopupComponent,
    ImagePreviewComponent,
    AddToYourPostComponent,
    EmojiPickerComponent,
    DisplayPostComponent,
    CreateCommentComponent,
    DisplayCommentComponent,
  ],
  imports: [CommonModule, PostRoutingModule, FormsModule, PickerModule],
  exports: [PostComponent, CreatePostComponent, DisplayPostComponent],
})
export class PostModule {}
