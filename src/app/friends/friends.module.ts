import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent } from './friends.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';
import { NavebarComponent } from '../home/components/navebar/navebar.component';

@NgModule({
  declarations: [FriendsComponent, CardComponent],
  imports: [CommonModule, FriendsRoutingModule, SharedModule],
  exports: [SharedModule],
})
export class FriendsModule {}
