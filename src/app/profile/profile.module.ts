import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared/shared.module';
import { CoverComponent } from './components/cover/cover.component';
import { ProfilePictureInfosComponent } from './components/profile-picture-infos/profile-picture-infos.component';

@NgModule({
  declarations: [ProfileComponent, CoverComponent, ProfilePictureInfosComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
