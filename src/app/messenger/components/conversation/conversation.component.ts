import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from '../../service/messenger.service';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
})
export class ConversationComponent implements OnInit {
  @Input() conversation: any;
  user: any;
  users: any | null = null;

  constructor(
    private messageService: MessengerService,
    private mainService: MainServiceService
  ) {}

  ngOnInit(): void {
    this.user = this.mainService.getUserData();
    this.getUser();
    // console.log(this.conversation, 'conversation');
  }

  getUser() {
    const friendId = this.conversation.members.find(
      (m: string) => m !== this.user.id
    );
    this.messageService.getUser(friendId).subscribe({
      next: (res) => {
        this.users = res;
        // console.log(this.users, 'this.users in conversation');
      },
      error: (err) => console.log(err),
    });
  }
}
