import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from '../home/home.module';
import { PostModule } from '../post/post.module';

@NgModule({
  imports: [CommonModule, HomeModule, PostModule],
  declarations: [],
  exports: [HomeModule],
})
export class SharedModule {}
