import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared/shared.module';
import { CoverComponent } from './components/cover/cover.component';
import { ProfilePictureInfosComponent } from './components/profile-picture-infos/profile-picture-infos.component';
import { PhotosComponent } from './components/photos/photos.component';
import { FriendsComponent } from './components/friends/friends.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { UpdateProfilePictureComponent } from './components/update-profile-picture/update-profile-picture.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './custom.pipe';
import { FilterByOtherFoldersPipe } from './filter-by-other-folders.pipe';
import { FriendshipComponent } from './components/friendship/friendship.component';

@NgModule({
  declarations: [
    ProfileComponent,
    CoverComponent,
    ProfilePictureInfosComponent,
    PhotosComponent,
    FriendsComponent,
    ProfilePictureComponent,
    UpdateProfilePictureComponent,
    CustomPipe,
    FilterByOtherFoldersPipe,
    FriendshipComponent,
  ],
  imports: [FormsModule, CommonModule, ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
