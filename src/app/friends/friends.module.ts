import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent } from './friends.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';
import { NavebarComponent } from '../home/components/navebar/navebar.component';
import { StoreModule } from '@ngrx/store';
import { friendReducer } from './store/friend.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FriendEffects } from './store/friend.effects';

@NgModule({
  declarations: [FriendsComponent, CardComponent],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    SharedModule,
    StoreModule.forFeature('myFriends', friendReducer),
    EffectsModule.forFeature([FriendEffects]),
  ],
  exports: [SharedModule],
})
export class FriendsModule {}
