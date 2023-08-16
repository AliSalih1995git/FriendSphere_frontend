import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavebarComponent } from './components/navebar/navebar.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { PostModule } from '../post/post.module';
import { SearchMenuComponent } from './components/search-menu/search-menu.component';
import { FormsModule } from '@angular/forms';
import { OrderByDatePipe } from './order-by-date.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    NavebarComponent,
    LeftSideComponent,
    RightSideComponent,
    DropDownComponent,
    SearchMenuComponent,
    OrderByDatePipe,
    OrderByDatePipe,
  ],
  imports: [CommonModule, HomeRoutingModule, PostModule, FormsModule],
  exports: [NavebarComponent],
})
export class HomeModule {}
