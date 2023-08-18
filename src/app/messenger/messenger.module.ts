import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessengerRoutingModule } from './messenger-routing.module';
import { MessengerComponent } from './messenger.component';
import { FormsModule } from '@angular/forms';
import { ConversationComponent } from './components/conversation/conversation.component';
import { MessageComponent } from './components/message/message.component';
import { ChatOnlineComponent } from './components/chat-online/chat-online.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MessengerComponent,
    ConversationComponent,
    MessageComponent,
    ChatOnlineComponent,
  ],
  providers: [],
  imports: [
    CommonModule,
    MessengerRoutingModule,
    FormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class MessengerModule {}
