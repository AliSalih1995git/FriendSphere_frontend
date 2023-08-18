import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostModule } from '../post/post.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [CommonModule, HomeModule, PostModule],
  declarations: [],
  exports: [HomeModule, PostModule],
})
export class SharedModule {}
