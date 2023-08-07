import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavebarComponent } from './components/navebar/navebar.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavebarComponent,
    LeftSideComponent,
    RightSideComponent,
    DropDownComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
