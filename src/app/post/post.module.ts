import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FormsModule } from '@angular/forms';
import { CreatePostPopupComponent } from './components/create-post-popup/create-post-popup.component';

@NgModule({
  declarations: [PostComponent, CreatePostComponent, CreatePostPopupComponent],
  imports: [CommonModule, PostRoutingModule, FormsModule],
  exports: [PostComponent],
})
export class PostModule {}
